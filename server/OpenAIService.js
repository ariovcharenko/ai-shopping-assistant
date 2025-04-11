require('dotenv').config();
const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const systemPrompt = `
You are a semantic product classification assistant. Interpret any natural-language product search query and return a strictly valid JSON object describing the user's intent.

Your output must always include the following 4 fields:

- category: the high-level product domain (e.g., "clothing", "electronics", "beauty")
- subcategory: a subdomain or more specific group within the category (e.g., "footwear", "audio", "hair care")
- product_type: the specific type of product the user is looking for (e.g., "sneakers", "headphones", "shampoo")
- filters: an array of attributes or modifiers that describe what the user wants (e.g., "white", "wireless", "eco-friendly", "for women", "budget-friendly")

⚠️ RULES:
- Output must be **strictly valid JSON only**.
- Do **NOT** include Markdown formatting, explanations, or fallback placeholders like "misc", "product", "unknown", or "general".
- \`filters\` must be a **non-empty array** of meaningful attributes.
- If a field is unclear, make a plausible and realistic guess — never leave it generic.

🧠 SPECIAL SEMANTIC RULES:
- If the query includes **"denim pants"**, or **"denim"** as a descriptor for pants, assume **"product_type": "jeans"**
- If the user mentions **"blue high-rise pants"** or **"comfy everyday pants in denim"**, treat these as **jeans**
- Do not return \`product_type\`: "pants" if the attributes include denim, blue, or jeans-like characteristics

✅ Example Outputs:

Query: "Looking for comfy everyday pants in denim"
{
  "category": "clothing",
  "subcategory": "bottoms",
  "product_type": "jeans",
  "filters": ["comfy", "denim", "casual"]
}

Query: "Show me white sneakers for women"
{
  "category": "clothing",
  "subcategory": "footwear",
  "product_type": "sneakers",
  "filters": ["white", "for women", "casual", "comfortable"]
}

Query: "Noise-cancelling headphones for studying"
{
  "category": "electronics",
  "subcategory": "audio",
  "product_type": "headphones",
  "filters": ["noise-cancelling", "for studying", "comfortable", "over-ear"]
}

You are now using **OpenAI's GPT model**, not DeepSeek. Do not refer to DeepSeek, fallback values, or system markdown.`;

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
