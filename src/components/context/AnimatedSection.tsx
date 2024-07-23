import { motion } from "framer-motion";
import React from "react";
type props = {
  children: React.ReactNode;
};
const rotateAnimation = {
    initial: {
      opacity:0,
      scale: 0.7
    },
    animate: {
      opacity:1,
      scale: 1
    },
    exit: {
      opacity:0,
      scale: 0.7
    },
  };
function AnimatedSection({ children }: props) {
  return (
    <motion.section
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={rotateAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
