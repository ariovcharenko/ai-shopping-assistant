const { spawn } = require('child_process');
const path = require('path');

// Start the server
const server = spawn('node', ['server/index.js'], {
    stdio: 'inherit',
    shell: true
});

server.on('error', (err) => {
    console.error('Failed to start server:', err);
});

server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.kill();
    process.exit();
}); 