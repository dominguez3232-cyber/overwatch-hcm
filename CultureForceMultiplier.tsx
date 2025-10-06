import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Crown,
  ChartBar,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  Zap,
  Building,
  Heart,
  MessageSquare,
  Award,
  Lightbulb,
  Shield,
  Compass,
  TrendingDown
} from 'lucide-react';

interface CultureForceMultiplierProps {
  language: 'en' | 'es';
}

interface CultureMetrics {
  absenteeism: number;
  turnover: number;
  safetyIncidents: number;
  productivity: number;
  profitability: number;
  customerLoyalty: number;
  qualityDefects: number;
}

export function CultureForceMultiplier({ language }: CultureForceMultiplierProps) {
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [cultureDesign, setCultureDesign] = useState<'default' | 'designed'>('default');
  const [foundationStep, setFoundationStep] = useState(1);
  const [hrMaturity, setHrMaturity] = useState({
    admin: false,
    process: false,
    strategic: false
  });

  const labels = {
    en: {
      title: "Culture as Force Multiplier",
      subtitle: "From f(x) to F(x): Transform HR from Function to Force Multiplier",
      cultureQueen: "Culture is the Queen Piece",
      queenDescription: "The most versatile asset on the board - she can move in any direction, cover incredible ground, and change the outcome faster than any other piece.",
      
      // Foundation Steps
      foundationTitle: "4 Easy Steps to Creating a Great Culture",
      step1: "1. Lay a Foundation",
      step2: "2. Take a Stand",  
      step3: "3. Get Buy-Ins",
      step4: "4. Roll it Out",
      
      // Strategic Framework
      strategicApproach: "Strategic & Systematic Approach",
      cultureStrategy: "Culture Strategy Only",
      thinkImportant: "So think it's important to add the Conversation Component from 'Designing Thinking'",
      foundationElements: "Foundation Elements",
      measuringPromises: "Measuring the Promises etc",
      businessContext: "Business Context",
      alignWithBusiness: "Business First Paradigm",
      aboveBelowLine: "Above & Below The Line Results",
      
      // Metrics & Impact
      customerLoyalty: "Customer Loyalty",
      loyaltyIncrease: "10% increase in customer loyalty",
      productionSales: "23% increase in production/sales", 
      turnoverReduction: "18% turnover in low 70 orgs",
      absenteeismReduction: "49% turnover in high 85 orgs",
      shrinkageReduction: "28% shrinkage reduction",
      silenceReduction: "50% in Vert Relations",
      powerBalance: "Power Balance",
      
      designVsDefault: "Design vs Default Culture",
      designed: "Culture by Design",
      default: "Default Culture",
      designedDesc: "Intentional, adaptable across contexts (downturn, turnaround, growth)",
      defaultDesc: "Accidental, inherited, shaped by unmanaged forces",
      hrMaturityTitle: "HR Function Maturity Check",
      adminHr: "Admin HR",
      processHr: "Process HR", 
      strategicHr: "Strategic HR",
      adminDesc: "Payroll, compliance, benefits - foundation complete",
      processDesc: "Hiring, training, performance management - systems ready",
      strategicDesc: "Links people strategy to business outcomes - strategic impact",
      roiTitle: "Culture ROI Evidence",
      roiSubtitle: "Measurable business impact from intentional culture design",
      calculateImpact: "Calculate Your Impact",
      currentMultiplier: "Current Multiplier",
      potentialMultiplier: "Potential Multiplier",
      strategicActions: "Strategic Actions",
      action1: "Move from default to designed culture",
      action2: "Complete all three HR maturity boxes",
      action3: "Implement culture measurement systems",
      businessPillars: "Strategic Business Pillars",
      pillarsDesc: "Culture elevates all other pillars",
      
      // Plan & Philosophy
      culturePhilosophy: "Culture Philosophy",
      workLifeBalance: "Work-Life Balance",
      employeeRecognition: "Employee Recognition",
      developmentPlan: "Your Culture Development Plan"
    },
    es: {
      title: "Cultura como Multiplicador de Fuerza",
      subtitle: "De f(x) a F(x): Transforma RH de Función a Multiplicador de Fuerza",
      cultureQueen: "La Cultura es la Pieza Reina",
      queenDescription: "El activo más versátil del tablero: puede moverse en cualquier dirección, cubrir territorio increíble y cambiar el resultado más rápido que cualquier otra pieza.",
      
      // Foundation Steps
      foundationTitle: "4 Pasos Fáciles para Crear una Gran Cultura",
      step1: "1. Establecer Fundación",
      step2: "2. Tomar Posición",
      step3: "3. Obtener Compromiso",
      step4: "4. Implementar",
      
      // Strategic Framework  
      strategicApproach: "Enfoque Estratégico y Sistemático",
      cultureStrategy: "Solo Estrategia Cultural",
      thinkImportant: "Es importante agregar el Componente de Conversación del 'Diseño Pensante'",
      foundationElements: "Elementos Fundamentales",
      measuringPromises: "Midiendo las Promesas etc",
      businessContext: "Contexto Empresarial",
      alignWithBusiness: "Paradigma Empresarial Primero",
      aboveBelowLine: "Resultados Arriba y Abajo de la Línea",
      
      // Metrics & Impact
      customerLoyalty: "Lealtad del Cliente",
      loyaltyIncrease: "10% aumento en lealtad del cliente",
      productionSales: "23% aumento en producción/ventas",
      turnoverReduction: "18% rotación en organizaciones bajas 70",
      absenteeismReduction: "49% rotación en organizaciones altas 85",
      shrinkageReduction: "28% reducción de merma",
      silenceReduction: "50% en Relaciones Verticales",
      powerBalance: "Balance de Poder",
      
      designVsDefault: "Cultura Diseñada vs Por Defecto",
      designed: "Cultura por Diseño",
      default: "Cultura por Defecto",
      designedDesc: "Intencional, adaptable a diferentes contextos (declive, reestructuración, crecimiento)",
      defaultDesc: "Accidental, heredada, moldeada por fuerzas no gestionadas",
      hrMaturityTitle: "Verificación de Madurez de Función RH",
      adminHr: "RH Administrativo",
      processHr: "RH de Proceso",
      strategicHr: "RH Estratégico",
      adminDesc: "Nómina, cumplimiento, beneficios - fundación completa",
      processDesc: "Contratación, entrenamiento, gestión del rendimiento - sistemas listos",
      strategicDesc: "Vincula estrategia de personas a resultados empresariales - impacto estratégico",
      roiTitle: "Evidencia de ROI Cultural",
      roiSubtitle: "Impacto empresarial medible del diseño cultural intencional",
      calculateImpact: "Calcular Tu Impacto",
      currentMultiplier: "Multiplicador Actual",
      potentialMultiplier: "Multiplicador Potencial",
      strategicActions: "Acciones Estratégicas",
      action1: "Pasar de cultura por defecto a diseñada",
      action2: "Completar las tres cajas de madurez RH",
      action3: "Implementar sistemas de medición cultural",
      businessPillars: "Pilares Estratégicos del Negocio",
      pillarsDesc: "La cultura eleva todos los demás pilares",
      
      // Plan & Philosophy
      culturePhilosophy: "Filosofía Cultural",
      workLifeBalance: "Balance Trabajo-Vida",
      employeeRecognition: "Reconocimiento de Empleados",
      developmentPlan: "Tu Plan de Desarrollo Cultural"
    }
  };

  const currentLabels = labels[language];

  // Culture ROI metrics based on your research
  const baselineMetrics: CultureMetrics = {
    absenteeism: 100,      // baseline
    turnover: 100,         // baseline
    safetyIncidents: 100,  // baseline
    productivity: 100,     // baseline
    profitability: 100,    // baseline
    customerLoyalty: 100,  // baseline
    qualityDefects: 100    // baseline
  };

  const improvedMetrics: CultureMetrics = {
    absenteeism: 19,       // 81% reduction
    turnover: 82,          // 18% reduction (high-turnover orgs)
    safetyIncidents: 42,   // 58% reduction
    productivity: 118,     // 18% increase
    profitability: 123,    // 23% increase  
    customerLoyalty: 110,  // 10% increase
    qualityDefects: 59     // 41% reduction
  };

  const calculateMultiplier = () => {
    const checkedBoxes = Object.values(hrMaturity).filter(Boolean).length;
    const cultureBonus = cultureDesign === 'designed' ? 0.4 : 0;
    const maturityBonus = checkedBoxes * 0.15;
    
    return 1 + cultureBonus + maturityBonus;
  };

  const currentMultiplier = calculateMultiplier();
  const potentialMultiplier = 1.85; // Maximum with all boxes checked + designed culture

  const businessPillars = [
    { name: 'Sales', icon: TrendingUp, color: 'text-blue-400' },
    { name: 'Finance', icon: ChartBar, color: 'text-green-400' },
    { name: 'Operations', icon: Target, color: 'text-yellow-400' },
    { name: 'Technology', icon: Zap, color: 'text-purple-400' },
    { name: 'HCM', icon: Users, color: 'text-red-400' }
  ];

  const foundationSteps = [
    { 
      step: 1, 
      title: currentLabels.step1, 
      icon: Building, 
      description: "Establish core values, mission alignment, and cultural foundation",
      color: "text-blue-400",
      bgColor: "bg-blue-600/10 border-blue-600"
    },
    { 
      step: 2, 
      title: currentLabels.step2, 
      icon: Compass, 
      description: "Define clear cultural position and behavioral expectations", 
      color: "text-green-400",
      bgColor: "bg-green-600/10 border-green-600"
    },
    { 
      step: 3, 
      title: currentLabels.step3, 
      icon: Heart, 
      description: "Engage leadership and employees in cultural commitment",
      color: "text-yellow-400", 
      bgColor: "bg-yellow-600/10 border-yellow-600"
    },
    { 
      step: 4, 
      title: currentLabels.step4, 
      icon: Award, 
      description: "Implement systems, measure progress, and reinforce behaviors",
      color: "text-purple-400",
      bgColor: "bg-purple-600/10 border-purple-600"
    }
  ];

  return (
    <div className="px-6 lg:px-20 py-6">
      <Card className="bg-card border-border p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl lg:text-4xl font-bold text-white">{currentLabels.title}</h1>
          </div>
          <p className="text-gray-400 text-lg">{currentLabels.subtitle}</p>
        </div>

        <Tabs defaultValue="foundation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="foundation">Foundation</TabsTrigger>
            <TabsTrigger value="concept">Queen Piece</TabsTrigger>
            <TabsTrigger value="design">Design vs Default</TabsTrigger>
            <TabsTrigger value="maturity">HR Maturity</TabsTrigger>
            <TabsTrigger value="impact">ROI Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="foundation" className="space-y-6 mt-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{currentLabels.foundationTitle}</h2>
              <p className="text-gray-400">{currentLabels.strategicApproach}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {foundationSteps.map((step) => {
                const Icon = step.icon;
                const isActive = foundationStep >= step.step;
                
                return (
                  <Card 
                    key={step.step}
                    className={`p-6 cursor-pointer transition-all duration-300 border-2 ${
                      isActive 
                        ? step.bgColor
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}
                    onClick={() => setFoundationStep(step.step)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-white/10' : 'bg-gray-700'
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? step.color : 'text-gray-400'}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                        
                        {isActive && (
                          <Badge className={`${step.color.replace('text-', 'bg-').replace('-400', '-600')} text-white`}>
                            Active Step
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Strategic Framework Insights */}
            <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-600/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">{currentLabels.foundationElements}</h3>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-white">Conversation Component</span>
                  </div>
                  <p className="text-gray-400 text-sm">{currentLabels.thinkImportant}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="font-medium text-white">{currentLabels.measuringPromises}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{currentLabels.businessContext}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <span className="font-medium text-white">{currentLabels.aboveBelowLine}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{currentLabels.alignWithBusiness}</p>
                </div>
              </div>
            </Card>

            {/* Progress Indicator */}
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{currentLabels.developmentPlan}</h3>
                <Badge className="bg-blue-600 text-white">
                  {foundationStep}/4 Steps Complete
                </Badge>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(foundationStep / 4) * 100}%` }}
                ></div>
              </div>
              
              <p className="text-gray-400 text-sm">
                Complete all 4 foundation steps to unlock maximum culture multiplier effect
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="concept" className="space-y-6 mt-6">
            <Card className="bg-yellow-600/10 border-yellow-600 p-8">
              <div className="text-center">
                <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">{currentLabels.cultureQueen}</h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                  {currentLabels.queenDescription}
                </p>
              </div>
            </Card>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {businessPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card key={pillar.name} className="bg-gray-800/50 border-gray-700 p-4 text-center">
                    <Icon className={`w-8 h-8 ${pillar.color} mx-auto mb-2`} />
                    <div className="text-white font-medium">{pillar.name}</div>
                    {pillar.name === 'HCM' && (
                      <Badge className="mt-2 bg-yellow-600 text-white">Queen</Badge>
                    )}
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-gray-400">{currentLabels.pillarsDesc}</p>
            </div>
          </TabsContent>

          <TabsContent value="design" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.designVsDefault}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card 
                className={`p-6 cursor-pointer transition-colors border-2 ${
                  cultureDesign === 'designed' 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-gray-600 bg-gray-800/50 hover:border-green-500/50'
                }`}
                onClick={() => setCultureDesign('designed')}
              >
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{currentLabels.designed}</h3>
                  <p className="text-gray-300">{currentLabels.designedDesc}</p>
                  
                  {cultureDesign === 'designed' && (
                    <div className="mt-4 p-3 bg-green-600/20 rounded-lg">
                      <div className="text-green-400 font-bold">+40% multiplier effect</div>
                    </div>
                  )}
                </div>
              </Card>

              <Card 
                className={`p-6 cursor-pointer transition-colors border-2 ${
                  cultureDesign === 'default' 
                    ? 'border-red-500 bg-red-500/10' 
                    : 'border-gray-600 bg-gray-800/50 hover:border-red-500/50'
                }`}
                onClick={() => setCultureDesign('default')}
              >
                <div className="text-center">
                  <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{currentLabels.default}</h3>
                  <p className="text-gray-300">{currentLabels.defaultDesc}</p>
                  
                  {cultureDesign === 'default' && (
                    <div className="mt-4 p-3 bg-red-600/20 rounded-lg">
                      <div className="text-red-400 font-bold">Baseline multiplier</div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="maturity" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.hrMaturityTitle}</h2>
              <p className="text-gray-400">All three boxes must be checked for maximum effectiveness</p>
            </div>

            <div className="space-y-4">
              {[
                { key: 'admin' as const, title: currentLabels.adminHr, desc: currentLabels.adminDesc },
                { key: 'process' as const, title: currentLabels.processHr, desc: currentLabels.processDesc },
                { key: 'strategic' as const, title: currentLabels.strategicHr, desc: currentLabels.strategicDesc }
              ].map((item) => (
                <Card 
                  key={item.key}
                  className={`p-4 cursor-pointer transition-colors border-2 ${
                    hrMaturity[item.key] 
                      ? 'border-green-500 bg-green-500/10' 
                      : 'border-gray-600 bg-gray-800/50 hover:border-green-500/50'
                  }`}
                  onClick={() => setHrMaturity(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded border-2 flex items-center justify-center ${
                      hrMaturity[item.key] 
                        ? 'border-green-500 bg-green-500 text-white' 
                        : 'border-gray-400'
                    }`}>
                      {hrMaturity[item.key] && <CheckCircle className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                    {hrMaturity[item.key] && (
                      <Badge className="bg-green-600 text-white">+15% multiplier</Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-600/10 border-blue-600 p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  Current Multiplier: {currentMultiplier.toFixed(2)}x
                </div>
                <div className="text-gray-400">
                  {Object.values(hrMaturity).filter(Boolean).length}/3 boxes checked
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6 mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{currentLabels.roiTitle}</h2>
              <p className="text-gray-400">{currentLabels.roiSubtitle}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-4">{currentLabels.currentMultiplier}</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    {currentMultiplier.toFixed(2)}x
                  </div>
                  <div className="text-gray-400">f(x) current state</div>
                </div>
              </Card>

              <Card className="bg-green-600/10 border-green-600 p-6">
                <h3 className="text-lg font-bold text-white mb-4">{currentLabels.potentialMultiplier}</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {potentialMultiplier}x
                  </div>
                  <div className="text-gray-400">F(x) potential state</div>
                  <div className="mt-2">
                    <Badge className="bg-green-600 text-white">
                      +{((potentialMultiplier - currentMultiplier) * 100).toFixed(0)}% upside
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Enhanced ROI Metrics based on your notes */}
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-6">Proven Culture ROI Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { metric: currentLabels.customerLoyalty, value: '10%', increase: true, color: 'text-blue-400' },
                  { metric: 'Production/Sales', value: '23%', increase: true, color: 'text-green-400' },
                  { metric: 'Turnover (Low 70)', value: '18%', increase: false, color: 'text-yellow-400' },
                  { metric: 'Turnover (High 85)', value: '49%', increase: false, color: 'text-red-400' },
                  { metric: 'Absenteeism', value: '81%', increase: false, color: 'text-green-400' },
                  { metric: 'Safety Incidents', value: '58%', increase: false, color: 'text-blue-400' },
                  { metric: 'Shrinkage', value: '28%', increase: false, color: 'text-purple-400' },
                  { metric: 'Vert Relations', value: '50%', increase: true, color: 'text-cyan-400' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <div className={`text-xl font-bold ${item.color} flex items-center justify-center gap-1`}>
                      {item.increase ? '+' : '-'}{item.value}
                      {item.increase ? <ArrowUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">{item.metric}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-blue-600/10 border-blue-600 p-6">
              <h3 className="text-lg font-bold text-white mb-4">{currentLabels.strategicActions}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ArrowUp className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{currentLabels.action1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowUp className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{currentLabels.action2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowUp className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{currentLabels.action3}</span>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}