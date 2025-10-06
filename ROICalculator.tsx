import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  DollarSign,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Download,
  Share,
  Award,
  BarChart3
} from 'lucide-react';
import { 
  getStrategicIntelligenceFoundation, 
  getMarketOpportunitySize,
  getStrategicRecommendations 
} from './StrategicIntelligenceFoundation';

interface ROICalculatorProps {
  language: 'en' | 'es';
  industry?: 'manufacturing' | 'engineering' | 'professional-services' | 'agency';
}

interface ROIInputs {
  employees: number;
  averageSalary: number;
  currentTurnover: number;
  currentProductivity: number;
  hrToolsSpend: number;
  complianceIncidents: number;
}

interface ROIResults {
  annualSavings: number;
  productivityGains: number;
  retentionSavings: number;
  complianceSavings: number;
  totalBenefit: number;
  overwatchCost: number;
  netBenefit: number;
  roiMultiple: number;
  paybackMonths: number;
}

export function ROICalculator({ language, industry = 'professional-services' }: ROICalculatorProps) {
  const [inputs, setInputs] = useState<ROIInputs>({
    employees: 150,
    averageSalary: 75000,
    currentTurnover: 18,
    currentProductivity: 70,
    hrToolsSpend: 36000,
    complianceIncidents: 2
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const labels = {
    en: {
      title: "OVERWATCH ROI Calculator",
      subtitle: "Calculate your return on advisory-grade HRIS investment",
      inputs: "Company Profile",
      results: "Projected ROI Impact",
      calculate: "Calculate ROI",
      download: "Download Report",
      share: "Share Results",
      reset: "Reset Calculator"
    },
    es: {
      title: "Calculadora ROI OVERWATCH",
      subtitle: "Calcula tu retorno de inversión en HRIS de grado asesor",
      inputs: "Perfil de Empresa",
      results: "Impacto ROI Proyectado",
      calculate: "Calcular ROI",
      download: "Descargar Reporte",
      share: "Compartir Resultados",
      reset: "Reiniciar Calculadora"
    }
  };

  const currentLabels = labels[language];

  const inputFields = language === 'en' ? [
    { 
      key: 'employees', 
      label: 'Number of Employees', 
      type: 'number', 
      min: 10, 
      max: 2000, 
      step: 10,
      description: 'Total full-time equivalent employees'
    },
    { 
      key: 'averageSalary', 
      label: 'Average Annual Salary ($)', 
      type: 'currency', 
      min: 30000, 
      max: 200000, 
      step: 5000,
      description: 'Fully-loaded cost per employee including benefits'
    },
    { 
      key: 'currentTurnover', 
      label: 'Annual Turnover Rate (%)', 
      type: 'percentage', 
      min: 5, 
      max: 50, 
      step: 1,
      description: 'Percentage of employees who leave annually'
    },
    { 
      key: 'currentProductivity', 
      label: 'Current Productivity Score (%)', 
      type: 'percentage', 
      min: 40, 
      max: 95, 
      step: 5,
      description: 'Self-assessed team productivity vs. potential'
    },
    { 
      key: 'hrToolsSpend', 
      label: 'Annual HR/Payroll Tools Spend ($)', 
      type: 'currency', 
      min: 0, 
      max: 200000, 
      step: 2000,
      description: 'Current spend on HRIS, payroll, and HR tools'
    },
    { 
      key: 'complianceIncidents', 
      label: 'Compliance Incidents/Year', 
      type: 'number', 
      min: 0, 
      max: 20, 
      step: 1,
      description: 'DOL violations, safety incidents, employment claims'
    }
  ] : [
    { 
      key: 'employees', 
      label: 'Número de Empleados', 
      type: 'number', 
      min: 10, 
      max: 2000, 
      step: 10,
      description: 'Total de empleados equivalentes a tiempo completo'
    },
    { 
      key: 'averageSalary', 
      label: 'Salario Anual Promedio ($)', 
      type: 'currency', 
      min: 30000, 
      max: 200000, 
      step: 5000,
      description: 'Costo total por empleado incluyendo beneficios'
    },
    { 
      key: 'currentTurnover', 
      label: 'Tasa de Rotación Anual (%)', 
      type: 'percentage', 
      min: 5, 
      max: 50, 
      step: 1,
      description: 'Porcentaje de empleados que se van anualmente'
    },
    { 
      key: 'currentProductivity', 
      label: 'Puntuación de Productividad Actual (%)', 
      type: 'percentage', 
      min: 40, 
      max: 95, 
      step: 5,
      description: 'Productividad auto-evaluada del equipo vs. potencial'
    },
    { 
      key: 'hrToolsSpend', 
      label: 'Gasto Anual en Herramientas RH/Nómina ($)', 
      type: 'currency', 
      min: 0, 
      max: 200000, 
      step: 2000,
      description: 'Gasto actual en HRIS, nómina y herramientas RH'
    },
    { 
      key: 'complianceIncidents', 
      label: 'Incidentes de Cumplimiento/Año', 
      type: 'number', 
      min: 0, 
      max: 20, 
      step: 1,
      description: 'Violaciones DOL, incidentes de seguridad, reclamos laborales'
    }
  ];

  const calculateROI = () => {
    // Industry-specific improvement factors
    const industryFactors = {
      manufacturing: { productivity: 0.15, retention: 0.25, compliance: 0.40 },
      engineering: { productivity: 0.18, retention: 0.30, compliance: 0.20 },
      'professional-services': { productivity: 0.20, retention: 0.35, compliance: 0.15 },
      agency: { productivity: 0.22, retention: 0.40, compliance: 0.10 }
    };

    const factors = industryFactors[industry];
    
    // Calculate benefits
    const totalPayroll = inputs.employees * inputs.averageSalary;
    
    // Productivity gains (18-22% improvement in effective output)
    const productivityImprovement = (100 - inputs.currentProductivity) * factors.productivity / 100;
    const productivityGains = totalPayroll * productivityImprovement;
    
    // Retention savings (25-40% reduction in turnover)
    const currentTurnoverCost = (inputs.currentTurnover / 100) * inputs.employees * (inputs.averageSalary * 0.75); // 75% of salary as replacement cost
    const retentionImprovement = factors.retention;
    const retentionSavings = currentTurnoverCost * retentionImprovement;
    
    // Compliance savings ($15k-50k per incident avoided)
    const avgIncidentCost = 25000;
    const complianceImprovement = factors.compliance;
    const complianceSavings = inputs.complianceIncidents * avgIncidentCost * complianceImprovement;
    
    // Tool consolidation savings (20-40% reduction)
    const toolConsolidationSavings = inputs.hrToolsSpend * 0.30;
    
    const totalBenefit = productivityGains + retentionSavings + complianceSavings + toolConsolidationSavings;
    
    // OVERWATCH cost (tiered pricing)
    let overwatchCost = 0;
    if (inputs.employees <= 50) {
      overwatchCost = 30000; // Core tier
    } else if (inputs.employees <= 200) {
      overwatchCost = 102000; // Strategic tier
    } else {
      overwatchCost = 300000; // Advisory tier
    }
    
    const netBenefit = totalBenefit - overwatchCost;
    const roiMultiple = totalBenefit / overwatchCost;
    const paybackMonths = (overwatchCost / (totalBenefit / 12));

    setResults({
      annualSavings: toolConsolidationSavings,
      productivityGains,
      retentionSavings,
      complianceSavings,
      totalBenefit,
      overwatchCost,
      netBenefit,
      roiMultiple,
      paybackMonths
    });
    
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const handleInputChange = (key: keyof ROIInputs, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
    setShowResults(false); // Reset results when inputs change
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-green-600/20 border-green-600/40 text-green-400 px-4 py-2">
          <Calculator className="w-4 h-4 mr-2" />
          Interactive ROI Calculator
        </Badge>
        
        <h1 className="text-3xl font-bold text-white">
          {currentLabels.title}
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {currentLabels.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <Card className="bg-card/80 border-blue-500/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-600">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">{currentLabels.inputs}</h2>
          </div>
          
          <div className="space-y-6">
            {inputFields.map((field) => (
              <div key={field.key} className="space-y-3">
                <div>
                  <Label className="text-white font-medium">{field.label}</Label>
                  <p className="text-xs text-gray-400 mt-1">{field.description}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[inputs[field.key as keyof ROIInputs]]}
                      onValueChange={(value) => handleInputChange(field.key as keyof ROIInputs, value[0])}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      className="flex-1"
                    />
                    <div className="w-24">
                      <Input
                        type="number"
                        value={inputs[field.key as keyof ROIInputs]}
                        onChange={(e) => handleInputChange(field.key as keyof ROIInputs, Number(e.target.value))}
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        className="text-right"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-blue-400 font-medium">
                      {field.type === 'currency' && formatCurrency(inputs[field.key as keyof ROIInputs])}
                      {field.type === 'percentage' && formatPercent(inputs[field.key as keyof ROIInputs])}
                      {field.type === 'number' && inputs[field.key as keyof ROIInputs].toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Button 
              onClick={calculateROI}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
            >
              <Calculator className="w-4 h-4 mr-2" />
              {currentLabels.calculate}
            </Button>
          </div>
        </Card>

        {/* Results Panel */}
        <Card className="bg-card/80 border-green-500/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-green-600">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">{currentLabels.results}</h2>
          </div>
          
          {!showResults ? (
            <div className="text-center py-12">
              <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">
                {language === 'en' 
                  ? 'Configure your company profile and click Calculate ROI to see results'
                  : 'Configura tu perfil de empresa y haz clic en Calcular ROI para ver resultados'
                }
              </p>
            </div>
          ) : results && (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-600/10 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">
                    {results.roiMultiple.toFixed(1)}:1
                  </div>
                  <div className="text-sm text-gray-400">ROI Multiple</div>
                </div>
                
                <div className="text-center p-4 bg-blue-600/10 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">
                    {Math.round(results.paybackMonths)}
                  </div>
                  <div className="text-sm text-gray-400">
                    {language === 'en' ? 'Months Payback' : 'Meses de Recuperación'}
                  </div>
                </div>
              </div>

              {/* Benefit Breakdown */}
              <div className="space-y-4">
                <h3 className="font-semibold text-white">
                  {language === 'en' ? 'Annual Benefit Breakdown' : 'Desglose de Beneficios Anuales'}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-600/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">
                        {language === 'en' ? 'Productivity Gains' : 'Ganancias de Productividad'}
                      </span>
                    </div>
                    <span className="font-medium text-purple-400">
                      {formatCurrency(results.productivityGains)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-600/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">
                        {language === 'en' ? 'Retention Savings' : 'Ahorros de Retención'}
                      </span>
                    </div>
                    <span className="font-medium text-blue-400">
                      {formatCurrency(results.retentionSavings)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-red-600/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-400" />
                      <span className="text-gray-300">
                        {language === 'en' ? 'Compliance Savings' : 'Ahorros de Cumplimiento'}
                      </span>
                    </div>
                    <span className="font-medium text-red-400">
                      {formatCurrency(results.complianceSavings)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-600/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">
                        {language === 'en' ? 'Tool Consolidation' : 'Consolidación de Herramientas'}
                      </span>
                    </div>
                    <span className="font-medium text-green-400">
                      {formatCurrency(results.annualSavings)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Total Impact */}
              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="font-bold text-white">
                    {language === 'en' ? 'Total Annual Benefit' : 'Beneficio Anual Total'}
                  </span>
                  <span className="font-bold text-green-400">
                    {formatCurrency(results.totalBenefit)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mt-1">
                  <span>OVERWATCH Investment</span>
                  <span>{formatCurrency(results.overwatchCost)}</span>
                </div>
                
                <div className="flex items-center justify-between text-xl font-bold text-white mt-2 pt-2 border-t border-gray-600">
                  <span>Net Annual Benefit</span>
                  <span className="text-green-400">{formatCurrency(results.netBenefit)}</span>
                </div>
              </div>

              {/* VC-Grade Investment Intelligence */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-white">
                    {language === 'en' ? 'Investment-Grade ROI Analysis' : 'Análisis ROI de Grado de Inversión'}
                  </h4>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-green-400 mb-2">
                      {language === 'en' ? 'VC Benchmark Comparison' : 'Comparación con Benchmarks VC'}
                    </h5>
                    <div className="space-y-1 text-gray-300">
                      <div className="flex justify-between">
                        <span>{language === 'en' ? 'ROI Multiple' : 'Múltiplo ROI'}:</span>
                        <span className={`font-medium ${
                          results.roiMultiple >= 4 ? 'text-green-400' : 
                          results.roiMultiple >= 3 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {results.roiMultiple.toFixed(1)}x {
                            results.roiMultiple >= 4 ? '(Excellent)' : 
                            results.roiMultiple >= 3 ? '(Good)' : '(Below Target)'
                          }
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>{language === 'en' ? 'Payback Period' : 'Período de Recuperación'}:</span>
                        <span className={`font-medium ${
                          results.paybackMonths <= 12 ? 'text-green-400' : 
                          results.paybackMonths <= 18 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {results.paybackMonths.toFixed(1)} {language === 'en' ? 'months' : 'meses'} {
                            results.paybackMonths <= 12 ? '(Investment Grade)' : 
                            results.paybackMonths <= 18 ? '(Acceptable)' : '(High Risk)'
                          }
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>{language === 'en' ? 'Net Benefit/Employee' : 'Beneficio Neto/Empleado'}:</span>
                        <span className="font-medium text-blue-400">
                          {formatCurrency(results.netBenefit / inputs.employees)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-purple-400 mb-2">
                      {language === 'en' ? 'Strategic Value Drivers' : 'Impulsores de Valor Estratégico'}
                    </h5>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-3 h-3 text-green-400" />
                        <span>
                          {language === 'en' 
                            ? 'Bilingual workforce management advantage'
                            : 'Ventaja de gestión de fuerza laboral bilingüe'
                          }
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-3 h-3 text-blue-400" />
                        <span>
                          {language === 'en' 
                            ? 'Advisory-grade strategic insights'
                            : 'Insights estratégicos de grado asesor'
                          }
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-3 h-3 text-purple-400" />
                        <span>
                          {language === 'en' 
                            ? 'Culture force multiplier impact'
                            : 'Impacto del multiplicador de fuerza cultural'
                          }
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-3 h-3 text-yellow-400" />
                        <span>
                          {language === 'en' 
                            ? 'Cross-border compliance automation'
                            : 'Automatización de cumplimiento transfronterizo'
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-600 text-xs text-gray-400">
                  {language === 'en' 
                    ? 'Analysis based on 2025 HCM SaaS market standards ($65B market, 9.6% CAGR) and VC evaluation criteria for investment-grade returns.'
                    : 'Análisis basado en estándares del mercado HCM SaaS 2025 (mercado $65B, 9.6% CAGR) y criterios de evaluación VC para retornos de grado de inversión.'
                  }
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  {currentLabels.download}
                </Button>
                
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <Share className="w-4 h-4 mr-2" />
                  {currentLabels.share}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Bottom CTA */}
      {showResults && results && (
        <Card className="bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10 border-green-500/30 p-6">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-white">
              {language === 'en' 
                ? `Ready to realize ${formatCurrency(results.netBenefit)} in annual value?`
                : `¿Listo para realizar ${formatCurrency(results.netBenefit)} en valor anual?`
              }
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                <Target className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Start 90-Day Pilot' : 'Iniciar Piloto de 90 Días'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                <Calculator className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Schedule Demo' : 'Agendar Demo'}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}