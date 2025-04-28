require('dotenv').config();
const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Product type and feature mapping for canonicalization
const CANONICAL_MAPPING = {
  product_types: {
    "denim pants": "jeans",
    "blue jeans": "jeans",
    "pants": "jeans",
    "trousers": "jeans",
    "denim": "jeans",
    "denim bottoms": "jeans",
    "denim trousers": "jeans",
    "jeans pants": "jeans",
    "wireless headphones": "headphones",
    "bluetooth headphones": "headphones",
    "wireless earbuds": "earbuds",
    "bluetooth earbuds": "earbuds",
    "athletic shoes": "running shoes",
    "sneakers": "running shoes",
    "tee": "t-shirt",
    "tee shirt": "t-shirt"
  },
  features: {
    "bluetooth": "wireless",
    "cordless": "wireless",
    "water resistant": "waterproof",
    "noise cancelling": "noise-canceling",
    "noise canceling": "noise-canceling",
    "workout": "athletic",
    "exercise": "athletic",
    "comfortable": "comfort"
  }
};

const SYSTEM_PROMPT = `You are an advanced product search interpreter that understands diverse shopping intents across multiple retail domains. Your task is to analyze natural language queries and extract structured product information that can be used to match catalog items.

OUTPUT FORMAT:
{
  "product_type": string (specific product or null if ambiguous),
  "category": string (primary product category),
  "subcategory": string (more specific category),
  "filters": [string] (explicit or implied attributes),
  "context": {
    "intent": string (e.g., "gifting", "personal use", "home improvement"),
    "recipient": string (optional, e.g., "self", "child", "friend"),
    "recipient_age": string (optional),
    "location": string (optional, e.g., "kitchen", "bathroom", "bedroom"),
    "activity": string (optional),
    "occasion": string (optional),
    "priority_attributes": [string] (key features emphasized)
  },
  "confidence": number (0.0-1.0)
}

DOMAIN RECOGNITION RULES:
1. Kitchen & Home:
   - If query mentions kitchen appliances, cookware, utensils, or food preparation → category: "kitchen"
   - If query mentions furniture, decor, bedding → category: "home goods"
   - If query mentions cleaning or organization → category: "home essentials"

2. Toys & Gifts:
   - If query mentions children, kids, or specific age groups → likely category: "toys" or "children's items"
   - If mentions "gift" + age/gender/occasion → determine appropriate gift category

3. Electronics:
   - If query mentions devices, gadgets, tech → category: "electronics"
   - Map to subcategories like "audio", "computing", "smart home" based on specifics

4. Clothing & Fashion:
   - If query mentions apparel, garments, clothes → category: "clothing"
   - Map to specific subcategories and types as currently implemented

5. General Shopping Intent:
   - Recognize browsing vs. specific product search
   - Handle expressions like "looking for something to..."
   - Understand gift-giving contexts

CATEGORY MAPPING:
- "kitchen" → For cooking tools, appliances, kitchenware
- "home goods" → For furniture, decor, bedding
- "electronics" → For tech devices, gadgets
- "toys" → For children's playthings
- "clothing" → For apparel items
- "footwear" → For shoes, boots, sneakers
- "accessories" → For wearable add-ons
- "beauty" → For cosmetics, skincare
- "sports" → For athletic equipment
- "automotive" → For car-related items
- "tools" → For DIY, repair items
- "garden" → For outdoor, plants, landscaping
- "pet supplies" → For animal care items
- "books" → For reading materials
- "health" → For wellness, medical items

CONTEXTUAL UNDERSTANDING:
1. Recipient Analysis:
   - Direct: "I need X" → self
   - Indirect: "Looking for X for my [relation]" → relation
   - Gender indicators: "for women", "men's" → gender:female/male
   - Age indicators: "for a 6 year old" → child, age:6

2. Location/Usage Context:
   - "for the kitchen" → location:kitchen
   - "to use at the gym" → location:gym, activity:exercise

3. Intent Recognition:
   - "gift for" → intent:gifting
   - "something to help with" → intent:problem-solving
   - "need to replace my" → intent:replacement

4. Priority Extraction:
   - Recognize emphasized features or requirements
   - Note budget constraints or quality expectations

EXAMPLES:

Query: "Looking for a gift for a 6 year old"
{
  "product_type": null,
  "category": "toys",
  "subcategory": "children's toys",
  "filters": ["age-appropriate", "child"],
  "context": {
    "intent": "gifting",
    "recipient": "child",
    "recipient_age": "6 years",
    "priority_attributes": ["age-appropriate"]
  },
  "confidence": 0.85
}

Query: "Something for my kitchen to make smoothies"
{
  "product_type": "blender",
  "category": "kitchen",
  "subcategory": "small appliances",
  "filters": ["food processing"],
  "context": {
    "intent": "food preparation", 
    "location": "kitchen",
    "activity": "making smoothies",
    "priority_attributes": ["blending capability"]
  },
  "confidence": 0.9
}

Query: "Something for women to wear at the gym"
{
  "product_type": null,
  "category": "clothing",
  "subcategory": "activewear",
  "filters": ["women's", "athletic"],
  "context": {
    "recipient": "women",
    "location": "gym",
    "activity": "exercise",
    "intended_use": "workout",
    "priority_attributes": ["athletic performance"]
  },
  "confidence": 0.9
}

Query: "looking for noise canceling headphones for travel"
{
  "product_type": "headphones",
  "category": "electronics",
  "subcategory": "audio",
  "filters": ["noise-canceling", "portable"],
  "context": {
    "activity": "traveling",
    "intended_use": "mobile audio",
    "priority_attributes": ["noise-canceling"]
  },
  "confidence": 0.9
}

CANONICALIZATION RULES:
- Apply existing product type and feature mapping
- For ambiguous queries, set product_type to null and focus on category/subcategory
- When specific product isn't clear, infer the most likely category based on context
- Use confidence score to indicate certainty of mapping

CONFIDENCE SCORING:
- 0.9-1.0: Explicit product type and clear intent
- 0.7-0.9: Clear category but ambiguous product type
- 0.5-0.7: General intent but needs clarification
- Below 0.5: Very ambiguous query

IMPORTANT RULES:
1. Always return valid, properly formatted JSON
2. Do not make up product types - use null if ambiguous
3. Prioritize accuracy over completeness
4. Focus on identifying the appropriate retail domain first, then narrow down
5. Recognize when a query is too vague and reflect that in the confidence score
6. Handle mixed intents by focusing on the primary purpose
7. For unfamiliar product types, focus on categorization rather than specific naming`;

async function analyzeSearchQuery(query) {
  try {
    console.log('Analyzing search query:', query);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT
        },
        {
          role: 'user',
          content: query
        }
      ],
      temperature: 0.3,
    });

    const rawResult = response.choices[0].message.content;
    console.log('Raw OpenAI response:', rawResult);

    const parsedResult = JSON.parse(rawResult);
    
    // Canonicalize the results
    const normalizedResult = canonicalizeSearchParams(parsedResult);
    console.log('Normalized search parameters:', normalizedResult);

    // Log the interaction
    await logInteraction({
      timestamp: new Date().toISOString(),
      query,
      raw_intent: parsedResult,
      normalized_intent: normalizedResult
    });

    return normalizedResult;

  } catch (error) {
    console.error('Error in analyzeSearchQuery:', error);
    throw error;
  }
}

function canonicalizeSearchParams(params) {
  // Deep clone the params to avoid modifying the original
  const normalized = JSON.parse(JSON.stringify(params));

  // Normalize product type
  if (normalized.product_type) {
    const lowercaseType = normalized.product_type.toLowerCase();
    normalized.product_type = CANONICAL_MAPPING.product_types[lowercaseType] || lowercaseType;
  }

  // Normalize filters
  if (normalized.filters && Array.isArray(normalized.filters)) {
    normalized.filters = normalized.filters.map(filter => {
      const lowercaseFilter = filter.toLowerCase();
      return CANONICAL_MAPPING.features[lowercaseFilter] || lowercaseFilter;
    });
  }

  // Ensure arrays exist
  normalized.filters = normalized.filters || [];
  if (normalized.context) {
    normalized.context.priority_attributes = normalized.context.priority_attributes || [];
  }

  return normalized;
}

async function logInteraction(interaction) {
  try {
    const logPath = path.join(__dirname, 'data', 'prompt_history.jsonl');
    const logEntry = JSON.stringify(interaction) + '\n';
    
    await fs.promises.appendFile(logPath, logEntry);
    
    // Update performance metrics
    await updatePerformanceMetrics(interaction);
  } catch (error) {
    console.error('Error logging interaction:', error);
  }
}

async function updatePerformanceMetrics(interaction) {
  try {
    const metricsPath = path.join(__dirname, 'data', 'performance_metrics.jsonl');
    const metrics = {
      timestamp: interaction.timestamp,
      query_type: getQueryType(interaction.query),
      intent_confidence: interaction.raw_intent.confidence || calculateIntentConfidence(interaction.raw_intent),
      normalization_changes: countNormalizationChanges(
        interaction.raw_intent, 
        interaction.normalized_intent
      )
    };

    await fs.promises.appendFile(metricsPath, JSON.stringify(metrics) + '\n');
  } catch (error) {
    console.error('Error updating metrics:', error);
  }
}

function getQueryType(query) {
  // Analyze query complexity and type
  const hasFilters = /with|that is|that are|featuring/.test(query);
  const hasContext = /for|when|while|during/.test(query);
  const hasConstraints = /under|less than|more than|between/.test(query);
  
  return {
    hasFilters,
    hasContext,
    hasConstraints,
    complexity: [hasFilters, hasContext, hasConstraints].filter(Boolean).length
  };
}

function calculateIntentConfidence(rawIntent) {
  // Calculate confidence based on intent completeness and specificity
  let confidence = 1.0;
  
  if (!rawIntent.product_type) confidence -= 0.3;
  if (!rawIntent.category) confidence -= 0.2;
  if (!rawIntent.filters?.length) confidence -= 0.1;
  if (!rawIntent.context?.activity) confidence -= 0.1;
  
  return Math.max(0, confidence);
}

function countNormalizationChanges(raw, normalized) {
  let changes = 0;
  
  if (raw.product_type !== normalized.product_type) changes++;
  
  const rawFilters = new Set(raw.filters || []);
  const normalizedFilters = new Set(normalized.filters || []);
  changes += Math.abs(normalizedFilters.size - rawFilters.size);
  
  return changes;
}

module.exports = {
  analyzeSearchQuery,
  canonicalizeSearchParams,
  CANONICAL_MAPPING
};
