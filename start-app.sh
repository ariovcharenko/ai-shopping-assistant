#!/bin/bash

echo "Starting Semantic Product Search App..."
echo

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

echo
echo "Starting backend server..."
cd server && npm run safe-dev &
SERVER_PID=$!

# Wait for the server to start
echo "Waiting for server to start..."
sleep 5

echo
echo "Starting frontend client..."
cd ../client && npm start &
CLIENT_PID=$!

# Wait for the frontend to start
echo "Waiting for frontend to start..."
sleep 10

echo
echo "Opening application in Safari..."
open -a Safari http://localhost:3000

echo
echo "App started successfully!"
echo
echo "Backend: http://localhost:5001"
echo "Frontend: http://localhost:3000"
echo
echo "To stop the application, press Ctrl+C"

# Keep the script running until Ctrl+C
trap "kill $SERVER_PID $CLIENT_PID; exit" INT
wait
