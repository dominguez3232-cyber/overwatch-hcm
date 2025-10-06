import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface VCSupremacyMatrixProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

export function VCSupremacyMatrix({ language, currentMode, onNavigate }: VCSupremacyMatrixProps) {
  const [selectedCategory, setSelectedCategory] = useState('market');
  const [viewMode, setViewMode] = useState<'matrix' | 'pitch' | 'roadmap'>('matrix');

  const supremacyData = {
    market: {
      titleEn: 'Market Opportunity & Fit',
      titleEs: 'Oportunidad de Mercado y Ajuste',
      vcBenchmark: {
        en: 'Clear TAM/SAM, product–market fit, unique wedge',
        es: 'TAM/SAM claro, ajuste producto-mercado, cuña única'
      },
      overwatchAdvantage: {
        en: 'First Advisory-Grade HRIS with bilingual AI coaching + integrated EPM (Essbase cube backbone). TAM expanded because we serve both HR and finance, not siloed.',
        es: 'Primer HRIS de Grado Asesor con coaching de IA bilingüe + EPM integrado (columna vertebral de cubo Essbase). TAM expandido porque servimos tanto RH como finanzas, no aislado.'
      },
      proofPoints: [
        { en: '7.15:1 ROI Model', es: 'Modelo ROI 7.15:1' },
        { en: 'Bilingual Market (English/Spanish)', es: 'Mercado Bilingüe (Inglés/Español)' },
        { en: 'Three Systems in One (HCM + ERP-lite + EPM)', es: 'Tres Sistemas en Uno (HCM + ERP-lite + EPM)' },
        { en: 'Founder-Led Company Focus', es: 'Enfoque en Empresas Lideradas por Fundadores' }
      ],
      metrics: {
        tam: '$47B+ Combined HR + Finance Software',
        sam: '$12B+ Mid-Market Segment',
        wedge: 'Culture-First Advisory Intelligence'
      }
    },
    technology: {
      titleEn: 'Scalability & Technology',
      titleEs: 'Escalabilidad y Tecnología',
      vcBenchmark: {
        en: 'Cloud-native, extensible, enterprise-grade architecture',
        es: 'Arquitectura nativa en la nube, extensible, grado empresarial'
      },
      overwatchAdvantage: {
        en: '"³" means three systems in one (HCM + ERP-lite + EPM). Future-proof with autonomous patching + Roske-style scenario modeling → not just scalable, but self-optimizing.',
        es: '"³" significa tres sistemas en uno (HCM + ERP-lite + EPM). A prueba de futuro con parcheo autónomo + modelado de escenarios estilo Roske → no solo escalable, sino auto-optimizante.'
      },
      proofPoints: [
        { en: 'Essbase Cube Integration', es: 'Integración de Cubo Essbase' },
        { en: 'Autonomous Scenario Modeling', es: 'Modelado de Escenarios Autónomo' },
        { en: 'Multi-Tenant Architecture', es: 'Arquitectura Multi-Inquilino' },
        { en: 'Real-Time Data Synchronization', es: 'Sincronización de Datos en Tiempo Real' }
      ],
      metrics: {
        performance: '99.9% Uptime SLA',
        scalability: 'Auto-scaling to 10K+ employees',
        integration: '200+ Pre-built Connectors'
      }
    },
    business: {
      titleEn: 'Business Metrics & Unit Economics',
      titleEs: 'Métricas de Negocio y Economía Unitaria',
      vcBenchmark: {
        en: 'ARR $1M+ early, NRR 110–130%, LTV:CAC 3:1+',
        es: 'ARR $1M+ temprano, NRR 110–130%, LTV:CAC 3:1+'
      },
      overwatchAdvantage: {
        en: 'ROI model already 7.15:1, built into demos. VC sees metrics before they ask. Velocity-to-revenue baked into UX with instant platform access.',
        es: 'Modelo ROI ya 7.15:1, integrado en demos. VC ve métricas antes de preguntar. Velocidad-a-ingresos integrada en UX con acceso instantáneo a plataforma.'
      },
      proofPoints: [
        { en: 'Pre-Built ROI Calculator', es: 'Calculadora ROI Pre-construida' },
        { en: 'Live Demo Environment', es: 'Ambiente de Demo en Vivo' },
        { en: 'Instant Platform Access', es: 'Acceso Instantáneo a Plataforma' },
        { en: 'Cross-Department Value', es: 'Valor Inter-Departamental' }
      ],
      metrics: {
        targetLTV: '$180K+ (3-year avg)',
        targetCAC: '$8K (blended)',
        targetNRR: '145%+ (cross-sell expansion)'
      }
    },
    retention: {
      titleEn: 'Customer Quality & Retention',
      titleEs: 'Calidad y Retención de Clientes',
      vcBenchmark: {
        en: '<5% churn, referenceable logos, strong NPS',
        es: '<5% abandono, logos referenciables, NPS fuerte'
      },
      overwatchAdvantage: {
        en: 'Stickiness from cross-department usage (HR + Finance + Strategy). Every module feeds retention → CFOs, CHROs, founders all touch it. Cultural intelligence creates emotional lock-in.',
        es: 'Adhesión por uso inter-departamental (RH + Finanzas + Estrategia). Cada módulo alimenta retención → CFOs, CHROs, fundadores todos lo tocan. Inteligencia cultural crea bloqueo emocional.'
      },
      proofPoints: [
        { en: 'Multi-Stakeholder Platform', es: 'Plataforma Multi-Interesados' },
        { en: 'Cultural Force Multiplier', es: 'Multiplicador de Fuerza Cultural' },
        { en: 'Bilingual Workforce Support', es: 'Soporte de Fuerza Laboral Bilingüe' },
        { en: 'Strategic Advisory Relationship', es: 'Relación de Asesoría Estratégica' }
      ],
      metrics: {
        targetChurn: '<2% annual',
        nps: '70+ (Advisory-grade relationship)',
        expansion: '40%+ accounts expand annually'
      }
    },
    team: {
      titleEn: 'Team & Execution Track Record',
      titleEs: 'Equipo y Historial de Ejecución',
      vcBenchmark: {
        en: 'Domain expertise, proven track record, execution capability',
        es: 'Expertise de dominio, historial probado, capacidad de ejecución'
      },
      overwatchAdvantage: {
        en: 'We literally codify 20 years of strategy notes from Staples, ADP, Oracle, McKinsey, Roske → founder-mode execution system. Not just experience, but systematized wisdom.',
        es: 'Literalmente codificamos 20 años de notas estratégicas de Staples, ADP, Oracle, McKinsey, Roske → sistema de ejecución modo fundador. No solo experiencia, sino sabiduría sistematizada.'
      },
      proofPoints: [
        { en: 'Staples/ADP Enterprise Experience', es: 'Experiencia Empresarial Staples/ADP' },
        { en: 'McKinsey Strategic Frameworks', es: 'Marcos Estratégicos McKinsey' },
        { en: 'Roske Foresight Methodology', es: 'Metodología de Previsión Roske' },
        { en: 'Founder-Mode Operating System', es: 'Sistema Operativo Modo Fundador' }
      ],
      metrics: {
        experience: '20+ years strategic consulting',
        frameworks: '50+ codified methodologies',
        track_record: '$500M+ P&L impact documented'
      }
    },
    gtm: {
      titleEn: 'Go-to-Market & Sales Engine',
      titleEs: 'Salida al Mercado y Motor de Ventas',
      vcBenchmark: {
        en: 'Efficient pipeline, scalable GTM motion, predictable growth',
        es: 'Pipeline eficiente, movimiento GTM escalable, crecimiento predecible'
      },
      overwatchAdvantage: {
        en: '"MODE Toggle" GTM — Founder_Mode, Finance_Mode, HR_Mode, Trabajo_Mode. Simple story: "Every hat, one toggle." Bilingual from day one with instant platform access.',
        es: '"Alternancia de MODO" GTM — Modo_Fundador, Modo_Finanzas, Modo_RH, Modo_Trabajo. Historia simple: "Cada sombrero, un interruptor." Bilingüe desde el día uno con acceso instantáneo a plataforma.'
      },
      proofPoints: [
        { en: 'Self-Qualifying Demo Platform', es: 'Plataforma de Demo Auto-Calificante' },
        { en: 'Multi-Persona Entry Points', es: 'Puntos de Entrada Multi-Persona' },
        { en: 'Bilingual Market Access', es: 'Acceso al Mercado Bilingüe' },
        { en: 'Instant Value Demonstration', es: 'Demostración de Valor Instantánea' }
      ],
      metrics: {
        demo_conversion: '35%+ (instant access)',
        sales_cycle: '60 days avg (self-qualifying)',
        expansion_rate: '140%+ NRR'
      }
    },
    compliance: {
      titleEn: 'Compliance, Security & Data Governance',
      titleEs: 'Cumplimiento, Seguridad y Gobierno de Datos',
      vcBenchmark: {
        en: 'SOC2, GDPR compliant, AI bias safeguards, enterprise security',
        es: 'SOC2, cumplimiento GDPR, salvaguardas de sesgo IA, seguridad empresarial'
      },
      overwatchAdvantage: {
        en: 'Compliance Guardian module, bias-mitigation AI, bilingual audits. Market signal: trustworthy HCM in an era of lawsuits (e.g. Workday AI bias). Cross-border compliance built-in.',
        es: 'Módulo Guardián de Cumplimiento, IA de mitigación de sesgo, auditorías bilingües. Señal de mercado: HCM confiable en una era de demandas (ej. sesgo IA Workday). Cumplimiento transfronterizo integrado.'
      },
      proofPoints: [
        { en: 'Built-in Compliance Guardian', es: 'Guardián de Cumplimiento Integrado' },
        { en: 'AI Bias Detection Engine', es: 'Motor de Detección de Sesgo IA' },
        { en: 'Cross-Border Legal Framework', es: 'Marco Legal Transfronterizo' },
        { en: 'Bilingual Audit Capabilities', es: 'Capacidades de Auditoría Bilingües' }
      ],
      metrics: {
        certifications: 'SOC2 Type II, GDPR, CCPA ready',
        security: '99.99% data integrity',
        compliance: 'Real-time audit trails'
      }
    },
    defensibility: {
      titleEn: 'Competitive Moats & Defensibility',
      titleEs: 'Fosos Competitivos y Defensibilidad',
      vcBenchmark: {
        en: 'Network effects, data moats, switching costs, ecosystem lock-in',
        es: 'Efectos de red, fosos de datos, costos de cambio, bloqueo de ecosistema'
      },
      overwatchAdvantage: {
        en: 'Proprietary cube-based scenario intelligence (Essbase integrated) + Roske "Good/Bad/Worse" foresight library. Hard to copy, harder to out-narrate. Cultural intelligence = emotional moat.',
        es: 'Inteligencia de escenarios basada en cubos propietarios (Essbase integrado) + biblioteca de previsión Roske "Bueno/Malo/Peor". Difícil de copiar, más difícil de superar en narrativa. Inteligencia cultural = foso emocional.'
      },
      proofPoints: [
        { en: 'Proprietary Essbase Integration', es: 'Integración Essbase Propietaria' },
        { en: 'Roske Foresight Methodology', es: 'Metodología de Previsión Roske' },
        { en: 'Cultural Intelligence Engine', es: 'Motor de Inteligencia Cultural' },
        { en: 'Cross-System Data Network', es: 'Red de Datos Inter-Sistema' }
      ],
      metrics: {
        switching_cost: '$50K+ migration complexity',
        data_network: '500+ data points per employee',
        methodology: 'Proprietary 20-year framework library'
      }
    },
    exit: {
      titleEn: 'Exit Potential & Strategic Value',
      titleEs: 'Potencial de Salida y Valor Estratégico',
      vcBenchmark: {
        en: 'Clear IPO or M&A path, strategic buyer interest, market category leadership',
        es: 'Camino claro a IPO o M&A, interés de comprador estratégico, liderazgo de categoría de mercado'
      },
      overwatchAdvantage: {
        en: 'Positioned as the only Advisory-Grade HRIS. IPO story = "We are the category creator." M&A story = "We are the cube Oracle never built." Bilingual = instant international expansion.',
        es: 'Posicionado como el único HRIS de Grado Asesor. Historia IPO = "Somos los creadores de la categoría." Historia M&A = "Somos el cubo que Oracle nunca construyó." Bilingüe = expansión internacional instantánea.'
      },
      proofPoints: [
        { en: 'Category Creation: Advisory-Grade HRIS', es: 'Creación de Categoría: HRIS Grado Asesor' },
        { en: 'Strategic Buyers: Oracle, SAP, Workday', es: 'Compradores Estratégicos: Oracle, SAP, Workday' },
        { en: 'International Ready (Bilingual)', es: 'Listo Internacional (Bilingüe)' },
        { en: 'Financial Systems Integration', es: 'Integración de Sistemas Financieros' }
      ],
      metrics: {
        category_value: '$15B+ Advisory Software Market',
        strategic_premium: '8-12x revenue multiples',
        international: 'Immediate LatAm expansion capability'
      }
    }
  };

  const formatMetric = (value: string) => value;

  return (
    <div className="px-6 lg:px-20 py-6 bg-black min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-200 mb-2">
              {language === 'en' ? 'VC Supremacy Matrix' : 'Matriz de Supremacía VC'}
            </h1>
            <p className="text-xl text-gray-400">
              {language === 'en' 
                ? 'How OVERWATCH³ exceeds every VC benchmark criterion'
                : 'Cómo OVERWATCH³ supera todos los criterios de referencia VC'
              }
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
              {language === 'en' ? 'Category Creator' : 'Creador de Categoría'}
            </Badge>
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
              {language === 'en' ? 'Investor Ready' : 'Listo para Inversionistas'}
            </Badge>
          </div>
        </div>

        {/* View Mode Toggle */}
        <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-gray-800">
            <TabsTrigger value="matrix" className="data-[state=active]:bg-gray-700">
              {language === 'en' ? 'Matrix View' : 'Vista Matriz'}
            </TabsTrigger>
            <TabsTrigger value="pitch" className="data-[state=active]:bg-gray-700">
              {language === 'en' ? 'Pitch Deck' : 'Deck de Pitch'}
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="data-[state=active]:bg-gray-700">
              {language === 'en' ? 'Roadmap' : 'Hoja de Ruta'}
            </TabsTrigger>
          </TabsList>

          {/* Matrix View */}
          <TabsContent value="matrix" className="mt-8">
            <div className="grid gap-6">
              {Object.entries(supremacyData).map(([key, data]) => (
                <Card key={key} className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-200 flex items-center justify-between">
                      {language === 'en' ? data.titleEn : data.titleEs}
                      <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                        {language === 'en' ? 'EXCEEDS' : 'SUPERA'}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* VC Benchmark */}
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-gray-300 mb-2">
                          {language === 'en' ? 'VC Benchmark' : 'Referencia VC'}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {language === 'en' ? data.vcBenchmark.en : data.vcBenchmark.es}
                        </p>
                      </div>

                      {/* OVERWATCH³ Advantage */}
                      <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/30">
                        <h4 className="font-semibold text-green-400 mb-2">
                          {language === 'en' ? 'OVERWATCH�� Advantage' : 'Ventaja OVERWATCH³'}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {language === 'en' ? data.overwatchAdvantage.en : data.overwatchAdvantage.es}
                        </p>
                      </div>

                      {/* Proof Points */}
                      <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-700/30">
                        <h4 className="font-semibold text-blue-400 mb-2">
                          {language === 'en' ? 'Proof Points' : 'Puntos de Prueba'}
                        </h4>
                        <div className="space-y-1">
                          {data.proofPoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300 text-sm">
                                {language === 'en' ? point.en : point.es}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Metrics */}
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <div className="space-y-2">
                            {Object.entries(data.metrics).map(([metricKey, value]) => (
                              <div key={metricKey} className="flex justify-between items-center">
                                <span className="text-xs text-gray-400 capitalize">
                                  {metricKey.replace('_', ' ')}
                                </span>
                                <span className="text-xs text-blue-300 font-medium">
                                  {formatMetric(value)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pitch Deck View */}
          <TabsContent value="pitch" className="mt-8">
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-200 text-center">
                    {language === 'en' 
                      ? 'OVERWATCH³: The Only Advisory-Grade HRIS' 
                      : 'OVERWATCH³: El Único HRIS de Grado Asesor'
                    }
                  </CardTitle>
                  <p className="text-center text-gray-400">
                    {language === 'en'
                      ? 'Exceeding VC benchmarks across all investment criteria'
                      : 'Superando referencias VC en todos los criterios de inversión'
                    }
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(supremacyData).map(([key, data]) => (
                      <div key={key} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <h3 className="font-semibold text-green-400 mb-2">
                          {language === 'en' ? data.titleEn : data.titleEs}
                        </h3>
                        <div className="space-y-2">
                          {data.proofPoints.slice(0, 2).map((point, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-300 text-sm">
                                {language === 'en' ? point.en : point.es}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Investment Highlights */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-200">
                    {language === 'en' ? 'Investment Highlights' : 'Aspectos Destacados de Inversión'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-400 mb-3">
                        {language === 'en' ? 'Category Creation' : 'Creación de Categoría'}
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• First Advisory-Grade HRIS</li>
                        <li>• Bilingual AI coaching (English/Spanish)</li>
                        <li>• Three systems in one (HCM + ERP + EPM)</li>
                        <li>• Culture-first force multiplier philosophy</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-3">
                        {language === 'en' ? 'Market Advantage' : 'Ventaja de Mercado'}
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• 7.15:1 ROI model (vs 3:1 benchmark)</li>
                        <li>• Instant platform access & demos</li>
                        <li>• Cross-border Latino market ready</li>
                        <li>• 20+ years of codified strategic frameworks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Roadmap View */}
          <TabsContent value="roadmap" className="mt-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-200">
                  {language === 'en' ? 'Strategic Roadmap Alignment' : 'Alineación de Hoja de Ruta Estratégica'}
                </CardTitle>
                <p className="text-gray-400">
                  {language === 'en'
                    ? 'Product development priorities mapped to VC success criteria'
                    : 'Prioridades de desarrollo de productos mapeadas a criterios de éxito VC'
                  }
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Q1 Priorities */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-green-400 mb-3">Q1 2024 - Market Foundation</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-gray-300 font-medium mb-2">
                          {language === 'en' ? 'Build' : 'Construir'}
                        </h5>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li>• Complete bilingual platform</li>
                          <li>• Essbase cube integration</li>
                          <li>• Advisory engine v1.0</li>
                          <li>• Compliance guardian module</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-gray-300 font-medium mb-2">
                          {language === 'en' ? 'Prove' : 'Probar'}
                        </h5>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li>• 10 pilot customers</li>
                          <li>• 7.15:1 ROI validation</li>
                          <li>• Latino market traction</li>
                          <li>• Technology scalability</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Q2-Q3 Priorities */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-blue-400 mb-3">Q2-Q3 2024 - Scale & Defensibility</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-gray-300 font-medium mb-2">
                          {language === 'en' ? 'Scale' : 'Escalar'}
                        </h5>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li>• 100+ enterprise customers</li>
                          <li>• Channel partner program</li>
                          <li>• International expansion (Mexico)</li>
                          <li>• Advanced analytics suite</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-gray-300 font-medium mb-2">
                          {language === 'en' ? 'Defend' : 'Defender'}
                        </h5>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li>• Proprietary data network</li>
                          <li>• Cultural intelligence moat</li>
                          <li>• Strategic buyer interest</li>
                          <li>• Category leadership</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Q4+ Exit Strategy */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h4 className="font-semibold text-purple-400 mb-3">Q4 2024+ - Exit Readiness</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-gray-300 font-medium mb-2">IPO Path</h5>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li>• $100M+ ARR trajectory</li>
                          <li>• Category creator narrative</li>
                          <li>• International expansion</li>
                          <li>• Advisory-grade positioning</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-gray-300 font-medium mb-2">M&A Path</h5>
                        <ul className="space-y-1 text-gray-400 text-sm">
                          <li>• Strategic buyer targets (Oracle, SAP)</li>
                          <li>• 8-12x revenue premium</li>
                          <li>• Unique cube technology</li>
                          <li>• Bilingual market access</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-700">
        <Button 
          onClick={() => onNavigate('investor-demo')}
          className="bg-green-600 hover:bg-green-700"
        >
          {language === 'en' ? 'View Investor Demo' : 'Ver Demo para Inversionistas'}
        </Button>
        <Button 
          onClick={() => onNavigate('pitch-delivery')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {language === 'en' ? '90-Second Pitch System' : 'Sistema Pitch 90 Segundos'}
        </Button>
        <Button 
          onClick={() => onNavigate('vc-readiness')}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-800"
        >
          {language === 'en' ? 'VC Readiness Center' : 'Centro de Preparación VC'}
        </Button>
        <Button 
          onClick={() => onNavigate('dashboard')}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-800"
        >
          {language === 'en' ? 'Back to Platform' : 'Volver a Plataforma'}
        </Button>
      </div>

      {/* Export Options */}
      <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
        <h4 className="font-semibold text-gray-200 mb-3">
          {language === 'en' ? 'Export & Share' : 'Exportar y Compartir'}
        </h4>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" className="border-gray-600 text-gray-400">
            {language === 'en' ? 'Export PDF' : 'Exportar PDF'}
          </Button>
          <Button size="sm" variant="outline" className="border-gray-600 text-gray-400">
            {language === 'en' ? 'PowerPoint Deck' : 'Presentación PowerPoint'}
          </Button>
          <Button size="sm" variant="outline" className="border-gray-600 text-gray-400">
            {language === 'en' ? 'Share Link' : 'Compartir Enlace'}
          </Button>
          <Button size="sm" variant="outline" className="border-gray-600 text-gray-400">
            {language === 'en' ? 'Email Report' : 'Reporte por Email'}
          </Button>
        </div>
      </div>
    </div>
  );
}