import { useState } from 'react';

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

interface ScenarioUniverse {
  id: string;
  label: string;
  probability: number;
  roiDelta: number;
  triggers: string[];
  mode: 'baseline' | 'expansion' | 'contraction' | 'shock';
}

export default function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [currentMode, setCurrentMode] = useState<'founder' | 'trabajo' | 'accounting' | 'strategy'>('founder');
  const [currentView, setCurrentView] = useState<'dashboard' | 'assessment' | 'diagnostic' | 'culture' | 'buyer-guide' | 'pilot-sow' | 'roi-calculator' | 'battlecard' | 'frameworks' | 'roadmap' | 'industry-intel' | 'brand-archetypes' | 'landing'>('landing');
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
      { id: 'landing', labelEn: 'Marketing Home', labelEs: 'Inicio Marketing' },
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
          { id: 'landing', labelEn: 'Marketing Home', labelEs: 'Inicio Marketing' },
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

  const handleNavigateToModule = (moduleId: string) => {
    // For now, just switch to dashboard - we'll enhance this with routing later
    setCurrentView('dashboard');
  };

  const handleRequestDemo = () => {
    // For now, just switch to buyer guide - we'll enhance this with routing later
    setCurrentView('buyer-guide');
  };

  return (
    <div
      className="dark min-h-screen bg-background text-foreground"
      style={{
        fontFamily: "'Biome', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
      }}
    >
      {/* Landing Page View */}
      {currentView === 'landing' && (
        <div className="min-h-screen">
          {/* Simple Marketing Header */}
          <header className="h-20 px-6 lg:px-20 flex items-center bg-slate-900 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-white">OVERWATCH</span>
            </div>
            
            <div className="flex-1"></div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {language === 'en' ? 'Launch Platform' : 'Abrir Plataforma'}
              </button>
              
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
                className="bg-slate-800 border border-slate-600 text-white px-3 py-1 rounded text-sm"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
          </header>
          
          <LandingPage
            language={language}
            onNavigateToModule={handleNavigateToModule}
            onRequestDemo={handleRequestDemo}
          />
        </div>
      )}

      {/* Platform Views */}
      {currentView !== 'landing' && (
        <div className="dark min-h-screen bg-background flex flex-col">
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
      )}
    </div>
  );
}