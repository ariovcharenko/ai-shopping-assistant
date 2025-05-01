/**
 * Test Query Creator
 * 
 * This script demonstrates how to create custom test queries for the evaluation framework.
 * Users can define their own test queries with expected outputs to evaluate search performance.
 */

const fs = require('fs');
const path = require('path');

// Define the output file path for your custom test dataset
const CUSTOM_DATASET_PATH = path.join(__dirname, '../data/datasets/custom-eval-dataset.jsonl');

/**
 * Create a custom test query with expected output
 * @param {string} query - The search query
 * @param {object} expectedOutput - The expected search parameters
 * @returns {object} The test query object
 */
function createTestQuery(query, expectedOutput) {
  return {
    query,
    expected_output: expectedOutput
  };
}

/**
 * Sample function to create a batch of test queries
 */
function createSampleTestQueries() {
  const queries = [
    createTestQuery(
      "I need something to cancel out noise at my desk", 
      {
        category: "electronics",
        subcategory: "audio",
        product_type: "noise-cancelling headphones",
        filters: ["office", "noise-cancelling"]
      }
    ),
    createTestQuery(
      "Looking for a comfortable chair for my home office", 
      {
        category: "office",
        subcategory: "furniture",
        product_type: "office chair",
        filters: ["comfortable", "home office"]
      }
    ),
    createTestQuery(
      "I want a water bottle that doesn't leak in my bag", 
      {
        category: "sports",
        subcategory: "accessories",
        product_type: "water bottle",
        filters: ["leakproof", "travel"]
      }
    ),
    // Add more test queries here
  ];

  return queries;
}

/**
 * Save test queries to a JSONL file
 * @param {Array} queries - Array of test query objects
 * @param {string} outputPath - Path to save the JSONL file
 */
function saveTestQueriesToFile(queries, outputPath) {
  try {
    // Create directory if it doesn't exist
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write each query as a line in the JSONL file
    const jsonlData = queries.map(q => JSON.stringify(q)).join('\n');
    fs.writeFileSync(outputPath, jsonlData);
    
    console.log(`Successfully saved ${queries.length} test queries to ${outputPath}`);
  } catch (error) {
    console.error('Error saving test queries:', error);
  }
}

/**
 * Create and save your own custom test queries
 */
function createCustomTestQueries() {
  // Here you can define your own test queries
  const myCustomQueries = [
    createTestQuery(
      "YOUR_SEARCH_QUERY_HERE", 
      {
        category: "EXPECTED_CATEGORY",
        subcategory: "EXPECTED_SUBCATEGORY",
        product_type: "EXPECTED_PRODUCT_TYPE",
        filters: ["EXPECTED_FILTER_1", "EXPECTED_FILTER_2"]
      }
    ),
    // Add more custom test queries...
  ];
  
  saveTestQueriesToFile(myCustomQueries, CUSTOM_DATASET_PATH);
}

// Create sample test queries if this script is run directly
if (require.main === module) {
  console.log('Creating sample test queries...');
  const sampleQueries = createSampleTestQueries();
  saveTestQueriesToFile(sampleQueries, CUSTOM_DATASET_PATH);
  
  console.log('\nTo create your own custom test queries:');
  console.log('1. Edit the createCustomTestQueries() function in this file');
  console.log('2. Replace the placeholders with your own queries and expected outputs');
  console.log('3. Run this script with: node create-test-queries.js');
  console.log('4. Update the EVAL_DATASET_PATH in evaluator.js to point to your custom dataset');
  console.log('5. Run the evaluator with: node evaluator.js');
}

module.exports = {
  createTestQuery,
  saveTestQueriesToFile
};