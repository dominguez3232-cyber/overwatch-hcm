import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';

interface ModuleInfo {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'ready' | 'demo' | 'prototype';
  keyFeatures: string[];
  businessValue: string;
  demoRoute: string;
  icon: string;
  color: string;
  readinessLevel: number; // 0-100%
  strategicValue?: string;
}

interface InvestorPresentationDashboardProps {
  language: 'en' | 'es';
  onNavigate: (route: string) => void;
  currentView?: string;
}

export const InvestorPresentationDashboard: React.FC<InvestorPresentationDashboardProps> = ({
  language,
  onNavigate,
  currentView
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const modules: ModuleInfo[] = [
    // Core Business Intelligence Modules
    {
      id: 'unified-command-center',
      name: language === 'en' ? 'Unified Command Center' : 'Centro de Comando Unificado',
      description: language === 'en' 
        ? 'Central orchestration hub integrating all business modules with real-time analytics and strategic oversight'
        : 'Hub central de orquestación integrando todos los módulos empresariales con analíticas en tiempo real y supervisión estratégica',
      category: 'Core Platform',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Cross-module integration' : 'Integración entre módulos',
        language === 'en' ? 'Real-time analytics' : 'Analíticas en tiempo real',
        language === 'en' ? 'Strategic oversight' : 'Supervisión estratégica'
      ],
      businessValue: language === 'en' ? 'Unified business intelligence and operational control' : 'Inteligencia empresarial unificada y control operacional',
      demoRoute: 'unified-command-center',
      icon: '⚡',
      color: 'from-blue-500 to-purple-500',
      readinessLevel: 95,
      strategicValue: language === 'en' 
        ? '🎯 15:7:1 Force Multiplier: $15 strategic value for every $7 invested, 1 year ROI cycle'
        : '🎯 Multiplicador de Fuerza 15:7:1: $15 valor estratégico por cada $7 invertido, ciclo ROI 1 año'
    },
    {
      id: 'hris-dashboard',
      name: language === 'en' ? 'Advisory-Grade HRIS³' : 'HRIS³ Grado Asesor',
      description: language === 'en' 
        ? 'Transform HR from cost center to command center with bilingual capabilities and cultural intelligence'
        : 'Transforma RH de centro de costos a centro de comando con capacidades bilingües e inteligencia cultural',
      category: 'Human Resources',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Bilingual architecture' : 'Arquitectura bilingüe',
        language === 'en' ? 'Cultural intelligence' : 'Inteligencia cultural',
        language === 'en' ? 'Advisory-grade insights' : 'Insights grado asesor'
      ],
      businessValue: language === 'en' ? 'Strategic HR transformation and Latino market advantage' : 'Transformación estratégica de RH y ventaja en mercado Latino',
      demoRoute: 'hris-dashboard',
      icon: '🏢',
      color: 'from-emerald-500 to-teal-500',
      readinessLevel: 90,
      strategicValue: language === 'en' 
        ? '🚀 12:4:1 HR Transformation: $12 cost savings per $4 HRIS investment, 1 year payback'
        : '🚀 Transformación RH 12:4:1: $12 ahorro costos por $4 inversión HRIS, 1 año retorno'
    },
    {
      id: 'erp-assessment',
      name: language === 'en' ? 'ERP Strategic Assessment' : 'Evaluación Estratégica ERP',
      description: language === 'en' 
        ? 'Company profile assessment with strategic ERP positioning and competitive analysis'
        : 'Evaluación de perfil de empresa con posicionamiento ERP estratégico y análisis competitivo',
      category: 'Enterprise Planning',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Strategic positioning' : 'Posicionamiento estratégico',
        language === 'en' ? 'Competitive analysis' : 'Análisis competitivo',
        language === 'en' ? 'Implementation roadmap' : 'Hoja de ruta de implementación'
      ],
      businessValue: language === 'en' ? 'Data-driven ERP strategy and competitive advantage' : 'Estrategia ERP basada en datos y ventaja competitiva',
      demoRoute: 'erp-assessment',
      icon: '📊',
      color: 'from-indigo-500 to-blue-500',
      readinessLevel: 88,
      strategicValue: language === 'en' 
        ? '📊 25:8:1 ERP Strategy: $25 process optimization per $8 assessment, 1 year transformation'
        : '📊 Estrategia ERP 25:8:1: $25 optimización procesos por $8 evaluación, 1 año transformación'
    },
    {
      id: 'cfo-dashboard',
      name: language === 'en' ? 'CFO Dashboard (Work Mode)' : 'Dashboard CFO (Modo Trabajo)',
      description: language === 'en' 
        ? 'Executive financial command center with AI-powered Sage Copilot, comprehensive KPIs, cash flow analytics, and real-time budget tracking'
        : 'Centro de comando financiero ejecutivo con Copiloto Sage IA, KPIs integrales, analíticas de flujo de efectivo y seguimiento presupuestario en tiempo real',
      category: 'Financial Intelligence',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'AI-powered Sage Copilot' : 'Copiloto Sage impulsado por IA',
        language === 'en' ? 'Real-time financial KPIs' : 'KPIs financieros en tiempo real',
        language === 'en' ? 'Interactive budget tracking' : 'Seguimiento presupuestario interactivo',
        language === 'en' ? 'Cash flow analytics' : 'Analíticas de flujo de efectivo'
      ],
      businessValue: language === 'en' ? 'Executive-grade financial intelligence with AI-powered insights for strategic decision making' : 'Inteligencia financiera de nivel ejecutivo con insights impulsados por IA para toma de decisiones estratégicas',
      demoRoute: 'cfo-dashboard',
      icon: '💰',
      color: 'from-blue-500 to-green-500',
      readinessLevel: 92,
      strategicValue: language === 'en' 
        ? '🏛️ 28:8:1 CFO Intelligence: $28 financial optimization per $8 dashboard investment, 1 year executive ROI'
        : '🏛️ Inteligencia CFO 28:8:1: $28 optimización financiera por $8 inversión dashboard, 1 año ROI ejecutivo'
    },
    {
      id: 'erp-system-development',
      name: language === 'en' ? 'ERP System Development' : 'Desarrollo Sistema ERP',
      description: language === 'en' 
        ? 'Advanced development platform with enterprise-grade architecture and real-time analytics'
        : 'Plataforma avanzada de desarrollo con arquitectura nivel empresarial y analíticas en tiempo real',
      category: 'Enterprise Planning',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Enterprise architecture' : 'Arquitectura empresarial',
        language === 'en' ? 'Real-time analytics' : 'Analíticas tiempo real',
        language === 'en' ? 'Modular development' : 'Desarrollo modular'
      ],
      businessValue: language === 'en' ? 'Scalable ERP solutions with rapid deployment' : 'Soluciones ERP escalables con despliegue rápido',
      demoRoute: 'erp-system-development',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      readinessLevel: 85,
      strategicValue: language === 'en' 
        ? '⚡ 35:12:1 System ROI: $35 operational efficiency per $12 development cost, 1 year deployment'
        : '⚡ ROI Sistema 35:12:1: $35 eficiencia operacional por $12 costo desarrollo, 1 año implementación'
    },
    {
      id: 'recruitment-cloud',
      name: language === 'en' ? 'Recruitment Cloud' : 'Nube de Reclutamiento',
      description: language === 'en' 
        ? 'Advanced talent acquisition platform with intelligent candidate management and pipeline optimization'
        : 'Plataforma avanzada de adquisición de talento con gestión inteligente de candidatos y optimización de pipeline',
      category: 'Human Resources',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Intelligent matching' : 'Coincidencia inteligente',
        language === 'en' ? 'Pipeline optimization' : 'Optimización pipeline',
        language === 'en' ? 'Candidate analytics' : 'Analíticas candidatos'
      ],
      businessValue: language === 'en' ? 'Accelerated hiring with quality optimization' : 'Contratación acelerada con optimización de calidad',
      demoRoute: 'recruitment-cloud',
      icon: '👥',
      color: 'from-cyan-500 to-teal-500',
      readinessLevel: 82
    },
    {
      id: 'epm-cloud',
      name: language === 'en' ? 'EPM Cloud' : 'EPM Cloud',
      description: language === 'en' 
        ? 'Enterprise Performance Management with comprehensive financial planning, analysis, and reporting'
        : 'Gestión de Rendimiento Empresarial con planificación, análisis y reportes financieros comprehensivos',
      category: 'Financial Management',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Financial planning' : 'Planificación financiera',
        language === 'en' ? 'Performance analytics' : 'Analíticas rendimiento',
        language === 'en' ? 'Executive reporting' : 'Reportes ejecutivos'
      ],
      businessValue: language === 'en' ? 'Strategic financial oversight and performance optimization' : 'Supervisión financiera estratégica y optimización de rendimiento',
      demoRoute: 'epm-cloud',
      icon: '⚡',
      color: 'from-purple-500 to-indigo-500',
      readinessLevel: 90
    },
    {
      id: 'epm-scenario-planning',
      name: language === 'en' ? 'EPM Scenario Planning' : 'Planificación de Escenarios EPM',
      description: language === 'en' 
        ? 'Advanced financial modeling platform with multiple scenario planning, revenue forecasting, and strategic analytics for data-driven decision-making'
        : 'Plataforma de modelado financiero avanzado con planificación de múltiples escenarios, pronóstico de ingresos y analíticas estratégicas para toma de decisiones basada en datos',
      category: 'Financial Modeling',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Multi-scenario planning (Optimistic, Conservative, Pessimistic)' : 'Planificación multi-escenario (Optimista, Conservador, Pesimista)',
        language === 'en' ? 'Real-time financial metrics & KPIs' : 'Métricas financieras y KPIs en tiempo real',
        language === 'en' ? 'Advanced revenue forecasting' : 'Pronóstico avanzado de ingresos',
        language === 'en' ? 'Export/Import scenario data' : 'Exportar/Importar datos de escenarios'
      ],
      businessValue: language === 'en' ? 'Strategic financial modeling: 22.8% average profit margin improvement, $3M+ revenue optimization across scenarios' : 'Modelado financiero estratégico: 22.8% mejora promedio margen de ganancia, $3M+ optimización ingresos entre escenarios',
      demoRoute: 'epm-scenario-planning',
      icon: '📊',
      color: 'from-indigo-500 to-purple-500',
      readinessLevel: 95
    },
    {
      id: 'crm-intelligence',
      name: language === 'en' ? 'CRM Intelligence' : 'CRM Inteligencia',
      description: language === 'en' 
        ? 'Advisory-grade CRM with predictive sales analytics and intelligent lead scoring'
        : 'CRM grado asesor con analíticas predictivas de ventas y puntuación inteligente de leads',
      category: 'Sales & Marketing',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Predictive analytics' : 'Analíticas predictivas',
        language === 'en' ? 'Lead scoring' : 'Puntuación leads',
        language === 'en' ? 'Sales optimization' : 'Optimización ventas'
      ],
      businessValue: language === 'en' ? 'Revenue acceleration and customer lifetime value optimization' : 'Aceleración de ingresos y optimización valor vida cliente',
      demoRoute: 'crm-intelligence',
      icon: '🎯',
      color: 'from-red-500 to-pink-500',
      readinessLevel: 88
    },
    {
      id: 'smart-am',
      name: language === 'en' ? 'SMART AM - Account Intelligence' : 'SMART AM - Inteligencia de Cuentas',
      description: language === 'en' 
        ? 'Advanced Account Management Intelligence platform for account managers with portfolio analytics, risk assessment, and strategic account insights for 248+ active accounts worth $24.7M portfolio value'
        : 'Plataforma avanzada de Inteligencia de Gestión de Cuentas para gerentes de cuenta con analíticas de portafolio, evaluación de riesgos e insights estratégicos para 248+ cuentas activas con valor de portafolio de $24.7M',
      category: 'Account Management',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? '248 Active Accounts Management' : 'Gestión de 248 Cuentas Activas',
        language === 'en' ? '$24.7M Portfolio Value Tracking' : 'Seguimiento de Valor de Portafolio $24.7M',
        language === 'en' ? 'Risk Assessment & Intelligence Points' : 'Evaluación de Riesgos y Puntos de Inteligencia',
        language === 'en' ? 'Account Manager Dashboard' : 'Dashboard de Gerente de Cuenta'
      ],
      businessValue: language === 'en' ? 'Account portfolio optimization: 248 active accounts, $24.7M portfolio value, 387 intelligence points for strategic account management' : 'Optimización portafolio de cuentas: 248 cuentas activas, valor portafolio $24.7M, 387 puntos de inteligencia para gestión estratégica de cuentas',
      demoRoute: 'smart-am',
      icon: '🧠',
      color: 'from-blue-500 to-indigo-500',
      readinessLevel: 93
    },
    {
      id: 'edm-intelligence',
      name: language === 'en' ? 'EDM Intelligence' : 'EDM Inteligencia',
      description: language === 'en' 
        ? 'Email & Digital Marketing Intelligence with campaign optimization and audience segmentation'
        : 'Inteligencia de Email y Marketing Digital con optimización de campañas y segmentación de audiencia',
      category: 'Sales & Marketing',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Campaign optimization' : 'Optimización campañas',
        language === 'en' ? 'Audience segmentation' : 'Segmentación audiencia',
        language === 'en' ? 'Performance tracking' : 'Seguimiento rendimiento'
      ],
      businessValue: language === 'en' ? 'Marketing ROI maximization and customer engagement' : 'Maximización ROI marketing y engagement del cliente',
      demoRoute: 'edm-intelligence',
      icon: '📧',
      color: 'from-green-500 to-emerald-500',
      readinessLevel: 85
    },
    {
      id: 'integrated-planning-execution',
      name: language === 'en' ? 'Business Planning & Execution' : 'Planificación y Ejecución Empresarial',
      description: language === 'en' 
        ? 'Integrated business planning and execution ecosystem with strategic orchestration'
        : 'Ecosistema integrado de planificación y ejecución empresarial con orquestación estratégica',
      category: 'Strategic Planning',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Strategic orchestration' : 'Orquestación estratégica',
        language === 'en' ? 'Cross-functional alignment' : 'Alineación interfuncional',
        language === 'en' ? 'Execution tracking' : 'Seguimiento ejecución'
      ],
      businessValue: language === 'en' ? 'Strategic alignment and execution excellence' : 'Alineación estratégica y excelencia en ejecución',
      demoRoute: 'integrated-planning-execution',
      icon: '🎯',
      color: 'from-emerald-500 to-blue-500',
      readinessLevel: 87
    },
    // Advanced Analytics & Intelligence
    {
      id: 'platform-navigator',
      name: language === 'en' ? 'Platform Navigator' : 'Navegador de Plataforma',
      description: language === 'en' 
        ? 'Comprehensive platform overview with module discovery and navigation intelligence'
        : 'Vista general comprehensiva de plataforma con descubrimiento de módulos e inteligencia de navegación',
      category: 'Platform Intelligence',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Module discovery' : 'Descubrimiento módulos',
        language === 'en' ? 'Navigation intelligence' : 'Inteligencia navegación',
        language === 'en' ? 'Quick access' : 'Acceso rápido'
      ],
      businessValue: language === 'en' ? 'Simplified platform adoption and user empowerment' : 'Adopción simplificada de plataforma y empoderamiento usuario',
      demoRoute: 'platform-navigator',
      icon: '🗺️',
      color: 'from-cyan-500 to-blue-500',
      readinessLevel: 92
    },
    // Strategic Resources & Training
    {
      id: 'academy-center',
      name: language === 'en' ? 'OVERWATCH³ Academy' : 'Academia OVERWATCH³',
      description: language === 'en' 
        ? 'Strategic Intelligence Training Center with comprehensive modules, ROI analytics, and professional certification pathways'
        : 'Centro de Entrenamiento en Inteligencia Estratégica con módulos comprehensivos, analíticas ROI y rutas de certificación profesional',
      category: 'Strategic Training',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? '12 comprehensive training chapters' : '12 capítulos de entrenamiento comprehensivos',
        language === 'en' ? '20+ tool cards for implementation' : '20+ tarjetas herramientas para implementación',
        language === 'en' ? 'Industry-specific strategies & ROI models' : 'Estrategias específicas industria y modelos ROI',
        language === 'en' ? 'Professional certification system' : 'Sistema certificación profesional'
      ],
      businessValue: language === 'en' ? 'Strategic intelligence education with measurable ROI: +23% profitability, -43% turnover, +18% productivity, 2,500% average ROI' : 'Educación en inteligencia estratégica con ROI medible: +23% rentabilidad, -43% rotación, +18% productividad, 2,500% ROI promedio',
      demoRoute: 'academy-center',
      icon: '🎓',
      color: 'from-amber-500 to-yellow-500',
      readinessLevel: 100
    },
    {
      id: 'strategy-manual',
      name: language === 'en' ? 'OVERWATCH Strategy Manual' : 'Manual Estrategia OVERWATCH',
      description: language === 'en' 
        ? 'Comprehensive 80-page strategy manual with 20+ years of strategic intelligence, proprietary frameworks, and detailed implementation roadmaps'
        : 'Manual de estrategia comprehensivo de 80 páginas con 20+ años de inteligencia estratégica, marcos propietarios y hojas de ruta detalladas',
      category: 'Strategic Resources',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? '12 comprehensive chapters' : '12 capítulos comprehensivos',
        language === 'en' ? '20+ tool cards for implementation' : '20+ tarjetas herramientas para implementación',
        language === 'en' ? 'Industry-specific ROI models' : 'Modelos ROI específicos industria',
        language === 'en' ? 'Proprietary frameworks & methodologies' : 'Marcos y metodologías propietarios'
      ],
      businessValue: language === 'en' ? 'Strategic intelligence foundation with proven methodologies for transforming HR from cost center to competitive advantage' : 'Fundación de inteligencia estratégica con metodologías probadas para transformar RH de centro de costos a ventaja competitiva',
      demoRoute: 'strategy-manual',
      icon: '📚',
      color: 'from-amber-500 to-orange-500',
      readinessLevel: 100
    },
    // Investor & Demo Systems
    {
      id: 'investor-demo',
      name: language === 'en' ? 'Investor Demo Center' : 'Centro Demo Inversores',
      description: language === 'en' 
        ? 'Comprehensive investor demonstration center with feedback systems and analytics'
        : 'Centro de demostración comprehensivo para inversores con sistemas de feedback y analíticas',
      category: 'Investment Tools',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Interactive demos' : 'Demos interactivos',
        language === 'en' ? 'Feedback collection' : 'Recolección feedback',
        language === 'en' ? 'Investment analytics' : 'Analíticas inversión'
      ],
      businessValue: language === 'en' ? 'Investor engagement and capital velocity optimization' : 'Engagement inversores y optimización velocidad capital',
      demoRoute: 'investor-demo',
      icon: '💰',
      color: 'from-green-500 to-blue-500',
      readinessLevel: 95
    },
    {
      id: 'founder-welcome',
      name: language === 'en' ? 'Founder Welcome Center' : 'Centro Bienvenida Fundador',
      description: language === 'en' 
        ? 'Comprehensive founder onboarding with schema-driven coaching walkthrough'
        : 'Incorporación comprehensiva de fundadores con recorrido de coaching basado en esquemas',
      category: 'Onboarding',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Schema-driven coaching' : 'Coaching basado esquemas',
        language === 'en' ? 'Onboarding optimization' : 'Optimización incorporación',
        language === 'en' ? 'Success tracking' : 'Seguimiento éxito'
      ],
      businessValue: language === 'en' ? 'Founder success acceleration and platform adoption' : 'Aceleración éxito fundador y adopción plataforma',
      demoRoute: 'founder-welcome',
      icon: '👑',
      color: 'from-yellow-500 to-orange-500',
      readinessLevel: 90
    },
    {
      id: 'decision-models-center',
      name: language === 'en' ? 'Decision Making Models Center' : 'Centro Modelos Decisión',
      description: language === 'en' 
        ? 'Eliminate decision fear with structured frameworks, upload custom models, and attach decision tools to specific business locations for strategic advantage'
        : 'Elimina miedo decisión con marcos estructurados, sube modelos personalizados y adjunta herramientas decisión a ubicaciones específicas para ventaja estratégica',
      category: 'Strategic Intelligence',
      status: 'ready',
      keyFeatures: [
        language === 'en' ? 'Structured decision frameworks' : 'Marcos decisión estructurados',
        language === 'en' ? 'Custom model upload' : 'Subida modelos personalizados',
        language === 'en' ? 'Location-based attachment' : 'Adjunto basado ubicación',
        language === 'en' ? 'Risk mitigation tools' : 'Herramientas mitigación riesgo'
      ],
      businessValue: language === 'en' ? 'Transform decision risk into strategic advantage with McKinsey 5 Big Moves integration, achieving 60% faster decisions and 40% higher quality for consistent market-beating investment returns' : 'Transforma riesgo decisión en ventaja estratégica con integración 5 Grandes Movimientos McKinsey, logrando 60% decisiones más rápidas y 40% mayor calidad para retornos inversión consistentes superiores mercado',
      demoRoute: 'decision-models-center',
      icon: '🧠',
      color: 'from-blue-500 to-purple-500',
      readinessLevel: 88,
      strategicValue: language === 'en' 
        ? '🧠 250:75:1 McKinsey Decision Excellence: $250 strategic value creation per $75 investment, McKinsey 5 Big Moves integration for consistent market-beating returns'
        : '🧠 Excelencia Decisión McKinsey 250:75:1: $250 creación valor estratégico por $75 inversión, integración 5 Grandes Movimientos McKinsey para retornos consistentes superiores mercado'
    }
  ];

  const categories = [
    { id: 'all', name: language === 'en' ? 'All Modules' : 'Todos los Módulos', icon: '⚡' },
    { id: 'Core Platform', name: language === 'en' ? 'Core Platform' : 'Plataforma Central', icon: '🏗️' },
    { id: 'Human Resources', name: language === 'en' ? 'Human Resources' : 'Recursos Humanos', icon: '👥' },
    { id: 'Enterprise Planning', name: language === 'en' ? 'Enterprise Planning' : 'Planificación Empresarial', icon: '📋' },
    { id: 'Financial Intelligence', name: language === 'en' ? 'Financial Intelligence' : 'Inteligencia Financiera', icon: '💰' },
    { id: 'Financial Management', name: language === 'en' ? 'Financial Management' : 'Gestión Financiera', icon: '💼' },
    { id: 'Sales & Marketing', name: language === 'en' ? 'Sales & Marketing' : 'Ventas y Marketing', icon: '📈' },
    { id: 'Strategic Planning', name: language === 'en' ? 'Strategic Planning' : 'Planificación Estratégica', icon: '🎯' },
    { id: 'Strategic Resources', name: language === 'en' ? 'Strategic Resources' : 'Recursos Estratégicos', icon: '📚' },
    { id: 'Platform Intelligence', name: language === 'en' ? 'Platform Intelligence' : 'Inteligencia Plataforma', icon: '🧠' },
    { id: 'Investment Tools', name: language === 'en' ? 'Investment Tools' : 'Herramientas Inversión', icon: '💰' },
    { id: 'Onboarding', name: language === 'en' ? 'Onboarding' : 'Incorporación', icon: '🚀' }
  ];

  const filteredModules = modules.filter(module => {
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesSearch = module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'text-green-400';
      case 'demo': return 'text-yellow-400';
      case 'prototype': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ready': return language === 'en' ? 'Production Ready' : 'Listo Producción';
      case 'demo': return language === 'en' ? 'Demo Ready' : 'Listo Demo';
      case 'prototype': return language === 'en' ? 'Prototype' : 'Prototipo';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                {language === 'en' ? 'Investor Presentation Dashboard' : 'Dashboard Presentación Inversores'}
              </h1>
              <p className="text-muted-foreground mt-2">
                {language === 'en' 
                  ? 'Comprehensive overview of OVERWATCH³ modules ready for demonstration'
                  : 'Vista comprehensiva de módulos OVERWATCH³ listos para demostración'
                }
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                {filteredModules.length} {language === 'en' ? 'Modules' : 'Módulos'}
              </div>
              <div className="text-sm text-muted-foreground">
                {Math.round(filteredModules.reduce((acc, mod) => acc + mod.readinessLevel, 0) / filteredModules.length)}% {language === 'en' ? 'Ready' : 'Listo'}
              </div>
            </div>
          </div>

          {/* Strategic Value Proposition - Addressing Decision Maker Fears */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === 'en' 
                    ? '🎯 OVERWATCH³: Your Trusted Advisor Against Decision Risk'
                    : '🎯 OVERWATCH³: Tu Asesor de Confianza Contra Riesgo de Decisiones'
                  }
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {language === 'en' 
                    ? 'Eliminate the fear of making bad decisions or spending time on wrong decisions that reduce velocity to revenue. Every module below delivers measurable ROI that transforms risk into competitive advantage.'
                    : 'Elimina el miedo a tomar malas decisiones o gastar tiempo en decisiones incorrectas que reducen velocidad a ingresos. Cada módulo abajo entrega ROI medible que transforma riesgo en ventaja competitiva.'
                  }
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-lg">⚡ 15:7:1</div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Average Force Multiplier' : 'Multiplicador Promedio'}
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-blue-400 font-bold text-lg">🛡️ 100%</div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Risk Mitigation Guarantee' : 'Garantía Mitigación Riesgos'}
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-purple-400 font-bold text-lg">📈 1yr</div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Average ROI Cycle' : 'Ciclo ROI Promedio'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder={language === 'en' ? 'Search modules...' : 'Buscar módulos...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredModules.map((module) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-pointer"
                      onClick={() => onNavigate(module.demoRoute)}>
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl`}>
                          {module.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{module.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs ${getStatusColor(module.status)}`}>●</span>
                            <span className="text-xs text-muted-foreground">{getStatusText(module.status)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{module.readinessLevel}%</div>
                        <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all"
                            style={{ width: `${module.readinessLevel}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>

                    {/* Business Value */}
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <div className="text-xs font-medium text-primary mb-1">
                        {language === 'en' ? 'Business Value' : 'Valor Empresarial'}
                      </div>
                      <div className="text-xs text-foreground">
                        {module.businessValue}
                      </div>
                    </div>

                    {/* Strategic Value ROI */}
                    {module.strategicValue && (
                      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-3">
                        <div className="text-xs font-medium text-green-400 mb-1">
                          {language === 'en' ? 'Strategic ROI Value' : 'Valor ROI Estratégico'}
                        </div>
                        <div className="text-xs text-foreground font-medium">
                          {module.strategicValue}
                        </div>
                      </div>
                    )}

                    {/* Key Features */}
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-muted-foreground">
                        {language === 'en' ? 'Key Features' : 'Características Clave'}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {module.keyFeatures.map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-accent/50 text-accent-foreground px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(module.demoRoute);
                      }}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors bg-gradient-to-r ${module.color} text-white hover:opacity-90`}
                    >
                      {language === 'en' ? 'Launch Demo' : 'Lanzar Demo'}
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredModules.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              {language === 'en' ? 'No modules found' : 'No se encontraron módulos'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Try adjusting your search or filter criteria'
                : 'Intenta ajustar tu búsqueda o criterios de filtro'
              }
            </p>
          </div>
        )}
      </div>

      {/* Quick Actions Footer */}
      <div className="bg-card border-t border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              {language === 'en' 
                ? 'All modules optimized for investor presentation • Click any module to launch demo'
                : 'Todos los módulos optimizados para presentación de inversores • Haz clic en cualquier módulo para lanzar demo'
              }
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('landing')}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors"
              >
                {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
              </button>
              <button
                onClick={() => onNavigate('investor-demo')}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                {language === 'en' ? 'Investor Demo Center' : 'Centro Demo Inversores'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorPresentationDashboard;