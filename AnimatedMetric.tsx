import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedMetricProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  format?: 'number' | 'currency' | 'percentage';
  locale?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: number;
  language: 'en' | 'es';
}

export function AnimatedMetric({
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 2,
  format = 'number',
  locale = 'en-US',
  trend,
  trendValue,
  language
}: AnimatedMetricProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setDisplayValue(value * easeOutCubic);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(val);
      case 'percentage':
        return `${val.toFixed(1)}%`;
      default:
        return new Intl.NumberFormat(locale).format(Math.round(val));
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-muted-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border rounded-lg p-6"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-foreground mb-2"
          >
            {prefix}{formatValue(displayValue)}{suffix}
          </motion.div>
          
          <div className="text-sm text-muted-foreground mb-3">
            {label}
          </div>

          {trend && trendValue !== undefined && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`flex items-center text-sm ${getTrendColor()}`}
            >
              <span className="mr-1">{getTrendIcon()}</span>
              <span>
                {formatValue(Math.abs(trendValue))} 
                {language === 'en' ? ' vs last period' : ' vs período anterior'}
              </span>
            </motion.div>
          )}
        </div>

        {/* Visual indicator */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`w-3 h-3 rounded-full ${
            trend === 'up' ? 'bg-green-500' : 
            trend === 'down' ? 'bg-red-500' : 
            'bg-blue-500'
          }`}
        />
      </div>
    </motion.div>
  );
}