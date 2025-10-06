import React from 'react';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
}

export function PageTransition({ children, direction = 'right', duration = 0.3 }: PageTransitionProps) {
  const variants = {
    initial: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
  };

  return (
    <motion.div
      key={Math.random()} // Force re-render for transitions
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ 
        duration,
        ease: [0.4, 0, 0.2, 1] // Custom easing for smoother transitions
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}