const http = require('http');
const net = require('net');

// Check if a port is available
function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is in use`);
        resolve(false);
      } else {
        console.log(`Error checking port ${port}:`, err.message);
        resolve(false);
      }
    });
    
    server.once('listening', () => {
      server.close();
      console.log(`Port ${port} is available`);
      resolve(true);
    });
    
    server.listen(port);
  });
}

// Test server response
function testServer(port) {
  return new Promise((resolve) => {
    const req = http.request({
      hostname: 'localhost',
      port: port,
      path: '/api/health',
      method: 'GET'
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`Server response (${res.statusCode}):`, data);
        resolve(true);
      });
    });
    
    req.on('error', (err) => {
      console.log('Error connecting to server:', err.message);
      resolve(false);
    });
    
    req.end();
  });
}

// Run diagnostics
async function runDiagnostics() {
  console.log('Starting server diagnostics...');
  
  // Test common ports
  const ports = [3000, 3333, 5000, 5004, 50041];
  
  for (const port of ports) {
    console.log(`\nChecking port ${port}...`);
    const isAvailable = await checkPort(port);
    if (!isAvailable) {
      console.log('Testing server response...');
      await testServer(port);
    }
  }
}

runDiagnostics().then(() => {
  console.log('\nDiagnostics complete.');
}); 