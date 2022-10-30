import React from 'react';

import './App.css';
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <FAQ />
      <Features />
      <NewsLetter />
    </div>
  );
}

export default App;
