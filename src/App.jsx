import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Features />
      <NewsLetter />
      <SearchBar />
    </div>
  );
}

export default App;
