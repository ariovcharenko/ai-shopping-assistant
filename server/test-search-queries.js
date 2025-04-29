const axios = require('axios');

// Array of diverse test queries across different product categories
const testQueries = [
  "Something cozy to wear at home on a cold day",          // Home comfort wear
  "I need a gift for someone who loves cooking",           // Kitchen/Cooking
  "Looking for products that can help me sleep better",    // Bedroom/Wellness
  "What would be good for a beach vacation?",              // Seasonal/Travel
  "I need something to entertain kids on a rainy day",     // Children/Entertainment
  "What can I get to make my home office more comfortable?", // Home office
  "Something to help me stay fit without going to the gym", // Fitness/Exercise
  "I want to upgrade my living room on a budget",          // Home decor
  "What should I bring on a hiking trip?",                 // Outdoor activities
  "I need something to carry my essentials for everyday use" // Bags/Accessories
];

// Function to send a search query to the API
async function testSearch(query) {
  console.log(`\n----- Testing: "${query}" -----`);
  
  try {
    const response = await axios.post('http://localhost:5004/api/search', { query });
    
    console.log(`Search Parameters: ${JSON.stringify(response.data.searchParams, null, 2)}`);
    console.log(`Total Results: ${response.data.total}`);
    
    if (response.data.products.length > 0) {
      console.log("Top 5 Results:");
      response.data.products.slice(0, 5).forEach((product, index) => {
        console.log(`${index + 1}. [${product.category}/${product.subcategory}] ${product.product_type}: ${product.name}`);
      });
    } else {
      console.log("No results found");
    }
    
    // Simple relevance check
    return analyzeResults(response.data.products, query, response.data.searchParams);
  } catch (error) {
    console.error(`Error testing query "${query}":`, error.message);
    return { query, relevance: "ERROR", reason: error.message };
  }
}

// Analyzes result relevance
function analyzeResults(products, query, searchParams) {
  if (products.length === 0) {
    return { query, relevance: "POOR", reason: "No results returned" };
  }
  
  // Get the top 5 products for analysis
  const topResults = products.slice(0, 5);
  
  // Check if the category matches the expected category
  const categoryMatches = topResults.filter(p => 
    p.category.toLowerCase() === searchParams.category?.toLowerCase()
  ).length;
  
  // Check for relevant product types
  const typeMatches = topResults.filter(p => 
    p.product_type.toLowerCase() === searchParams.product_type?.toLowerCase() ||
    p.product_type.toLowerCase().includes(searchParams.product_type?.toLowerCase() || '')
  ).length;
  
  // Check if we've got gender-appropriate results
  let genderAppropriate = true;
  if (searchParams.context?.gender_requirement) {
    const gender = searchParams.context.gender_requirement.toLowerCase();
    const oppositeGender = gender === 'women' ? 'men' : 'women';
    
    genderAppropriate = !topResults.some(p => 
      p.name.toLowerCase().includes(oppositeGender) || 
      p.product_type.toLowerCase().includes(oppositeGender)
    );
  }
  
  // Overall relevance assessment
  let relevance = "GOOD";
  let reason = "Results appear relevant";
  
  if (categoryMatches < 3) {
    relevance = "POOR";
    reason = `Only ${categoryMatches}/5 results match the expected category`;
  } else if (!genderAppropriate) {
    relevance = "POOR";
    reason = "Results contain items for the wrong gender";
  } else if (typeMatches < 2 && searchParams.product_type) {
    relevance = "FAIR";
    reason = `Only ${typeMatches}/5 results match the expected product type`;
  }
  
  return { query, relevance, reason, categoryMatches, typeMatches };
}

// Main function to run all tests
async function runAllTests() {
  console.log("Starting search relevance tests with 10 diverse queries...\n");
  
  const results = [];
  
  for (const query of testQueries) {
    try {
      const result = await testSearch(query);
      results.push(result);
      
      // Wait a bit between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Error running test for "${query}":`, error);
    }
  }
  
  // Print summary
  console.log("\n===== TEST RESULTS SUMMARY =====");
  results.forEach(result => {
    console.log(`"${result.query}": ${result.relevance} - ${result.reason}`);
  });
  
  const goodCount = results.filter(r => r.relevance === "GOOD").length;
  const fairCount = results.filter(r => r.relevance === "FAIR").length;
  const poorCount = results.filter(r => r.relevance === "POOR").length;
  
  console.log(`\nOverall: ${goodCount} GOOD, ${fairCount} FAIR, ${poorCount} POOR`);
}

// Run all tests
runAllTests().catch(console.error);