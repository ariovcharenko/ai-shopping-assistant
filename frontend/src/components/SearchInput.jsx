import { useState } from 'react';

const SearchInput = ({ onQueryChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onQueryChange(value);
  };

  return (
    <div>
      <label htmlFor="search-query" className="search-label">
        Search Query
      </label>
      <input
        type="text"
        id="search-query"
        className="search-input"
        placeholder="Enter your search query (e.g., 'denim pants', 'wireless headphones')"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
