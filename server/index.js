require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const net = require('net');
const productCatalog = (() => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'product-catalog.json'), 'utf8');
    const products = JSON.parse(data);
    console.log(`Successfully loaded ${products.length} products from catalog`);
    return products.map(product => ({
      id: parseInt(product.id),
      name: product.name,
      category: product.category,
      subcategory: product.subcategory,
      product_type: product.product_type,
      filters: product.filters || []
    }));
  } catch (error) {
    console.error('Error loading product catalog:', error);
    return [];
  }
})();
// Import OpenAIService
const OpenAIService = require('./OpenAIService');


// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  console.log('Creating data directory:', dataDir);
  fs.mkdirSync(dataDir, { recursive: true });
}

// Check if prompt_history.jsonl exists, create it if not
const evalDatasetPath = path.join(dataDir, 'prompt_history.jsonl');
if (!fs.existsSync(evalDatasetPath)) {
  console.log('Creating empty prompt_history.jsonl file');
  fs.writeFileSync(evalDatasetPath, '', 'utf8');
}
const analyzeSearchQuery = OpenAIService.analyzeSearchQuery;
const logUserInteraction = OpenAIService.logUserInteraction;
console.log('Successfully imported OpenAIService');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5004;
console.log('Environment PORT:', process.env.PORT);
console.log('Using PORT:', PORT);

// Check if port is available
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is already in use`);
        resolve(false);
      } else {
        console.error('Error checking port availability:', err);
        resolve(false);
      }
    });
    
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    
    server.listen(port);
  });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// Simple in-memory storage for user interactions (in a real app, this would be a database)
const userInteractions = [];

// Helper function to filter products based on search parameters
function filterProducts(searchParams) {
  // Enhanced category mapping with more flexible matching
  let categoryMapping = {
    'clothing': ['women', 'men', 'unisex', 'clothing', 'apparel', 'fashion', 'tops', 'bottoms', 'footwear', 't-shirts', 'shirts', 'tees'],
    'electronics': ['electronics', 'unisex', 'audio', 'computers', 'phones'],
    'home': ['home', 'household', 'unisex', 'furniture', 'bedding', 'mattress', 'bedroom', 'living room'],
    'furniture': ['furniture', 'home', 'unisex', 'bedroom', 'living room', 'office', 'bedding', 'mattress', 'beds'],
    'bedding': ['bedding', 'mattress', 'bedroom', 'furniture', 'home'],
    'beauty': ['beauty', 'unisex', 'personal care'],
    'kitchen': ['kitchen', 'home', 'unisex', 'cookware', 'appliances'],
    'outdoor': ['outdoor', 'sports', 'unisex', 'camping', 'hiking'],
    'office': ['office', 'furniture', 'unisex', 'supplies'],
    'travel': ['travel', 'accessories', 'unisex', 'luggage'],
    'sports': ['sports', 'outdoor', 'unisex', 'fitness'],
    'footwear': ['footwear', 'unisex', 'shoes', 'boots', 'sneakers'],
    'accessories': ['accessories', 'unisex', 'jewelry', 'bags'],
    'pet supplies': ['pet supplies', 'unisex', 'pets'],
    'toys': ['toys', 'unisex', 'games'],
    'books': ['books', 'unisex', 'media'],
    'health': ['health', 'unisex', 'medical'],
    'baby': ['baby', 'unisex', 'kids'],
    'garden': ['garden', 'outdoor', 'unisex', 'lawn'],
    'eyewear': ['eyewear', 'accessories', 'unisex', 'glasses']
  };
  
  // Subcategory mapping for better matching
  const subcategoryMapping = {
    'bedding': ['mattress', 'bedroom', 'bed', 'sleep'],
    'mattress': ['bedding', 'bedroom', 'bed', 'sleep'],
    'bedroom': ['bedding', 'mattress', 'bed', 'sleep'],
    'clothing': ['tops', 't-shirts', 'shirts', 'apparel', 'wear'],
    'tops': ['t-shirts', 'shirts', 'clothing', 'apparel']
  };
  
  return productCatalog.filter(product => {
    // Enhanced category matching
    if (searchParams.category) {
      const mappedCategories = categoryMapping[searchParams.category.toLowerCase()] || [];
      const productCategoryLower = product.category.toLowerCase();
      const searchCategoryLower = searchParams.category.toLowerCase();
      
      // More flexible category matching
      const categoryMatch = mappedCategories.some(cat => 
        cat.toLowerCase() === productCategoryLower ||
        productCategoryLower.includes(cat.toLowerCase()) ||
        cat.toLowerCase().includes(productCategoryLower) ||
        productCategoryLower.split(' ').some(word => cat.toLowerCase().includes(word)) ||
        cat.toLowerCase().split(' ').some(word => productCategoryLower.includes(word))
      );
      
      if (!categoryMatch && 
          !productCategoryLower.includes(searchCategoryLower) &&
          !searchCategoryLower.includes(productCategoryLower)) {
        return false;
      }
    }
    
    // Enhanced subcategory matching with mapping
    if (searchParams.subcategory) {
      const searchSubCat = searchParams.subcategory.toLowerCase();
      const productSubCat = product.subcategory.toLowerCase();
      
      // Get mapped subcategories
      const mappedSubcategories = subcategoryMapping[searchSubCat] || [];
      const productMappedSubcategories = subcategoryMapping[productSubCat] || [];
      
      // Check for matches including mapped subcategories
      const subcategoryMatch = 
        productSubCat.includes(searchSubCat) ||
        searchSubCat.includes(productSubCat) ||
        mappedSubcategories.some(sub => productSubCat.includes(sub.toLowerCase())) ||
        productMappedSubcategories.some(sub => searchSubCat.includes(sub.toLowerCase())) ||
        productSubCat.split(' ').some(word => searchSubCat.includes(word)) ||
        searchSubCat.split(' ').some(word => productSubCat.includes(word)) ||
        productSubCat.split('-').some(part => searchSubCat.includes(part)) ||
        searchSubCat.split('-').some(part => productSubCat.includes(part));
      
      if (!subcategoryMatch) {
        return false;
      }
    }
    
    // Enhanced product type matching
    if (searchParams.product_type) {
      const searchType = searchParams.product_type.toLowerCase();
      const productType = product.product_type.toLowerCase();
      
      // More flexible product type matching
      const searchWords = searchType.split(/[\s-]+/);
      const productWords = productType.split(/[\s-]+/);
      
      const hasMatch = searchWords.some(word => 
        productWords.some(pWord => 
          pWord.includes(word) || word.includes(pWord) ||
          pWord.split('-').some(part => word.includes(part)) ||
          word.split('-').some(part => pWord.includes(part)) ||
          pWord.split(' ').some(part => word.includes(part)) ||
          word.split(' ').some(part => pWord.includes(part))
        )
      );
      
      if (!hasMatch) {
        return false;
      }
    }
    
    // Match filters/attributes (at least one filter should match if filters are provided)
    if (searchParams.filters && searchParams.filters.length > 0) {
      const hasMatchingAttribute = searchParams.filters.some(filter => 
        product.filters.some(attr => {
          // Normalize both strings for comparison: lowercase and replace hyphens/underscores with spaces
          const normalizedFilter = filter.toLowerCase().replace(/[-_]/g, ' ');
          const normalizedAttr = attr.toLowerCase().replace(/[-_]/g, ' ');
          
          // Split into words and check for word-level matches
          const filterWords = normalizedFilter.split(' ');
          const attrWords = normalizedAttr.split(' ');
          
          return filterWords.some(word => 
            attrWords.some(aWord => 
              aWord.includes(word) || word.includes(aWord)
            )
          );
        })
      );
      
      if (!hasMatchingAttribute) {
        return false;
      }
    }
    
    return true;
  });
}

// Function to check for generic/fallback values in AI output
function checkForGenericValues(output) {
  const genericCategories = ['general', 'miscellaneous', 'product', 'unspecified', 'unknown', 'unrecognized'];
  const hasGenericCategory = genericCategories.includes(output.category?.toLowerCase());
  const hasGenericSubcategory = genericCategories.includes(output.subcategory?.toLowerCase());
  const hasGenericProductType = genericCategories.includes(output.product_type?.toLowerCase());
  const hasGenericFilters = output.filters?.some(filter => 
    genericCategories.includes(filter.toLowerCase())
  );
  
  return {
    hasGenericValues: hasGenericCategory || hasGenericSubcategory || hasGenericProductType || hasGenericFilters,
    details: {
      category: hasGenericCategory,
      subcategory: hasGenericSubcategory,
      productType: hasGenericProductType,
      filters: hasGenericFilters
    }
  };
}

// Function to log unrecognized queries for prompt improvement
function logUnrecognizedQuery(query, output) {
  const logEntry = {
    query,
    output,
    timestamp: new Date().toISOString(),
    reviewed: false
  };
  
  console.log('Unrecognized query logged for prompt improvement:', logEntry);
  
  // In a real application, this would be stored in a database or file
  // For example:
  // fs.appendFileSync('unrecognized_queries.json', JSON.stringify(logEntry) + '\n');
  
  return logEntry;
}

function normalizeProductOutput(output) {
  const synonymMap = {
    "pants": {
      context: "denim",
      replaceWith: "jeans"
    },
    "blouse": {
      context: "silk",
      replaceWith: "shirt"
    },
    "hoodie": {
      context: "comfy",
      replaceWith: "sweatshirt"
    }
  };

  // Normalize plural forms
  const pluralMap = {
    't-shirts': 't-shirt',
    'shirts': 'shirt',
    'pants': 'pant',
    'jeans': 'jean',
    'shoes': 'shoe',
    'boots': 'boot',
    'headphones': 'headphone'
  };

  const normalized = { ...output };

  // Normalize product_type using context
  for (const [term, rule] of Object.entries(synonymMap)) {
    if (
      normalized.product_type?.toLowerCase() === term &&
      normalized.filters?.some(f => f.toLowerCase().includes(rule.context))
    ) {
      normalized.product_type = rule.replaceWith;
    }
  }

  // Normalize plural forms
  if (normalized.product_type) {
    const productTypeLower = normalized.product_type.toLowerCase();
    if (pluralMap[productTypeLower]) {
      normalized.product_type = pluralMap[productTypeLower];
    }
  }

  return normalized;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// API endpoint for search
app.post('/api/search', async (req, res) => {
  try {
    const { query } = req.body;
    console.log('Processing search query:', query);

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Invalid query' });
    }
    
    try {
      // Analyze the search query using OpenAI
      const searchParams = await analyzeSearchQuery(query);
      console.log('OpenAI search parameters:', searchParams);
      
      // Normalize the search parameters
      const normalizedParams = normalizeProductOutput(searchParams);
      console.log('Normalized search parameters:', normalizedParams);
      
      // Check for generic values in the AI output
      const genericCheck = checkForGenericValues(normalizedParams);
      
      // Filter products based on the normalized search parameters
      const matchingProducts = filterProducts(normalizedParams);
      console.log(`Found ${matchingProducts.length} matching products`);
      
      // Log the interaction (without success flag for now)
      const interaction = {
        timestamp: new Date().toISOString(),
        query,
        aiOutput: normalizedParams,
        results: matchingProducts.length,
        hasGenericValues: genericCheck.hasGenericValues,
        genericValueDetails: genericCheck.details,
        success: null // Will be updated when user provides feedback
      };
      
      // Store the interaction
      userInteractions.push(interaction);

      try {
        // Log interaction to file for evaluation dataset
        fs.appendFileSync(
          evalDatasetPath,
          JSON.stringify(interaction) + '\n',
          'utf8'
        );
        console.log('Interaction logged to evaluation dataset');
      } catch (fileError) {
        console.error('Error writing to evaluation dataset file:', fileError);
      }
      
      // Log warning if generic values were detected
      if (genericCheck.hasGenericValues) {
        console.warn(`Warning: Generic values detected in AI output for query "${query}":`, genericCheck.details);
        
        // Log unrecognized query for prompt improvement
        logUnrecognizedQuery(query, normalizedParams);
      }
      
      // Return the search results
      res.json({
        searchParams: normalizedParams,
        products: matchingProducts,
        interactionId: userInteractions.length - 1, // Reference for feedback
        hasGenericValues: genericCheck.hasGenericValues
      });
    } catch (openaiError) {
      console.error('OpenAI API error:', openaiError.message);
      console.error('Stack trace:', openaiError.stack);
      console.error('Response data:', openaiError.response?.data);
      res.status(500).json({ error: `OpenAI API error: ${openaiError.message}` });
    }
  } catch (error) {
    console.error('Search error:', error);
    
    // Provide more detailed error information
    let errorMessage = 'An error occurred during search';
    
    if (error.response) {
      console.error('API Error Response:', error.response.data);
      errorMessage += `: ${error.response.data.error || error.message}`;
    } else if (error.message) {
      errorMessage += `: ${error.message}`;
    }
    
    res.status(500).json({ error: errorMessage });
  }
});

// API endpoint for feedback
app.post('/api/feedback', (req, res) => {
  try {
    const { interactionId, success } = req.body;
    
    if (interactionId === undefined || success === undefined) {
      return res.status(400).json({ error: 'Interaction ID and success flag are required' });
    }
    
    if (interactionId < 0 || interactionId >= userInteractions.length) {
      return res.status(404).json({ error: 'Interaction not found' });
    }
    
    // Update the success flag
    userInteractions[interactionId].success = success;
    
    // In a real application, we would save this to a database or file
    
    // Return success
    res.json({ success: true });
  } catch (error) {
    console.error('Feedback error:', error);
    res.status(500).json({ error: 'An error occurred while processing feedback' });
  }
});

// API endpoint to get evaluation metrics
app.get('/api/metrics', (req, res) => {
  try {
    // Filter interactions with feedback
    const interactionsWithFeedback = userInteractions.filter(
      interaction => interaction.success !== null
    );
    
    if (interactionsWithFeedback.length === 0) {
      return res.json({
        totalInteractions: 0,
        successRate: 0,
        averageResults: 0
      });
    }
    
    // Calculate metrics
    const totalInteractions = interactionsWithFeedback.length;
    const successfulInteractions = interactionsWithFeedback.filter(
      interaction => interaction.success
    ).length;
    
    const successRate = (successfulInteractions / totalInteractions) * 100;
    const totalResults = interactionsWithFeedback.reduce(
      (sum, interaction) => sum + interaction.results, 0
    );
    const averageResults = totalResults / totalInteractions;
    
    // Return metrics
    res.json({
      totalInteractions,
      successfulInteractions,
      successRate,
      averageResults,
      interactionsWithFeedback
    });
  } catch (error) {
    console.error('Metrics error:', error);
    res.status(500).json({ error: 'An error occurred while calculating metrics' });
  }
});

// API endpoint to export evaluation dataset
app.get('/api/eval-dataset', (req, res) => {
  try {
    const dataset = userInteractions.map((interaction, index) => ({
      id: index,
      timestamp: interaction.timestamp,
      query: interaction.query,
      category: interaction.aiOutput?.category || '',
      subcategory: interaction.aiOutput?.subcategory || '',
      product_type: interaction.aiOutput?.product_type || '',
      filters: interaction.aiOutput?.filters || [],
      results: interaction.results,
      success: interaction.success
    }));

    res.json({ dataset });
  } catch (error) {
    console.error('Dataset export error:', error);
    res.status(500).json({ error: 'Failed to export evaluation dataset' });
  }
});

// Serve React app in production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`API URL: http://localhost:${port}/api/search`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use, trying ${port + 1}`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
