import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  ChevronDown, 
  ChevronRight, 
  Globe, 
  Users, 
  BarChart3, 
  Settings, 
  Shield,
  DollarSign,
  Target,
  Briefcase,
  Calculator,
  FileText,
  TrendingUp,
  Building,
  Brain,
  Zap,
  Eye,
  Cog,
  Database,
  Presentation,
  BookOpen,
  Camera,
  MessageSquare,
  Map,
  Clock,
  Award,
  Lightbulb,
  PieChart,
  GitBranch,
  Rocket,
  Film
} from 'lucide-react';

interface SitemapProps {
  language: 'en' | 'es';
  currentView: string;
  onNavigate: (view: string) => void;
}

interface SiteSection {
  id: string;
  title: { en: string; es: string };
  icon: any;
  description: { en: string; es: string };
  pages: SitePage[];
  color: string;
}

interface SitePage {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  personas: string[];
  category: string;
  icon: any;
}

export function Sitemap({ language, currentView, onNavigate }: SitemapProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['marketing']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const siteStructure: SiteSection[] = [
    {
      id: 'marketing',
      title: { en: 'Marketing & Public Pages', es: 'Marketing y Páginas Públicas' },
      icon: Globe,
      description: { en: 'Public-facing marketing and information pages', es: 'Páginas de marketing e información públicas' },
      color: 'text-blue-500',
      pages: [
        {
          id: 'landing',
          title: { en: 'Landing Page', es: 'Página Principal' },
          description: { en: 'Main marketing homepage with value proposition', es: 'Página principal de marketing con propuesta de valor' },
          personas: ['all'],
          category: 'marketing',
          icon: Globe
        },
        {
          id: 'company',
          title: { en: 'About Company', es: 'Acerca de la Empresa' },
          description: { en: 'Company information and mission', es: 'Información y misión de la empresa' },
          personas: ['all'],
          category: 'marketing',
          icon: Building
        },
        {
          id: 'contact',
          title: { en: 'Contact Us', es: 'Contáctanos' },
          description: { en: 'Contact forms and information', es: 'Formularios e información de contacto' },
          personas: ['all'],
          category: 'marketing',
          icon: MessageSquare
        },
        {
          id: 'demo',
          title: { en: 'Request Demo', es: 'Solicitar Demo' },
          description: { en: 'Demo request and platform access', es: 'Solicitud de demo y acceso a plataforma' },
          personas: ['all'],
          category: 'marketing',
          icon: Presentation
        },
        {
          id: 'resources',
          title: { en: 'Resources', es: 'Recursos' },
          description: { en: 'Strategic insights and tools library', es: 'Biblioteca de insights estratégicos y herramientas' },
          personas: ['all'],
          category: 'marketing',
          icon: BookOpen
        },
        {
          id: 'persona',
          title: { en: 'Persona Selection', es: 'Selección de Persona' },
          description: { en: 'Platform mode selection (Founder/Trabajo/Accounting/Strategy)', es: 'Selección de modo de plataforma (Fundador/Trabajo/Contabilidad/Estrategia)' },
          personas: ['all'],
          category: 'platform',
          icon: Users
        }
      ]
    },
    {
      id: 'core-platform',
      title: { en: 'Core Platform Modules', es: 'Módulos Principales de Plataforma' },
      icon: BarChart3,
      description: { en: 'Essential platform functionality and dashboards', es: 'Funcionalidad esencial de plataforma y paneles' },
      color: 'text-green-500',
      pages: [
        {
          id: 'dashboard',
          title: { en: 'ROI Dashboard', es: 'Panel ROI' },
          description: { en: 'Main financial performance dashboard with real-time metrics', es: 'Panel principal de rendimiento financiero con métricas en tiempo real' },
          personas: ['founder', 'trabajo', 'accounting', 'strategy'],
          category: 'core',
          icon: BarChart3
        },
        {
          id: 'assessment',
          title: { en: 'Strategic Assessment', es: 'Evaluación Estratégica' },
          description: { en: 'HR assessment and strategic analysis tools', es: 'Herramientas de evaluación de RH y análisis estratégico' },
          personas: ['founder', 'trabajo', 'accounting', 'strategy'],
          category: 'core',
          icon: Target
        },
        {
          id: 'diagnostic',
          title: { en: 'Strategic Diagnostic Cockpit', es: 'Cabina de Diagnóstico Estratégico' },
          description: { en: '12-layer diagnostic system for company lifecycle mapping', es: 'Sistema de diagnóstico de 12 capas para mapeo del ciclo de vida empresarial' },
          personas: ['founder', 'strategy'],
          category: 'strategic',
          icon: Brain
        },
        {
          id: 'culture',
          title: { en: 'Culture Force Multiplier', es: 'Multiplicador de Fuerza Cultural' },
          description: { en: 'Cultural intelligence system that amplifies all business functions', es: 'Sistema de inteligencia cultural que amplifica todas las funciones empresariales' },
          personas: ['founder', 'trabajo', 'strategy'],
          category: 'strategic',
          icon: Zap
        }
      ]
    },
    {
      id: 'sales-tools',
      title: { en: 'Sales & Business Development', es: 'Ventas y Desarrollo de Negocios' },
      icon: DollarSign,
      description: { en: 'Sales enablement and business development tools', es: 'Herramientas de habilitación de ventas y desarrollo de negocios' },
      color: 'text-purple-500',
      pages: [
        {
          id: 'buyer-guide',
          title: { en: 'Buyer Guide', es: 'Guía del Comprador' },
          description: { en: 'Strategic buyer guidance and decision frameworks', es: 'Orientación estratégica para compradores y marcos de decisión' },
          personas: ['founder', 'strategy'],
          category: 'sales',
          icon: FileText
        },
        {
          id: 'roi-calculator',
          title: { en: 'ROI Calculator', es: 'Calculadora ROI' },
          description: { en: 'Advanced ROI modeling and calculation tools', es: 'Herramientas avanzadas de modelado y cálculo de ROI' },
          personas: ['founder', 'accounting', 'strategy'],
          category: 'sales',
          icon: Calculator
        },
        {
          id: 'pilot-sow',
          title: { en: 'Pilot Statement of Work', es: 'Declaración de Trabajo Piloto' },
          description: { en: 'Structured pilot project planning and SOW generation', es: 'Planificación estructurada de proyectos piloto y generación de SOW' },
          personas: ['founder', 'accounting', 'strategy'],
          category: 'sales',
          icon: FileText
        },
        {
          id: 'battlecard',
          title: { en: 'Competitive Battlecard', es: 'Tarjeta de Batalla Competitiva' },
          description: { en: 'Competitive analysis and positioning strategies', es: 'Análisis competitivo y estrategias de posicionamiento' },
          personas: ['founder', 'strategy'],
          category: 'sales',
          icon: Shield
        },
        {
          id: 'strategic-discovery-sales',
          title: { en: 'Strategic Discovery & Sales', es: 'Descubrimiento Estratégico y Ventas' },
          description: { en: 'Advanced sales discovery and strategic positioning', es: 'Descubrimiento avanzado de ventas y posicionamiento estratégico' },
          personas: ['founder', 'strategy'],
          category: 'sales',
          icon: Target
        }
      ]
    },
    {
      id: 'hr-modules',
      title: { en: 'Human Resources & Talent', es: 'Recursos Humanos y Talento' },
      icon: Users,
      description: { en: 'Comprehensive HR management and talent acquisition', es: 'Gestión integral de RH y adquisición de talento' },
      color: 'text-orange-500',
      pages: [
        {
          id: 'human-capital-strategy',
          title: { en: 'Human Capital Strategy Center', es: 'Centro de Estrategia de Capital Humano' },
          description: { en: 'Strategic human capital planning and optimization', es: 'Planificación estratégica y optimización del capital humano' },
          personas: ['founder', 'strategy'],
          category: 'hr',
          icon: Users
        },
        {
          id: 'strategic-hr-talent',
          title: { en: 'Strategic HR & Talent Acquisition', es: 'RH Estratégico y Adquisición de Talento' },
          description: { en: 'Advanced talent acquisition and HR strategy', es: 'Adquisición avanzada de talento y estrategia de RH' },
          personas: ['founder', 'strategy'],
          category: 'hr',
          icon: Users
        },
        {
          id: 'employee-performance',
          title: { en: 'Employee Performance Management', es: 'Gestión del Desempeño de Empleados' },
          description: { en: 'Performance tracking and management systems', es: 'Sistemas de seguimiento y gestión del desempeño' },
          personas: ['founder', 'strategy'],
          category: 'hr',
          icon: TrendingUp
        },
        {
          id: 'fractional-hr-roi',
          title: { en: 'Fractional HR ROI Center', es: 'Centro ROI de RH Fraccionario' },
          description: { en: 'Fractional HR services ROI analysis and optimization', es: 'Análisis y optimización del ROI de servicios de RH fraccionarios' },
          personas: ['founder', 'strategy'],
          category: 'hr',
          icon: PieChart
        },
        {
          id: 'hr-business-alignment',
          title: { en: 'HR-Business Alignment Center', es: 'Centro de Alineación RH-Negocio' },
          description: { en: 'Strategic alignment between HR and business objectives', es: 'Alineación estratégica entre RH y objetivos empresariales' },
          personas: ['founder', 'strategy'],
          category: 'hr',
          icon: Target
        }
      ]
    },
    {
      id: 'compliance-risk',
      title: { en: 'Compliance & Risk Management', es: 'Cumplimiento y Gestión de Riesgos' },
      icon: Shield,
      description: { en: 'Compliance, security, and risk mitigation tools', es: 'Herramientas de cumplimiento, seguridad y mitigación de riesgos' },
      color: 'text-red-500',
      pages: [
        {
          id: 'privacy-security-compliance',
          title: { en: 'Privacy & Security Compliance', es: 'Cumplimiento de Privacidad y Seguridad' },
          description: { en: 'Data privacy and security compliance management', es: 'Gestión del cumplimiento de privacidad y seguridad de datos' },
          personas: ['founder', 'strategy'],
          category: 'compliance',
          icon: Shield
        },
        {
          id: 'workplace-safety-compliance',
          title: { en: 'Workplace Safety & Employee Compliance', es: 'Seguridad Laboral y Cumplimiento de Empleados' },
          description: { en: 'Workplace safety and employee compliance tracking', es: 'Seguimiento de seguridad laboral y cumplimiento de empleados' },
          personas: ['founder', 'strategy'],
          category: 'compliance',
          icon: Shield
        },
        {
          id: 'pay-taxes-compliance',
          title: { en: 'Payroll & Tax Compliance', es: 'Cumplimiento de Nómina e Impuestos' },
          description: { en: 'Payroll processing and tax compliance management', es: 'Procesamiento de nómina y gestión del cumplimiento fiscal' },
          personas: ['founder', 'strategy'],
          category: 'compliance',
          icon: Calculator
        },
        {
          id: 'hcm-technology-risk',
          title: { en: 'HCM Technology & Risk Center', es: 'Centro de Tecnología HCM y Riesgos' },
          description: { en: 'Technology risk assessment and HCM system management', es: 'Evaluación de riesgos tecnológicos y gestión de sistemas HCM' },
          personas: ['founder', 'strategy'],
          category: 'compliance',
          icon: Cog
        },
        {
          id: 'pl-risk-mitigation',
          title: { en: 'P&L Risk Mitigation Center', es: 'Centro de Mitigación de Riesgos P&G' },
          description: { en: 'Profit & Loss risk analysis and mitigation strategies', es: 'Análisis de riesgos de Pérdidas y Ganancias y estrategias de mitigación' },
          personas: ['founder', 'strategy'],
          category: 'compliance',
          icon: TrendingUp
        }
      ]
    },
    {
      id: 'strategic-tools',
      title: { en: 'Strategic Intelligence & Planning', es: 'Inteligencia Estratégica y Planificación' },
      icon: Brain,
      description: { en: 'Advanced strategic planning and intelligence tools', es: 'Herramientas avanzadas de planificación e inteligencia estratégica' },
      color: 'text-indigo-500',
      pages: [
        {
          id: 'frameworks',
          title: { en: 'Strategic Framework Library', es: 'Biblioteca de Marcos Estratégicos' },
          description: { en: 'Comprehensive library of proven strategic frameworks', es: 'Biblioteca integral de marcos estratégicos probados' },
          personas: ['founder', 'trabajo', 'strategy'],
          category: 'strategic',
          icon: BookOpen
        },
        {
          id: 'performance-assessment',
          title: { en: 'Strategic Performance Assessment', es: 'Evaluación del Desempeño Estratégico' },
          description: { en: 'Performance evaluation and strategic assessment tools', es: 'Herramientas de evaluación del desempeño y evaluación estratégica' },
          personas: ['founder', 'strategy'],
          category: 'strategic',
          icon: Target
        },
        {
          id: 'industry-intel',
          title: { en: 'Industry Intelligence Hub', es: 'Centro de Inteligencia de Industria' },
          description: { en: 'Industry-specific insights and competitive intelligence', es: 'Insights específicos de la industria e inteligencia competitiva' },
          personas: ['founder', 'strategy'],
          category: 'strategic',
          icon: Eye
        },
        {
          id: 'brand-archetypes',
          title: { en: 'Brand Archetypes Module', es: 'Módulo de Arquetipos de Marca' },
          description: { en: 'Brand archetype analysis and strategic positioning', es: 'Análisis de arquetipos de marca y posicionamiento estratégico' },
          personas: ['founder', 'trabajo', 'strategy'],
          category: 'strategic',
          icon: Award
        },
        {
          id: 'roadmap',
          title: { en: 'Implementation Roadmap Generator', es: 'Generador de Hoja de Ruta de Implementación' },
          description: { en: 'Strategic implementation planning and roadmap generation', es: 'Planificación de implementación estratégica y generación de hoja de ruta' },
          personas: ['founder', 'accounting', 'strategy'],
          category: 'strategic',
          icon: Map
        }
      ]
    },
    {
      id: 'dei-diversity',
      title: { en: 'Diversity, Equity & Inclusion', es: 'Diversidad, Equidad e Inclusión' },
      icon: Users,
      description: { en: 'DEI initiatives and talent network management', es: 'Iniciativas DEI y gestión de redes de talento' },
      color: 'text-teal-500',
      pages: [
        {
          id: 'dei-roi',
          title: { en: 'DEI ROI Dashboard', es: 'Panel ROI DEI' },
          description: { en: 'Diversity, Equity & Inclusion ROI tracking and analytics', es: 'Seguimiento y análisis del ROI de Diversidad, Equidad e Inclusión' },
          personas: ['founder', 'trabajo', 'strategy'],
          category: 'dei',
          icon: BarChart3
        },
        {
          id: 'dei-talent',
          title: { en: 'DEI Talent Network', es: 'Red de Talento DEI' },
          description: { en: 'Diverse talent sourcing and network management', es: 'Búsqueda de talento diverso y gestión de redes' },
          personas: ['founder', 'trabajo', 'strategy'],
          category: 'dei',
          icon: Users
        }
      ]
    },
    {
      id: 'command-center',
      title: { en: 'Command Center & Integration', es: 'Centro de Comando e Integración' },
      icon: Settings,
      description: { en: 'Advanced system integration and command center functionality', es: 'Integración avanzada del sistema y funcionalidad del centro de comando' },
      color: 'text-gray-500',
      pages: [
        {
          id: 'command-center',
          title: { en: 'Strategic Command Center', es: 'Centro de Comando Estratégico' },
          description: { en: 'Centralized command and control interface', es: 'Interfaz centralizada de comando y control' },
          personas: ['founder', 'strategy'],
          category: 'system',
          icon: Settings
        },
        {
          id: 'integration',
          title: { en: 'Integration Blueprint', es: 'Plano de Integración' },
          description: { en: 'System integration planning and blueprint generation', es: 'Planificación de integración del sistema y generación de planos' },
          personas: ['founder', 'strategy'],
          category: 'system',
          icon: GitBranch
        },
        {
          id: 'advanced-integration',
          title: { en: 'Advanced Command Center Integration', es: 'Integración Avanzada del Centro de Comando' },
          description: { en: 'Advanced integration and command center functionality', es: 'Integración avanzada y funcionalidad del centro de comando' },
          personas: ['founder', 'strategy'],
          category: 'system',
          icon: Cog
        },
        {
          id: 'sparklines',
          title: { en: 'Sparkline Analytics System', es: 'Sistema de Análisis Sparkline' },
          description: { en: 'Real-time micro-analytics and trend visualization', es: 'Micro-análisis en tiempo real y visualización de tendencias' },
          personas: ['founder', 'strategy'],
          category: 'system',
          icon: TrendingUp
        }
      ]
    },
    {
      id: 'financial-tools',
      title: { en: 'Financial Management & Analysis', es: 'Gestión y Análisis Financiero' },
      icon: DollarSign,
      description: { en: 'Financial analysis, reconciliation, and investment tools', es: 'Herramientas de análisis financiero, reconciliación e inversión' },
      color: 'text-yellow-500',
      pages: [
        {
          id: 'financial-reconciliation',
          title: { en: 'Financial Reconciliation Engine', es: 'Motor de Reconciliación Financiera' },
          description: { en: 'Automated financial reconciliation and analysis', es: 'Reconciliación y análisis financiero automatizado' },
          personas: ['founder', 'strategy'],
          category: 'financial',
          icon: Calculator
        },
        {
          id: 'business-lifecycle-pl',
          title: { en: 'Business Lifecycle & P&L Intelligence', es: 'Inteligencia de Ciclo de Vida Empresarial y P&G' },
          description: { en: 'Business lifecycle analysis and P&L intelligence', es: 'Análisis del ciclo de vida empresarial e inteligencia de P&G' },
          personas: ['founder', 'strategy'],
          category: 'financial',
          icon: TrendingUp
        },
        {
          id: 'vc-readiness',
          title: { en: 'VC Readiness & Investment Center', es: 'Centro de Preparación VC e Inversión' },
          description: { en: 'Venture capital readiness and investment preparation', es: 'Preparación para capital de riesgo y preparación de inversiones' },
          personas: ['founder', 'strategy'],
          category: 'financial',
          icon: Rocket
        }
      ]
    },
    {
      id: 'content-systems',
      title: { en: 'Content & Communication Systems', es: 'Sistemas de Contenido y Comunicación' },
      icon: MessageSquare,
      description: { en: 'Content generation, pitch systems, and communication tools', es: 'Generación de contenido, sistemas de presentación y herramientas de comunicación' },
      color: 'text-pink-500',
      pages: [
        {
          id: 'caption-system',
          title: { en: 'Modular Caption System', es: 'Sistema de Títulos Modular' },
          description: { en: 'AI-powered caption generation and content creation', es: 'Generación de títulos con IA y creación de contenido' },
          personas: ['founder', 'strategy'],
          category: 'content',
          icon: MessageSquare
        },
        {
          id: 'caption-api',
          title: { en: 'Caption API Schema', es: 'Esquema API de Títulos' },
          description: { en: 'API schema and technical documentation for caption system', es: 'Esquema de API y documentación técnica para sistema de títulos' },
          personas: ['founder', 'strategy'],
          category: 'content',
          icon: Database
        },
        {
          id: 'caption-seed',
          title: { en: 'Caption Library Seed', es: 'Semilla de Biblioteca de Títulos' },
          description: { en: 'Pre-built caption library and seed data management', es: 'Biblioteca de títulos pre-construida y gestión de datos semilla' },
          personas: ['founder', 'strategy'],
          category: 'content',
          icon: BookOpen
        },
        {
          id: 'pitch-delivery',
          title: { en: '90-Second Pitch Delivery System', es: 'Sistema de Presentación de 90 Segundos' },
          description: { en: 'Structured pitch delivery and presentation system', es: 'Sistema estructurado de entrega de presentaciones' },
          personas: ['founder', 'strategy'],
          category: 'content',
          icon: Presentation
        },
        {
          id: 'pitch-resources',
          title: { en: 'Pitch Resource Library', es: 'Biblioteca de Recursos de Presentación' },
          description: { en: 'Comprehensive pitch resources and template library', es: 'Biblioteca integral de recursos y plantillas de presentación' },
          personas: ['founder', 'strategy'],
          category: 'content',
          icon: BookOpen
        }
      ]
    },
    {
      id: 'specialized-centers',
      title: { en: 'Specialized Business Centers', es: 'Centros de Negocio Especializados' },
      icon: Briefcase,
      description: { en: 'Specialized business function centers and tools', es: 'Centros especializados de funciones empresariales y herramientas' },
      color: 'text-cyan-500',
      pages: [
        {
          id: 'founder-persona-sales',
          title: { en: 'Founder Persona & Sales Center', es: 'Centro de Persona de Fundador y Ventas' },
          description: { en: 'Founder-specific sales strategies and persona development', es: 'Estrategias de ventas específicas para fundadores y desarrollo de persona' },
          personas: ['founder', 'strategy'],
          category: 'specialized',
          icon: Users
        },
        {
          id: 'strategic-storytelling',
          title: { en: 'Strategic Storytelling Center', es: 'Centro de Narrativa Estratégica' },
          description: { en: 'Strategic narrative development and storytelling tools', es: 'Desarrollo de narrativa estratégica y herramientas de storytelling' },
          personas: ['founder', 'strategy'],
          category: 'specialized',
          icon: BookOpen
        },
        {
          id: 'employee-funded-incentives',
          title: { en: 'Employee-Funded Incentive Center', es: 'Centro de Incentivos Financiados por Empleados' },
          description: { en: 'Employee incentive programs and funding strategies', es: 'Programas de incentivos para empleados y estrategias de financiamiento' },
          personas: ['founder', 'strategy'],
          category: 'specialized',
          icon: DollarSign
        },
        {
          id: 'leadership-style-influence',
          title: { en: 'Leadership Style & Influence Center', es: 'Centro de Estilo de Liderazgo e Influencia' },
          description: { en: 'Leadership development and influence strategies', es: 'Desarrollo de liderazgo y estrategias de influencia' },
          personas: ['founder', 'strategy'],
          category: 'specialized',
          icon: Award
        },
        {
          id: 'account-opportunity-mapping',
          title: { en: 'Account & Opportunity Mapping Center', es: 'Centro de Mapeo de Cuentas y Oportunidades' },
          description: { en: 'Strategic account mapping and opportunity identification', es: 'Mapeo estratégico de cuentas e identificación de oportunidades' },
          personas: ['founder', 'strategy'],
          category: 'specialized',
          icon: Map
        },
        {
          id: 'hr-metrics-intelligence',
          title: { en: 'HR Metrics Intelligence Center', es: 'Centro de Inteligencia de Métricas RH' },
          description: { en: 'Advanced HR analytics and metrics intelligence', es: 'Análisis avanzado de RH e inteligencia de métricas' },
          personas: ['founder', 'strategy'],
          category: 'specialized',
          icon: BarChart3
        }
      ]
    },
    {
      id: 'demo-visualization',
      title: { en: 'Demo & Visualization Tools', es: 'Herramientas de Demo y Visualización' },
      icon: Eye,
      description: { en: 'Demo systems, visualization tools, and presentation aids', es: 'Sistemas de demo, herramientas de visualización y ayudas de presentación' },
      color: 'text-violet-500',
      pages: [
        {
          id: 'master-demo',
          title: { en: 'Master Demo System', es: 'Sistema de Demo Maestro' },
          description: { en: 'Comprehensive demo system with all platform features', es: 'Sistema de demo integral con todas las funciones de la plataforma' },
          personas: ['founder', 'strategy'],
          category: 'demo',
          icon: Presentation
        },
        {
          id: 'investor-demo',
          title: { en: 'Investor Demo Center', es: 'Centro de Demo para Inversionistas' },
          description: { en: 'Investor-focused demos and presentation tools', es: 'Demos enfocados en inversionistas y herramientas de presentación' },
          personas: ['founder', 'strategy'],
          category: 'demo',
          icon: TrendingUp
        },
        {
          id: 'visual-snapshot',
          title: { en: 'Visual Dashboard Snapshots', es: 'Instantáneas del Panel Visual' },
          description: { en: 'Visual dashboard snapshots and data visualization', es: 'Instantáneas del panel visual y visualización de datos' },
          personas: ['founder', 'strategy'],
          category: 'demo',
          icon: Camera
        },
        {
          id: 'cinematic-roi',
          title: { en: 'Cinematic ROI Engine', es: 'Motor ROI Cinematográfico' },
          description: { en: 'Cinematic ROI presentations and visual storytelling', es: 'Presentaciones cinematográficas de ROI y storytelling visual' },
          personas: ['founder', 'strategy'],
          category: 'demo',
          icon: Film
        },
        {
          id: 'supremacy-roadmap',
          title: { en: 'Strategic Supremacy Roadmap', es: 'Hoja de Ruta de Supremacía Estratégica' },
          description: { en: 'Strategic roadmap for market supremacy and dominance', es: 'Hoja de ruta estratégica para supremacía y dominio del mercado' },
          personas: ['founder', 'strategy'],
          category: 'demo',
          icon: Map
        }
      ]
    },
    {
      id: 'onboarding-deployment',
      title: { en: 'Onboarding & Deployment', es: 'Incorporación y Despliegue' },
      icon: Rocket,
      description: { en: 'User onboarding and system deployment tools', es: 'Herramientas de incorporación de usuarios y despliegue del sistema' },
      color: 'text-emerald-500',
      pages: [
        {
          id: 'founder-onboarding',
          title: { en: 'Founder Onboarding Sequence', es: 'Secuencia de Incorporación del Fundador' },
          description: { en: 'Structured onboarding process for new founders', es: 'Proceso estructurado de incorporación para nuevos fundadores' },
          personas: ['founder', 'strategy'],
          category: 'onboarding',
          icon: Users
        },
        {
          id: 'deployment-tracker',
          title: { en: 'Founder Deployment Tracker', es: 'Rastreador de Despliegue del Fundador' },
          description: { en: 'Deployment tracking and progress monitoring', es: 'Seguimiento de despliegue y monitoreo de progreso' },
          personas: ['founder', 'strategy'],
          category: 'onboarding',
          icon: Clock
        },
        {
          id: 'overwatch-fractional-hr',
          title: { en: 'OVERWATCH Fractional HR Center', es: 'Centro de RH Fraccionario OVERWATCH' },
          description: { en: 'Fractional HR services and management center', es: 'Centro de servicios y gestión de RH fraccionario' },
          personas: ['founder', 'strategy'],
          category: 'onboarding',
          icon: Users
        }
      ]
    }
  ];

  const getPersonaBadgeColor = (personas: string[]) => {
    if (personas.includes('all')) return 'bg-gray-500';
    if (personas.includes('founder')) return 'bg-blue-500';
    if (personas.includes('trabajo')) return 'bg-green-500';
    if (personas.includes('accounting')) return 'bg-yellow-500';
    if (personas.includes('strategy')) return 'bg-purple-500';
    return 'bg-gray-500';
  };

  const labels = {
    en: {
      title: 'OVERWATCH³ Platform Sitemap',
      subtitle: 'Complete navigation structure and feature overview',
      totalPages: 'Total Pages',
      sections: 'Sections',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      currentPage: 'Current Page',
      description: 'Description',
      personas: 'Available for',
      category: 'Category',
      navigate: 'Navigate',
      allPersonas: 'All Personas',
      founderMode: 'Founder Mode',
      trabajoMode: 'Trabajo Mode',
      accountingMode: 'Accounting Mode',
      strategyMode: 'Strategy Mode'
    },
    es: {
      title: 'Mapa del Sitio de la Plataforma OVERWATCH³',
      subtitle: 'Estructura completa de navegación y resumen de funciones',
      totalPages: 'Total de Páginas',
      sections: 'Secciones',
      expandAll: 'Expandir Todo',
      collapseAll: 'Contraer Todo',
      currentPage: 'Página Actual',
      description: 'Descripción',
      personas: 'Disponible para',
      category: 'Categoría',
      navigate: 'Navegar',
      allPersonas: 'Todas las Personas',
      founderMode: 'Modo Fundador',
      trabajoMode: 'Modo Trabajo',
      accountingMode: 'Modo Contabilidad',
      strategyMode: 'Modo Estrategia'
    }
  };

  const totalPages = siteStructure.reduce((acc, section) => acc + section.pages.length, 0);

  const handleExpandAll = () => {
    setExpandedSections(siteStructure.map(section => section.id));
  };

  const handleCollapseAll = () => {
    setExpandedSections([]);
  };

  return (
    <div className="min-h-screen p-6 lg:p-20 bg-background">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-center">
          {labels[language].title}
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-8">
          {labels[language].subtitle}
        </p>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{totalPages}</div>
            <div className="text-sm text-muted-foreground">{labels[language].totalPages}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{siteStructure.length}</div>
            <div className="text-sm text-muted-foreground">{labels[language].sections}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <Button onClick={handleExpandAll} variant="outline" size="sm">
            {labels[language].expandAll}
          </Button>
          <Button onClick={handleCollapseAll} variant="outline" size="sm">
            {labels[language].collapseAll}
          </Button>
        </div>
      </div>

      {/* Sitemap Sections */}
      <div className="max-w-7xl mx-auto space-y-6">
        {siteStructure.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const SectionIcon = section.icon;

          return (
            <Card key={section.id} className="overflow-hidden">
              {/* Section Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${section.color}`}>
                      <SectionIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">
                        {section.title[language]}
                      </h2>
                      <p className="text-muted-foreground">
                        {section.description[language]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">
                      {section.pages.length} {language === 'en' ? 'pages' : 'páginas'}
                    </Badge>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Section Pages */}
              {isExpanded && (
                <div className="border-t bg-muted/20">
                  <div className="p-6 grid gap-4">
                    {section.pages.map((page) => {
                      const PageIcon = page.icon;
                      const isCurrentPage = currentView === page.id;

                      return (
                        <div 
                          key={page.id}
                          className={`p-4 rounded-lg border transition-all ${
                            isCurrentPage 
                              ? 'border-primary bg-primary/10 shadow-md' 
                              : 'border-border bg-card hover:border-primary/50 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3 flex-1">
                              <div className={`p-2 rounded-md ${
                                isCurrentPage ? 'bg-primary text-primary-foreground' : 'bg-muted'
                              }`}>
                                <PageIcon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-semibold">
                                    {page.title[language]}
                                  </h3>
                                  {isCurrentPage && (
                                    <Badge variant="default" className="text-xs">
                                      {labels[language].currentPage}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {page.description[language]}
                                </p>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs font-medium text-muted-foreground">
                                    {labels[language].personas}:
                                  </span>
                                  {page.personas.includes('all') ? (
                                    <Badge variant="secondary" className="text-xs">
                                      {labels[language].allPersonas}
                                    </Badge>
                                  ) : (
                                    <div className="flex gap-1">
                                      {page.personas.map((persona) => (
                                        <Badge 
                                          key={persona}
                                          className={`text-xs text-white ${getPersonaBadgeColor([persona])}`}
                                        >
                                          {persona === 'founder' && labels[language].founderMode}
                                          {persona === 'trabajo' && labels[language].trabajoMode}
                                          {persona === 'accounting' && labels[language].accountingMode}
                                          {persona === 'strategy' && labels[language].strategyMode}
                                        </Badge>
                                      ))}
                                    </div>
                                  )}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {page.category}
                                </Badge>
                              </div>
                            </div>
                            <Button 
                              size="sm"
                              variant={isCurrentPage ? "default" : "outline"}
                              onClick={() => onNavigate(page.id)}
                              className="ml-4"
                            >
                              {labels[language].navigate}
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}