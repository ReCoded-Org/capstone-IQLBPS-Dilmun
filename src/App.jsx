import React from 'react';
import NavBar from './components/NavBar/NavBar'    
import Features from './components/Features/Features';
import NewsLetter from './components/NewsLetter';
import Testimonials from './components/Proof/Testimonials';
import CostumersLogo from './components/Proof/CostumersLogo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Features />
      <Testimonials />
      <CostumersLogo />
      <NewsLetter />
    </div>
  );
}

export default App;
