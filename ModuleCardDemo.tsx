import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ModuleCard } from './ModuleCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Play, ArrowLeft } from 'lucide-react';

interface ModuleCardDemoProps {
  language: 'en' | 'es';
  onNavigate?: (view: string) => void;
}

const demoModules = {
  en: [
    {
      id: 'founder-clarity-sprint',
      title: 'Founder Clarity Sprint',
      description: 'Strategic clarity framework for founder-led decision making and vision alignment',
      overlays: 5,
      progress: '80%',
      lastAccess: 'Oct 1, 2025',
      category: 'foundation',
      difficulty: 'intermediate' as const,
      estimatedTime: '45min',
      isNew: false,
      isLocked: false
    },
    {
      id: 'cultural-force-multiplier',
      title: 'Cultural Force Multiplier',
      description: 'Transform company culture into your competitive advantage and strategic weapon',
      overlays: 8,
      progress: '100%',
      lastAccess: 'Sep 28, 2025',
      category: 'strategy',
      difficulty: 'advanced' as const,
      estimatedTime: '60min',
      isNew: false,
      isLocked: false
    },
    {
      id: 'roi-command-center',
      title: 'ROI Command Center',
      description: 'Advanced analytics and performance tracking for strategic decision making',
      overlays: 12,
      progress: '35%',
      lastAccess: 'Oct 2, 2025',
      category: 'analysis',
      difficulty: 'advanced' as const,
      estimatedTime: '90min',
      isNew: false,
      isLocked: false
    },
    {
      id: 'talent-acquisition-engine',
      title: 'Talent Acquisition Engine',
      description: 'Strategic hiring and talent pipeline optimization for scaling organizations',
      overlays: 6,
      progress: '0%',
      lastAccess: 'Never',
      category: 'execution',
      difficulty: 'intermediate' as const,
      estimatedTime: '55min',
      isNew: true,
      isLocked: false
    },
    {
      id: 'compliance-guardian',
      title: 'Compliance Guardian',
      description: 'Comprehensive legal and regulatory compliance management system',
      overlays: 10,
      progress: '0%',
      lastAccess: 'Never',
      category: 'foundation',
      difficulty: 'beginner' as const,
      estimatedTime: '40min',
      isNew: false,
      isLocked: true
    },
    {
      id: 'investor-readiness',
      title: 'Investor Readiness Matrix',
      description: 'Prepare your organization for investment rounds and due diligence',
      overlays: 15,
      progress: '65%',
      lastAccess: 'Sep 30, 2025',
      category: 'strategy',
      difficulty: 'advanced' as const,
      estimatedTime: '120min',
      isNew: false,
      isLocked: false
    }
  ],
  es: [
    {
      id: 'founder-clarity-sprint',
      title: 'Sprint de Claridad Fundacional',
      description: 'Marco estratégico de claridad para toma de decisiones y alineación de visión de fundadores',
      overlays: 5,
      progress: '80%',
      lastAccess: '1 Oct, 2025',
      category: 'foundation',
      difficulty: 'intermediate' as const,
      estimatedTime: '45min',
      isNew: false,
      isLocked: false
    },
    {
      id: 'cultural-force-multiplier',
      title: 'Multiplicador de Fuerza Cultural',
      description: 'Transforma la cultura empresarial en tu ventaja competitiva y arma estratégica',
      overlays: 8,
      progress: '100%',
      lastAccess: '28 Sep, 2025',
      category: 'strategy',
      difficulty: 'advanced' as const,
      estimatedTime: '60min',
      isNew: false,
      isLocked: false
    },
    {
      id: 'roi-command-center',
      title: 'Centro de Comando ROI',
      description: 'Análisis avanzado y seguimiento de rendimiento para toma de decisiones estratégicas',
      overlays: 12,
      progress: '35%',
      lastAccess: '2 Oct, 2025',
      category: 'analysis',
      difficulty: 'advanced' as const,
      estimatedTime: '90min',
      isNew: false,
      isLocked: false
    },
    {
      id: 'talent-acquisition-engine',
      title: 'Motor de Adquisición de Talento',
      description: 'Contratación estratégica y optimización del pipeline de talento para organizaciones en crecimiento',
      overlays: 6,
      progress: '0%',
      lastAccess: 'Nunca',
      category: 'execution',
      difficulty: 'intermediate' as const,
      estimatedTime: '55min',
      isNew: true,
      isLocked: false
    },
    {
      id: 'compliance-guardian',
      title: 'Guardián de Cumplimiento',
      description: 'Sistema integral de gestión de cumplimiento legal y regulatorio',
      overlays: 10,
      progress: '0%',
      lastAccess: 'Nunca',
      category: 'foundation',
      difficulty: 'beginner' as const,
      estimatedTime: '40min',
      isNew: false,
      isLocked: true
    },
    {
      id: 'investor-readiness',
      title: 'Matriz de Preparación para Inversores',
      description: 'Prepara tu organización para rondas de inversión y due diligence',
      overlays: 15,
      progress: '65%',
      lastAccess: '30 Sep, 2025',
      category: 'strategy',
      difficulty: 'advanced' as const,
      estimatedTime: '120min',
      isNew: false,
      isLocked: false
    }
  ]
};

const translations = {
  en: {
    title: 'OVERWATCH³ Module Library',
    subtitle: 'Strategic Intelligence Modules for Founder-Led Organizations',
    filterAll: 'All Modules',
    filterFoundation: 'Foundation',
    filterStrategy: 'Strategy',
    filterExecution: 'Execution',
    filterAnalysis: 'Analysis',
    stats: {
      total: 'Total Modules',
      completed: 'Completed',
      inProgress: 'In Progress',
      avgProgress: 'Avg Progress'
    },
    actions: {
      launchModule: 'Module launched successfully!',
      resumeModule: 'Resuming module...',
      reviewProgress: 'Opening progress review...'
    }
  },
  es: {
    title: 'Biblioteca de Módulos OVERWATCH³',
    subtitle: 'Módulos de Inteligencia Estratégica para Organizaciones Lideradas por Fundadores',
    filterAll: 'Todos los Módulos',
    filterFoundation: 'Fundación',
    filterStrategy: 'Estrategia',
    filterExecution: 'Ejecución',
    filterAnalysis: 'Análisis',
    stats: {
      total: 'Módulos Totales',
      completed: 'Completados',
      inProgress: 'En Progreso',
      avgProgress: 'Progreso Promedio'
    },
    actions: {
      launchModule: '¡Módulo lanzado exitosamente!',
      resumeModule: 'Reanudando módulo...',
      reviewProgress: 'Abriendo revisión de progreso...'
    }
  }
};

export const ModuleCardDemo: React.FC<ModuleCardDemoProps> = ({
  language,
  onNavigate
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [notification, setNotification] = useState<string>('');
  
  const t = translations[language];
  const modules = demoModules[language];

  const filteredModules = selectedFilter === 'all' 
    ? modules 
    : modules.filter(module => module.category === selectedFilter);

  const stats = {
    total: modules.length,
    completed: modules.filter(m => parseInt(m.progress.replace('%', '')) === 100).length,
    inProgress: modules.filter(m => {
      const progress = parseInt(m.progress.replace('%', ''));
      return progress > 0 && progress < 100;
    }).length,
    avgProgress: Math.round(
      modules.reduce((acc, m) => acc + parseInt(m.progress.replace('%', '')), 0) / modules.length
    )
  };

  const handleModuleAction = (action: string, moduleTitle: string) => {
    const actionMessage = t.actions[action as keyof typeof t.actions] || action;
    setNotification(`${actionMessage} - ${moduleTitle}`);
    setTimeout(() => setNotification(''), 3000);
    
    // Navigate to the appropriate view if needed
    if (onNavigate) {
      onNavigate('dashboard');
    }
  };

  const filterButtons = [
    { key: 'all', label: t.filterAll },
    { key: 'foundation', label: t.filterFoundation },
    { key: 'strategy', label: t.filterStrategy },
    { key: 'execution', label: t.filterExecution },
    { key: 'analysis', label: t.filterAnalysis }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {t.subtitle}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            {onNavigate && (
              <>
                <Button
                  onClick={() => onNavigate('lesson-player')}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Try Demo Lesson' : 'Probar Lección Demo'}
                </Button>
                <Button
                  onClick={() => onNavigate('persona')}
                  variant="outline"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Back to Platform' : 'Volver a Plataforma'}
                </Button>
              </>
            )}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-sm text-muted-foreground">{t.stats.total}</div>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
              <div className="text-sm text-muted-foreground">{t.stats.completed}</div>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{stats.inProgress}</div>
              <div className="text-sm text-muted-foreground">{t.stats.inProgress}</div>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{stats.avgProgress}%</div>
              <div className="text-sm text-muted-foreground">{t.stats.avgProgress}</div>
            </div>
          </Card>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {filterButtons.map((filter) => (
            <Button
              key={filter.key}
              variant={selectedFilter === filter.key ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.key)}
              className={`transition-all ${
                selectedFilter === filter.key 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-secondary'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Notification */}
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50"
          >
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 p-3">
              {notification}
            </Badge>
          </motion.div>
        )}

        {/* Module Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <ModuleCard
                title={module.title}
                description={module.description}
                overlays={module.overlays}
                language={language}
                progress={module.progress}
                lastAccess={module.lastAccess}
                category={module.category}
                difficulty={module.difficulty}
                estimatedTime={module.estimatedTime}
                isNew={module.isNew}
                isLocked={module.isLocked}
                onLaunch={() => handleModuleAction('launchModule', module.title)}
                onResume={() => handleModuleAction('resumeModule', module.title)}
                onReview={() => handleModuleAction('reviewProgress', module.title)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredModules.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-muted-foreground text-lg">
              {language === 'en' 
                ? 'No modules found for this category' 
                : 'No se encontraron módulos para esta categoría'
              }
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ModuleCardDemo;