import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    period: string;
    trend: 'up' | 'down' | 'stable';
  };
  icon?: React.ReactNode;
  description?: string;
  color?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export default function MetricCard({
  title,
  value,
  change,
  icon,
  description,
  color = 'primary',
  size = 'md',
  animated = true
}: MetricCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case 'success':
        return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'warning':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'error':
        return 'text-red-400 bg-red-500/10 border-red-500/20';
      default:
        return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4';
      case 'lg':
        return 'p-8';
      default:
        return 'p-6';
    }
  };

  const getTrendIcon = () => {
    if (!change) return null;
    
    switch (change.trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = () => {
    if (!change) return '';
    
    switch (change.trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-muted-foreground';
    }
  };

  const CardContent = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && (
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColorClasses()}`}>
            {icon}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className={`text-3xl font-bold ${color === 'primary' ? 'text-foreground' : getColorClasses().split(' ')[0]}`}>
          {value}
        </div>
        
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        
        {change && (
          <div className="flex items-center gap-2">
            {getTrendIcon()}
            <span className={`text-sm font-medium ${getTrendColor()}`}>
              {change.value > 0 ? '+' : ''}{change.value}%
            </span>
            <span className="text-sm text-muted-foreground">
              vs {change.period}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Card className={`${getSizeClasses()} hover:bg-secondary/50 transition-colors`}>
          <CardContent />
        </Card>
      </motion.div>
    );
  }

  return (
    <Card className={getSizeClasses()}>
      <CardContent />
    </Card>
  );
}