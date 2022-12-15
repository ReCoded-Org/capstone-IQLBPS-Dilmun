import React from 'react';
import { motion } from 'framer-motion';
import DiffSection from '../../components/DiffSection/DiffSection';
import FAQ from '../../components/FAQ';
import Features from '../../components/Features/Features';
import Hero from '../../components/HeroSection/Hero';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import PartnersLogo from '../../components/Proof/PartnersLogo';
import Testimonials from '../../components/Proof/Testimonials';

const HomePage = () => {
  return (
    <motion.div
      data-testid="home-page"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Hero />
      <Features />
      <DiffSection />
      <section className="min-h-screen bg-background sna">
        <Testimonials />
        <PartnersLogo />
      </section>
      <FAQ />
      <NewsLetter />
    </motion.div>
  );
};
export default HomePage;
