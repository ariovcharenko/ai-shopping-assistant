const net = require('net');

/**
 * Check if a port is in use
 * @param {number} port - The port to check
 * @returns {Promise<boolean>} - True if the port is available, false if it's in use
 */
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is already in use`);
        resolve(false);
      } else {
        console.error('Error checking port availability:', err);
        resolve(false);
      }
    });
    
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    
    server.listen(port);
  });
}

/**
 * Check if the server is already running on the specified port
 * @param {number} port - The port to check
 * @returns {Promise<boolean>} - True if the server is running, false otherwise
 */
async function isServerRunning(port) {
  try {
    // Try to connect to the server
    const client = new net.Socket();
    
    return new Promise((resolve) => {
      client.once('connect', () => {
        console.log(`Server is already running on port ${port}`);
        client.destroy();
        resolve(true);
      });
      
      client.once('error', (err) => {
        if (err.code === 'ECONNREFUSED') {
          console.log(`No server running on port ${port}`);
          resolve(false);
        } else {
          console.error('Error checking server:', err);
          resolve(false);
        }
      });
      
      client.connect(port, 'localhost');
    });
  } catch (error) {
    console.error('Error checking if server is running:', error);
    return false;
  }
}

module.exports = {
  isPortAvailable,
  isServerRunning
};

// If this script is run directly, check the port specified in the command line or default to 5001
if (require.main === module) {
  const port = parseInt(process.argv[2] || process.env.PORT || '5001', 10);
  
  isServerRunning(port).then(isRunning => {
    if (isRunning) {
      console.log(`A server is already running on port ${port}`);
      process.exit(1);
    } else {
      console.log(`Port ${port} is available`);
      process.exit(0);
    }
  }).catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}
