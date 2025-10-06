import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, TrendingDown, Minus, Target, DollarSign, Users, BarChart3, Zap } from 'lucide-react';

// Stakeholder color mapping
export const stakeholderColors = {
  CEO: {
    primary: '#003366', // Deep Blue
    bg: 'bg-blue-950/20',
    border: 'border-blue-900/30',
    text: 'text-blue-400',
    accent: 'bg-blue-600'
  },
  CFO: {
    primary: '#007F5F', // Emerald Green
    bg: 'bg-emerald-950/20',
    border: 'border-emerald-900/30',
    text: 'text-emerald-400',
    accent: 'bg-emerald-600'
  },
  CHRO: {
    primary: '#6A0DAD', // Royal Purple
    bg: 'bg-purple-950/20',
    border: 'border-purple-900/30',
    text: 'text-purple-400',
    accent: 'bg-purple-600'
  },
  COO: {
    primary: '#D35400', // Burnt Orange
    bg: 'bg-orange-950/20',
    border: 'border-orange-900/30',
    text: 'text-orange-400',
    accent: 'bg-orange-600'
  },
  PROOF: {
    primary: '#DAA520', // Gold
    bg: 'bg-yellow-950/20',
    border: 'border-yellow-900/30',
    text: 'text-yellow-400',
    accent: 'bg-yellow-600'
  }
};

// Icon mapping for different metric types
const metricIcons = {
  'revenue': DollarSign,
  'forecast-accuracy': Target,
  'engagement-score': Users,
  'pipeline-conversion': BarChart3,
  'revenue-lift': TrendingUp,
  'roi': Zap,
  'default': BarChart3
};

// Base metric card props interface
export interface MetricCardProps {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO' | 'PROOF';
  metric: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  label?: string;
  description?: string;
  target?: string | number;
  module?: string;
  size?: 'sm' | 'md' | 'lg';
  showTrend?: boolean;
  showTarget?: boolean;
  onClick?: () => void;
  className?: string;
}

// Trend indicator component
const TrendIndicator: React.FC<{
  trend: 'up' | 'down' | 'neutral';
  value?: string;
  stakeholder: keyof typeof stakeholderColors;
}> = ({ trend, value, stakeholder }) => {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const colors = stakeholderColors[stakeholder];
  
  return (
    <div className={`flex items-center gap-1 ${colors.text}`}>
      <TrendIcon className="w-3 h-3" />
      {value && <span className="text-xs">{value}</span>}
    </div>
  );
};

// Main metric card component following naming convention: metric-card/{stakeholder}-{metric}
export const MetricCard: React.FC<MetricCardProps> = ({
  stakeholder,
  metric,
  value,
  unit = '',
  trend,
  trendValue,
  label,
  description,
  target,
  module,
  size = 'md',
  showTrend = true,
  showTarget = true,
  onClick,
  className = ''
}) => {
  const colors = stakeholderColors[stakeholder];
  const IconComponent = metricIcons[metric as keyof typeof metricIcons] || metricIcons.default;
  
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const textSizes = {
    sm: { value: 'text-lg', label: 'text-xs' },
    md: { value: 'text-2xl', label: 'text-sm' },
    lg: { value: 'text-3xl', label: 'text-base' }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      <Card 
        className={`
          ${colors.bg} ${colors.border} 
          ${sizeClasses[size]}
          backdrop-blur-sm transition-all duration-300 
          hover:shadow-lg hover:shadow-primary/10
          ${onClick ? 'cursor-pointer' : ''}
        `}
        onClick={onClick}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`${colors.accent} p-2 rounded-lg`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            {module && (
              <Badge variant="secondary" className="text-xs">
                {module}
              </Badge>
            )}
          </div>
          {trend && showTrend && (
            <TrendIndicator trend={trend} value={trendValue} stakeholder={stakeholder} />
          )}
        </div>

        {/* Value */}
        <div className="mb-2">
          <div className={`${textSizes[size].value} font-bold text-foreground flex items-baseline gap-1`}>
            {value}
            {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          </div>
        </div>

        {/* Label and Description */}
        <div className="space-y-1">
          <div className={`${textSizes[size].label} font-medium ${colors.text}`}>
            {label || metric.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </div>
          {description && (
            <div className="text-xs text-muted-foreground line-clamp-2">
              {description}
            </div>
          )}
        </div>

        {/* Target */}
        {target && showTarget && (
          <div className="mt-2 pt-2 border-t border-border/50">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Target:</span>
              <span className={colors.text}>{target}{unit}</span>
            </div>
          </div>
        )}

        {/* Stakeholder indicator */}
        <div className="absolute top-2 right-2">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colors.primary }}
            title={stakeholder}
          />
        </div>
      </Card>
    </motion.div>
  );
};

// Specific metric card components following the naming convention
export const MetricCardCEORevenue: React.FC<Omit<MetricCardProps, 'stakeholder' | 'metric'>> = (props) => (
  <MetricCard stakeholder="CEO" metric="revenue" {...props} />
);

export const MetricCardCFOForecastAccuracy: React.FC<Omit<MetricCardProps, 'stakeholder' | 'metric'>> = (props) => (
  <MetricCard stakeholder="CFO" metric="forecast-accuracy" {...props} />
);

export const MetricCardCHROEngagementScore: React.FC<Omit<MetricCardProps, 'stakeholder' | 'metric'>> = (props) => (
  <MetricCard stakeholder="CHRO" metric="engagement-score" {...props} />
);

export const MetricCardCOOPipelineConversion: React.FC<Omit<MetricCardProps, 'stakeholder' | 'metric'>> = (props) => (
  <MetricCard stakeholder="COO" metric="pipeline-conversion" {...props} />
);

export const ProofRevenueLift: React.FC<Omit<MetricCardProps, 'stakeholder' | 'metric'>> = (props) => (
  <MetricCard stakeholder="PROOF" metric="revenue-lift" {...props} />
);

// Grid container for metric cards
export const MetricCardGrid: React.FC<{
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ 
  children, 
  columns = 3, 
  gap = 'md',
  className = '' 
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6'
  };

  return (
    <div className={`grid ${gridCols[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

// Factory function to create metric cards from JSON schema
export const createMetricCardFromSchema = (data: {
  stakeholder: string;
  module: string;
  metric: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  target?: string | number;
}) => {
  return (
    <MetricCard
      stakeholder={data.stakeholder as MetricCardProps['stakeholder']}
      metric={data.metric}
      value={data.value}
      unit={data.unit}
      trend={data.trend}
      trendValue={data.trendValue}
      target={data.target}
      module={data.module}
    />
  );
};