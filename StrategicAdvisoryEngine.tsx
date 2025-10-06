import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Brain, Lightbulb, Target, TrendingUp, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface StrategicAdvisoryEngineProps {
  language: 'en' | 'es';
  currentMode: string;
  onNavigate: (view: string) => void;
}

export function StrategicAdvisoryEngine({ language, currentMode, onNavigate }: StrategicAdvisoryEngineProps) {
  const [selectedCompanyStage, setSelectedCompanyStage] = useState('growth');
  const [activeRecommendation, setActiveRecommendation] = useState(0);

  const labels = {
    en: {
      title: 'Strategic Advisory Engine',
      subtitle: 'AI-powered strategic recommendations based on company lifecycle and performance',
      companyStage: 'Company Stage',
      recommendations: 'Strategic Recommendations',
      implementation: 'Implementation Priority',
      impact: 'Expected Impact',
      timeline: 'Timeline',
      riskLevel: 'Risk Level',
      startup: 'Startup',
      growth: 'Growth',
      scale: 'Scale',
      mature: 'Mature',
      priority: 'Priority',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      immediate: 'Immediate',
      shortTerm: '3-6 months',
      mediumTerm: '6-12 months',
      longTerm: '12+ months',
      viewDetails: 'View Details',
      implement: 'Start Implementation'
    },
    es: {
      title: 'Motor de Asesoría Estratégica',
      subtitle: 'Recomendaciones estratégicas impulsadas por IA basadas en el ciclo de vida y desempeño de la empresa',
      companyStage: 'Etapa de la Empresa',
      recommendations: 'Recomendaciones Estratégicas',
      implementation: 'Prioridad de Implementación',
      impact: 'Impacto Esperado',
      timeline: 'Cronograma',
      riskLevel: 'Nivel de Riesgo',
      startup: 'Startup',
      growth: 'Crecimiento',
      scale: 'Escalamiento',
      mature: 'Maduro',
      priority: 'Prioridad',
      high: 'Alto',
      medium: 'Medio',
      low: 'Bajo',
      immediate: 'Inmediato',
      shortTerm: '3-6 meses',
      mediumTerm: '6-12 meses',
      longTerm: '12+ meses',
      viewDetails: 'Ver Detalles',
      implement: 'Iniciar Implementación'
    }
  };

  const companyStages = [
    { id: 'startup', label: labels[language].startup, icon: Lightbulb },
    { id: 'growth', label: labels[language].growth, icon: TrendingUp },
    { id: 'scale', label: labels[language].scale, icon: Target },
    { id: 'mature', label: labels[language].mature, icon: CheckCircle }
  ];

  const recommendations = {
    startup: [
      {
        id: 'culture-foundation',
        title: language === 'en' ? 'Establish Cultural Foundation' : 'Establecer Base Cultural',
        description: language === 'en' 
          ? 'Define and implement core company values and cultural practices early'
          : 'Definir e implementar valores fundamentales de la empresa y prácticas culturales temprano',
        priority: 'high',
        impact: '95%',
        timeline: 'immediate',
        risk: 'low',
        category: 'Culture'
      },
      {
        id: 'basic-hr-structure',
        title: language === 'en' ? 'Basic HR Structure Setup' : 'Configuración de Estructura Básica de RH',
        description: language === 'en' 
          ? 'Implement essential HR processes and documentation systems'
          : 'Implementar procesos esenciales de RH y sistemas de documentación',
        priority: 'high',
        impact: '80%',
        timeline: 'shortTerm',
        risk: 'low',
        category: 'Operations'
      },
      {
        id: 'compliance-basics',
        title: language === 'en' ? 'Compliance Foundations' : 'Fundamentos de Cumplimiento',
        description: language === 'en' 
          ? 'Establish basic legal and regulatory compliance framework'
          : 'Establecer marco básico de cumplimiento legal y regulatorio',
        priority: 'high',
        impact: '90%',
        timeline: 'immediate',
        risk: 'high',
        category: 'Legal'
      }
    ],
    growth: [
      {
        id: 'scalable-processes',
        title: language === 'en' ? 'Implement Scalable Processes' : 'Implementar Procesos Escalables',
        description: language === 'en' 
          ? 'Design and implement HR processes that can scale with company growth'
          : 'Diseñar e implementar procesos de RH que puedan escalar con el crecimiento de la empresa',
        priority: 'high',
        impact: '85%',
        timeline: 'mediumTerm',
        risk: 'medium',
        category: 'Operations'
      },
      {
        id: 'performance-management',
        title: language === 'en' ? 'Performance Management System' : 'Sistema de Gestión de Desempeño',
        description: language === 'en' 
          ? 'Establish comprehensive performance tracking and management systems'
          : 'Establecer sistemas integrales de seguimiento y gestión del desempeño',
        priority: 'high',
        impact: '75%',
        timeline: 'shortTerm',
        risk: 'medium',
        category: 'HR'
      },
      {
        id: 'talent-acquisition',
        title: language === 'en' ? 'Strategic Talent Acquisition' : 'Adquisición Estratégica de Talento',
        description: language === 'en' 
          ? 'Develop strategic hiring processes and talent pipeline management'
          : 'Desarrollar procesos de contratación estratégica y gestión de pipeline de talento',
        priority: 'medium',
        impact: '70%',
        timeline: 'mediumTerm',
        risk: 'medium',
        category: 'Talent'
      }
    ],
    scale: [
      {
        id: 'advanced-analytics',
        title: language === 'en' ? 'Advanced HR Analytics' : 'Análisis Avanzado de RH',
        description: language === 'en' 
          ? 'Implement predictive analytics and advanced HR metrics systems'
          : 'Implementar análisis predictivo y sistemas avanzados de métricas de RH',
        priority: 'high',
        impact: '90%',
        timeline: 'mediumTerm',
        risk: 'low',
        category: 'Analytics'
      },
      {
        id: 'cross-border-expansion',
        title: language === 'en' ? 'Cross-Border Operations' : 'Operaciones Transfronterizas',
        description: language === 'en' 
          ? 'Establish frameworks for international expansion and cross-border compliance'
          : 'Establecer marcos para expansión internacional y cumplimiento transfronterizo',
        priority: 'high',
        impact: '95%',
        timeline: 'longTerm',
        risk: 'high',
        category: 'Expansion'
      },
      {
        id: 'leadership-development',
        title: language === 'en' ? 'Leadership Development Program' : 'Programa de Desarrollo de Liderazgo',
        description: language === 'en' 
          ? 'Create comprehensive leadership development and succession planning'
          : 'Crear desarrollo integral de liderazgo y planificación de sucesión',
        priority: 'medium',
        impact: '80%',
        timeline: 'longTerm',
        risk: 'low',
        category: 'Leadership'
      }
    ],
    mature: [
      {
        id: 'innovation-culture',
        title: language === 'en' ? 'Innovation Culture Transformation' : 'Transformación de Cultura de Innovación',
        description: language === 'en' 
          ? 'Revitalize company culture to maintain innovation and competitive edge'
          : 'Revitalizar la cultura empresarial para mantener la innovación y ventaja competitiva',
        priority: 'high',
        impact: '85%',
        timeline: 'longTerm',
        risk: 'medium',
        category: 'Culture'
      },
      {
        id: 'digital-transformation',
        title: language === 'en' ? 'Digital HR Transformation' : 'Transformación Digital de RH',
        description: language === 'en' 
          ? 'Complete digital overhaul of HR systems and processes'
          : 'Renovación digital completa de sistemas y procesos de RH',
        priority: 'medium',
        impact: '75%',
        timeline: 'longTerm',
        risk: 'medium',
        category: 'Technology'
      },
      {
        id: 'strategic-partnerships',
        title: language === 'en' ? 'Strategic Partnership Development' : 'Desarrollo de Alianzas Estratégicas',
        description: language === 'en' 
          ? 'Form strategic alliances to expand market reach and capabilities'
          : 'Formar alianzas estratégicas para expandir alcance de mercado y capacidades',
        priority: 'medium',
        impact: '70%',
        timeline: 'mediumTerm',
        risk: 'medium',
        category: 'Strategy'
      }
    ]
  };

  const currentRecommendations = recommendations[selectedCompanyStage as keyof typeof recommendations] || [];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-indigo-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{labels[language].title}</h1>
            <p className="text-muted-foreground">{labels[language].subtitle}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Badge variant="secondary">McKinsey-Grade Intelligence</Badge>
          <Badge variant="secondary">AI-Powered</Badge>
          <Badge variant="secondary">Strategic Planning</Badge>
        </div>
      </div>

      {/* Company Stage Selection */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">{labels[language].companyStage}</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {companyStages.map((stage) => {
            const StageIcon = stage.icon;
            const isSelected = selectedCompanyStage === stage.id;
            
            return (
              <Button
                key={stage.id}
                variant={isSelected ? 'default' : 'outline'}
                onClick={() => setSelectedCompanyStage(stage.id)}
                className="h-auto p-4 flex flex-col items-center gap-2"
              >
                <StageIcon className="w-6 h-6" />
                <span className="text-sm">{stage.label}</span>
              </Button>
            );
          })}
        </div>
      </Card>

      {/* Strategic Recommendations */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-6">{labels[language].recommendations}</h3>
        <div className="space-y-4">
          {currentRecommendations.map((rec, index) => (
            <div
              key={rec.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                activeRecommendation === index
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
                  : 'border-border hover:border-indigo-300'
              }`}
              onClick={() => setActiveRecommendation(index)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{rec.title}</h4>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {labels[language][rec.priority as keyof typeof labels[typeof language]]}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {rec.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {rec.description}
                  </p>

                  {activeRecommendation === index && (
                    <div className="grid lg:grid-cols-4 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-500">{rec.impact}</div>
                        <div className="text-xs text-muted-foreground">{labels[language].impact}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{labels[language][rec.timeline as keyof typeof labels[typeof language]]}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{labels[language].timeline}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <AlertTriangle className={`w-4 h-4 ${getRiskColor(rec.risk)}`} />
                          <span className={`text-sm ${getRiskColor(rec.risk)}`}>
                            {labels[language][rec.risk as keyof typeof labels[typeof language]]}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">{labels[language].riskLevel}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          {labels[language].viewDetails}
                        </Button>
                        <Button size="sm">
                          {labels[language].implement}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Navigation Actions */}
      <div className="flex gap-4 pt-6 border-t">
        <Button onClick={() => onNavigate('executive-decision-support')} variant="outline">
          {language === 'en' ? 'Decision Support System →' : 'Sistema de Apoyo a Decisiones →'}
        </Button>
        <Button onClick={() => onNavigate('board-ready-insights')} variant="outline">
          {language === 'en' ? 'Board-Ready Insights →' : 'Insights para Junta Directiva →'}
        </Button>
        <Button onClick={() => onNavigate('industry-benchmark-analysis')} variant="outline">
          {language === 'en' ? 'Industry Benchmarks →' : 'Benchmarks de Industria →'}
        </Button>
      </div>
    </div>
  );
}