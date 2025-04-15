require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const net = require('net');
const productCatalog = require('./data/productCatalog');

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

// Import OpenAIService
let analyzeSearchQuery, logUserInteraction;
try {
  const OpenAIService = require('./openaiService');
  analyzeSearchQuery = OpenAIService.analyzeSearchQuery;
  logUserInteraction = OpenAIService.logUserInteraction;
  console.log('Successfully imported OpenAIService');
} catch (error) {
  console.error('Error importing OpenAIService:', error.message);
  try {
    const mockService = require('./mockaiService.js');
    analyzeSearchQuery = mockService.analyzeSearchQuery;
    logUserInteraction = mockService.logUserInteraction;
    console.log('Using mockaiService as fallback');
  } catch (finalError) {
    console.error('Failed to import any AI service:', finalError.message);
    throw new Error('No AI service available. Cannot start server.');
  }
}

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;
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
  // For demonstration purposes, we'll map the new domain-based categories to the existing product catalog
  // In a real application, the product catalog would be updated to match the new category structure
  
  // Map domain-based categories to gender-based categories in the existing catalog
  let categoryMapping = {
    'clothing': ['women', 'men', 'unisex'],
    'electronics': ['unisex'],
    'home': ['unisex'],
    'beauty': ['unisex'],
    'furniture': ['unisex'],
    'general': ['unisex']
  };
  
  return productCatalog.filter(product => {
    // Match category using the mapping
    if (searchParams.category && 
        !categoryMapping[searchParams.category]?.includes(product.category)) {
      return false;
    }
    
    // For subcategory, we'll be more flexible since we've changed the structure
    // Instead of exact matching, we'll check if either contains the other
    if (searchParams.subcategory && 
        !product.subcategory.includes(searchParams.subcategory) && 
        !searchParams.subcategory.includes(product.subcategory)) {
      return false;
    }
    
    // Match product type with flexible matching
    if (searchParams.product_type && 
        !product.product_type.includes(searchParams.product_type) && 
        !searchParams.product_type.includes(product.product_type)) {
      return false;
    }
    
    // Match filters/attributes (at least one filter should match)
    if (searchParams.filters && searchParams.filters.length > 0) {
      // Skip filtering by attributes if the filters contain "unspecified"
      if (searchParams.filters.includes("unspecified")) {
        return true;
      }
      
      const hasMatchingAttribute = searchParams.filters.some(filter => 
        product.attributes.some(attr => 
          attr.includes(filter) || filter.includes(attr)
        )
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

  return normalized;
}

// API endpoint for search
app.post('/api/search', async (req, res) => {
  try {
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    console.log('Processing search query:', query);
    
    // Analyze the search query using OpenAI
    const searchParams = await analyzeSearchQuery(query);
    const normalizedSearchParams = normalizeProductOutput(searchParams);

    console.log('Search parameters:', searchParams);
    
    // Check for generic values in the AI output
    const genericCheck = checkForGenericValues(searchParams);
    
    // Filter products based on the search parameters
    const matchingProducts = filterProducts(searchParams);
    console.log(`Found ${matchingProducts.length} matching products`);
    
    // Log the interaction (without success flag for now)
    const interaction = {
      timestamp: new Date().toISOString(),
      query,
      aiOutput: searchParams,
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
      logUnrecognizedQuery(query, searchParams);
    }
    
    // Return the search results
    res.json({
      searchParams,
      products: matchingProducts,
      interactionId: userInteractions.length - 1, // Reference for feedback
      hasGenericValues: genericCheck.hasGenericValues
    });
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

// Start the server
async function startServer() {
  try {
    // Check if port is available
    const portAvailable = await isPortAvailable(PORT);
    
    if (!portAvailable) {
      console.error(`Port ${PORT} is not available. Please choose a different port.`);
      process.exit(1);
    }
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`API URL: http://localhost:${PORT}/api/search`);
      
      // Import and use the open package
      import('open')
        .then(({ default: open }) => {
          open(`http://localhost:${PORT}`);
        })
        .catch(err => {
          console.log('Could not open browser automatically:', err.message);
          console.log(`Please open http://localhost:${PORT} in your browser`);
        });
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
startServer();
