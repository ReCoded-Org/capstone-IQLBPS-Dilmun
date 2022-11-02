import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import SearchBar from './components/SearchBar';
import SignInPage from './Pages/SignInPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <NewsLetter />
    </div>
  );
}

export default App;
