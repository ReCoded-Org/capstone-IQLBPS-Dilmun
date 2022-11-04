import React from 'react';
import NavBar from './components/NavBar/NavBar'    
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import Testimonials from './components/Proof/Testimonials';
import PartnersLogo from './components/Proof/PartnersLogo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Features />
      <Testimonials />
      <PartnersLogo />
      <NewsLetter />
    </div>
  );
}

export default App;
