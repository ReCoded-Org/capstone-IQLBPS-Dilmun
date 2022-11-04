import React from 'react';

import NavBar from './components/NavBar/NavBar'
import Features from './components/Features/Features';
import DiffSection from './components/DiffSection';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar';



function App() {
  return (
    <div className="App"> 
      <NavBar />
      <SearchBar />
      <Features />
      <DiffSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
