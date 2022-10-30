import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FAQ />
      <Features />
      <NewsLetter />
    </div>
  );
}

export default App;
