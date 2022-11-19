import React from 'react';
import { motion } from 'framer-motion';
import SignIn from '../../components/SignIn/SignIn';

export default function SignInPage() {
  return (
    <motion.div data-testid='sign-in-page'
    initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <SignIn />
    </motion.div>
  );
}
