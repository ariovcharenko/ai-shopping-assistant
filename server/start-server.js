const { spawn } = require('child_process');
const net = require('net');
require('dotenv').config();

// Use the PORT from .env file, fallback to 5004 if not specified
const PORT = process.env.PORT || 5004;

// Check if the port is available
async function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
}

// Kill existing Node processes
async function killExistingProcesses() {
  return new Promise((resolve) => {
    const kill = spawn('pkill', ['-f', 'node index.js']);
    kill.on('close', (code) => {
      console.log('Cleaned up existing processes');
      resolve();
    });
  });
}

// Start the server
async function startServer() {
  try {
    // Clean up existing processes
    await killExistingProcesses();
    
    // Check if specified port is available
    const isAvailable = await isPortAvailable(PORT);
    if (!isAvailable) {
      console.error(`Port ${PORT} is already in use. Please specify a different port in the .env file or free up this port.`);
      process.exit(1);
    }
    
    console.log(`Starting server on port ${PORT}`);
    
    // Set environment variables
    const env = { ...process.env, PORT: PORT.toString() };
    
    // Start the server
    const server = spawn('node', ['index.js'], {
      env,
      stdio: 'inherit'
    });
    
    // Handle server process
    server.on('error', (err) => {
      console.error('Failed to start server:', err);
      process.exit(1);
    });
    
    // Log the port
    console.log(`Server should be available at http://localhost:${PORT}`);
    
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

// Run the startup sequence
startServer();