/**
 * Search Analysis Test Queries
 * 
 * This file contains sample test queries to demonstrate the evaluation framework.
 * Users can use these as examples to create their own test queries.
 */

/**
 * Sample test queries with expected outputs
 * These represent common search scenarios and their expected categorization
 */
const sampleTestQueries = [
  {
    query: "Looking for something to cancel out noise in my workplace",
    expected_output: {
      category: "electronics",
      subcategory: "audio", 
      product_type: "headphones",
      filters: ["noise cancelling", "workplace"]
    }
  },
  {
    query: "I need a comfortable chair for my home office",
    expected_output: {
      category: "office",
      subcategory: "furniture",
      product_type: "office chair",
      filters: ["comfortable", "home office"]
    }
  },
  {
    query: "Water bottle that doesn't leak",
    expected_output: {
      category: "sports",
      subcategory: "accessories",
      product_type: "water bottle",
      filters: ["leakproof"]
    }
  },
  {
    query: "Travel mug for hot drinks",
    expected_output: {
      category: "home",
      subcategory: "kitchen",
      product_type: "travel mug",
      filters: ["insulated", "leak-proof"]
    }
  },
  {
    query: "Waterproof hiking boots",
    expected_output: {
      category: "footwear",
      subcategory: "hiking boots",
      product_type: "hiking boots",
      filters: ["waterproof"]
    }
  }
];

/**
 * You can extend this list with your own test queries or replace it entirely
 * with queries more relevant to your specific use case
 */

// Export the test queries
module.exports = sampleTestQueries;

// If this script is run directly, print out the test queries
if (require.main === module) {
  console.log(`Sample test queries (${sampleTestQueries.length}):`);
  sampleTestQueries.forEach((testCase, index) => {
    console.log(`${index + 1}. Query: "${testCase.query}"`);
    console.log(`   Expected category: ${testCase.expected_output.category}`);
    console.log(`   Expected product type: ${testCase.expected_output.product_type}`);
    console.log('');
  });
}