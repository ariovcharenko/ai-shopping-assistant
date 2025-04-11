# Semantic Product Search App

A React frontend and Node.js + Express backend application that uses OpenAI's API to parse natural language search queries for products.

## Project Structure

- `client/`: React frontend application
- `server/`: Node.js + Express backend application
- `data/`: Directory for storing evaluation data

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key (set in `server/.env`)

## Setup

1. Clone the repository
2. Install dependencies for both client and server:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Configure the OpenAI API key in `server/.env`:

```
PORT=5001
OPENAI_API_KEY=your_openai_api_key_here
```

## Running the Application

### Option 1: Using the Batch File (Windows)

The easiest way to start both the server and client is to use the provided batch file:

```bash
# From the project root
start-app.bat
```

This will:
- Check if the data directory and evaluation dataset file exist, creating them if needed
- Start the backend server on port 5001
- Start the frontend client on port 3000

### Option 2: Manual Start

#### Start the Backend Server

```bash
cd server
npm run safe-dev  # Checks if port is available before starting
```

The server will run on http://localhost:5001

#### Start the Frontend Client

```bash
cd client
npm start
```

The client will run on http://localhost:3000

## Features

- Natural language product search using OpenAI's API
- Product filtering based on AI-interpreted search parameters
- User feedback collection for search results
- Evaluation metrics for search performance
- Logging of search interactions for future analysis

## Troubleshooting

### "An error occurred while processing your search"

This error can occur for several reasons:

1. **Server not running**: Make sure the server is running on port 5001
2. **OpenAI API key issues**: Check if your API key is valid and has sufficient quota
3. **Network issues**: Ensure you have a stable internet connection
4. **Port conflicts**: If port 5001 is already in use, change it in `server/.env` and update the proxy in `client/package.json`

### Server Won't Start

If the server won't start, check:

1. **Port availability**: Run `npm run check-port` in the server directory to see if port 5001 is available
2. **Missing dependencies**: Run `npm install` in the server directory
3. **Environment variables**: Ensure `.env` file exists with proper configuration

### Client Won't Connect to Server

If the client can't connect to the server:

1. **Proxy configuration**: Ensure the proxy in `client/package.json` matches the server port
2. **CORS issues**: Check if CORS is properly configured in the server
3. **Server running**: Verify the server is running and accessible

## Data Storage

The application stores evaluation data in `server/data/eval_dataset.jsonl`. This file is created automatically if it doesn't exist.

## API Endpoints

- `POST /api/search`: Search for products using natural language
- `POST /api/feedback`: Provide feedback on search results
- `GET /api/metrics`: Get evaluation metrics
- `GET /api/eval-dataset`: Export evaluation dataset

## License

ISC
