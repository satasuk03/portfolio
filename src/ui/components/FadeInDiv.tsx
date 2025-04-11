import React from "react";
import { motion } from "motion/react";

interface FadeInDivProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInDiv: React.FC<FadeInDivProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;
