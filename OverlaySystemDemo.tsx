import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Database, BarChart3, Layers, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import OverlayLibrary from './OverlayLibrary';
import ProgressMatrix from './ProgressMatrix';
import SchemaBrowser from './SchemaBrowser';
import AdminPanel from './AdminPanel';

interface OverlaySystemDemoProps {
  language: 'en' | 'es';
  onNavigate?: (view: string) => void;
  className?: string;
}

const translations = {
  en: {
    title: 'OVERWATCH³ Overlay Management System',
    subtitle: 'Comprehensive Coaching Intelligence Administration',
    overlayLibrary: 'Overlay Library',
    progressMatrix: 'Progress Matrix',
    schemaBrowser: 'Schema Browser',
    adminPanel: 'Admin Panel',
    backToPlatform: 'Back to Platform',
    systemOverview: 'System Overview',
    
    stats: {
      totalOverlays: 'Total Overlays',
      activeModules: 'Active Modules', 
      completionRate: 'Completion Rate',
      avgScore: 'Average Score'
    },
    
    description: {
      overlayLibrary: 'Browse and manage strategic coaching overlays for module enhancement',
      progressMatrix: 'Track coaching overlay performance and user progress across modules',
      schemaBrowser: 'Explore strategic intelligence schemas and inject routes into modules',
      adminPanel: 'System administration for modules, overlays, language settings, and access control'
    }
  },
  es: {
    title: 'Sistema de Gestión de Overlays OVERWATCH³',
    subtitle: 'Administración Integral de Inteligencia de Coaching',
    overlayLibrary: 'Biblioteca de Overlays',
    progressMatrix: 'Matriz de Progreso',
    schemaBrowser: 'Explorador de Esquemas',
    adminPanel: 'Panel de Administración',
    backToPlatform: 'Volver a la Plataforma',
    systemOverview: 'Vista General del Sistema',
    
    stats: {
      totalOverlays: 'Overlays Totales',
      activeModules: 'Módulos Activos',
      completionRate: 'Tasa de Finalización',
      avgScore: 'Puntuación Promedio'
    },
    
    description: {
      overlayLibrary: 'Explora y gestiona overlays de coaching estratégico para mejorar módulos',
      progressMatrix: 'Rastrea el rendimiento de overlays de coaching y el progreso del usuario en módulos',
      schemaBrowser: 'Explora esquemas de inteligencia estratégica e inyecta rutas en módulos',
      adminPanel: 'Administración del sistema para módulos, overlays, configuración de idioma y control de acceso'
    }
  }
};

export const OverlaySystemDemo: React.FC<OverlaySystemDemoProps> = ({
  language,
  onNavigate,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState('library');
  const [notification, setNotification] = useState<string>('');

  const t = translations[language];

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleOverlayPreview = (schemaTrace: string) => {
    showNotification(`Previewing ${schemaTrace}`);
  };

  const handleOverlayInject = (module: string, schemaTrace: string) => {
    showNotification(`Injected ${schemaTrace} into ${module}`);
  };

  const handleBranchInject = (route: string) => {
    showNotification(`Injected route ${route} into clarity-sprint module`);
  };

  // Sample stats data
  const systemStats = {
    totalOverlays: 24,
    activeModules: 8,
    completionRate: 78,
    avgScore: 4.2
  };

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-2">
                {onNavigate && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onNavigate('persona')}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t.backToPlatform}
                  </Button>
                )}
                <h1 className="text-3xl font-bold text-foreground">{t.title}</h1>
              </div>
              <p className="text-muted-foreground">{t.subtitle}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{systemStats.totalOverlays}</div>
                <div className="text-xs text-muted-foreground">{t.stats.totalOverlays}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{systemStats.activeModules}</div>
                <div className="text-xs text-muted-foreground">{t.stats.activeModules}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{systemStats.completionRate}%</div>
                <div className="text-xs text-muted-foreground">{t.stats.completionRate}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{systemStats.avgScore}</div>
                <div className="text-xs text-muted-foreground">{t.stats.avgScore}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-14 bg-transparent">
              <TabsTrigger 
                value="library" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Layers className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-medium">{t.overlayLibrary}</div>
                  <div className="text-xs opacity-70">{t.description.overlayLibrary}</div>
                </div>
              </TabsTrigger>
              
              <TabsTrigger 
                value="progress" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <BarChart3 className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-medium">{t.progressMatrix}</div>
                  <div className="text-xs opacity-70">{t.description.progressMatrix}</div>
                </div>
              </TabsTrigger>
              
              <TabsTrigger 
                value="schema" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Database className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-medium">{t.schemaBrowser}</div>
                  <div className="text-xs opacity-70">{t.description.schemaBrowser}</div>
                </div>
              </TabsTrigger>
              
              <TabsTrigger 
                value="admin" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Settings className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-medium">{t.adminPanel}</div>
                  <div className="text-xs opacity-70">{t.description.adminPanel}</div>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Content */}
            <div className="max-w-7xl mx-auto">
              <TabsContent value="library" className="mt-0">
                <OverlayLibrary
                  language={language}
                  onOverlaySelect={(overlay) => {
                    handleOverlayPreview(overlay.schemaTrace);
                  }}
                />
              </TabsContent>

              <TabsContent value="progress" className="mt-0">
                <ProgressMatrix
                  language={language}
                  moduleId="clarity-sprint"
                  onExport={() => showNotification('Exporting progress report...')}
                  onRefresh={() => showNotification('Refreshing progress data...')}
                />
              </TabsContent>

              <TabsContent value="schema" className="mt-0">
                <SchemaBrowser
                  language={language}
                  onBranchSelect={(branch) => {
                    showNotification(`Exploring ${branch.title} schema`);
                  }}
                  onRouteInject={(branch, route) => {
                    handleBranchInject(`${branch}.${route}`);
                  }}
                />
              </TabsContent>

              <TabsContent value="admin" className="mt-0">
                <AdminPanel
                  language={language}
                  onLanguageChange={(newLanguage) => {
                    showNotification(`Language changed to ${newLanguage.toUpperCase()}`);
                  }}
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: '50%' }}
          animate={{ opacity: 1, y: 0, x: '50%' }}
          exit={{ opacity: 0, y: -20, x: '50%' }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg"
        >
          {notification}
        </motion.div>
      )}
    </div>
  );
};

export default OverlaySystemDemo;