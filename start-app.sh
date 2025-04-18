#!/bin/bash

echo "Starting Semantic Product Search App..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "Error: Node.js is not installed or not in your PATH."
  echo "Please install Node.js using one of the following methods:"
  echo
  echo "Method 1: Install via Homebrew (recommended)"
  echo "  1. Install Homebrew: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
  echo "  2. Install Node.js: brew install node"
  echo
  echo "Method 2: Download from Node.js website"
  echo "  Visit https://nodejs.org/en/download/ and download the macOS installer"
  echo
  echo "After installing Node.js, run this script again."
  exit 1
fi

# Check if the data directory exists, create it if not
if [ ! -d "server/data" ]; then
  echo "Creating data directory..."
  mkdir -p "server/data"
fi

# Check if prompt_history.jsonl exists, create it if not
if [ ! -f "server/data/prompt_history.jsonl" ]; then
  echo "Creating empty prompt_history.jsonl file..."
  touch "server/data/prompt_history.jsonl"
fi

# Start the backend server
echo
echo "Starting backend server..."
cd server
npm run safe-dev &
SERVER_PID=$!
cd ..

# Wait for the server to start
echo "Waiting for server to start..."
sleep 5

# Start the frontend client
echo
echo "Starting frontend client..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# Wait for the frontend to start
echo "Waiting for frontend to start..."
sleep 10

# Open the application in Safari
echo
echo "Opening application in Safari..."
open -a Safari "http://localhost:5173"

echo
echo "App started successfully!"
echo
echo "Backend: http://localhost:5001"
echo "Frontend: http://localhost:5173"
echo
echo "To stop the application, press Ctrl+C"

# Keep the script running until Ctrl+C
trap "kill $SERVER_PID $FRONTEND_PID; exit" INT
wait

# If the script exits without Ctrl+C, make sure to kill the processes
kill $SERVER_PID $FRONTEND_PID 2>/dev/null
