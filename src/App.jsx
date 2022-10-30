import React from 'react';
import NavBar from './components/NavBar/NavBar'    
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Features />
      <NewsLetter />
    </div>
  );
}

export default App;
