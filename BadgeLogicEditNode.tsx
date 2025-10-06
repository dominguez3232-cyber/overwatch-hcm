import React from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  Trophy,
  Clock,
  User,
  Edit3,
  RotateCcw,
  Save,
  Code,
  Activity,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Target,
  Zap,
  Settings,
  GitBranch,
  TestTube,
  BarChart3
} from 'lucide-react';

interface BadgeLogicEditNodeProps {
  timestamp: string;
  badge: string;
  originalLogic: string;
  editedLogic: string;
  reason: string;
  id?: string;
  editedBy?: string;
  status?: 'active' | 'testing' | 'deployed' | 'rolled-back';
  unlockRate?: number;
  avgUnlockTime?: string;
  satisfactionScore?: number;
  testsRun?: number;
  badgeIcon?: string;
  onEdit?: () => void;
  onRevert?: () => void;
  onSave?: () => void;
  onTest?: () => void;
  onViewAnalytics?: () => void;
  onViewBadge?: () => void;
  language?: 'en' | 'es';
  compact?: boolean;
}

export default function BadgeLogicEditNode({
  timestamp,
  badge,
  originalLogic,
  editedLogic,
  reason,
  id = 'badge-edit-001',
  editedBy = 'Current User',
  status = 'deployed',
  unlockRate = 0,
  avgUnlockTime = '0d 0h',
  satisfactionScore = 0,
  testsRun = 0,
  badgeIcon = '🏆',
  onEdit,
  onRevert,
  onSave,
  onTest,
  onViewAnalytics,
  onViewBadge,
  language = 'en',
  compact = false
}: BadgeLogicEditNodeProps) {
  const t = {
    en: {
      badgeLogicEdit: 'Badge Logic Edit',
      badge: 'Badge',
      originalLogic: 'Original Logic',
      editedLogic: 'Edited Logic',
      reason: 'Reason',
      editedBy: 'Edited By',
      status: 'Status',
      performance: 'Performance',
      unlockRate: 'Unlock Rate',
      avgUnlockTime: 'Avg Unlock Time',
      satisfaction: 'Satisfaction',
      testsRun: 'Tests Run',
      edit: 'Edit',
      revert: 'Revert',
      save: 'Save',
      test: 'Test Logic',
      viewAnalytics: 'View Analytics',
      viewBadge: 'View Badge',
      deployedAt: 'Deployed At',
      active: 'Active',
      testing: 'Testing',
      deployed: 'Deployed',
      rolledBack: 'Rolled Back',
      logicActive: 'Logic Active',
      logicTesting: 'Logic Testing',
      logicDeployed: 'Logic Deployed',
      logicRolledBack: 'Logic Rolled Back',
      badgeName: 'Badge Name',
      logicComparison: 'Logic Comparison',
      editDetails: 'Edit Details',
      performanceMetrics: 'Performance Metrics'
    },
    es: {
      badgeLogicEdit: 'Edición Lógica de Insignia',
      badge: 'Insignia',
      originalLogic: 'Lógica Original',
      editedLogic: 'Lógica Editada',
      reason: 'Razón',
      editedBy: 'Editado Por',
      status: 'Estado',
      performance: 'Rendimiento',
      unlockRate: 'Tasa de Desbloqueo',
      avgUnlockTime: 'Tiempo Promedio',
      satisfaction: 'Satisfacción',
      testsRun: 'Pruebas Ejecutadas',
      edit: 'Editar',
      revert: 'Revertir',
      save: 'Guardar',
      test: 'Probar Lógica',
      viewAnalytics: 'Ver Analíticas',
      viewBadge: 'Ver Insignia',
      deployedAt: 'Desplegado En',
      active: 'Activo',
      testing: 'Probando',
      deployed: 'Desplegado',
      rolledBack: 'Revertido',
      logicActive: 'Lógica Activa',
      logicTesting: 'Lógica en Prueba',
      logicDeployed: 'Lógica Desplegada',
      logicRolledBack: 'Lógica Revertida',
      badgeName: 'Nombre de Insignia',
      logicComparison: 'Comparación de Lógica',
      editDetails: 'Detalles de Edición',
      performanceMetrics: 'Métricas de Rendimiento'
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
      description: text.logicActive
    },
    testing: {
      icon: TestTube,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      label: text.testing,
      description: text.logicTesting
    },
    deployed: {
      icon: Zap,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      label: text.deployed,
      description: text.logicDeployed
    },
    'rolled-back': {
      icon: RotateCcw,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      label: text.rolledBack,
      description: text.logicRolledBack
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

  const getPerformanceColor = (value: number, type: 'rate' | 'score') => {
    if (type === 'rate') {
      if (value >= 80) return 'text-green-400';
      if (value >= 60) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= 4.5) return 'text-green-400';
      if (value >= 4.0) return 'text-yellow-400';
      return 'text-red-400';
    }
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
            <span className="text-lg">{badgeIcon}</span>
            <div>
              <div className="font-medium text-sm">{badge}</div>
              <div className="text-xs text-muted-foreground">{formatDate(timestamp)}</div>
            </div>
          </div>
          
          <div className="text-right">
            <div className={`text-sm font-bold ${getPerformanceColor(unlockRate, 'rate')}`}>
              {unlockRate}%
            </div>
            <div className="text-xs text-muted-foreground">{text.unlockRate}</div>
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
                <span className="text-2xl">{badgeIcon}</span>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  {text.badgeLogicEdit}
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

          {/* Badge Information */}
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                  <Trophy className="w-3 h-3" />
                  {text.badgeName}
                </div>
                <div className="bg-primary/10 border border-primary/20 px-3 py-2 rounded flex items-center gap-2">
                  <span className="text-lg">{badgeIcon}</span>
                  <div className="font-medium text-primary">{badge}</div>
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

          {/* Logic Comparison */}
          <div>
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              {text.logicComparison}
            </h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">{text.originalLogic}</div>
                <div className="bg-secondary px-3 py-2 rounded font-mono text-sm border border-border">
                  {originalLogic}
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-8 border-t border-border"></div>
                  <GitBranch className="w-4 h-4" />
                  <div className="w-8 border-t border-border"></div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-1">{text.editedLogic}</div>
                <div className={`bg-primary/10 border border-primary/20 px-3 py-2 rounded font-mono text-sm text-primary`}>
                  {editedLogic}
                </div>
              </div>
            </div>
          </div>

          {/* Edit Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Target className="w-3 h-3" />
                {text.reason}
              </div>
              <div className="bg-secondary/30 px-3 py-2 rounded text-sm">
                {reason}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <User className="w-3 h-3" />
                {text.editedBy}
              </div>
              <div className="bg-secondary/30 px-3 py-2 rounded text-sm">
                {editedBy}
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          {(unlockRate > 0 || satisfactionScore > 0 || testsRun > 0) && (
            <div className="bg-secondary/30 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                {text.performanceMetrics}
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className={`text-lg font-bold ${getPerformanceColor(unlockRate, 'rate')}`}>
                    {unlockRate}%
                  </div>
                  <div className="text-xs text-muted-foreground">{text.unlockRate}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">{avgUnlockTime}</div>
                  <div className="text-xs text-muted-foreground">{text.avgUnlockTime}</div>
                </div>
                
                <div className="text-center">
                  <div className={`text-lg font-bold ${getPerformanceColor(satisfactionScore, 'score')}`}>
                    {satisfactionScore.toFixed(1)}
                  </div>
                  <div className="text-xs text-muted-foreground">{text.satisfaction}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{testsRun}</div>
                  <div className="text-xs text-muted-foreground">{text.testsRun}</div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              {onViewBadge && (
                <Button size="sm" variant="outline" onClick={onViewBadge}>
                  <Trophy className="w-3 h-3 mr-1" />
                  {text.viewBadge}
                </Button>
              )}
              
              {onViewAnalytics && (
                <Button size="sm" variant="outline" onClick={onViewAnalytics}>
                  <BarChart3 className="w-3 h-3 mr-1" />
                  {text.viewAnalytics}
                </Button>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {onTest && (
                <Button size="sm" variant="outline" onClick={onTest}>
                  <TestTube className="w-3 h-3 mr-1" />
                  {text.test}
                </Button>
              )}
              
              {onEdit && (
                <Button size="sm" variant="outline" onClick={onEdit}>
                  <Edit3 className="w-3 h-3 mr-1" />
                  {text.edit}
                </Button>
              )}
              
              {onRevert && (
                <Button size="sm" variant="destructive" onClick={onRevert}>
                  <RotateCcw className="w-3 h-3 mr-1" />
                  {text.revert}
                </Button>
              )}
              
              {onSave && (
                <Button size="sm" variant="default" onClick={onSave}>
                  <Save className="w-3 h-3 mr-1" />
                  {text.save}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}