import React from 'react';
import { motion } from 'motion/react';

interface Step {
  id: string;
  label: string;
  completed: boolean;
  current?: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
  language: 'en' | 'es';
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
}

export function ProgressIndicator({ 
  steps, 
  language, 
  orientation = 'horizontal',
  size = 'md' 
}: ProgressIndicatorProps) {
  const sizeClasses = {
    sm: {
      step: 'w-6 h-6 text-xs',
      line: 'h-0.5',
      text: 'text-xs'
    },
    md: {
      step: 'w-8 h-8 text-sm',
      line: 'h-1',
      text: 'text-sm'
    },
    lg: {
      step: 'w-10 h-10 text-base',
      line: 'h-1.5',
      text: 'text-base'
    }
  };

  const containerClass = orientation === 'horizontal' 
    ? 'flex items-center justify-between' 
    : 'flex flex-col space-y-4';

  return (
    <div className={containerClass}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`
              ${sizeClasses[size].step}
              rounded-full flex items-center justify-center font-medium
              ${step.completed 
                ? 'bg-green-500 text-white' 
                : step.current 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground border-2 border-border'
              }
            `}
          >
            {step.completed ? '✓' : index + 1}
          </motion.div>

          {/* Step Label */}
          <div className={`ml-3 ${sizeClasses[size].text}`}>
            <span className={`font-medium ${
              step.current ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {step.label}
            </span>
          </div>

          {/* Connection Line */}
          {orientation === 'horizontal' && index < steps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: step.completed ? 1 : 0.3 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`
                flex-1 mx-4 ${sizeClasses[size].line}
                ${step.completed ? 'bg-green-500' : 'bg-border'}
              `}
            />
          )}
        </div>
      ))}
    </div>
  );
}