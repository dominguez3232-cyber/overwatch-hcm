/**
 * Force Multiplier ROI Calculation Engine
 * 
 * This component documents and calculates the specific ROI formulae behind
 * OVERWATCH³'s Force Multiplier metrics: 40:12:1, 7.15:1, and 50:15:1
 * 
 * The "Force Multiplier" philosophy: Culture becomes the "queen piece" that
 * amplifies all business functions through strategic HR transformation.
 */

import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Calculator, 
  Brain, 
  TrendingUp, 
  DollarSign,
  Users,
  Target,
  Zap,
  Award,
  BarChart3,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Shield,
  Clock,
  CheckCircle,
  ArrowUp
} from 'lucide-react';

interface ForceMultiplierROICalculationEngineProps {
  language: 'en' | 'es';
  companySize?: 'startup' | 'growth' | 'enterprise';
  industry?: 'manufacturing' | 'professional-services' | 'technology' | 'agency';
}

interface ROIInputs {
  employees: number;
  averageSalary: number;
  currentTurnover: number;
  decisionDelayDays: number;
  complianceIncidents: number;
  trainingBudget: number;
  hrEfficiencyScore: number; // 1-100
}

interface ForceMultiplierCalculation {
  ratio: string;
  name: string;
  investment: number;
  returns: number;
  timeframe: number; // years
  formula: string;
  assumptions: string[];
  breakdownComponents: {
    name: string;
    value: number;
    percentage: number;
  }[];
}

export function ForceMultiplierROICalculationEngine({ 
  language, 
  companySize = 'growth',
  industry = 'professional-services' 
}: ForceMultiplierROICalculationEngineProps) {
  
  const [inputs, setInputs] = useState<ROIInputs>({
    employees: 150,
    averageSalary: 75000,
    currentTurnover: 18,
    decisionDelayDays: 14,
    complianceIncidents: 2,
    trainingBudget: 25000,
    hrEfficiencyScore: 65
  });

  const [activeTab, setActiveTab] = useState<'40:12:1' | '7.15:1' | '50:15:1'>('40:12:1');
  const [calculationResults, setCalculationResults] = useState<ForceMultiplierCalculation[]>([]);

  const t = (en: string, es: string) => language === 'en' ? en : es;

  // Core calculation functions for each Force Multiplier ratio
  const calculate40_12_1 = (inputs: ROIInputs): ForceMultiplierCalculation => {
    // 40:12:1 Intelligence ROI - Decision Making Framework Investment
    const frameworkInvestment = 12000; // Base framework implementation cost
    
    // Calculate decision value components
    const averageDecisionValue = inputs.employees * 500; // $500 per employee per strategic decision
    const decisionsPerYear = 52; // Weekly strategic decisions
    const decisionSpeedImprovement = 0.60; // 60% faster decisions
    const decisionQualityImprovement = 0.35; // 35% better decision outcomes
    
    // Decision delay cost calculation
    const currentDelayDays = inputs.decisionDelayDays;
    const improvedDelayDays = currentDelayDays * (1 - decisionSpeedImprovement);
    const delayReduction = currentDelayDays - improvedDelayDays;
    
    // Cost of delayed decisions (opportunity cost)
    const dailyOpportunityCost = (inputs.employees * inputs.averageSalary / 365) * 0.15; // 15% of daily payroll as opportunity cost
    const annualDelayCostSavings = delayReduction * dailyOpportunityCost * decisionsPerYear;
    
    // Decision quality improvement value
    const badDecisionCost = inputs.employees * 2000; // $2,000 per employee for bad decisions annually
    const qualityImprovementValue = badDecisionCost * decisionQualityImprovement;
    
    // Strategic insights value (culture intelligence)
    const cultureMultiplierValue = inputs.employees * 800; // $800 per employee culture optimization value
    
    // Total annual value
    const totalAnnualValue = annualDelayCostSavings + qualityImprovementValue + cultureMultiplierValue;
    const threeYearValue = totalAnnualValue * 3.2; // 3.2x multiplier for compound growth
    
    return {
      ratio: '40:12:1',
      name: t('Decision Intelligence ROI', 'ROI Inteligencia de Decisión'),
      investment: frameworkInvestment,
      returns: Math.round(threeYearValue),
      timeframe: 1,
      formula: '(Decision Speed Savings + Quality Improvement + Culture Multiplier) × Compound Growth Factor',
      assumptions: [
        t('52 strategic decisions per year requiring framework guidance', '52 decisiones estratégicas por año requiriendo guía de marco'),
        t('60% improvement in decision speed through structured frameworks', '60% mejora en velocidad de decisión a través de marcos estructurados'),
        t('35% improvement in decision quality reducing costly mistakes', '35% mejora en calidad de decisión reduciendo errores costosos'),
        t('Culture acts as force multiplier amplifying all business functions', 'Cultura actúa como multiplicador de fuerza amplificando todas las funciones empresariales'),
        t('3.2x compound growth factor over 3-year implementation cycle', 'Factor de crecimiento compuesto 3.2x durante ciclo de implementación de 3 años')
      ],
      breakdownComponents: [
        { name: t('Decision Speed Savings', 'Ahorros Velocidad Decisión'), value: annualDelayCostSavings, percentage: 35 },
        { name: t('Decision Quality Value', 'Valor Calidad Decisión'), value: qualityImprovementValue, percentage: 30 },
        { name: t('Culture Force Multiplier', 'Multiplicador Fuerza Cultural'), value: cultureMultiplierValue, percentage: 25 },
        { name: t('Compound Growth Effect', 'Efecto Crecimiento Compuesto'), value: totalAnnualValue * 2.2, percentage: 10 }
      ]
    };
  };

  const calculate15_7_1 = (inputs: ROIInputs): ForceMultiplierCalculation => {
    // 7.15:1 Force Multiplier - OVERWATCH³ Strategic HRIS Platform Investment
    // Based on the corrected calculation breakdown provided
    const annualPlatformFee = 100000; // Annual Platform Fee: $100,000
    
    // Cost Savings (Annual) - As per corrected breakdown
    const hiresAvoided = 45000; // Hires Avoided: $45,000 savings
    const productivityRetention = 450000; // Productivity Retention: $450,000 savings 
    const vacancyDaySavings = 320000; // Vacancy-Day Savings: $320,000 savings
    
    // Gross Benefit: $815,000
    const grossBenefit = hiresAvoided + productivityRetention + vacancyDaySavings;
    
    // Net Benefit: $715,000 (Gross Benefit - Investment Cost)
    const netBenefit = grossBenefit - annualPlatformFee;
    
    // Return Ratio: 7.15:1 (Every $1 invested returns $7.15)
    const returnRatio = netBenefit / annualPlatformFee;
    
    return {
      ratio: '7.15:1',
      name: t('OVERWATCH³ Strategic HRIS ROI', 'ROI HRIS Estratégico OVERWATCH³'),
      investment: annualPlatformFee,
      returns: grossBenefit,
      timeframe: 1,
      formula: '(Hires Avoided + Productivity Retention + Vacancy-Day Savings) ÷ Annual Platform Fee = 7.15:1 ROI',
      assumptions: [
        t('$45,000 annual savings from strategic hires avoided through better talent decisions', '$45,000 ahorro anual de contrataciones estratégicas evitadas mediante mejores decisiones talento'),
        t('$450,000 productivity retention value through culture optimization and engagement', '$450,000 valor retención productividad a través de optimización cultural y compromiso'),
        t('$320,000 vacancy-day savings through faster, more effective recruitment processes', '$320,000 ahorro días vacante a través de procesos reclutamiento más rápidos y efectivos'),
        t('Annual platform investment of $100,000 for comprehensive OVERWATCH³ implementation', 'Inversión plataforma anual de $100,000 para implementación integral OVERWATCH³'),
        t('7.15:1 return ratio demonstrates every $1 invested returns $7.15 in measurable value', 'Ratio retorno 7.15:1 demuestra que cada $1 invertido retorna $7.15 en valor medible')
      ],
      breakdownComponents: [
        { name: t('Hires Avoided', 'Contrataciones Evitadas'), value: hiresAvoided, percentage: Math.round((hiresAvoided / grossBenefit) * 100) },
        { name: t('Productivity Retention', 'Retención Productividad'), value: productivityRetention, percentage: Math.round((productivityRetention / grossBenefit) * 100) },
        { name: t('Vacancy-Day Savings', 'Ahorros Días Vacante'), value: vacancyDaySavings, percentage: Math.round((vacancyDaySavings / grossBenefit) * 100) }
      ]
    };
  };

  const calculate50_15_1 = (inputs: ROIInputs): ForceMultiplierCalculation => {
    // 50:15:1 Intelligence ROI - Training & Academy Investment
    const trainingInvestment = Math.max(inputs.trainingBudget, 15000); // Minimum $15k training investment
    
    // Skill development value
    const averageSkillGap = 0.25; // 25% average skill gap in workforce
    const skillDevelopmentValue = inputs.employees * inputs.averageSalary * averageSkillGap * 0.60; // 60% skill gap closure
    
    // Leadership capability enhancement
    const leadershipRatio = Math.min(inputs.employees * 0.15, 20); // 15% leadership roles, max 20
    const leadershipValue = leadershipRatio * 25000; // $25k value per enhanced leader
    
    // Knowledge retention and transfer
    const knowledgeRetentionValue = inputs.employees * 1200; // $1,200 per employee knowledge optimization
    
    // Cultural intelligence amplification
    const culturalIntelligenceMultiplier = 2.1; // 2.1x multiplier for bilingual/cultural capabilities
    const culturalValue = (skillDevelopmentValue + leadershipValue) * (culturalIntelligenceMultiplier - 1);
    
    // Innovation and adaptability gains
    const innovationValue = inputs.employees * 800; // $800 per employee innovation capability
    
    // Total strategic capability value
    const totalCapabilityValue = skillDevelopmentValue + leadershipValue + knowledgeRetentionValue + culturalValue + innovationValue;
    
    return {
      ratio: '50:15:1',
      name: t('Academy Intelligence ROI', 'ROI Inteligencia Academia'),
      investment: trainingInvestment,
      returns: Math.round(totalCapabilityValue),
      timeframe: 1,
      formula: '(Skill Development + Leadership Enhancement + Knowledge Retention + Cultural Intelligence + Innovation) ÷ Training Investment',
      assumptions: [
        t('60% closure of identified skill gaps through structured learning', '60% cierre de brechas habilidades identificadas a través de aprendizaje estructurado'),
        t('15% of workforce in leadership roles with $25k enhancement value each', '15% de fuerza laboral en roles liderazgo con valor mejora $25k cada uno'),
        t('Bilingual/cultural intelligence provides 2.1x capability multiplier', 'Inteligencia bilingüe/cultural proporciona multiplicador capacidad 2.1x'),
        t('$1,200 per employee value from improved knowledge retention and transfer', '$1,200 por empleado valor de retención y transferencia conocimiento mejorada'),
        t('$800 per employee innovation capability through continuous learning culture', '$800 por empleado capacidad innovación a través de cultura aprendizaje continuo')
      ],
      breakdownComponents: [
        { name: t('Skill Development Value', 'Valor Desarrollo Habilidades'), value: skillDevelopmentValue, percentage: 35 },
        { name: t('Leadership Enhancement', 'Mejora Liderazgo'), value: leadershipValue, percentage: 20 },
        { name: t('Cultural Intelligence Multiplier', 'Multiplicador Inteligencia Cultural'), value: culturalValue, percentage: 25 },
        { name: t('Knowledge Retention', 'Retención Conocimiento'), value: knowledgeRetentionValue, percentage: 15 },
        { name: t('Innovation Capability', 'Capacidad Innovación'), value: innovationValue, percentage: 5 }
      ]
    };
  };

  // Calculate all Force Multiplier ratios
  useEffect(() => {
    const calculations = [
      calculate40_12_1(inputs),
      calculate15_7_1(inputs),
      calculate50_15_1(inputs)
    ];
    setCalculationResults(calculations);
  }, [inputs]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCurrentCalculation = () => {
    return calculationResults.find(calc => calc.ratio === activeTab);
  };

  const currentCalc = getCurrentCalculation();

  return (
    <div className="min-h-screen bg-background text-foreground px-6 lg:px-20 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 mb-4">
          <Calculator className="w-4 h-4 mr-2" />
          {t('Force Multiplier ROI Calculation Engine', 'Motor de Cálculo ROI Multiplicador de Fuerza')}
        </Badge>
        
        <h1 className="text-4xl font-bold mb-4">
          {t('OVERWATCH³ Force Multiplier Formulae', 'Fórmulas Multiplicador de Fuerza OVERWATCH³')}
        </h1>
        
        {/* Highlight the corrected 7.15:1 ROI */}
        <Card className="max-w-2xl mx-auto mb-6 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">7.15:1</div>
              <div className="text-sm text-muted-foreground">
                {t('Foundational Business Case ROI', 'ROI Caso Negocio Fundamental')}
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            {t(
              '$815,000 Gross Benefit - $100,000 Investment = $715,000 Net Benefit',
              '$815,000 Beneficio Bruto - $100,000 Inversión = $715,000 Beneficio Neto'
            )}
          </div>
        </Card>
        
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          {t(
            'Detailed mathematical breakdown of the 7.15:1 ROI and how culture becomes the "queen piece" that amplifies all business functions through strategic HR transformation.',
            'Desglose matemático detallado del ROI 7.15:1 y cómo la cultura se convierte en la "pieza reina" que amplifica todas las funciones empresariales a través de la transformación estratégica de HR.'
          )}
        </p>
      </div>

      {/* Input Configuration Panel */}
      <Card className="mb-8 p-6 border border-border bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold">
            {t('Company Profile Configuration', 'Configuración Perfil Empresa')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <Label className="text-sm font-medium mb-2 block">
              {t('Number of Employees', 'Número de Empleados')}
            </Label>
            <Input
              type="number"
              value={inputs.employees}
              onChange={(e) => setInputs(prev => ({ ...prev, employees: Number(e.target.value) }))}
              className="w-full"
            />
          </div>
          
          <div>
            <Label className="text-sm font-medium mb-2 block">
              {t('Average Salary ($)', 'Salario Promedio ($)')}
            </Label>
            <Input
              type="number"
              value={inputs.averageSalary}
              onChange={(e) => setInputs(prev => ({ ...prev, averageSalary: Number(e.target.value) }))}
              className="w-full"
            />
          </div>
          
          <div>
            <Label className="text-sm font-medium mb-2 block">
              {t('Turnover Rate (%)', 'Tasa Rotación (%)')}
            </Label>
            <Input
              type="number"
              value={inputs.currentTurnover}
              onChange={(e) => setInputs(prev => ({ ...prev, currentTurnover: Number(e.target.value) }))}
              className="w-full"
            />
          </div>
          
          <div>
            <Label className="text-sm font-medium mb-2 block">
              {t('Decision Delay (Days)', 'Retraso Decisión (Días)')}
            </Label>
            <Input
              type="number"
              value={inputs.decisionDelayDays}
              onChange={(e) => setInputs(prev => ({ ...prev, decisionDelayDays: Number(e.target.value) }))}
              className="w-full"
            />
          </div>
        </div>
      </Card>

      {/* Force Multiplier Ratios Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="40:12:1" className="flex flex-col items-center gap-1 py-4">
            <Brain className="w-5 h-5" />
            <span className="font-bold">40:12:1</span>
            <span className="text-xs opacity-70">{t('Decision Intelligence', 'Inteligencia Decisión')}</span>
          </TabsTrigger>
          <TabsTrigger value="7.15:1" className="flex flex-col items-center gap-1 py-4">
            <Zap className="w-5 h-5" />
            <span className="font-bold">7.15:1</span>
            <span className="text-xs opacity-70">{t('Strategic HRIS', 'HRIS Estratégico')}</span>
          </TabsTrigger>
          <TabsTrigger value="50:15:1" className="flex flex-col items-center gap-1 py-4">
            <BookOpen className="w-5 h-5" />
            <span className="font-bold">50:15:1</span>
            <span className="text-xs opacity-70">{t('Academy Intelligence', 'Inteligencia Academia')}</span>
          </TabsTrigger>
        </TabsList>

        {/* Calculation Results */}
        {currentCalc && (
          <div className="space-y-8">
            {/* Overview Card */}
            <Card className="p-8 bg-gradient-to-r from-card to-secondary border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {formatCurrency(currentCalc.returns)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('Total Annual Value', 'Valor Anual Total')}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {formatCurrency(currentCalc.investment)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('Annual Investment', 'Inversión Anual')}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {currentCalc.ratio}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t('Force Multiplier Ratio', 'Ratio Multiplicador Fuerza')}
                  </div>
                </div>
              </div>
            </Card>

            {/* Formula Breakdown */}
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-400" />
                {t('Mathematical Formula', 'Fórmula Matemática')}
              </h3>
              
              <div className="bg-muted rounded-lg p-4 font-mono text-sm mb-6">
                {currentCalc.formula}
              </div>
              
              <h4 className="font-semibold mb-3">
                {t('Key Assumptions:', 'Supuestos Clave:')}
              </h4>
              <ul className="space-y-2">
                {currentCalc.assumptions.map((assumption, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{assumption}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Value Breakdown */}
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                {t('Value Component Breakdown', 'Desglose Componentes Valor')}
              </h3>
              
              <div className="space-y-4">
                {currentCalc.breakdownComponents.map((component, index) => (
                  <div key={index} className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{component.name}</span>
                      <span className="text-green-400 font-bold">
                        {formatCurrency(component.value)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${component.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12">
                        {component.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Culture as Force Multiplier Explanation */}
            <Card className="p-6 border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-yellow-500/10">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-bold">
                  {t('Culture as the "Queen Piece" Force Multiplier', 'Cultura como Multiplicador de Fuerza "Pieza Reina"')}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {t(
                  'The Force Multiplier philosophy positions culture as the strategic amplifier that enhances every business function. Like the queen in chess, culture can move in all directions, affecting every aspect of organizational performance.',
                  'La filosofía del Multiplicador de Fuerza posiciona la cultura como el amplificador estratégico que mejora cada función empresarial. Como la reina en el ajedrez, la cultura puede moverse en todas las direcciones, afectando cada aspecto del rendimiento organizacional.'
                )}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background/50 rounded-lg p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="font-bold text-green-400">1.75x</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Productivity Amplification', 'Amplificación Productividad')}
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="font-bold text-blue-400">2.1x</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Cultural Intelligence Multiplier', 'Multiplicador Inteligencia Cultural')}
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="font-bold text-purple-400">3.2x</div>
                  <div className="text-sm text-muted-foreground">
                    {t('Compound Growth Factor', 'Factor Crecimiento Compuesto')}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </Tabs>

      {/* Call to Action */}
      <Card className="mt-12 p-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 text-center">
        <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">
          {t('Ready to Implement Your Force Multiplier Strategy?', '¿Listo para Implementar tu Estrategia Multiplicador de Fuerza?')}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t(
            'These calculations demonstrate how OVERWATCH³ transforms HR from a cost center to a strategic force multiplier that amplifies every business function.',
            'Estos cálculos demuestran cómo OVERWATCH³ transforma HR de un centro de costos a un multiplicador de fuerza estratégico que amplifica cada función empresarial.'
          )}
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            <Lightbulb className="w-4 h-4 mr-2" />
            {t('Schedule ROI Consultation', 'Agendar Consulta ROI')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 px-8 py-3">
            <Calculator className="w-4 h-4 mr-2" />
            {t('Download Calculation Worksheet', 'Descargar Hoja Cálculo')}
          </Button>
        </div>
      </Card>
    </div>
  );
}