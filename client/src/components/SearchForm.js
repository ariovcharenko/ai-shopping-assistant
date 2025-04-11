import React, { useState } from 'react';

function SearchForm({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="search-query" className="block text-sm font-medium text-gray-700 mb-2">
            What are you looking for?
          </label>
          <input
            type="text"
            id="search-query"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 'Looking for high-waisted denim pants' or 'Red prom dress'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`px-4 py-2 rounded-md text-white ${
              loading
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={loading || !query.trim()}
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
