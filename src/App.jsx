import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'    
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NewsLetter />
    </div>
  );
}

export default App;