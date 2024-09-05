import React, { useState, useEffect } from 'react';
import './searchbar.css';

// Step 1: Define a static list of stocks
const sampleStocks = [
  { name: 'Apple Inc', symbol: 'AAPL' },
  { name: 'Microsoft Corporation', symbol: 'MSFT' },
  { name: 'Amazon.com, Inc', symbol: 'AMZN' },
  // Add more sample stocks as needed
];

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setQuery(newValue);
    if(onSearch){
      onSearch(newValue);
    }
  };

  // Step 2: Implement fetchStocks to use the static list for now
  const fetchStocks = async (query) => {
    // Simulate a fetch call with a filter on the static list
    const filteredResults = sampleStocks.filter(stock =>
      stock.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredResults; // This will be replaced with actual fetch call
  };

  useEffect(() => {
    if(query.length > 0){
      fetchStocks(query).then(data => {
        setResults(data);
        setShowDropdown(true);
      });
    } else {
      setShowDropdown(false);
    }
  }, [query]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search stocks..."
        value={query}
        onChange={handleChange}
      />
      {showDropdown && (
        <div className="dropdown">
          {results.map((stock, index) => (
            <div key={index} className="dropdown-item">
              {stock.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;