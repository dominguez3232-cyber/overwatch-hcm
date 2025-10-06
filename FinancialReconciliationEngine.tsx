import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Calculator,
  TrendingUp,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Eye,
  Download,
  Upload,
  ArrowRight,
  ArrowUpDown,
  Target,
  Activity,
  BarChart3,
  FileText,
  Clock,
  Shield,
  Zap,
  Brain,
  Link,
  Database,
  GitBranch,
  Search,
  Filter,
  Settings
} from 'lucide-react';

interface FinancialReconciliationEngineProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate?: (view: string) => void;
}

interface ReconciliationItem {
  id: string;
  module: string;
  type: 'DirectReconciliation' | 'ReconciledFlow' | 'VarianceAnalysis' | 'AuditTrail' | 'OperationalDrift' | 'AccrualReconciliation';
  status: 'reconciled' | 'variance' | 'pending' | 'failed';
  source: string[];
  target: string[];
  amount: number;
  variance?: number;
  lastReconciled: string;
  caption: {
    en: string;
    es: string;
  };
  metrics: Record<string, number>;
  confidence: number;
}

interface ReconciliationMetrics {
  totalReconciliations: number;
  successRate: number;
  averageVariance: number;
  pendingItems: number;
  lastRunTime: string;
  nextScheduled: string;
}

export function FinancialReconciliationEngine({ 
  language, 
  currentMode, 
  onNavigate 
}: FinancialReconciliationEngineProps) {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [isAutoReconciling, setIsAutoReconciling] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Simulate real-time updates
  useEffect(() => {
    if (isAutoReconciling) {
      const interval = setInterval(() => {
        setLastUpdated(new Date());
      }, 45000); // Update every 45 seconds
      
      return () => clearInterval(interval);
    }
  }, [isAutoReconciling]);

  const labels = {
    en: {
      title: "Financial Reconciliation Engine",
      subtitle: "AI-Powered Financial Integrity & Audit Trail Management",
      tagline: "Real-time reconciliation across ERP, HCM, EPM, and CRM systems",
      
      // Tabs
      dashboard: "Reconciliation Dashboard",
      realTime: "Real-Time Monitoring",
      analytics: "Variance Analytics",
      driftAnalysis: "Operational Drift",
      accrualTracking: "Accrual Tracking",
      auditTrail: "Audit Trail",
      settings: "Configuration",
      
      // Dashboard
      dashboardTitle: "Financial Reconciliation Control Center",
      dashboardDesc: "Comprehensive oversight of financial data integrity across all systems",
      totalReconciliations: "Total Reconciliations",
      successRate: "Success Rate",
      averageVariance: "Avg Variance",
      pendingItems: "Pending Items",
      lastRun: "Last Run",
      nextScheduled: "Next Scheduled",
      
      // Reconciliation Types
      directReconciliation: "Direct Reconciliation",
      reconciledFlow: "Reconciled Flow",
      varianceAnalysis: "Variance Analysis",
      auditTrail: "Audit Trail",
      operationalDrift: "Operational Drift",
      accrualReconciliation: "Accrual Reconciliation",
      
      // Status
      reconciled: "Reconciled",
      variance: "Variance",
      pending: "Pending",
      failed: "Failed",
      
      // Real-Time Monitoring
      realTimeTitle: "Live Financial Reconciliation Monitoring",
      realTimeDesc: "Real-time tracking of financial data movements and reconciliations",
      autoReconciliation: "Auto Reconciliation",
      manualReview: "Manual Review Required",
      systemStatus: "System Status",
      
      // Analytics
      analyticsTitle: "Financial Variance Analytics & Insights",
      analyticsDesc: "AI-powered analysis of reconciliation patterns and variance trends",
      varianceTrends: "Variance Trends",
      reconciliationEfficiency: "Reconciliation Efficiency",
      riskAssessment: "Risk Assessment",
      
      // Drift Analysis
      driftAnalysisTitle: "Operational Drift Detection & Analysis",
      driftAnalysisDesc: "Real-time monitoring of operational performance drift patterns",
      cashCollectionEfficiency: "Cash Collection Efficiency",
      arTurnover: "AR Turnover Analysis",
      driftTrends: "Drift Trends",
      collectionMetrics: "Collection Metrics",
      arAging: "AR Aging Analysis",
      driftAlerts: "Drift Alerts",
      
      // Accrual Tracking
      accrualTrackingTitle: "Tax & Expense Accrual Reconciliation",
      accrualTrackingDesc: "Real-time tracking of accruals, reversals, and adjustments across all accounting periods",
      taxAccruals: "Tax Accruals",
      expenseAccruals: "Expense Accruals",
      accrualTrends: "Accrual Trends",
      reversalTracking: "Reversal Tracking",
      periodClose: "Period Close Status",
      accrualVariances: "Accrual Variances",
      
      // Audit Trail
      auditTitle: "Financial Audit Trail & Compliance",
      auditDesc: "Complete audit trail for financial reconciliations and compliance reporting",
      complianceStatus: "Compliance Status",
      auditReports: "Audit Reports",
      regulatoryRequirements: "Regulatory Requirements",
      
      // Actions
      runReconciliation: "Run Reconciliation",
      viewDetails: "View Details",
      exportReport: "Export Report",
      reviewVariance: "Review Variance",
      approveReconciliation: "Approve Reconciliation",
      generateAuditReport: "Generate Audit Report",
      
      // Metrics
      confidenceLevel: "Confidence Level",
      varianceThreshold: "Variance Threshold",
      automationRate: "Automation Rate",
      processingTime: "Processing Time",
      
      // System Messages
      allReconciliationsComplete: "All Reconciliations Complete",
      variancesDetected: "Variances Detected",
      systemProcessing: "System Processing",
      manualReviewRequired: "Manual Review Required",
      lastUpdated: "Last Updated",
      autoMode: "Auto Mode"
    },
    es: {
      title: "Motor de Reconciliación Financiera",
      subtitle: "Gestión de Integridad Financiera y Rastro de Auditoría Impulsada por IA",
      tagline: "Reconciliación en tiempo real a través de sistemas ERP, HCM, EPM y CRM",
      
      // Tabs
      dashboard: "Panel de Reconciliación",
      realTime: "Monitoreo en Tiempo Real",
      analytics: "Analítica de Varianzas",
      driftAnalysis: "Deriva Operacional",
      accrualTracking: "Seguimiento de Devengos",
      auditTrail: "Rastro de Auditoría",
      settings: "Configuración",
      
      // Dashboard
      dashboardTitle: "Centro de Control de Reconciliación Financiera",
      dashboardDesc: "Supervisión integral de la integridad de datos financieros en todos los sistemas",
      totalReconciliations: "Total Reconciliaciones",
      successRate: "Tasa de Éxito",
      averageVariance: "Varianza Promedio",
      pendingItems: "Elementos Pendientes",
      lastRun: "Última Ejecución",
      nextScheduled: "Próxima Programada",
      
      // Reconciliation Types
      directReconciliation: "Reconciliación Directa",
      reconciledFlow: "Flujo Reconciliado",
      varianceAnalysis: "Análisis de Varianza",
      auditTrail: "Rastro de Auditoría",
      operationalDrift: "Deriva Operacional",
      accrualReconciliation: "Reconciliación de Devengos",
      
      // Status
      reconciled: "Reconciliado",
      variance: "Varianza",
      pending: "Pendiente",
      failed: "Fallido",
      
      // Real-Time Monitoring
      realTimeTitle: "Monitoreo de Reconciliación Financiera en Vivo",
      realTimeDesc: "Seguimiento en tiempo real de movimientos de datos financieros y reconciliaciones",
      autoReconciliation: "Reconciliación Automática",
      manualReview: "Revisión Manual Requerida",
      systemStatus: "Estado del Sistema",
      
      // Analytics
      analyticsTitle: "Analítica de Varianza Financiera e Insights",
      analyticsDesc: "Análisis impulsado por IA de patrones de reconciliación y tendencias de varianza",
      varianceTrends: "Tendencias de Varianza",
      reconciliationEfficiency: "Eficiencia de Reconciliación",
      riskAssessment: "Evaluación de Riesgo",
      
      // Drift Analysis
      driftAnalysisTitle: "Detección y Análisis de Deriva Operacional",
      driftAnalysisDesc: "Monitoreo en tiempo real de patrones de deriva del rendimiento operacional",
      cashCollectionEfficiency: "Eficiencia de Cobranza",
      arTurnover: "Análisis de Rotación CxC",
      driftTrends: "Tendencias de Deriva",
      collectionMetrics: "Métricas de Cobranza",
      arAging: "Análisis de Antigüedad CxC",
      driftAlerts: "Alertas de Deriva",
      
      // Accrual Tracking
      accrualTrackingTitle: "Reconciliación de Devengos de Impuestos y Gastos",
      accrualTrackingDesc: "Seguimiento en tiempo real de devengos, reversiones y ajustes en todos los períodos contables",
      taxAccruals: "Devengos Fiscales",
      expenseAccruals: "Devengos de Gastos",
      accrualTrends: "Tendencias de Devengos",
      reversalTracking: "Seguimiento de Reversiones",
      periodClose: "Estado de Cierre de Período",
      accrualVariances: "Varianzas de Devengos",
      
      // Audit Trail
      auditTitle: "Rastro de Auditoría Financiera y Cumplimiento",
      auditDesc: "Rastro de auditoría completo para reconciliaciones financieras y reportes de cumplimiento",
      complianceStatus: "Estado de Cumplimiento",
      auditReports: "Reportes de Auditoría",
      regulatoryRequirements: "Requisitos Regulatorios",
      
      // Actions
      runReconciliation: "Ejecutar Reconciliación",
      viewDetails: "Ver Detalles",
      exportReport: "Exportar Reporte",
      reviewVariance: "Revisar Varianza",
      approveReconciliation: "Aprobar Reconciliación",
      generateAuditReport: "Generar Reporte de Auditoría",
      
      // Metrics
      confidenceLevel: "Nivel de Confianza",
      varianceThreshold: "Umbral de Varianza",
      automationRate: "Tasa de Automatización",
      processingTime: "Tiempo de Procesamiento",
      
      // System Messages
      allReconciliationsComplete: "Todas las Reconciliaciones Completas",
      variancesDetected: "Varianzas Detectadas",
      systemProcessing: "Sistema Procesando",
      manualReviewRequired: "Revisión Manual Requerida",
      lastUpdated: "Última Actualización",
      autoMode: "Modo Automático"
    }
  };

  const currentLabels = labels[language];

  // Mock reconciliation data including the provided examples
  const reconciliationItems: ReconciliationItem[] = [
    {
      id: "erp_cash_reconciliation",
      module: "ERP_Financials",
      type: "DirectReconciliation",
      status: "reconciled",
      source: ["CashFlowStatement"],
      target: ["BalanceSheet"],
      amount: 700000,
      lastReconciled: "5 minutes ago",
      caption: {
        en: "Cash increased by $200,000 from operations. Beginning: $500,000 → Ending: $700,000.",
        es: "El efectivo aumentó en $200,000 por operaciones. Inicial: $500,000 → Final: $700,000."
      },
      metrics: {
        beginningCash: 500000,
        changeInCash: 200000,
        endingCash: 700000
      },
      confidence: 100
    },
    {
      id: "erp_ar_drift",
      module: "ERP_Financials",
      type: "OperationalDrift",
      status: "variance",
      source: ["IncomeStatement", "CashFlowStatement"],
      target: ["BalanceSheet"],
      amount: 1350000,
      variance: 150000,
      lastReconciled: "8 minutes ago",
      caption: {
        en: "AR increased from $1,200,000 to $1,350,000. $2,000,000 collected vs $2,100,000 billed.",
        es: "Las cuentas por cobrar aumentaron de $1,200,000 a $1,350,000. Se cobraron $2,000,000 frente a $2,100,000 facturados."
      },
      metrics: {
        beginningAR: 1200000,
        endingAR: 1350000,
        collections: 2000000,
        revenue: 2100000
      },
      confidence: 96
    },
    {
      id: "erp_retained_earnings_flow",
      module: "ERP_Financials",
      type: "ReconciledFlow",
      status: "reconciled",
      source: ["IncomeStatement"],
      target: ["BalanceSheet"],
      amount: 250000,
      lastReconciled: "12 minutes ago",
      caption: {
        en: "Net Profit of $570,000 flows into Retained Earnings. $100,000 paid as dividends. Ending retained earnings: $250,000.",
        es: "La utilidad neta de $570,000 se transfiere a ganancias retenidas. Se pagaron $100,000 en dividendos. Ganancias retenidas finales: $250,000."
      },
      metrics: {
        netProfit: 570000,
        dividendsPaid: 100000,
        retainedEarnings: 250000
      },
      confidence: 98
    },
    {
      id: "hcm_payroll_reconciliation",
      module: "HCM_Payroll",
      type: "DirectReconciliation",
      status: "variance",
      source: ["PayrollRegister"],
      target: ["GeneralLedger"],
      amount: 450000,
      variance: 2500,
      lastReconciled: "1 hour ago",
      caption: {
        en: "Payroll expenses reconciliation shows $2,500 variance. Benefits allocation requires review.",
        es: "La reconciliación de gastos de nómina muestra una varianza de $2,500. La asignación de beneficios requiere revisión."
      },
      metrics: {
        grossPay: 380000,
        benefits: 45000,
        taxes: 25000,
        variance: 2500
      },
      confidence: 94
    },
    {
      id: "epm_budget_variance",
      module: "EPM_Planning",
      type: "VarianceAnalysis",
      status: "pending",
      source: ["BudgetPlan"],
      target: ["ActualResults"],
      amount: 1200000,
      variance: 45000,
      lastReconciled: "2 hours ago",
      caption: {
        en: "Q4 budget vs actual variance of $45,000. Revenue exceeded plan by 3.8%.",
        es: "Varianza Q4 presupuesto vs real de $45,000. Los ingresos superaron el plan en 3.8%."
      },
      metrics: {
        budgetedRevenue: 1155000,
        actualRevenue: 1200000,
        variance: 45000,
        variancePercent: 3.8
      },
      confidence: 92
    },
    {
      id: "crm_commission_reconciliation",
      module: "CRM_Commissions",
      type: "ReconciledFlow",
      status: "reconciled",
      source: ["SalesCommissions"],
      target: ["PayrollSystem"],
      amount: 125000,
      lastReconciled: "30 minutes ago",
      caption: {
        en: "Sales commission reconciliation complete. $125,000 processed for Q4 payouts.",
        es: "Reconciliación de comisiones de ventas completa. $125,000 procesados para pagos Q4."
      },
      metrics: {
        salesRevenue: 2500000,
        commissionRate: 5.0,
        totalCommissions: 125000
      },
      confidence: 99
    },
    {
      id: "erp_tax_accrual_tracker",
      module: "ERP_Financials",
      type: "AccrualReconciliation",
      status: "reconciled",
      source: ["IncomeStatement"],
      target: ["BalanceSheet"],
      amount: 200000,
      lastReconciled: "15 minutes ago",
      caption: {
        en: "Taxes Due increased from $100,000 to $200,000. Income tax expense: $200,000.",
        es: "Los impuestos por pagar aumentaron de $100,000 a $200,000. Gasto por impuesto sobre la renta: $200,000."
      },
      metrics: {
        beginningTaxesDue: 100000,
        endingTaxesDue: 200000,
        incomeTaxExpense: 200000
      },
      confidence: 100
    }
  ];

  // Mock metrics
  const reconciliationMetrics: ReconciliationMetrics = {
    totalReconciliations: 247,
    successRate: 96.8,
    averageVariance: 0.15,
    pendingItems: 3,
    lastRunTime: "14:35 UTC",
    nextScheduled: "15:00 UTC"
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'reconciled':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'variance':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-blue-400" />;
      case 'failed':
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <RefreshCw className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reconciled':
        return 'text-green-400';
      case 'variance':
        return 'text-yellow-400';
      case 'pending':
        return 'text-blue-400';
      case 'failed':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'DirectReconciliation':
        return <ArrowUpDown className="w-4 h-4 text-blue-400" />;
      case 'ReconciledFlow':
        return <GitBranch className="w-4 h-4 text-green-400" />;
      case 'VarianceAnalysis':
        return <BarChart3 className="w-4 h-4 text-yellow-400" />;
      case 'OperationalDrift':
        return <TrendingUp className="w-4 h-4 text-orange-400" />;
      case 'AccrualReconciliation':
        return <Clock className="w-4 h-4 text-cyan-400" />;
      case 'AuditTrail':
        return <FileText className="w-4 h-4 text-purple-400" />;
      default:
        return <Calculator className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const filteredItems = selectedType === 'all' 
    ? reconciliationItems 
    : reconciliationItems.filter(item => item.type === selectedType);

  return (
    <div className="px-6 lg:px-20 py-6">
      <Card className="bg-card border-border p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl lg:text-4xl font-bold text-white">{currentLabels.title}</h1>
          </div>
          <p className="text-gray-400 text-lg mb-2">{currentLabels.subtitle}</p>
          <Badge className="bg-green-600 text-white text-sm mb-4">
            {currentLabels.tagline}
          </Badge>
          
          {/* Status Bar */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-medium text-green-400">
                {currentLabels.allReconciliationsComplete}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {currentLabels.lastUpdated}: {lastUpdated.toLocaleTimeString()}
              </span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAutoReconciling(!isAutoReconciling)}
              className={isAutoReconciling ? 'border-green-500 text-green-400' : ''}
            >
              {isAutoReconciling ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              {currentLabels.autoMode}
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="dashboard">{currentLabels.dashboard}</TabsTrigger>
            <TabsTrigger value="realtime">{currentLabels.realTime}</TabsTrigger>
            <TabsTrigger value="analytics">{currentLabels.analytics}</TabsTrigger>
            <TabsTrigger value="drift">{currentLabels.driftAnalysis}</TabsTrigger>
            <TabsTrigger value="accrual">{currentLabels.accrualTracking}</TabsTrigger>
            <TabsTrigger value="audit">{currentLabels.auditTrail}</TabsTrigger>
            <TabsTrigger value="settings">{currentLabels.settings}</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6 mt-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {reconciliationMetrics.totalReconciliations}
                  </div>
                  <div className="text-xs text-gray-400">{currentLabels.totalReconciliations}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {reconciliationMetrics.successRate}%
                  </div>
                  <div className="text-xs text-gray-400">{currentLabels.successRate}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {reconciliationMetrics.averageVariance}%
                  </div>
                  <div className="text-xs text-gray-400">{currentLabels.averageVariance}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">
                    {reconciliationMetrics.pendingItems}
                  </div>
                  <div className="text-xs text-gray-400">{currentLabels.pendingItems}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">
                    {reconciliationMetrics.lastRunTime}
                  </div>
                  <div className="text-xs text-gray-400">{currentLabels.lastRun}</div>
                </div>
              </Card>
              
              <Card className="p-4 bg-gray-800/50 border-gray-700">
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">
                    {reconciliationMetrics.nextScheduled}
                  </div>
                  <div className="text-xs text-gray-400">{currentLabels.nextScheduled}</div>
                </div>
              </Card>
            </div>

            {/* Reconciliation Items */}
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{currentLabels.dashboardTitle}</h3>
                  <p className="text-gray-400">{currentLabels.dashboardDesc}</p>
                </div>
                
                <div className="flex gap-2">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="bg-gray-700 border border-gray-600 text-white px-3 py-2 rounded text-sm"
                  >
                    <option value="all">All Types</option>
                    <option value="DirectReconciliation">{currentLabels.directReconciliation}</option>
                    <option value="ReconciledFlow">{currentLabels.reconciledFlow}</option>
                    <option value="VarianceAnalysis">{currentLabels.varianceAnalysis}</option>
                    <option value="OperationalDrift">{currentLabels.operationalDrift}</option>
                    <option value="AccrualReconciliation">{currentLabels.accrualReconciliation}</option>
                    <option value="AuditTrail">{currentLabels.auditTrail}</option>
                  </select>
                  
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    {currentLabels.exportReport}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="p-4 bg-gray-900/50 border-gray-600">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex items-center gap-3">
                          {getTypeIcon(item.type)}
                          {getStatusIcon(item.status)}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-purple-600 text-white text-xs">
                              {item.module}
                            </Badge>
                            <span className="text-white font-medium">
                              {formatAmount(item.amount)}
                            </span>
                            {item.variance && (
                              <Badge className="bg-yellow-600 text-white text-xs">
                                Variance: {formatAmount(item.variance)}
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-3">
                            {item.caption[language]}
                          </p>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.lastReconciled}
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              {item.confidence}% {currentLabels.confidenceLevel}
                            </div>
                            <div className="flex items-center gap-1">
                              <ArrowRight className="w-3 h-3" />
                              {item.source.join(', ')} → {item.target.join(', ')}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          {currentLabels.viewDetails}
                        </Button>
                        
                        {item.status === 'variance' && (
                          <Button variant="outline" size="sm">
                            <AlertTriangle className="w-4 h-4 mr-1" />
                            {currentLabels.reviewVariance}
                          </Button>
                        )}
                        
                        {item.status === 'pending' && (
                          <Button variant="outline" size="sm">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {currentLabels.approveReconciliation}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Real-Time Monitoring Tab */}
          <TabsContent value="realtime" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{currentLabels.realTimeTitle}</h3>
                <p className="text-gray-400">{currentLabels.realTimeDesc}</p>
              </div>
              
              {/* Live Status */}
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <Card className="p-4 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-3">
                    <RefreshCw className="w-6 h-6 text-green-400 animate-spin" />
                    <h4 className="font-bold text-white">{currentLabels.autoReconciliation}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    Processing reconciliations every 15 minutes
                  </div>
                </Card>
                
                <Card className="p-4 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">{currentLabels.manualReview}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    3 items requiring manual attention
                  </div>
                </Card>
                
                <Card className="p-4 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-white">{currentLabels.systemStatus}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    All systems operational
                  </div>
                </Card>
              </div>
              
              {/* Real-Time Feed */}
              <div className="space-y-3">
                <h4 className="font-bold text-white mb-4">Live Reconciliation Feed</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Cash Flow Statement → Balance Sheet reconciled successfully</span>
                    <span className="text-gray-500 text-xs ml-auto">Just now</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <RefreshCw className="w-4 h-4 text-blue-400 animate-spin" />
                    <span className="text-gray-300 text-sm">Processing HCM Payroll → General Ledger reconciliation</span>
                    <span className="text-gray-500 text-xs ml-auto">2 minutes ago</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">EPM Budget variance detected - requires review</span>
                    <span className="text-gray-500 text-xs ml-auto">5 minutes ago</span>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{currentLabels.analyticsTitle}</h3>
                <p className="text-gray-400">{currentLabels.analyticsDesc}</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Variance Trends */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-white">{currentLabels.varianceTrends}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">This Month</span>
                      <span className="text-green-400">↓ 12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Avg Variance</span>
                      <span className="text-white">0.15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Largest Variance</span>
                      <span className="text-yellow-400">$45,000</span>
                    </div>
                  </div>
                </Card>
                
                {/* Efficiency Metrics */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">{currentLabels.reconciliationEfficiency}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Automation Rate</span>
                      <span className="text-green-400">94.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Avg Processing Time</span>
                      <span className="text-white">2.3 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Success Rate</span>
                      <span className="text-green-400">96.8%</span>
                    </div>
                  </div>
                </Card>
                
                {/* Risk Assessment */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-white">{currentLabels.riskAssessment}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Risk Level</span>
                      <Badge className="bg-green-600 text-white text-xs">Low</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">High-Risk Items</span>
                      <span className="text-white">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Compliance Score</span>
                      <span className="text-green-400">98%</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* AI Insights */}
              <Card className="p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-700 mt-6">
                <div className="flex items-start gap-4">
                  <Brain className="w-8 h-8 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">AI-Powered Reconciliation Insights</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">Pattern Recognition</div>
                          <div className="text-gray-400 text-sm">Detected recurring variance pattern in HCM-ERP flows. Recommending automated adjustment rule.</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-4 h-4 text-blue-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">Predictive Analysis</div>
                          <div className="text-gray-400 text-sm">Based on historical data, expect 15% reduction in manual reconciliations next quarter.</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 mt-1" />
                        <div>
                          <div className="text-white font-medium">Risk Alert</div>
                          <div className="text-gray-400 text-sm">Month-end reconciliation volume may require additional resources in Q1.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>
          </TabsContent>

          {/* Operational Drift Analysis Tab */}
          <TabsContent value="drift" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{currentLabels.driftAnalysisTitle}</h3>
                <p className="text-gray-400">{currentLabels.driftAnalysisDesc}</p>
              </div>
              
              {/* AR Drift Analysis - Based on your example */}
              <Card className="p-6 bg-gradient-to-r from-orange-900/20 to-red-900/20 border-orange-700 mb-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-orange-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Live Drift Detection: Accounts Receivable</h4>
                    <div className="grid lg:grid-cols-4 gap-6 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-400 mb-1">$1,350K</div>
                        <div className="text-xs text-gray-400">Current AR</div>
                        <div className="text-green-400 text-xs">↑ $150K from $1,200K</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">$2,000K</div>
                        <div className="text-xs text-gray-400">Collections</div>
                        <div className="text-yellow-400 text-xs">vs $2,100K Revenue</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-400 mb-1">95.2%</div>
                        <div className="text-xs text-gray-400">Collection Rate</div>
                        <div className="text-red-400 text-xs">↓ 4.8% drift detected</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">19.4</div>
                        <div className="text-xs text-gray-400">Days Sales Outstanding</div>
                        <div className="text-yellow-400 text-xs">↑ 2.1 days vs target</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <div className="text-white font-medium mb-2">Drift Analysis Summary</div>
                      <div className="text-gray-400 text-sm">
                        AR increased from $1,200,000 to $1,350,000. $2,000,000 collected vs $2,100,000 billed. 
                        Collection efficiency drift of 4.8% indicates potential issues in collections process or customer payment behavior.
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Cash Collection Efficiency */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-white">{currentLabels.cashCollectionEfficiency}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Collection Rate</span>
                      <span className="text-red-400">95.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Target Rate</span>
                      <span className="text-green-400">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Drift Impact</span>
                      <span className="text-red-400">-$100K</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Progress to Target</span>
                        <span className="text-white">95.2%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: '95.2%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* AR Turnover Analysis */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">{currentLabels.arTurnover}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Current DSO</span>
                      <span className="text-yellow-400">19.4 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Target DSO</span>
                      <span className="text-green-400">17.3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Turnover Ratio</span>
                      <span className="text-white">18.8x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Industry Avg</span>
                      <span className="text-gray-400">21.1x</span>
                    </div>
                  </div>
                </Card>
                
                {/* Drift Trends */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-white">{currentLabels.driftTrends}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">7-Day Trend</span>
                      <span className="text-red-400">↓ Degrading</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">30-Day Trend</span>
                      <span className="text-yellow-400">→ Stable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Volatility Index</span>
                      <span className="text-white">2.4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Predictability</span>
                      <span className="text-green-400">High</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Drift Alerts */}
              <Card className="p-6 bg-gray-900/50 border-gray-600 mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  <h4 className="font-bold text-white">{currentLabels.driftAlerts}</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-900/20 border border-red-700 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-1" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Critical: Collection Rate Drift</div>
                      <div className="text-gray-400 text-sm">Collection rate has dropped 4.8% below target. Estimated revenue impact: $100K.</div>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          Investigate
                        </Button>
                        <Button variant="outline" size="sm">
                          <Target className="w-3 h-3 mr-1" />
                          Create Action Plan
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <Clock className="w-4 h-4 text-yellow-400 mt-1" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Warning: DSO Trending Up</div>
                      <div className="text-gray-400 text-sm">Days Sales Outstanding increased by 2.1 days. Monitor customer payment patterns.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <Brain className="w-4 h-4 text-blue-400 mt-1" />
                    <div className="flex-1">
                      <div className="text-white font-medium">AI Insight: Seasonal Pattern Detected</div>
                      <div className="text-gray-400 text-sm">Historical data suggests collection rates typically improve by 2% next month.</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>
          </TabsContent>

          {/* Accrual Tracking Tab */}
          <TabsContent value="accrual" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{currentLabels.accrualTrackingTitle}</h3>
                <p className="text-gray-400">{currentLabels.accrualTrackingDesc}</p>
              </div>
              
              {/* Tax Accrual Analysis - Based on your example */}
              <Card className="p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-700 mb-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Live Tax Accrual Reconciliation</h4>
                    <div className="grid lg:grid-cols-4 gap-6 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">$200K</div>
                        <div className="text-xs text-gray-400">Current Tax Liability</div>
                        <div className="text-green-400 text-xs">↑ $100K from $100K</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">$200K</div>
                        <div className="text-xs text-gray-400">Tax Expense</div>
                        <div className="text-green-400 text-xs">Perfect Match</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                        <div className="text-xs text-gray-400">Accrual Accuracy</div>
                        <div className="text-green-400 text-xs">Fully Reconciled</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">0</div>
                        <div className="text-xs text-gray-400">Days to Period Close</div>
                        <div className="text-green-400 text-xs">Ready for Close</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <div className="text-white font-medium mb-2">Tax Accrual Summary</div>
                      <div className="text-gray-400 text-sm">
                        Tax liability increased from $100,000 to $200,000, perfectly matching the income tax expense of $200,000. 
                        This indicates accurate tax accrual processes and proper expense recognition timing.
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Tax Accruals */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-cyan-400" />
                    <h4 className="font-bold text-white">{currentLabels.taxAccruals}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Income Tax</span>
                      <span className="text-green-400">$200,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Payroll Tax</span>
                      <span className="text-white">$85,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sales Tax</span>
                      <span className="text-white">$45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Property Tax</span>
                      <span className="text-white">$22,000</span>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-700">
                      <div className="flex justify-between">
                        <span className="text-white font-medium">Total Tax Accruals</span>
                        <span className="text-cyan-400 font-bold">$352,000</span>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Expense Accruals */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">{currentLabels.expenseAccruals}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bonus Accruals</span>
                      <span className="text-white">$150,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Vacation Accruals</span>
                      <span className="text-white">$95,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Professional Services</span>
                      <span className="text-yellow-400">$35,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Utilities</span>
                      <span className="text-white">$18,000</span>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-700">
                      <div className="flex justify-between">
                        <span className="text-white font-medium">Total Expense Accruals</span>
                        <span className="text-blue-400 font-bold">$298,000</span>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Accrual Trends */}
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-white">{currentLabels.accrualTrends}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Growth</span>
                      <span className="text-green-400">↑ 8.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Accuracy Rate</span>
                      <span className="text-green-400">96.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Reversals</span>
                      <span className="text-white">3.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Late Adjustments</span>
                      <span className="text-yellow-400">2.1%</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Accrual Quality Score</span>
                        <span className="text-white">94.5%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: '94.5%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Period Close Status */}
              <Card className="p-6 bg-gray-900/50 border-gray-600 mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h4 className="font-bold text-white">{currentLabels.periodClose}</h4>
                </div>
                
                <div className="grid lg:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">✓</div>
                    <div className="text-sm text-gray-400">Tax Accruals</div>
                    <div className="text-green-400 text-xs">Complete</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">✓</div>
                    <div className="text-sm text-gray-400">Expense Accruals</div>
                    <div className="text-green-400 text-xs">Complete</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">⏳</div>
                    <div className="text-sm text-gray-400">Accrual Reviews</div>
                    <div className="text-yellow-400 text-xs">In Progress</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400 mb-1">○</div>
                    <div className="text-sm text-gray-400">Period Close</div>
                    <div className="text-gray-400 text-xs">Pending</div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Period Close Progress</span>
                    <span className="text-cyan-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    All accruals recorded and reconciled. Pending final review and period close authorization.
                  </div>
                </div>
              </Card>
              
              {/* Accrual Variances & Alerts */}
              <Card className="p-6 bg-gray-900/50 border-gray-600 mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  <h4 className="font-bold text-white">{currentLabels.accrualVariances}</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-green-900/20 border border-green-700 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Tax Accrual: Perfect Match</div>
                      <div className="text-gray-400 text-sm">Income tax expense of $200,000 exactly matches tax liability increase. No variance detected.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <Clock className="w-4 h-4 text-yellow-400 mt-1" />
                    <div className="flex-1">
                      <div className="text-white font-medium">Professional Services: Estimate Review</div>
                      <div className="text-gray-400 text-sm">$35,000 accrual based on estimates. Pending final invoices for validation.</div>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          Review Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <Brain className="w-4 h-4 text-blue-400 mt-1" />
                    <div className="flex-1">
                      <div className="text-white font-medium">AI Insight: Accrual Pattern Analysis</div>
                      <div className="text-gray-400 text-sm">Tax accrual patterns show consistent accuracy over the last 6 months. Automation recommendations available.</div>
                    </div>
                  </div>
                </div>
              </Card>
            </Card>
          </TabsContent>

          {/* Audit Trail Tab */}
          <TabsContent value="audit" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{currentLabels.auditTitle}</h3>
                <p className="text-gray-400">{currentLabels.auditDesc}</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h4 className="font-bold text-white">{currentLabels.complianceStatus}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">SOX Compliance</span>
                      <Badge className="bg-green-600 text-white text-xs">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">GAAP Standards</span>
                      <Badge className="bg-green-600 text-white text-xs">Compliant</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Internal Controls</span>
                      <Badge className="bg-green-600 text-white text-xs">Verified</Badge>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white">{currentLabels.auditReports}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Monthly Reconciliation Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Variance Analysis Summary
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Compliance Certification
                    </Button>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gray-900/50 border-gray-600">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-white">{currentLabels.regulatoryRequirements}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Data Retention</span>
                      <span className="text-green-400">7 Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Audit Trail</span>
                      <span className="text-green-400">Complete</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Access Logs</span>
                      <span className="text-green-400">Enabled</span>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card className="bg-gray-800/50 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Reconciliation Configuration</h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-white">Automation Settings</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Auto Reconciliation</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Variance Threshold</span>
                      <input 
                        type="text" 
                        value="0.5%" 
                        className="bg-gray-700 border border-gray-600 text-white px-3 py-1 rounded text-sm w-20"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Processing Frequency</span>
                      <select className="bg-gray-700 border border-gray-600 text-white px-3 py-1 rounded text-sm">
                        <option>Every 15 minutes</option>
                        <option>Every 30 minutes</option>
                        <option>Hourly</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-white">Notification Settings</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Variance Alerts</span>
                      <Button variant="outline" size="sm">Email + Slack</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Daily Summary</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Failed Reconciliations</span>
                      <Button variant="outline" size="sm">Immediate</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions Footer */}
        <Card className="bg-gray-800/50 border-gray-700 p-4 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">Quick Actions:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {currentLabels.runReconciliation}
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  {currentLabels.generateAuditReport}
                </Button>
                <Button variant="outline" size="sm" onClick={() => onNavigate?.('advanced-integration')}>
                  <Link className="w-4 h-4 mr-2" />
                  Integration Center
                </Button>
                <Button variant="outline" size="sm" onClick={() => onNavigate?.('command-center')}>
                  <Target className="w-4 h-4 mr-2" />
                  Command Center
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <Activity className="w-4 h-4" />
              <span className="text-sm">Reconciliation Engine: Active</span>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
}