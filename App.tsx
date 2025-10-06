import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Core components - loaded immediately
import { CoachingOverlayProvider, OverlayControls } from './components/CoachingOverlayProvider';
import { coachingOverlayLibrary } from './components/CoachingOverlaySeed';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorRecovery } from './components/ErrorRecovery';
import { LoadingState } from './components/LoadingState';
import { PageTransition } from './components/PageTransition';
import { FloatingActionButton } from './components/FloatingActionButton';
import { StatusIndicator } from './components/StatusIndicator';
import { Toaster } from './components/ui/sonner';

// Simplified loading fallback component - prevent timeout issues (moved to top)
const SimpleFallback = () => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
    <div className="text-center">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
);

// Core investor presentation components - loaded immediately for demo readiness
const LandingPage = lazy(() => import('./components/LandingPage').catch(() => ({ default: SimpleFallback })));
const InvestorPresentationDashboard = lazy(() => import('./components/InvestorPresentationDashboard').catch(() => ({ default: SimpleFallback })));
const InvestorQuickAccess = lazy(() => import('./components/InvestorQuickAccess').catch(() => ({ default: SimpleFallback })));
const ModuleStatusChecker = lazy(() => import('./components/ModuleStatusChecker').catch(() => ({ default: SimpleFallback })));

// Essential business modules - simplified loading without Promise.race complexity
const UnifiedCommandCenter = lazy(() => 
  import('./components/UnifiedCommandCenter')
    .then(m => ({ default: m.UnifiedCommandCenter }))
    .catch(() => ({ default: SimpleFallback }))
);

const PlatformNavigationCenter = lazy(() => 
  import('./components/PlatformNavigationCenter')
    .then(m => ({ default: m.PlatformNavigationCenter }))
    .catch(() => ({ default: SimpleFallback }))
);

const OverwatchHrisIntegration = lazy(() => 
  import('./components/OverwatchHrisIntegration').catch(() => ({ default: SimpleFallback }))
);

const OverwatchErpAssessment = lazy(() => 
  import('./components/OverwatchErpAssessment').catch(() => ({ default: SimpleFallback }))
);

const OverwatchErpSystemDevelopment = lazy(() => 
  import('./components/OverwatchErpSystemDevelopment').catch(() => ({ default: SimpleFallback }))
);

const OverwatchRecruitmentCloud = lazy(() => 
  import('./components/OverwatchRecruitmentCloud').catch(() => ({ default: SimpleFallback }))
);

const OverwatchEpmIntegration = lazy(() => 
  import('./components/OverwatchEpmIntegration').catch(() => ({ default: SimpleFallback }))
);

const OverwatchCrmIntegration = lazy(() => 
  import('./components/OverwatchCrmIntegration').catch(() => ({ default: SimpleFallback }))
);

const OverwatchEdmIntegration = lazy(() => 
  import('./components/OverwatchEdmIntegration').catch(() => ({ default: SimpleFallback }))
);

const IntegratedBusinessPlanningExecution = lazy(() => 
  import('./components/IntegratedBusinessPlanningExecution').catch(() => ({ default: SimpleFallback }))
);

const IntegratedBusinessModuleCenter = lazy(() => 
  import('./components/IntegratedBusinessModuleCenter').catch(() => ({ default: SimpleFallback }))
);

const CustomerJourneyMapper = lazy(() => 
  import('./components/CustomerJourneyMapper').catch(() => ({ default: SimpleFallback }))
);

// Decision Making Models Center - Restored full functionality
const DecisionMakingModelsCenter = lazy(() => 
  import('./components/DecisionMakingModelsCenter')
    .then(m => ({ default: m.DecisionMakingModelsCenter }))
    .catch(() => ({ default: SimpleFallback }))
);

// Load components only when specifically needed - simplified
const EnhancedLandingPage = lazy(() => 
  import('./components/EnhancedLandingPage').catch(() => ({ default: SimpleFallback }))
);

const InvestorDemoCenterEnhanced = lazy(() => 
  import('./components/InvestorDemoCenterEnhanced').catch(() => ({ default: SimpleFallback }))
);

const FounderWelcomeCenter = lazy(() => 
  import('./components/FounderWelcomeCenter').catch(() => ({ default: SimpleFallback }))
);

// Core imported components - simplified
const WorkMode = lazy(() => 
  import('./imports/WorkMode').catch(() => ({ default: SimpleFallback }))
);

const OverwatchStrategyManual = lazy(() => 
  import('./components/OverwatchStrategyManual')
    .then(m => ({ default: m.OverwatchStrategyManual }))
    .catch(() => ({ default: SimpleFallback }))
);

const OverwatchAcademyIntegrated = lazy(() => 
  import('./components/OverwatchAcademyIntegrated').catch(() => ({ default: SimpleFallback }))
);

const EpmScenarioPlanning = lazy(() => 
  import('./imports/EpmScenarioPlanning').catch(() => ({ default: SimpleFallback }))
);

// SMART AM - Account Management Intelligence
const SmartAccountManagement = lazy(() => 
  import('./imports/AiDrivenReportManagementAppCommunity').catch(() => ({ default: SimpleFallback }))
);

// Force Multiplier ROI Calculation Engine
const ForceMultiplierROICalculationEngine = lazy(() => 
  import('./components/ForceMultiplierROICalculationEngine')
    .then(m => ({ default: m.ForceMultiplierROICalculationEngine }))
    .catch(() => ({ default: SimpleFallback }))
);

// Emergency fallback component for critical failures
const EmergencyFallback = ({ error, retry }: { error?: string; retry: () => void }) => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
    <div className="text-center max-w-md mx-auto">
      <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
        <span className="text-red-400 text-3xl">⚠️</span>
      </div>
      <h2 className="text-2xl font-bold mb-4">Loading Issue Detected</h2>
      <p className="text-muted-foreground mb-6">
        {error || 'A component failed to load properly. This usually resolves with a page refresh.'}
      </p>
      <div className="flex gap-4 justify-center">
        <button 
          onClick={retry}
          className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg"
        >
          Try Again
        </button>
        <button 
          onClick={() => window.location.reload()}
          className="border border-border hover:bg-secondary px-6 py-2 rounded-lg"
        >
          Refresh Page
        </button>
      </div>
    </div>
  </div>
);

export default function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [currentMode, setCurrentMode] = useState<'founder' | 'trabajo' | 'accounting' | 'strategy'>('founder');
  const [currentView, setCurrentView] = useState<string>('landing');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'online' | 'offline'>('online');
  const [criticalError, setCriticalError] = useState<Error | null>(null);
  const [unifiedContext, setUnifiedContext] = useState({
    activeBusinessModule: null,
    crossModuleData: {},
    globalAnalytics: {},
    userJourney: [],
    systemState: 'ready'
  });

  // Handle URL parameters for certificate sharing
  const [urlParams, setUrlParams] = useState<URLSearchParams>(new URLSearchParams());

  // Simplified error handling - suppress loading errors
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // Suppress common loading errors that are recoverable
      const errorMessage = event.reason?.message || '';
      if (errorMessage.includes('timeout') || 
          errorMessage.includes('Loading chunk') ||
          errorMessage.includes('getPage') ||
          errorMessage.includes('fetch')) {
        event.preventDefault();
        return;
      }
    };
    
    const handleError = (event: ErrorEvent) => {
      // Suppress common loading errors
      if (event.message?.includes('Loading chunk') ||
          event.message?.includes('getPage') ||
          event.message?.includes('timeout')) {
        event.preventDefault();
        return;
      }
    };
    
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  // Initialize URL parameters and handle special routes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUrlParams(params);
    
    // Handle certificate links
    const certificateId = params.get('id');
    if (certificateId && window.location.pathname === '/certificate') {
      setCurrentView('certificate-viewer');
    }
    
    // Handle profile badge links - /profile/{username}/badges
    const pathname = window.location.pathname;
    const profileMatch = pathname.match(/^\/profile\/([^\/]+)\/badges$/);
    if (profileMatch) {
      const username = profileMatch[1];
      setCurrentView(`profile-badges-${username}`);
    }
  }, []);

  // Remove heavy analytics initialization to prevent timeouts

  // Ultra-simplified navigation with timeout protection
  const handleNavigate = useCallback((view: string, contextData?: any) => {
    try {
      // Immediate navigation without performance logging to prevent delays
      setCurrentView(view);
      
      // Minimal context tracking only for essential modules
      if (view.includes('hris') || view.includes('erp') || view.includes('epm')) {
        setUnifiedContext(prev => ({
          ...prev,
          activeBusinessModule: view.includes('hris') ? 'HRIS' :
                               view.includes('erp') ? 'ERP' :
                               view.includes('epm') ? 'EPM' : prev.activeBusinessModule
        }));
      }
      
    } catch (error) {
      console.warn('Navigation error:', error);
      setCurrentView('landing');
    }
  }, []);

  // Simplified connection monitoring
  useEffect(() => {
    const handleOnline = () => setConnectionStatus('online');
    const handleOffline = () => setConnectionStatus('offline');
    
    // Set initial status based on navigator.onLine
    setConnectionStatus(navigator.onLine ? 'online' : 'offline');
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Simplified Marketing Header - reduced complexity for performance
  const MarketingHeader = () => (
    <header className="h-20 px-6 lg:px-20 flex items-center bg-background border-b border-border">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => handleNavigate('platform-navigator')}
          className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transition-all"
          title={language === 'en' ? 'Launch OVERWATCH³ Platform Navigator' : 'Abrir Navegador de Plataforma OVERWATCH³'}
        >
          <span className="text-primary-foreground font-bold text-lg">⚡</span>
        </button>
        <button 
          onClick={() => handleNavigate('landing')}
          className="hover:opacity-80 transition-opacity"
        >
          <span className="text-xl font-bold text-foreground hidden lg:block">OVERWATCH³</span>
        </button>
      </div>
      
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-2">
        <StatusIndicator 
          type={connectionStatus}
          language={language}
          size="sm"
        />
        <button 
          onClick={() => handleNavigate('investor-presentation')}
          className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium transition-all"
        >
          🎯 {language === 'en' ? 'Investor Demo' : 'Demo Inversores'}
        </button>
        <button 
          onClick={() => handleNavigate('platform-navigator')}
          className="text-foreground hover:bg-secondary px-3 py-1 rounded transition-colors text-sm"
        >
          🗺️ {language === 'en' ? 'Navigator' : 'Navegador'}
        </button>
        <button 
          onClick={() => handleNavigate('academy-center')}
          className="text-foreground hover:bg-secondary px-3 py-1 rounded transition-colors text-sm"
        >
          🎓 {language === 'en' ? 'Academy' : 'Academia'}
        </button>
        <button 
          onClick={() => handleNavigate('smart-am')}
          className="text-foreground hover:bg-secondary px-3 py-1 rounded transition-colors text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          title={language === 'en' ? 'SMART AM - Account Management Intelligence for Account Managers' : 'SMART AM - Inteligencia de Gestión de Cuentas para Gerentes de Cuenta'}
        >
          🎯 {language === 'en' ? 'SMART AM' : 'SMART AM'}
        </button>
        <button 
          onClick={() => handleNavigate('decision-models-center')}
          className="text-foreground hover:bg-secondary px-3 py-1 rounded transition-colors text-sm bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20"
          title={language === 'en' ? 'Decision Making Models Center - Eliminate decision fear with structured frameworks including McKinsey 5 Big Moves' : 'Centro Modelos Decisión - Elimina miedo decisión con marcos estructurados incluyendo 5 Grandes Movimientos McKinsey'}
        >
          🧠 {language === 'en' ? 'Decision Models' : 'Modelos Decisión'}
        </button>
        <button 
          onClick={() => handleNavigate('force-multiplier-calculations')}
          className="text-foreground hover:bg-secondary px-3 py-1 rounded transition-colors text-sm bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20"
          title={language === 'en' ? 'Force Multiplier ROI Calculations - Detailed formulae behind 40:12:1, 7.15:1, 50:15:1 ratios' : 'Cálculos ROI Multiplicador Fuerza - Fórmulas detalladas detrás ratios 40:12:1, 7.15:1, 50:15:1'}
        >
          🧮 {language === 'en' ? 'ROI Formulae' : 'Fórmulas ROI'}
        </button>
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
          className="bg-input border border-border text-foreground px-3 py-1 rounded text-sm"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </header>
  );



  // Show error recovery if there's a critical error
  if (criticalError) {
    return (
      <ErrorRecovery
        error={criticalError}
        language={language}
        onRetry={() => {
          setCriticalError(null);
          setConnectionStatus('online');
        }}
        onNavigateHome={() => {
          setCriticalError(null);
          setCurrentView('landing');
        }}
      />
    );
  }



  // Prevent timeout issues - quick loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            {language === 'en' ? 'Loading...' : 'Cargando...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary 
      language={language}
      onReset={() => {
        setCriticalError(null);
        setCurrentView('landing');
      }}
    >
      <CoachingOverlayProvider
        initialStakeholder="CEO"
        initialModule="EPM"
        initialLanguage={language.toUpperCase() as 'EN' | 'ES'}
        overlayLibrary={coachingOverlayLibrary}
      >
        <div
          className="dark min-h-screen bg-background text-foreground"
          style={{
            fontFamily: "'Biome', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
          }}
        >
        <AnimatePresence mode="wait">
          <div key={currentView}>
          {/* Main Landing Page View */}
          {currentView === 'landing' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <LandingPage
                    language={language}
                    onNavigate={handleNavigate}
                    onRequestDemo={() => handleNavigate('demo')}
                    onLaunchPlatform={() => handleNavigate('platform-navigator')}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Enhanced Landing Page (features) */}
          {currentView === 'enhanced-landing' && (
            <PageTransition>
              <div className="min-h-screen">
                <MarketingHeader />
                <Suspense fallback={<SimpleFallback />}>
                  <EnhancedLandingPage
                    language={language}
                    onNavigateToSuite={(moduleId) => handleNavigate(moduleId)}
                    onNavigateToPlatform={() => handleNavigate('platform-navigator')}
                    onRequestDemo={() => handleNavigate('demo')}
                    onNavigateToSecurity={() => handleNavigate('privacy-security-compliance')}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Module Status Checker */}
          {currentView === 'module-status-check' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <ModuleStatusChecker
                    language={language}
                    onNavigate={handleNavigate}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Investor Presentation Dashboard */}
          {currentView === 'investor-presentation' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <InvestorPresentationDashboard
                    language={language}
                    onNavigate={handleNavigate}
                    currentView={currentView}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Platform Navigation Center */}
          {currentView === 'platform-navigator' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <PlatformNavigationCenter
                    language={language}
                    currentMode={currentMode}
                    onNavigate={handleNavigate}
                    onBack={() => handleNavigate('landing')}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Features/About Pages - Simplified */}
          {['enhanced-landing', 'company', 'contact', 'sitemap'].includes(currentView) && (
            <PageTransition>
              <div className="min-h-screen bg-background text-foreground">
                <MarketingHeader />
                <div className="px-6 lg:px-20 py-16">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-8">
                      {language === 'en' ? 'OVERWATCH³ Platform' : 'Plataforma OVERWATCH³'}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      {language === 'en' 
                        ? 'Advisory-Grade HRIS Command Center for founder-led companies'
                        : 'Centro de Comando HRIS Grado Asesor para empresas lideradas por fundadores'
                      }
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button 
                        onClick={() => handleNavigate('investor-presentation')}
                        className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 px-8 py-3 rounded-lg font-medium transition-all text-white"
                      >
                        🎯 {language === 'en' ? 'Investor Demo' : 'Demo Inversores'}
                      </button>
                      <button 
                        onClick={() => handleNavigate('platform-navigator')}
                        className="border border-border hover:bg-secondary px-8 py-3 rounded-lg font-medium transition-colors"
                      >
                        🗺️ {language === 'en' ? 'Platform Navigator' : 'Navegador Plataforma'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </PageTransition>
          )}

          {/* Demo Page */}

          {currentView === 'demo' && (
            <PageTransition>
              <div className="min-h-screen bg-background text-foreground">
                <MarketingHeader />
                <div className="px-6 lg:px-20 py-16">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-8">
                      {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      {language === 'en' 
                        ? 'Experience the world\'s first Advisory-Grade HRIS Command Center'
                        : 'Experimenta el primer Centro de Comando HRIS de Grado Asesor del mundo'
                      }
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button 
                        onClick={() => handleNavigate('investor-presentation')}
                        className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 px-8 py-3 rounded-lg font-medium transition-all text-white"
                      >
                        🎯 {language === 'en' ? 'Live Demo' : 'Demo en Vivo'}
                      </button>
                      <button 
                        onClick={() => handleNavigate('platform-navigator')}
                        className="border border-border hover:bg-secondary px-8 py-3 rounded-lg font-medium transition-colors"
                      >
                        🗺️ {language === 'en' ? 'Explore Platform' : 'Explorar Plataforma'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </PageTransition>
          )}

          {/* Additional Demo Routes - Lazy Loaded */}
          {['figma-demo', 'overwatch-demo', 'schema-demo', 'module-demo', 'overlay-system'].includes(currentView) && (
            <PageTransition>
              <div className="min-h-screen bg-background text-foreground">
                <MarketingHeader />
                <div className="px-6 lg:px-20 py-16">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-card rounded-lg p-8 border border-border">
                      <div className="flex items-center gap-4 mb-6 justify-center">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-blue-400 text-2xl">🚀</span>
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold">
                            {language === 'en' ? 'Demo Loading...' : 'Cargando Demo...'}
                          </h1>
                          <p className="text-muted-foreground">
                            {language === 'en' 
                              ? 'Advanced demo features are optimizing for best performance'
                              : 'Funciones de demo avanzadas se están optimizando para mejor rendimiento'
                            }
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 justify-center">
                        <button 
                          onClick={() => handleNavigate('investor-presentation')}
                          className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 px-6 py-2 rounded-lg text-white font-medium transition-all"
                        >
                          {language === 'en' ? 'Investor Demo' : 'Demo Inversores'}
                        </button>
                        <button 
                          onClick={() => handleNavigate('platform-navigator')}
                          className="bg-secondary hover:bg-accent px-6 py-2 rounded-lg text-secondary-foreground transition-colors"
                        >
                          {language === 'en' ? 'Platform Navigator' : 'Navegador Plataforma'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageTransition>
          )}

          {/* Investor Demo Center */}
          {currentView === 'investor-demo' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <InvestorDemoCenterEnhanced
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={(() => {
                      const params = new URLSearchParams(window.location.search);
                      const mode = params.get('mode');
                      return ['feedback', 'analytics', 'composer', 'review', 'impact', 'leaderboard', 'trophies', 'gallery'].includes(mode || '') ? mode as any : 'showcase';
                    })()}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Founder Welcome Center */}
          {currentView === 'founder-welcome' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <FounderWelcomeCenter
                    language={language}
                    onNavigate={handleNavigate}
                    founderName="Luis"
                    companyName="OVERWATCH³"
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Unified Command Center - All modules integrated */}
          {currentView === 'unified-command-center' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <UnifiedCommandCenter
                    language={language}
                    currentMode={currentMode}
                    onNavigate={handleNavigate}
                    unifiedContext={unifiedContext}
                    onContextUpdate={setUnifiedContext}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Business Intelligence Modules */}
          {currentView === 'business-modules' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <IntegratedBusinessModuleCenter
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* HRIS Dashboard */}
          {currentView === 'hris-dashboard' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchHrisIntegration
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* ERP Assessment */}
          {currentView === 'erp-assessment' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchErpAssessment
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* ERP System Development */}
          {currentView === 'erp-system-development' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchErpSystemDevelopment
                    language={language}
                    currentMode={currentMode}
                    onNavigate={handleNavigate}
                    unifiedContext={unifiedContext}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Recruitment Cloud */}
          {currentView === 'recruitment-cloud' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchRecruitmentCloud
                    language={language}
                    currentMode={currentMode}
                    onNavigate={handleNavigate}
                    unifiedContext={unifiedContext}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* EPM Cloud */}
          {currentView === 'epm-cloud' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchEpmIntegration
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* CRM Intelligence */}
          {currentView === 'crm-intelligence' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchCrmIntegration
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* EDM Intelligence */}
          {currentView === 'edm-intelligence' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchEdmIntegration
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Integrated Business Planning & Execution */}
          {currentView === 'integrated-planning-execution' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <IntegratedBusinessPlanningExecution
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Customer Journey Mapper */}
          {currentView === 'customer-journey-mapper' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <CustomerJourneyMapper
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* CFO Dashboard - Figma Work Mode */}
          {currentView === 'cfo-dashboard' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <WorkMode />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* OVERWATCH³ Academy Center (Integrated LMS) */}
          {currentView === 'academy-center' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchAcademyIntegrated
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* OVERWATCH Strategy Manual (Original) */}
          {currentView === 'strategy-manual' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <OverwatchStrategyManual
                    language={language}
                    onNavigate={handleNavigate}
                    onBack={() => handleNavigate('landing')}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* EPM Scenario Planning - Advanced Financial Modeling */}
          {currentView === 'epm-scenario-planning' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <EpmScenarioPlanning />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* SMART AM - Account Management Intelligence */}
          {currentView === 'smart-am' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <SmartAccountManagement />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Decision Making Models Center */}
          {currentView === 'decision-models-center' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <DecisionMakingModelsCenter
                    language={language}
                    onNavigate={handleNavigate}
                    currentMode={currentMode}
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Force Multiplier ROI Calculation Engine */}
          {currentView === 'force-multiplier-calculations' && (
            <PageTransition>
              <div className="min-h-screen">
                <Suspense fallback={<SimpleFallback />}>
                  <ForceMultiplierROICalculationEngine
                    language={language}
                    companySize="growth"
                    industry="professional-services"
                  />
                </Suspense>
              </div>
            </PageTransition>
          )}

          {/* Catch-all for unsupported views - Simplified to prevent timeouts */}
          {!['landing', 'investor-presentation', 'module-status-check', 'platform-navigator', 'unified-command-center', 'hris-dashboard', 'erp-assessment', 'erp-system-development', 'recruitment-cloud', 'epm-cloud', 'crm-intelligence', 'edm-intelligence', 'integrated-planning-execution', 'customer-journey-mapper', 'cfo-dashboard', 'epm-scenario-planning', 'smart-am', 'academy-center', 'strategy-manual', 'decision-models-center', 'force-multiplier-calculations', 'investor-demo', 'founder-welcome', 'enhanced-landing', 'company', 'contact', 'demo', 'sitemap', 'figma-demo', 'overwatch-demo', 'schema-demo', 'module-demo', 'overlay-system'].includes(currentView) && (
            <PageTransition>
              <div className="min-h-screen bg-background text-foreground">
                <MarketingHeader />
                <div className="px-6 lg:px-20 py-16">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-card rounded-lg p-8 border border-border">
                      <div className="flex items-center gap-4 mb-6 justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-2xl">🎯</span>
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold">
                            {language === 'en' ? 'Investor Demo Ready!' : '¡Demo Inversores Listo!'}
                          </h1>
                          <p className="text-muted-foreground">
                            {language === 'en' 
                              ? 'All core modules are ready for your presentation'
                              : 'Todos los módulos centrales están listos para tu presentación'
                            }
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 justify-center">
                        <button 
                          onClick={() => handleNavigate('investor-presentation')}
                          className="bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90 px-8 py-3 rounded-lg text-white font-medium transition-all"
                        >
                          🎯 {language === 'en' ? 'Launch Investor Demo' : 'Lanzar Demo Inversores'}
                        </button>
                        <button 
                          onClick={() => handleNavigate('module-status-check')}
                          className="bg-secondary hover:bg-accent px-6 py-2 rounded-lg text-secondary-foreground transition-colors"
                        >
                          🔍 {language === 'en' ? 'System Check' : 'Verificar Sistema'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageTransition>
          )}
        </div>

        {/* Simplified UI Elements - only essential components */}
        {!['landing', 'company', 'contact', 'demo', 'sitemap'].includes(currentView) && (
          <Suspense fallback={null}>
            <FloatingActionButton 
              language={language}
              onNavigate={handleNavigate}
            />
          </Suspense>
        )}
        </AnimatePresence>
        
        {/* Toast notifications */}
        <Toaster />
        </div>
      </CoachingOverlayProvider>
    </ErrorBoundary>
  );
}