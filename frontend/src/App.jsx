import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import AnalyzeButton from './components/AnalyzeButton';
import ResultsPanel from './components/ResultsPanel';
import InstallationInstructions from './components/InstallationInstructions';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nodeInstalled, setNodeInstalled] = useState(true); // Default to true for initial rendering
  const [checkingEnvironment, setCheckingEnvironment] = useState(true);
  
  useEffect(() => {
    const checkEnvironment = async () => {
      try {
        await axios.get('http://localhost:5004/api/health');
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

    console.log('Sending query to backend:', query);

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5004/api/search', { query });
      console.log('Backend response:', response.data);
      setResults({
        searchParams: response.data.searchParams,
        products: response.data.products,
        total: response.data.products.length
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
      <div className="app-container">
        <div>
          <h2>Loading application...</h2>
          <p>Please wait while we check your environment.</p>
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
    <div className="app-container">
      <h1 className="app-title">Search Analysis App</h1>
      <SearchInput onQueryChange={handleQueryChange} />
      
      <div>
        <AnalyzeButton onClick={handleAnalyze} isLoading={isLoading} />
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {results && <ResultsPanel results={results} />}
    </div>
  );
}

export default App;
