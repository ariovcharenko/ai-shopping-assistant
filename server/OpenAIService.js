require('dotenv').config();
const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

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

User: "Pants I can bike in"
Output:
{
  "category": "clothing",
  "subcategory": "bottoms",
  "product_type": "pants",
  "filters": []
}
Explanation: No specific feature was mentioned (e.g., "stretchy", "breathable"), so no filter is applied.

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

User: "Men’s running shoes, size 10 wide"
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
  if (!OPENAI_API_KEY || OPENAI_API_KEY === 'your_openai_api_key_here') {
    console.error('OpenAI API key is not configured. Please set a valid API key in the .env file.');
    return {
      category: "api_key_missing",
      subcategory: "configuration_error",
      product_type: "openai_api",
      filters: ["requires_configuration"]
    };
  }

  try {
    console.log('Sending request to OpenAI with query:', query);

    // Add timeout and retry logic
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      timeout: 30000 // 30 second timeout
    };

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query }
      ],
      temperature: 0.3,
      max_tokens: 100
    };

    console.log('OpenAI request configuration:', {
      url: OPENAI_API_URL,
      model: requestData.model,
      temperature: requestData.temperature,
      max_tokens: requestData.max_tokens
    });

    const response = await axios.post(
      OPENAI_API_URL,
      requestData,
      axiosConfig
    );

    const content = response.data.choices[0].message.content.trim();
    console.log('AI Raw Response:', content);

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (parseErr) {
      console.error("Failed to parse JSON response from OpenAI:", content);
      return {
        category: "invalid_response",
        subcategory: "json_parse_error",
        product_type: "incomplete_data",
        filters: ["response_malformed"]
      };
    }

    if (!parsed.category || !parsed.subcategory || !parsed.product_type || !Array.isArray(parsed.filters)) {
      console.error("Incomplete AI response. One or more fields are missing:", parsed);
      return {
        category: "invalid_response",
        subcategory: "incomplete_data",
        product_type: "missing_fields",
        filters: ["response_incomplete"]
      };
    }

    if (parsed.filters.length === 0) {
      console.error("Empty filters array in AI response:", parsed);
      return {
        category: "invalid_response",
        subcategory: "incomplete_data",
        product_type: "empty_filters",
        filters: ["filters_required"]
      };
    }

    const fallbackTerms = ["unknown", "unrecognized", "general", "miscellaneous", "product", "unspecified"];
    const lower = (v) => (v || "").toLowerCase();
    const hasFallback = fallbackTerms.includes(lower(parsed.category)) ||
                        fallbackTerms.includes(lower(parsed.subcategory)) ||
                        fallbackTerms.includes(lower(parsed.product_type)) ||
                        (parsed.filters || []).some(f => fallbackTerms.includes(lower(f)));

    if (hasFallback) {
      console.warn("Fallback or generic values detected in AI output for query:", query);
      console.warn("Fallback details:", parsed);
      return {
        category: "fallback_detected",
        subcategory: "review_required",
        product_type: "ambiguous_output",
        filters: ["fallback_triggered"]
      };
    }

    console.log('Successfully parsed AI response:', parsed);
    return parsed;
  } catch (error) {
    console.error('Error analyzing search query:', error);

    // Enhanced error handling with more specific error types
    if (error.response) {
      console.error('API Error Response:', error.response.data);
      
      // Handle specific OpenAI API errors
      if (error.response?.data?.error?.code === 'insufficient_quota') {
        return {
          category: "api_error",
          subcategory: "quota_exceeded",
          product_type: "error_response",
          filters: ["insufficient_quota", "billing_required"]
        };
      } else if (error.response?.data?.error?.code === 'invalid_api_key') {
        return {
          category: "api_error",
          subcategory: "authentication",
          product_type: "error_response",
          filters: ["invalid_api_key", "check_credentials"]
        };
      } else if (error.response?.data?.error?.type === 'server_error') {
        return {
          category: "api_error",
          subcategory: "openai_server",
          product_type: "error_response",
          filters: ["server_error", "try_again_later"]
        };
      } else if (error.response?.data?.error?.type === 'rate_limit_exceeded') {
        return {
          category: "api_error",
          subcategory: "rate_limit",
          product_type: "error_response",
          filters: ["too_many_requests", "try_again_later"]
        };
      }
      
      // Generic API error with status code
      return {
        category: "api_error",
        subcategory: `http_${error.response.status}`,
        product_type: "error_response",
        filters: ["api_request_failed", error.response?.data?.error?.message || "unknown_error"]
      };
    } else if (error.code === 'ECONNABORTED') {
      // Timeout error
      console.error('Request timeout:', error.message);
      return {
        category: "api_error",
        subcategory: "timeout",
        product_type: "error_response",
        filters: ["request_timeout", "network_issue"]
      };
    } else if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
      // Network connectivity issues
      console.error('Network error:', error.message);
      return {
        category: "api_error",
        subcategory: "network",
        product_type: "error_response",
        filters: ["connection_failed", "check_internet"]
      };
    }
    
    // Fallback for any other errors
    return {
      category: "api_error",
      subcategory: "unknown_error",
      product_type: "error_response",
      filters: ["service_unavailable", error.message || "check_logs"]
    };
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
