import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Building, 
  Users, 
  Brain, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Target,
  DollarSign,
  Shield,
  Zap,
  BarChart3,
  FileText,
  Download,
  ExternalLink
} from 'lucide-react';

interface IndustryData {
  id: string;
  name: string;
  icon: any;
  challenges: Challenge[];
  benchmarks: Benchmark[];
  strategies: Strategy[];
  caseStudies: CaseStudy[];
  trends: Trend[];
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  urgency: 'critical' | 'important' | 'moderate';
  solutions: string[];
}

interface Benchmark {
  metric: string;
  industry: number;
  topQuartile: number;
  overwatchAvg: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

interface Strategy {
  id: string;
  title: string;
  description: string;
  timeframe: string;
  complexity: 'basic' | 'intermediate' | 'advanced';
  roi: string;
  keyActions: string[];
}

interface CaseStudy {
  id: string;
  company: string;
  size: string;
  challenge: string;
  solution: string;
  results: string[];
  timeframe: string;
  roi: string;
}

interface Trend {
  id: string;
  title: string;
  description: string;
  impact: 'transformative' | 'significant' | 'moderate';
  timeline: string;
  implications: string[];
}

interface IndustryIntelligenceHubProps {
  language: 'en' | 'es';
}

export function IndustryIntelligenceHub({ language }: IndustryIntelligenceHubProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('manufacturing');
  const [activeTab, setActiveTab] = useState('overview');

  const labels = {
    en: {
      title: "Industry Intelligence Hub",
      subtitle: "Deep Industry Insights for Strategic HCM Advantage",
      overview: "Overview",
      challenges: "Key Challenges",
      benchmarks: "Performance Benchmarks",
      strategies: "Proven Strategies",
      caseStudies: "Case Studies",
      trends: "Future Trends",
      impact: "Impact Level",
      urgency: "Urgency",
      high: "High",
      medium: "Medium",
      low: "Low",
      critical: "Critical",
      important: "Important",
      moderate: "Moderate",
      solutions: "Recommended Solutions",
      topQuartile: "Top Quartile",
      industryAvg: "Industry Average",
      overwatchAvg: "OVERWATCH Average",
      timeframe: "Timeframe",
      complexity: "Complexity",
      roi: "Expected ROI",
      keyActions: "Key Actions",
      results: "Results Achieved",
      implications: "Strategic Implications",
      downloadReport: "Download Industry Report",
      viewDetails: "View Details"
    },
    es: {
      title: "Hub de Inteligencia de Industria",
      subtitle: "Insights Profundos de Industria para Ventaja HCM Estratégica",
      overview: "Resumen",
      challenges: "Desafíos Clave",
      benchmarks: "Benchmarks de Rendimiento",
      strategies: "Estrategias Probadas",
      caseStudies: "Casos de Estudio",
      trends: "Tendencias Futuras",
      impact: "Nivel de Impacto",
      urgency: "Urgencia",
      high: "Alto",
      medium: "Medio",
      low: "Bajo",
      critical: "Crítico",
      important: "Importante",
      moderate: "Moderado",
      solutions: "Soluciones Recomendadas",
      topQuartile: "Cuartil Superior",
      industryAvg: "Promedio de Industria",
      overwatchAvg: "Promedio OVERWATCH",
      timeframe: "Marco de Tiempo",
      complexity: "Complejidad",
      roi: "ROI Esperado",
      keyActions: "Acciones Clave",
      results: "Resultados Logrados",
      implications: "Implicaciones Estratégicas",
      downloadReport: "Descargar Reporte de Industria",
      viewDetails: "Ver Detalles"
    }
  };

  const currentLabels = labels[language];

  const industryData: IndustryData[] = [
    {
      id: 'manufacturing',
      name: language === 'en' ? 'Manufacturing' : 'Manufactura',
      icon: Building,
      challenges: [
        {
          id: 'skills-shortage',
          title: language === 'en' ? 'Critical Skills Shortage' : 'Escasez Crítica de Habilidades',
          description: language === 'en' 
            ? '2.1 million manufacturing jobs expected to go unfilled through 2030 due to skills gap and demographic shifts'
            : '2.1 millones de trabajos de manufactura se espera que queden sin cubrir hasta 2030 debido a brecha de habilidades y cambios demográficos',
          impact: 'high',
          urgency: 'critical',
          solutions: language === 'en' ? [
            'Apprenticeship and technical training partnerships',
            'Internal skills academies for continuous learning',
            'Competency-based advancement tracks',
            'VR/AR immersive training programs'
          ] : [
            'Asociaciones de aprendizaje y entrenamiento técnico',
            'Academias de habilidades internas para aprendizaje continuo',
            'Pistas de avance basadas en competencias',
            'Programas de entrenamiento inmersivo VR/AR'
          ]
        },
        {
          id: 'safety-culture',
          title: language === 'en' ? 'Safety Culture & Compliance' : 'Cultura de Seguridad y Cumplimiento',
          description: language === 'en'
            ? 'OSHA recordable injury rate 3.8 per 100 workers, with workers comp costs averaging $1.30 per $100 of payroll'
            : 'Tasa de lesiones registrables OSHA 3.8 por 100 trabajadores, con costos de compensación laboral promediando $1.30 por $100 de nómina',
          impact: 'high',
          urgency: 'critical',
          solutions: language === 'en' ? [
            'Behavior-based safety observation programs',
            'Safety leadership competency for all managers',
            'Real-time safety monitoring technology',
            'Safety performance linked to compensation'
          ] : [
            'Programas de observación de seguridad basados en comportamiento',
            'Competencia de liderazgo en seguridad para todos los gerentes',
            'Tecnología de monitoreo de seguridad en tiempo real',
            'Rendimiento de seguridad vinculado a compensación'
          ]
        },
        {
          id: 'technology-adoption',
          title: language === 'en' ? 'Industry 4.0 Technology Adoption' : 'Adopción de Tecnología Industria 4.0',
          description: language === 'en'
            ? 'Only 23% of manufacturers have fully automated processes, with 67% struggling with technology-skills gap'
            : 'Solo 23% de los fabricantes tienen procesos completamente automatizados, con 67% luchando con brecha de habilidades tecnológicas',
          impact: 'medium',
          urgency: 'important',
          solutions: language === 'en' ? [
            'Worker involvement in technology selection',
            'Extensive training during transitions',
            'Technology champion programs',
            'Clear business case communication'
          ] : [
            'Participación de trabajadores en selección de tecnología',
            'Entrenamiento extensivo durante transiciones',
            'Programas de campeones de tecnología',
            'Comunicación clara del caso de negocio'
          ]
        }
      ],
      benchmarks: [
        { metric: 'Voluntary Turnover Rate', industry: 22, topQuartile: 12, overwatchAvg: 8, unit: '%', trend: 'down' },
        { metric: 'Safety Incident Rate', industry: 3.8, topQuartile: 1.2, overwatchAvg: 0.9, unit: 'per 100', trend: 'down' },
        { metric: 'Skills Gap Index', industry: 67, topQuartile: 35, overwatchAvg: 28, unit: '%', trend: 'down' },
        { metric: 'Training ROI', industry: 4.2, topQuartile: 7.8, overwatchAvg: 9.2, unit: ':1', trend: 'up' },
        { metric: 'Employee Engagement', industry: 62, topQuartile: 78, overwatchAvg: 84, unit: '%', trend: 'up' }
      ],
      strategies: [
        {
          id: 'skills-development',
          title: language === 'en' ? 'Strategic Skills Development Program' : 'Programa Estratégico de Desarrollo de Habilidades',
          description: language === 'en'
            ? 'Comprehensive approach to addressing skills gaps through partnerships, internal academies, and technology-enabled learning'
            : 'Enfoque integral para abordar brechas de habilidades através de asociaciones, academias internas y aprendizaje habilitado por tecnología',
          timeframe: '6-12 months',
          complexity: 'intermediate',
          roi: '450-650%',
          keyActions: language === 'en' ? [
            'Establish partnerships with technical schools',
            'Create internal skills academies',
            'Implement VR/AR training programs',
            'Develop competency-based career paths'
          ] : [
            'Establecer asociaciones con escuelas técnicas',
            'Crear academias de habilidades internas',
            'Implementar programas de entrenamiento VR/AR',
            'Desarrollar rutas de carrera basadas en competencias'
          ]
        }
      ],
      caseStudies: [
        {
          id: 'midwest-manufacturing',
          company: 'Midwest Manufacturing Co.',
          size: '450 employees',
          challenge: language === 'en' 
            ? 'High turnover (28%) and safety incidents costing $2.1M annually'
            : 'Alta rotación (28%) e incidentes de seguridad costando $2.1M anualmente',
          solution: language === 'en'
            ? 'Implemented OVERWATCH safety culture program with behavior-based monitoring and skills development'
            : 'Implementó programa de cultura de seguridad OVERWATCH con monitoreo basado en comportamiento y desarrollo de habilidades',
          results: language === 'en' ? [
            '72% reduction in safety incidents',
            '45% decrease in voluntary turnover',
            '$1.8M annual savings in workers comp costs',
            '23% improvement in productivity'
          ] : [
            '72% reducción en incidentes de seguridad',
            '45% disminución en rotación voluntaria',
            '$1.8M ahorros anuales en costos de compensación laboral',
            '23% mejora en productividad'
          ],
          timeframe: '18 months',
          roi: '8.2:1'
        }
      ],
      trends: [
        {
          id: 'smart-manufacturing',
          title: language === 'en' ? 'Smart Manufacturing & AI Integration' : 'Manufactura Inteligente e Integración IA',
          description: language === 'en'
            ? 'Integration of IoT, AI, and robotics requiring new technical skills and human-machine collaboration models'
            : 'Integración de IoT, IA y robótica requiriendo nuevas habilidades técnicas y modelos de colaboración humano-máquina',
          impact: 'transformative',
          timeline: '2-5 years',
          implications: language === 'en' ? [
            'Need for data analysis and systems integration skills',
            'Enhanced focus on cybersecurity alongside traditional safety',
            'Breaking down silos between engineering, operations, and IT',
            'Continuous learning requirements due to rapid technology change'
          ] : [
            'Necesidad de habilidades de análisis de datos e integración de sistemas',
            'Enfoque mejorado en ciberseguridad junto con seguridad tradicional',
            'Rompiendo silos entre ingeniería, operaciones e IT',
            'Requisitos de aprendizaje continuo debido a cambio tecnológico rápido'
          ]
        }
      ]
    },
    {
      id: 'professional-services',
      name: language === 'en' ? 'Professional Services' : 'Servicios Profesionales',
      icon: Users,
      challenges: [
        {
          id: 'talent-competition',
          title: language === 'en' ? 'Intense Talent Competition' : 'Competencia Intensa por Talento',
          description: language === 'en'
            ? 'Competition for top-tier talent with high compensation expectations straining margins'
            : 'Competencia por talento de primer nivel con altas expectativas de compensación tensando márgenes',
          impact: 'high',
          urgency: 'critical',
          solutions: language === 'en' ? [
            'Competency-based advancement criteria',
            'Comprehensive development programs',
            'Flexible work arrangements',
            'Non-monetary recognition and value creation'
          ] : [
            'Criterios de avance basados en competencias',
            'Programas de desarrollo integrales',
            'Arreglos de trabajo flexibles',
            'Reconocimiento no monetario y creación de valor'
          ]
        }
      ],
      benchmarks: [
        { metric: 'Utilization Rate', industry: 68, topQuartile: 78, overwatchAvg: 82, unit: '%', trend: 'up' },
        { metric: 'Client Retention', industry: 85, topQuartile: 94, overwatchAvg: 96, unit: '%', trend: 'up' },
        { metric: 'Partner Track Success', industry: 12, topQuartile: 28, overwatchAvg: 35, unit: '%', trend: 'up' },
        { metric: 'Revenue per Employee', industry: 285000, topQuartile: 425000, overwatchAvg: 465000, unit: '$', trend: 'up' }
      ],
      strategies: [],
      caseStudies: [],
      trends: []
    },
    {
      id: 'technology',
      name: language === 'en' ? 'Technology' : 'Tecnología',
      icon: Brain,
      challenges: [
        {
          id: 'rapid-change',
          title: language === 'en' ? 'Rapid Technology Evolution' : 'Evolución Tecnológica Rápida',
          description: language === 'en'
            ? 'Continuous skill pivoting required as technology landscapes evolve rapidly'
            : 'Pivoteo continuo de habilidades requerido mientras paisajes tecnológicos evolucionan rápidamente',
          impact: 'high',
          urgency: 'critical',
          solutions: language === 'en' ? [
            'Continuous learning infrastructure',
            'Internal mobility programs',
            'Cross-functional skill development',
            'Innovation culture establishment'
          ] : [
            'Infraestructura de aprendizaje continuo',
            'Programas de movilidad interna',
            'Desarrollo de habilidades transversales',
            'Establecimiento de cultura de innovación'
          ]
        }
      ],
      benchmarks: [
        { metric: 'Time to Hire', industry: 45, topQuartile: 28, overwatchAvg: 22, unit: 'days', trend: 'down' },
        { metric: 'Employee Satisfaction', industry: 72, topQuartile: 85, overwatchAvg: 89, unit: '%', trend: 'up' },
        { metric: 'Innovation Index', industry: 58, topQuartile: 78, overwatchAvg: 84, unit: '%', trend: 'up' },
        { metric: 'Skill Development Rate', industry: 42, topQuartile: 68, overwatchAvg: 75, unit: '%', trend: 'up' }
      ],
      strategies: [],
      caseStudies: [],
      trends: []
    }
  ];

  const currentIndustry = industryData.find(ind => ind.id === selectedIndustry) || industryData[0];
  const IndustryIcon = currentIndustry.icon;

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': case 'transformative': return 'bg-red-600/20 text-red-400 border-red-600/40';
      case 'medium': case 'significant': return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/40';
      case 'low': case 'moderate': return 'bg-green-600/20 text-green-400 border-green-600/40';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600/40';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-600/20 text-red-400 border-red-600/40';
      case 'important': return 'bg-orange-600/20 text-orange-400 border-orange-600/40';
      case 'moderate': return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/40';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-600/40';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      default: return <div className="w-4 h-4 rounded-full bg-gray-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-blue-600/20 border-blue-600/40 text-blue-400 px-4 py-2">
          <BarChart3 className="w-4 h-4 mr-2" />
          Industry Intelligence
        </Badge>
        
        <h1 className="text-3xl font-bold text-white">
          {currentLabels.title}
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {currentLabels.subtitle}
        </p>
      </div>

      {/* Industry Selector */}
      <div className="flex justify-center">
        <div className="flex gap-2 p-1 bg-gray-800 rounded-lg">
          {industryData.map((industry) => {
            const Icon = industry.icon;
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedIndustry === industry.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {industry.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Industry Header */}
      <Card className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 border-blue-500/30 p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-blue-600">
            <IndustryIcon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">{currentIndustry.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">
                  {currentIndustry.challenges.length}
                </div>
                <div className="text-sm text-gray-400">Key Challenges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {currentIndustry.benchmarks.length}
                </div>
                <div className="text-sm text-gray-400">Benchmarks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">
                  {currentIndustry.strategies.length + currentIndustry.caseStudies.length}
                </div>
                <div className="text-sm text-gray-400">Solutions</div>
              </div>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            {currentLabels.downloadReport}
          </Button>
        </div>
      </Card>

      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-6 bg-gray-800">
          <TabsTrigger value="challenges">{currentLabels.challenges}</TabsTrigger>
          <TabsTrigger value="benchmarks">{currentLabels.benchmarks}</TabsTrigger>
          <TabsTrigger value="strategies">{currentLabels.strategies}</TabsTrigger>
          <TabsTrigger value="cases">{currentLabels.caseStudies}</TabsTrigger>
          <TabsTrigger value="trends">{currentLabels.trends}</TabsTrigger>
          <TabsTrigger value="vc-landscape">
            {language === 'en' ? 'VC Landscape' : 'Panorama VC'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentIndustry.challenges.map((challenge) => (
              <Card key={challenge.id} className="bg-card/80 border-gray-600 p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-white">{challenge.title}</h3>
                    <div className="flex gap-2">
                      <Badge className={getImpactColor(challenge.impact)}>
                        {currentLabels[challenge.impact as keyof typeof currentLabels]}
                      </Badge>
                      <Badge className={getUrgencyColor(challenge.urgency)}>
                        {currentLabels[challenge.urgency as keyof typeof currentLabels]}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm">{challenge.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {currentLabels.solutions}
                    </h4>
                    <div className="space-y-2">
                      {challenge.solutions.map((solution, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="benchmarks" className="space-y-6">
          <div className="space-y-4">
            {currentIndustry.benchmarks.map((benchmark, index) => (
              <Card key={index} className="bg-card/80 border-gray-600 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-white">{benchmark.metric}</h3>
                    {getTrendIcon(benchmark.trend)}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-400 mb-1">
                      {benchmark.industry.toLocaleString()}{benchmark.unit}
                    </div>
                    <div className="text-sm text-gray-500">{currentLabels.industryAvg}</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-600/10 rounded-lg border border-blue-600/30">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      {benchmark.topQuartile.toLocaleString()}{benchmark.unit}
                    </div>
                    <div className="text-sm text-blue-300">{currentLabels.topQuartile}</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-600/10 rounded-lg border border-green-600/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {benchmark.overwatchAvg.toLocaleString()}{benchmark.unit}
                    </div>
                    <div className="text-sm text-green-300">{currentLabels.overwatchAvg}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="strategies" className="space-y-6">
          {currentIndustry.strategies.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentIndustry.strategies.map((strategy) => (
                <Card key={strategy.id} className="bg-card/80 border-gray-600 p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-white">{strategy.title}</h3>
                      <Badge className="bg-green-600/20 text-green-400 border-green-600/40">
                        {strategy.complexity}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-400 text-sm">{strategy.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">{currentLabels.timeframe}</div>
                        <div className="font-medium text-white">{strategy.timeframe}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{currentLabels.roi}</div>
                        <div className="font-medium text-green-400">{strategy.roi}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white mb-2">{currentLabels.keyActions}</h4>
                      <div className="space-y-1">
                        {strategy.keyActions.map((action, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {currentLabels.viewDetails}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-400 mb-2">
                {language === 'en' ? 'Strategies Coming Soon' : 'Estrategias Próximamente'}
              </h3>
              <p className="text-gray-500">
                {language === 'en' 
                  ? 'Industry-specific strategies are being curated for this sector'
                  : 'Estrategias específicas de la industria están siendo curadas para este sector'
                }
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="cases" className="space-y-6">
          {currentIndustry.caseStudies.length > 0 ? (
            <div className="space-y-6">
              {currentIndustry.caseStudies.map((caseStudy) => (
                <Card key={caseStudy.id} className="bg-card/80 border-gray-600 p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-white">{caseStudy.company}</h3>
                        <p className="text-gray-400">{caseStudy.size}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{caseStudy.roi}</div>
                        <div className="text-sm text-gray-400">ROI</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-white mb-2">Challenge</h4>
                        <p className="text-gray-400 text-sm">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-2">Solution</h4>
                        <p className="text-gray-400 text-sm">{caseStudy.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white mb-2">{currentLabels.results}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {caseStudy.results.map((result, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                      <span className="text-sm text-gray-500">
                        Timeframe: {caseStudy.timeframe}
                      </span>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <FileText className="w-4 h-4 mr-2" />
                        Full Case Study
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-400 mb-2">
                {language === 'en' ? 'Case Studies Coming Soon' : 'Casos de Estudio Próximamente'}
              </h3>
              <p className="text-gray-500">
                {language === 'en' 
                  ? 'Success stories from this industry are being documented'
                  : 'Historias de éxito de esta industria están siendo documentadas'
                }
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          {currentIndustry.trends.length > 0 ? (
            <div className="space-y-6">
              {currentIndustry.trends.map((trend) => (
                <Card key={trend.id} className="bg-card/80 border-gray-600 p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-white">{trend.title}</h3>
                      <div className="flex gap-2">
                        <Badge className={getImpactColor(trend.impact)}>
                          {trend.impact}
                        </Badge>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
                          {trend.timeline}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-400">{trend.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-white mb-2">{currentLabels.implications}</h4>
                      <div className="space-y-2">
                        {trend.implications.map((implication, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{implication}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-400 mb-2">
                {language === 'en' ? 'Trend Analysis Coming Soon' : 'Análisis de Tendencias Próximamente'}
              </h3>
              <p className="text-gray-500">
                {language === 'en' 
                  ? 'Future trends and insights for this industry are being analyzed'
                  : 'Tendencias futuras e insights para esta industria están siendo analizados'
                }
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="vc-landscape" className="space-y-6">
          {/* VC Funding Landscape for HCM SaaS */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card/80 border-gray-600 p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                {language === 'en' ? 'HCM SaaS Market Intelligence' : 'Inteligencia de Mercado HCM SaaS'}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                  <span className="text-gray-300">{language === 'en' ? 'Market Size (2032)' : 'Tamaño de Mercado (2032)'}</span>
                  <span className="font-bold text-green-400">$65B</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                  <span className="text-gray-300">CAGR</span>
                  <span className="font-bold text-blue-400">9.6%</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">{language === 'en' ? 'Key Investment Trends' : 'Tendencias de Inversión Clave'}</h4>
                  <ul className="text-sm space-y-1 text-gray-300">
                    <li>• {language === 'en' ? 'AI-driven recruiting and compliance automation' : 'Automatización de reclutamiento y cumplimiento con IA'}</li>
                    <li>• {language === 'en' ? 'Global payroll and multi-entity solutions' : 'Nómina global y soluciones multi-entidad'}</li>
                    <li>• {language === 'en' ? 'Employee engagement and analytics platforms' : 'Plataformas de compromiso y analítica de empleados'}</li>
                    <li>• {language === 'en' ? 'DEI data-driven initiatives' : 'Iniciativas de DEI basadas en datos'}</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 border-gray-600 p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                {language === 'en' ? 'VC Evaluation Criteria' : 'Criterios de Evaluación VC'}
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-700 rounded">
                  <div className="font-semibold text-white mb-1">{language === 'en' ? 'Key Metrics Focus' : 'Enfoque en Métricas Clave'}</div>
                  <div className="text-sm text-gray-300">
                    NRR: 110-130%+ | Churn: &lt;5% | LTV:CAC: 3:1+
                  </div>
                </div>
                <div className="p-3 bg-slate-700 rounded">
                  <div className="font-semibold text-white mb-1">{language === 'en' ? 'Defensible Moats' : 'Fosos Defendibles'}</div>
                  <div className="text-sm text-gray-300">
                    {language === 'en' 
                      ? 'Platform extensibility, regulatory mastery, AI compliance'
                      : 'Extensibilidad de plataforma, dominio regulatorio, cumplimiento IA'
                    }
                  </div>
                </div>
                <div className="p-3 bg-slate-700 rounded">
                  <div className="font-semibold text-white mb-1">{language === 'en' ? 'Integration Priority' : 'Prioridad de Integración'}</div>
                  <div className="text-sm text-gray-300">
                    {language === 'en' 
                      ? 'Payroll/Finance/Talent/External HR tools'
                      : 'Nómina/Finanzas/Talento/Herramientas RH externas'
                    }
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Competitive Landscape */}
          <Card className="bg-card/80 border-gray-600 p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              {language === 'en' ? 'Competitive Funding Landscape' : 'Panorama Competitivo de Financiamiento'}
            </h3>
            <div className="grid lg:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-700 rounded">
                <h4 className="font-bold text-white">Workday</h4>
                <div className="text-sm text-gray-300 space-y-1 mt-2">
                  <div>Market Cap: $58B</div>
                  <div>Revenue: $8.45B</div>
                  <div>NRR: 108%</div>
                </div>
              </div>
              <div className="p-4 bg-slate-700 rounded">
                <h4 className="font-bold text-white">Ceridian</h4>
                <div className="text-sm text-gray-300 space-y-1 mt-2">
                  <div>Market Cap: $12B</div>
                  <div>Revenue: $1.4B</div>
                  <div>NRR: 111%</div>
                </div>
              </div>
              <div className="p-4 bg-slate-700 rounded">
                <h4 className="font-bold text-white">Gusto</h4>
                <div className="text-sm text-gray-300 space-y-1 mt-2">
                  <div>Valuation: $9.5B</div>
                  <div>Revenue: $200M+</div>
                  <div>NRR: 115%</div>
                </div>
              </div>
              <div className="p-4 bg-slate-700 rounded">
                <h4 className="font-bold text-white">Rippling</h4>
                <div className="text-sm text-gray-300 space-y-1 mt-2">
                  <div>Valuation: $13.5B</div>
                  <div>Revenue: $270M+</div>
                  <div>NRR: 120%</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Investment Stage Analysis */}
          <Card className="bg-card/80 border-gray-600 p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              {language === 'en' ? 'Funding Stage Benchmarks' : 'Benchmarks por Etapa de Financiamiento'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 text-gray-300">{language === 'en' ? 'Stage' : 'Etapa'}</th>
                    <th className="text-left py-3 text-gray-300">{language === 'en' ? 'ARR Target' : 'Meta ARR'}</th>
                    <th className="text-left py-3 text-gray-300">{language === 'en' ? 'Funding Range' : 'Rango de Financiamiento'}</th>
                    <th className="text-left py-3 text-gray-300">{language === 'en' ? 'Key Focus' : 'Enfoque Clave'}</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 font-semibold">Seed</td>
                    <td className="py-3">$100K+ ARR</td>
                    <td className="py-3">$1M - $5M</td>
                    <td className="py-3">{language === 'en' ? 'Product-Market Fit' : 'Ajuste Producto-Mercado'}</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 font-semibold">Series A</td>
                    <td className="py-3">$1M+ ARR</td>
                    <td className="py-3">$5M - $20M</td>
                    <td className="py-3">{language === 'en' ? 'Repeatable Sales' : 'Ventas Repetibles'}</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 font-semibold">Series B</td>
                    <td className="py-3">$10M+ ARR</td>
                    <td className="py-3">$15M - $50M</td>
                    <td className="py-3">{language === 'en' ? 'Market Expansion' : 'Expansión de Mercado'}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Growth</td>
                    <td className="py-3">$50M+ ARR</td>
                    <td className="py-3">$50M+</td>
                    <td className="py-3">{language === 'en' ? 'Path to IPO' : 'Camino a IPO'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Action Items */}
          <Card className="bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600 p-6">
            <h3 className="font-bold text-white mb-4">
              {language === 'en' ? 'Strategic Recommendations' : 'Recomendaciones Estratégicas'}
            </h3>
            <div className="grid lg:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">
                  {language === 'en' ? 'Investment Readiness' : 'Preparación para Inversión'}
                </h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• {language === 'en' ? 'Focus on NRR expansion (>115%)' : 'Enfocarse en expansión NRR (>115%)'}</li>
                  <li>• {language === 'en' ? 'Improve capital efficiency metrics' : 'Mejorar métricas de eficiencia de capital'}</li>
                  <li>• {language === 'en' ? 'Build referenceable customer base' : 'Construir base de clientes referenciales'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">
                  {language === 'en' ? 'Market Positioning' : 'Posicionamiento de Mercado'}
                </h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• {language === 'en' ? 'Emphasize AI compliance advantages' : 'Enfatizar ventajas de cumplimiento IA'}</li>
                  <li>• {language === 'en' ? 'Highlight bilingual market opportunity' : 'Destacar oportunidad de mercado bilingüe'}</li>
                  <li>• {language === 'en' ? 'Demonstrate platform extensibility' : 'Demostrar extensibilidad de plataforma'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">
                  {language === 'en' ? 'Next Steps' : 'Próximos Pasos'}
                </h4>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>• {language === 'en' ? 'Complete VC readiness assessment' : 'Completar evaluación de preparación VC'}</li>
                  <li>• {language === 'en' ? 'Prepare comprehensive data room' : 'Preparar sala de datos integral'}</li>
                  <li>• {language === 'en' ? 'Identify target VC partners' : 'Identificar socios VC objetivo'}</li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}