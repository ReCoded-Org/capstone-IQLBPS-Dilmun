import Hero from './components/HeroSection/Hero';
import NavBar from './components/NavBar/NavBar'
import Features from './components/Features/Features';
import DiffSection from './components/DiffSection/DiffSection';
import NewsLetter from './components/NewsLetter';
import Testimonials from './components/Proof/Testimonials';
import PartnersLogo from './components/Proof/PartnersLogo';
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
      <DiffSection />
      <NewsLetter />
    </div>
  );
}
export default App;