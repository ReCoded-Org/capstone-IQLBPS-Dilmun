import React from 'react';
 // import './App.css';
import NavBar from './components/NavBar/NavBar'    
import Features from './components/Features/Features';
import DiffSection from './components/DiffSection';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Features />
      <DiffSection />
      <NewsLetter />
    </div>
  );
}

export default App;
