import { useState } from 'react';

const SearchInput = ({ onQueryChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onQueryChange(value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="search-query" className="block text-sm font-medium text-gray-700 mb-1">
        Search Query
      </label>
      <input
        type="text"
        id="search-query"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your search query (e.g., 'wireless headphones with noise cancellation')"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
