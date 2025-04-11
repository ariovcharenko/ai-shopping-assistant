import { useState } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import AnalyzeButton from './components/AnalyzeButton';
import ResultsPanel from './components/ResultsPanel';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      const response = await axios.post('http://localhost:5001/api/search', { query });
      setResults({
        ...response.data.searchParams,
        hasGenericValues: response.data.hasGenericValues
      });
    } catch (err) {
      console.error('Error analyzing search query:', err);
      setError(`Failed to analyze query: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

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
