import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  BarChart3, 
  Users, 
  Calculator, 
  Target, 
  Shield, 
  Zap, 
  TrendingUp, 
  MapPin, 
  Map, 
  Handshake, 
  MessageSquare,
  Building,
  DollarSign,
  FileText,
  Settings,
  UserCheck,
  Globe,
  Award,
  Briefcase,
  PieChart,
  Search,
  Clock,
  AlertTriangle,
  CheckCircle,
  Activity
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface SitemapProps {
  language: 'en' | 'es';
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Sitemap({ language, currentView, onNavigate }: SitemapProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['core-platform']);
  const [searchTerm, setSearchTerm] = useState('');

  const siteStructure = [
    {
      id: 'core-platform',
      title: { en: 'Core Platform', es: 'Plataforma Principal' },
      icon: Zap,
      description: { en: 'Main platform modules and command centers', es: 'Módulos principales de la plataforma y centros de comando' },
      color: 'text-blue-500',
      pages: [
        {
          id: 'persona',
          title: { en: 'Persona Landing', es: 'Página de Persona' },
          description: { en: 'Main persona selection and mode switching interface', es: 'Interfaz principal de selección de persona y cambio de modo' },
          personas: ['all'],
          category: 'core',
          icon: Users
        },
        {
          id: 'business-command-center',
          title: { en: 'Business Command Center', es: 'Centro de Comando Empresarial' },
          description: { en: 'Integrated business operations and strategic overview', es: 'Operaciones comerciales integradas y visión estratégica' },
          personas: ['founder', 'strategy'],
          category: 'core',
          icon: BarChart3
        },
        {
          id: 'dashboard',
          title: { en: 'ROI Dashboard', es: 'Panel de ROI' },
          description: { en: 'Financial performance tracking and ROI analysis', es: 'Seguimiento del rendimiento financiero y análisis de ROI' },
          personas: ['founder', 'accounting'],
          category: 'analytics',
          icon: PieChart
        },
        {
          id: 'assessment',
          title: { en: 'Strategic Assessment', es: 'Evaluación Estratégica' },
          description: { en: 'Comprehensive business assessment and strategic planning', es: 'Evaluación empresarial integral y planificación estratégica' },
          personas: ['founder', 'strategy'],
          category: 'strategy',
          icon: Target
        }
      ]
    },
    {
      id: 'hcm-suite',
      title: { en: 'Human Capital Management Suite', es: 'Suite de Gestión de Capital Humano' },
      icon: Users,
      description: { en: 'Complete HR, talent, and workforce management solutions', es: 'Soluciones completas de RH, talento y gestión de fuerza laboral' },
      color: 'text-green-500',
      pages: [
        {
          id: 'employee-performance-management',
          title: { en: 'Employee Performance Management', es: 'Gestión del Rendimiento de Empleados' },
          description: { en: 'Comprehensive performance tracking and development system', es: 'Sistema integral de seguimiento de rendimiento y desarrollo' },
          personas: ['trabajo', 'founder'],
          category: 'hcm',
          icon: UserCheck
        },
        {
          id: 'strategic-hr-talent-acquisition',
          title: { en: 'Strategic HR Talent Acquisition', es: 'Adquisición Estratégica de Talento RH' },
          description: { en: 'AI-powered talent acquisition and recruitment optimization', es: 'Adquisición de talento impulsada por IA y optimización de reclutamiento' },
          personas: ['trabajo', 'strategy'],
          category: 'hcm',
          icon: Search
        },
        {
          id: 'dei-talent-network',
          title: { en: 'DEI Talent Network', es: 'Red de Talento DEI' },
          description: { en: 'Diversity, equity, and inclusion talent management platform', es: 'Plataforma de gestión de talento de diversidad, equidad e inclusión' },
          personas: ['trabajo', 'founder'],
          category: 'hcm',
          icon: Globe
        }
      ]
    },
    {
      id: 'financial-intelligence',
      title: { en: 'Financial Intelligence & ROI Engine', es: 'Motor de Inteligencia Financiera y ROI' },
      icon: DollarSign,
      description: { en: 'Advanced financial analytics and ROI optimization tools', es: 'Herramientas avanzadas de análisis financiero y optimización de ROI' },
      color: 'text-yellow-500',
      pages: [
        {
          id: 'financial-reconciliation-engine',
          title: { en: 'Financial Reconciliation Engine', es: 'Motor de Reconciliación Financiera' },
          description: { en: 'Automated financial reconciliation and accuracy verification', es: 'Reconciliación financiera automatizada y verificación de precisión' },
          personas: ['accounting', 'founder'],
          category: 'finance',
          icon: Calculator
        },
        {
          id: 'cinematic-roi-engine',
          title: { en: 'Cinematic ROI Engine', es: 'Motor de ROI Cinematográfico' },
          description: { en: 'Visual ROI storytelling and performance visualization', es: 'Narrativa visual de ROI y visualización de rendimiento' },
          personas: ['founder', 'strategy'],
          category: 'finance',
          icon: Activity
        },
        {
          id: 'business-lifecycle-pl-center',
          title: { en: 'Business Lifecycle P&L Center', es: 'Centro de P&G del Ciclo de Vida Empresarial' },
          description: { en: 'Lifecycle-based profit and loss analysis and optimization', es: 'Análisis y optimización de pérdidas y ganancias basado en el ciclo de vida' },
          personas: ['accounting', 'strategy'],
          category: 'finance',
          icon: TrendingUp
        }
      ]
    },
    {
      id: 'strategic-advisory',
      title: { en: 'Strategic Advisory & Intelligence', es: 'Asesoría Estratégica e Inteligencia' },
      icon: Target,
      description: { en: 'McKinsey-grade strategic advisory and business intelligence', es: 'Asesoría estratégica e inteligencia empresarial de grado McKinsey' },
      color: 'text-purple-500',
      pages: [
        {
          id: 'strategic-diagnostic-cockpit',
          title: { en: 'Strategic Diagnostic Cockpit', es: 'Cabina de Diagnóstico Estratégico' },
          description: { en: '12-layer diagnostic framework for comprehensive business analysis', es: 'Marco de diagnóstico de 12 capas para análisis empresarial integral' },
          personas: ['founder', 'strategy'],
          category: 'strategy',
          icon: Settings
        },
        {
          id: 'vc-readiness-investment-center',
          title: { en: 'VC Readiness Investment Center', es: 'Centro de Inversión de Preparación VC' },
          description: { en: 'Venture capital readiness assessment and optimization platform', es: 'Plataforma de evaluación y optimización de preparación para capital de riesgo' },
          personas: ['founder', 'strategy'],
          category: 'strategy',
          icon: Award
        },
        {
          id: 'strategic-supremacy-roadmap',
          title: { en: 'Strategic Supremacy Roadmap', es: 'Hoja de Ruta de Supremacía Estratégica' },
          description: { en: 'Comprehensive strategic planning and execution roadmap', es: 'Hoja de ruta integral de planificación y ejecución estratégica' },
          personas: ['founder', 'strategy'],
          category: 'strategy',
          icon: Map
        }
      ]
    },
    {
      id: 'compliance-security',
      title: { en: 'Compliance & Security Intelligence', es: 'Inteligencia de Cumplimiento y Seguridad' },
      icon: Shield,
      description: { en: 'Comprehensive compliance management and security frameworks', es: 'Gestión integral de cumplimiento y marcos de seguridad' },
      color: 'text-red-500',
      pages: [
        {
          id: 'privacy-security-compliance',
          title: { en: 'Privacy Security Compliance Center', es: 'Centro de Cumplimiento de Seguridad y Privacidad' },
          description: { en: 'Comprehensive privacy, security, and regulatory compliance management', es: 'Gestión integral de cumplimiento de privacidad, seguridad y regulaciones' },
          personas: ['founder', 'accounting'],
          category: 'compliance',
          icon: Shield
        },
        {
          id: 'workplace-safety-compliance',
          title: { en: 'Workplace Safety Employee Compliance', es: 'Cumplimiento de Seguridad Laboral de Empleados' },
          description: { en: 'Employee safety compliance tracking and management system', es: 'Sistema de seguimiento y gestión de cumplimiento de seguridad de empleados' },
          personas: ['trabajo', 'founder'],
          category: 'compliance',
          icon: CheckCircle
        },
        {
          id: 'pay-taxes-compliance',
          title: { en: 'Pay Taxes Compliance Center', es: 'Centro de Cumplimiento de Pago de Impuestos' },
          description: { en: 'Tax compliance management and automated payment systems', es: 'Gestión de cumplimiento fiscal y sistemas de pago automatizados' },
          personas: ['accounting', 'founder'],
          category: 'compliance',
          icon: FileText
        }
      ]
    },
    {
      id: 'crisis-intelligence',
      title: { en: 'Crisis & Risk Intelligence', es: 'Inteligencia de Crisis y Riesgo' },
      icon: AlertTriangle,
      description: { en: 'Advanced crisis management and risk mitigation systems', es: 'Sistemas avanzados de gestión de crisis y mitigación de riesgos' },
      color: 'text-orange-500',
      pages: [
        {
          id: 'crisis-response-center',
          title: { en: 'Crisis Response Center', es: 'Centro de Respuesta a Crisis' },
          description: { en: 'Comprehensive crisis management and response coordination platform', es: 'Plataforma integral de gestión de crisis y coordinación de respuesta' },
          personas: ['founder', 'strategy'],
          category: 'crisis',
          icon: MessageSquare
        }
      ]
    },
    {
      id: 'market-expansion',
      title: { en: 'Market Expansion & Scaling Intelligence', es: 'Inteligencia de Expansión y Escalamiento de Mercado' },
      icon: TrendingUp,
      description: { en: 'Strategic market expansion and business scaling intelligence', es: 'Inteligencia estratégica de expansión de mercado y escalamiento empresarial' },
      color: 'text-violet-500',
      pages: [
        {
          id: 'market-entry-strategy',
          title: { en: 'Market Entry Strategy Engine', es: 'Motor de Estrategia de Entrada al Mercado' },
          description: { en: 'AI-powered market entry analysis and strategic planning', es: 'Análisis de entrada al mercado y planificación estratégica impulsada por IA' },
          personas: ['founder', 'strategy'],
          category: 'expansion',
          icon: Map
        },
        {
          id: 'scaling-readiness-assessment',
          title: { en: 'Scaling Readiness Assessment', es: 'Evaluación de Preparación para Escalamiento' },
          description: { en: 'Comprehensive assessment of company readiness for scaling operations', es: 'Evaluación integral de la preparación de la empresa para escalar operaciones' },
          personas: ['founder', 'strategy'],
          category: 'expansion',
          icon: TrendingUp
        },
        {
          id: 'competitive-landscape-mapping',
          title: { en: 'Competitive Landscape Mapping', es: 'Mapeo del Panorama Competitivo' },
          description: { en: 'Dynamic competitive analysis and market positioning intelligence', es: 'Análisis competitivo dinámico e inteligencia de posicionamiento de mercado' },
          personas: ['founder', 'strategy'],
          category: 'expansion',
          icon: MapPin
        },
        {
          id: 'partnership-opportunity-engine',
          title: { en: 'Partnership Opportunity Engine', es: 'Motor de Oportunidades de Alianzas' },
          description: { en: 'AI-driven identification and evaluation of strategic partnership opportunities', es: 'Identificación y evaluación impulsada por IA de oportunidades de alianzas estratégicas' },
          personas: ['founder', 'strategy'],
          category: 'expansion',
          icon: Handshake
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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const filteredStructure = siteStructure.map(section => ({
    ...section,
    pages: section.pages.filter(page => 
      page.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.description[language].toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.pages.length > 0);

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
        <div className="flex justify-center gap-4 mb-8">
          <Button onClick={handleExpandAll} variant="outline" size="sm">
            {labels[language].expandAll}
          </Button>
          <Button onClick={handleCollapseAll} variant="outline" size="sm">
            {labels[language].collapseAll}
          </Button>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder={language === 'en' ? 'Search pages...' : 'Buscar páginas...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
          />
        </div>
      </div>

      {/* Sitemap Sections */}
      <div className="max-w-7xl mx-auto space-y-6">
        {filteredStructure.map((section) => {
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
                    <div className={`w-12 h-12 rounded-lg ${section.color} bg-opacity-10 flex items-center justify-center`}>
                      <SectionIcon className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-1">
                        {section.title[language]}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {section.description[language]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">
                      {section.pages.length} {language === 'en' ? 'pages' : 'páginas'}
                    </Badge>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>

              {/* Section Content */}
              {isExpanded && (
                <div className="border-t border-border bg-muted/20">
                  <div className="p-6 space-y-4">
                    {section.pages.map((page) => {
                      const PageIcon = page.icon;
                      const isCurrentPage = currentView === page.id;

                      return (
                        <div
                          key={page.id}
                          className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                            isCurrentPage 
                              ? 'bg-primary/10 border-primary' 
                              : 'bg-background border-border hover:bg-muted/50'
                          }`}
                        >
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                              <PageIcon className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-medium text-foreground">
                                  {page.title[language]}
                                </h3>
                                {isCurrentPage && (
                                  <Badge variant="default" className="text-xs">
                                    {labels[language].currentPage}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {page.description[language]}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  {labels[language].personas}:
                                </span>
                                <div className="flex gap-1">
                                  {page.personas.map((persona) => (
                                    <Badge
                                      key={persona}
                                      variant="secondary"
                                      className={`text-xs ${getPersonaBadgeColor([persona])}`}
                                    >
                                      {persona === 'all' ? labels[language].allPersonas :
                                       persona === 'founder' ? labels[language].founderMode :
                                       persona === 'trabajo' ? labels[language].trabajoMode :
                                       persona === 'accounting' ? labels[language].accountingMode :
                                       persona === 'strategy' ? labels[language].strategyMode :
                                       persona}
                                    </Badge>
                                  ))}
                                </div>
                                <Badge variant="outline" className="text-xs ml-2">
                                  {page.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() => onNavigate(page.id)}
                            variant={isCurrentPage ? "default" : "outline"}
                            size="sm"
                            className="ml-4"
                          >
                            {labels[language].navigate}
                          </Button>
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