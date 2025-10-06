import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { TrendingUp, DollarSign, Target, Award, Zap, CheckCircle, ArrowUpRight, BarChart3 } from 'lucide-react';

// Proof Engine metric types
export type ProofMetricType = 'revenue-lift' | 'cost-reduction' | 'efficiency-gain' | 'roi-improvement' | 'time-savings' | 'accuracy-boost';

// Proof validation levels
export type ProofValidationLevel = 'projected' | 'measured' | 'validated' | 'certified';

// Base proof engine props interface
export interface ProofEngineProps {
  metric: ProofMetricType;
  value: string | number;
  unit?: string;
  baseline?: string | number;
  target?: string | number;
  validation: ProofValidationLevel;
  timeframe?: string;
  methodology?: string;
  confidence?: number; // 0-100
  evidence?: Array<{
    type: 'data' | 'testimonial' | 'benchmark' | 'calculation';
    source: string;
    summary: string;
  }>;
  breakdown?: Array<{
    category: string;
    value: number;
    percentage: number;
  }>;
  showDetails?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Proof metric configurations
const proofMetricConfig = {
  'revenue-lift': {
    icon: TrendingUp,
    label: 'Revenue Lift',
    color: '#22c55e',
    bgClass: 'bg-green-950/20',
    borderClass: 'border-green-500/30',
    textClass: 'text-green-400'
  },
  'cost-reduction': {
    icon: DollarSign,
    label: 'Cost Reduction',
    color: '#3b82f6',
    bgClass: 'bg-blue-950/20',
    borderClass: 'border-blue-500/30',
    textClass: 'text-blue-400'
  },
  'efficiency-gain': {
    icon: Zap,
    label: 'Efficiency Gain',
    color: '#f59e0b',
    bgClass: 'bg-yellow-950/20',
    borderClass: 'border-yellow-500/30',
    textClass: 'text-yellow-400'
  },
  'roi-improvement': {
    icon: Target,
    label: 'ROI Improvement',
    color: '#8b5cf6',
    bgClass: 'bg-purple-950/20',
    borderClass: 'border-purple-500/30',
    textClass: 'text-purple-400'
  },
  'time-savings': {
    icon: Award,
    label: 'Time Savings',
    color: '#06b6d4',
    bgClass: 'bg-cyan-950/20',
    borderClass: 'border-cyan-500/30',
    textClass: 'text-cyan-400'
  },
  'accuracy-boost': {
    icon: CheckCircle,
    label: 'Accuracy Boost',
    color: '#10b981',
    bgClass: 'bg-emerald-950/20',
    borderClass: 'border-emerald-500/30',
    textClass: 'text-emerald-400'
  }
};

// Validation level configurations
const validationConfig = {
  projected: {
    label: 'Projected',
    color: '#6b7280',
    confidence: 'Low',
    badge: 'outline'
  },
  measured: {
    label: 'Measured',
    color: '#f59e0b',
    confidence: 'Medium',
    badge: 'secondary'
  },
  validated: {
    label: 'Validated',
    color: '#22c55e',
    confidence: 'High',
    badge: 'success'
  },
  certified: {
    label: 'Certified',
    color: '#DAA520',
    confidence: 'Verified',
    badge: 'gold'
  }
};

// Main proof engine component following naming convention: proof/{metric}
export const ProofEngine: React.FC<ProofEngineProps> = ({
  metric,
  value,
  unit = '',
  baseline,
  target,
  validation,
  timeframe,
  methodology,
  confidence = 85,
  evidence = [],
  breakdown = [],
  showDetails = true,
  interactive = false,
  onClick,
  size = 'md',
  className = ''
}) => {
  const [expanded, setExpanded] = React.useState(false);
  
  const metricConfig = proofMetricConfig[metric];
  const validationInfo = validationConfig[validation];
  const IconComponent = metricConfig.icon;
  
  const sizeClasses = {
    sm: { card: 'p-4', text: 'text-lg', icon: 'w-5 h-5' },
    md: { card: 'p-6', text: 'text-2xl', icon: 'w-6 h-6' },
    lg: { card: 'p-8', text: 'text-3xl', icon: 'w-8 h-8' }
  };
  
  const classes = sizeClasses[size];

  const handleToggleExpanded = () => {
    if (showDetails) {
      setExpanded(!expanded);
    }
    if (interactive && onClick) {
      onClick();
    }
  };

  // Calculate improvement percentage
  const improvementPercentage = baseline ? 
    ((Number(value) - Number(baseline)) / Number(baseline)) * 100 : 0;

  return (
    <motion.div
      whileHover={{ scale: interactive ? 1.02 : 1, y: interactive ? -2 : 0 }}
      whileTap={{ scale: interactive ? 0.98 : 1 }}
      className={className}
    >
      <Card className={`
        ${metricConfig.bgClass} ${metricConfig.borderClass}
        ${classes.card} border-2 backdrop-blur-sm transition-all duration-300
        hover:shadow-xl hover:shadow-primary/10
        ${interactive ? 'cursor-pointer' : ''}
      `}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${metricConfig.color}20` }}
            >
              <IconComponent 
                className={`${classes.icon} ${metricConfig.textClass}`} 
              />
            </div>
            <div>
              <h3 className={`font-bold text-foreground ${size === 'sm' ? 'text-base' : 'text-lg'}`}>
                {metricConfig.label}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge 
                  variant={validationInfo.badge as any}
                  className="text-xs"
                  style={{ color: validationInfo.color }}
                >
                  {validationInfo.label}
                </Badge>
                {timeframe && (
                  <Badge variant="outline" className="text-xs">
                    {timeframe}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          {showDetails && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleExpanded}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowUpRight className={`w-4 h-4 transition-transform ${expanded ? 'rotate-45' : ''}`} />
            </Button>
          )}
        </div>

        {/* Main Value */}
        <div className="mb-4">
          <div className={`${classes.text} font-bold text-foreground flex items-baseline gap-2`}>
            {value}{unit}
            {improvementPercentage !== 0 && (
              <span className={`text-sm ${improvementPercentage > 0 ? 'text-green-400' : 'text-red-400'}`}>
                ({improvementPercentage > 0 ? '+' : ''}{improvementPercentage.toFixed(1)}%)
              </span>
            )}
          </div>
          
          {baseline && (
            <div className="text-sm text-muted-foreground mt-1">
              Baseline: {baseline}{unit}
            </div>
          )}
        </div>

        {/* Confidence Indicator */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Confidence Level</span>
            <span className={metricConfig.textClass}>{confidence}%</span>
          </div>
          <Progress 
            value={confidence} 
            className="h-2"
            style={{
              '--progress-foreground': metricConfig.color
            } as React.CSSProperties}
          />
        </div>

        {/* Progress to Target */}
        {target && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress to Target</span>
              <span className="text-foreground">{target}{unit}</span>
            </div>
            <Progress 
              value={(Number(value) / Number(target)) * 100} 
              className="h-2"
              style={{
                '--progress-foreground': metricConfig.color
              } as React.CSSProperties}
            />
          </div>
        )}

        {/* Expanded Details */}
        <motion.div
          initial={false}
          animate={{ 
            height: expanded ? 'auto' : 0,
            opacity: expanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {showDetails && (
            <div className="space-y-4">
              <Separator className="opacity-20" />
              
              {/* Methodology */}
              {methodology && (
                <div>
                  <h4 className={`font-semibold ${metricConfig.textClass} mb-2`}>
                    Methodology
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {methodology}
                  </p>
                </div>
              )}

              {/* Breakdown */}
              {breakdown.length > 0 && (
                <div>
                  <h4 className={`font-semibold ${metricConfig.textClass} mb-3`}>
                    Impact Breakdown
                  </h4>
                  <div className="space-y-2">
                    {breakdown.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">
                            {item.value}{unit}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({item.percentage}%)
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Evidence */}
              {evidence.length > 0 && (
                <div>
                  <h4 className={`font-semibold ${metricConfig.textClass} mb-3`}>
                    Supporting Evidence
                  </h4>
                  <div className="space-y-3">
                    {evidence.map((item, index) => (
                      <div key={index} className="bg-card/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {item.source}
                          </span>
                        </div>
                        <p className="text-sm text-foreground">
                          {item.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Gold accent line for certified metrics */}
        {validation === 'certified' && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-t-lg" />
        )}
      </Card>
    </motion.div>
  );
};

// Specific proof engine components following the naming convention
export const ProofRevenueLift: React.FC<Omit<ProofEngineProps, 'metric'>> = (props) => (
  <ProofEngine metric="revenue-lift" {...props} />
);

export const ProofCostReduction: React.FC<Omit<ProofEngineProps, 'metric'>> = (props) => (
  <ProofEngine metric="cost-reduction" {...props} />
);

export const ProofEfficiencyGain: React.FC<Omit<ProofEngineProps, 'metric'>> = (props) => (
  <ProofEngine metric="efficiency-gain" {...props} />
);

export const ProofROIImprovement: React.FC<Omit<ProofEngineProps, 'metric'>> = (props) => (
  <ProofEngine metric="roi-improvement" {...props} />
);

export const ProofTimeSavings: React.FC<Omit<ProofEngineProps, 'metric'>> = (props) => (
  <ProofEngine metric="time-savings" {...props} />
);

export const ProofAccuracyBoost: React.FC<Omit<ProofEngineProps, 'metric'>> = (props) => (
  <ProofEngine metric="accuracy-boost" {...props} />
);

// Proof Engine Dashboard for displaying multiple proof points
export const ProofEngineDashboard: React.FC<{
  proofPoints: Array<ProofEngineProps>;
  title?: string;
  description?: string;
  layout?: 'grid' | 'masonry' | 'carousel';
  columns?: 2 | 3 | 4;
  className?: string;
}> = ({ 
  proofPoints, 
  title = "ROI Proof Engine",
  description,
  layout = 'grid',
  columns = 3,
  className = '' 
}) => {
  const layoutClasses = {
    grid: `grid grid-cols-1 md:grid-cols-${Math.min(columns, 2)} lg:grid-cols-${columns}`,
    masonry: 'columns-1 md:columns-2 lg:columns-3',
    carousel: 'flex gap-6 overflow-x-auto pb-4'
  };

  return (
    <div className={className}>
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Proof Points Grid */}
      <div className={`${layoutClasses[layout]} gap-6`}>
        {proofPoints.map((proofPoint, index) => (
          <ProofEngine
            key={index}
            {...proofPoint}
          />
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-12 bg-gradient-to-r from-yellow-950/20 to-orange-950/20 rounded-2xl p-8 border border-yellow-500/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {proofPoints.length}
            </div>
            <div className="text-sm text-muted-foreground">
              Validated Proof Points
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {Math.round(proofPoints.reduce((acc, p) => acc + (p.confidence || 0), 0) / proofPoints.length)}%
            </div>
            <div className="text-sm text-muted-foreground">
              Average Confidence
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {proofPoints.filter(p => p.validation === 'certified').length}
            </div>
            <div className="text-sm text-muted-foreground">
              Certified Results
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Factory function to create proof engines from JSON schema
export const createProofEngineFromSchema = (data: {
  metric: ProofMetricType;
  value: string | number;
  unit?: string;
  validation: ProofValidationLevel;
  confidence?: number;
  timeframe?: string;
}) => {
  return (
    <ProofEngine
      metric={data.metric}
      value={data.value}
      unit={data.unit}
      validation={data.validation}
      confidence={data.confidence}
      timeframe={data.timeframe}
    />
  );
};