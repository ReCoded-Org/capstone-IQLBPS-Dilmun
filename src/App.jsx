import React from 'react';
import logo from './logo.svg';

import DiffSection from './components/DiffSection';
import './App.css';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DiffSection />
      </header>

        <NewsLetter />

    </div>
  );
}

export default App;