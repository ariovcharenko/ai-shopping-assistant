import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import MetricsDisplay from './components/MetricsDisplay';
import InstallationInstructions from './components/InstallationInstructions';

function App() {
  const [searchParams, setSearchParams] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [interactionId, setInteractionId] = useState(null);
  const [showMetrics, setShowMetrics] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState(null);
  const [nodeInstalled, setNodeInstalled] = useState(true); // Default to true for initial rendering
  const [checkingEnvironment, setCheckingEnvironment] = useState(true);
  
  useEffect(() => {
    // Check if we're running in development mode with a server
    // or if we're running the built version directly
    const checkEnvironment = async () => {
      try {
        // Try to connect to the backend server
        await axios.get('/api/health');
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

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Sending search request for query:', query);
      const response = await axios.post('/api/search', { query });
      
      setSearchParams(response.data.searchParams);
      setProducts(response.data.products);
      setInteractionId(response.data.interactionId);
      
      // Check if the search returned an error response
      if (response.data.searchParams?.category === 'api_error') {
        const errorType = response.data.searchParams.subcategory;
        const errorDetails = response.data.searchParams.filters.join(', ');
        console.warn(`API error detected: ${errorType} - ${errorDetails}`);
        
        // Show a user-friendly error message based on the error type
        let errorMessage = 'An error occurred while processing your search. ';
        
        if (errorType === 'quota_exceeded') {
          errorMessage += 'The API usage quota has been exceeded. Please try again later.';
        } else if (errorType === 'authentication') {
          errorMessage += 'There was an authentication issue with the API. Please contact support.';
        } else if (errorType === 'timeout') {
          errorMessage += 'The request timed out. Please try again.';
        } else if (errorType === 'network') {
          errorMessage += 'A network error occurred. Please check your internet connection.';
        } else {
          errorMessage += 'Please try again or try a different search query.';
        }
        
        setError(errorMessage);
      }
    } catch (err) {
      console.error('Search error:', err);
      
      // Provide more specific error messages based on the error
      let errorMessage = 'An error occurred while processing your search. ';
      
      if (err.response) {
        // Server returned an error response
        console.error('Server error response:', err.response.data);
        
        if (err.response.status === 404) {
          errorMessage += 'The API endpoint was not found. Please check if the server is running.';
        } else if (err.response.status === 500) {
          errorMessage += 'The server encountered an internal error. ' + 
                         (err.response.data.error ? `Details: ${err.response.data.error}` : 'Please try again later.');
        } else {
          errorMessage += `Server returned status ${err.response.status}. Please try again.`;
        }
      } else if (err.request) {
        // Request was made but no response received
        console.error('No response received:', err.request);
        errorMessage += 'No response received from the server. Please check if the server is running.';
      } else {
        // Error in setting up the request
        errorMessage += err.message || 'Please try again.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedback = async (success) => {
    if (interactionId === null) return;
  
    try {
      await axios.post('/api/feedback', {
        interactionId,
        success
      });
  
      setFeedbackStatus(success ? 'Thanks for your feedback!' : 'We appreciate your input!');
      
      // Reset interaction
      setInteractionId(null);
  
      // Hide the message after 3 seconds
      setTimeout(() => setFeedbackStatus(null), 3000);
    } catch (err) {
      console.error('Feedback error:', err);
      setFeedbackStatus('Failed to record feedback. Please try again.');
      setTimeout(() => setFeedbackStatus(null), 3000);
    }
  };
  

  const toggleMetrics = async () => {
    setShowMetrics(!showMetrics);
  };

  // If we're still checking the environment, show a loading state
  if (checkingEnvironment) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Search Analysis App</h1>
          <p className="mt-1 text-sm text-gray-500">
            Enter a natural language product search query and see how AI interprets it
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <SearchForm onSearch={handleSearch} loading={loading} />
          
          {error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {searchParams && (
            <>
              <SearchResults 
                searchParams={searchParams} 
                products={products} 
                onFeedback={handleFeedback}
              />
              {feedbackStatus && (
                <div className="mt-4 p-3 text-sm bg-green-100 text-green-700 rounded">
                  {feedbackStatus}
                </div>
              )}
          </>
          )}
          
          <div className="mt-8 flex justify-end">
            <button
              onClick={toggleMetrics}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              {showMetrics ? 'Hide Metrics' : 'Show Metrics'}
            </button>
          </div>
          
          {showMetrics && <MetricsDisplay />}
        </div>
      </main>
    </div>
  );
}

export default App;
