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
  // More selective matching function to avoid returning too many irrelevant products
  let score = 0;
  const minRelevanceThreshold = 3; // Higher threshold to filter out marginally relevant items
  
  // Get product info for matching
  const productType = product.product_type.toLowerCase();
  const productName = product.name.toLowerCase();
  const productCategory = product.category.toLowerCase();
  const productSubcategory = product.subcategory.toLowerCase();
  const productFilters = product.filters.map(f => f.toLowerCase());
  
  // Check if this is a pants/jeans query
  let isPantsQuery = false;
  if (searchParams.product_type) {
    const searchType = searchParams.product_type.toLowerCase();
    isPantsQuery = ['jeans', 'denim pants', 'pants', 'trousers', 'denim'].some(term => searchType.includes(term));
  } else if (searchParams.subcategory) {
    // If product_type is null, check if subcategory contains pants-related terms
    const searchSubcat = searchParams.subcategory.toLowerCase();
    isPantsQuery = ['pants', 'bottoms', 'jeans', 'trousers'].some(term => searchSubcat.includes(term));
  }
  
  // Additional check for denim pants based on filters
  if (searchParams.filters && 
      searchParams.filters.includes('denim') && 
      (searchParams.subcategory === 'pants' || searchParams.subcategory === 'bottoms')) {
    isPantsQuery = true;
  }
  
  // For explicit pants/jeans queries, make sure we're only returning actual pants products
  if (isPantsQuery) {
    const pantsTerms = ['jeans', 'pants', 'trousers', 'slacks', 'chinos'];
    const skirtTerms = ['skirt', 'dress'];
    const jacketTerms = ['jacket', 'coat', 'hoodie', 'sweater', 'outerwear'];
    
    // Check if this is a non-pants product but the query was for pants
    if (!pantsTerms.some(term => productType.includes(term) || 
                                productSubcategory.includes(term))) {
      // If it contains terms for non-pants items like skirts or jackets, exclude it
      if (skirtTerms.some(term => productType.includes(term) || productSubcategory.includes(term)) ||
          jacketTerms.some(term => productType.includes(term) || productSubcategory.includes(term))) {
        return 0; // Not a pants product, don't include
      }
    }
  }
  
  // 1. Product type matching (most important)
  if (searchParams.product_type) {
    const searchType = searchParams.product_type.toLowerCase();
    
    // For specific product types like jeans, enforce strict matching
    if (isPantsQuery) {
      // For jeans/pants queries, only match actual pants/jeans products
      const pantsTerms = ['jeans', 'pants', 'trousers', 'slacks', 'chinos'];
      if (pantsTerms.some(term => productType.includes(term))) {
        if (productType === searchType || 
            (searchType === 'jeans' && productType.includes('jeans')) ||
            (searchType === 'pants' && pantsTerms.some(term => productType.includes(term)))) {
          score += 10; // Exact match
        } else {
          score += 7; // Partial match for pants
        }
      } else {
        return 0; // Not a pants product, don't include
      }
    } 
    // For other product types
    else {
      if (productType === searchType) {
        score += 10; // Exact match
      } else if (productType.includes(searchType) || searchType.includes(productType)) {
        score += 5; // Partial match
      } else {
        // If the product type doesn't match at all, this product is likely not relevant
        score -= 2; // Penalty for mismatched product type
      }
    }
  }
  
  // 2. Category matching
  if (searchParams.category) {
    const searchCategory = searchParams.category.toLowerCase();
    if (productCategory === searchCategory) {
      score += 4;
    } else if (productCategory.includes(searchCategory)) {
      score += 2;
    } else {
      // If category doesn't match at all, this product is likely not relevant
      score -= 2; // Penalty for wrong category
    }
  }
  
  // 3. Subcategory matching
  if (searchParams.subcategory) {
    const searchSubcategory = searchParams.subcategory.toLowerCase();
    if (productSubcategory === searchSubcategory) {
      score += 3;
    } else if (productSubcategory.includes(searchSubcategory)) {
      score += 1.5;
    }
  }
  
  // 4. Filter matching
  if (searchParams.filters && searchParams.filters.length > 0) {
    let matchedFilters = 0;
    for (const filter of searchParams.filters) {
      const normalizedFilter = filter.toLowerCase();
      
      // Special handling for 'denim' filter with pants queries
      if (normalizedFilter === 'denim' && isPantsQuery) {
        if (productType.includes('jeans') || productName.includes('denim') || 
            productFilters.some(f => f.includes('denim'))) {
          score += 3; // Strong bonus for denim when looking for denim pants
          matchedFilters++;
        }
      }
      else if (productName.includes(normalizedFilter) || 
          productFilters.some(f => f.includes(normalizedFilter))) {
        score += 2;
        matchedFilters++;
      }
    }
    
    // If no filters matched at all, this product is less relevant
    if (matchedFilters === 0 && searchParams.filters.length > 0) {
      score -= 1; // Small penalty for not matching any filters
    }
  }
  
  // 5. Gender check if specified (strict)
  if (searchParams.context && searchParams.context.gender_requirement) {
    const gender = searchParams.context.gender_requirement.toLowerCase();
    const oppositeGender = gender === 'women' ? 'men' : (gender === 'men' ? 'women' : null);
    
    // Bonus for matching gender
    if (productName.includes(gender) || productFilters.some(f => f.includes(gender))) {
      score += 3;
    }
    
    // Exclude opposite gender products
    if (oppositeGender && 
        (productName.includes(oppositeGender) || 
         productFilters.some(f => f.includes(oppositeGender)))) {
      return 0;
    }
  }
  
  // 6. Environment and occasion appropriateness
  if (searchParams.context) {
    const occasion = searchParams.context.occasion ? searchParams.context.occasion.toLowerCase() : '';
    const activity = searchParams.context.activity ? searchParams.context.activity.toLowerCase() : '';
    const location = searchParams.context.location ? searchParams.context.location.toLowerCase() : '';
    
    // Use the environment field if available from OpenAI
    let isIndoorContext = false;
    let isOutdoorContext = false;
    
    if (searchParams.context.environment) {
      isIndoorContext = searchParams.context.environment.toLowerCase() === 'indoor';
      isOutdoorContext = searchParams.context.environment.toLowerCase() === 'outdoor';
    } 
    // Fall back to inferring from other fields if environment is not provided
    else {
      // Check for explicit indoor locations
      if (location.includes('gym') || location.includes('indoor') || location.includes('inside') || 
          location.includes('studio') || location.includes('office') || location.includes('home')) {
        isIndoorContext = true;
      }
      
      // Check for explicit outdoor locations
      if (location.includes('outdoor') || location.includes('outside') || location.includes('hiking') || 
          activity.includes('hiking') || activity.includes('running') || activity.includes('trail') || 
          activity.includes('outdoor') || activity.includes('camping')) {
        isOutdoorContext = true;
      }
      
      // Infer from occasion if activity and location aren't explicit
      if (!isIndoorContext && !isOutdoorContext) {
        if (occasion.includes('gym') || occasion.includes('workout') || occasion.includes('lifting')) {
          isIndoorContext = true;
        }
        
        if (occasion.includes('hiking') || occasion.includes('outdoor') || occasion.includes('camping')) {
          isOutdoorContext = true;
        }
      }
    }
    
    // Apply indoor/outdoor context filtering
    if (isIndoorContext) {
      // For indoor activities, exclude obviously outdoor-specific items
      const outdoorItems = ['rain', 'waterproof', 'weather', 'storm', 'snow', 'winter coat'];
      if (outdoorItems.some(item => 
          productName.includes(item) || 
          productFilters.some(f => f.includes(item)))) {
        return 0; // Not appropriate for indoor use
      }
    }
    
    if (isOutdoorContext) {
      // For outdoor activities, prioritize weather-protection items
      const outdoorItems = ['rain', 'waterproof', 'weather', 'outdoor'];
      if (outdoorItems.some(item => 
          productName.includes(item) || 
          productFilters.some(f => f.includes(item)))) {
        score += 3; // Bonus for outdoor-appropriate items
      }
    }
    
    // Apply semantic incompatibilities filtering
    if (searchParams.semantic_incompatibilities && searchParams.semantic_incompatibilities.length > 0) {
      for (const incompatible of searchParams.semantic_incompatibilities) {
        const incompatibleLower = incompatible.toLowerCase();
        if (productType.includes(incompatibleLower) || 
            productName.includes(incompatibleLower) || 
            productFilters.some(f => f.includes(incompatibleLower))) {
          return 0; // Product is inappropriate based on semantic incompatibilities
        }
      }
    }
    
    // Basic occasion appropriateness for common scenarios
    if (occasion.includes('formal') || occasion.includes('fancy') || occasion.includes('dinner')) {
      // For formal occasions, exclude obviously casual items
      const casualItems = ['casual', 'sport', 'athletic', 'pajama', 'lounge', 'rain boot', 'hiking'];
      if (casualItems.some(item => productName.includes(item) || productType.includes(item))) {
        return 0; // Not appropriate for formal occasions
      }
    }
    
    if (occasion.includes('workout') || occasion.includes('gym') || occasion.includes('exercise') || 
        activity.includes('workout') || activity.includes('gym') || activity.includes('exercise') ||
        activity.includes('lifting')) {
      
      // For workout contexts, exclude obviously formal items and outdoor gear
      const inappropriateItems = ['formal', 'dress', 'suit', 'heel', 'fancy', 'rain', 'waterproof'];
      if (inappropriateItems.some(item => productName.includes(item) || productType.includes(item))) {
        return 0; // Not appropriate for workout context
      }
      
      // Boost workout-appropriate clothing
      const workoutItems = ['athletic', 'workout', 'gym', 'sport', 'exercise', 'training', 'performance'];
      if (workoutItems.some(item => 
          productName.includes(item) || 
          productType.includes(item) || 
          productFilters.some(f => f.includes(item)))) {
        score += 4; // Significant bonus for workout-appropriate items
      }
    }
  }

  // Only return products that meet minimum relevance threshold
  return score >= minRelevanceThreshold ? score : 0;
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

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

