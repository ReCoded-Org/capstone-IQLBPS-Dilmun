import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Features from './components/Features/Features';
import DiffSection from './components/DiffSection';
import NewsLetter from './components/NewsLetter';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  return (
    <div className="App"> 
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <DiffSection />
      <NewsLetter />
    </div>
  );
}

export default App;
