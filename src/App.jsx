import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Features from './components/Features/Features';
import DiffSection from './components/DiffSection';
import NewsLetter from './components/NewsLetter';
import FAQ from './components/FAQ';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Features />
      <FAQ />
      <DiffSection />
      <NewsLetter />
    </div>
  );
}

export default App;
