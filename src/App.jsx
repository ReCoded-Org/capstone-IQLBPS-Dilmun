import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import SearchBar from './components/SearchBar';
import ItemDetailsPage from './pages/ItemDetailsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Features />
      <NewsLetter />
      <ItemDetailsPage />
    </div>
  );
}

export default App;
