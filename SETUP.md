# Setup Instructions for AI-Powered Product Search Analysis

This guide will walk you through the complete setup process for the AI-Powered Product Search Analysis application.

## Prerequisites

Before installing the application, make sure you have:

1. **Node.js** (v14.0.0 or higher) and **npm** installed on your system
2. An **OpenAI API key** for the natural language processing capabilities
3. **Git** for version control and cloning the repository

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/ariovcharenko/ai-shopping-assistant.git
cd ai-shopping-assistant
```

### 2. Set Up the Backend

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the server directory with your OpenAI API key:

```bash
echo "OPENAI_API_KEY=your_api_key_here" > .env
echo "PORT=5004" >> .env
```

Make sure to replace `your_api_key_here` with your actual OpenAI API key.

### 3. Set Up the Frontend

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

### 4. Start the Application

You can start both the frontend and backend components with our convenient start script. Return to the root directory and run:

```bash
cd ..
chmod +x start-app.sh
./start-app.sh
```

This script will:
- Start the backend server on port 5004
- Start the frontend on an available port (typically 5173 or next available)
- Automatically open the application in your default browser

## Manual Startup

If you prefer to start the components separately:

### Start the Backend Server

```bash
cd server
npm run dev
```

### Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

Then open your browser to the URL shown in the terminal (typically http://localhost:5173).

## Configuration

### Environment Variables

The application uses the following environment variables:

- `OPENAI_API_KEY`: Your OpenAI API key for natural language processing
- `PORT`: The port on which the backend server will run (default: 5004)

### Application Files

- Product catalog is stored in `server/data/product-catalog.json`
- Search performance metrics are stored in `server/data/performance_metrics.jsonl`
- Query history is logged in `server/data/prompt_history.jsonl`

## Troubleshooting

### Port Already in Use

If you see an error like `Error: listen EADDRINUSE: address already in use :::5004`, it means another process is already using port 5004. You can either:

1. Stop the existing process, or
2. Change the PORT in the .env file to an available port

### OpenAI API Issues

If you encounter errors related to the OpenAI API:

1. Verify your API key is correct in the .env file
2. Check that your OpenAI account has available credits
3. Ensure you have network connectivity to the OpenAI services

## Data Persistence

The application stores various data files:

- Search queries and results are stored in `server/data/prompt_history.jsonl`
- Performance metrics are tracked in `server/data/performance_metrics.jsonl`

These files will be automatically created if they don't exist.