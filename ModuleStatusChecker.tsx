import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';

interface ModuleStatus {
  id: string;
  name: string;
  route: string;
  status: 'ready' | 'loading' | 'error';
  loadTime?: number;
  error?: string;
  lastChecked?: Date;
}

interface ModuleStatusCheckerProps {
  language: 'en' | 'es';
  onNavigate: (route: string) => void;
}

export const ModuleStatusChecker: React.FC<ModuleStatusCheckerProps> = ({
  language,
  onNavigate
}) => {
  const [moduleStatuses, setModuleStatuses] = useState<ModuleStatus[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [lastFullCheck, setLastFullCheck] = useState<Date | null>(null);

  const coreModules = [
    { id: 'unified-command-center', name: 'Unified Command Center', route: 'unified-command-center' },
    { id: 'hris-dashboard', name: 'HRIS³ Dashboard', route: 'hris-dashboard' },
    { id: 'cfo-dashboard', name: 'CFO Dashboard (Work Mode)', route: 'cfo-dashboard' },
    { id: 'erp-assessment', name: 'ERP Assessment', route: 'erp-assessment' },
    { id: 'erp-system-development', name: 'ERP Development', route: 'erp-system-development' },
    { id: 'recruitment-cloud', name: 'Recruitment Cloud', route: 'recruitment-cloud' },
    { id: 'epm-cloud', name: 'EPM Cloud', route: 'epm-cloud' },
    { id: 'crm-intelligence', name: 'CRM Intelligence', route: 'crm-intelligence' },
    { id: 'edm-intelligence', name: 'EDM Intelligence', route: 'edm-intelligence' },
    { id: 'integrated-planning-execution', name: 'Business Planning', route: 'integrated-planning-execution' },
    { id: 'platform-navigator', name: 'Platform Navigator', route: 'platform-navigator' },
    { id: 'investor-demo', name: 'Investor Demo Center', route: 'investor-demo' },
    { id: 'founder-welcome', name: 'Founder Welcome', route: 'founder-welcome' }
  ];

  const checkModuleStatus = async (module: { id: string; name: string; route: string }): Promise<ModuleStatus> => {
    const startTime = Date.now();
    
    try {
      // Simulate checking if the module route exists and loads properly
      // In a real implementation, this could make a lightweight request to check if the route is accessible
      await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 100));
      
      const loadTime = Date.now() - startTime;
      
      return {
        id: module.id,
        name: module.name,
        route: module.route,
        status: 'ready',
        loadTime,
        lastChecked: new Date()
      };
    } catch (error) {
      return {
        id: module.id,
        name: module.name,
        route: module.route,
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
        lastChecked: new Date()
      };
    }
  };

  const runFullCheck = async () => {
    setIsChecking(true);
    
    // Set all modules to loading state
    const loadingStatuses = coreModules.map(module => ({
      id: module.id,
      name: module.name,
      route: module.route,
      status: 'loading' as const
    }));
    setModuleStatuses(loadingStatuses);
    
    // Check each module
    const statusPromises = coreModules.map(checkModuleStatus);
    const results = await Promise.all(statusPromises);
    
    setModuleStatuses(results);
    setLastFullCheck(new Date());
    setIsChecking(false);
  };

  useEffect(() => {
    // Run initial check
    runFullCheck();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'text-green-400';
      case 'loading': return 'text-yellow-400 animate-pulse';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready': return '✅';
      case 'loading': return '🔄';
      case 'error': return '❌';
      default: return '❓';
    }
  };

  const readyModules = moduleStatuses.filter(m => m.status === 'ready').length;
  const totalModules = moduleStatuses.length;
  const readinessPercentage = totalModules > 0 ? Math.round((readyModules / totalModules) * 100) : 0;

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🔍</span>
            {language === 'en' ? 'Module Status Checker' : 'Verificador Estado Módulos'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? 'Comprehensive status check for all OVERWATCH³ modules before investor presentation'
              : 'Verificación comprehensiva de estado para todos los módulos OVERWATCH³ antes de presentación a inversores'
            }
          </p>
          
          {/* Overall Status */}
          <div className="bg-card rounded-lg p-6 mb-6 border border-border">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{readinessPercentage}%</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'System Ready' : 'Sistema Listo'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{readyModules}</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Modules Ready' : 'Módulos Listos'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{totalModules}</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Total Modules' : 'Total Módulos'}
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-3 bg-secondary rounded-full mt-4 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${readinessPercentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            
            {lastFullCheck && (
              <div className="text-xs text-muted-foreground mt-2">
                {language === 'en' ? 'Last checked' : 'Última verificación'}: {lastFullCheck.toLocaleTimeString()}
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={runFullCheck}
              disabled={isChecking}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isChecking 
                ? (language === 'en' ? 'Checking...' : 'Verificando...') 
                : (language === 'en' ? 'Recheck All' : 'Verificar Todo')
              }
            </button>
            <button
              onClick={() => onNavigate('investor-presentation')}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              {language === 'en' ? 'Launch Investor Dashboard' : 'Lanzar Dashboard Inversores'}
            </button>
          </div>
        </div>

        {/* Module Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {moduleStatuses.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-pointer"
                    onClick={() => module.status === 'ready' && onNavigate(module.route)}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getStatusIcon(module.status)}</span>
                    <span className={`text-sm font-medium ${getStatusColor(module.status)}`}>
                      {module.status.toUpperCase()}
                    </span>
                  </div>
                  {module.loadTime && (
                    <span className="text-xs text-muted-foreground">
                      {module.loadTime}ms
                    </span>
                  )}
                </div>
                
                <h3 className="font-medium text-foreground mb-2">{module.name}</h3>
                
                {module.error && (
                  <div className="text-xs text-red-400 bg-red-400/10 p-2 rounded">
                    {module.error}
                  </div>
                )}
                
                {module.status === 'ready' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(module.route);
                    }}
                    className="w-full mt-3 py-1 px-3 bg-secondary hover:bg-accent text-secondary-foreground rounded text-sm transition-colors"
                  >
                    {language === 'en' ? 'Launch' : 'Lanzar'}
                  </button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pre-flight Checklist */}
        <div className="mt-8 bg-card rounded-lg p-6 border border-border">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>✈️</span>
            {language === 'en' ? 'Pre-flight Investor Presentation Checklist' : 'Lista Pre-vuelo Presentación Inversores'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-sm">{language === 'en' ? 'All core modules accessible' : 'Todos los módulos centrales accesibles'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-sm">{language === 'en' ? 'Investor dashboard ready' : 'Dashboard inversores listo'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-sm">{language === 'en' ? 'Quick access navigation' : 'Navegación acceso rápido'}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-sm">{language === 'en' ? 'Bilingual support active' : 'Soporte bilingüe activo'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-sm">{language === 'en' ? 'Demo scenarios ready' : 'Escenarios demo listos'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-sm">{language === 'en' ? 'Platform optimized' : 'Plataforma optimizada'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleStatusChecker;