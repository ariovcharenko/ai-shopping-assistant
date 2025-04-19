require('dotenv').config();
const { OpenAI } = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const systemPrompt = `
You are a product search interpreter that turns natural-language shopping queries into structured JSON objects. Your job is to understand what the user *explicitly* asked for — without guessing hidden intent or aesthetic preferences.

Your response should include the following fields:
{
  "category": string (e.g., "clothing", "electronics"),
  "subcategory": string (e.g., "tops", "audio"),
  "product_type": string (e.g., "t-shirt", "headphones"),
  "filters": array of strings representing only clearly stated requirements
}

🛑 CRITICAL GUIDELINES (No Exceptions):
- Only include filters explicitly mentioned or strongly implied by the user. Do not make subjective assumptions such as 'comfy', 'modern', or 'trendy' unless those exact words are used.
- DO NOT infer preferences like "modern", "stylish", "durable", "premium", or "elegant" unless the query uses those exact terms.
- DO NOT convert metaphorical or subjective expressions into filters. If someone says "comfy pants," only include the "comfy" filter if it's a searchable feature in the product catalog. Otherwise, skip it.
- DO NOT fabricate use-cases like "Zoom meetings" or "travel" unless they are explicitly mentioned.
- DO NOT invent new terms or over-generalize (e.g., avoid adding "versatile" or "multi-purpose" if it's not in the query).
- You may return an empty filters array. This is acceptable and often correct when the user doesn't provide additional criteria.
- NEVER default to "general" or "unspecified" for any field.
- Be strict. Better to under-specify than over-specify.

✅ SPECIAL PRODUCT TYPE MAPPINGS (IMPORTANT):
- For queries about "denim pants" or similar, always use product_type: "jeans"
- For queries about gifts for children or kids, use product_type: "educational toy"
- For queries about warm jackets for outdoor activities like camping, use product_type: "fleece jacket"

✅ WHAT TO INCLUDE IN FILTERS:
- Quantities ("set of 4", "pack of 6")
- Sizes, colors, materials, or measurements ("XL", "black", "leather", "10 ft", "queen size")
- Objective features ("wireless", "noise cancellation", "dishwasher safe", "waterproof")
- Budget constraints ("under $50", "cheap")
- Age or gender targets ("men's", "kids", "baby")
- Features that appear in product metadata

📌 EXAMPLES

User: "Looking for a queen size mattress with firm support"
Output:
{
  "category": "furniture",
  "subcategory": "bedroom",
  "product_type": "mattress",
  "filters": ["queen size", "firm support"]
}

User: "Need earbuds for my commute"
Output:
{
  "category": "electronics",
  "subcategory": "audio",
  "product_type": "earbuds",
  "filters": []
}
Explanation: The phrase "for my commute" is too vague. Do not add "portable" or "noise canceling" unless explicitly stated.

User: "Need denim pants"
Output:
{
  "category": "clothing",
  "subcategory": "bottoms",
  "product_type": "jeans",
  "filters": ["denim"]
}

User: "Gift for a 6-year-old"
Output:
{
  "category": "toys",
  "subcategory": "educational",
  "product_type": "educational toy",
  "filters": ["6-year-old"]
}

User: "Warm jacket for camping"
Output:
{
  "category": "clothing",
  "subcategory": "outerwear",
  "product_type": "fleece jacket",
  "filters": ["warm"]
}

User: "Need a yoga mat 6mm thick"
Output:
{
  "category": "sports",
  "subcategory": "fitness",
  "product_type": "yoga mat",
  "filters": ["6mm thick"]
}

User: "Looking for headphones"
Output:
{
  "category": "electronics",
  "subcategory": "audio",
  "product_type": "headphones",
  "filters": []
}

User: "Men's running shoes, size 10 wide"
Output:
{
  "category": "footwear",
  "subcategory": "athletic",
  "product_type": "running shoes",
  "filters": ["men's", "size 10", "wide"]
}

✳️ FORMAT STRICTLY:
- Output must be valid JSON only. No explanations, comments, or Markdown formatting.
`;

async function analyzeSearchQuery(query) {
  try {
    console.log('Sending query to OpenAI:', query);
    
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: query,
        },
      ],
      temperature: 0.3,
    });

    const result = response.choices[0].message.content;
    console.log('OpenAI response:', result);
    
    return JSON.parse(result);
  } catch (error) {
    console.error('❌ OpenAI API error:', error.message);
    console.error('Stack trace:', error.stack);
    console.error('Response data:', error.response?.data);
    throw new Error('Failed to analyze query using OpenAI.');
  }
}

function logUserInteraction(query, aiOutput, success) {
  const interaction = {
    timestamp: new Date().toISOString(),
    query,
    aiOutput,
    success
  };

  console.log('User interaction logged:', interaction);

  return interaction;
}

module.exports = {
  analyzeSearchQuery,
  logUserInteraction
};
