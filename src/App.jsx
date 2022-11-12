import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Features from './components/Features/Features';
import DiffSection from './components/DiffSection/DiffSection';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';
// import FAQPage from './Pages/FAQPage/FAQPage';
import FilterPage from './Pages/FilterPage/FilterPage';




function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Features />
      <DiffSection />
      <NewsLetter />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/faq" element={<FAQPage />} /> */}
        <Route path="/products" element={<FilterPage />} />

      </Routes>
      <Footer />
    </div>
  );
}
export default App;