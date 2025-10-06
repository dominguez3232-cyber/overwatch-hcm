import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  DollarSign, Users, Target, TrendingUp, Calculator, BookOpen,
  Shield, Award, Lightbulb, AlertTriangle, CheckCircle, Eye,
  PlayCircle, BarChart3, PieChart, LineChart, Activity,
  Brain, Heart, Zap, Crown, Star, Rocket, Building, Factory,
  Briefcase, Stethoscope, Settings, Clock, Coffee, Globe,
  ArrowUp, ArrowDown, ChevronRight, Plus, Minus, Info
} from 'lucide-react';

interface EmployeeFundedIncentiveCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type ProgramStructure = 'basic' | 'quarterly' | 'tiered' | 'custom';
type ProfitabilityMetric = 'pbt' | 'net-profit' | 'profit-margin' | 'ebitda' | 'operating-profit';
type CompanySize = 'small' | 'medium' | 'large' | 'enterprise';

export function EmployeeFundedIncentiveCenter({ language, currentMode, onNavigate }: EmployeeFundedIncentiveCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'design-framework' | 'profitability-metrics' | 'case-studies' | 'implementation-guide' | 'roi-calculator' | 'success-tracking'>('overview');
  const [selectedStructure, setSelectedStructure] = useState<ProgramStructure>('basic');
  const [selectedMetric, setSelectedMetric] = useState<ProfitabilityMetric>('pbt');
  const [companySize, setCompanySize] = useState<CompanySize>('medium');

  // Calculator state
  const [calculatorData, setCalculatorData] = useState({
    annualRevenue: 5000000,
    currentProfit: 750000,
    targetProfitIncrease: 15,
    bonusPoolPercentage: 10,
    employeeCount: 50,
    averageSalary: 60000
  });

  const labels = {
    en: {
      // Navigation
      overview: "Overview",
      designFramework: "Design Framework",
      profitabilityMetrics: "Profitability Metrics",
      caseStudies: "Case Studies",
      implementationGuide: "Implementation Guide",
      roiCalculator: "ROI Calculator",
      successTracking: "Success Tracking",
      
      // Content
      title: "Employee-Funded Incentive Programs Center",
      subtitle: "Transform compensation from cost to investment using Brad Hams' Ownership Thinking principles",
      
      // Core Concepts
      rightEducation: "The Right Education",
      rightMeasures: "The Right Measures", 
      rightIncentives: "The Right Incentives",
      
      // Program Structures
      basic: "Basic Program",
      quarterly: "Quarterly Payouts",
      tiered: "Tiered Structure",
      custom: "Custom Design",
      
      // Metrics
      pbt: "Profit Before Tax",
      netProfit: "Net Profit",
      profitMargin: "Profit Margin %",
      ebitda: "EBITDA",
      operatingProfit: "Operating Profit",
      
      // Company Sizes
      small: "Small (1-25)",
      medium: "Medium (26-100)", 
      large: "Large (101-500)",
      enterprise: "Enterprise (500+)"
    },
    es: {
      // Navigation
      overview: "Vista General",
      designFramework: "Marco de Diseño",
      profitabilityMetrics: "Métricas de Rentabilidad",
      caseStudies: "Casos de Estudio",
      implementationGuide: "Guía de Implementación",
      roiCalculator: "Calculadora ROI",
      successTracking: "Seguimiento de Éxito",
      
      // Content
      title: "Centro de Programas de Incentivos Financiados por Empleados",
      subtitle: "Transformar compensación de costo a inversión usando principios de Pensamiento de Propietario de Brad Hams",
      
      // Core Concepts
      rightEducation: "La Educación Correcta",
      rightMeasures: "Las Medidas Correctas",
      rightIncentives: "Los Incentivos Correctos",
      
      // Program Structures
      basic: "Programa Básico",
      quarterly: "Pagos Trimestrales",
      tiered: "Estructura por Niveles",
      custom: "Diseño Personalizado",
      
      // Metrics
      pbt: "Ganancia Antes de Impuestos",
      netProfit: "Ganancia Neta",
      profitMargin: "Margen de Ganancia %",
      ebitda: "EBITDA",
      operatingProfit: "Ganancia Operativa",
      
      // Company Sizes
      small: "Pequeña (1-25)",
      medium: "Mediana (26-100)",
      large: "Grande (101-500)",
      enterprise: "Empresa (500+)"
    }
  };

  const currentLabels = labels[language];

  const corePrograms = {
    basic: {
      icon: Target,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700",
      description: language === 'en' 
        ? "Annual profit-sharing with simple threshold and pool distribution"
        : "Participación anual en ganancias con umbral simple y distribución de fondo",
      features: language === 'en'
        ? ["Single profit threshold", "Annual payout", "Equal or salary-proportional shares", "Self-funding design"]
        : ["Umbral de ganancia único", "Pago anual", "Acciones iguales o proporcionales al salario", "Diseño autofinanciado"],
      suitableFor: language === 'en' ? "Small to medium companies (1-100 employees)" : "Empresas pequeñas a medianas (1-100 empleados)"
    },
    quarterly: {
      icon: Clock,
      color: "text-blue-400", 
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700",
      description: language === 'en'
        ? "Frequent payouts with year-end reserve for cash flow protection"
        : "Pagos frecuentes con reserva de fin de año para protección de flujo de efectivo",
      features: language === 'en'
        ? ["Quarterly bonus payments", "50% held in reserve", "Year-end adjustment", "Enhanced engagement"]
        : ["Pagos de bonos trimestrales", "50% mantenido en reserva", "Ajuste de fin de año", "Compromiso mejorado"],
      suitableFor: language === 'en' ? "Growing companies with stable cash flow" : "Empresas en crecimiento con flujo de efectivo estable"
    },
    tiered: {
      icon: Crown,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20", 
      borderColor: "border-purple-700",
      description: language === 'en'
        ? "Multi-level profit thresholds with escalating bonus percentages"
        : "Umbrales de ganancia de múltiples niveles con porcentajes de bonos escalonados",
      features: language === 'en'
        ? ["Multiple profit thresholds", "Escalating bonus rates", "Stretch goal incentives", "Advanced engagement"]
        : ["Múltiples umbrales de ganancia", "Tasas de bonos escalonadas", "Incentivos de metas ambiciosas", "Compromiso avanzado"],
      suitableFor: language === 'en' ? "Established companies with predictable profit patterns" : "Empresas establecidas con patrones de ganancia predecibles"
    },
    custom: {
      icon: Settings,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-700", 
      description: language === 'en'
        ? "Tailored design combining multiple metrics and distribution methods"
        : "Diseño personalizado combinando múltiples métricas y métodos de distribución",
      features: language === 'en'
        ? ["Custom metric combinations", "Flexible distribution", "Industry-specific adaptations", "Complex organizations"]
        : ["Combinaciones de métricas personalizadas", "Distribución flexible", "Adaptaciones específicas de industria", "Organizaciones complejas"],
      suitableFor: language === 'en' ? "Large enterprises with complex business models" : "Grandes empresas con modelos de negocio complejos"
    }
  };

  const profitabilityMetrics = {
    pbt: {
      formula: language === 'en' ? "Revenue - All Operating Expenses (before taxes)" : "Ingresos - Todos los Gastos Operativos (antes de impuestos)",
      pros: language === 'en' 
        ? ["Simple to understand", "Directly controllable by employees", "Avoids tax law distortions", "Clear line-of-sight"]
        : ["Fácil de entender", "Directamente controlable por empleados", "Evita distorsiones de leyes fiscales", "Línea de visión clara"],
      cons: language === 'en'
        ? ["Doesn't account for tax obligations", "May ignore capital structure"]
        : ["No considera obligaciones fiscales", "Puede ignorar estructura de capital"],
      bestFor: language === 'en' ? "Most companies, especially SMBs" : "La mayoría de empresas, especialmente SMBs"
    },
    'net-profit': {
      formula: language === 'en' ? "Revenue - All Expenses Including Taxes" : "Ingresos - Todos los Gastos Incluyendo Impuestos",
      pros: language === 'en'
        ? ["True bottom line", "Comprehensive expense coverage", "Intuitive 'final profit'"]
        : ["Verdadera línea de fondo", "Cobertura integral de gastos", "Ganancia final intuitiva"],
      cons: language === 'en'
        ? ["Tax rate changes affect results", "Less employee control over taxes"]
        : ["Cambios en tasas de impuestos afectan resultados", "Menos control de empleados sobre impuestos"],
      bestFor: language === 'en' ? "Small companies with simple tax situations" : "Empresas pequeñas con situaciones fiscales simples"
    },
    'profit-margin': {
      formula: language === 'en' ? "Profit ÷ Revenue × 100" : "Ganancia ÷ Ingresos × 100",
      pros: language === 'en'
        ? ["Scales with company size", "Efficiency-focused", "Industry comparable"]
        : ["Escala con tamaño de empresa", "Enfocado en eficiencia", "Comparable por industria"],
      cons: language === 'en'
        ? ["May discourage growth", "Complex threshold setting"]
        : ["Puede desalentar crecimiento", "Configuración compleja de umbrales"],
      bestFor: language === 'en' ? "Large companies or union environments" : "Empresas grandes o entornos sindicales"
    },
    ebitda: {
      formula: language === 'en' ? "Earnings Before Interest, Taxes, Depreciation, Amortization" : "Ganancias Antes de Intereses, Impuestos, Depreciación, Amortización",
      pros: language === 'en'
        ? ["Focus on operational performance", "Excludes financing decisions", "Good for capital-intensive businesses"]
        : ["Enfoque en desempeño operacional", "Excluye decisiones de financiamiento", "Bueno para negocios intensivos en capital"],
      cons: language === 'en'
        ? ["May ignore asset replacement needs", "Less intuitive for employees"]
        : ["Puede ignorar necesidades de reemplazo de activos", "Menos intuitivo para empleados"],
      bestFor: language === 'en' ? "Manufacturing or asset-heavy industries" : "Manufactura o industrias pesadas en activos"
    },
    'operating-profit': {
      formula: language === 'en' ? "Revenue - Operating Expenses (EBIT)" : "Ingresos - Gastos Operativos (EBIT)",
      pros: language === 'en'
        ? ["Core business focus", "Excludes financing costs", "Clear operational control"]
        : ["Enfoque en negocio principal", "Excluye costos de financiamiento", "Control operacional claro"],
      cons: language === 'en'
        ? ["Ignores capital structure impact", "May be complex for small companies"]
        : ["Ignora impacto de estructura de capital", "Puede ser complejo para empresas pequeñas"],
      bestFor: language === 'en' ? "Established companies with clear operations" : "Empresas establecidas con operaciones claras"
    }
  };

  const successCaseStudies = [
    {
      company: "Whispering Pines Landscaping",
      industry: "Landscaping",
      size: "Small (15 employees)",
      result: language === 'en' ? "Profit increased from 5% to 16%" : "Ganancia aumentó de 5% a 16%",
      timeline: "2016-2022",
      keyFeatures: language === 'en'
        ? ["Monthly financial transparency", "Profit pool exceeded $200K", "Habit of winning culture"]
        : ["Transparencia financiera mensual", "Fondo de ganancias excedió $200K", "Cultura de hábito de ganar"],
      icon: Factory
    },
    {
      company: "Home Depot",
      industry: "Retail",
      size: "Large (400K+ employees)",
      result: language === 'en' ? "$409M in Success Sharing bonuses" : "$409M en bonos de Participación en Éxito",
      timeline: "20+ years",
      keyFeatures: language === 'en'
        ? ["Twice-yearly payouts", "Store-level performance", "100% store participation"]
        : ["Pagos dos veces al año", "Desempeño a nivel de tienda", "100% participación de tiendas"],
      icon: Building
    },
    {
      company: "Buffer", 
      industry: "Tech/SaaS",
      size: "Medium (100 employees)",
      result: language === 'en' ? "$300K first-year profit sharing" : "$300K participación en ganancias primer año",
      timeline: "2017-present",
      keyFeatures: language === 'en'
        ? ["8-15% of profits shared", "Public formula transparency", "Tenure-weighted distribution"]
        : ["8-15% de ganancias compartidas", "Transparencia de fórmula pública", "Distribución ponderada por antigüedad"],
      icon: Globe
    },
    {
      company: "Stellantis",
      industry: "Automotive",
      size: "Enterprise (100K+ employees)",
      result: language === 'en' ? "Thousands per employee annually" : "Miles por empleado anualmente",
      timeline: "Since 1985",
      keyFeatures: language === 'en'
        ? ["Return on Sales formula", "Union-negotiated structure", "Profit margin alignment"]
        : ["Fórmula de Retorno sobre Ventas", "Estructura negociada con sindicato", "Alineación de margen de ganancia"],
      icon: Factory
    }
  ];

  const calculateROI = () => {
    const { annualRevenue, currentProfit, targetProfitIncrease, bonusPoolPercentage, employeeCount, averageSalary } = calculatorData;
    
    const projectedProfit = currentProfit * (1 + targetProfitIncrease / 100);
    const profitIncrease = projectedProfit - currentProfit;
    const bonusPool = profitIncrease * (bonusPoolPercentage / 100);
    const averageBonus = bonusPool / employeeCount;
    const bonusAsPercentOfSalary = (averageBonus / averageSalary) * 100;
    const programROI = ((profitIncrease - bonusPool) / bonusPool) * 100;
    
    return {
      projectedProfit,
      profitIncrease, 
      bonusPool,
      averageBonus,
      bonusAsPercentOfSalary,
      programROI
    };
  };

  const roiResults = calculateROI();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="px-6 lg:px-20 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{currentLabels.title}</h1>
            <p className="text-gray-400">{currentLabels.subtitle}</p>
          </div>
          
          <Button className="bg-green-600 hover:bg-green-700">
            <PlayCircle className="w-4 h-4 mr-2" />
            Launch Program Designer
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="design-framework">{currentLabels.designFramework}</TabsTrigger>
            <TabsTrigger value="profitability-metrics">{currentLabels.profitabilityMetrics}</TabsTrigger>
            <TabsTrigger value="case-studies">{currentLabels.caseStudies}</TabsTrigger>
            <TabsTrigger value="implementation-guide">{currentLabels.implementationGuide}</TabsTrigger>
            <TabsTrigger value="roi-calculator">{currentLabels.roiCalculator}</TabsTrigger>
            <TabsTrigger value="success-tracking">{currentLabels.successTracking}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ownership Thinking Foundation */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="w-6 h-6 text-blue-400" />
                  Ownership Thinking Foundation
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {language === 'en'
                    ? "Brad Hams' methodology transforms entitlement culture into ownership mentality through three core principles:"
                    : "La metodología de Brad Hams transforma la cultura de derecho en mentalidad de propietario a través de tres principios centrales:"
                  }
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="w-5 h-5 text-green-400" />
                      <h4 className="text-green-400 font-bold">{currentLabels.rightEducation}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? "Teach employees how the business works—financials, value creation, and their role impact"
                        : "Enseñar a empleados cómo funciona el negocio—finanzas, creación de valor e impacto de su rol"
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="w-5 h-5 text-blue-400" />
                      <h4 className="text-blue-400 font-bold">{currentLabels.rightMeasures}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? "Use transparent KPIs and forecasting to build accountability and visibility"
                        : "Usar KPIs transparentes y pronósticos para construir responsabilidad y visibilidad"
                      }
                    </p>
                  </div>

                  <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-5 h-5 text-purple-400" />
                      <h4 className="text-purple-400 font-bold">{currentLabels.rightIncentives}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {language === 'en'
                        ? "Design self-funding incentive plans that align employee behavior with business goals"
                        : "Diseñar planes de incentivos autofinanciados que alineen comportamiento de empleados con metas de negocio"
                      }
                    </p>
                  </div>
                </div>
              </Card>

              {/* Key Success Metrics */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  Key Success Metrics
                </h3>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">200%</div>
                    <div className="text-sm text-gray-400">
                      {language === 'en' ? "Better employee retention" : "Mejor retención de empleados"}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                      <div className="text-xl font-bold text-blue-400">2x</div>
                      <div className="text-xs text-gray-400">
                        {language === 'en' ? "Profitability increase" : "Aumento de rentabilidad"}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-purple-900/20 rounded-lg">
                      <div className="text-xl font-bold text-purple-400">90%+</div>
                      <div className="text-xs text-gray-400">
                        {language === 'en' ? "Employee satisfaction" : "Satisfacción de empleados"}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <h4 className="font-medium text-orange-400 mb-2">
                      {language === 'en' ? "Whispering Pines Success Story" : "Historia de Éxito Whispering Pines"}
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• {language === 'en' ? "Profit margin: 5% → 16%" : "Margen de ganancia: 5% → 16%"}</li>
                      <li>• {language === 'en' ? "Bonus pool: $200K+ annually" : "Fondo de bonos: $200K+ anualmente"}</li>
                      <li>• {language === 'en' ? "Timeline: 6 years" : "Cronograma: 6 años"}</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('design-framework')}
                >
                  <Target className="w-4 h-4" />
                  Design Program
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('roi-calculator')}
                >
                  <Calculator className="w-4 h-4" />
                  Calculate ROI
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('case-studies')}
                >
                  <Award className="w-4 h-4" />
                  View Success Stories
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => setActiveTab('implementation-guide')}
                >
                  <Rocket className="w-4 h-4" />
                  Implementation Guide
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Design Framework */}
          <TabsContent value="design-framework" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Program Design Framework</h3>
              <div className="flex gap-2">
                {Object.keys(corePrograms).map((structure) => (
                  <Button
                    key={structure}
                    variant={selectedStructure === structure ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStructure(structure as ProgramStructure)}
                  >
                    {currentLabels[structure as keyof typeof currentLabels]}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Selected Structure Details */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const Icon = corePrograms[selectedStructure].icon;
                    return <Icon className={`w-8 h-8 ${corePrograms[selectedStructure].color}`} />;
                  })()}
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {currentLabels[selectedStructure as keyof typeof currentLabels]}
                    </h4>
                    <p className="text-gray-400">Program Structure</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className={`p-4 ${corePrograms[selectedStructure].bgColor} border ${corePrograms[selectedStructure].borderColor} rounded-lg`}>
                    <h5 className="font-medium text-white mb-2">Description</h5>
                    <p className="text-gray-300 text-sm">{corePrograms[selectedStructure].description}</p>
                  </div>

                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <h5 className="font-medium text-gray-400 mb-3">Key Features</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {corePrograms[selectedStructure].features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <h5 className="font-medium text-blue-400 mb-2">Suitable For</h5>
                    <p className="text-gray-300 text-sm">{corePrograms[selectedStructure].suitableFor}</p>
                  </div>
                </div>
              </Card>

              {/* Design Specifications */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h4 className="text-lg font-bold text-white mb-6">Design Specifications</h4>

                {selectedStructure === 'basic' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Profit Threshold Setting</h5>
                      <p className="text-gray-300 text-sm mb-2">Establish baseline profit that covers:</p>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• Fair return to owners/investors</li>
                        <li>• Debt service obligations</li>
                        <li>• Planned capital investments</li>
                        <li>• Cash flow buffer (3-6 months)</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Pool Distribution</h5>
                      <p className="text-gray-300 text-sm mb-2">Typical approaches:</p>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• Equal shares: Simple, promotes teamwork</li>
                        <li>• Salary proportional: Reflects responsibility levels</li>
                        <li>• Target: 5-10% of annual salary at stretch goals</li>
                      </ul>
                    </div>
                  </div>
                )}

                {selectedStructure === 'quarterly' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Payout Schedule</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Q1-Q3: Pay 50% of earned bonus</li>
                        <li>• Hold 50% in reserve until year-end</li>
                        <li>• Year-end: Adjust based on annual results</li>
                        <li>• Protects cash flow and ensures self-funding</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Engagement Benefits</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• More immediate positive reinforcement</li>
                        <li>• Real-time behavior shaping</li>
                        <li>• Retention mechanism through reserves</li>
                        <li>• Maintains momentum through year</li>
                      </ul>
                    </div>
                  </div>
                )}

                {selectedStructure === 'tiered' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Threshold Structure</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Tier 1: 5% of excess profit (minimum threshold)</li>
                        <li>• Tier 2: 10% of excess profit (target threshold)</li>
                        <li>• Tier 3: 15% of excess profit (stretch threshold)</li>
                        <li>• Each tier builds on previous levels</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Motivation Psychology</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Progressive rewards create stretch goals</li>
                        <li>• Higher engagement through gamification</li>
                        <li>• Appeals to high-performers</li>
                        <li>• Drives continuous improvement</li>
                      </ul>
                    </div>
                  </div>
                )}

                {selectedStructure === 'custom' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Advanced Options</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Multiple metric combinations (profit + quality)</li>
                        <li>• Department-specific modifications</li>
                        <li>• Geographic or division-based pools</li>
                        <li>• Performance gates and modifiers</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Complexity Warnings</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Requires extensive employee education</li>
                        <li>• Higher administrative burden</li>
                        <li>• Risk of confusion and mistrust</li>
                        <li>• Best for mature organizations</li>
                      </ul>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          {/* Profitability Metrics */}
          <TabsContent value="profitability-metrics" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-white">Profitability Metrics Selection</h3>
              <div className="flex gap-2 flex-wrap">
                {Object.keys(profitabilityMetrics).map((metric) => (
                  <Button
                    key={metric}
                    variant={selectedMetric === metric ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedMetric(metric as ProfitabilityMetric)}
                  >
                    {currentLabels[metric.replace('-', '') as keyof typeof currentLabels]}
                  </Button>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gray-800 border-gray-700">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Metric Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="w-8 h-8 text-green-400" />
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {currentLabels[selectedMetric.replace('-', '') as keyof typeof currentLabels]}
                      </h4>
                      <p className="text-gray-400">Profitability Metric Analysis</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Formula</h5>
                      <p className="text-gray-300 text-sm font-mono">{profitabilityMetrics[selectedMetric].formula}</p>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">Advantages</h5>
                      <div className="space-y-1">
                        {profitabilityMetrics[selectedMetric].pros.map((pro, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {pro}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-3">Considerations</h5>
                      <div className="space-y-1">
                        {profitabilityMetrics[selectedMetric].cons.map((con, idx) => (
                          <div key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <AlertTriangle className="w-3 h-3 text-red-400" />
                            {con}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Best For</h5>
                      <p className="text-gray-300 text-sm">{profitabilityMetrics[selectedMetric].bestFor}</p>
                    </div>
                  </div>
                </div>

                {/* Implementation Guidelines */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Implementation Guidelines</h4>
                  
                  {selectedMetric === 'pbt' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Threshold Setting</h5>
                        <p className="text-gray-300 text-sm mb-2">Calculate minimum PBT needed for:</p>
                        <ul className="text-xs text-gray-400 space-y-1">
                          <li>• Owner return: 15-20% of equity</li>
                          <li>• Debt service: All required payments</li>
                          <li>• Reinvestment: 5-10% of revenue</li>
                          <li>• Buffer: 3-6 months expenses</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Communication Tips</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Show monthly PBT progress</li>
                          <li>• Explain what drives PBT changes</li>
                          <li>• Connect daily actions to PBT impact</li>
                          <li>• Use simple financial scorecards</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedMetric === 'profit-margin' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Margin Targets</h5>
                        <p className="text-gray-300 text-sm mb-2">Industry benchmarks:</p>
                        <ul className="text-xs text-gray-400 space-y-1">
                          <li>• Software/SaaS: 20-25%</li>
                          <li>• Professional Services: 15-20%</li>
                          <li>• Manufacturing: 8-15%</li>
                          <li>• Retail: 3-8%</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-900/50 rounded-lg">
                        <h5 className="font-medium text-white mb-2">Dual Focus Strategy</h5>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Combine margin % with revenue growth</li>
                          <li>• Avoid margin optimization at expense of growth</li>
                          <li>• Set minimum revenue thresholds</li>
                          <li>• Reward quality of earnings</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Add similar implementation guides for other metrics */}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Case Studies */}
          <TabsContent value="case-studies" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-400" />
                Success Case Studies
              </h3>

              <div className="grid lg:grid-cols-2 gap-6">
                {successCaseStudies.map((study, idx) => {
                  const Icon = study.icon;
                  return (
                    <div key={idx} className="p-6 bg-gray-900/50 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-6 h-6 text-blue-400" />
                        <div>
                          <h4 className="font-bold text-white">{study.company}</h4>
                          <p className="text-gray-400 text-sm">{study.industry} • {study.size}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-3 bg-green-900/20 border border-green-700 rounded">
                          <div className="text-green-400 font-medium text-sm">Key Result</div>
                          <div className="text-white font-bold">{study.result}</div>
                          <div className="text-gray-400 text-xs">{study.timeline}</div>
                        </div>

                        <div>
                          <h5 className="font-medium text-gray-400 mb-2">Key Features</h5>
                          <div className="space-y-1">
                            {study.keyFeatures.map((feature, featureIdx) => (
                              <div key={featureIdx} className="text-sm text-gray-300 flex items-center gap-2">
                                <Star className="w-3 h-3 text-yellow-400" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Industry Analysis */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Industry Implementation Patterns</h4>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h5 className="font-medium text-blue-400 mb-2">Manufacturing</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Focus on operational efficiency</li>
                    <li>• EBITDA or Operating Profit metrics</li>
                    <li>• Safety and quality gates</li>
                    <li>• Union partnership models</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h5 className="font-medium text-green-400 mb-2">Professional Services</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Billable utilization focus</li>
                    <li>• Client satisfaction metrics</li>
                    <li>• Partner/associate tiers</li>
                    <li>• Knowledge sharing rewards</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h5 className="font-medium text-purple-400 mb-2">Tech/SaaS</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Growth and profitability balance</li>
                    <li>• Customer success metrics</li>
                    <li>• Innovation time allocation</li>
                    <li>• Equity complement programs</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <h5 className="font-medium text-orange-400 mb-2">Retail/Service</h5>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Store/location-level performance</li>
                    <li>• Customer experience scores</li>
                    <li>• Inventory efficiency metrics</li>
                    <li>• Seasonal adjustment models</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* ROI Calculator */}
          <TabsContent value="roi-calculator" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-green-400" />
                Employee-Funded Incentive ROI Calculator
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Parameters */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Input Parameters</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Annual Revenue ($)
                      </label>
                      <input
                        type="number"
                        value={calculatorData.annualRevenue}
                        onChange={(e) => setCalculatorData({...calculatorData, annualRevenue: Number(e.target.value)})}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Current Annual Profit ($)
                      </label>
                      <input
                        type="number"
                        value={calculatorData.currentProfit}
                        onChange={(e) => setCalculatorData({...calculatorData, currentProfit: Number(e.target.value)})}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Target Profit Increase (%)
                      </label>
                      <input
                        type="number"
                        value={calculatorData.targetProfitIncrease}
                        onChange={(e) => setCalculatorData({...calculatorData, targetProfitIncrease: Number(e.target.value)})}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Bonus Pool Percentage (%)
                      </label>
                      <input
                        type="number"
                        value={calculatorData.bonusPoolPercentage}
                        onChange={(e) => setCalculatorData({...calculatorData, bonusPoolPercentage: Number(e.target.value)})}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Employee Count
                      </label>
                      <input
                        type="number"
                        value={calculatorData.employeeCount}
                        onChange={(e) => setCalculatorData({...calculatorData, employeeCount: Number(e.target.value)})}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Average Salary ($)
                      </label>
                      <input
                        type="number"
                        value={calculatorData.averageSalary}
                        onChange={(e) => setCalculatorData({...calculatorData, averageSalary: Number(e.target.value)})}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Projected Results</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Program ROI</h5>
                      <div className="text-2xl font-bold text-white">
                        {roiResults.programROI.toFixed(1)}%
                      </div>
                      <p className="text-gray-400 text-sm">Return on bonus investment</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-900/20 rounded-lg">
                        <div className="text-blue-400 font-medium text-sm">Projected Profit</div>
                        <div className="text-white font-bold">${roiResults.projectedProfit.toLocaleString()}</div>
                      </div>
                      <div className="p-3 bg-blue-900/20 rounded-lg">
                        <div className="text-blue-400 font-medium text-sm">Profit Increase</div>
                        <div className="text-white font-bold">${roiResults.profitIncrease.toLocaleString()}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-purple-900/20 rounded-lg">
                        <div className="text-purple-400 font-medium text-sm">Total Bonus Pool</div>
                        <div className="text-white font-bold">${roiResults.bonusPool.toLocaleString()}</div>
                      </div>
                      <div className="p-3 bg-purple-900/20 rounded-lg">
                        <div className="text-purple-400 font-medium text-sm">Average Bonus</div>
                        <div className="text-white font-bold">${roiResults.averageBonus.toLocaleString()}</div>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Bonus Impact</h5>
                      <div className="text-lg font-bold text-white mb-1">
                        {roiResults.bonusAsPercentOfSalary.toFixed(1)}%
                      </div>
                      <p className="text-gray-400 text-sm">of average salary</p>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-2">Key Assumptions</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Program achieves target profit increase</li>
                        <li>• All employees participate equally</li>
                        <li>• No additional administrative costs</li>
                        <li>• Self-funding requirement maintained</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Implementation Guide */}
          <TabsContent value="implementation-guide" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-blue-400" />
                Implementation Roadmap
              </h3>

              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-400 mb-4">Phase 1: Foundation (Months 1-2)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Leadership Alignment</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Secure executive commitment</li>
                        <li>• Define program structure</li>
                        <li>• Set profitability metrics</li>
                        <li>• Calculate baseline thresholds</li>
                        <li>• Develop communication plan</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">System Preparation</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Review financial systems</li>
                        <li>• Design tracking mechanisms</li>
                        <li>• Create calculation templates</li>
                        <li>• Prepare legal documentation</li>
                        <li>• Plan administrative processes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="p-6 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="text-lg font-bold text-green-400 mb-4">Phase 2: Education & Launch (Months 3-4)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Employee Education</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Financial literacy workshops</li>
                        <li>• Open-book management introduction</li>
                        <li>• Program mechanics explanation</li>
                        <li>• Q&A sessions</li>
                        <li>• Manager training</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Program Launch</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• All-hands announcement</li>
                        <li>• Initial scoreboards setup</li>
                        <li>• Monthly progress meetings</li>
                        <li>• Feedback collection</li>
                        <li>• Early wins celebration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-400 mb-4">Phase 3: Monitoring & Adjustment (Months 5-12)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Performance Tracking</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Monthly financial reviews</li>
                        <li>• Progress scoreboard updates</li>
                        <li>• Employee engagement surveys</li>
                        <li>• Behavior change observations</li>
                        <li>• ROI measurement</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Continuous Improvement</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Program refinement</li>
                        <li>• Communication enhancement</li>
                        <li>• Success story sharing</li>
                        <li>• Challenge addressing</li>
                        <li>• First payout celebration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="p-6 bg-orange-900/20 border border-orange-700 rounded-lg">
                  <h4 className="text-lg font-bold text-orange-400 mb-4">Phase 4: Optimization & Scale (Year 2+)</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-white mb-3">Program Maturation</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Target refinement</li>
                        <li>• Payout optimization</li>
                        <li>• Advanced metrics introduction</li>
                        <li>• Cultural embedding</li>
                        <li>• Long-term planning</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-3">Strategic Integration</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Performance management alignment</li>
                        <li>• Career development integration</li>
                        <li>• Innovation program connection</li>
                        <li>• Succession planning inclusion</li>
                        <li>• Best practice documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Common Pitfalls */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Common Pitfalls & Solutions</h4>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <h5 className="font-medium text-red-400 mb-2">Pitfall: Entitlement Mentality</h5>
                    <p className="text-gray-300 text-sm mb-2">Paying bonuses when results don't warrant it</p>
                    <div className="text-green-400 text-sm">
                      <strong>Solution:</strong> Hold the line - no profit = no bonus, consistently
                    </div>
                  </div>

                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <h5 className="font-medium text-red-400 mb-2">Pitfall: Complex Formulas</h5>
                    <p className="text-gray-300 text-sm mb-2">Over-complicated metrics that confuse employees</p>
                    <div className="text-green-400 text-sm">
                      <strong>Solution:</strong> Keep it simple - one primary metric, transparent calculation
                    </div>
                  </div>

                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <h5 className="font-medium text-red-400 mb-2">Pitfall: Poor Communication</h5>
                    <p className="text-gray-300 text-sm mb-2">Lack of financial education and transparency</p>
                    <div className="text-green-400 text-sm">
                      <strong>Solution:</strong> Invest in education, share financials regularly
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <h5 className="font-medium text-red-400 mb-2">Pitfall: Short-term Focus</h5>
                    <p className="text-gray-300 text-sm mb-2">Gaming metrics for immediate bonuses</p>
                    <div className="text-green-400 text-sm">
                      <strong>Solution:</strong> Balance short-term with long-term health indicators
                    </div>
                  </div>

                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <h5 className="font-medium text-red-400 mb-2">Pitfall: Unrealistic Targets</h5>
                    <p className="text-gray-300 text-sm mb-2">Setting unachievable goals in first year</p>
                    <div className="text-green-400 text-sm">
                      <strong>Solution:</strong> Start conservative, let employees taste early success
                    </div>
                  </div>

                  <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <h5 className="font-medium text-red-400 mb-2">Pitfall: Lack of Celebration</h5>
                    <p className="text-gray-300 text-sm mb-2">Missing opportunities to recognize achievements</p>
                    <div className="text-green-400 text-sm">
                      <strong>Solution:</strong> Celebrate milestones, make payouts special events
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Success Tracking */}
          <TabsContent value="success-tracking" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-green-400" />
                Success Tracking Dashboard
              </h3>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Financial Metrics */}
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="font-medium text-green-400 mb-4">Financial Performance</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Profit Growth</span>
                      <span className="text-green-400 font-bold">+34%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Revenue Growth</span>
                      <span className="text-green-400 font-bold">+18%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Cost Efficiency</span>
                      <span className="text-green-400 font-bold">+12%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                </div>

                {/* Employee Engagement */}
                <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="font-medium text-blue-400 mb-4">Employee Engagement</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Financial Literacy</span>
                      <span className="text-blue-400 font-bold">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Program Understanding</span>
                      <span className="text-blue-400 font-bold">93%</span>
                    </div>
                    <Progress value={93} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Ownership Mindset</span>
                      <span className="text-blue-400 font-bold">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>

                {/* Cultural Impact */}
                <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="font-medium text-purple-400 mb-4">Cultural Transformation</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Employee Retention</span>
                      <span className="text-purple-400 font-bold">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Collaboration Score</span>
                      <span className="text-purple-400 font-bold">89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Innovation Ideas</span>
                      <span className="text-purple-400 font-bold">+156%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Key Performance Indicators */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Leading Indicators</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Behavioral Changes</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Cost-saving ideas submitted: 47/month</li>
                        <li>• Cross-department collaboration: +62%</li>
                        <li>• Financial meeting attendance: 94%</li>
                        <li>• Voluntary overtime requests: +23%</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Process Improvements</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Customer satisfaction scores: 4.7/5</li>
                        <li>• Quality defect rates: -38%</li>
                        <li>• On-time delivery: 97%</li>
                        <li>• Waste reduction initiatives: 23 active</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Lagging Indicators</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Financial Results</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Annual profit increase: $284,000</li>
                        <li>• Bonus pool generated: $42,600</li>
                        <li>• Average employee bonus: $852</li>
                        <li>• Program ROI: 566%</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-900/50 rounded-lg">
                      <h5 className="font-medium text-gray-400 mb-3">Organizational Health</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Employee Net Promoter Score: +67</li>
                        <li>• Internal promotion rate: 78%</li>
                        <li>• Training program completion: 96%</li>
                        <li>• Performance review scores: 4.2/5</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Monthly Tracking Template */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h4 className="text-lg font-bold text-white mb-6">Monthly Tracking Template</h4>
              
              <div className="space-y-6">
                <div className="grid lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">$847K</div>
                    <div className="text-sm text-gray-400">YTD Profit</div>
                    <div className="text-xs text-green-400">+23% vs target</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-1">$76K</div>
                    <div className="text-sm text-gray-400">Bonus Pool</div>
                    <div className="text-xs text-blue-400">Available for payout</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">$1,520</div>
                    <div className="text-sm text-gray-400">Avg Bonus</div>
                    <div className="text-xs text-purple-400">Per employee YTD</div>
                  </div>
                  
                  <div className="text-center p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400 mb-1">89%</div>
                    <div className="text-sm text-gray-400">Engagement</div>
                    <div className="text-xs text-orange-400">Program satisfaction</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h5 className="font-medium text-gray-400 mb-3">Monthly Action Items</h5>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Update financial scoreboards</li>
                      <li>• Conduct progress review meetings</li>
                      <li>• Collect employee feedback</li>
                      <li>• Identify improvement opportunities</li>
                    </ul>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Celebrate monthly milestones</li>
                      <li>• Share success stories</li>
                      <li>• Address any concerns</li>
                      <li>• Plan next month's initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}