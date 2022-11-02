import React from 'react';

import DiffSection from './components/DiffSection';
import './App.css';
import NavBar from './components/NavBar/NavBar'    
import Features from './components/Features/Features';

import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App">

      <DiffSection />
      <NewsLetter />
      <NavBar />
      <Features />
      <NewsLetter />

    </div>
  );
}

export default App;
