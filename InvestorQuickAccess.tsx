import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface QuickAccessModule {
  id: string;
  name: string;
  icon: string;
  route: string;
  color: string;
  status: 'ready' | 'demo';
}

interface InvestorQuickAccessProps {
  language: 'en' | 'es';
  onNavigate: (route: string) => void;
  currentView?: string;
}

export const InvestorQuickAccess: React.FC<InvestorQuickAccessProps> = ({
  language,
  onNavigate,
  currentView
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickModules: QuickAccessModule[] = [
    {
      id: 'investor-presentation',
      name: language === 'en' ? 'All Modules' : 'Todos Módulos',
      icon: '🎯',
      route: 'investor-presentation',
      color: 'from-green-500 to-blue-500',
      status: 'ready'
    },
    {
      id: 'unified-command',
      name: language === 'en' ? 'Command Center' : 'Centro Comando',
      icon: '⚡',
      route: 'unified-command-center',
      color: 'from-blue-500 to-purple-500',
      status: 'ready'
    },
    {
      id: 'hris',
      name: 'HRIS³',
      icon: '🏢',
      route: 'hris-dashboard',
      color: 'from-emerald-500 to-teal-500',
      status: 'ready'
    },
    {
      id: 'erp-assessment',
      name: language === 'en' ? 'ERP Assessment' : 'Evaluación ERP',
      icon: '📊',
      route: 'erp-assessment',
      color: 'from-indigo-500 to-blue-500',
      status: 'ready'
    },
    {
      id: 'epm',
      name: 'EPM Cloud',
      icon: '⚡',
      route: 'epm-cloud',
      color: 'from-purple-500 to-indigo-500',
      status: 'ready'
    },
    {
      id: 'crm',
      name: 'CRM Intelligence',
      icon: '🎯',
      route: 'crm-intelligence',
      color: 'from-red-500 to-pink-500',
      status: 'ready'
    },
    {
      id: 'recruitment',
      name: language === 'en' ? 'Recruitment' : 'Reclutamiento',
      icon: '👥',
      route: 'recruitment-cloud',
      color: 'from-cyan-500 to-teal-500',
      status: 'ready'
    },
    {
      id: 'planning',
      name: language === 'en' ? 'Planning' : 'Planificación',
      icon: '🎯',
      route: 'integrated-planning-execution',
      color: 'from-emerald-500 to-blue-500',
      status: 'ready'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-2xl"
          >
            <div className="text-xs text-muted-foreground mb-3 text-center">
              {language === 'en' ? 'Quick Module Access' : 'Acceso Rápido Módulos'}
            </div>
            <div className="grid grid-cols-2 gap-2 w-80">
              {quickModules.map((module) => (
                <motion.button
                  key={module.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onNavigate(module.route);
                    setIsExpanded(false);
                  }}
                  className={`p-3 rounded-lg text-white font-medium text-sm transition-all flex items-center gap-2 bg-gradient-to-r ${module.color} ${
                    currentView === module.route ? 'ring-2 ring-white/50' : ''
                  }`}
                >
                  <span className="text-lg">{module.icon}</span>
                  <div className="text-left flex-1">
                    <div className="text-xs">{module.name}</div>
                    <div className="text-xs opacity-75">
                      {module.status === 'ready' ? (language === 'en' ? 'Ready' : 'Listo') : 'Demo'}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg flex items-center justify-center text-2xl transition-all ${
          isExpanded ? 'rotate-45' : ''
        }`}
      >
        {isExpanded ? '✕' : '🚀'}
      </motion.button>

      {/* Keyboard Shortcuts Hint */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-16 right-0 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2 text-xs text-muted-foreground whitespace-nowrap"
        >
          {language === 'en' ? 'Click any module for instant access' : 'Haz clic en cualquier módulo para acceso instantáneo'}
        </motion.div>
      )}
    </div>
  );
};

export default InvestorQuickAccess;