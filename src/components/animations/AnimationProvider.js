import React from "react";
import { AnimatePresence } from 'framer-motion'

function AnimationProvider({ children }) {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  )
}

export default AnimationProvider;
