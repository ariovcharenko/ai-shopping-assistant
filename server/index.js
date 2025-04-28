require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
const OpenAIService = require('./OpenAIService');

const app = express();
app.use(cors());
app.use(express.json());

// Load product catalog
const productCatalog = require('./data/product-catalog.json');

function matchProduct(product, searchParams) {
  let score = 0;

  // Special handling for denim/jeans queries to ensure only jeans are returned
  if (searchParams.product_type && 
      ['jeans', 'denim pants', 'denim', 'pants'].includes(searchParams.product_type.toLowerCase())) {
    // Only match if the product is specifically jeans
    if (product.product_type.toLowerCase() !== 'jeans') {
      return 0;
    }
    score += 5;
  } else if (searchParams.product_type) {
    // Normal product type matching for non-jeans queries
    if (product.product_type.toLowerCase() === searchParams.product_type.toLowerCase()) {
      score += 5;
    } else if (product.product_type.toLowerCase().includes(searchParams.product_type.toLowerCase())) {
      score += 3;
    }
  }

  // Boost for category matches
  if (searchParams.category && product.category.toLowerCase() === searchParams.category.toLowerCase()) {
    score += 4;
  } else if (searchParams.category) {
    // Partial match for category
    if (product.category.toLowerCase().includes(searchParams.category.toLowerCase())) {
      score += 2;
    }
  }

  // Boost for subcategory matches
  if (searchParams.subcategory && product.subcategory.toLowerCase() === searchParams.subcategory.toLowerCase()) {
    score += 3;
  } else if (searchParams.subcategory) {
    // Partial match for subcategory
    if (product.subcategory.toLowerCase().includes(searchParams.subcategory.toLowerCase())) {
      score += 1.5;
    }
  }

  // Boost for filter matches
  if (searchParams.filters && searchParams.filters.length > 0) {
    const matchingFilters = searchParams.filters.filter(filter => {
      const normalizedFilter = filter.toLowerCase();
      return product.name.toLowerCase().includes(normalizedFilter) ||
             product.filters.some(f => f.toLowerCase().includes(normalizedFilter));
    });
    score += matchingFilters.length * 2; // Weight each filter match
  }

  // Contextual matching
  if (searchParams.context) {
    if (searchParams.context.intent === "gifting" && searchParams.context.recipient) {
      if (product.name.toLowerCase().includes(searchParams.context.recipient.toLowerCase()) ||
          product.filters.some(f => f.toLowerCase().includes(searchParams.context.recipient.toLowerCase()))) {
        score += 3;
      }
    }

    if (searchParams.context.location) {
      if (product.name.toLowerCase().includes(searchParams.context.location.toLowerCase()) ||
          product.filters.some(f => f.toLowerCase().includes(searchParams.context.location.toLowerCase()))) {
        score += 1.5;
      }
    }

    if (searchParams.context.priority_attributes) {
      searchParams.context.priority_attributes.forEach(attribute => {
        if (product.name.toLowerCase().includes(attribute.toLowerCase()) ||
            product.filters.some(f => f.toLowerCase().includes(attribute.toLowerCase()))) {
          score += 2;
        }
      });
    }
  }

  // Fallback to broader matches if no strong matches are found
  if (score === 0) {
    if (searchParams.category && product.category.toLowerCase().includes(searchParams.category.toLowerCase())) {
      score += 1;
    }
    if (searchParams.subcategory && product.subcategory.toLowerCase().includes(searchParams.subcategory.toLowerCase())) {
      score += 0.5;
    }
  }

  return score;
}

function findBestMatches(products, searchParams) {
  return products
    .map(product => ({ product, score: matchProduct(product, searchParams) }))
    .filter(({ score }) => score > 0) // Only include products with a positive score
    .sort((a, b) => b.score - a.score) // Sort by score in descending order
    .map(({ product }) => product); // Return only the products
}

app.post('/api/search', async (req, res) => {
  try {
    console.log('Search request received:', req.body);
    const { query } = req.body;

    // Get normalized search parameters from OpenAI
    const searchParams = await OpenAIService.analyzeSearchQuery(query);
    console.log('Normalized search parameters:', searchParams);

    // Find matching products with improved matching logic
    const matchingProducts = findBestMatches(productCatalog, searchParams);

    console.log(`Found ${matchingProducts.length} matching products`);

    // Log search results
    await logSearchResults({
      timestamp: new Date().toISOString(),
      query,
      searchParams,
      matchCount: matchingProducts.length,
      matchingProducts: matchingProducts.map(p => p.id)
    });

    res.json({
      searchParams,
      products: matchingProducts,
      total: matchingProducts.length
    });

  } catch (error) {
    console.error('Error processing search:', error);
    res.status(500).json({ 
      error: 'Search processing error',
      details: error.message 
    });
  }
});

async function logSearchResults(results) {
  try {
    const logPath = path.join(__dirname, 'data', 'datasets', 'match-log.json');
    const logEntry = JSON.stringify(results) + '\n';
    await fs.appendFile(logPath, logEntry);
  } catch (error) {
    console.error('Error logging search results:', error);
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    productCount: productCatalog.length,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

