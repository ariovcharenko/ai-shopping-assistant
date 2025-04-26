# AI-Powered Product Search - Backend

This is the backend for the AI-Powered Product Search application, built with Node.js and Express.

## Features

- Natural language processing for product search
- 1000+ product catalog
- OpenAI integration
- RESTful API endpoints
- JSON-based product database

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
# Create a .env file and add your OpenAI API key
OPENAI_API_KEY=<your-api-key>
PORT=5004
```

3. Start the server:
```bash
npm start
```

4. Access the API:
- Backend API: http://localhost:5004

## Available Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server with nodemon for development
- `npm run safe-dev` - Start the server with port checking

## API Endpoints

- `POST /api/search` - Search for products using natural language
- `GET /api/products` - Get all products
- `GET /api/health` - Check server health

## Technology Stack

- Node.js
- Express
- OpenAI API
