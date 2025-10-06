import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  DollarSign, FileText, AlertTriangle, Shield, Calculator, 
  Clock, CheckCircle, XCircle, TrendingUp, Users, Building,
  Gavel, Receipt, CreditCard, Scale, Eye, Brain, Target,
  BarChart3, Activity, Settings, Download, RefreshCw, Filter,
  Search, Calendar, Award, Briefcase, Factory, Home, Heart,
  Plus, Minus, Info, Zap, Star, Crown, PieChart, LineChart
} from 'lucide-react';

interface PayTaxesComplianceCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

type ComplianceArea = 'federal-state-tax' | 'unemployment-insurance' | 'pay-equity' | 'tax-credit-optimization' | 'flsa-compliance';
type RiskLevel = 'critical' | 'high' | 'medium' | 'low';
type ComplianceStatus = 'compliant' | 'at-risk' | 'non-compliant' | 'unknown';

interface ComplianceMetric {
  id: string;
  name: string;
  nameEs: string;
  area: ComplianceArea;
  riskLevel: RiskLevel;
  status: ComplianceStatus;
  potentialPenalty: number;
  description: string;
  descriptionEs: string;
  requirements: string[];
  requirementsEs: string[];
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
}

export function PayTaxesComplianceCenter({ language, currentMode, onNavigate }: PayTaxesComplianceCenterProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'federal-state-tax' | 'unemployment-insurance' | 'pay-equity' | 'tax-optimization' | 'flsa-compliance' | 'risk-assessment' | 'action-center'>('overview');
  const [selectedArea, setSelectedArea] = useState<ComplianceArea>('federal-state-tax');
  const [complianceStatus, setComplianceStatus] = useState<Record<string, ComplianceStatus>>({});

  const labels = {
    en: {
      // Navigation
      overview: "Overview",
      federalStateTax: "Federal & State Tax",
      unemploymentInsurance: "Unemployment Insurance", 
      payEquity: "Pay Equity",
      taxOptimization: "Tax Credit Optimization",
      flsaCompliance: "FLSA Compliance",
      riskAssessment: "Risk Assessment",
      actionCenter: "Action Center",
      
      // Content
      title: "Pay & Taxes Compliance Center",
      subtitle: "Comprehensive compliance management for payroll, taxes, and regulatory requirements",
      
      // Areas
      federalStateTaxFull: "Federal & State Tax Filings",
      unemploymentInsuranceFull: "State Unemployment Insurance & Compensation",
      payEquityFull: "Pay Equity Policies & Documentation",
      taxCreditOptimization: "Tax Credit Optimization",
      flsaComplianceFull: "Fair Labor Standards Act (FLSA)",
      
      // Status
      compliant: "Compliant",
      atRisk: "At Risk",
      nonCompliant: "Non-Compliant",
      unknown: "Unknown",
      
      // Risk Levels
      critical: "Critical",
      high: "High",
      medium: "Medium",
      low: "Low"
    },
    es: {
      // Navigation
      overview: "Vista General",
      federalStateTax: "Impuestos Federales y Estatales",
      unemploymentInsurance: "Seguro de Desempleo",
      payEquity: "Equidad Salarial",
      taxOptimization: "Optimización de Créditos Fiscales", 
      flsaCompliance: "Cumplimiento FLSA",
      riskAssessment: "Evaluación de Riesgos",
      actionCenter: "Centro de Acción",
      
      // Content
      title: "Centro de Cumplimiento de Nómina e Impuestos",
      subtitle: "Gestión integral de cumplimiento para nómina, impuestos y requisitos regulatorios",
      
      // Areas
      federalStateTaxFull: "Declaraciones de Impuestos Federales y Estatales",
      unemploymentInsuranceFull: "Seguro Estatal de Desempleo y Compensación",
      payEquityFull: "Políticas y Documentación de Equidad Salarial",
      taxCreditOptimization: "Optimización de Créditos Fiscales",
      flsaComplianceFull: "Ley de Normas Laborales Justas (FLSA)",
      
      // Status
      compliant: "Conforme",
      atRisk: "En Riesgo", 
      nonCompliant: "No Conforme",
      unknown: "Desconocido",
      
      // Risk Levels
      critical: "Crítico",
      high: "Alto",
      medium: "Medio",
      low: "Bajo"
    }
  };

  const currentLabels = labels[language];

  const complianceAreas = {
    'federal-state-tax': {
      icon: FileText,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-700",
      title: language === 'en' ? "Federal & State Tax Filings" : "Declaraciones de Impuestos Federales y Estatales",
      description: language === 'en' 
        ? "Tax filing compliance, penalty avoidance, and audit preparation"
        : "Cumplimiento de declaraciones fiscales, prevención de multas y preparación para auditorías",
      risks: language === 'en'
        ? [
            "Failure-to-file penalty: 5% of unpaid taxes per month (max 25%)",
            "IRS audit costs: $2,000 to $10,000",
            "Legal action fines: thousands to hundreds of thousands",
            "Interest accrual on unpaid taxes and penalties",
            "Operational disruptions affecting productivity"
          ]
        : [
            "Multa por no presentar: 5% de impuestos no pagados por mes (máx 25%)",
            "Costos de auditoría IRS: $2,000 a $10,000",
            "Multas por acción legal: miles a cientos de miles",
            "Acumulación de intereses en impuestos y multas no pagados",
            "Interrupciones operacionales que afectan productividad"
          ],
      requirements: language === 'en'
        ? [
            "Accurate and timely federal tax filings",
            "State tax compliance for all jurisdictions",
            "Quarterly estimated tax payments",
            "Audit documentation and record keeping",
            "Interest and penalty calculation tracking"
          ]
        : [
            "Declaraciones fiscales federales precisas y oportunas",
            "Cumplimiento fiscal estatal para todas las jurisdicciones",
            "Pagos trimestrales de impuestos estimados",
            "Documentación de auditoría y mantenimiento de registros",
            "Seguimiento de cálculos de intereses y multas"
          ]
    },
    'unemployment-insurance': {
      icon: Users,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-700",
      title: language === 'en' ? "State Unemployment Insurance & Compensation" : "Seguro Estatal de Desempleo y Compensación",
      description: language === 'en'
        ? "Texas UI requirements, penalty avoidance, and tax rate optimization"
        : "Requisitos de UI de Texas, prevención de multas y optimización de tasas fiscales",
      risks: language === 'en'
        ? [
            "Texas penalty: 10% of unpaid tax per month (max 50%)",
            "Interest rate: 1% per month on unpaid amounts",
            "Increased tax rates: 0.5% to 2% surcharge",
            "Legal action costs: $5,000 to $50,000+",
            "Reputation damage and business impact"
          ]
        : [
            "Multa de Texas: 10% de impuesto no pagado por mes (máx 50%)",
            "Tasa de interés: 1% por mes en montos no pagados",
            "Tasas fiscales incrementadas: sobrecargo de 0.5% a 2%",
            "Costos de acción legal: $5,000 a $50,000+",
            "Daño reputacional e impacto empresarial"
          ],
      requirements: language === 'en'
        ? [
            "Timely UI tax payments and filings",
            "Accurate wage reporting",
            "Employee classification compliance",
            "Claims management and response",
            "Rate optimization strategies"
          ]
        : [
            "Pagos y declaraciones oportunas de impuestos UI",
            "Reporte preciso de salarios",
            "Cumplimiento de clasificación de empleados",
            "Gestión y respuesta a reclamaciones",
            "Estrategias de optimización de tasas"
          ]
    },
    'pay-equity': {
      icon: Scale,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700",
      title: language === 'en' ? "Pay Equity Policies & Documentation" : "Políticas y Documentación de Equidad Salarial",
      description: language === 'en'
        ? "Equal pay compliance, documentation, and fairness policies"
        : "Cumplimiento de pago igualitario, documentación y políticas de equidad",
      risks: language === 'en'
        ? [
            "Equal Pay Act violations and penalties",
            "Title VII Civil Rights Act compliance",
            "Employee lawsuits and legal costs",
            "Reputation damage and talent loss",
            "Salary compression and turnover"
          ]
        : [
            "Violaciones de la Ley de Pago Igualitario y multas",
            "Cumplimiento del Título VII de la Ley de Derechos Civiles",
            "Demandas de empleados y costos legales",
            "Daño reputacional y pérdida de talento",
            "Compresión salarial y rotación"
          ],
      requirements: language === 'en'
        ? [
            "Pay equity policy development",
            "Regular compensation analysis",
            "Job classification and pay grade systems",
            "Documentation and audit trails",
            "Training and communication programs"
          ]
        : [
            "Desarrollo de políticas de equidad salarial",
            "Análisis regular de compensación",
            "Sistemas de clasificación de puestos y grados salariales",
            "Documentación y pistas de auditoría",
            "Programas de entrenamiento y comunicación"
          ]
    },
    'tax-credit-optimization': {
      icon: CreditCard,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700",
      title: language === 'en' ? "Tax Credit Optimization" : "Optimización de Créditos Fiscales",
      description: language === 'en'
        ? "Maximize available tax credits and incentives"
        : "Maximizar créditos fiscales e incentivos disponibles",
      risks: language === 'en'
        ? [
            "Missed tax credit opportunities",
            "Incorrect credit calculations",
            "Documentation inadequacies",
            "Compliance deadline failures",
            "Lost revenue opportunities"
          ]
        : [
            "Oportunidades de créditos fiscales perdidas",
            "Cálculos incorrectos de créditos",
            "Inadecuaciones de documentación",
            "Fallas en fechas límite de cumplimiento",
            "Oportunidades de ingresos perdidas"
          ],
      requirements: language === 'en'
        ? [
            "Research and Development credits",
            "Work Opportunity Tax Credits (WOTC)",
            "Employee Retention Credits",
            "State and local incentives",
            "Documentation and filing procedures"
          ]
        : [
            "Créditos de Investigación y Desarrollo",
            "Créditos Fiscales de Oportunidad de Trabajo (WOTC)",
            "Créditos de Retención de Empleados",
            "Incentivos estatales y locales",
            "Procedimientos de documentación y presentación"
          ]
    },
    'flsa-compliance': {
      icon: Gavel,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-700",
      title: language === 'en' ? "Fair Labor Standards Act (FLSA)" : "Ley de Normas Laborales Justas (FLSA)",
      description: language === 'en'
        ? "Wage, hour, and overtime compliance requirements"
        : "Requisitos de cumplimiento de salarios, horas y tiempo extra",
      risks: language === 'en'
        ? [
            "Civil penalties up to $1,000 per violation",
            "Child labor violations: up to $10,000 per worker",
            "Back wages and liquidated damages",
            "Department of Labor investigations",
            "Employee lawsuits and class actions"
          ]
        : [
            "Multas civiles hasta $1,000 por violación",
            "Violaciones de trabajo infantil: hasta $10,000 por trabajador",
            "Salarios atrasados y daños liquidados",
            "Investigaciones del Departamento de Trabajo",
            "Demandas de empleados y acciones colectivas"
          ],
      requirements: language === 'en'
        ? [
            "Minimum wage compliance",
            "Overtime calculation and payment",
            "Employee classification (exempt/non-exempt)",
            "Record keeping requirements",
            "Break and meal period policies"
          ]
        : [
            "Cumplimiento de salario mínimo",
            "Cálculo y pago de tiempo extra",
            "Clasificación de empleados (exento/no exento)",
            "Requisitos de mantenimiento de registros",
            "Políticas de descansos y períodos de comida"
          ]
    }
  };

  const complianceMetrics: ComplianceMetric[] = [
    {
      id: 'federal-tax-filing',
      name: 'Federal Tax Filing Compliance',
      nameEs: 'Cumplimiento de Declaración Fiscal Federal',
      area: 'federal-state-tax',
      riskLevel: 'critical',
      status: 'at-risk',
      potentialPenalty: 25000,
      description: 'Federal tax filing accuracy and timeliness',
      descriptionEs: 'Precisión y puntualidad de declaración fiscal federal',
      requirements: ['Quarterly filings', 'Annual returns', 'Payment schedules'],
      requirementsEs: ['Declaraciones trimestrales', 'Declaraciones anuales', 'Cronogramas de pago'],
      icon: FileText,
      color: 'text-red-400',
      bgColor: 'bg-red-900/20',
      borderColor: 'border-red-700'
    },
    {
      id: 'state-tax-compliance',
      name: 'State Tax Compliance',
      nameEs: 'Cumplimiento Fiscal Estatal',
      area: 'federal-state-tax',
      riskLevel: 'high',
      status: 'compliant',
      potentialPenalty: 15000,
      description: 'Multi-state tax compliance requirements',
      descriptionEs: 'Requisitos de cumplimiento fiscal multi-estatales',
      requirements: ['State registrations', 'Filing schedules', 'Rate changes'],
      requirementsEs: ['Registros estatales', 'Cronogramas de presentación', 'Cambios de tasas'],
      icon: Building,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-700'
    },
    {
      id: 'texas-ui-compliance',
      name: 'Texas UI Compliance',
      nameEs: 'Cumplimiento UI de Texas',
      area: 'unemployment-insurance',
      riskLevel: 'high',
      status: 'at-risk',
      potentialPenalty: 35000,
      description: 'Texas unemployment insurance requirements',
      descriptionEs: 'Requisitos de seguro de desempleo de Texas',
      requirements: ['Monthly payments', 'Wage reporting', 'Claims response'],
      requirementsEs: ['Pagos mensuales', 'Reporte de salarios', 'Respuesta a reclamaciones'],
      icon: Users,
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/20',
      borderColor: 'border-orange-700'
    },
    {
      id: 'pay-equity-analysis',
      name: 'Pay Equity Analysis',
      nameEs: 'Análisis de Equidad Salarial',
      area: 'pay-equity',
      riskLevel: 'medium',
      status: 'compliant',
      potentialPenalty: 50000,
      description: 'Regular pay equity assessments',
      descriptionEs: 'Evaluaciones regulares de equidad salarial',
      requirements: ['Annual analysis', 'Policy documentation', 'Training programs'],
      requirementsEs: ['Análisis anual', 'Documentación de políticas', 'Programas de entrenamiento'],
      icon: Scale,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-700'
    },
    {
      id: 'flsa-classification',
      name: 'FLSA Job Classification',
      nameEs: 'Clasificación de Empleos FLSA',
      area: 'flsa-compliance',
      riskLevel: 'high',
      status: 'non-compliant',
      potentialPenalty: 45000,
      description: 'Employee exempt/non-exempt classification',
      descriptionEs: 'Clasificación exento/no exento de empleados',
      requirements: ['Job analysis', 'Salary thresholds', 'Duties tests'],
      requirementsEs: ['Análisis de puestos', 'Umbrales salariales', 'Pruebas de funciones'],
      icon: Gavel,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-700'
    }
  ];

  const getStatusColor = (status: ComplianceStatus) => {
    switch (status) {
      case 'compliant': return 'text-green-400 border-green-400';
      case 'at-risk': return 'text-yellow-400 border-yellow-400';
      case 'non-compliant': return 'text-red-400 border-red-400';
      case 'unknown': return 'text-gray-400 border-gray-400';
    }
  };

  const getRiskColor = (risk: RiskLevel) => {
    switch (risk) {
      case 'critical': return 'text-red-500 border-red-500';
      case 'high': return 'text-red-400 border-red-400';
      case 'medium': return 'text-yellow-400 border-yellow-400';
      case 'low': return 'text-green-400 border-green-400';
    }
  };

  const getTotalPotentialPenalties = () => {
    return complianceMetrics.reduce((sum, metric) => sum + metric.potentialPenalty, 0);
  };

  const getComplianceScore = () => {
    const compliantCount = complianceMetrics.filter(m => m.status === 'compliant').length;
    return (compliantCount / complianceMetrics.length) * 100;
  };

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
            <Shield className="w-4 h-4 mr-2" />
            Compliance Audit
          </Button>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8">
            <TabsTrigger value="overview">{currentLabels.overview}</TabsTrigger>
            <TabsTrigger value="federal-state-tax">{currentLabels.federalStateTax}</TabsTrigger>
            <TabsTrigger value="unemployment-insurance">{currentLabels.unemploymentInsurance}</TabsTrigger>
            <TabsTrigger value="pay-equity">{currentLabels.payEquity}</TabsTrigger>
            <TabsTrigger value="tax-optimization">{currentLabels.taxOptimization}</TabsTrigger>
            <TabsTrigger value="flsa-compliance">{currentLabels.flsaCompliance}</TabsTrigger>
            <TabsTrigger value="risk-assessment">{currentLabels.riskAssessment}</TabsTrigger>
            <TabsTrigger value="action-center">{currentLabels.actionCenter}</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {/* Key Metrics */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="font-medium text-gray-400 mb-4">Compliance Score</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  {getComplianceScore().toFixed(1)}%
                </div>
                <div className="text-sm text-gray-500">Overall compliance rating</div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="font-medium text-gray-400 mb-4">Potential Penalties</h3>
                <div className="text-2xl font-bold text-red-400 mb-2">
                  ${getTotalPotentialPenalties().toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">At-risk exposure</div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="font-medium text-gray-400 mb-4">Compliance Areas</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2">5</div>
                <div className="text-sm text-gray-500">Active monitoring</div>
              </Card>

              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="font-medium text-gray-400 mb-4">Action Items</h3>
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  {complianceMetrics.filter(m => m.status !== 'compliant').length}
                </div>
                <div className="text-sm text-gray-500">Requiring attention</div>
              </Card>
            </div>

            {/* Compliance Areas Overview */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Critical Areas */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  Critical Compliance Areas
                </h3>
                
                <div className="space-y-4">
                  {Object.entries(complianceAreas).map(([key, area]) => {
                    const Icon = area.icon;
                    const metrics = complianceMetrics.filter(m => m.area === key);
                    const criticalMetrics = metrics.filter(m => m.riskLevel === 'critical' || m.status === 'non-compliant');
                    
                    return (
                      <div 
                        key={key} 
                        className={`p-4 ${area.bgColor} border ${area.borderColor} rounded-lg cursor-pointer transition-all hover:scale-105`}
                        onClick={() => {
                          setSelectedArea(key as ComplianceArea);
                          setActiveTab(key as any);
                        }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className={`w-5 h-5 ${area.color}`} />
                          <h4 className="font-bold text-white">{area.title}</h4>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{area.description}</p>
                        
                        {criticalMetrics.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-red-400 border-red-400 text-xs">
                              {criticalMetrics.length} Critical Item{criticalMetrics.length > 1 ? 's' : ''}
                            </Badge>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Compliance Status Dashboard */}
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                  Compliance Status Dashboard
                </h3>

                <div className="space-y-4">
                  {complianceMetrics.map((metric) => {
                    const Icon = metric.icon;
                    
                    return (
                      <div key={metric.id} className="p-4 bg-gray-900/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Icon className={`w-5 h-5 ${metric.color}`} />
                            <h4 className="font-medium text-white text-sm">
                              {language === 'en' ? metric.name : metric.nameEs}
                            </h4>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={`text-xs ${getStatusColor(metric.status)}`}>
                              {currentLabels[metric.status as keyof typeof currentLabels]}
                            </Badge>
                            <Badge variant="outline" className={`text-xs ${getRiskColor(metric.riskLevel)}`}>
                              {currentLabels[metric.riskLevel as keyof typeof currentLabels]}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs">
                            {language === 'en' ? metric.description : metric.descriptionEs}
                          </span>
                          <span className="text-red-400 font-bold text-sm">
                            ${metric.potentialPenalty.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="grid lg:grid-cols-4 gap-4">
                <Button 
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  onClick={() => setActiveTab('risk-assessment')}
                >
                  <AlertTriangle className="w-4 h-4" />
                  Risk Assessment
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setActiveTab('federal-state-tax')}
                >
                  <FileText className="w-4 h-4" />
                  Tax Compliance
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveTab('tax-optimization')}
                >
                  <CreditCard className="w-4 h-4" />
                  Tax Credits
                </Button>
                
                <Button 
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveTab('action-center')}
                >
                  <Shield className="w-4 h-4" />
                  Action Center
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Federal & State Tax */}
          <TabsContent value="federal-state-tax" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-red-400" />
                Federal & State Tax Filings
              </h3>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Risk Overview */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Compliance Risks & Penalties</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">Failure-to-File Penalties</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        IRS imposes 5% of unpaid taxes for each month late, up to maximum of 25%
                      </p>
                      <div className="text-lg font-bold text-white">Up to 25% of unpaid taxes</div>
                    </div>

                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Audit Costs</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        IRS audit costs vary by complexity and scope
                      </p>
                      <div className="text-lg font-bold text-white">$2,000 - $10,000</div>
                    </div>

                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">Legal Action Fines</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Severe non-compliance can result in substantial fines
                      </p>
                      <div className="text-lg font-bold text-white">$1,000 - $100,000+</div>
                    </div>
                  </div>
                </div>

                {/* Compliance Requirements */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Compliance Requirements</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-3">Federal Tax Obligations</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Quarterly Form 941 filings</li>
                        <li>• Annual Form 940 (FUTA)</li>
                        <li>• Timely tax deposits</li>
                        <li>• Year-end forms (W-2, 1099)</li>
                        <li>• Accurate record keeping</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">State Tax Requirements</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• State unemployment tax (SUTA)</li>
                        <li>• State income tax withholding</li>
                        <li>• Multi-state registration</li>
                        <li>• Quarterly wage reports</li>
                        <li>• Rate notifications and changes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Implementation Steps */}
              <div className="p-6 bg-gray-900/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-6">Implementation Steps</h4>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="p-4 bg-blue-600 rounded-lg">
                    <h5 className="font-medium text-white mb-2">1. Assessment & Setup</h5>
                    <ul className="text-blue-100 text-sm space-y-1">
                      <li>• Review current filing status</li>
                      <li>• Identify compliance gaps</li>
                      <li>• Set up automated systems</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-600 rounded-lg">
                    <h5 className="font-medium text-white mb-2">2. Process Optimization</h5>
                    <ul className="text-green-100 text-sm space-y-1">
                      <li>• Implement filing schedules</li>
                      <li>• Automate calculations</li>
                      <li>• Establish review procedures</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-600 rounded-lg">
                    <h5 className="font-medium text-white mb-2">3. Monitoring & Maintenance</h5>
                    <ul className="text-purple-100 text-sm space-y-1">
                      <li>• Regular compliance checks</li>
                      <li>• Penalty avoidance monitoring</li>
                      <li>• Audit preparedness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Unemployment Insurance */}
          <TabsContent value="unemployment-insurance" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-orange-400" />
                State Unemployment Insurance & Compensation
              </h3>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Texas-Specific Penalties */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Texas UI Penalties & Consequences</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Late Payment Penalties</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        10% of unpaid tax amount for each month late
                      </p>
                      <div className="text-lg font-bold text-white">Up to 50% maximum</div>
                    </div>

                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">Interest on Unpaid Taxes</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Interest accrues monthly on unpaid amounts
                      </p>
                      <div className="text-lg font-bold text-white">1% per month</div>
                    </div>

                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <h5 className="font-medium text-yellow-400 mb-2">Increased Tax Rates</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Surcharge on standard tax rate for non-compliance
                      </p>
                      <div className="text-lg font-bold text-white">0.5% - 2% surcharge</div>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Legal Action Costs</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Defense against state enforcement actions
                      </p>
                      <div className="text-lg font-bold text-white">$5,000 - $50,000+</div>
                    </div>
                  </div>
                </div>

                {/* Compliance Framework */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">UI Compliance Framework</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">Payment & Filing</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Quarterly wage reports</li>
                        <li>• Timely tax payments</li>
                        <li>• Rate notice responses</li>
                        <li>• Electronic filing compliance</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-3">Claims Management</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Timely claim responses</li>
                        <li>• Separation documentation</li>
                        <li>• Protest procedures</li>
                        <li>• Appeal processes</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-3">Rate Optimization</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Experience rating management</li>
                        <li>• Voluntary contribution options</li>
                        <li>• Base period monitoring</li>
                        <li>• Cost allocation strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Pay Equity */}
          <TabsContent value="pay-equity" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6 text-blue-400" />
                Pay Equity Policies & Documentation
              </h3>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Legal Framework */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Legal Compliance Framework</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Equal Pay Act of 1963</h5>
                      <p className="text-gray-300 text-sm">
                        Mandates equal pay for equal work regardless of gender, race, or protected characteristics
                      </p>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Title VII Civil Rights Act</h5>
                      <p className="text-gray-300 text-sm">
                        Prohibits employment discrimination and requires fair compensation practices
                      </p>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">State Pay Equity Laws</h5>
                      <p className="text-gray-300 text-sm">
                        Additional state requirements for pay transparency and equity reporting
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Benefits */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Business Benefits</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">Talent & Productivity</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Higher employee morale</li>
                        <li>• Improved retention rates</li>
                        <li>• Enhanced productivity</li>
                        <li>• Better talent attraction</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-3">Risk Mitigation</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Reduced legal exposure</li>
                        <li>• Avoided salary compression</li>
                        <li>• Lower turnover costs</li>
                        <li>• Protected reputation</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-3">Economic Impact</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Economic empowerment</li>
                        <li>• Market competitiveness</li>
                        <li>• Social responsibility</li>
                        <li>• Brand enhancement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Tax Credit Optimization */}
          <TabsContent value="tax-optimization" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-green-400" />
                Tax Credit Optimization
              </h3>

              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Available Credits */}
                <div className="p-6 bg-green-900/20 border border-green-700 rounded-lg">
                  <h4 className="text-lg font-bold text-green-400 mb-4">Research & Development</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Federal and state R&D tax credits for qualifying activities
                  </p>
                  <div className="text-2xl font-bold text-white mb-2">Up to 20%</div>
                  <div className="text-sm text-gray-400">of qualified expenses</div>
                </div>

                <div className="p-6 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-400 mb-4">Work Opportunity Tax Credit</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Credits for hiring individuals from targeted groups
                  </p>
                  <div className="text-2xl font-bold text-white mb-2">$2,400 - $9,600</div>
                  <div className="text-sm text-gray-400">per qualified hire</div>
                </div>

                <div className="p-6 bg-purple-900/20 border border-purple-700 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-400 mb-4">Employee Retention</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Credits for retaining employees during qualifying periods
                  </p>
                  <div className="text-2xl font-bold text-white mb-2">Up to $7,000</div>
                  <div className="text-sm text-gray-400">per employee per quarter</div>
                </div>
              </div>

              {/* Optimization Strategy */}
              <div className="p-6 bg-gray-900/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-6">Credit Optimization Strategy</h4>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-medium text-white mb-4">Identification & Analysis</h5>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                        <span>Comprehensive credit eligibility review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                        <span>Activity and expense qualification analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                        <span>Federal and state credit comparison</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                        <span>Documentation requirements assessment</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-white mb-4">Implementation & Maintenance</h5>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                        <span>Credit calculation and filing procedures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                        <span>Ongoing qualification monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                        <span>Audit defense and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                        <span>Annual optimization review</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* FLSA Compliance */}
          <TabsContent value="flsa-compliance" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Gavel className="w-6 h-6 text-purple-400" />
                Fair Labor Standards Act (FLSA) Compliance
              </h3>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Violation Penalties */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Violation Penalties</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-2">Minimum Wage & Overtime Violations</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Civil penalties for repeated or willful violations
                      </p>
                      <div className="text-lg font-bold text-white">Up to $1,000 per violation</div>
                    </div>

                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <h5 className="font-medium text-orange-400 mb-2">Child Labor Violations</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Penalties for employing young workers in violation
                      </p>
                      <div className="text-lg font-bold text-white">Up to $10,000 per worker</div>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Back Wages & Damages</h5>
                      <p className="text-gray-300 text-sm mb-2">
                        Unpaid wages plus equal amount in liquidated damages
                      </p>
                      <div className="text-lg font-bold text-white">200% of back wages</div>
                    </div>
                  </div>
                </div>

                {/* Compliance Requirements */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Key Compliance Areas</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-3">Wage & Hour Requirements</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Federal minimum wage compliance</li>
                        <li>• Overtime calculation (1.5x after 40 hours)</li>
                        <li>• Regular rate of pay determination</li>
                        <li>• Workweek definition and tracking</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">Employee Classification</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Exempt vs. non-exempt determination</li>
                        <li>• Salary basis requirements</li>
                        <li>• Job duties analysis</li>
                        <li>• Salary threshold compliance</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-3">Record Keeping</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Time and attendance records</li>
                        <li>• Wage payment documentation</li>
                        <li>• Employee information files</li>
                        <li>• 3-year retention requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Risk Assessment */}
          <TabsContent value="risk-assessment" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Comprehensive Risk Assessment
              </h3>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Risk Matrix */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Risk Impact Matrix</h4>
                  
                  <div className="space-y-4">
                    {complianceMetrics.map((metric) => {
                      const Icon = metric.icon;
                      
                      return (
                        <div key={metric.id} className={`p-4 ${metric.bgColor} border ${metric.borderColor} rounded-lg`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <Icon className={`w-5 h-5 ${metric.color}`} />
                              <h5 className="font-medium text-white">
                                {language === 'en' ? metric.name : metric.nameEs}
                              </h5>
                            </div>
                            <Badge variant="outline" className={`text-xs ${getRiskColor(metric.riskLevel)}`}>
                              {currentLabels[metric.riskLevel as keyof typeof currentLabels]}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-lg font-bold text-white">
                                ${metric.potentialPenalty.toLocaleString()}
                              </div>
                              <div className="text-xs text-gray-400">Max Penalty</div>
                            </div>
                            <div>
                              <div className={`text-lg font-bold ${getStatusColor(metric.status).split(' ')[0]}`}>
                                {currentLabels[metric.status as keyof typeof currentLabels]}
                              </div>
                              <div className="text-xs text-gray-400">Status</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-blue-400">
                                {Math.floor(Math.random() * 100)}%
                              </div>
                              <div className="text-xs text-gray-400">Likelihood</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Risk Mitigation Plan */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Risk Mitigation Plan</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <h5 className="font-medium text-red-400 mb-3">Immediate Actions (0-30 days)</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Complete FLSA classification audit</li>
                        <li>• Review federal tax filing status</li>
                        <li>• Assess UI payment compliance</li>
                        <li>• Document current pay equity policies</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <h5 className="font-medium text-yellow-400 mb-3">Short-term (30-90 days)</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Implement automated compliance monitoring</li>
                        <li>• Establish filing and payment schedules</li>
                        <li>• Conduct pay equity analysis</li>
                        <li>• Optimize tax credit strategies</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-3">Long-term (90+ days)</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Ongoing compliance optimization</li>
                        <li>• Regular risk assessments</li>
                        <li>• Advanced analytics and reporting</li>
                        <li>• Continuous improvement processes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Summary */}
              <div className="p-6 bg-gray-900/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-6">Risk Summary & Recommendations</h4>
                
                <div className="grid lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-red-900/20 rounded-lg">
                    <div className="text-xl font-bold text-red-400">
                      ${getTotalPotentialPenalties().toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">Total Risk Exposure</div>
                  </div>
                  
                  <div className="text-center p-3 bg-yellow-900/20 rounded-lg">
                    <div className="text-xl font-bold text-yellow-400">
                      {complianceMetrics.filter(m => m.status === 'at-risk').length}
                    </div>
                    <div className="text-xs text-gray-400">Areas At Risk</div>
                  </div>
                  
                  <div className="text-center p-3 bg-green-900/20 rounded-lg">
                    <div className="text-xl font-bold text-green-400">
                      {getComplianceScore().toFixed(0)}%
                    </div>
                    <div className="text-xs text-gray-400">Compliance Score</div>
                  </div>
                  
                  <div className="text-center p-3 bg-blue-900/20 rounded-lg">
                    <div className="text-xl font-bold text-blue-400">90</div>
                    <div className="text-xs text-gray-400">Days to Full Compliance</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-2">
                    Strategic HR compliance transforms regulatory burden into competitive advantage
                  </div>
                  <p className="text-gray-300">
                    Comprehensive compliance management protects against penalties while optimizing tax benefits and operational efficiency
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Action Center */}
          <TabsContent value="action-center" className="space-y-6">
            <Card className="p-6 bg-gray-800 border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-400" />
                Compliance Action Center
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Priority Actions */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">Priority Actions</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-red-400">Critical: FLSA Classification Review</h5>
                          <p className="text-gray-300 text-sm mb-2">
                            Non-compliant job classifications expose company to $45,000 in potential penalties
                          </p>
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Start Classification Audit
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-900/20 border border-orange-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-orange-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-orange-400">High: Texas UI Compliance</h5>
                          <p className="text-gray-300 text-sm mb-2">
                            At-risk status could result in $35,000 penalties and increased tax rates
                          </p>
                          <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                            Review UI Status
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-yellow-400 mt-0.5" />
                        <div>
                          <h5 className="font-medium text-yellow-400">Medium: Federal Tax Filing</h5>
                          <p className="text-gray-300 text-sm mb-2">
                            Ensure timely filings to avoid $25,000 in potential penalties
                          </p>
                          <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                            Check Filing Status
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Roadmap */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6">90-Day Implementation Roadmap</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">Days 1-30: Critical Remediation</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Complete FLSA classification audit</li>
                        <li>• Address non-compliant areas immediately</li>
                        <li>• Review all current filing statuses</li>
                        <li>• Implement emergency procedures</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">Days 31-60: System Implementation</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Deploy automated compliance monitoring</li>
                        <li>• Establish systematic filing procedures</li>
                        <li>• Implement pay equity policies</li>
                        <li>• Optimize tax credit strategies</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Days 61-90: Optimization & Monitoring</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Fine-tune compliance systems</li>
                        <li>• Establish ongoing monitoring protocols</li>
                        <li>• Implement continuous improvement</li>
                        <li>• Plan for scale and growth</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Wins */}
              <div className="mt-8 p-6 bg-gray-900/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-6">Quick Wins (7 Days)</h4>
                
                <div className="grid lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-600 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-white mx-auto mb-2" />
                    <h5 className="font-medium text-white mb-1">Compliance Checklist</h5>
                    <p className="text-green-100 text-xs">Immediate assessment tool</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-600 rounded-lg">
                    <FileText className="w-8 h-8 text-white mx-auto mb-2" />
                    <h5 className="font-medium text-white mb-1">Filing Calendar</h5>
                    <p className="text-blue-100 text-xs">Automated deadline tracking</p>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-600 rounded-lg">
                    <Calculator className="w-8 h-8 text-white mx-auto mb-2" />
                    <h5 className="font-medium text-white mb-1">Penalty Calculator</h5>
                    <p className="text-purple-100 text-xs">Risk exposure analysis</p>
                  </div>
                  
                  <div className="text-center p-4 bg-orange-600 rounded-lg">
                    <Award className="w-8 h-8 text-white mx-auto mb-2" />
                    <h5 className="font-medium text-white mb-1">Credit Optimizer</h5>
                    <p className="text-orange-100 text-xs">Tax benefit identification</p>
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