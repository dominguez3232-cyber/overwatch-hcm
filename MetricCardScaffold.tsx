import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { SchemaNode, STAKEHOLDER_COLORS, schemaToFigmaName, FigmaComponentWrapper } from './FigmaScaffoldSystem';

// Metric Card component following Figma naming convention
// Pattern: metric-card/{stakeholder}-{metric}
export interface MetricCardProps {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  metric: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  change?: number;
  changeUnit?: string;
  threshold?: {
    warning: number;
    critical: number;
  };
  language: 'en' | 'es';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
}

// Generate the Figma component name from props
export function getMetricCardFigmaName(stakeholder: string, metric: string): string {
  return schemaToFigmaName('metric-card', stakeholder, metric);
}

// Threshold status calculator
function getThresholdStatus(
  value: number, 
  threshold?: { warning: number; critical: number }
): 'success' | 'warning' | 'critical' | 'neutral' {
  if (!threshold) return 'neutral';
  
  if (value < threshold.critical) return 'critical';
  if (value < threshold.warning) return 'warning';
  return 'success';
}

// Trend icon component
const TrendIcon: React.FC<{ trend?: 'up' | 'down' | 'stable'; className?: string }> = ({ 
  trend, 
  className = 'w-4 h-4' 
}) => {
  switch (trend) {
    case 'up':
      return <TrendingUp className={`${className} text-green-500`} />;
    case 'down':
      return <TrendingDown className={`${className} text-red-500`} />;
    case 'stable':
      return <Minus className={`${className} text-yellow-500`} />;
    default:
      return null;
  }
};

// Status icon component
const StatusIcon: React.FC<{ status: 'success' | 'warning' | 'critical' | 'neutral'; className?: string }> = ({ 
  status, 
  className = 'w-4 h-4' 
}) => {
  switch (status) {
    case 'success':
      return <CheckCircle className={`${className} text-green-500`} />;
    case 'warning':
      return <AlertTriangle className={`${className} text-yellow-500`} />;
    case 'critical':
      return <XCircle className={`${className} text-red-500`} />;
    default:
      return null;
  }
};

// Main MetricCard component
export const MetricCard: React.FC<MetricCardProps> = ({
  stakeholder,
  metric,
  value,
  unit = '',
  trend,
  change,
  changeUnit = '%',
  threshold,
  language,
  size = 'md',
  interactive = false,
  onClick,
  className = ''
}) => {
  const figmaName = getMetricCardFigmaName(stakeholder, metric);
  const stakeholderColor = STAKEHOLDER_COLORS[stakeholder];
  const numericValue = typeof value === 'number' ? value : parseFloat(value.toString());
  const status = getThresholdStatus(numericValue, threshold);
  
  const sizeClasses = {
    sm: 'p-3 min-h-[100px]',
    md: 'p-4 min-h-[120px]',
    lg: 'p-6 min-h-[150px]'
  };

  const valueSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <FigmaComponentWrapper figmaName={figmaName} className={className}>
      <motion.div
        className={`
          ${sizeClasses[size]}
          bg-card rounded-lg border border-border
          ${interactive ? 'cursor-pointer hover:shadow-lg' : ''}
          transition-all duration-200
          ${className}
        `}
        style={{
          borderLeftColor: stakeholderColor,
          borderLeftWidth: '4px'
        }}
        whileHover={interactive ? { scale: 1.02, y: -2 } : {}}
        whileTap={interactive ? { scale: 0.98 } : {}}
        onClick={onClick}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span 
                className="text-xs font-medium px-2 py-1 rounded-full"
                style={{ 
                  backgroundColor: `${stakeholderColor}20`,
                  color: stakeholderColor 
                }}
              >
                {stakeholder}
              </span>
              <StatusIcon status={status} className="w-3 h-3" />
            </div>
            <h3 className="font-medium text-sm text-muted-foreground line-clamp-2">
              {metric}
            </h3>
          </div>
          {trend && <TrendIcon trend={trend} className="flex-shrink-0" />}
        </div>

        {/* Value */}
        <div className="flex items-baseline gap-1 mb-2">
          <span 
            className={`${valueSizeClasses[size]} font-bold`}
            style={{ color: stakeholderColor }}
          >
            {value}
          </span>
          {unit && (
            <span className="text-sm text-muted-foreground">
              {unit}
            </span>
          )}
        </div>

        {/* Change indicator */}
        {change !== undefined && (
          <div className="flex items-center gap-1">
            <TrendIcon 
              trend={change > 0 ? 'up' : change < 0 ? 'down' : 'stable'} 
              className="w-3 h-3" 
            />
            <span className={`text-xs ${
              change > 0 ? 'text-green-500' : 
              change < 0 ? 'text-red-500' : 
              'text-yellow-500'
            }`}>
              {Math.abs(change)}{changeUnit}
            </span>
            <span className="text-xs text-muted-foreground">
              {language === 'en' ? 'vs last period' : 'vs período anterior'}
            </span>
          </div>
        )}

        {/* Threshold indicators */}
        {threshold && status !== 'neutral' && (
          <div className="mt-2 pt-2 border-t border-border">
            <div className="flex items-center gap-2">
              <div 
                className={`w-2 h-2 rounded-full ${
                  status === 'success' ? 'bg-green-500' : 
                  status === 'warning' ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`} 
              />
              <span className="text-xs text-muted-foreground">
                {language === 'en' ? (
                  status === 'success' ? 'On target' :
                  status === 'warning' ? 'Needs attention' :
                  'Critical'
                ) : (
                  status === 'success' ? 'En objetivo' :
                  status === 'warning' ? 'Requiere atención' :
                  'Crítico'
                )}
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </FigmaComponentWrapper>
  );
};

// Collection of metric cards for stakeholder dashboards
export const MetricCardGrid: React.FC<{
  metrics: SchemaNode[];
  language: 'en' | 'es';
  size?: 'sm' | 'md' | 'lg';
  onMetricClick?: (metric: SchemaNode) => void;
  className?: string;
}> = ({ metrics, language, size = 'md', onMetricClick, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}>
      {metrics.map((metric, index) => (
        <MetricCard
          key={`${metric.stakeholder}-${metric.metric}-${index}`}
          stakeholder={metric.stakeholder}
          metric={metric.metric}
          value={metric.value}
          unit={metric.unit}
          trend={metric.trend}
          threshold={metric.threshold}
          language={language}
          size={size}
          interactive={!!onMetricClick}
          onClick={() => onMetricClick?.(metric)}
        />
      ))}
    </div>
  );
};

// Example usage and demo
export const MetricCardDemo: React.FC<{ language: 'en' | 'es' }> = ({ language }) => {
  const sampleMetrics: SchemaNode[] = [
    {
      stakeholder: 'CEO',
      module: 'ERP',
      metric: 'Revenue Growth',
      value: '24%',
      unit: '%',
      trend: 'up',
      threshold: { warning: 15, critical: 10 }
    },
    {
      stakeholder: 'CFO',
      module: 'EPM',
      metric: 'Forecast Accuracy',
      value: '89%',
      unit: '%',
      trend: 'stable',
      threshold: { warning: 80, critical: 70 }
    },
    {
      stakeholder: 'CHRO',
      module: 'HCM',
      metric: 'Employee Engagement',
      value: '85%',
      unit: '%',
      trend: 'up',
      threshold: { warning: 75, critical: 65 }
    },
    {
      stakeholder: 'COO',
      module: 'CRM',
      metric: 'Pipeline Conversion',
      value: '32%',
      unit: '%',
      trend: 'down',
      threshold: { warning: 35, critical: 25 }
    }
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {language === 'en' ? 'Metric Card System Demo' : 'Demo Sistema de Tarjetas Métricas'}
        </h2>
        <p className="text-muted-foreground">
          {language === 'en' 
            ? 'Schema-driven metric cards with Figma naming convention'
            : 'Tarjetas métricas basadas en esquemas con convención de nombres Figma'
          }
        </p>
      </div>

      <MetricCardGrid 
        metrics={sampleMetrics}
        language={language}
        size="md"
        onMetricClick={(metric) => console.log('Metric clicked:', metric)}
      />

      {/* Figma naming examples */}
      <div className="bg-muted rounded-lg p-4">
        <h3 className="font-semibold mb-3">
          {language === 'en' ? 'Generated Figma Names:' : 'Nombres Figma Generados:'}
        </h3>
        <div className="space-y-1 font-mono text-sm">
          {sampleMetrics.map((metric, index) => (
            <div key={index} className="text-green-400">
              {getMetricCardFigmaName(metric.stakeholder, metric.metric)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};