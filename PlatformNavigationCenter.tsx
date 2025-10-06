import React, { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  Building2, 
  Brain, 
  Users, 
  Trophy, 
  Settings, 
  BarChart3, 
  Target,
  Code,
  BookOpen,
  Award,
  Users2,
  TrendingUp,
  Database,
  DollarSign,
  Play,
  Compass,
  Globe,
  Clock,
  CheckCircle,
  Mail
} from 'lucide-react';

interface NavigationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  status: 'live' | 'beta' | 'coming-soon';
  tags: string[];
  estimatedTime?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  persona?: string[];
  strategicValue?: string;
}

interface PlatformNavigationCenterProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (path: string) => void;
  onBack?: () => void;
}

export function PlatformNavigationCenter({ 
  language, 
  currentMode, 
  onNavigate, 
  onBack 
}: PlatformNavigationCenterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Comprehensive navigation items with unified command center
  const navigationItems: NavigationItem[] = useMemo(() => [
    // Unified Command Center - Master Control
    {
      id: 'unified-command-center',
      title: language === 'en' ? '⚡ Unified Command Center' : '⚡ Centro de Comando Unificado',
      description: language === 'en' 
        ? 'Master control center with all business intelligence modules integrated into one strategic command center'
        : 'Centro de control maestro con todos los módulos de inteligencia de negocios integrados en un centro de comando estratégico',
      icon: <Compass className="w-5 h-5" />,
      category: 'command',
      status: 'live',
      tags: ['command', 'unified', 'master', 'integration'],
      estimatedTime: '120min',
      difficulty: 'advanced',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '🎯 15:7:1 Force Multiplier: $15 strategic value for every $7 invested, 1 year ROI cycle'
        : '🎯 Multiplicador de Fuerza 15:7:1: $15 valor estratégico por cada $7 invertido, ciclo ROI 1 año'
    },
    // Core Business Intelligence
    {
      id: 'hris-dashboard',
      title: language === 'en' ? 'HRIS³ Command Center' : 'Centro de Comando HRIS³',
      description: language === 'en' 
        ? 'Advisory-Grade HRIS that transforms HR from cost center to command center'
        : 'HRIS de Grado Asesor que transforma RH de centro de costos a centro de comando',
      icon: <Building2 className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['hris', 'hr', 'advisory'],
      estimatedTime: '30min',
      difficulty: 'intermediate',
      persona: ['founder', 'trabajo'],
      strategicValue: language === 'en' 
        ? '🚀 12:4:1 HR Transformation: $12 cost savings per $4 HRIS investment, 1 year payback'
        : '🚀 Transformación RH 12:4:1: $12 ahorro costos por $4 inversión HRIS, 1 año retorno'
    },
    {
      id: 'erp-assessment',
      title: language === 'en' ? 'ERP Assessment Engine' : 'Motor de Evaluación ERP',
      description: language === 'en' 
        ? 'Strategic ERP positioning and competitive analysis'
        : 'Posicionamiento ERP estratégico y análisis competitivo',
      icon: <Database className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['erp', 'assessment', 'strategy'],
      estimatedTime: '45min',
      difficulty: 'advanced',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '📊 25:8:1 ERP Strategy: $25 process optimization per $8 assessment, 1 year transformation'
        : '📊 Estrategia ERP 25:8:1: $25 optimización procesos por $8 evaluación, 1 año transformación'
    },
    {
      id: 'erp-system-development',
      title: language === 'en' ? '💻 ERP System Development' : '💻 Desarrollo de Sistema ERP',
      description: language === 'en' 
        ? 'Advanced ERP development platform with enterprise-grade architecture and real-time analytics'
        : 'Plataforma avanzada de desarrollo ERP con arquitectura de nivel empresarial y analíticas en tiempo real',
      icon: <Database className="w-5 h-5" />,
      category: 'development',
      status: 'live',
      tags: ['erp', 'development', 'architecture', 'analytics'],
      estimatedTime: '60min',
      difficulty: 'advanced',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '⚡ 35:12:1 System ROI: $35 operational efficiency per $12 development cost, 1 year deployment'
        : '⚡ ROI Sistema 35:12:1: $35 eficiencia operacional por $12 costo desarrollo, 1 año implementación'
    },
    {
      id: 'recruitment-cloud',
      title: language === 'en' ? '👥 Recruitment Cloud' : '👥 Nube de Reclutamiento',
      description: language === 'en' 
        ? 'Advanced talent acquisition platform with intelligent candidate management and pipeline optimization'
        : 'Plataforma avanzada de adquisición de talento con gestión inteligente de candidatos y optimización de pipeline',
      icon: <Users className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['recruitment', 'talent', 'hr', 'pipeline'],
      estimatedTime: '45min',
      difficulty: 'intermediate',
      persona: ['founder', 'trabajo'],
      strategicValue: language === 'en' 
        ? '🎯 18:6:1 Talent ROI: $18 hiring efficiency per $6 platform cost, 1 year talent optimization'
        : '🎯 ROI Talento 18:6:1: $18 eficiencia contratación por $6 costo plataforma, 1 año optimización talento'
    },
    {
      id: 'epm-cloud',
      title: language === 'en' ? 'EPM Cloud Platform' : 'Plataforma EPM Cloud',
      description: language === 'en' 
        ? 'Enterprise Performance Management with financial planning'
        : 'Gestión de Rendimiento Empresarial con planificación financiera',
      icon: <TrendingUp className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['epm', 'financial', 'planning'],
      estimatedTime: '60min',
      difficulty: 'advanced',
      persona: ['founder', 'accounting'],
      strategicValue: language === 'en' 
        ? '💰 22:7:1 Financial Intelligence: $22 forecast accuracy per $7 EPM investment, 1 year planning cycle'
        : '💰 Inteligencia Financiera 22:7:1: $22 precisión pronósticos por $7 inversión EPM, 1 año ciclo planificación'
    },
    {
      id: 'epm-scenario-planning',
      title: language === 'en' ? '📊 EPM Scenario Planning' : '📊 Planificación de Escenarios EPM',
      description: language === 'en' 
        ? 'Advanced financial modeling with multiple scenario planning, revenue forecasting, and strategic analytics for informed decision-making'
        : 'Modelado financiero avanzado con planificación de múltiples escenarios, pronóstico de ingresos y analíticas estratégicas para toma de decisiones informadas',
      icon: <BarChart3 className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['epm', 'scenario-planning', 'financial-modeling', 'analytics', 'forecasting'],
      estimatedTime: '45min',
      difficulty: 'advanced',
      persona: ['founder', 'accounting', 'strategy'],
      strategicValue: language === 'en' 
        ? '🔮 30:9:1 Scenario Intelligence: $30 risk mitigation per $9 modeling investment, 1 year strategic advantage'
        : '🔮 Inteligencia Escenarios 30:9:1: $30 mitigación riesgos por $9 inversión modelado, 1 año ventaja estratégica'
    },
    {
      id: 'cfo-dashboard',
      title: language === 'en' ? '💰 CFO Dashboard (Work Mode)' : '💰 Dashboard CFO (Modo Trabajo)',
      description: language === 'en' 
        ? 'Executive financial command center with AI-powered Sage Copilot, comprehensive KPIs, and real-time financial analytics'
        : 'Centro de comando financiero ejecutivo con Copiloto Sage impulsado por IA, KPIs integrales y analíticas financieras en tiempo real',
      icon: <DollarSign className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['cfo', 'financial', 'ai-copilot', 'analytics', 'executive'],
      estimatedTime: '30min',
      difficulty: 'intermediate',
      persona: ['founder', 'accounting', 'strategy'],
      strategicValue: language === 'en' 
        ? '🏛️ 28:8:1 CFO Intelligence: $28 financial optimization per $8 dashboard investment, 1 year executive ROI'
        : '🏛️ Inteligencia CFO 28:8:1: $28 optimización financiera por $8 inversión dashboard, 1 año ROI ejecutivo'
    },
    {
      id: 'crm-intelligence',
      title: language === 'en' ? 'CRM Intelligence Hub' : 'Hub de Inteligencia CRM',
      description: language === 'en' 
        ? 'Advisory-grade CRM with predictive sales analytics'
        : 'CRM de grado asesor con analíticas predictivas de ventas',
      icon: <Users className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['crm', 'sales', 'analytics'],
      estimatedTime: '40min',
      difficulty: 'intermediate',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '💼 20:6:1 Sales Acceleration: $20 revenue growth per $6 CRM investment, 1 year sales optimization'
        : '💼 Aceleración Ventas 20:6:1: $20 crecimiento ingresos por $6 inversión CRM, 1 año optimización ventas'
    },
    {
      id: 'smart-am',
      title: language === 'en' ? '🎯 SMART AM - Account Intelligence' : '🎯 SMART AM - Inteligencia de Cuentas',
      description: language === 'en' 
        ? 'Advanced Account Management Intelligence platform for account managers with portfolio analytics, risk assessment, and strategic account insights'
        : 'Plataforma avanzada de Inteligencia de Gestión de Cuentas para gerentes de cuenta con analíticas de portafolio, evaluación de riesgos e insights estratégicos de cuentas',
      icon: <Target className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['account-management', 'portfolio', 'intelligence', 'risk-assessment', 'account-managers'],
      estimatedTime: '50min',
      difficulty: 'intermediate',
      persona: ['founder', 'strategy', 'trabajo'],
      strategicValue: language === 'en' 
        ? '🎯 24:8:1 Account Portfolio ROI: $24M portfolio optimization per $8 platform cost, 1 year account intelligence'
        : '🎯 ROI Portafolio Cuentas 24:8:1: $24M optimización portafolio por $8 costo plataforma, 1 año inteligencia cuentas'
    },
    {
      id: 'edm-intelligence',
      title: language === 'en' ? 'EDM Intelligence Suite' : 'Suite de Inteligencia EDM',
      description: language === 'en' 
        ? 'Email & Digital Marketing Intelligence'
        : 'Inteligencia de Email y Marketing Digital',
      icon: <Mail className="w-5 h-5" />,
      category: 'business-intelligence',
      status: 'live',
      tags: ['email', 'marketing'],
      estimatedTime: '35min',
      difficulty: 'intermediate',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '📧 16:5:1 Marketing Intelligence: $16 campaign ROI per $5 platform investment, 1 year marketing optimization'
        : '📧 Inteligencia Marketing 16:5:1: $16 ROI campañas por $5 inversión plataforma, 1 año optimización marketing'
    },

    // OVERWATCH³ Academy & Strategy Intelligence
    {
      id: 'academy-center',
      title: language === 'en' ? '🎓 OVERWATCH³ Academy' : '🎓 Academia OVERWATCH³',
      description: language === 'en' 
        ? 'Strategic Intelligence Training Center - 20+ years of proprietary frameworks, methodologies, and industry-specific strategies'
        : 'Centro de Entrenamiento en Inteligencia Estratégica - 20+ años de marcos propietarios, metodologías y estrategias específicas de la industria',
      icon: <BookOpen className="w-5 h-5" />,
      category: 'intelligence',
      status: 'live',
      tags: ['academy', 'training', 'certification', 'strategic-intelligence'],
      estimatedTime: '180min',
      difficulty: 'beginner',
      persona: ['founder', 'trabajo', 'strategy'],
      strategicValue: language === 'en' 
        ? '🎓 50:15:1 Intelligence ROI: $50 strategic capability per $15 training investment, 1 year intelligence transformation'
        : '🎓 ROI Inteligencia 50:15:1: $50 capacidad estratégica por $15 inversión entrenamiento, 1 año transformación inteligencia'
    },
    {
      id: 'dashboard',
      title: language === 'en' ? 'Schema Intelligence Dashboard' : 'Dashboard de Inteligencia de Esquemas',
      description: language === 'en' 
        ? 'Strategic intelligence framework with schema-driven coaching'
        : 'Marco de inteligencia estratégica con coaching basado en esquemas',
      icon: <Brain className="w-5 h-5" />,
      category: 'intelligence',
      status: 'live',
      tags: ['schema', 'intelligence', 'coaching'],
      estimatedTime: '45min',
      difficulty: 'intermediate',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '🧠 40:12:1 Intelligence ROI: $40 strategic decision value per $12 framework investment, 1 year intelligence transformation'
        : '🧠 ROI Inteligencia 40:12:1: $40 valor decisiones estratégicas por $12 inversión marco, 1 año transformación inteligencia'
    },
    {
      id: 'assessment',
      title: language === 'en' ? 'Strategic Assessment Center' : 'Centro de Evaluación Estratégica',
      description: language === 'en' 
        ? '12-layer diagnostic framework for company lifecycle'
        : 'Marco de diagnóstico de 12 capas para ciclo de vida de empresa',
      icon: <Target className="w-5 h-5" />,
      category: 'intelligence',
      status: 'live',
      tags: ['assessment', 'diagnostic'],
      estimatedTime: '60min',
      difficulty: 'advanced',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '🎯 60:18:1 Risk Mitigation: $60 prevented losses per $18 diagnostic investment, 1 year risk intelligence'
        : '🎯 Mitigación Riesgos 60:18:1: $60 pérdidas prevenidas por $18 inversión diagnóstica, 1 año inteligencia riesgos'
    },
    {
      id: 'roi-dashboard',
      title: language === 'en' ? 'ROI Command Center' : 'Centro de Comando ROI',
      description: language === 'en' 
        ? 'Cinematic ROI modeling and financial analytics'
        : 'Modelado cinemático de ROI y analíticas financieras',
      icon: <DollarSign className="w-5 h-5" />,
      category: 'intelligence',
      status: 'live',
      tags: ['roi', 'financial', 'analytics'],
      estimatedTime: '40min',
      difficulty: 'intermediate',
      persona: ['founder', 'accounting'],
      strategicValue: language === 'en' 
        ? '💰 45:15:1 ROI Intelligence: $45 investment optimization per $15 modeling cost, 1 year financial acceleration'
        : '💰 Inteligencia ROI 45:15:1: $45 optimización inversiones por $15 costo modelado, 1 año aceleración financiera'
    },

    // Learning & Development
    {
      id: 'module-editor',
      title: language === 'en' ? 'Module Editor Studio' : 'Estudio Editor de Módulos',
      description: language === 'en' 
        ? 'Advanced content creation and module development'
        : 'Creación de contenido avanzado y desarrollo de módulos',
      icon: <Settings className="w-5 h-5" />,
      category: 'learning',
      status: 'live',
      tags: ['editor', 'content', 'modules'],
      estimatedTime: '30min',
      difficulty: 'intermediate',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '🛠️ 32:10:1 Content ROI: $32 training efficiency per $10 development investment, 1 year capability building'
        : '🛠️ ROI Contenido 32:10:1: $32 eficiencia entrenamiento por $10 inversión desarrollo, 1 año construcción capacidades'
    },
    {
      id: 'lesson-player',
      title: language === 'en' ? 'Interactive Lesson Player' : 'Reproductor de Lecciones Interactivo',
      description: language === 'en' 
        ? 'Schema-driven interactive lesson player'
        : 'Reproductor de lecciones interactivo basado en esquemas',
      icon: <Play className="w-5 h-5" />,
      category: 'learning',
      status: 'live',
      tags: ['lessons', 'interactive'],
      estimatedTime: '45min',
      difficulty: 'beginner',
      persona: ['founder', 'trabajo'],
      strategicValue: language === 'en' 
        ? '📺 28:9:1 Learning ROI: $28 knowledge retention per $9 platform cost, 1 year skill acceleration'
        : '📺 ROI Aprendizaje 28:9:1: $28 retención conocimiento por $9 costo plataforma, 1 año aceleración habilidades'
    },

    // Achievement & Recognition
    {
      id: 'badge-system',
      title: language === 'en' ? 'Achievement Badge System' : 'Sistema de Insignias de Logros',
      description: language === 'en' 
        ? 'Gamified achievement tracking with smart badges'
        : 'Seguimiento de logros gamificado con insignias inteligentes',
      icon: <Trophy className="w-5 h-5" />,
      category: 'gamification',
      status: 'live',
      tags: ['badges', 'achievements'],
      estimatedTime: '25min',
      difficulty: 'beginner',
      persona: ['founder', 'trabajo']
    },
    {
      id: 'certificate',
      title: language === 'en' ? 'Certificate Generator' : 'Generador de Certificados',
      description: language === 'en' 
        ? 'QR-enabled shareable certificates'
        : 'Certificados compartibles con QR',
      icon: <CheckCircle className="w-5 h-5" />,
      category: 'gamification',
      status: 'live',
      tags: ['certificates', 'qr'],
      estimatedTime: '15min',
      difficulty: 'beginner',
      persona: ['founder', 'trabajo']
    },

    // Squad & Collaboration
    {
      id: 'squad-creation',
      title: language === 'en' ? 'Squad Creation Center' : 'Centro de Creación de Escuadrones',
      description: language === 'en' 
        ? 'Create tactical teams for coaching and collaboration'
        : 'Crear equipos tácticos para coaching y colaboración',
      icon: <Users2 className="w-5 h-5" />,
      category: 'collaboration',
      status: 'live',
      tags: ['squads', 'teams'],
      estimatedTime: '35min',
      difficulty: 'intermediate',
      persona: ['founder', 'strategy']
    },

    // Advanced Tools
    {
      id: 'business-command-center',
      title: language === 'en' ? 'Business Command Center' : 'Centro de Comando de Negocios',
      description: language === 'en' 
        ? 'Master control center for business operations'
        : 'Centro de control maestro para operaciones de negocio',
      icon: <Compass className="w-5 h-5" />,
      category: 'advanced',
      status: 'live',
      tags: ['command-center', 'operations'],
      estimatedTime: '90min',
      difficulty: 'advanced',
      persona: ['founder', 'strategy']
    },
    {
      id: 'strategy-manual',
      title: language === 'en' ? '📚 OVERWATCH Strategy Manual' : '📚 Manual Estrategia OVERWATCH',
      description: language === 'en' 
        ? 'Comprehensive 80-page strategy manual with 20+ years of strategic intelligence, proprietary frameworks, and implementation roadmaps'
        : 'Manual de estrategia comprehensivo de 80 páginas con 20+ años de inteligencia estratégica, marcos propietarios y hojas de ruta implementación',
      icon: <BookOpen className="w-5 h-5" />,
      category: 'learning',
      status: 'live',
      tags: ['strategy', 'manual', 'frameworks', 'implementation', 'advisory'],
      estimatedTime: '180min',
      difficulty: 'advanced',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '📚 100:30:1 Strategic Mastery: $100 competitive advantage per $30 manual investment, 1 year strategic supremacy'
        : '📚 Maestría Estratégica 100:30:1: $100 ventaja competitiva por $30 inversión manual, 1 año supremacía estratégica'
    },
    {
      id: 'decision-models-center',
      title: language === 'en' ? '🧠 Decision Making Models Center' : '🧠 Centro de Modelos de Decisión',
      description: language === 'en' 
        ? 'Eliminate decision fear with structured frameworks, upload custom models, and attach decision tools to specific business locations'
        : 'Elimina miedo a decidir con marcos estructurados, sube modelos personalizados y adjunta herramientas de decisión a ubicaciones específicas',
      icon: <Brain className="w-5 h-5" />,
      category: 'intelligence',
      status: 'live',
      tags: ['decision-making', 'frameworks', 'risk-mitigation', 'structured-thinking', 'roi'],
      estimatedTime: '45min',
      difficulty: 'intermediate',
      persona: ['founder', 'strategy'],
      strategicValue: language === 'en' 
        ? '🧠 250:75:1 McKinsey Decision Excellence: $250 strategic value creation per $75 investment, McKinsey 5 Big Moves integration for consistent market-beating returns'
        : '🧠 Excelencia Decisión McKinsey 250:75:1: $250 creación valor estratégico por $75 inversión, integración 5 Grandes Movimientos McKinsey para retornos consistentes superiores mercado'
    }
  ], [language]);

  const categories = useMemo(() => [
    { id: 'all', name: language === 'en' ? 'All Modules' : 'Todos los Módulos', icon: <Globe className="w-4 h-4" /> },
    { id: 'command', name: language === 'en' ? 'Command Center' : 'Centro de Comando', icon: <Compass className="w-4 h-4" /> },
    { id: 'business-intelligence', name: language === 'en' ? 'Business Intelligence' : 'Inteligencia de Negocios', icon: <Brain className="w-4 h-4" /> },
    { id: 'development', name: language === 'en' ? 'Development Platform' : 'Plataforma de Desarrollo', icon: <Code className="w-4 h-4" /> },
    { id: 'intelligence', name: language === 'en' ? 'Strategic Intelligence' : 'Inteligencia Estratégica', icon: <Target className="w-4 h-4" /> },
    { id: 'learning', name: language === 'en' ? 'Learning & Development' : 'Aprendizaje y Desarrollo', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'gamification', name: language === 'en' ? 'Achievement & Recognition' : 'Logros y Reconocimiento', icon: <Trophy className="w-4 h-4" /> },
    { id: 'collaboration', name: language === 'en' ? 'Squad & Collaboration' : 'Escuadrón y Colaboración', icon: <Users2 className="w-4 h-4" /> },
    { id: 'advanced', name: language === 'en' ? 'Advanced Tools' : 'Herramientas Avanzadas', icon: <Settings className="w-4 h-4" /> }
  ], [language]);

  // Memoize filtered items
  const filteredItems = useMemo(() => {
    return navigationItems.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [navigationItems, searchQuery, selectedCategory]);

  const getStatusColor = useCallback((status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'beta': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'coming-soon': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  }, []);

  const getDifficultyColor = useCallback((difficulty?: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400';
      case 'intermediate': return 'text-yellow-400';
      case 'advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-6 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="text-muted-foreground hover:text-foreground"
              >
                ← {language === 'en' ? 'Back' : 'Atrás'}
              </Button>
              <div>
                <h1 className="text-2xl font-bold">
                  {language === 'en' ? 'OVERWATCH³ Platform Navigator' : 'Navegador de Plataforma OVERWATCH³'}
                </h1>
                <p className="text-muted-foreground text-sm">
                  {language === 'en' 
                    ? 'Comprehensive access to all modules and capabilities' 
                    : 'Acceso integral a todos los módulos y capacidades'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {filteredItems.length} {language === 'en' ? 'modules' : 'módulos'}
              </Badge>
              <Badge variant="outline" className="text-xs capitalize">
                {currentMode} {language === 'en' ? 'mode' : 'modo'}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={language === 'en' ? 'Search modules, features, or capabilities...' : 'Buscar módulos, características o capacidades...'}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-7 gap-1">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-1 text-xs"
                >
                  {category.icon}
                  <span className="hidden lg:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id}>
              <Card 
                className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/30"
                onClick={() => onNavigate(item.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(item.status)}`}
                    >
                      {item.status === 'live' ? (language === 'en' ? 'Live' : 'En Vivo') :
                       item.status === 'beta' ? 'Beta' : 
                       language === 'en' ? 'Coming Soon' : 'Próximamente'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm line-clamp-2">
                    {item.description}
                  </CardDescription>

                  {item.strategicValue && (
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-3">
                      <div className="text-xs font-medium text-green-400 mb-1">
                        {language === 'en' ? 'Strategic Value' : 'Valor Estratégico'}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.strategicValue}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {item.estimatedTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.estimatedTime}
                      </div>
                    )}
                    {item.difficulty && (
                      <div className="flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" />
                        <span className={getDifficultyColor(item.difficulty)}>
                          {item.difficulty === 'beginner' ? (language === 'en' ? 'Beginner' : 'Principiante') :
                           item.difficulty === 'intermediate' ? (language === 'en' ? 'Intermediate' : 'Intermedio') :
                           language === 'en' ? 'Advanced' : 'Avanzado'}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{item.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">
              {language === 'en' ? 'No modules found' : 'No se encontraron módulos'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'en' 
                ? 'Try adjusting your search terms or filters'
                : 'Intenta ajustar tus términos de búsqueda o filtros'
              }
            </p>
            <Button 
              variant="outline" 
              onClick={handleClearFilters}
            >
              {language === 'en' ? 'Clear Filters' : 'Limpiar Filtros'}
            </Button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="text-2xl font-bold text-primary">
              {navigationItems.filter(item => item.status === 'live').length}
            </div>
            <div className="text-sm text-muted-foreground">
              {language === 'en' ? 'Live Modules' : 'Módulos En Vivo'}
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-yellow-400">
              {navigationItems.filter(item => item.difficulty === 'advanced').length}
            </div>
            <div className="text-sm text-muted-foreground">
              {language === 'en' ? 'Advanced Tools' : 'Herramientas Avanzadas'}
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-green-400">
              {categories.length - 1}
            </div>
            <div className="text-sm text-muted-foreground">
              {language === 'en' ? 'Categories' : 'Categorías'}
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-blue-400">
              {currentMode === 'founder' ? '14' : '12'}
            </div>
            <div className="text-sm text-muted-foreground">
              {language === 'en' ? 'Available' : 'Disponibles'}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}