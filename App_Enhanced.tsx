import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Your existing sophisticated platform components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SuiteStack } from './components/SuiteStack';
import { AdvisoryEngines } from './components/AdvisoryEngines';
import { FinanceLayer } from './components/FinanceLayer';
import { CompetitiveEdge } from './components/CompetitiveEdge';
import { FilterBar } from './components/FilterBar';
import { ROIGrid } from './components/ROIGrid';
import { InsightsOverlay } from './components/InsightsOverlay';
import { ScenarioEngine } from './components/ScenarioEngine';
import { UniverseTree } from './components/UniverseTree';
import { StrategicAssessment } from './components/StrategicAssessment';
import { StrategicDiagnosticCockpit } from './components/StrategicDiagnosticCockpit';
import { CultureForceMultiplier } from './components/CultureForceMultiplier';
import { BuyerGuide } from './components/BuyerGuide';
import { PilotSOW } from './components/PilotSOW';
import { ROICalculator } from './components/ROICalculator';
import { CompetitiveBattlecard } from './components/CompetitiveBattlecard';
import { StrategicFrameworkLibrary } from './components/StrategicFrameworkLibrary';
import { ImplementationRoadmapGenerator } from './components/ImplementationRoadmapGenerator';
import { IndustryIntelligenceHub } from './components/IndustryIntelligenceHub';
import { BrandArchetypesModule } from './components/BrandArchetypesModule';
import { Footer } from './components/Footer';

// Marketing site components
import { LandingPage } from './components/LandingPage';
import { ModulePage } from './components/ModulePage';

interface ScenarioUniverse {
  id: string;
  label: string;
  probability: number;
  roiDelta: number;
  triggers: string[];
  mode: 'baseline' | 'expansion' | 'contraction' | 'shock';
}

// Marketing Header Component (different from platform header)
function MarketingHeader({ language, onLanguageChange, onNavigate, currentRoute }: {
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
  onNavigate: (route: string) => void;
  currentRoute: string;
}) {
  const navigationItems = [
    { id: 'hcm', labelEn: 'HCM', labelEs: 'HCM' },
    { id: 'erp', labelEn: 'ERP', labelEs: 'ERP' },
    { id: 'epm', labelEn: 'EPM', labelEs: 'EPM' },
    { id: 'crm', labelEn: 'CRM', labelEs: 'CRM' },
    { id: 'resources', labelEn: 'Resources', labelEs: 'Recursos' },
    { id: 'company', labelEn: 'Company', labelEs: 'Empresa' },
    { id: 'contact', labelEn: 'Contact', labelEs: 'Contacto' }
  ];

  return (
    <header className="h-20 px-6 lg:px-20 flex items-center bg-slate-900 border-b border-slate-700">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onNavigate('/')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <span className="text-xl font-bold text-white hidden lg:block">OVERWATCH</span>
        </button>
      </div>
      
      {/* Navigation - Desktop */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <div className="flex items-center gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(`/${item.id}`)}
              className={`text-sm font-medium transition-colors hover:text-green-400 ${
                currentRoute === `/${item.id}` ? 'text-green-400' : 'text-gray-300'
              }`}
            >
              {language === 'en' ? item.labelEn : item.labelEs}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={() => onNavigate('/demo')}
            className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
          >
            {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
          </button>
          <button 
            onClick={() => onNavigate('/platform')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {language === 'en' ? 'Launch Platform' : 'Abrir Plataforma'}
          </button>
        </div>
        
        {/* Language Selector */}
        <select 
          value={language} 
          onChange={(e) => onLanguageChange(e.target.value as 'en' | 'es')}
          className="bg-slate-800 border border-slate-600 text-white px-3 py-1 rounded text-sm"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </header>
  );
}

// Your Full Platform Component (exactly as you have it now)
function PlatformApp() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [currentMode, setCurrentMode] = useState<'founder' | 'trabajo' | 'accounting' | 'strategy'>('founder');
  const [currentView, setCurrentView] = useState<'dashboard' | 'assessment' | 'diagnostic' | 'culture' | 'buyer-guide' | 'pilot-sow' | 'roi-calculator' | 'battlecard' | 'frameworks' | 'roadmap' | 'industry-intel' | 'brand-archetypes'>('dashboard');
  const [filters, setFilters] = useState({
    entity: 'dallas',
    scenario: 'pilot',
    currency: 'USD'
  });
  const [scenarios, setScenarios] = useState<ScenarioUniverse[]>([]);

  // Mock ROI data (exactly as you have it)
  const roiData = {
    revenue: {
      Q1: 2450000,
      Q2: 2680000,
      Q3: 2890000,  
      Q4: 3120000,
      FY: 11140000
    },
    grossMargin: {
      Q1: 1470000,
      Q2: 1608000,
      Q3: 1734000,
      Q4: 1872000,
      FY: 6684000
    },
    operatingExpenses: {
      Q1: 980000,
      Q2: 1072000,
      Q3: 1156000,
      Q4: 1248000,
      FY: 4456000
    },
    netIncome: {
      Q1: 490000,
      Q2: 536000,
      Q3: 578000,
      Q4: 624000,
      FY: 2228000
    },
    roi: {
      Q1: 20.0,
      Q2: 20.0,
      Q3: 20.0,
      Q4: 20.0,
      FY: 20.0
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleScenarioChange = (newScenarios: ScenarioUniverse[]) => {
    setScenarios(newScenarios);
  };

  const handleModeChange = (mode: string) => {
    setCurrentMode(mode as 'founder' | 'trabajo' | 'accounting' | 'strategy');
    
    // Auto-switch language for Trabajo mode
    if (mode === 'trabajo') {
      setLanguage('es');
    } else if (language === 'es' && mode !== 'trabajo') {
      setLanguage('en');
    }
  };

  const getViewsForMode = () => {
    const baseViews = [
      { id: 'dashboard', labelEn: 'ROI Dashboard', labelEs: 'Panel ROI' },
      { id: 'assessment', labelEn: 'HR Assessment', labelEs: 'Evaluación RH' }
    ];

    const salesViews = [
      { id: 'buyer-guide', labelEn: 'Buyer Guide', labelEs: 'Guía del Comprador' },
      { id: 'roi-calculator', labelEn: 'ROI Calculator', labelEs: 'Calculadora ROI' },
      { id: 'pilot-sow', labelEn: 'Pilot SOW', labelEs: 'SOW Piloto' },
      { id: 'battlecard', labelEn: 'Battlecard', labelEs: 'Tarjeta de Batalla' }
    ];

    const strategicViews = [
      { id: 'frameworks', labelEn: 'Strategic Frameworks', labelEs: 'Marcos Estratégicos' },
      { id: 'roadmap', labelEn: 'Implementation Roadmap', labelEs: 'Hoja de Ruta' },
      { id: 'industry-intel', labelEn: 'Industry Intelligence', labelEs: 'Inteligencia de Industria' },
      { id: 'brand-archetypes', labelEn: 'Brand Archetypes', labelEs: 'Arquetipos de Marca' }
    ];

    switch (currentMode) {
      case 'founder':
        return [
          ...baseViews,
          { id: 'diagnostic', labelEn: 'Strategic Diagnostic', labelEs: 'Diagnóstico Estratégico' },
          { id: 'culture', labelEn: 'Culture Multiplier', labelEs: 'Multiplicador Cultural' },
          ...strategicViews,
          ...salesViews
        ];
      case 'trabajo':
        return [
          ...baseViews,
          { id: 'culture', labelEn: 'Culture Multiplier', labelEs: 'Multiplicador Cultural' },
          { id: 'frameworks', labelEn: 'Strategic Frameworks', labelEs: 'Marcos Estratégicos' },
          { id: 'brand-archetypes', labelEn: 'Brand Archetypes', labelEs: 'Arquetipos de Marca' },
          { id: 'buyer-guide', labelEn: 'Buyer Guide', labelEs: 'Guía del Comprador' },
          { id: 'roi-calculator', labelEn: 'ROI Calculator', labelEs: 'Calculadora ROI' }
        ];
      case 'accounting':
        return [
          { id: 'dashboard', labelEn: 'Financial ROI', labelEs: 'ROI Financiero' },
          { id: 'assessment', labelEn: 'Cost Analysis', labelEs: 'Análisis de Costos' },
          { id: 'roi-calculator', labelEn: 'ROI Calculator', labelEs: 'Calculadora ROI' },
          { id: 'roadmap', labelEn: 'Implementation Roadmap', labelEs: 'Hoja de Ruta' },
          { id: 'pilot-sow', labelEn: 'Pilot SOW', labelEs: 'SOW Piloto' }
        ];
      case 'strategy':
        return [
          ...baseViews,
          { id: 'diagnostic', labelEn: 'Strategic Diagnostic', labelEs: 'Diagnóstico Estratégico' },
          { id: 'culture', labelEn: 'Force Multiplier', labelEs: 'Multiplicador de Fuerza' },
          ...strategicViews,
          ...salesViews
        ];
      default:
        return baseViews;
    }
  };

  return (
    <div className="dark min-h-screen bg-background flex flex-col">
      {/* Platform Navigation */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-800 border-b border-slate-700">
        <button 
          onClick={() => navigate('/')}
          className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
        >
          ← {language === 'en' ? 'Back to Marketing' : 'Volver al Marketing'}
        </button>
        <div className="text-white font-medium">
          {language === 'en' ? 'OVERWATCH Platform' : 'Plataforma OVERWATCH'}
        </div>
        <div className="w-32"></div>
      </div>

      {/* Your existing platform components exactly as they are */}
      <Header 
        language={language} 
        onLanguageChange={setLanguage}
      />
      
      <Hero 
        language={language}
        currentMode={currentMode}
        onModeChange={handleModeChange}
      />
      
      <SuiteStack 
        language={language}
        currentMode={currentMode}
      />
      
      <AdvisoryEngines
        language={language}
        currentMode={currentMode}
      />
      
      <FinanceLayer
        language={language}
        currentMode={currentMode}
      />
      
      <CompetitiveEdge
        language={language}
        currentMode={currentMode}
      />
      
      {/* Navigation Tabs - Context Aware */}
      <div className="px-20 py-6 border-b border-border">
        <div className="flex gap-2 justify-center">
          {getViewsForMode().map((view) => (
            <button
              key={view.id}
              onClick={() => setCurrentView(view.id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentView === view.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {language === 'en' ? view.labelEn : view.labelEs}
            </button>
          ))}
        </div>
      </div>

      {/* All your existing views exactly as they are */}
      {currentView === 'dashboard' && (
        <>
          <FilterBar 
            language={language}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          
          <main className="flex-1">
            <ROIGrid 
              language={language}
              currency={filters.currency}
              data={roiData}
            />
            
            <ScenarioEngine
              language={language}
              baseROI={roiData.roi.FY}
              onScenarioChange={handleScenarioChange}
            />
            
            {scenarios.length > 0 && (
              <UniverseTree
                language={language}
                scenarios={scenarios}
              />
            )}
            
            <InsightsOverlay language={language} />
          </main>
        </>
      )}

      {currentView === 'assessment' && (
        <main className="flex-1">
          <StrategicAssessment language={language} />
        </main>
      )}

      {currentView === 'diagnostic' && (
        <main className="flex-1">
          <StrategicDiagnosticCockpit language={language} />
        </main>
      )}

      {currentView === 'culture' && (
        <main className="flex-1">
          <CultureForceMultiplier language={language} />
        </main>
      )}

      {currentView === 'buyer-guide' && (
        <main className="flex-1">
          <BuyerGuide 
            language={language} 
            role={currentMode === 'accounting' ? 'cfo' : currentMode === 'strategy' ? 'ceo' : 'ceo'} 
          />
        </main>
      )}

      {currentView === 'pilot-sow' && (
        <main className="flex-1">
          <PilotSOW 
            language={language}
            clientName="[Prospect Company]"
            industry="professional-services"
            headcount={150}
          />
        </main>
      )}

      {currentView === 'roi-calculator' && (
        <main className="flex-1">
          <ROICalculator 
            language={language}
            industry="professional-services"
          />
        </main>
      )}

      {currentView === 'battlecard' && (
        <main className="flex-1">
          <CompetitiveBattlecard 
            language={language}
            competitor="rippling"
          />
        </main>
      )}

      {currentView === 'frameworks' && (
        <main className="flex-1">
          <StrategicFrameworkLibrary language={language} />
        </main>
      )}

      {currentView === 'roadmap' && (
        <main className="flex-1">
          <ImplementationRoadmapGenerator language={language} />
        </main>
      )}

      {currentView === 'industry-intel' && (
        <main className="flex-1">
          <IndustryIntelligenceHub language={language} />
        </main>
      )}

      {currentView === 'brand-archetypes' && (
        <main className="flex-1">
          <BrandArchetypesModule 
            onBack={() => setCurrentView('dashboard')}
            language={language} 
          />
        </main>
      )}
      
      <Footer language={language} />
    </div>
  );
}

// Marketing Site Router
function MarketingSite() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <Routes>
      {/* Landing Page */}
      <Route 
        path="/" 
        element={
          <>
            <MarketingHeader 
              language={language}
              onLanguageChange={setLanguage}
              onNavigate={handleNavigate}
              currentRoute={location.pathname}
            />
            <LandingPage
              language={language}
              onNavigateToModule={handleNavigate}
              onRequestDemo={() => handleNavigate('/demo')}
            />
          </>
        } 
      />
      
      {/* Module Pages */}
      <Route 
        path="/hcm" 
        element={
          <>
            <MarketingHeader 
              language={language}
              onLanguageChange={setLanguage}
              onNavigate={handleNavigate}
              currentRoute={location.pathname}
            />
            <ModulePage
              moduleId="hcm"
              language={language}
              onBack={() => handleNavigate('/')}
              onRequestDemo={() => handleNavigate('/demo')}
              onStartTrial={() => handleNavigate('/platform')}
            />
          </>
        } 
      />
      
      <Route 
        path="/erp" 
        element={
          <>
            <MarketingHeader 
              language={language}
              onLanguageChange={setLanguage}
              onNavigate={handleNavigate}
              currentRoute={location.pathname}
            />
            <ModulePage
              moduleId="erp"
              language={language}
              onBack={() => handleNavigate('/')}
              onRequestDemo={() => handleNavigate('/demo')}
              onStartTrial={() => handleNavigate('/platform')}
            />
          </>
        } 
      />
      
      <Route 
        path="/epm" 
        element={
          <>
            <MarketingHeader 
              language={language}
              onLanguageChange={setLanguage}
              onNavigate={handleNavigate}
              currentRoute={location.pathname}
            />
            <ModulePage
              moduleId="epm"
              language={language}
              onBack={() => handleNavigate('/')}
              onRequestDemo={() => handleNavigate('/demo')}
              onStartTrial={() => handleNavigate('/platform')}
            />
          </>
        } 
      />
      
      <Route 
        path="/crm" 
        element={
          <>
            <MarketingHeader 
              language={language}
              onLanguageChange={setLanguage}
              onNavigate={handleNavigate}
              currentRoute={location.pathname}
            />
            <ModulePage
              moduleId="crm"
              language={language}
              onBack={() => handleNavigate('/')}
              onRequestDemo={() => handleNavigate('/demo')}
              onStartTrial={() => handleNavigate('/platform')}
            />
          </>
        } 
      />

      {/* Simple placeholder pages for sitemap completion */}
      <Route path="/company" element={<CompanyPlaceholder language={language} onNavigate={handleNavigate} />} />
      <Route path="/resources" element={<ResourcesPlaceholder language={language} onNavigate={handleNavigate} />} />
      <Route path="/contact" element={<ContactPlaceholder language={language} onNavigate={handleNavigate} />} />
      <Route path="/demo" element={<DemoPlaceholder language={language} onNavigate={handleNavigate} />} />
    </Routes>
  );
}

// Simple placeholder components
function CompanyPlaceholder({ language, onNavigate }: { language: 'en' | 'es'; onNavigate: (route: string) => void }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'en' ? 'About OVERWATCH' : 'Acerca de OVERWATCH'}
        </h1>
        <p className="text-gray-400 mb-8">
          {language === 'en' ? 'Company page coming soon' : 'Página de empresa próximamente'}
        </p>
        <button 
          onClick={() => onNavigate('/')}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
        </button>
      </div>
    </div>
  );
}

function ResourcesPlaceholder({ language, onNavigate }: { language: 'en' | 'es'; onNavigate: (route: string) => void }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'en' ? 'Resources' : 'Recursos'}
        </h1>
        <p className="text-gray-400 mb-8">
          {language === 'en' ? 'Resources page coming soon' : 'Página de recursos próximamente'}
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate('/platform')}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
          >
            {language === 'en' ? 'Go to Platform' : 'Ir a la Plataforma'}
          </button>
          <button 
            onClick={() => onNavigate('/')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
          >
            {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactPlaceholder({ language, onNavigate }: { language: 'en' | 'es'; onNavigate: (route: string) => void }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'en' ? 'Contact Us' : 'Contáctanos'}
        </h1>
        <p className="text-gray-400 mb-8">
          {language === 'en' ? 'Contact page coming soon' : 'Página de contacto próximamente'}
        </p>
        <button 
          onClick={() => onNavigate('/')}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
        </button>
      </div>
    </div>
  );
}

function DemoPlaceholder({ language, onNavigate }: { language: 'en' | 'es'; onNavigate: (route: string) => void }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
        </h1>
        <p className="text-gray-400 mb-8">
          {language === 'en' ? 'Demo request form coming soon' : 'Formulario de solicitud de demo próximamente'}
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => onNavigate('/platform')}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg"
          >
            {language === 'en' ? 'Try Platform Now' : 'Probar Plataforma Ahora'}
          </button>
          <button 
            onClick={() => onNavigate('/')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
          >
            {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  return (
    <div
      className="dark min-h-screen bg-background text-foreground"
      style={{
        fontFamily: "'Biome', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* Marketing Site Routes */}
          <Route path="/*" element={<MarketingSite />} />
          
          {/* Full Platform Route */}
          <Route path="/platform/*" element={<PlatformApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}