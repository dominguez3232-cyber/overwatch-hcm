import React from 'react';
import { motion } from 'motion/react';
import { Play, RotateCcw, BarChart3, Layers, Clock, ChevronRight } from 'lucide-react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ModuleCardProps {
  title: string;
  overlays: number;
  language: 'en' | 'es';
  progress: string;
  lastAccess: string;
  onLaunch: () => void;
  onResume: () => void;
  onReview: () => void;
  description?: string;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  isLocked?: boolean;
  isNew?: boolean;
  className?: string;
}

const translations = {
  en: {
    launch: 'Launch',
    resume: 'Resume',
    review: 'Review Progress',
    overlays: 'Overlays',
    lastAccess: 'Last Access',
    progress: 'Progress',
    estimatedTime: 'Est. Time',
    difficulty: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    },
    new: 'NEW',
    locked: 'LOCKED',
    categories: {
      foundation: 'Foundation',
      strategy: 'Strategy',
      execution: 'Execution',
      analysis: 'Analysis'
    }
  },
  es: {
    launch: 'Lanzar',
    resume: 'Continuar',
    review: 'Ver Progreso',
    overlays: 'Capas',
    lastAccess: 'Último Acceso',
    progress: 'Progreso',
    estimatedTime: 'Tiempo Est.',
    difficulty: {
      beginner: 'Principiante',
      intermediate: 'Intermedio',
      advanced: 'Avanzado'
    },
    new: 'NUEVO',
    locked: 'BLOQUEADO',
    categories: {
      foundation: 'Fundación',
      strategy: 'Estrategia',
      execution: 'Ejecución',
      analysis: 'Análisis'
    }
  }
};

export const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  overlays,
  language,
  progress,
  lastAccess,
  onLaunch,
  onResume,
  onReview,
  description,
  category = 'foundation',
  difficulty = 'intermediate',
  estimatedTime,
  isLocked = false,
  isNew = false,
  className = ''
}) => {
  const t = translations[language];
  const progressValue = parseInt(progress.replace('%', ''));
  const isStarted = progressValue > 0;
  const isCompleted = progressValue >= 100;

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getProgressColor = () => {
    if (progressValue >= 100) return 'bg-green-500';
    if (progressValue >= 50) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 8px 32px rgba(192, 192, 192, 0.1)'
      }}
      transition={{ duration: 0.2 }}
      className={`
        group relative bg-card border border-border rounded-lg p-6 
        ${isLocked ? 'opacity-60' : 'hover:border-primary/50'}
        transition-all duration-200 ${className}
      `}
    >
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {isNew && (
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs px-2 py-0.5">
                {t.new}
              </Badge>
            )}
            {isLocked && (
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs px-2 py-0.5">
                {t.locked}
              </Badge>
            )}
            <Badge className={`text-xs px-2 py-0.5 ${getDifficultyColor(difficulty)}`}>
              {t.difficulty[difficulty]}
            </Badge>
          </div>
          
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Status Indicator */}
        <div className="flex flex-col items-end gap-1">
          <div className={`w-3 h-3 rounded-full ${
            isCompleted ? 'bg-green-500' : 
            isStarted ? 'bg-yellow-500' : 
            'bg-gray-500'
          }`} />
          <span className="text-xs text-muted-foreground">
            {isCompleted ? '✓' : isStarted ? '⟳' : '○'}
          </span>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{t.progress}</span>
          <span className="text-sm font-medium text-foreground">{progress}</span>
        </div>
        <div className="relative">
          <Progress 
            value={progressValue} 
            className="h-2 bg-secondary"
          />
          <div 
            className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-500 ${getProgressColor()}`}
            style={{ width: `${progressValue}%` }}
          />
        </div>
      </div>

      {/* Metadata Section */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Layers className="w-4 h-4" />
          <span>{overlays} {t.overlays}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{estimatedTime || '30min'}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground col-span-2">
          <BarChart3 className="w-4 h-4" />
          <span>{t.lastAccess}: {lastAccess}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        {!isStarted ? (
          <Button
            onClick={onLaunch}
            disabled={isLocked}
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Play className="w-4 h-4 mr-2" />
            {t.launch}
          </Button>
        ) : (
          <>
            <Button
              onClick={onResume}
              disabled={isLocked}
              className="flex-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {t.resume}
            </Button>
            <Button
              onClick={onReview}
              variant="outline"
              className="flex-1 border-border hover:bg-accent"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              {t.review}
            </Button>
          </>
        )}
      </div>

      {/* Hover Effect Arrow */}
      <motion.div
        className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ x: -10 }}
        animate={{ x: 0 }}
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Category Badge */}
      <div className="absolute top-2 right-2">
        <Badge variant="outline" className="text-xs px-2 py-0.5 border-border text-muted-foreground">
          {t.categories[category as keyof typeof t.categories]}
        </Badge>
      </div>
    </motion.div>
  );
};

export default ModuleCard;