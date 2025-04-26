# AI-Powered Product Search

An intelligent product search application that understands natural language queries and maps them to relevant products in the catalog.

## Features

- Natural language processing for product search
- 1000+ product catalog
- Real-time search results
- Modern React frontend
- Node.js/Express backend
- OpenAI integration

## Setup Instructions

1. Clone the repository:
```bash
git clone [your-repo-url]
cd SearchAnalysisApp
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables:
```bash
# In the server directory
cp .env.template .env
# Edit .env and add your OpenAI API key
```

4. Start the application:
```bash
# From the root directory
./start-app.sh
```

The application will automatically:
- Start the backend server on port 5004
- Start the frontend on port 5173
- Open the application in your default browser

## Environment Variables

Required environment variables in `.env`:
- `OPENAI_API_KEY`: Your OpenAI API key
- `PORT`: Backend server port (default: 5004)

## Testing

Make sure the application is connected to:
1. Product catalog (located in server/data/product-catalog.json)
2. OpenAI API (verify your API key in .env)

## License

MIT License
