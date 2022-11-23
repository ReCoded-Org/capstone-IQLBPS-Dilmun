import React from 'react';
import { motion } from 'framer-motion';
import SignUp from '../../components/SignUp/SignUp';

export default function SignUpPage() {
  return (
    <motion.div className="" data-testid='sign-up-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <SignUp />
    </motion.div>
  );
}
