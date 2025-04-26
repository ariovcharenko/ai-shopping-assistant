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
cd Cline
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

4. Start the backend server:
```bash
# In the server directory
npm start
```

5. Start the frontend development server:
```bash
# In the frontend directory
npm run dev
```

6. Access the application:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5004

## Example Queries

The application understands natural language queries like:
- "I need something to keep my coffee hot during morning meetings"
- "Looking for comfy bottoms for lounging at home"
- "Need something to carry my laptop and look professional"

## Technology Stack

- Frontend: React, Vite, TailwindCSS
- Backend: Node.js, Express
- AI: OpenAI GPT-3.5/4
- Database: JSON-based product catalog

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License
