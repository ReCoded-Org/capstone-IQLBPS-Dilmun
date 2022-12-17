import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from '../../components/AboutUs/AboutUs';

const AboutUsPage = () => {
  return (
    <motion.div
      data-testid="AboutUs-page"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className=" bg-background p-5">
        <AboutUs />
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
