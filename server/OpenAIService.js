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
    "occasion": string (optional, e.g., "formal dinner", "workout", "casual", "professional"),
    "activity": string (optional, activity the item will be used for),
    "location": string (optional, where the item will be used),
    "environment": string (optional, one of: "indoor", "outdoor", "both"),
    "priority_attributes": [string] (most important features mentioned),
    "appropriateness_rules": [string] (rules for what makes a product appropriate for this context),
    "gender_requirement": string (optional, "men", "women", "unisex", "children", etc.),
    "formality_level": string (optional, one of: "formal", "business", "casual", "athletic", "loungewear")
  },
  "confidence": float (0.0-1.0),
  "semantic_incompatibilities": [string] (optional, product types that would be semantically INAPPROPRIATE for this query)
}

CATEGORY TAXONOMY:
- "clothing" → For wearable items
- "electronics" → For tech, gadgets, devices
- "home" → For furniture, decor, kitchen items
- "beauty" → For cosmetics and personal care
- "accessories" → For bags, jewelry, watches, etc.
- "garden" → For outdoor, plants, landscaping
- "pet supplies" → For animal care items
- "books" → For reading materials
- "health" → For wellness, medical items

CONTEXTUAL UNDERSTANDING:
1. Gender-Specific Requirements:
   - When a query mentions "women's", "for women", "ladies", etc., ONLY women's products are appropriate
   - When a query mentions "men's", "for men", "guys", etc., ONLY men's products are appropriate
   - Items must STRICTLY match the gender requirement - this is a HARD FILTER

2. Formality Hierarchy (from most to least formal):
   - Formal: evening wear, dress shoes, suits, cocktail dresses
   - Business: business casual, office wear, blazers, dress shirts
   - Smart casual: polos, chinos, casual dresses
   - Casual: jeans, t-shirts, sneakers, everyday wear
   - Athletic: workout clothes, sports gear
   - Loungewear: pajamas, slippers, robes
   
3. Indoor vs. Outdoor Context Detection:
   - Indoor locations: gym, studio, office, home, mall, restaurant, classroom
   - Outdoor locations: trail, park, beach, garden, mountain, camping site
   - Indoor activities: workout, lifting, yoga, cooking, studying, meeting
   - Outdoor activities: hiking, running, camping, gardening, beach activities
   - Always specify the environment field as "indoor", "outdoor", or "both"
   - For indoor contexts, weather protection features like waterproofing are irrelevant
   - For outdoor contexts, weather protection may be important depending on the activity

4. Occasion-Appropriate Matching:
   - Products must be semantically appropriate for the stated occasion
   - Example: "formal dinner" requires formal attire, NEVER athletic or loungewear
   - Example: "hiking" requires outdoor/athletic gear, NEVER formal wear
   
5. Semantic Incompatibilities:
   - List product types that would be completely inappropriate for the query
   - For indoor activities, include outdoor-specific gear in incompatibilities
   - For outdoor activities, include non-weather-appropriate items if relevant

6. Bottom Wear Classification:
   - When a query mentions "pants", "trousers", "jeans", or "denim pants", the product_type should ALWAYS be "jeans" 
   - NEVER return skirts, jackets, or tops for pants/jeans queries
   - When "denim" is mentioned in relation to bottom wear, it refers to jeans
   - For pants queries, incompatible items include: skirts, dresses, shorts, tops, jackets

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
    "priority_attributes": ["age-appropriate"],
    "appropriateness_rules": ["suitable for children", "age-appropriate for 6 years", "not adult-oriented", "not hazardous"]
  },
  "confidence": 0.85,
  "semantic_incompatibilities": ["alcohol", "sharp tools", "makeup", "adult books"]
}

Query: "need women's shoes for fancy dinner"
{
  "product_type": "dress shoes",
  "category": "footwear",
  "subcategory": "women's shoes",
  "filters": ["women", "dressy", "formal"],
  "context": {
    "intent": "personal use",
    "occasion": "formal dinner",
    "environment": "indoor",
    "gender_requirement": "women",
    "formality_level": "formal",
    "appropriateness_rules": [
      "must be women's shoes only", 
      "must be formal", 
      "must be dressy", 
      "must be elegant", 
      "not casual", 
      "not athletic", 
      "not waterproof boots", 
      "not rain boots", 
      "not hiking footwear", 
      "not beach footwear",
      "not loungewear"
    ],
    "priority_attributes": ["style", "formal appearance"]
  },
  "confidence": 0.95,
  "semantic_incompatibilities": ["running shoes", "hiking boots", "slippers", "flip flops", "rain boots", "snow boots", "athletic shoes"]
}

Query: "I need something to wear for lifting at the gym"
{
  "product_type": "workout clothes",
  "category": "clothing",
  "subcategory": "activewear",
  "filters": ["athletic", "comfortable", "flexible"],
  "context": {
    "intent": "personal use",
    "occasion": "workout",
    "activity": "lifting",
    "location": "gym",
    "environment": "indoor",
    "formality_level": "athletic",
    "appropriateness_rules": [
      "must be suitable for exercise", 
      "must be comfortable",
      "must allow movement",
      "not formal wear",
      "not outdoor specific",
      "not waterproof gear",
      "not rain protection"
    ],
    "priority_attributes": ["comfort", "flexibility", "athletic performance"]
  },
  "confidence": 0.92,
  "semantic_incompatibilities": ["rain jacket", "waterproof coat", "formal wear", "business attire", "pajamas", "jeans"]
}

Query: "I need denim pants"
{
  "product_type": "jeans",
  "category": "clothing",
  "subcategory": "bottoms",
  "filters": ["denim"],
  "context": {
    "intent": "personal use",
    "environment": "both",
    "formality_level": "casual",
    "appropriateness_rules": [
      "must be pants/trousers",
      "must be denim material",
      "not skirts",
      "not shorts",
      "not jackets",
      "not tops"
    ],
    "priority_attributes": ["denim material", "proper fit"]
  },
  "confidence": 0.95,
  "semantic_incompatibilities": ["skirts", "dresses", "jackets", "shirts", "tops"]
}

Query: "hiking boots for mountain trails"
{
  "product_type": "hiking boots",
  "category": "footwear",
  "subcategory": "outdoor shoes",
  "filters": ["durable", "waterproof", "hiking"],
  "context": {
    "intent": "personal use",
    "activity": "hiking",
    "location": "mountain trails",
    "environment": "outdoor",
    "appropriateness_rules": [
      "must be suitable for rough terrain",
      "must provide ankle support",
      "must be durable",
      "ideally waterproof",
      "not formal wear",
      "not indoor specific"
    ],
    "priority_attributes": ["durability", "comfort", "traction", "weather protection"]
  },
  "confidence": 0.95,
  "semantic_incompatibilities": ["dress shoes", "high heels", "slippers", "loafers", "casual sneakers"]
}

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
7. For unfamiliar product types, focus on categorization rather than specific naming
8. Always include appropriateness_rules and make them COMPREHENSIVE and SPECIFIC
9. Always specify the environment (indoor/outdoor/both) when it can be determined
10. ALWAYS include gender_requirement when gender is specified in the query
11. ALWAYS include semantic_incompatibilities to explicitly list product types that would be inappropriate
12. If query mentions a gender, make sure to include a strict rule that ONLY products for that gender are appropriate
13. For any query about pants, jeans, trousers, or denim pants, ALWAYS set product_type to "jeans" and include skirts and jackets in semantic_incompatibilities`;

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

  // Ensure arrays exist and context is properly initialized
  normalized.filters = normalized.filters || [];
  
  // Initialize context if it doesn't exist
  if (!normalized.context) {
    normalized.context = {};
  }
  
  // Ensure priority_attributes exists
  normalized.context.priority_attributes = normalized.context.priority_attributes || [];
  
  // Ensure appropriateness_rules exists
  normalized.context.appropriateness_rules = normalized.context.appropriateness_rules || [];
  
  // Ensure semantic_incompatibilities exists
  normalized.semantic_incompatibilities = normalized.semantic_incompatibilities || [];

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
