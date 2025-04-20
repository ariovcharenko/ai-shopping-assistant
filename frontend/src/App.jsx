import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import AnalyzeButton from './components/AnalyzeButton';
import ResultsPanel from './components/ResultsPanel';
import InstallationInstructions from './components/InstallationInstructions';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nodeInstalled, setNodeInstalled] = useState(true); // Default to true for initial rendering
  const [checkingEnvironment, setCheckingEnvironment] = useState(true);
  
  useEffect(() => {
    // Check if we're running in development mode with a server
    // or if we're running the built version directly
    const checkEnvironment = async () => {
      try {
        // Try to connect to the backend server
        await axios.get('http://localhost:50041/api/health');
        setNodeInstalled(true);
      } catch (err) {
        console.error('Backend server not available:', err);
        setNodeInstalled(false);
      } finally {
        setCheckingEnvironment(false);
      }
    };
    
    checkEnvironment();
  }, []);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    // Clear previous results when query changes
    if (results) setResults(null);
    if (error) setError(null);
  };

  const handleAnalyze = async () => {
    if (!query.trim()) {
      setError('Please enter a search query');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:50041/api/search', { query });
      setResults({
        ...response.data.searchParams,
        hasGenericValues: response.data.hasGenericValues,
        products: response.data.products // Include the matched products
      });
    } catch (err) {
      console.error('Error analyzing search query:', err);
      setError(`Failed to analyze query: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // If we're still checking the environment, show a loading state
  if (checkingEnvironment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">Loading application...</h2>
          <p className="mt-2 text-gray-500">Please wait while we check your environment.</p>
        </div>
      </div>
    );
  }
  
  // If Node.js is not installed, show installation instructions
  if (!nodeInstalled) {
    return <InstallationInstructions />;
  }
  
  // Otherwise, show the main application
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Analysis App</h1>
          <p className="text-gray-600">
            Enter a product search query and get AI-powered structured analysis
          </p>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <SearchInput onQueryChange={handleQueryChange} />
          
          <div className="mt-4">
            <AnalyzeButton onClick={handleAnalyze} isLoading={isLoading} />
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
        </div>

        {results && <ResultsPanel results={results} />}
      </div>
    </div>
  );
}

export default App;
