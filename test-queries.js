const axios = require('axios');

const API_URL = 'http://localhost:5003/api/search';

const testQueries = [
  {
    query: "need denim pants",
    expectedProductType: "jeans"
  },
  {
    query: "gift for a 6-year-old",
    expectedProductType: "educational toy"
  },
  {
    query: "warm jacket for camping",
    expectedProductType: "fleece jacket"
  }
];

async function runTests() {
  console.log('Running test queries...\n');
  
  for (const test of testQueries) {
    try {
      console.log(`Testing query: "${test.query}"`);
      console.log(`Expected product_type: "${test.expectedProductType}"`);
      
      const response = await axios.post(API_URL, { query: test.query });
      
      console.log('API Response:');
      console.log(JSON.stringify(response.data.searchParams, null, 2));
      
      const actualProductType = response.data.searchParams.product_type;
      const success = actualProductType === test.expectedProductType;
      
      console.log(`Actual product_type: "${actualProductType}"`);
      console.log(`Test ${success ? 'PASSED ✅' : 'FAILED ❌'}`);
      
      if (!success) {
        console.log(`Expected "${test.expectedProductType}" but got "${actualProductType}"`);
      }
      
      console.log('\n-----------------------------------\n');
    } catch (error) {
      console.error(`Error testing query "${test.query}":`, error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
      console.log('\n-----------------------------------\n');
    }
  }
}

runTests();
