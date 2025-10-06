import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  Building, 
  ChartBar,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Award,
  DollarSign,
  BarChart3
} from 'lucide-react';
import { 
  getStrategicIntelligenceFoundation, 
  getFundingStageGuidance,
  getStrategicRecommendations 
} from './StrategicIntelligenceFoundation';

interface StrategicDiagnosticCockpitProps {
  language: 'en' | 'es';
}

interface CompanyProfile {
  lifecycle: 'startup' | 'growth' | 'scale' | 'exit';
  archetype: 'vc-backed' | 'pe-backed' | 'family-owned' | 'entrepreneur-led' | 'corporate';
  industry: 'manufacturing' | 'professional-services' | 'technology' | 'marketing-agency';
  size: string;
}

interface DiagnosticResults {
  hrMaturity: {
    admin: number;
    process: number;
    strategic: number;
  };
  riskProfile: {
    compliance: number;
    talent: number;
    cultural: number;
    financial: number;
  };
  plImpact: {
    revenue: number;
    cogs: number;
    opex: number;
    netIncome: number;
  };
  cultureMultiplier: number;
}

export function StrategicDiagnosticCockpit({ language }: StrategicDiagnosticCockpitProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [companyProfile, setCompanyProfile] = useState<Partial<CompanyProfile>>({});
  const [diagnosticResults, setDiagnosticResults] = useState<DiagnosticResults | null>(null);

  const labels = {
    en: {
      title: "Strategic Diagnostic Cockpit",
      subtitle: "Advisory-Grade Intelligence for Founder-Led Companies",
      steps: {
        profile: "Company Profile",
        maturity: "HR Maturity",
        risks: "Risk Assessment", 
        impact: "P&L Impact",
        results: "Strategic Roadmap"
      },
      lifecycle: {
        startup: "Startup (Viability)",
        growth: "Growth (Scale Operations)", 
        scale: "Scale (Optimize Efficiency)",
        exit: "Exit (Strategic Options)"
      },
      archetype: {
        'vc-backed': "VC-Backed",
        'pe-backed': "PE-Backed",
        'family-owned': "Family-Owned",
        'entrepreneur-led': "Entrepreneur-Led",
        'corporate': "Corporate"
      },
      industry: {
        manufacturing: "Manufacturing",
        'professional-services': "Professional Services",
        technology: "Technology",
        'marketing-agency': "Marketing/Agency"
      },
      next: "Continue",
      back: "Previous",
      analyze: "Generate Strategic Analysis"
    },
    es: {
      title: "Cockpit de Diagnóstico Estratégico", 
      subtitle: "Inteligencia de Nivel Asesor para Empresas Dirigidas por Fundadores",
      steps: {
        profile: "Perfil de Empresa",
        maturity: "Madurez RH",
        risks: "Evaluación de Riesgos",
        impact: "Impacto P&L", 
        results: "Hoja de Ruta Estratégica"
      },
      lifecycle: {
        startup: "Startup (Viabilidad)",
        growth: "Crecimiento (Escalar Operaciones)",
        scale: "Escala (Optimizar Eficiencia)", 
        exit: "Salida (Opciones Estratégicas)"
      },
      archetype: {
        'vc-backed': "Respaldado por VC",
        'pe-backed': "Respaldado por PE",
        'family-owned': "Familiar",
        'entrepreneur-led': "Dirigido por Emprendedor",
        'corporate': "Corporativo"
      },
      industry: {
        manufacturing: "Manufactura",
        'professional-services': "Servicios Profesionales", 
        technology: "Tecnología",
        'marketing-agency': "Marketing/Agencia"
      },
      next: "Continuar",
      back: "Anterior", 
      analyze: "Generar Análisis Estratégico"
    }
  };

  const currentLabels = labels[language];
  const totalSteps = 5;

  const calculateDiagnosticResults = (): DiagnosticResults => {
    // Mock calculation based on company profile
    // In real implementation, this would use your strategic frameworks
    
    const baseScores = {
      hrMaturity: {
        admin: 65,
        process: 45, 
        strategic: 25
      },
      riskProfile: {
        compliance: 70,
        talent: 60,
        cultural: 40,
        financial: 55
      },
      plImpact: {
        revenue: 15, // % potential impact
        cogs: 8,
        opex: 12,
        netIncome: 25
      },
      cultureMultiplier: 1.23 // f(x) → F(x)
    };

    // Adjust based on lifecycle and archetype
    if (companyProfile.lifecycle === 'startup') {
      baseScores.hrMaturity.strategic = 15;
      baseScores.riskProfile.compliance = 85;
    } else if (companyProfile.lifecycle === 'scale') {
      baseScores.hrMaturity.strategic = 75;
      baseScores.cultureMultiplier = 1.45;
    }

    if (companyProfile.archetype === 'vc-backed') {
      baseScores.plImpact.revenue = 25;
      baseScores.hrMaturity.strategic = 35;
    }

    return baseScores;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Company Profile</h3>
              <p className="text-gray-400">Define your company's strategic context</p>
            </div>

            <div className="grid gap-6">
              <div>
                <label className="text-white font-medium mb-3 block">Lifecycle Stage</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['startup', 'growth', 'scale', 'exit'] as const).map((stage) => (
                    <button
                      key={stage}
                      onClick={() => setCompanyProfile(prev => ({ ...prev, lifecycle: stage }))}
                      className={`p-4 rounded-lg border text-left transition-colors ${
                        companyProfile.lifecycle === stage
                          ? 'border-green-500 bg-green-500/10 text-green-400'
                          : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <div className="font-medium">{currentLabels.lifecycle[stage]}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-white font-medium mb-3 block">Company Archetype</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['vc-backed', 'pe-backed', 'family-owned', 'entrepreneur-led', 'corporate'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setCompanyProfile(prev => ({ ...prev, archetype: type }))}
                      className={`p-4 rounded-lg border text-left transition-colors ${
                        companyProfile.archetype === type
                          ? 'border-green-500 bg-green-500/10 text-green-400'
                          : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <div className="font-medium">{currentLabels.archetype[type]}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-white font-medium mb-3 block">Industry Focus</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['manufacturing', 'professional-services', 'technology', 'marketing-agency'] as const).map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setCompanyProfile(prev => ({ ...prev, industry }))}
                      className={`p-4 rounded-lg border text-left transition-colors ${
                        companyProfile.industry === industry
                          ? 'border-green-500 bg-green-500/10 text-green-400'
                          : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <div className="font-medium">{currentLabels.industry[industry]}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        if (!diagnosticResults) return null;
        
        return (
          <div className="space-y-6">
            <div className="text-center">
              <ChartBar className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Strategic Analysis Results</h3>
              <p className="text-gray-400">Your advisory-grade diagnostic report</p>
            </div>

            <Tabs defaultValue="maturity" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="maturity">HR Maturity</TabsTrigger>
                <TabsTrigger value="risks">Risk Profile</TabsTrigger>
                <TabsTrigger value="impact">P&L Impact</TabsTrigger>
                <TabsTrigger value="culture">Force Multiplier</TabsTrigger>
              </TabsList>

              <TabsContent value="maturity" className="space-y-4">
                <Card className="bg-gray-800/60 border-gray-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">HR Function Maturity</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Admin HR</span>
                        <span className="text-green-400 font-medium">{diagnosticResults.hrMaturity.admin}%</span>
                      </div>
                      <Progress value={diagnosticResults.hrMaturity.admin} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Process HR</span>
                        <span className="text-yellow-400 font-medium">{diagnosticResults.hrMaturity.process}%</span>
                      </div>
                      <Progress value={diagnosticResults.hrMaturity.process} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Strategic HR</span>
                        <span className="text-red-400 font-medium">{diagnosticResults.hrMaturity.strategic}%</span>
                      </div>
                      <Progress value={diagnosticResults.hrMaturity.strategic} className="h-2" />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="risks" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(diagnosticResults.riskProfile).map(([key, value]) => (
                    <Card key={key} className="bg-gray-800/60 border-gray-700 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-blue-400" />
                          <span className="text-white capitalize">{key}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {value > 70 ? (
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                          ) : value > 50 ? (
                            <AlertTriangle className="w-4 h-4 text-yellow-400" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                          <span className="text-gray-300">{value}%</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="impact" className="space-y-4">
                <Card className="bg-gray-800/60 border-gray-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">P&L Impact Potential</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(diagnosticResults.plImpact).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-green-400">+{value}%</div>
                        <div className="text-gray-400 capitalize">{key === 'netIncome' ? 'Net Income' : key}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="culture" className="space-y-4">
                <Card className="bg-gray-800/60 border-gray-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Culture as Force Multiplier</h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {diagnosticResults.cultureMultiplier}x
                    </div>
                    <div className="text-gray-400 mb-4">Current multiplier effect</div>
                    <div className="text-sm text-gray-500">
                      f(x) → F(x): From function to force multiplier
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="bg-green-600/10 border-green-600 p-6">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Strategic Recommendations</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400" />
                  <span>Focus on elevating Process HR to Strategic HR</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400" />
                  <span>Implement culture design vs. default culture</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400" />
                  <span>Prepare for {companyProfile.lifecycle === 'startup' ? 'growth' : 'next'} stage transition</span>
                </div>
              </div>
            </Card>

            {/* VC-Grade Investment Intelligence */}
            <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">
                  {language === 'en' ? 'Investment-Grade Strategic Intelligence' : 'Inteligencia Estratégica de Grado de Inversión'}
                </h4>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-green-400 mb-3">
                    {language === 'en' ? 'VC Readiness Assessment' : 'Evaluación de Preparación VC'}
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">
                        {language === 'en' ? 'HR Foundation' : 'Fundación HR'}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          diagnosticResults.hrMaturity.strategic >= 70 ? 'bg-green-400' : 
                          diagnosticResults.hrMaturity.strategic >= 50 ? 'bg-yellow-400' : 'bg-red-400'
                        }`}></div>
                        <span className={`font-medium ${
                          diagnosticResults.hrMaturity.strategic >= 70 ? 'text-green-400' : 
                          diagnosticResults.hrMaturity.strategic >= 50 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {diagnosticResults.hrMaturity.strategic >= 70 ? 'Investment Ready' : 
                           diagnosticResults.hrMaturity.strategic >= 50 ? 'Developing' : 'Foundation'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">
                        {language === 'en' ? 'Risk Profile' : 'Perfil de Riesgo'}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          diagnosticResults.riskProfile.compliance <= 30 ? 'bg-green-400' : 
                          diagnosticResults.riskProfile.compliance <= 50 ? 'bg-yellow-400' : 'bg-red-400'
                        }`}></div>
                        <span className={`font-medium ${
                          diagnosticResults.riskProfile.compliance <= 30 ? 'text-green-400' : 
                          diagnosticResults.riskProfile.compliance <= 50 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {diagnosticResults.riskProfile.compliance <= 30 ? 'Low Risk' : 
                           diagnosticResults.riskProfile.compliance <= 50 ? 'Moderate' : 'High Risk'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">
                        {language === 'en' ? 'Culture Multiplier' : 'Multiplicador Cultural'}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          diagnosticResults.cultureMultiplier >= 2.5 ? 'bg-green-400' : 
                          diagnosticResults.cultureMultiplier >= 2.0 ? 'bg-yellow-400' : 'bg-red-400'
                        }`}></div>
                        <span className={`font-medium ${
                          diagnosticResults.cultureMultiplier >= 2.5 ? 'text-green-400' : 
                          diagnosticResults.cultureMultiplier >= 2.0 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {diagnosticResults.cultureMultiplier >= 2.5 ? 'Competitive Advantage' : 
                           diagnosticResults.cultureMultiplier >= 2.0 ? 'Developing' : 'Opportunity'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-blue-400 mb-3">
                    {language === 'en' ? 'Market Positioning' : 'Posicionamiento de Mercado'}
                  </h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-start gap-2">
                      <BarChart3 className="w-3 h-3 text-green-400 mt-0.5" />
                      <span>
                        {language === 'en' 
                          ? 'HCM SaaS market: $65B opportunity by 2032'
                          : 'Mercado HCM SaaS: oportunidad $65B para 2032'
                        }
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <BarChart3 className="w-3 h-3 text-blue-400 mt-0.5" />
                      <span>
                        {language === 'en' 
                          ? 'Latino market: 65M workers underserved'
                          : 'Mercado Latino: 65M trabajadores desatendidos'
                        }
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <BarChart3 className="w-3 h-3 text-purple-400 mt-0.5" />
                      <span>
                        {language === 'en' 
                          ? 'Advisory-grade differentiation opportunity'
                          : 'Oportunidad de diferenciación de grado asesor'
                        }
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <BarChart3 className="w-3 h-3 text-yellow-400 mt-0.5" />
                      <span>
                        {language === 'en' 
                          ? 'Culture-centric competitive moat'
                          : 'Foso competitivo centrado en cultura'
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-600">
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-green-400 mt-0.5" />
                  <div className="text-xs text-gray-400">
                    <strong className="text-green-400">
                      {language === 'en' ? 'Strategic Advantage:' : 'Ventaja Estratégica:'}
                    </strong>
                    {' '}
                    {language === 'en' 
                      ? 'OVERWATCH³ combines advisory-grade intelligence with bilingual capabilities, targeting the fastest-growing workforce segment while delivering McKinsey-style strategic insights that traditional HRIS platforms cannot match.'
                      : 'OVERWATCH³ combina inteligencia de grado asesor con capacidades bilingües, dirigiéndose al segmento de fuerza laboral de mayor crecimiento mientras entrega insights estratégicos estilo McKinsey que las plataformas HRIS tradicionales no pueden igualar.'
                    }
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Assessment in Progress</h3>
            <p className="text-gray-400">Step {currentStep} of {totalSteps}</p>
          </div>
        );
    }
  };

  const canContinue = () => {
    if (currentStep === 0) {
      return companyProfile.lifecycle && companyProfile.archetype && companyProfile.industry;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 3) {
      // Generate diagnostic results
      setDiagnosticResults(calculateDiagnosticResults());
    }
    setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1));
  };

  return (
    <div className="px-20 py-6">
      <Card className="bg-card border-border p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{currentLabels.title}</h1>
          <p className="text-gray-400">{currentLabels.subtitle}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Step {currentStep + 1} of {totalSteps}</span>
            <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
          </div>
          <Progress value={((currentStep + 1) / totalSteps) * 100} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
            variant="outline"
            className="border-gray-600 text-gray-400 hover:bg-gray-700 disabled:opacity-50"
          >
            {currentLabels.back}
          </Button>
          
          {currentStep === totalSteps - 1 ? (
            <Button
              onClick={() => {
                // Reset for new analysis
                setCurrentStep(0);
                setCompanyProfile({});
                setDiagnosticResults(null);
              }}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              New Analysis
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canContinue()}
              className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
            >
              {currentStep === 3 ? currentLabels.analyze : currentLabels.next}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}