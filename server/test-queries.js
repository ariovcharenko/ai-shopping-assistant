const axios = require('axios');
const { spawn } = require('child_process');
const { exec } = require('child_process');
const path = require('path');

// Test queries
const queries = [
  {
    name: "Casual Clothing",
    query: "comfortable cotton t-shirt for everyday wear"
  },
  {
    name: "Electronics",
    query: "noise cancelling headphones for travel"
  },
  {
    name: "Furniture",
    query: "queen size memory foam mattress"
  },
  {
    name: "Athletic Wear",
    query: "moisture wicking running shorts"
  },
  {
    name: "Kitchen Items",
    query: "non-stick frying pan for cooking"
  },
  {
    name: "Footwear",
    query: "waterproof hiking boots for men"
  },
  {
    name: "Home Accessories",
    query: "adjustable LED desk lamp with USB port"
  },
  {
    name: "Pet Supplies",
    query: "grain-free dog food for adult dogs"
  },
  {
    name: "Sports Equipment",
    query: "non-slip yoga mat with carrying strap"
  },
  {
    name: "Accessories",
    query: "polarized sunglasses with UV protection"
  }
];

const testPrompts = [
    "Find me a high-end gaming laptop with at least 16GB RAM",
    "Show me wireless headphones with noise cancellation",
    "I need a smartphone with a good camera and long battery life",
    "Looking for a smartwatch that tracks heart rate and sleep",
    "Find me a 4K TV with HDR support",
    "I need a portable Bluetooth speaker with good bass",
    "Show me laptops under $1000 with SSD storage",
    "Find me a tablet with stylus support for drawing",
    "Looking for a DSLR camera for beginners",
    "Show me smart home devices that work with Alexa"
];

// Kill existing Node processes
function killProcesses() {
  return new Promise((resolve) => {
    exec('pkill -f "node index.js"', () => {
      setTimeout(resolve, 1000);
    });
  });
}

// Start server and wait for it to be ready
function startServer() {
  return new Promise((resolve, reject) => {
    const server = spawn('node', ['index.js'], {
      env: { ...process.env, PORT: '3333' },
      stdio: ['inherit', 'pipe', 'inherit']
    });

    let output = '';
    server.stdout.on('data', (data) => {
      output += data.toString();
      if (output.includes('Server running on port')) {
        resolve(server);
      }
    });

    setTimeout(() => {
      if (!output.includes('Server running on port')) {
        server.kill();
        reject(new Error('Server failed to start'));
      }
    }, 5000);
  });
}

// Test a single query
async function testQuery(query) {
  try {
    console.log(`\nTesting: ${query.name}`);
    console.log(`Query: "${query.query}"`);
    
    const response = await axios.post('http://localhost:3333/api/search', {
      query: query.query
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    
    console.log('Results:', JSON.stringify(response.data, null, 2));
    return true;
  } catch (error) {
    console.error('Error:', error.message);
    return false;
  }
}

// Run all tests
async function runTests() {
  let server;
  try {
    console.log('Killing existing processes...');
    await killProcesses();
    
    console.log('Starting server...');
    server = await startServer();
    console.log('Server started successfully');
    
    // Wait a bit for the server to be fully ready
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Run all queries
    for (const query of queries) {
      await testQuery(query);
    }
    
  } catch (error) {
    console.error('Test error:', error);
  } finally {
    if (server) {
      server.kill();
      console.log('\nServer stopped');
    }
    console.log('Tests complete');
  }
}

// Run the tests
runTests();

async function testQueries() {
    console.log('Starting test queries...\n');
    
    for (const prompt of testPrompts) {
        try {
            console.log(`Testing prompt: "${prompt}"`);
            const response = await axios.post('http://localhost:3000/api/search', {
                prompt: prompt
            });
            
            console.log('Response received:');
            console.log(`- Status: ${response.status}`);
            console.log(`- Number of results: ${response.data.products.length}`);
            console.log('Sample results:');
            response.data.products.slice(0, 3).forEach(product => {
                console.log(`  - ${product.name} (ID: ${product.id})`);
            });
            console.log('\n');
            
        } catch (error) {
            console.error(`Error testing prompt "${prompt}":`);
            console.error(error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            console.log('\n');
        }
        
        // Add a small delay between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

testQueries().catch(console.error); 