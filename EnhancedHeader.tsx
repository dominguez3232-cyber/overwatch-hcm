import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Globe, Settings, User, LogOut } from 'lucide-react';
import { NavigationBreadcrumb } from './NavigationBreadcrumb';

interface EnhancedHeaderProps {
  language: 'en' | 'es';
  currentView: string;
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onLanguageChange: (lang: 'en' | 'es') => void;
  onNavigate: (view: string) => void;
  onModeChange: (mode: 'founder' | 'trabajo' | 'accounting' | 'strategy') => void;
  showBreadcrumbs?: boolean;
}

export function EnhancedHeader({ 
  language, 
  currentView, 
  currentMode, 
  onLanguageChange, 
  onNavigate, 
  onModeChange,
  showBreadcrumbs = true 
}: EnhancedHeaderProps) {
  const [showModeSelector, setShowModeSelector] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const modeLabels = {
    founder: { en: 'Founder Mode', es: 'Modo Fundador' },
    trabajo: { en: 'Trabajo Mode', es: 'Modo Trabajo' },
    accounting: { en: 'Accounting Mode', es: 'Modo Contabilidad' },
    strategy: { en: 'Strategy Mode', es: 'Modo Estrategia' }
  };

  const getBreadcrumbs = () => {
    const breadcrumbs = [];
    
    if (currentView === 'persona') {
      breadcrumbs.push({ label: language === 'en' ? 'Platform' : 'Plataforma', view: 'persona' });
    } else if (currentView === 'business-command-center') {
      breadcrumbs.push(
        { label: language === 'en' ? 'Platform' : 'Plataforma', view: 'persona' },
        { label: language === 'en' ? 'Command Center' : 'Centro de Comando', view: 'business-command-center', isActive: true }
      );
    } else if (currentView === 'dashboard') {
      breadcrumbs.push(
        { label: language === 'en' ? 'Platform' : 'Plataforma', view: 'persona' },
        { label: language === 'en' ? 'Dashboard' : 'Panel', view: 'dashboard', isActive: true }
      );
    } else if (currentView === 'assessment') {
      breadcrumbs.push(
        { label: language === 'en' ? 'Platform' : 'Plataforma', view: 'persona' },
        { label: language === 'en' ? 'Assessment' : 'Evaluación', view: 'assessment', isActive: true }
      );
    }
    
    return breadcrumbs;
  };

  return (
    <div className="border-b border-border bg-background">
      {/* Main Header */}
      <header className="h-16 px-6 lg:px-20 flex items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('persona')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 12 }}
              className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
            >
              <span className="text-primary-foreground font-bold text-lg">⚡</span>
            </motion.div>
            <span className="text-xl font-bold text-foreground hidden lg:block">OVERWATCH³</span>
          </button>

          {/* Mode Selector */}
          <div className="relative">
            <button
              onClick={() => setShowModeSelector(!showModeSelector)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors text-sm"
            >
              <span>{modeLabels[currentMode][language]}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showModeSelector && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[200px]"
              >
                {Object.entries(modeLabels).map(([mode, labels]) => (
                  <button
                    key={mode}
                    onClick={() => {
                      onModeChange(mode as any);
                      setShowModeSelector(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-accent transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      currentMode === mode ? 'bg-accent text-accent-foreground' : ''
                    }`}
                  >
                    {labels[language]}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
        
        <div className="flex-1"></div>
        
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <button
            onClick={() => onLanguageChange(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{language.toUpperCase()}</span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[180px]"
              >
                <button className="w-full text-left px-4 py-3 hover:bg-accent transition-colors flex items-center gap-3 first:rounded-t-lg">
                  <Settings className="w-4 h-4" />
                  {language === 'en' ? 'Settings' : 'Configuración'}
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-accent transition-colors flex items-center gap-3 last:rounded-b-lg">
                  <LogOut className="w-4 h-4" />
                  {language === 'en' ? 'Sign Out' : 'Cerrar Sesión'}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      {showBreadcrumbs && getBreadcrumbs().length > 0 && (
        <NavigationBreadcrumb 
          items={getBreadcrumbs()}
          language={language}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}