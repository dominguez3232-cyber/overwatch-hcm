import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  Bell,
  Clock,
  Users,
  ExternalLink,
  Edit3,
  Pause,
  Play,
  Trash2,
  CheckCircle,
  AlertTriangle,
  Target,
  MessageSquare,
  Zap,
  Activity,
  TrendingUp,
  Settings
} from 'lucide-react';

interface ReplayNudgeNodeProps {
  timestamp: string;
  trigger: string;
  messageEN: string;
  messageES: string;
  sentTo: string[];
  replayLink: string;
  id?: string;
  status?: 'active' | 'paused' | 'completed' | 'failed';
  triggerCount?: number;
  responseRate?: number;
  effectivenessScore?: number;
  lastTriggered?: string;
  onEdit?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onDelete?: () => void;
  onViewReplay?: () => void;
  onViewAnalytics?: () => void;
  language?: 'en' | 'es';
  compact?: boolean;
}

export default function ReplayNudgeNode({
  timestamp,
  trigger,
  messageEN,
  messageES,
  sentTo,
  replayLink,
  id = 'nudge-001',
  status = 'active',
  triggerCount = 0,
  responseRate = 0,
  effectivenessScore = 0,
  lastTriggered,
  onEdit,
  onPause,
  onResume,
  onDelete,
  onViewReplay,
  onViewAnalytics,
  language = 'en',
  compact = false
}: ReplayNudgeNodeProps) {
  const t = {
    en: {
      replayNudge: 'Replay Nudge',
      trigger: 'Trigger',
      messageSent: 'Message Sent',
      sentTo: 'Sent To',
      status: 'Status',
      performance: 'Performance',
      triggerCount: 'Trigger Count',
      responseRate: 'Response Rate',
      effectiveness: 'Effectiveness',
      lastTriggered: 'Last Triggered',
      edit: 'Edit',
      pause: 'Pause',
      resume: 'Resume',
      delete: 'Delete',
      viewReplay: 'View Replay',
      viewAnalytics: 'View Analytics',
      settings: 'Settings',
      active: 'Active',
      paused: 'Paused',
      completed: 'Completed',
      failed: 'Failed',
      deployedAt: 'Deployed At',
      englishMessage: 'English Message',
      spanishMessage: 'Spanish Message',
      targetRoles: 'Target Roles',
      nudgeDeployed: 'Nudge Deployed',
      nudgePaused: 'Nudge Paused',
      nudgeCompleted: 'Nudge Completed',
      nudgeFailed: 'Nudge Failed'
    },
    es: {
      replayNudge: 'Nudge de Replay',
      trigger: 'Disparador',
      messageSent: 'Mensaje Enviado',
      sentTo: 'Enviado A',
      status: 'Estado',
      performance: 'Rendimiento',
      triggerCount: 'Cantidad de Disparos',
      responseRate: 'Tasa de Respuesta',
      effectiveness: 'Efectividad',
      lastTriggered: 'Último Disparo',
      edit: 'Editar',
      pause: 'Pausar',
      resume: 'Reanudar',
      delete: 'Eliminar',
      viewReplay: 'Ver Replay',
      viewAnalytics: 'Ver Analíticas',
      settings: 'Configuración',
      active: 'Activo',
      paused: 'Pausado',
      completed: 'Completado',
      failed: 'Fallido',
      deployedAt: 'Desplegado En',
      englishMessage: 'Mensaje en Inglés',
      spanishMessage: 'Mensaje en Español',
      targetRoles: 'Roles Objetivo',
      nudgeDeployed: 'Nudge Desplegado',
      nudgePaused: 'Nudge Pausado',
      nudgeCompleted: 'Nudge Completado',
      nudgeFailed: 'Nudge Fallido'
    }
  };

  const text = t[language];

  const statusConfig = {
    active: {
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      label: text.active,
      description: text.nudgeDeployed
    },
    paused: {
      icon: Pause,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      label: text.paused,
      description: text.nudgePaused
    },
    completed: {
      icon: CheckCircle,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      label: text.completed,
      description: text.nudgeCompleted
    },
    failed: {
      icon: AlertTriangle,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      label: text.failed,
      description: text.nudgeFailed
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

  const getRoleColor = (role: string) => {
    const roleColors = {
      'Founder': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'Coach': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'Squad Lead': 'bg-green-500/10 text-green-400 border-green-500/20',
      'Investor': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'Team Member': 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    };
    return roleColors[role as keyof typeof roleColors] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';
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
              <div className="font-medium text-sm">{trigger}</div>
              <div className="text-xs text-muted-foreground">{formatDate(timestamp)}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {sentTo.map((role) => (
              <Badge key={role} variant="outline" className={`text-xs ${getRoleColor(role)}`}>
                {role}
              </Badge>
            ))}
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
                  <Bell className="w-4 h-4" />
                  {text.replayNudge}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {config.description}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={`text-sm ${config.color}`}>
                {config.label}
              </Badge>
              <Badge variant="outline" className="text-xs font-mono">
                {id}
              </Badge>
            </div>
          </div>

          {/* Trigger Information */}
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <Target className="w-3 h-3" />
                  {text.trigger}
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 px-3 py-2 rounded">
                  <div className="font-medium text-sm text-orange-400">{trigger}</div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {text.deployedAt}
                </div>
                <div className="bg-secondary/30 px-3 py-2 rounded text-sm">
                  {formatDate(timestamp)}
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <MessageSquare className="w-3 h-3" />
                {text.englishMessage}
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded text-sm text-blue-400">
                {messageEN}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <MessageSquare className="w-3 h-3" />
                {text.spanishMessage}
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded text-sm text-blue-400">
                {messageES}
              </div>
            </div>
          </div>

          {/* Target Roles */}
          <div>
            <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              <Users className="w-3 h-3" />
              {text.targetRoles}
            </div>
            <div className="flex flex-wrap gap-2">
              {sentTo.map((role) => (
                <Badge key={role} variant="outline" className={`${getRoleColor(role)}`}>
                  {role}
                </Badge>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          {(triggerCount > 0 || responseRate > 0 || effectivenessScore > 0) && (
            <div className="bg-secondary/30 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                {text.performance}
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{triggerCount}</div>
                  <div className="text-xs text-muted-foreground">{text.triggerCount}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{responseRate}%</div>
                  <div className="text-xs text-muted-foreground">{text.responseRate}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">{effectivenessScore.toFixed(1)}</div>
                  <div className="text-xs text-muted-foreground">{text.effectiveness}</div>
                </div>
                
                {lastTriggered && (
                  <div className="text-center">
                    <div className="text-sm font-bold text-yellow-400">
                      {formatDate(lastTriggered)}
                    </div>
                    <div className="text-xs text-muted-foreground">{text.lastTriggered}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              {onViewReplay && (
                <Button size="sm" variant="outline" onClick={onViewReplay}>
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {text.viewReplay}
                </Button>
              )}
              
              {onViewAnalytics && (
                <Button size="sm" variant="outline" onClick={onViewAnalytics}>
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {text.viewAnalytics}
                </Button>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {onEdit && (
                <Button size="sm" variant="outline" onClick={onEdit}>
                  <Edit3 className="w-3 h-3 mr-1" />
                  {text.edit}
                </Button>
              )}
              
              {status === 'active' && onPause && (
                <Button size="sm" variant="outline" onClick={onPause}>
                  <Pause className="w-3 h-3 mr-1" />
                  {text.pause}
                </Button>
              )}
              
              {status === 'paused' && onResume && (
                <Button size="sm" variant="default" onClick={onResume}>
                  <Play className="w-3 h-3 mr-1" />
                  {text.resume}
                </Button>
              )}
              
              {onDelete && (
                <Button size="sm" variant="destructive" onClick={onDelete}>
                  <Trash2 className="w-3 h-3 mr-1" />
                  {text.delete}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}