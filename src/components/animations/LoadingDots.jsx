import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "2rem",
  height: "1.25rem",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "white",
  borderRadius: "0.25rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "30%",
  },
  end: {
    y: "90%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

function LoadingDots() {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: { duration: 0.6 },
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="m-auto"
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </motion.div>
  );
}

export default LoadingDots;