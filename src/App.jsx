import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/HeroSection/Hero';
import NavBar from './components/NavBar/NavBar'
import Features from './components/Features/Features';
import DiffSection from './components/DiffSection/DiffSection';
import NewsLetter from './components/NewsLetter';
import Testimonials from './components/Proof/Testimonials';
import PartnersLogo from './components/Proof/PartnersLogo';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import FAQ from './components/FAQ';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <SearchBar />
      <Features />
      <Testimonials />
      <PartnersLogo />
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <FAQ />
      <DiffSection />
      <NewsLetter />
    </div>
  );
}
export default App;