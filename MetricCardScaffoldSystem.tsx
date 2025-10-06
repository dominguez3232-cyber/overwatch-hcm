/**
 * OVERWATCH³ Metric Card Scaffold System
 * Schema-traceable metric cards that match Figma naming convention
 */

import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { 
  MetricCardProps, 
  StakeholderType,
  STAKEHOLDER_COLORS,
  ANIMATION_PRESETS 
} from './FigmaScaffoldTypes';
import { 
  ComponentStyleGenerator, 
  FigmaComponentNaming, 
  SchemaTracer 
} from './FigmaComponentFactory';

// Base Metric Card Component
export const MetricCard: React.FC<MetricCardProps> = ({
  stakeholder,
  module,
  metric,
  value,
  unit = '',
  target,
  variance,
  trend,
  status = 'healthy',
  language,
  onClick,
  onHover,
  className = ''
}) => {
  // Generate naming convention
  const naming = FigmaComponentNaming.generate('metric-card', stakeholder, module, metric);
  const schemaTrace = SchemaTracer.generate(stakeholder, module, metric);
  
  // Get stakeholder colors
  const colors = STAKEHOLDER_COLORS[stakeholder];
  
  // Get component classes
  const cardClasses = ComponentStyleGenerator.getMetricCardClasses(stakeholder, status);
  
  // Trend icon
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };
  
  // Status icon
  const getStatusIcon = () => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'critical':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };
  
  // Format value
  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      return val.toLocaleString();
    }
    return val;
  };
  
  return (
    <motion.div
      className={`${cardClasses} ${className}`}
      style={{
        '--stakeholder-primary': colors.primary,
        '--stakeholder-secondary': colors.secondary,
        '--stakeholder-light': colors.light,
      } as React.CSSProperties}
      onClick={onClick}
      onMouseEnter={onHover}
      data-figma-name={naming.figmaName}
      data-schema-trace={schemaTrace}
      {...ANIMATION_PRESETS.metric}
    >
      {/* Stakeholder Indicator */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-50"
        style={{ backgroundColor: colors.primary }}
      />
      
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-medium text-foreground text-sm mb-1">
            {metric}
          </h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {stakeholder} • {module}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          {getTrendIcon()}
        </div>
      </div>
      
      {/* Value */}
      <div className="mb-3">
        <div className="flex items-baseline gap-1">
          <span 
            className="text-2xl font-bold"
            style={{ color: colors.primary }}
          >
            {formatValue(value)}
          </span>
          {unit && (
            <span className="text-sm text-muted-foreground">
              {unit}
            </span>
          )}
        </div>
        
        {/* Target and Variance */}
        {target && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-muted-foreground">
              {language === 'en' ? 'Target:' : 'Meta:'} {formatValue(target)}{unit}
            </span>
            {variance !== undefined && (
              <span 
                className={`text-xs px-2 py-1 rounded-full ${
                  variance >= 0 
                    ? 'bg-green-500/10 text-green-500' 
                    : 'bg-red-500/10 text-red-500'
                }`}
              >
                {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Schema Trace */}
      <div className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        {schemaTrace}
      </div>
      
      {/* Hover Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"
        style={{ backgroundColor: colors.primary }}
      />
    </motion.div>
  );
};

// Specialized Metric Cards for each Stakeholder
export const CEOMetricCard: React.FC<Omit<MetricCardProps, 'stakeholder'>> = (props) => (
  <MetricCard {...props} stakeholder="CEO" />
);

export const CFOMetricCard: React.FC<Omit<MetricCardProps, 'stakeholder'>> = (props) => (
  <MetricCard {...props} stakeholder="CFO" />
);

export const CHROMetricCard: React.FC<Omit<MetricCardProps, 'stakeholder'>> = (props) => (
  <MetricCard {...props} stakeholder="CHRO" />
);

export const COOMetricCard: React.FC<Omit<MetricCardProps, 'stakeholder'>> = (props) => (
  <MetricCard {...props} stakeholder="COO" />
);

export const ProofEngineMetricCard: React.FC<Omit<MetricCardProps, 'stakeholder'>> = (props) => (
  <MetricCard {...props} stakeholder="PROOF_ENGINE" />
);

// Metric Card Grid Component
interface MetricCardGridProps {
  stakeholder: StakeholderType;
  metrics: Array<Omit<MetricCardProps, 'stakeholder' | 'language'>>;
  language: LanguageType;
  onMetricClick?: (metric: string) => void;
  className?: string;
}

export const MetricCardGrid: React.FC<MetricCardGridProps> = ({
  stakeholder,
  metrics,
  language,
  onMetricClick,
  className = ''
}) => {
  return (
    <motion.div 
      className={`grid gap-4 ${className}`}
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
      }}
      {...ANIMATION_PRESETS.section}
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={`${stakeholder}-${metric.metric}-${index}`}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.1 }
            }
          }}
        >
          <MetricCard
            {...metric}
            stakeholder={stakeholder}
            language={language}
            onClick={() => onMetricClick?.(metric.metric)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

// Example usage data structure
export const EXAMPLE_METRICS = {
  CEO: [
    {
      module: 'ERP' as const,
      metric: 'Revenue Growth',
      value: '23.5',
      unit: '%',
      target: '25.0',
      variance: -1.5,
      trend: 'up' as const,
      status: 'warning' as const
    },
    {
      module: 'EPM' as const,
      metric: 'Market Position',
      value: '4th',
      unit: '',
      trend: 'up' as const,
      status: 'healthy' as const
    }
  ],
  CFO: [
    {
      module: 'EPM' as const,
      metric: 'Forecast Accuracy',
      value: '89',
      unit: '%',
      target: '95',
      variance: -6.3,
      trend: 'stable' as const,
      status: 'warning' as const
    },
    {
      module: 'ERP' as const,
      metric: 'Cash Flow',
      value: '$2.4M',
      unit: '',
      trend: 'up' as const,
      status: 'healthy' as const
    }
  ],
  CHRO: [
    {
      module: 'HCM' as const,
      metric: 'Engagement Score',
      value: '87',
      unit: '%',
      target: '90',
      variance: -3.3,
      trend: 'up' as const,
      status: 'healthy' as const
    },
    {
      module: 'HCM' as const,
      metric: 'Retention Rate',
      value: '94.2',
      unit: '%',
      trend: 'stable' as const,
      status: 'healthy' as const
    }
  ],
  COO: [
    {
      module: 'CRM' as const,
      metric: 'Pipeline Conversion',
      value: '18.3',
      unit: '%',
      target: '20.0',
      variance: -8.5,
      trend: 'down' as const,
      status: 'critical' as const
    },
    {
      module: 'ERP' as const,
      metric: 'Operational Efficiency',
      value: '91.7',
      unit: '%',
      trend: 'up' as const,
      status: 'healthy' as const
    }
  ]
};