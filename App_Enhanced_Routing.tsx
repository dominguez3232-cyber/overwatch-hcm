import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Your existing platform components
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

// Marketing components
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

// Marketing Header Component
function MarketingHeader({ language, onLanguageChange }: {
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { id: 'hcm', labelEn: 'HCM', labelEs: 'HCM', path: '/hcm' },
    { id: 'erp', labelEn: 'ERP', labelEs: 'ERP', path: '/erp' },
    { id: 'epm', labelEn: 'EPM', labelEs: 'EPM', path: '/epm' },
    { id: 'crm', labelEn: 'CRM', labelEs: 'CRM', path: '/crm' },
    { id: 'resources', labelEn: 'Resources', labelEs: 'Recursos', path: '/resources' },
    { id: 'company', labelEn: 'Company', labelEs: 'Empresa', path: '/company' },
    { id: 'contact', labelEn: 'Contact', labelEs: 'Contacto', path: '/contact' }
  ];

  return (
    <header className="h-20 px-6 lg:px-20 flex items-center bg-slate-900 border-b border-slate-700">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate('/')}
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
              onClick={() => navigate(item.path)}
              className={`text-sm font-medium transition-colors hover:text-green-400 ${
                location.pathname === item.path ? 'text-green-400' : 'text-gray-300'
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
            onClick={() => navigate('/demo')}
            className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
          >
            {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
          </button>
          <button 
            onClick={() => navigate('/platform')}
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

// Your Full Platform Component
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

  // Your exact ROI data
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

  const handleNavigateToModule = (moduleId: string) => {
    navigate(`/${moduleId}`);
  };

  const handleRequestDemo = () => {
    navigate('/demo');
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
            />
            <LandingPage
              language={language}
              onNavigateToModule={handleNavigateToModule}
              onRequestDemo={handleRequestDemo}
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
            />
            <ModulePage
              moduleId="hcm"
              language={language}
              onBack={() => navigate('/')}
              onRequestDemo={() => navigate('/demo')}
              onStartTrial={() => navigate('/platform')}
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
            />
            <ModulePage
              moduleId="erp"
              language={language}
              onBack={() => navigate('/')}
              onRequestDemo={() => navigate('/demo')}
              onStartTrial={() => navigate('/platform')}
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
            />
            <ModulePage
              moduleId="epm"
              language={language}
              onBack={() => navigate('/')}
              onRequestDemo={() => navigate('/demo')}
              onStartTrial={() => navigate('/platform')}
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
            />
            <ModulePage
              moduleId="crm"
              language={language}
              onBack={() => navigate('/')}
              onRequestDemo={() => navigate('/demo')}
              onStartTrial={() => navigate('/platform')}
            />
          </>
        } 
      />

      {/* Content pages */}
      <Route path="/company" element={<CompanyPage language={language} />} />
      <Route path="/resources" element={<ResourcesPage language={language} />} />
      <Route path="/contact" element={<ContactPage language={language} />} />
      <Route path="/demo" element={<DemoPage language={language} />} />
    </Routes>
  );
}

// Content page components
function CompanyPage({ language }: { language: 'en' | 'es' }) {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <MarketingHeader language={language} onLanguageChange={() => {}} />
      
      <div className="px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            {language === 'en' ? 'About OVERWATCH' : 'Acerca de OVERWATCH'}
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              {language === 'en' 
                ? 'The world\'s first Advisory-Grade HRIS that transforms HR from cost center to command center for founder-led companies.'
                : 'El primer HRIS de Grado Asesor del mundo que transforma RH de centro de costos a centro de comando para empresas lideradas por fundadores.'
              }
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-400">
                  {language === 'en' ? 'Our Mission' : 'Nuestra Misión'}
                </h2>
                <p className="text-gray-300">
                  {language === 'en'
                    ? 'We combine HR, Finance, and cultural intelligence into a unified system with bilingual capabilities targeting the Latino market and cross-border operations.'
                    : 'Combinamos RH, Finanzas e inteligencia cultural en un sistema unificado con capacidades bilingües dirigidas al mercado Latino y operaciones transfronterizas.'
                  }
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  {language === 'en' ? 'Our Approach' : 'Nuestro Enfoque'}
                </h2>
                <p className="text-gray-300">
                  {language === 'en'
                    ? 'Using our "Force Multiplier" philosophy where culture becomes the "queen piece" that amplifies all other business functions.'
                    : 'Usando nuestra filosofía de "Multiplicador de Fuerza" donde la cultura se convierte en la "pieza reina" que amplifica todas las demás funciones empresariales.'
                  }
                </p>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {language === 'en' ? 'Key Features' : 'Características Clave'}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? '12-Layer Diagnostic' : 'Diagnóstico de 12 Capas'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' 
                      ? 'Comprehensive strategic framework mapping company lifecycle stages'
                      : 'Marco estratégico integral que mapea las etapas del ciclo de vida empresarial'
                    }
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🌎</span>
                  </div>
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Bilingual AI' : 'IA Bilingüe'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' 
                      ? 'English/Spanish capabilities for Latino market reach'
                      : 'Capacidades Inglés/Español para alcance del mercado Latino'
                    }
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold mb-2">
                    {language === 'en' ? 'Force Multiplier' : 'Multiplicador de Fuerza'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' 
                      ? 'Culture amplifies all business functions'
                      : 'La cultura amplifica todas las funciones empresariales'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/platform')}
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {language === 'en' ? 'Try Platform' : 'Probar Plataforma'}
            </button>
            <button 
              onClick={() => navigate('/demo')}
              className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesPage({ language }: { language: 'en' | 'es' }) {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <MarketingHeader language={language} onLanguageChange={() => {}} />
      
      <div className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center">
            {language === 'en' ? 'Resources' : 'Recursos'}
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-16">
            {language === 'en' 
              ? 'Strategic insights and tools for founder-led companies'
              : 'Insights estratégicos y herramientas para empresas lideradas por fundadores'
            }
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Strategic Frameworks */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {language === 'en' ? 'Strategic Frameworks' : 'Marcos Estratégicos'}
              </h3>
              <p className="text-gray-400 mb-4">
                {language === 'en' 
                  ? 'Access our library of proven strategic frameworks for business growth'
                  : 'Accede a nuestra biblioteca de marcos estratégicos probados para el crecimiento empresarial'
                }
              </p>
              <button 
                onClick={() => navigate('/platform')}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                {language === 'en' ? 'Explore Frameworks →' : 'Explorar Marcos →'}
              </button>
            </div>
            
            {/* ROI Calculator */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {language === 'en' ? 'ROI Calculator' : 'Calculadora ROI'}
              </h3>
              <p className="text-gray-400 mb-4">
                {language === 'en' 
                  ? 'Calculate your potential ROI with our advanced modeling tools'
                  : 'Calcula tu ROI potencial con nuestras herramientas avanzadas de modelado'
                }
              </p>
              <button 
                onClick={() => navigate('/platform')}
                className="text-green-400 hover:text-green-300 font-medium"
              >
                {language === 'en' ? 'Calculate ROI →' : 'Calcular ROI →'}
              </button>
            </div>
            
            {/* Industry Intelligence */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                {language === 'en' ? 'Industry Intelligence' : 'Inteligencia de Industria'}
              </h3>
              <p className="text-gray-400 mb-4">
                {language === 'en' 
                  ? 'Stay ahead with industry-specific insights and benchmarks'
                  : 'Mantente adelante con insights específicos de la industria y benchmarks'
                }
              </p>
              <button 
                onClick={() => navigate('/platform')}
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                {language === 'en' ? 'View Intelligence →' : 'Ver Inteligencia →'}
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">
              {language === 'en' ? 'Ready to Transform Your HR?' : '¿Listo para Transformar tu RH?'}
            </h2>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => navigate('/platform')}
                className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                {language === 'en' ? 'Launch Platform' : 'Abrir Plataforma'}
              </button>
              <button 
                onClick={() => navigate('/demo')}
                className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage({ language }: { language: 'en' | 'es' }) {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <MarketingHeader language={language} onLanguageChange={() => {}} />
      
      <div className="px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center">
            {language === 'en' ? 'Contact Us' : 'Contáctanos'}
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-16">
            {language === 'en' 
              ? 'Ready to transform your HR into a strategic command center?'
              : '¿Listo para transformar tu RH en un centro de comando estratégico?'
            }
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {language === 'en' ? 'Get in Touch' : 'Ponte en Contacto'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      {language === 'en' ? 'Email' : 'Correo'}
                    </h3>
                    <p className="text-gray-400">contact@overwatch-hris.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      {language === 'en' ? 'Schedule a Demo' : 'Agendar Demo'}
                    </h3>
                    <p className="text-gray-400 mb-2">
                      {language === 'en' 
                        ? 'See OVERWATCH in action with a personalized demo'
                        : 'Ve OVERWATCH en acción con un demo personalizado'
                      }
                    </p>
                    <button 
                      onClick={() => navigate('/demo')}
                      className="text-green-400 hover:text-green-300 font-medium"
                    >
                      {language === 'en' ? 'Book Demo →' : 'Reservar Demo →'}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">
                      {language === 'en' ? 'Try Platform' : 'Probar Plataforma'}
                    </h3>
                    <p className="text-gray-400 mb-2">
                      {language === 'en' 
                        ? 'Experience the full platform immediately'
                        : 'Experimenta la plataforma completa inmediatamente'
                      }
                    </p>
                    <button 
                      onClick={() => navigate('/platform')}
                      className="text-purple-400 hover:text-purple-300 font-medium"
                    >
                      {language === 'en' ? 'Launch Platform →' : 'Abrir Plataforma →'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">
                {language === 'en' ? 'Quick Contact' : 'Contacto Rápido'}
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">
                    {language === 'en' ? 'Name' : 'Nombre'}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder={language === 'en' ? 'Your name' : 'Tu nombre'}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">
                    {language === 'en' ? 'Email' : 'Correo'}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder={language === 'en' ? 'your@email.com' : 'tu@correo.com'}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">
                    {language === 'en' ? 'Company' : 'Empresa'}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder={language === 'en' ? 'Your company' : 'Tu empresa'}
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">
                    {language === 'en' ? 'Message' : 'Mensaje'}
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-green-500"
                    placeholder={language === 'en' ? 'Tell us about your needs...' : 'Cuéntanos sobre tus necesidades...'}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-medium transition-colors"
                >
                  {language === 'en' ? 'Send Message' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoPage({ language }: { language: 'en' | 'es' }) {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <MarketingHeader language={language} onLanguageChange={() => {}} />
      
      <div className="px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            {language === 'en' 
              ? 'See how OVERWATCH transforms HR from cost center to command center'
              : 'Ve cómo OVERWATCH transforma RH de centro de costos a centro de comando'
            }
          </p>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-8">
              {language === 'en' ? 'Choose Your Demo Experience' : 'Elige tu Experiencia de Demo'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-600 rounded-lg p-6 hover:border-green-500 transition-colors">
                <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {language === 'en' ? 'Try Platform Now' : 'Probar Plataforma Ahora'}
                </h3>
                <p className="text-gray-400 mb-4">
                  {language === 'en' 
                    ? 'Get immediate access to the full OVERWATCH platform with sample data'
                    : 'Obtén acceso inmediato a la plataforma completa OVERWATCH con datos de muestra'
                  }
                </p>
                <button 
                  onClick={() => navigate('/platform')}
                  className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-medium transition-colors"
                >
                  {language === 'en' ? 'Launch Platform' : 'Abrir Plataforma'}
                </button>
              </div>
              
              <div className="border border-slate-600 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {language === 'en' ? 'Personalized Demo' : 'Demo Personalizado'}
                </h3>
                <p className="text-gray-400 mb-4">
                  {language === 'en' 
                    ? 'Schedule a 30-minute guided demo tailored to your company\'s needs'
                    : 'Agenda un demo guiado de 30 minutos adaptado a las necesidades de tu empresa'
                  }
                </p>
                <button className="w-full border border-blue-500 hover:bg-blue-600 py-3 rounded-lg font-medium transition-colors">
                  {language === 'en' ? 'Schedule Demo' : 'Agendar Demo'}
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-bold mb-3 text-green-400">
                {language === 'en' ? 'What You\'ll See' : 'Lo que Verás'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• {language === 'en' ? '12-Layer Diagnostic Cockpit' : 'Cockpit Diagnóstico de 12 Capas'}</li>
                <li>• {language === 'en' ? 'ROI Scenario Modeling' : 'Modelado de Escenarios ROI'}</li>
                <li>• {language === 'en' ? 'Culture Force Multiplier' : 'Multiplicador de Fuerza Cultural'}</li>
                <li>• {language === 'en' ? 'Strategic Frameworks' : 'Marcos Estratégicos'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-blue-400">
                {language === 'en' ? 'Who Should Attend' : 'Quién Debe Asistir'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• {language === 'en' ? 'Founders & CEOs' : 'Fundadores y CEOs'}</li>
                <li>• {language === 'en' ? 'HR Leaders' : 'Líderes de RH'}</li>
                <li>• {language === 'en' ? 'Finance Leaders' : 'Líderes de Finanzas'}</li>
                <li>• {language === 'en' ? 'Operations Leaders' : 'Líderes de Operaciones'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-purple-400">
                {language === 'en' ? 'Demo Duration' : 'Duración del Demo'}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• {language === 'en' ? 'Platform Tour: 15 min' : 'Tour de Plataforma: 15 min'}</li>
                <li>• {language === 'en' ? 'Your Use Case: 10 min' : 'Tu Caso de Uso: 10 min'}</li>
                <li>• {language === 'en' ? 'Q&A: 5 min' : 'Preguntas: 5 min'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App with Router
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