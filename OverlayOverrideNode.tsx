import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  ArrowRight,
  Clock,
  User,
  GitBranch,
  ExternalLink,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Info,
  Layers,
  Code,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';

interface OverlayOverrideNodeProps {
  timestamp: string;
  squad: string;
  from: string;
  to: string;
  reason: string;
  schema: string;
  deployedBy?: string;
  status?: 'deployed' | 'pending' | 'rolled-back' | 'error';
  performance?: {
    clarityLift?: number;
    engagementRate?: number;
    completionRate?: number;
    feedbackScore?: number;
  };
  onRollback?: () => void;
  onViewDetails?: () => void;
  onViewReplay?: () => void;
  language?: 'en' | 'es';
  compact?: boolean;
}

export default function OverlayOverrideNode({
  timestamp,
  squad,
  from,
  to,
  reason,
  schema,
  deployedBy = 'System',
  status = 'deployed',
  performance,
  onRollback,
  onViewDetails,
  onViewReplay,
  language = 'en',
  compact = false
}: OverlayOverrideNodeProps) {
  const t = {
    en: {
      deployedBy: 'Deployed by',
      reason: 'Reason',
      schema: 'Schema',
      performance: 'Performance',
      clarityLift: 'Clarity Lift',
      engagement: 'Engagement',
      completion: 'Completion',
      feedback: 'Feedback',
      rollback: 'Rollback',
      viewDetails: 'View Details',
      viewReplay: 'View Replay',
      overrideDeployed: 'Override Deployed',
      pending: 'Pending Deployment',
      rolledBack: 'Rolled Back',
      error: 'Deployment Error',
      from: 'From',
      to: 'To'
    },
    es: {
      deployedBy: 'Desplegado por',
      reason: 'Razón',
      schema: 'Esquema',
      performance: 'Rendimiento',
      clarityLift: 'Mejora de Claridad',
      engagement: 'Participación',
      completion: 'Finalización',
      feedback: 'Retroalimentación',
      rollback: 'Revertir',
      viewDetails: 'Ver Detalles',
      viewReplay: 'Ver Replay',
      overrideDeployed: 'Override Desplegado',
      pending: 'Pendiente de Despliegue',
      rolledBack: 'Revertido',
      error: 'Error de Despliegue',
      from: 'Desde',
      to: 'Hacia'
    }
  };

  const text = t[language];

  const statusConfig = {
    deployed: {
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      label: text.overrideDeployed
    },
    pending: {
      icon: Clock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      label: text.pending
    },
    'rolled-back': {
      icon: RotateCcw,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      label: text.rolledBack
    },
    error: {
      icon: AlertCircle,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      label: text.error
    }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString(language === 'es' ? 'es-ES' : 'en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`p-3 rounded-lg border ${config.bgColor} ${config.borderColor}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <StatusIcon className={`w-4 h-4 ${config.color}`} />
            <div>
              <div className="font-medium text-sm">{squad}</div>
              <div className="text-xs text-muted-foreground">{formatDate(timestamp)}</div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-sm font-medium">{to}</div>
            <div className="text-xs text-muted-foreground">{reason}</div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`p-6 ${config.bgColor} ${config.borderColor}`}>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${config.bgColor} border ${config.borderColor} flex items-center justify-center`}>
                <StatusIcon className={`w-5 h-5 ${config.color}`} />
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {config.label}
                </h3>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {formatDate(timestamp)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {squad}
              </Badge>
              <Badge variant="outline" className="text-xs font-mono">
                {schema}
              </Badge>
            </div>
          </div>

          {/* Overlay Transition */}
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
              <div>
                <div className="text-sm text-muted-foreground mb-1">{text.from}</div>
                <div className="bg-secondary px-3 py-2 rounded border border-border">
                  <div className="font-medium text-sm">{from}</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <ArrowRight className={`w-5 h-5 ${config.color}`} />
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-1">{text.to}</div>
                <div className={`bg-primary/10 border border-primary/20 px-3 py-2 rounded`}>
                  <div className="font-medium text-sm text-primary">{to}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason and Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Info className="w-3 h-3" />
                {text.reason}
              </div>
              <div className="bg-secondary/30 px-3 py-2 rounded text-sm">
                {reason}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Code className="w-3 h-3" />
                {text.schema}
              </div>
              <div className="bg-secondary/30 px-3 py-2 rounded font-mono text-sm">
                {schema}
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          {performance && status === 'deployed' && (
            <div className="bg-secondary/30 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                {text.performance}
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {performance.clarityLift && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">
                      {performance.clarityLift}x
                    </div>
                    <div className="text-xs text-muted-foreground">{text.clarityLift}</div>
                  </div>
                )}
                
                {performance.engagementRate && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">
                      {performance.engagementRate}%
                    </div>
                    <div className="text-xs text-muted-foreground">{text.engagement}</div>
                  </div>
                )}
                
                {performance.completionRate && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">
                      {performance.completionRate}%
                    </div>
                    <div className="text-xs text-muted-foreground">{text.completion}</div>
                  </div>
                )}
                
                {performance.feedbackScore && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">
                      {performance.feedbackScore}
                    </div>
                    <div className="text-xs text-muted-foreground">{text.feedback}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Deployment Info */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-3 h-3" />
              <span>{text.deployedBy}: {deployedBy}</span>
            </div>
            
            <div className="flex items-center gap-2">
              {onViewReplay && (
                <Button size="sm" variant="outline" onClick={onViewReplay}>
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {text.viewReplay}
                </Button>
              )}
              
              {onViewDetails && (
                <Button size="sm" variant="outline" onClick={onViewDetails}>
                  <GitBranch className="w-3 h-3 mr-1" />
                  {text.viewDetails}
                </Button>
              )}
              
              {onRollback && status === 'deployed' && (
                <Button size="sm" variant="destructive" onClick={onRollback}>
                  <RotateCcw className="w-3 h-3 mr-1" />
                  {text.rollback}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}