require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const net = require('net');
const productCatalog = (() => {
  try {
    console.log('Loading product catalog...');
    const catalogPath = path.join(__dirname, 'data', 'product-catalog.json');
    console.log('Catalog path:', catalogPath);
    
    const data = fs.readFileSync(catalogPath, 'utf8');
    console.log('Raw catalog data length:', data.length);
    
    const products = JSON.parse(data);
    console.log('Successfully parsed catalog. Products:', products.length);
    
    // Log some sample products for verification
    console.log('\nSample products:');
    products.slice(0, 3).forEach(p => console.log(JSON.stringify(p, null, 2)));
    
    const mappedProducts = products.map(product => ({
      id: parseInt(product.id),
      name: product.name,
      category: product.category,
      subcategory: product.subcategory,
      product_type: product.product_type,
      filters: product.filters || []
    }));
    
    console.log(`\nSuccessfully mapped ${mappedProducts.length} products`);
    console.log('First mapped product:', JSON.stringify(mappedProducts[0], null, 2));
    
    return mappedProducts;
  } catch (error) {
    console.error('Error loading product catalog:', error);
    console.error('Stack trace:', error.stack);
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

// Add semantic matching helpers
function getSemanticScore(text1, text2) {
  // Convert to lowercase and split into words
  const words1 = text1.toLowerCase().split(/\W+/);
  const words2 = text2.toLowerCase().split(/\W+/);
  
  // Common product-related synonyms
  const synonyms = {
    'jeans': ['denim', 'pants', 'trousers'],
    'kids': ['children', 'child', 'young', 'youth'],
    'toys': ['games', 'plaything', 'educational'],
    'gift': ['present', 'surprise'],
  };
  
  // Check for direct matches and synonyms
  let score = 0;
  for (const word1 of words1) {
    if (words2.includes(word1)) {
      score += 1;
    }
    // Check synonyms
    for (const [key, values] of Object.entries(synonyms)) {
      if ((word1 === key && words2.some(w2 => values.includes(w2))) ||
          (values.includes(word1) && words2.includes(key))) {
        score += 0.8;
      }
    }
  }
  
  return score / Math.max(words1.length, words2.length);
}

// Add contextual matching helpers
function getActivityMatch(product, context) {
  if (!context?.activity) return true;
  
  const activityMappings = {
    'working out': ['activewear', 'athletic', 'gym', 'sport'],
    'lounging': ['loungewear', 'comfortable', 'casual', 'soft'],
    'sleeping': ['sleepwear', 'pajamas', 'nightwear'],
    'running': ['activewear', 'athletic', 'running']
  };

  const relevantTerms = activityMappings[context.activity] || [];
  const productText = [
    product.category,
    product.subcategory,
    product.product_type,
    ...product.filters,
    product.name
  ].join(' ').toLowerCase();

  return relevantTerms.some(term => productText.includes(term));
}

function getLocationMatch(product, context) {
  if (!context?.location) return true;

  const locationMappings = {
    'home': ['loungewear', 'indoor', 'comfortable', 'home'],
    'gym': ['activewear', 'athletic', 'gym', 'sport'],
    'outdoor': ['outdoor', 'weather', 'protective', 'waterproof']
  };

  const relevantTerms = locationMappings[context.location] || [];
  const productText = [
    product.category,
    product.subcategory,
    product.product_type,
    ...product.filters,
    product.name
  ].join(' ').toLowerCase();

  return relevantTerms.some(term => productText.includes(term));
}

// Add catalog-specific matching helpers
function getCatalogMatch(product, searchParams) {
  // Define actual catalog terms
  const catalogTerms = {
    activewear: {
      categories: ['clothing', 'sports'],
      subcategories: ['activewear', 'athletic', 'fitness'],
      productTypes: ['t-shirt', 'tank top', 'sports bra', 'yoga pants', 'running shorts', 'leggings'],
      filters: ['moisture wicking', 'breathable', 'quick dry', 'flexible']
    },
    loungewear: {
      categories: ['clothing'],
      subcategories: ['loungewear', 'sleepwear', 'bottoms'],
      productTypes: ['sweatpants', 'joggers', 'pajama set', 'lounge pants'],
      filters: ['soft', 'comfortable', 'elastic waist', 'fleece']
    }
  };

  // Get relevant terms based on activity
  const activityType = searchParams.context?.activity === 'working out' ? 'activewear' : 
                      searchParams.context?.activity === 'lounging' ? 'loungewear' : null;
  
  if (!activityType) return true;

  const terms = catalogTerms[activityType];
  const productText = [
    product.category,
    product.subcategory,
    product.product_type,
    ...product.filters,
    product.name
  ].join(' ').toLowerCase();

  // Check if product matches the activity-specific terms
  const categoryMatch = terms.categories.some(cat => product.category.toLowerCase() === cat);
  const subcategoryMatch = terms.subcategories.some(sub => productText.includes(sub));
  const productTypeMatch = terms.productTypes.some(type => productText.includes(type));
  const filterMatch = terms.filters.some(filter => productText.includes(filter));

  return categoryMatch || subcategoryMatch || productTypeMatch || filterMatch;
}

function filterProducts(searchParams) {
  // Add debug logging
  console.log('Search parameters:', JSON.stringify(searchParams, null, 2));

  // Special handling for athletic wear
  if (searchParams.context?.activity === 'working out' || searchParams.context?.activity === 'running') {
    console.log('Using athletic wear matching logic');
    
    return productCatalog.filter(product => {
      // Get all product text for matching
      const productText = [
        product.category,
        product.subcategory,
        product.product_type,
        ...product.filters,
        product.name
      ].join(' ').toLowerCase();

      // Check if this is activewear
      const isActivewear = 
        product.subcategory.toLowerCase() === 'activewear' ||
        productText.includes('athletic') ||
        productText.includes('workout') ||
        productText.includes('running');

      if (!isActivewear) return false;

      // Match product type
      if (searchParams.product_type) {
        const productTypeMatches = 
          product.product_type.toLowerCase().includes(searchParams.product_type.toLowerCase()) ||
          productText.includes(searchParams.product_type.toLowerCase());

        if (!productTypeMatches) return false;
      }

      // For running gear, prioritize exact matches for running
      if (searchParams.context?.activity === 'running') {
        const isRunningGear = productText.includes('running');
        if (!isRunningGear) return false;
      }

      // More flexible filter matching for athletic wear
      if (searchParams.filters?.length > 0) {
        // Count how many filters match rather than requiring all
        const filterVariations = {
          'lightweight': ['light', 'lightweight'],
          'breathable': ['moisture wicking', 'quick dry', 'breathable'],
          'quick-dry': ['moisture wicking', 'quick dry', 'breathable'],
          'flexible': ['stretch', 'flexible', 'elastic']
        };

        const matchedFilters = searchParams.filters.filter(filter => {
          const variations = filterVariations[filter.toLowerCase()] || [filter.toLowerCase()];
          return variations.some(v => productText.includes(v));
        });

        // For running gear, require at least one filter match
        if (matchedFilters.length === 0) return false;
      }

      return true;
    });
  }

  // For all other queries, use regular matching logic
  return productCatalog.filter(product => {
    // Enhanced context matching for workout and lounge queries
    if (searchParams.context?.activity) {
      const activityCategories = {
        'working out': {
          categories: ['clothing', 'sports'],
          subcategories: ['activewear', 'athletic', 'fitness'],
          productTypes: ['tank top', 't-shirt', 'shorts', 'leggings', 'sports bra', 'yoga pants', 'running shorts'],
          keywords: ['moisture wicking', 'breathable', 'quick dry', 'flexible', 'athletic', 'workout', 'gym']
        },
        'lounging': {
          categories: ['clothing'],
          subcategories: ['loungewear', 'sleepwear', 'bottoms'],
          productTypes: ['sweatpants', 'joggers', 'pajama set', 'lounge pants'],
          keywords: ['comfortable', 'soft', 'relaxed', 'fleece', 'elastic waist']
        }
      };

      const activityMapping = activityCategories[searchParams.context.activity];
      if (activityMapping) {
        // Check if product matches the activity context
        const productText = [
          product.category,
          product.subcategory,
          product.product_type,
          ...product.filters,
          product.name
        ].join(' ').toLowerCase();

        const matchesActivity = 
          activityMapping.categories.some(cat => product.category.toLowerCase() === cat) ||
          activityMapping.subcategories.some(sub => product.subcategory.toLowerCase().includes(sub)) ||
          activityMapping.productTypes.some(type => product.product_type.toLowerCase().includes(type)) ||
          activityMapping.keywords.some(keyword => productText.includes(keyword));

        if (!matchesActivity) return false;
      }
    }

    // Basic category matching
    if (searchParams.category && 
        !product.category.toLowerCase().includes(searchParams.category.toLowerCase())) {
      return false;
    }

    // Enhanced subcategory matching
    if (searchParams.subcategory) {
      const subcategoryVariations = {
        'activewear': ['athletic', 'fitness', 'gym', 'sport', 'workout'],
        'loungewear': ['casual', 'comfort', 'lounge', 'sleepwear'],
        'bottoms': ['pants', 'shorts', 'leggings']
      };

      const variations = subcategoryVariations[searchParams.subcategory.toLowerCase()] || [];
      const subcategoryMatches = 
        product.subcategory.toLowerCase().includes(searchParams.subcategory.toLowerCase()) ||
        variations.some(v => product.subcategory.toLowerCase().includes(v));

      if (!subcategoryMatches) return false;
    }

    // Product type matching with catalog terms
    if (searchParams.product_type) {
      const productTypeVariations = {
        'tank top': ['tank', 'sleeveless'],
        'sweatpants': ['joggers', 'pants', 'bottoms'],
        't-shirt': ['tee', 'shirt'],
        'sports bra': ['bra', 'top'],
        'leggings': ['pants', 'tights', 'yoga pants']
      };

      const variations = productTypeVariations[searchParams.product_type.toLowerCase()] || [];
      const typeMatches = 
        product.product_type.toLowerCase().includes(searchParams.product_type.toLowerCase()) ||
        variations.some(v => product.product_type.toLowerCase().includes(v)) ||
        product.name.toLowerCase().includes(searchParams.product_type.toLowerCase());

      if (!typeMatches) return false;
    }

    // Filter matching with catalog terms
    if (searchParams.filters?.length > 0) {
      const filterVariations = {
        'moisture-wicking': ['quick dry', 'moisture', 'wicking', 'breathable'],
        'flexible': ['stretch', 'elastic', 'flex', 'movable'],
        'comfortable': ['soft', 'comfort', 'cozy', 'plush'],
        'breathable': ['moisture wicking', 'ventilated', 'quick dry'],
        'soft': ['comfortable', 'plush', 'cozy']
      };

      const allFiltersMatch = searchParams.filters.every(filter => {
        const variations = filterVariations[filter.toLowerCase()] || [];
        const productText = [
          ...product.filters.map(f => f.toLowerCase()),
          product.name.toLowerCase(),
          product.product_type.toLowerCase()
        ].join(' ');

        return productText.includes(filter.toLowerCase()) ||
               variations.some(v => productText.includes(v));
      });

      if (!allFiltersMatch) return false;
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

// Simplify normalization to focus on basic standardization
function normalizeProductOutput(output) {
  const normalized = { ...output };
  
  // Only do basic lowercase normalization
  if (normalized.category) {
    normalized.category = normalized.category.toLowerCase();
  }
  if (normalized.subcategory) {
    normalized.subcategory = normalized.subcategory.toLowerCase();
  }
  if (normalized.product_type) {
    normalized.product_type = normalized.product_type.toLowerCase();
  }
  if (normalized.filters) {
    normalized.filters = normalized.filters.map(filter => filter.toLowerCase().trim());
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

// Add debug logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    details: err.message
  });
});

const DEFAULT_PORT = 3002;

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

const startServer = async (port = DEFAULT_PORT) => {
  try {
    console.log('Starting server...');
    console.log('Current directory:', __dirname);
    console.log('Product catalog size:', productCatalog.length);

    const server = app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on http://0.0.0.0:${port}`);
    });

    server.on('error', (err) => {
      console.error('Server error:', err);
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying ${port + 1}...`);
        startServer(port + 1);
      }
    });

    return server;
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();

