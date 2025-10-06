import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Your existing components (exactly as they are)
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

// Marketing components (optional for now)
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

// Your EXACT existing platform (unchanged)
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
      {/* Optional: Add back to marketing button */}
      <div className="flex items-center justify-between px-6 py-2 bg-slate-800 border-b border-slate-700">
        <button 
          onClick={() => navigate('/')}
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          ← {language === 'en' ? 'Marketing Site' : 'Sitio de Marketing'}
        </button>
        <div className="text-white text-sm font-medium">
          {language === 'en' ? 'OVERWATCH Platform' : 'Plataforma OVERWATCH'}
        </div>
        <div className="w-32"></div> {/* Spacer */}
      </div>

      {/* Your EXACT existing platform UI */}
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

      {/* All your existing views - UNCHANGED */}
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

// Simple Marketing Landing Page
function MarketingLanding() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">O</span>
            </div>
            <h1 className="text-5xl font-bold">OVERWATCH</h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            The world's first Advisory-Grade HRIS that transforms HR from cost center to command center for founder-led companies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-bold mb-3 text-yellow-400">⚡ Bilingual AI Coach</h3>
              <p className="text-gray-300">Real-time strategic guidance in English and Spanish</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-bold mb-3 text-green-400">🛡️ Proven Frameworks</h3>
              <p className="text-gray-300">20+ years of methodologies systematized for rapid deployment</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-bold mb-3 text-blue-400">🌍 Industry Intelligence</h3>
              <p className="text-gray-300">Industry-specific insights with predictive analytics</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/platform')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Launch Platform →
            </button>
            <button 
              onClick={() => navigate('/platform')}
              className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              View Demo
            </button>
          </div>
        </div>
        
        {/* Quick Module Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'HCM', desc: 'Human Capital Management with AI coaching', color: 'from-blue-500 to-cyan-500' },
            { title: 'ERP', desc: 'Enterprise Resource Planning with ROI tracking', color: 'from-green-500 to-emerald-500' },
            { title: 'EPM', desc: 'Performance Management with predictive analytics', color: 'from-purple-500 to-violet-500' },
            { title: 'CRM', desc: 'Customer Relationship Management with sales intelligence', color: 'from-orange-500 to-red-500' }
          ].map((module, i) => (
            <button
              key={i}
              onClick={() => navigate('/platform')}
              className={`p-6 rounded-lg bg-gradient-to-br ${module.color} text-white hover:scale-105 transition-transform`}
            >
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-white/90 text-sm">{module.desc}</p>
            </button>
          ))}
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
          {/* Marketing Landing Page */}
          <Route path="/" element={<MarketingLanding />} />
          
          {/* Full Platform Route - Your existing app */}
          <Route path="/platform/*" element={<PlatformApp />} />
          
          {/* Fallback - redirect to platform for now */}
          <Route path="/*" element={<MarketingLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}