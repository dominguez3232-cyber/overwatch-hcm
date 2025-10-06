import React from 'react';
import { motion } from 'motion/react';

interface LoadingStateProps {
  language: 'en' | 'es';
  message?: string;
  variant?: 'default' | 'minimal' | 'skeleton';
}

export function LoadingState({ language, message, variant = 'default' }: LoadingStateProps) {
  const defaultMessage = language === 'en' ? 'Loading...' : 'Cargando...';
  const displayMessage = message || defaultMessage;

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent"></div>
          <span className="text-muted-foreground">{displayMessage}</span>
        </div>
      </div>
    );
  }

  if (variant === 'skeleton') {
    return (
      <div className="space-y-4 p-6">
        <div className="flex items-center space-x-4">
          <div className="animate-pulse bg-muted rounded-lg h-12 w-12"></div>
          <div className="space-y-2 flex-1">
            <div className="animate-pulse bg-muted rounded h-4 w-3/4"></div>
            <div className="animate-pulse bg-muted rounded h-3 w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="animate-pulse bg-muted rounded h-4 w-full"></div>
          <div className="animate-pulse bg-muted rounded h-4 w-5/6"></div>
          <div className="animate-pulse bg-muted rounded h-4 w-4/5"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4"
        >
          <span className="text-primary-foreground text-2xl">⚡</span>
        </motion.div>
        
        <h2 className="text-xl font-medium mb-2">OVERWATCH³</h2>
        <p className="text-muted-foreground">{displayMessage}</p>
        
        <div className="flex items-center justify-center mt-6 space-x-1">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 bg-primary rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            className="w-2 h-2 bg-primary rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            className="w-2 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}