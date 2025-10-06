import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';

// Core providers
import { CoachingOverlayProvider } from './components/CoachingOverlayProvider';
import { coachingOverlayLibrary } from './components/CoachingOverlaySeed';
import { useCoachingAnalytics } from './components/CoachingAnalyticsDashboard';

// Page imports
import LandingPage from './pages/LandingPage';
import DemoPage from './pages/DemoPage';
import PublicLandingPage from './components/PublicLandingPage';
import PersonaLandingPage from './components/PersonaLandingPage';
import EnhancedLandingPage from './components/EnhancedLandingPage';
import { Dashboard } from './components/Dashboard';
import SequenceBuilder from './components/SequenceBuilder';
import SequenceLibrary from './components/SequenceLibrary';
import SequencePlayer from './components/SequencePlayer';
import { Sitemap } from './components/SitemapExpanded';

// UI Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { LoadingState } from './components/LoadingState';
import { FloatingActionButton } from './components/FloatingActionButton';
import { StatusIndicator } from './components/StatusIndicator';
import { OverlayControls } from './components/CoachingOverlayProvider';

/**
 * React Router Version of OVERWATCH³ App
 * 
 * This version uses React Router for URL-based navigation instead of state-based routing.
 * 
 * Routes:
 * / - Landing page
 * /platform - Platform access (persona selection)
 * /dashboard - Main dashboard
 * /demo - Demo request/player
 * /demos - Sequence library
 * /build - Sequence builder
 * /features - Enhanced landing page
 * /sitemap - Site navigation
 * /about - Company info
 * /contact - Contact page
 */
export default function AppReactRouter() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [currentMode, setCurrentMode] = useState<'founder' | 'trabajo' | 'accounting' | 'strategy'>('founder');
  const [isLoading, setIsLoading] = useState(false);

  const analytics = useCoachingAnalytics(language);

  // Router-compatible navigation handler
  const createNavigateHandler = (navigate: (path: string) => void) => {
    return (view: string) => {
      const routeMap: { [key: string]: string } = {
        'landing': '/',
        'persona': '/platform',
        'dashboard': '/dashboard',
        'demo': '/demo',
        'sequence-library': '/demos',
        'sequence-builder': '/build',
        'sequence-player': '/play',
        'enhanced-landing': '/features',
        'sitemap': '/sitemap',
        'company': '/about',
        'contact': '/contact'
      };
      
      const routePath = routeMap[view] || `/${view}`;
      navigate(routePath);
    };
  };

  // Header component for marketing pages
  const MarketingHeader = ({ navigate }: { navigate: (path: string) => void }) => (
    <header className="h-20 px-6 lg:px-20 flex items-center bg-background border-b border-border">
      <div className="flex items-center gap-3">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/platform')}
          className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
        >
          <span className="text-primary-foreground font-bold text-lg">⚡</span>
        </motion.button>
        <button 
          onClick={() => navigate('/')}
          className="hover:opacity-80 transition-opacity"
        >
          <span className="text-xl font-bold text-foreground hidden lg:block">OVERWATCH³</span>
        </button>
      </div>
      
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/features')}
          className="text-foreground hover:bg-secondary px-3 py-1 rounded transition-colors text-sm"
        >
          Features
        </button>
        <button 
          onClick={() => navigate('/sitemap')}
          className="text-foreground hover:bg-secondary px-3 py-1 rounded transition-colors text-sm"
        >
          Sitemap
        </button>
        <button 
          onClick={() => navigate('/demo')}
          className="text-foreground hover:bg-secondary px-4 py-2 rounded-lg transition-colors border border-border"
        >
          {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
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

  if (isLoading) {
    return (
      <LoadingState 
        language={language}
        message={language === 'en' ? 'Loading module...' : 'Cargando módulo...'}
      />
    );
  }

  return (
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
        <Router>
          <Routes>
            {/* Main Landing Page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Platform Routes */}
            <Route 
              path="/platform" 
              element={
                <div className="min-h-screen">
                  <EnhancedHeader 
                    language={language}
                    currentView="persona"
                    currentMode={currentMode}
                    onLanguageChange={setLanguage}
                    onNavigate={() => {}} // Will be handled by router
                    onModeChange={setCurrentMode}
                    showBreadcrumbs={false}
                  />
                  <PersonaLandingPage 
                    language={language}
                    currentMode={currentMode}
                    onNavigateToModule={(moduleId) => window.location.href = `/dashboard?module=${moduleId}`}
                    onLaunchPlatform={() => window.location.href = '/dashboard'}
                  />
                </div>
              } 
            />
            
            {/* Dashboard */}
            <Route 
              path="/dashboard" 
              element={
                <Dashboard 
                  language={language}
                  onNavigate={() => {}} // Router handles navigation
                  initialDomain="finance"
                />
              } 
            />
            
            {/* Demo Routes */}
            <Route 
              path="/demo" 
              element={<DemoPage />} 
            />
            
            {/* Sequence Management */}
            <Route 
              path="/demos" 
              element={
                <SequenceLibrary 
                  language={language}
                  onNavigate={() => {}}
                  mode="standalone"
                />
              } 
            />
            
            <Route 
              path="/build" 
              element={
                <SequenceBuilder 
                  language={language}
                  onNavigate={() => {}}
                />
              } 
            />
            
            <Route 
              path="/play" 
              element={
                <SequencePlayer 
                  language={language}
                  onBack={() => window.location.href = '/demos'}
                />
              } 
            />
            
            {/* Marketing Pages */}
            <Route 
              path="/features" 
              element={
                <div className="min-h-screen">
                  <MarketingHeader navigate={(path) => window.location.href = path} />
                  <EnhancedLandingPage
                    language={language}
                    onNavigateToSuite={(moduleId) => window.location.href = `/dashboard?module=${moduleId}`}
                    onNavigateToPlatform={() => window.location.href = '/platform'}
                    onRequestDemo={() => window.location.href = '/demo'}
                    onNavigateToSecurity={() => window.location.href = '/privacy-security-compliance'}
                  />
                </div>
              } 
            />
            
            <Route 
              path="/sitemap" 
              element={
                <div className="min-h-screen">
                  <MarketingHeader navigate={(path) => window.location.href = path} />
                  <Sitemap 
                    language={language}
                    currentView="sitemap"
                    onNavigate={() => {}}
                  />
                </div>
              } 
            />
            
            {/* Simple Content Pages */}
            <Route 
              path="/about" 
              element={
                <div className="min-h-screen bg-background text-foreground">
                  <MarketingHeader navigate={(path) => window.location.href = path} />
                  <div className="px-6 lg:px-20 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-4xl lg:text-6xl font-bold mb-8">
                        {language === 'en' ? 'About OVERWATCH³' : 'Acerca de OVERWATCH³'}
                      </h1>
                      <p className="text-xl text-muted-foreground mb-8">
                        {language === 'en' 
                          ? 'The world\'s first Advisory-Grade HRIS that transforms HR from cost center to command center.'
                          : 'El primer HRIS de Grado Asesor del mundo que transforma RH de centro de costos a centro de comando.'
                        }
                      </p>
                      <div className="flex gap-4 justify-center">
                        <button 
                          onClick={() => window.location.href = '/platform'}
                          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                          {language === 'en' ? 'Try Platform' : 'Probar Plataforma'}
                        </button>
                        <button 
                          onClick={() => window.location.href = '/demo'}
                          className="border border-border hover:bg-secondary px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                          {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              } 
            />
            
            <Route 
              path="/contact" 
              element={
                <div className="min-h-screen bg-background text-foreground">
                  <MarketingHeader navigate={(path) => window.location.href = path} />
                  <div className="px-6 lg:px-20 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-4xl lg:text-6xl font-bold mb-8">
                        {language === 'en' ? 'Contact Us' : 'Contáctanos'}
                      </h1>
                      <p className="text-xl text-muted-foreground mb-16">
                        {language === 'en' 
                          ? 'Ready to transform your HR into a strategic command center?'
                          : '¿Listo para transformar tu RH en un centro de comando estratégico?'
                        }
                      </p>
                      <div className="flex gap-4 justify-center">
                        <button 
                          onClick={() => window.location.href = '/platform'}
                          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                          {language === 'en' ? 'Launch Platform' : 'Abrir Plataforma'}
                        </button>
                        <button 
                          onClick={() => window.location.href = '/demo'}
                          className="border border-border hover:bg-secondary px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                          {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              } 
            />
            
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          {/* Global UI Elements */}
          <FloatingActionButton 
            language={language}
            onNavigate={() => {}}
          />
          <OverlayControls />
        </Router>
      </div>
    </CoachingOverlayProvider>
  );
}