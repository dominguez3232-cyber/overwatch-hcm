import { useState, useMemo } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Zap, TrendingUp, TrendingDown, AlertTriangle, Building, Users, Shield, BarChart3 } from 'lucide-react';

interface ScenarioEngineProps {
  language: 'en' | 'es';
  baseROI: number;
  onScenarioChange: (scenarios: ScenarioUniverse[]) => void;
}

interface ScenarioUniverse {
  id: string;
  label: string;
  probability: number;
  roiDelta: number;
  triggers: string[];
  mode: 'baseline' | 'expansion' | 'contraction' | 'shock';
}

export function ScenarioEngine({ language, baseROI, onScenarioChange }: ScenarioEngineProps) {
  const [triggerWeights, setTriggerWeights] = useState({
    marketShock: 0.2,
    regulatoryChange: 0.3,
    competitionShift: 0.25,
    liquidityStress: 0.15,
    macroShift: 0.35
  });

  // Strategic Framework State
  const [strategicProfile, setStrategicProfile] = useState({
    macroTrend: '',
    industry: '',
    lifecycle: '',
    companyType: '',
    hrFocus: '',
    riskCategory: ''
  });

  const labels = {
    en: {
      title: "Scenario Universe Engine",
      baseline: "Baseline Reality",
      expansion: "Growth Acceleration",
      contraction: "Market Stress",
      shock: "Black Swan Event",
      triggers: "Trigger Probabilities",
      marketShock: "Market Shock",
      regulatoryChange: "Regulatory Change", 
      competitionShift: "Competition Shift",
      liquidityStress: "Liquidity Stress",
      macroShift: "Macro Shift",
      probability: "Probability",
      roiImpact: "ROI Impact",
      runSimulation: "Run Simulation",
      strategicFramework: "Strategic Framework",
      macroTrends: "Macro Trends",
      industry: "Industry",
      lifecycle: "Lifecycle Stage",
      companyType: "Company Type", 
      hrFocus: "HR/HCM Focus",
      riskProfile: "Risk Profile"
    },
    es: {
      title: "Motor de Universos de Escenarios",
      baseline: "Realidad Base",
      expansion: "Aceleración de Crecimiento",
      contraction: "Estrés de Mercado",
      shock: "Evento Cisne Negro",
      triggers: "Probabilidades de Disparadores",
      marketShock: "Choque de Mercado",
      regulatoryChange: "Cambio Regulatorio",
      competitionShift: "Cambio de Competencia", 
      liquidityStress: "Estrés de Liquidez",
      macroShift: "Cambio Macro",
      probability: "Probabilidad",
      roiImpact: "Impacto ROI",
      runSimulation: "Ejecutar Simulación",
      strategicFramework: "Marco Estratégico",
      macroTrends: "Tendencias Macro",
      industry: "Industria",
      lifecycle: "Etapa del Ciclo",
      companyType: "Tipo de Empresa",
      hrFocus: "Enfoque RH/HCM", 
      riskProfile: "Perfil de Riesgo"
    }
  };

  // Strategic Framework Data (from whiteboard)
  const strategicFramework = {
    macroTrends: {
      en: [
        "Economic Uncertainty",
        "Competition Pressure", 
        "Strategic Priorities Shift",
        "Compliance/Regulatory Changes",
        "Business Operations Stress",
        "People Management Challenges"
      ],
      es: [
        "Incertidumbre Económica",
        "Presión Competitiva",
        "Cambio de Prioridades Estratégicas", 
        "Cambios de Cumplimiento/Regulatorios",
        "Estrés de Operaciones Comerciales",
        "Desafíos de Gestión de Personas"
      ]
    },
    industries: {
      en: [
        "Manufacturing",
        "Professional Services", 
        "Skilled Trades",
        "Marketing Firms",
        "Engineering Firms",
        "Medical/Dental",
        "Software/IT",
        "HVAC/Plumbing",
        "Property Management",
        "Commercial Real Estate",
        "Wealth Management"
      ],
      es: [
        "Manufactura",
        "Servicios Profesionales",
        "Oficios Especializados",
        "Firmas de Marketing",
        "Firmas de Ingeniería", 
        "Médico/Dental",
        "Software/TI",
        "HVAC/Plomería",
        "Gestión de Propiedades",
        "Bienes Raíces Comerciales",
        "Gestión de Patrimonio"
      ]
    },
    lifecycle: {
      en: [
        "1. Startup/Entrepreneurial",
        "2. Growth", 
        "3. Scale",
        "4. Exit (M&A, IPO, Sell, Merger, MBO)"
      ],
      es: [
        "1. Startup/Emprendimiento",
        "2. Crecimiento",
        "3. Escala", 
        "4. Salida (M&A, IPO, Venta, Fusión, MBO)"
      ]
    },
    companyTypes: {
      en: [
        "Entrepreneurial",
        "Family Owned",
        "Lifestyle Business",
        "PE-Backed",
        "VC-Backed", 
        "Fund Backed",
        "Partnership",
        "Rare-Breed Business",
        "Mission-Driven",
        "Non-Profit",
        "Publicly Traded"
      ],
      es: [
        "Emprendimiento",
        "Familiar",
        "Negocio de Estilo de Vida",
        "Respaldado por PE",
        "Respaldado por VC",
        "Respaldado por Fondos", 
        "Sociedad",
        "Negocio de Raza Rara",
        "Impulsado por Misión",
        "Sin Fines de Lucro",
        "Cotizado Públicamente"
      ]
    },
    hrFocus: {
      en: [
        "Admin HR (Top 10 HR Issues)",
        "Process HR",
        "Strategic HR",
        "Performance Management",
        "Talent Management",
        "Training & Development", 
        "Compensation & Benefits",
        "Technology Integration",
        "Employee Engagement",
        "Compliance Management"
      ],
      es: [
        "RH Administrativo (Top 10 Problemas RH)",
        "RH de Proceso",
        "RH Estratégico",
        "Gestión del Rendimiento",
        "Gestión del Talento",
        "Entrenamiento y Desarrollo",
        "Compensación y Beneficios", 
        "Integración Tecnológica",
        "Compromiso del Empleado",
        "Gestión de Cumplimiento"
      ]
    },
    riskCategories: {
      en: [
        "Privacy & Security",
        "Data Protection",
        "Pay & Tax Compliance",
        "Benefits & Insurance",
        "EEO/EEOC Issues", 
        "OSHA & Safety Fines",
        "Cybersecurity Threats",
        "Succession Planning",
        "Employment Law",
        "Third Party Risk",
        "Regulatory Requirements",
        "Environmental Compliance"
      ],
      es: [
        "Privacidad y Seguridad",
        "Protección de Datos",
        "Cumplimiento de Pago e Impuestos",
        "Beneficios y Seguros",
        "Problemas EEO/EEOC",
        "Multas OSHA y Seguridad",
        "Amenazas de Ciberseguridad",
        "Planificación de Sucesión", 
        "Ley Laboral",
        "Riesgo de Terceros",
        "Requisitos Regulatorios",
        "Cumplimiento Ambiental"
      ]
    }
  };

  const scenarios = useMemo(() => {
    // Strategic framework modifiers
    const getStrategicModifiers = () => {
      let riskModifier = 1;
      let growthModifier = 1;
      
      // Lifecycle stage impact
      if (strategicProfile.lifecycle.includes('Startup')) {
        riskModifier *= 1.3; // Higher risk
        growthModifier *= 1.5; // Higher growth potential
      } else if (strategicProfile.lifecycle.includes('Scale')) {
        riskModifier *= 0.8; // Lower risk
        growthModifier *= 1.2; // Moderate growth
      }
      
      // Company type impact
      if (strategicProfile.companyType.includes('VC-Backed')) {
        growthModifier *= 1.4;
        riskModifier *= 1.2;
      } else if (strategicProfile.companyType.includes('Family')) {
        riskModifier *= 0.7;
        growthModifier *= 0.9;
      }
      
      // Industry impact
      if (strategicProfile.industry.includes('Technology') || strategicProfile.industry.includes('Software')) {
        growthModifier *= 1.3;
        riskModifier *= 1.1;
      }
      
      return { riskModifier, growthModifier };
    };

    const { riskModifier, growthModifier } = getStrategicModifiers();

    // Quantum-inspired scenario generation with strategic context
    const universes: ScenarioUniverse[] = [
      {
        id: 'U0',
        label: labels[language].baseline,
        probability: 0.4 - (triggerWeights.marketShock * 0.1 * riskModifier),
        roiDelta: 0,
        triggers: strategicProfile.macroTrend ? [strategicProfile.macroTrend] : [],
        mode: 'baseline'
      },
      {
        id: 'U1', 
        label: labels[language].expansion,
        probability: 0.25 + (triggerWeights.macroShift * 0.2 * growthModifier),
        roiDelta: (8.5 + (triggerWeights.regulatoryChange * 5)) * growthModifier,
        triggers: [
          'Favorable regulation', 
          'Market expansion',
          ...(strategicProfile.industry ? [strategicProfile.industry + ' growth'] : [])
        ],
        mode: 'expansion'
      },
      {
        id: 'U2',
        label: labels[language].contraction,
        probability: 0.25 + (triggerWeights.competitionShift * 0.15 * riskModifier),
        roiDelta: (-6.2 - (triggerWeights.liquidityStress * 4)) * riskModifier,
        triggers: [
          'Increased competition', 
          'Credit tightening',
          ...(strategicProfile.riskCategory ? [strategicProfile.riskCategory] : [])
        ],
        mode: 'contraction'
      },
      {
        id: 'U3',
        label: labels[language].shock,
        probability: 0.1 + (triggerWeights.marketShock * 0.2 * riskModifier),
        roiDelta: (-15.3 - (triggerWeights.marketShock * 8)) * riskModifier,
        triggers: [
          'Market crash', 
          'Regulatory crackdown',
          ...(strategicProfile.hrFocus ? [strategicProfile.hrFocus + ' crisis'] : [])
        ],
        mode: 'shock'
      }
    ];

    // Normalize probabilities to sum to 1
    const totalProb = universes.reduce((sum, u) => sum + u.probability, 0);
    universes.forEach(u => u.probability = u.probability / totalProb);

    return universes;
  }, [triggerWeights, strategicProfile, language]);

  const getModeColor = (mode: ScenarioUniverse['mode']) => {
    switch (mode) {
      case 'baseline': return 'bg-blue-500/20 border-blue-500/40 text-blue-300';
      case 'expansion': return 'bg-green-500/20 border-green-500/40 text-green-300';  
      case 'contraction': return 'bg-orange-500/20 border-orange-500/40 text-orange-300';
      case 'shock': return 'bg-red-500/20 border-red-500/40 text-red-300';
      default: return 'bg-gray-500/20 border-gray-500/40 text-gray-300';
    }
  };

  const getModeIcon = (mode: ScenarioUniverse['mode']) => {
    switch (mode) {
      case 'baseline': return <TrendingUp className="w-4 h-4" />;
      case 'expansion': return <TrendingUp className="w-4 h-4" />;
      case 'contraction': return <TrendingDown className="w-4 h-4" />;
      case 'shock': return <AlertTriangle className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  const handleTriggerChange = (trigger: keyof typeof triggerWeights, value: number[]) => {
    setTriggerWeights(prev => ({ ...prev, [trigger]: value[0] }));
  };

  const runSimulation = () => {
    onScenarioChange(scenarios);
  };

  return (
    <div className="px-20 py-6">
      <Card className="bg-card border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-400" />
            {labels[language].title}
          </h3>
          <Button 
            onClick={runSimulation}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            {labels[language].runSimulation}
          </Button>
        </div>

        <Tabs defaultValue="triggers" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="triggers">{labels[language].triggers}</TabsTrigger>
            <TabsTrigger value="framework">{labels[language].strategicFramework}</TabsTrigger>
          </TabsList>

          <TabsContent value="triggers" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Trigger Controls */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-green-400" />
                  {labels[language].triggers}
                </h4>
                
                {Object.entries(triggerWeights).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm text-gray-300">
                        {labels[language][key as keyof typeof labels.en]}
                      </label>
                      <span className="text-sm text-green-400 font-mono">
                        {(value * 100).toFixed(0)}%
                      </span>
                    </div>
                    <Slider
                      value={[value]}
                      onValueChange={(v) => handleTriggerChange(key as keyof typeof triggerWeights, v)}
                      max={1}
                      min={0}
                      step={0.05}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>

              {/* Universe Scenarios */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Scenario Universes</h4>
                
                {scenarios.map((scenario) => (
                  <div 
                    key={scenario.id}
                    className={`p-4 rounded-lg border-2 ${getModeColor(scenario.mode)}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getModeIcon(scenario.mode)}
                        <span className="font-semibold">{scenario.label}</span>
                        <Badge variant="outline" className="text-xs">
                          {scenario.id}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-75">{labels[language].probability}</div>
                        <div className="font-mono font-bold">
                          {(scenario.probability * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-75">{labels[language].roiImpact}</div>
                        <div className={`font-mono font-bold ${
                          scenario.roiDelta > 0 ? 'text-green-400' : 
                          scenario.roiDelta < 0 ? 'text-red-400' : 'text-gray-400'
                        }`}>
                          {scenario.roiDelta > 0 ? '+' : ''}{scenario.roiDelta.toFixed(1)}%
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-75">Final ROI</div>
                        <div className="font-mono font-bold text-white">
                          {(baseROI + scenario.roiDelta).toFixed(1)}%
                        </div>
                      </div>
                    </div>

                    {scenario.triggers.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-white/10">
                        <div className="text-xs opacity-75 mb-1">Key Triggers:</div>
                        <div className="flex flex-wrap gap-1">
                          {scenario.triggers.map((trigger, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {trigger}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="framework" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Strategic Framework Selectors */}
              <div className="lg:col-span-2 space-y-6">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <Building className="w-4 h-4 text-green-400" />
                  Strategic Context Mapping
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {/* Macro Trends */}
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      {labels[language].macroTrends}
                    </label>
                    <Select 
                      value={strategicProfile.macroTrend} 
                      onValueChange={(value) => setStrategicProfile(prev => ({ ...prev, macroTrend: value }))}
                    >
                      <SelectTrigger className="bg-card border-border text-white">
                        <SelectValue placeholder="Select trend..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border max-h-40 overflow-y-auto">
                        {strategicFramework.macroTrends[language].map((trend) => (
                          <SelectItem key={trend} value={trend} className="text-white hover:bg-muted">
                            {trend}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      {labels[language].industry}
                    </label>
                    <Select 
                      value={strategicProfile.industry} 
                      onValueChange={(value) => setStrategicProfile(prev => ({ ...prev, industry: value }))}
                    >
                      <SelectTrigger className="bg-card border-border text-white">
                        <SelectValue placeholder="Select industry..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border max-h-40 overflow-y-auto">
                        {strategicFramework.industries[language].map((industry) => (
                          <SelectItem key={industry} value={industry} className="text-white hover:bg-muted">
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Lifecycle */}
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      {labels[language].lifecycle}
                    </label>
                    <Select 
                      value={strategicProfile.lifecycle} 
                      onValueChange={(value) => setStrategicProfile(prev => ({ ...prev, lifecycle: value }))}
                    >
                      <SelectTrigger className="bg-card border-border text-white">
                        <SelectValue placeholder="Select stage..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {strategicFramework.lifecycle[language].map((stage) => (
                          <SelectItem key={stage} value={stage} className="text-white hover:bg-muted">
                            {stage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Company Type */}
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      {labels[language].companyType}
                    </label>
                    <Select 
                      value={strategicProfile.companyType} 
                      onValueChange={(value) => setStrategicProfile(prev => ({ ...prev, companyType: value }))}
                    >
                      <SelectTrigger className="bg-card border-border text-white">
                        <SelectValue placeholder="Select type..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border max-h-40 overflow-y-auto">
                        {strategicFramework.companyTypes[language].map((type) => (
                          <SelectItem key={type} value={type} className="text-white hover:bg-muted">
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* HR Focus */}
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      {labels[language].hrFocus}
                    </label>
                    <Select 
                      value={strategicProfile.hrFocus} 
                      onValueChange={(value) => setStrategicProfile(prev => ({ ...prev, hrFocus: value }))}
                    >
                      <SelectTrigger className="bg-card border-border text-white">
                        <SelectValue placeholder="Select focus..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border max-h-40 overflow-y-auto">
                        {strategicFramework.hrFocus[language].map((focus) => (
                          <SelectItem key={focus} value={focus} className="text-white hover:bg-muted">
                            {focus}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Risk Profile */}
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      {labels[language].riskProfile}
                    </label>
                    <Select 
                      value={strategicProfile.riskCategory} 
                      onValueChange={(value) => setStrategicProfile(prev => ({ ...prev, riskCategory: value }))}
                    >
                      <SelectTrigger className="bg-card border-border text-white">
                        <SelectValue placeholder="Select risk..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border max-h-40 overflow-y-auto">
                        {strategicFramework.riskCategories[language].map((risk) => (
                          <SelectItem key={risk} value={risk} className="text-white hover:bg-muted">
                            {risk}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Strategic Profile Summary */}
              <div>
                <h4 className="font-semibold text-white flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-green-400" />
                  Company Profile
                </h4>
                
                <Card className="bg-gray-800/50 border-gray-700 p-4 space-y-3">
                  {Object.entries(strategicProfile).map(([key, value]) => {
                    if (!value) return null;
                    return (
                      <div key={key}>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                          {labels[language][key as keyof typeof labels.en] || key}
                        </div>
                        <div className="text-sm text-white font-medium">{value}</div>
                      </div>
                    );
                  })}
                  
                  {Object.values(strategicProfile).every(v => !v) && (
                    <div className="text-center text-gray-400 py-4">
                      <Building className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <div className="text-sm">Select strategic dimensions to see your company profile</div>
                    </div>
                  )}
                </Card>

                {Object.values(strategicProfile).some(v => v) && (
                  <div className="mt-4">
                    <Badge className="bg-green-600 text-white w-full justify-center py-2">
                      <Shield className="w-3 h-3 mr-1" />
                      Profile influences scenario probabilities
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}