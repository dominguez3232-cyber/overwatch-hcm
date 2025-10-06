import React from 'react';
import { motion } from 'motion/react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function ResponsiveContainer({ 
  children, 
  maxWidth = 'xl', 
  padding = 'md',
  className = '' 
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-7xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-none'
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 py-2',
    md: 'px-6 py-4 lg:px-12 lg:py-8',
    lg: 'px-8 py-6 lg:px-16 lg:py-12',
    xl: 'px-12 py-8 lg:px-24 lg:py-16'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`w-full mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </motion.div>
  );
}