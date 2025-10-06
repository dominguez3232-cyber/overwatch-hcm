import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface BlogPost {
  id: string;
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  category: { en: string; es: string };
  readTime: string;
  date: string;
  author: string;
}

interface CaseStudy {
  id: string;
  company: string;
  industry: { en: string; es: string };
  challenge: { en: string; es: string };
  solution: { en: string; es: string };
  results: { en: string; es: string };
  metrics: {
    roi: string;
    efficiency: string;
    satisfaction: string;
  };
}

export function BlogSection({ language }: { language: 'en' | 'es' }) {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: { 
        en: 'The Future of HR: From Cost Center to Command Center',
        es: 'El Futuro de RH: De Centro de Costos a Centro de Comando'
      },
      excerpt: { 
        en: 'How forward-thinking companies are transforming HR into a strategic advantage using data-driven insights.',
        es: 'Cómo las empresas visionarias están transformando RH en una ventaja estratégica usando insights basados en datos.'
      },
      category: { en: 'Strategic HR', es: 'RH Estratégico' },
      readTime: '8 min',
      date: '2024-12-01',
      author: 'OVERWATCH Team'
    },
    {
      id: '2',
      title: { 
        en: 'Culture as a Force Multiplier: The Queen Piece Strategy',
        es: 'Cultura como Multiplicador de Fuerza: La Estrategia Pieza Reina'
      },
      excerpt: { 
        en: 'Discover how culture amplifies every business function and drives exponential growth in founder-led companies.',
        es: 'Descubre cómo la cultura amplifica cada función empresarial y impulsa el crecimiento exponencial en empresas lideradas por fundadores.'
      },
      category: { en: 'Culture', es: 'Cultura' },
      readTime: '12 min',
      date: '2024-11-28',
      author: 'OVERWATCH Team'
    },
    {
      id: '3',
      title: { 
        en: 'Bilingual HR: Serving the Latino Market with Cultural Intelligence',
        es: 'RH Bilingüe: Sirviendo al Mercado Latino con Inteligencia Cultural'
      },
      excerpt: { 
        en: 'Why bilingual HR platforms are essential for companies operating in diverse markets and cross-border operations.',
        es: 'Por qué las plataformas de RH bilingües son esenciales para empresas que operan en mercados diversos y operaciones transfronterizas.'
      },
      category: { en: 'Diversity & Inclusion', es: 'Diversidad e Inclusión' },
      readTime: '6 min',
      date: '2024-11-25',
      author: 'OVERWATCH Team'
    },
    {
      id: '4',
      title: { 
        en: 'ROI Modeling for HR Investments: Beyond Traditional Metrics',
        es: 'Modelado ROI para Inversiones en RH: Más Allá de Métricas Tradicionales'
      },
      excerpt: { 
        en: 'Advanced techniques for measuring and predicting ROI from HR initiatives using scenario modeling and universe trees.',
        es: 'Técnicas avanzadas para medir y predecir ROI de iniciativas de RH usando modelado de escenarios y árboles de universo.'
      },
      category: { en: 'Finance & HR', es: 'Finanzas y RH' },
      readTime: '10 min',
      date: '2024-11-22',
      author: 'OVERWATCH Team'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          {language === 'en' ? 'Latest Insights' : 'Últimos Insights'}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Strategic thoughts on transforming HR into a competitive advantage for founder-led companies.'
            : 'Pensamientos estratégicos sobre transformar RH en una ventaja competitiva para empresas lideradas por fundadores.'
          }
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                {language === 'en' ? post.category.en : post.category.es}
              </span>
              <span className="text-gray-400 text-sm">{post.readTime}</span>
              <span className="text-gray-400 text-sm">{post.date}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white">
              {language === 'en' ? post.title.en : post.title.es}
            </h3>
            
            <p className="text-gray-400 mb-4">
              {language === 'en' ? post.excerpt.en : post.excerpt.es}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">By {post.author}</span>
              <Button variant="ghost" className="text-green-400 hover:text-green-300">
                {language === 'en' ? 'Read More →' : 'Leer Más →'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function CaseStudiesSection({ language }: { language: 'en' | 'es' }) {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      company: 'TechFlow Solutions',
      industry: { en: 'Professional Services', es: 'Servicios Profesionales' },
      challenge: { 
        en: 'Struggling with 40% annual turnover and unclear ROI on HR investments across 3 locations.',
        es: 'Luchando con 40% de rotación anual y ROI poco claro en inversiones de RH en 3 ubicaciones.'
      },
      solution: { 
        en: 'Implemented OVERWATCH\'s 12-layer diagnostic and culture force multiplier framework.',
        es: 'Implementó el diagnóstico de 12 capas de OVERWATCH y el marco multiplicador de fuerza cultural.'
      },
      results: { 
        en: 'Reduced turnover to 12%, increased employee satisfaction by 65%, and achieved 3.2x ROI on HR investments.',
        es: 'Redujo rotación a 12%, aumentó satisfacción del empleado en 65%, y logró 3.2x ROI en inversiones de RH.'
      },
      metrics: {
        roi: '320%',
        efficiency: '65%',
        satisfaction: '88%'
      }
    },
    {
      id: '2',
      company: 'Global Logistics Corp',
      industry: { en: 'Logistics & Supply Chain', es: 'Logística y Cadena de Suministro' },
      challenge: { 
        en: 'Cross-border operations with language barriers affecting team cohesion and operational efficiency.',
        es: 'Operaciones transfronterizas con barreras idiomáticas afectando cohesión del equipo y eficiencia operacional.'
      },
      solution: { 
        en: 'Deployed bilingual OVERWATCH platform with cultural intelligence modules for Latino workforce.',
        es: 'Desplegó plataforma OVERWATCH bilingüe con módulos de inteligencia cultural para fuerza laboral Latina.'
      },
      results: { 
        en: 'Improved cross-cultural communication by 80%, reduced operational errors by 45%, and increased productivity by 30%.',
        es: 'Mejoró comunicación intercultural en 80%, redujo errores operacionales en 45%, y aumentó productividad en 30%.'
      },
      metrics: {
        roi: '280%',
        efficiency: '45%',
        satisfaction: '92%'
      }
    },
    {
      id: '3',
      company: 'Innovation Startup',
      industry: { en: 'Technology', es: 'Tecnología' },
      challenge: { 
        en: 'Rapid scaling from 15 to 150 employees with culture dilution and leadership bottlenecks.',
        es: 'Escalamiento rápido de 15 a 150 empleados con dilución cultural y cuellos de botella de liderazgo.'
      },
      solution: { 
        en: 'Used OVERWATCH\'s strategic diagnostic and implementation roadmap for sustainable growth.',
        es: 'Usó el diagnóstico estratégico de OVERWATCH y hoja de ruta de implementación para crecimiento sostenible.'
      },
      results: { 
        en: 'Maintained cultural integrity during 10x growth, established clear leadership pathways, achieved 95% employee retention.',
        es: 'Mantuvo integridad cultural durante crecimiento 10x, estableció vías claras de liderazgo, logró 95% retención de empleados.'
      },
      metrics: {
        roi: '450%',
        efficiency: '75%',
        satisfaction: '95%'
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          {language === 'en' ? 'Success Stories' : 'Historias de Éxito'}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Real companies achieving transformational results with OVERWATCH\'s strategic HR platform.'
            : 'Empresas reales logrando resultados transformacionales con la plataforma estratégica de RH de OVERWATCH.'
          }
        </p>
      </div>

      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <Card key={study.id} className="bg-slate-800 border-slate-700 p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{study.company[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{study.company}</h3>
                    <p className="text-gray-400 text-sm">
                      {language === 'en' ? study.industry.en : study.industry.es}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{study.metrics.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{study.metrics.efficiency}</div>
                    <div className="text-xs text-gray-400">
                      {language === 'en' ? 'Efficiency' : 'Eficiencia'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{study.metrics.satisfaction}</div>
                    <div className="text-xs text-gray-400">
                      {language === 'en' ? 'Satisfaction' : 'Satisfacción'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Challenge & Solution */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-bold text-red-400 mb-2">
                    {language === 'en' ? 'Challenge' : 'Desafío'}
                  </h4>
                  <p className="text-gray-300">
                    {language === 'en' ? study.challenge.en : study.challenge.es}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">
                    {language === 'en' ? 'Solution' : 'Solución'}
                  </h4>
                  <p className="text-gray-300">
                    {language === 'en' ? study.solution.en : study.solution.es}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-400 mb-2">
                    {language === 'en' ? 'Results' : 'Resultados'}
                  </h4>
                  <p className="text-gray-300">
                    {language === 'en' ? study.results.en : study.results.es}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function DownloadsSection({ language }: { language: 'en' | 'es' }) {
  const downloads = [
    {
      id: '1',
      title: { 
        en: 'HR Transformation Checklist',
        es: 'Lista de Verificación de Transformación RH'
      },
      description: { 
        en: '25-point checklist for evaluating your HR transformation readiness',
        es: 'Lista de 25 puntos para evaluar tu preparación para la transformación RH'
      },
      type: 'PDF',
      size: '2.1 MB',
      icon: '📋'
    },
    {
      id: '2',
      title: { 
        en: 'ROI Calculator Template',
        es: 'Plantilla Calculadora ROI'
      },
      description: { 
        en: 'Excel template for calculating HR investment ROI with scenario modeling',
        es: 'Plantilla Excel para calcular ROI de inversión en RH con modelado de escenarios'
      },
      type: 'XLSX',
      size: '1.8 MB',
      icon: '📊'
    },
    {
      id: '3',
      title: { 
        en: 'Culture Assessment Framework',
        es: 'Marco de Evaluación Cultural'
      },
      description: { 
        en: 'Comprehensive framework for measuring culture impact on business outcomes',
        es: 'Marco integral para medir el impacto cultural en resultados empresariales'
      },
      type: 'PDF',
      size: '3.2 MB',
      icon: '🎯'
    },
    {
      id: '4',
      title: { 
        en: 'Bilingual HR Best Practices Guide',
        es: 'Guía de Mejores Prácticas RH Bilingüe'
      },
      description: { 
        en: 'Strategic guide for implementing bilingual HR in multicultural organizations',
        es: 'Guía estratégica para implementar RH bilingüe en organizaciones multiculturales'
      },
      type: 'PDF',
      size: '2.7 MB',
      icon: '🌎'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          {language === 'en' ? 'Free Resources' : 'Recursos Gratuitos'}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {language === 'en' 
            ? 'Download our strategic tools and frameworks to start your HR transformation journey.'
            : 'Descarga nuestras herramientas y marcos estratégicos para comenzar tu viaje de transformación RH.'
          }
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {downloads.map((download) => (
          <Card key={download.id} className="bg-slate-800 border-slate-700 p-6 hover:border-green-500 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-2xl">
                {download.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">
                  {language === 'en' ? download.title.en : download.title.es}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
                  {language === 'en' ? download.description.en : download.description.es}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{download.type}</span>
                    <span>•</span>
                    <span>{download.size}</span>
                  </div>
                  
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    {language === 'en' ? 'Download' : 'Descargar'}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-400 mb-6">
          {language === 'en' 
            ? 'Want to see these frameworks in action?'
            : '¿Quieres ver estos marcos en acción?'
          }
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button className="bg-green-600 hover:bg-green-700">
            {language === 'en' ? 'Try Platform' : 'Probar Plataforma'}
          </Button>
          <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
            {language === 'en' ? 'Schedule Demo' : 'Agendar Demo'}
          </Button>
        </div>
      </div>
    </div>
  );
}