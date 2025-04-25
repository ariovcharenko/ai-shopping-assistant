const { spawn } = require('child_process');
const net = require('net');

// Find an available port
async function findAvailablePort(startPort) {
  const isPortAvailable = (port) => {
    return new Promise((resolve) => {
      const server = net.createServer();
      server.once('error', () => resolve(false));
      server.once('listening', () => {
        server.close();
        resolve(true);
      });
      server.listen(port);
    });
  };

  let port = startPort;
  while (!(await isPortAvailable(port))) {
    port++;
  }
  return port;
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
    
    // Find available port
    const port = await findAvailablePort(3000);
    console.log(`Starting server on port ${port}`);
    
    // Set environment variables
    const env = { ...process.env, PORT: port.toString() };
    
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
    console.log(`Server should be available at http://localhost:${port}`);
    
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
}

// Run the startup sequence
startServer(); 