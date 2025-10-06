import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Construction, ArrowLeft } from 'lucide-react';

interface StrategicModulePlaceholderProps {
  language: 'en' | 'es';
  moduleId: string;
  title: string;
  description: string;
  category: string;
  onNavigate: (view: string) => void;
}

export function StrategicModulePlaceholder({ 
  language, 
  moduleId, 
  title, 
  description, 
  category,
  onNavigate 
}: StrategicModulePlaceholderProps) {
  const labels = {
    en: {
      comingSoon: 'Coming Soon',
      moduleInDevelopment: 'This strategic module is currently in development',
      features: 'Planned Features',
      backToSitemap: 'Back to Sitemap',
      category: 'Category'
    },
    es: {
      comingSoon: 'Próximamente',
      moduleInDevelopment: 'Este módulo estratégico está actualmente en desarrollo',
      features: 'Características Planificadas',
      backToSitemap: 'Volver al Mapa del Sitio',
      category: 'Categoría'
    }
  };

  // Sample features based on category
  const getFeatures = () => {
    switch (category) {
      case 'market-intel':
        return language === 'en' 
          ? ['Market Analysis Dashboard', 'Cultural Intelligence Engine', 'Expansion Strategy Builder', 'ROI Modeling Tools']
          : ['Panel de Análisis de Mercado', 'Motor de Inteligencia Cultural', 'Constructor de Estrategia de Expansión', 'Herramientas de Modelado ROI'];
      case 'advisory':
        return language === 'en'
          ? ['AI-Powered Recommendations', 'McKinsey-Grade Analysis', 'Strategic Frameworks', 'Performance Benchmarking']
          : ['Recomendaciones Impulsadas por IA', 'Análisis de Grado McKinsey', 'Marcos Estratégicos', 'Benchmarking de Desempeño'];
      case 'leadership':
        return language === 'en'
          ? ['Leadership Assessment', 'Coaching Programs', 'Succession Planning', 'Peer Networks']
          : ['Evaluación de Liderazgo', 'Programas de Coaching', 'Planificación de Sucesión', 'Redes de Pares'];
      case 'crisis':
        return language === 'en'
          ? ['Real-time Monitoring', 'Automated Protocols', 'Stakeholder Communication', 'Recovery Planning']
          : ['Monitoreo en Tiempo Real', 'Protocolos Automatizados', 'Comunicación con Stakeholders', 'Planificación de Recuperación'];
      case 'expansion':
        return language === 'en'
          ? ['Market Entry Analysis', 'Scaling Readiness Assessment', 'Competitive Intelligence', 'Partnership Engine']
          : ['Análisis de Entrada al Mercado', 'Evaluación de Preparación para Escalamiento', 'Inteligencia Competitiva', 'Motor de Alianzas'];
      default:
        return language === 'en'
          ? ['Advanced Analytics', 'Strategic Insights', 'Performance Optimization', 'Decision Support']
          : ['Análisis Avanzado', 'Insights Estratégicos', 'Optimización de Desempeño', 'Apoyo a Decisiones'];
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
            <Construction className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Badge variant="secondary">{labels[language].comingSoon}</Badge>
          <Badge variant="outline">{labels[language].category}: {category}</Badge>
        </div>
      </div>

      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Construction className="w-8 h-8 text-orange-500" />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{labels[language].comingSoon}</h3>
        <p className="text-muted-foreground mb-6">
          {labels[language].moduleInDevelopment}
        </p>

        <div className="max-w-md mx-auto">
          <h4 className="font-medium mb-4">{labels[language].features}:</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {getFeatures().map((feature, index) => (
              <div key={index} className="p-3 bg-muted/50 rounded-lg">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Navigation Actions */}
      <div className="flex gap-4 pt-6 border-t">
        <Button onClick={() => onNavigate('sitemap')} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {labels[language].backToSitemap}
        </Button>
      </div>
    </div>
  );
}