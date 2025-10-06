import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Landing/Marketing Components  
import { LandingPage } from './components/LandingPage';
import { ModulePage } from './components/ModulePage';

// Platform Components (your existing sophisticated app)
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

interface ScenarioUniverse {
  id: string;
  label: string;
  probability: number;
  roiDelta: number;
  triggers: string[];
  mode: 'baseline' | 'expansion' | 'contraction' | 'shock';
}

// Platform App Component (your existing sophisticated app)
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

  // Mock ROI data
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
      setLanguage('en'); // Switch back to English for other modes
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
      {/* Platform Header with back to marketing option */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-800 border-b border-slate-700">
        <button 
          onClick={() => navigate('/')}
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          ← {language === 'en' ? 'Back to Marketing Site' : 'Volver al Sitio de Marketing'}
        </button>
        <div className="text-white font-medium">
          {language === 'en' ? 'OVERWATCH Platform' : 'Plataforma OVERWATCH'}
        </div>
        <div className="w-32"></div> {/* Spacer for balance */}
      </div>

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

// Simple pages for marketing site
function CompanyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">About OVERWATCH</h1>
        <p className="text-gray-400 mb-8">
          Learn about our mission, leadership team, and company culture
        </p>
        <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block">
          Back to Home
        </a>
      </div>
    </div>
  );
}

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <p className="text-gray-400 mb-8">
          Blog, case studies, whitepapers, and strategic insights
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <a href="/platform" className="bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-lg block text-left">
            <h3 className="font-bold mb-2">Strategic Intelligence Platform</h3>
            <p className="text-sm text-gray-400">Access the full OVERWATCH platform</p>
          </a>
        </div>
        <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block">
          Back to Home
        </a>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-gray-400 mb-8">
          Get in touch for demos, support, or strategic consultations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Sales & Demos</h3>
            <p className="text-gray-400">sales@overwatch.com</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Customer Support</h3>
            <p className="text-gray-400">support@overwatch.com</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Strategic Advisory</h3>
            <p className="text-gray-400">advisory@overwatch.com</p>
          </div>
        </div>
        <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block">
          Back to Home
        </a>
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
          <Route 
            path="/" 
            element={
              <LandingPage
                language="en"
                onNavigateToModule={(moduleId) => window.location.href = `/${moduleId}`}
                onRequestDemo={() => window.location.href = '/demo'}
              />
            } 
          />
          
          {/* Module Landing Pages */}
          <Route 
            path="/hcm" 
            element={
              <ModulePage
                moduleId="hcm"
                language="en"
                onBack={() => window.location.href = '/'}
                onRequestDemo={() => window.location.href = '/demo'}
                onStartTrial={() => window.location.href = '/platform'}
              />
            } 
          />
          <Route 
            path="/erp" 
            element={
              <ModulePage
                moduleId="erp"
                language="en"
                onBack={() => window.location.href = '/'}
                onRequestDemo={() => window.location.href = '/demo'}
                onStartTrial={() => window.location.href = '/platform'}
              />
            } 
          />
          <Route 
            path="/epm" 
            element={
              <ModulePage
                moduleId="epm"
                language="en"
                onBack={() => window.location.href = '/'}
                onRequestDemo={() => window.location.href = '/demo'}
                onStartTrial={() => window.location.href = '/platform'}
              />
            } 
          />
          <Route 
            path="/crm" 
            element={
              <ModulePage
                moduleId="crm"
                language="en"
                onBack={() => window.location.href = '/'}
                onRequestDemo={() => window.location.href = '/demo'}
                onStartTrial={() => window.location.href = '/platform'}
              />
            } 
          />

          {/* Marketing Site Pages */}
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Platform Route - Your Full App */}
          <Route path="/platform/*" element={<PlatformApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}