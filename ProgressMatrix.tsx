import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Clock, AlertCircle, BarChart3, MessageSquare, TrendingUp, Filter } from 'lucide-react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';

interface ProgressRowProps {
  overlay: string;
  completed: boolean;
  score: string;
  feedback: string;
  moduleId?: string;
  timestamp?: string;
  category?: string;
  impact?: 'low' | 'medium' | 'high';
  onUpdateFeedback?: (overlay: string, feedback: string) => void;
  onRetry?: (overlay: string) => void;
}

interface ProgressMatrixProps {
  language: 'en' | 'es';
  progressRows?: ProgressRowProps[];
  moduleId?: string;
  onExport?: () => void;
  onRefresh?: () => void;
  className?: string;
}

const translations = {
  en: {
    title: 'Progress Matrix',
    subtitle: 'Coaching Overlay Performance Tracking',
    overlay: 'Overlay',
    status: 'Status',
    score: 'Score',
    feedback: 'Feedback',
    impact: 'Impact',
    timestamp: 'Timestamp',
    completed: 'Completed',
    pending: 'Pending',
    inProgress: 'In Progress',
    failed: 'Failed',
    updateFeedback: 'Update Feedback',
    saveFeedback: 'Save Feedback',
    retry: 'Retry',
    export: 'Export Report',
    refresh: 'Refresh',
    filterAll: 'All Status',
    filterCompleted: 'Completed',
    filterPending: 'Pending',
    filterFailed: 'Failed',
    noData: 'No progress data available',
    noDataDesc: 'Start using coaching overlays to see progress tracking',
    overallProgress: 'Overall Progress',
    averageScore: 'Average Score',
    completionRate: 'Completion Rate',
    impact: {
      low: 'Low',
      medium: 'Medium',
      high: 'High'
    }
  },
  es: {
    title: 'Matriz de Progreso',
    subtitle: 'Seguimiento de Rendimiento de Overlays de Coaching',
    overlay: 'Overlay',
    status: 'Estado',
    score: 'Puntuación',
    feedback: 'Retroalimentación',
    impact: 'Impacto',
    timestamp: 'Marca de Tiempo',
    completed: 'Completado',
    pending: 'Pendiente',
    inProgress: 'En Progreso',
    failed: 'Fallido',
    updateFeedback: 'Actualizar Retroalimentación',
    saveFeedback: 'Guardar Retroalimentación',
    retry: 'Reintentar',
    export: 'Exportar Reporte',
    refresh: 'Actualizar',
    filterAll: 'Todos los Estados',
    filterCompleted: 'Completados',
    filterPending: 'Pendientes',
    filterFailed: 'Fallidos',
    noData: 'No hay datos de progreso disponibles',
    noDataDesc: 'Comienza a usar overlays de coaching para ver el seguimiento de progreso',
    overallProgress: 'Progreso General',
    averageScore: 'Puntuación Promedio',
    completionRate: 'Tasa de Finalización',
    impact: {
      low: 'Bajo',
      medium: 'Medio',
      high: 'Alto'
    }
  }
};

export const ProgressRow: React.FC<ProgressRowProps> = ({
  overlay,
  completed,
  score,
  feedback,
  moduleId = 'clarity-sprint',
  timestamp = 'Oct 2, 2025',
  category = 'finance',
  impact = 'medium',
  onUpdateFeedback,
  onRetry
}) => {
  const [isEditingFeedback, setIsEditingFeedback] = useState(false);
  const [editedFeedback, setEditedFeedback] = useState(feedback);

  const getStatusIcon = () => {
    if (completed) {
      return <CheckCircle className="w-4 h-4 text-green-400" />;
    } else if (score === '—') {
      return <Clock className="w-4 h-4 text-yellow-400" />;
    } else {
      return <AlertCircle className="w-4 h-4 text-red-400" />;
    }
  };

  const getStatusBadge = (lang: 'en' | 'es') => {
    const t = translations[lang];
    if (completed) {
      return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{t.completed}</Badge>;
    } else if (score === '—') {
      return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">{t.pending}</Badge>;
    } else {
      return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">{t.failed}</Badge>;
    }
  };

  const getImpactColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'finance': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'law': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'science': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'time': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'trigger': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleSaveFeedback = () => {
    onUpdateFeedback?.(overlay, editedFeedback);
    setIsEditingFeedback(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-start">
        {/* Overlay Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            {getStatusIcon()}
            <code className="text-sm font-mono bg-secondary px-2 py-1 rounded text-secondary-foreground">
              {overlay}
            </code>
          </div>
          <div className="flex gap-2 mb-2">
            <Badge className={`text-xs px-2 py-0.5 ${getCategoryColor(category)}`}>
              {category.toUpperCase()}
            </Badge>
            {getStatusBadge('en')}
          </div>
          <div className="text-xs text-muted-foreground">
            Module: {moduleId} • {timestamp}
          </div>
        </div>

        {/* Score */}
        <div className="text-center">
          <div className="text-lg font-bold text-foreground mb-1">
            {score}
          </div>
          <div className="text-xs text-muted-foreground">Score</div>
        </div>

        {/* Impact */}
        <div className="text-center">
          <div className={`text-sm font-medium ${getImpactColor(impact)}`}>
            {translations.en.impact[impact]}
          </div>
          <div className="text-xs text-muted-foreground">Impact</div>
        </div>

        {/* Feedback */}
        <div className="lg:col-span-2">
          {isEditingFeedback ? (
            <div className="space-y-2">
              <Textarea
                value={editedFeedback}
                onChange={(e) => setEditedFeedback(e.target.value)}
                className="min-h-[60px] text-sm"
                placeholder="Enter feedback..."
              />
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  onClick={handleSaveFeedback}
                  className="bg-primary hover:bg-primary/90"
                >
                  Save
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => {
                    setIsEditingFeedback(false);
                    setEditedFeedback(feedback);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div 
              className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors p-2 rounded border border-transparent hover:border-border"
              onClick={() => setIsEditingFeedback(true)}
            >
              {feedback || 'Click to add feedback...'}
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-border">
        {!completed && onRetry && (
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => onRetry(overlay)}
            className="flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            Retry
          </Button>
        )}
        <Button 
          size="sm" 
          variant="outline"
          onClick={() => setIsEditingFeedback(!isEditingFeedback)}
          className="flex items-center gap-1"
        >
          <MessageSquare className="w-3 h-3" />
          {isEditingFeedback ? 'Cancel' : 'Edit Feedback'}
        </Button>
      </div>
    </motion.div>
  );
};

export const ProgressMatrix: React.FC<ProgressMatrixProps> = ({
  language,
  progressRows = [],
  moduleId = 'clarity-sprint',
  onExport,
  onRefresh,
  className = ''
}) => {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  const t = translations[language];

  // Sample data if none provided
  const defaultRows: ProgressRowProps[] = [
    {
      overlay: 'finance.trust-velocity',
      completed: true,
      score: '4.2',
      feedback: 'Founder reframed ROI with ethical clarity.',
      moduleId,
      timestamp: 'Oct 1, 2025',
      category: 'finance',
      impact: 'high'
    },
    {
      overlay: 'trigger.difficulty-risk',
      completed: false,
      score: '—',
      feedback: 'Pending coaching injection.',
      moduleId,
      timestamp: 'Oct 2, 2025',
      category: 'trigger',
      impact: 'medium'
    },
    {
      overlay: 'law.assumed-right',
      completed: true,
      score: '3.8',
      feedback: 'Legal framework understanding improved significantly.',
      moduleId,
      timestamp: 'Sep 30, 2025',
      category: 'law',
      impact: 'medium'
    },
    {
      overlay: 'time.allocation-matrix',
      completed: false,
      score: '2.1',
      feedback: 'Time management concepts need reinforcement.',
      moduleId,
      timestamp: 'Oct 1, 2025',
      category: 'time',
      impact: 'low'
    },
    {
      overlay: 'science.method-framework',
      completed: true,
      score: '4.5',
      feedback: 'Scientific approach to decision making mastered.',
      moduleId,
      timestamp: 'Sep 29, 2025',
      category: 'science',
      impact: 'high'
    }
  ];

  const activeRows = progressRows.length > 0 ? progressRows : defaultRows;

  // Filter rows
  const filteredRows = activeRows.filter(row => {
    if (statusFilter === 'all') return true;
    if (statusFilter === 'completed') return row.completed;
    if (statusFilter === 'pending') return !row.completed && row.score === '—';
    if (statusFilter === 'failed') return !row.completed && row.score !== '—';
    return true;
  });

  // Calculate stats
  const completedCount = activeRows.filter(row => row.completed).length;
  const totalCount = activeRows.length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  
  const scores = activeRows
    .filter(row => row.score !== '—')
    .map(row => parseFloat(row.score));
  const averageScore = scores.length > 0 
    ? (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(1)
    : '—';

  const statusFilters = [
    { key: 'all', label: t.filterAll, count: activeRows.length },
    { key: 'completed', label: t.filterCompleted, count: completedCount },
    { key: 'pending', label: t.filterPending, count: activeRows.filter(row => !row.completed && row.score === '—').length },
    { key: 'failed', label: t.filterFailed, count: activeRows.filter(row => !row.completed && row.score !== '—').length }
  ];

  return (
    <div className={`bg-background ${className}`}>
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
          <div className="flex gap-2">
            {onRefresh && (
              <Button variant="outline" onClick={onRefresh}>
                <TrendingUp className="w-4 h-4 mr-2" />
                {t.refresh}
              </Button>
            )}
            {onExport && (
              <Button onClick={onExport} className="bg-primary hover:bg-primary/90">
                <BarChart3 className="w-4 h-4 mr-2" />
                {t.export}
              </Button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{completionRate}%</div>
              <div className="text-sm text-muted-foreground">{t.completionRate}</div>
              <Progress value={completionRate} className="mt-2 h-1" />
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{averageScore}</div>
              <div className="text-sm text-muted-foreground">{t.averageScore}</div>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{completedCount}/{totalCount}</div>
              <div className="text-sm text-muted-foreground">{t.overallProgress}</div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {statusFilters.map((filter) => (
            <Button
              key={filter.key}
              variant={statusFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(filter.key)}
              className="flex items-center gap-1"
            >
              {filter.label}
              <Badge variant="secondary" className="ml-1 text-xs">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {filteredRows.length > 0 ? (
          <div className="space-y-4">
            {filteredRows.map((row, index) => (
              <motion.div
                key={`${row.overlay}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProgressRow {...row} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t.noData}</h3>
            <p className="text-muted-foreground">{t.noDataDesc}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProgressMatrix;