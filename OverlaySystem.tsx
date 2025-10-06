import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { X, Info, TrendingUp, AlertTriangle, CheckCircle, Target, Lightbulb, MessageSquare } from 'lucide-react';
import { stakeholderColors } from './MetricCardSystem';

// Overlay types
export type OverlayType = 'insight' | 'recommendation' | 'alert' | 'success' | 'coaching' | 'strategy';

// Base overlay props interface
export interface OverlayProps {
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  metric: string;
  type?: OverlayType;
  title?: string;
  content: string;
  insights?: string[];
  recommendations?: string[];
  actions?: Array<{
    label: string;
    type: 'primary' | 'secondary';
    onClick: () => void;
  }>;
  data?: Record<string, any>;
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: 'center' | 'right' | 'left';
  className?: string;
}

// Overlay type configurations
const overlayTypeConfig = {
  insight: {
    icon: Info,
    bgClass: 'bg-blue-950/90',
    borderClass: 'border-blue-500/30',
    iconClass: 'text-blue-400'
  },
  recommendation: {
    icon: Lightbulb,
    bgClass: 'bg-emerald-950/90',
    borderClass: 'border-emerald-500/30',
    iconClass: 'text-emerald-400'
  },
  alert: {
    icon: AlertTriangle,
    bgClass: 'bg-orange-950/90',
    borderClass: 'border-orange-500/30',
    iconClass: 'text-orange-400'
  },
  success: {
    icon: CheckCircle,
    bgClass: 'bg-green-950/90',
    borderClass: 'border-green-500/30',
    iconClass: 'text-green-400'
  },
  coaching: {
    icon: MessageSquare,
    bgClass: 'bg-purple-950/90',
    borderClass: 'border-purple-500/30',
    iconClass: 'text-purple-400'
  },
  strategy: {
    icon: Target,
    bgClass: 'bg-yellow-950/90',
    borderClass: 'border-yellow-500/30',
    iconClass: 'text-yellow-400'
  }
};

// Size configurations
const sizeConfig = {
  sm: {
    width: 'max-w-md',
    height: 'max-h-[60vh]'
  },
  md: {
    width: 'max-w-lg',
    height: 'max-h-[70vh]'
  },
  lg: {
    width: 'max-w-2xl',
    height: 'max-h-[80vh]'
  },
  xl: {
    width: 'max-w-4xl',
    height: 'max-h-[90vh]'
  }
};

// Position configurations
const positionConfig = {
  center: 'items-center justify-center',
  right: 'items-center justify-end pr-6',
  left: 'items-center justify-start pl-6'
};

// Main overlay component following naming convention: overlay/{stakeholder}-{metric}
export const Overlay: React.FC<OverlayProps> = ({
  stakeholder,
  metric,
  type = 'insight',
  title,
  content,
  insights = [],
  recommendations = [],
  actions = [],
  data,
  isOpen,
  onClose,
  size = 'md',
  position = 'center',
  className = ''
}) => {
  const colors = stakeholderColors[stakeholder];
  const typeConfig = overlayTypeConfig[type];
  const sizeClasses = sizeConfig[size];
  const positionClasses = positionConfig[position];
  
  const IconComponent = typeConfig.icon;
  
  const overlayTitle = title || `${stakeholder} ${metric.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 flex ${positionClasses} bg-background/80 backdrop-blur-sm`}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className={`
              ${sizeClasses.width} ${sizeClasses.height}
              ${className}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className={`
              ${typeConfig.bgClass} ${typeConfig.borderClass}
              backdrop-blur-xl border-2 h-full flex flex-col
            `}>
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`${colors.accent} p-2 rounded-lg`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-1">
                      {overlayTitle}
                    </h2>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`${colors.text} bg-transparent border ${colors.border}`}
                      >
                        {stakeholder}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <Separator className="opacity-20" />

              {/* Content */}
              <ScrollArea className="flex-1 px-6">
                <div className="py-4 space-y-6">
                  {/* Main Content */}
                  <div className="text-foreground leading-relaxed">
                    {content}
                  </div>

                  {/* Data Visualization */}
                  {data && (
                    <div className="space-y-3">
                      <h4 className={`font-semibold ${colors.text}`}>Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(data).map(([key, value]) => (
                          <div key={key} className="bg-card/50 rounded-lg p-3">
                            <div className="text-sm text-muted-foreground capitalize">
                              {key.replace(/-/g, ' ')}
                            </div>
                            <div className="text-lg font-semibold text-foreground">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Insights */}
                  {insights.length > 0 && (
                    <div className="space-y-3">
                      <h4 className={`font-semibold ${colors.text} flex items-center gap-2`}>
                        <TrendingUp className="w-4 h-4" />
                        Key Insights
                      </h4>
                      <ul className="space-y-2">
                        {insights.map((insight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full ${colors.accent} mt-2 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {insight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Recommendations */}
                  {recommendations.length > 0 && (
                    <div className="space-y-3">
                      <h4 className={`font-semibold ${colors.text} flex items-center gap-2`}>
                        <Lightbulb className="w-4 h-4" />
                        Recommendations
                      </h4>
                      <div className="space-y-3">
                        {recommendations.map((recommendation, index) => (
                          <div key={index} className="bg-card/30 rounded-lg p-3">
                            <span className="text-sm text-foreground leading-relaxed">
                              {recommendation}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Actions */}
              {actions.length > 0 && (
                <>
                  <Separator className="opacity-20" />
                  <div className="p-6 pt-4 flex items-center gap-3 justify-end">
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.type === 'primary' ? 'default' : 'outline'}
                        onClick={action.onClick}
                        className={action.type === 'primary' ? colors.accent : ''}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Specific overlay components following the naming convention
export const OverlayCEORevenue: React.FC<Omit<OverlayProps, 'stakeholder' | 'metric'>> = (props) => (
  <Overlay stakeholder="CEO" metric="revenue" {...props} />
);

export const OverlayCFOForecastAccuracy: React.FC<Omit<OverlayProps, 'stakeholder' | 'metric'>> = (props) => (
  <Overlay stakeholder="CFO" metric="forecast-accuracy" {...props} />
);

export const OverlayCHROEngagementScore: React.FC<Omit<OverlayProps, 'stakeholder' | 'metric'>> = (props) => (
  <Overlay stakeholder="CHRO" metric="engagement-score" {...props} />
);

export const OverlayCOOPipelineConversion: React.FC<Omit<OverlayProps, 'stakeholder' | 'metric'>> = (props) => (
  <Overlay stakeholder="COO" metric="pipeline-conversion" {...props} />
);

// Overlay manager hook
export const useOverlayManager = () => {
  const [overlays, setOverlays] = useState<Array<{
    id: string;
    stakeholder: string;
    metric: string;
    props: Partial<OverlayProps>;
  }>>([]);

  const openOverlay = (
    stakeholder: string,
    metric: string,
    props: Partial<OverlayProps>
  ) => {
    const id = `${stakeholder}-${metric}-${Date.now()}`;
    setOverlays(prev => [
      ...prev,
      { id, stakeholder, metric, props: { ...props, isOpen: true } }
    ]);
    return id;
  };

  const closeOverlay = (id: string) => {
    setOverlays(prev => prev.filter(overlay => overlay.id !== id));
  };

  const closeAllOverlays = () => {
    setOverlays([]);
  };

  return {
    overlays,
    openOverlay,
    closeOverlay,
    closeAllOverlays
  };
};

// Factory function to create overlays from JSON schema
export const createOverlayFromSchema = (data: {
  stakeholder: string;
  metric: string;
  type?: OverlayType;
  content: string;
  insights?: string[];
  recommendations?: string[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Overlay
      stakeholder={data.stakeholder as OverlayProps['stakeholder']}
      metric={data.metric}
      type={data.type}
      content={data.content}
      insights={data.insights}
      recommendations={data.recommendations}
      isOpen={data.isOpen}
      onClose={data.onClose}
    />
  );
};