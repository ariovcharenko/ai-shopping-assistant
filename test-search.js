const axios = require('axios');
const testQueries = require('./test-queries');

async function testSearch(query) {
  try {
    console.log(`\nTesting query: "${query.query}"`);
    console.log('Expected categories:', query.expectedCategories.join(', '));
    console.log('Expected price range:', `$${query.expectedPriceRange.min} - $${query.expectedPriceRange.max}`);
    
    const response = await axios.post('http://localhost:5004/api/search', {
      query: query.query
    });
    
    console.log('\nSearch Results:');
    
    if (response.data.products && response.data.products.length > 0) {
      response.data.products.forEach(product => {
        console.log(`- ${product.name} (ID: ${product.id})`);
        console.log(`  Category: ${product.category}, Subcategory: ${product.subcategory}, Type: ${product.product_type}`);
        console.log(`  Price: $${product.price}`);
        console.log(`  Filters: ${product.filters.join(', ')}`);
        console.log('');
      });
      console.log(`Total matches: ${response.data.products.length}`);
    } else {
      console.log('No matching products found.');
    }
  } catch (error) {
    console.error('Error testing search:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

async function runAllTests() {
  console.log('Starting test queries...\n');
  for (const query of testQueries) {
    await testSearch(query);
    console.log('----------------------------------------');
  }
}

runAllTests();
