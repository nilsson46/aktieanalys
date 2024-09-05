import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';

function App() {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar onSearch={handleSearch} /> {/* Use the SearchBar component */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
