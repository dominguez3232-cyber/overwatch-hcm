/**
 * Strategic Supremacy Roadmap
 * 
 * The definitive plan to elevate OVERWATCH³ beyond VC standards into 
 * category-defining platform supremacy that forces investors to see 
 * it as inevitable infrastructure they cannot afford not to back.
 */

import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Target, 
  Trophy, 
  Zap, 
  Crown, 
  Rocket,
  Eye,
  Globe,
  Shield,
  BarChart3,
  Film,
  Layers,
  Gauge,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  Brain,
  Building
} from 'lucide-react';

interface StrategicSupremacyRoadmapProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigate: (view: string) => void;
}

interface SupremacyPhase {
  id: string;
  title: string;
  description: string;
  timeline: string;
  priority: 'critical' | 'high' | 'medium';
  vcImpact: number; // 1-10 scale
  initiatives: Initiative[];
}

interface Initiative {
  name: string;
  description: string;
  deliverables: string[];
  vcValue: string;
  competitiveAdvantage: string;
}

export function StrategicSupremacyRoadmap({ language, currentMode, onNavigate }: StrategicSupremacyRoadmapProps) {
  const [activePhase, setActivePhase] = useState('cinematic-roi');
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const t = (en: string, es: string) => language === 'en' ? en : es;

  const supremacyPhases: SupremacyPhase[] = [
    {
      id: 'cinematic-roi',
      title: t('Phase 1: Cinematic ROI Cockpit', 'Fase 1: Cabina ROI Cinematográfica'),
      description: t(
        'Transform ROI reporting into cinematic proof of business impact with real-time dual-impact metrics',
        'Transformar reportes ROI en prueba cinematográfica de impacto empresarial con métricas de doble impacto en tiempo real'
      ),
      timeline: t('30 days', '30 días'),
      priority: 'critical',
      vcImpact: 10,
      initiatives: [
        {
          name: t('Live ROI Theater', 'Teatro ROI en Vivo'),
          description: t(
            'Real-time visualization of financial + human capital impact during pilot demonstrations',
            'Visualización en tiempo real del impacto de capital financiero + humano durante demostraciones piloto'
          ),
          deliverables: [
            t('Interactive ROI visualization engine', 'Motor de visualización ROI interactivo'),
            t('Dual-impact metrics dashboard', 'Panel de métricas de doble impacto'),
            t('Cinematic demo mode for investors', 'Modo demo cinematográfico para inversionistas'),
            t('Real-time pilot performance tracking', 'Seguimiento de rendimiento piloto en tiempo real')
          ],
          vcValue: t(
            'Investors see immediate, tangible proof of platform value during demos',
            'Inversionistas ven prueba inmediata y tangible del valor de la plataforma durante demos'
          ),
          competitiveAdvantage: t(
            'No competitor delivers cinematic ROI proof - they show metrics, we show transformation',
            'Ningún competidor entrega prueba ROI cinematográfica - ellos muestran métricas, nosotros mostramos transformación'
          )
        },
        {
          name: t('Pilot Conversion Engine', 'Motor de Conversión de Pilotos'),
          description: t(
            'Every pilot becomes a conversion case study with cinematic storytelling and traceable impact',
            'Cada piloto se convierte en caso de estudio de conversión con narrativa cinematográfica e impacto trazable'
          ),
          deliverables: [
            t('Automated pilot success documentation', 'Documentación automatizada de éxito de pilotos'),
            t('Before/after transformation videos', 'Videos de transformación antes/después'),
            t('Traceable impact measurement system', 'Sistema de medición de impacto trazable'),
            t('Client success story generator', 'Generador de historias de éxito de clientes')
          ],
          vcValue: t(
            'Every pilot becomes referenceable proof of scalable value creation',
            'Cada piloto se convierte en prueba referenciable de creación de valor escalable'
          ),
          competitiveAdvantage: t(
            'Turn pilots into VC-grade proof points instead of just customer validation',
            'Convertir pilotos en puntos de prueba de grado VC en lugar de solo validación de clientes'
          )
        }
      ]
    },
    {
      id: 'bilingual-supremacy',
      title: t('Phase 2: Bilingual Market Supremacy', 'Fase 2: Supremacía de Mercado Bilingüe'),
      description: t(
        'Establish unassailable competitive moat through native bilingual capabilities and Latino market dominance',
        'Establecer foso competitivo inexpugnable a través de capacidades bilingües nativas y dominio del mercado Latino'
      ),
      timeline: t('45 days', '45 días'),
      priority: 'critical',
      vcImpact: 9,
      initiatives: [
        {
          name: t('Latino Market Intelligence Engine', 'Motor de Inteligencia del Mercado Latino'),
          description: t(
            'Deep market intelligence on 65M Latino workers with predictive expansion modeling',
            'Inteligencia profunda de mercado sobre 65M trabajadores Latinos con modelado predictivo de expansión'
          ),
          deliverables: [
            t('Latino workforce analytics dashboard', 'Panel de analítica de fuerza laboral Latina'),
            t('Cross-border compliance automation', 'Automatización de cumplimiento transfronterizo'),
            t('Cultural intelligence insights engine', 'Motor de insights de inteligencia cultural'),
            t('Bilingual AI-driven coaching overlays', 'Superposiciones de coaching impulsadas por IA bilingüe')
          ],
          vcValue: t(
            'Demonstrates access to fastest-growing, underserved workforce segment in US',
            'Demuestra acceso al segmento de fuerza laboral de mayor crecimiento y desatendido en US'
          ),
          competitiveAdvantage: t(
            'Most SaaS platforms are monolingual until late stage - we own this market from day 1',
            'La mayoría de plataformas SaaS son monolingües hasta etapa tardía - nosotros dominamos este mercado desde el día 1'
          )
        },
        {
          name: t('Cross-Border Operations Platform', 'Plataforma de Operaciones Transfronterizas'),
          description: t(
            'Enable seamless US-Mexico-Latin America operations with automated compliance and payroll',
            'Habilitar operaciones perfectas US-México-América Latina con cumplimiento y nómina automatizados'
          ),
          deliverables: [
            t('Multi-country payroll integration', 'Integración de nómina multi-país'),
            t('Automated visa/work permit tracking', 'Seguimiento automatizado de visas/permisos de trabajo'),
            t('Cross-border tax compliance engine', 'Motor de cumplimiento fiscal transfronterizo'),
            t('Currency hedging and FX management', 'Cobertura de moneda y gestión FX')
          ],
          vcValue: t(
            'Unique capability to scale across borders creates massive TAM expansion opportunity',
            'Capacidad única para escalar a través de fronteras crea oportunidad masiva de expansión TAM'
          ),
          competitiveAdvantage: t(
            'No major HCM platform natively handles cross-border operations - we become infrastructure',
            'Ninguna plataforma HCM importante maneja nativamente operaciones transfronterizas - nos convertimos en infraestructura'
          )
        }
      ]
    },
    {
      id: 'schema-platform',
      title: t('Phase 3: Schema-Driven Platform Architecture', 'Fase 3: Arquitectura de Plataforma Impulsada por Esquemas'),
      description: t(
        'Transform from feature company to platform through schema-driven modularity and extensibility',
        'Transformar de empresa de características a plataforma a través de modularidad y extensibilidad impulsada por esquemas'
      ),
      timeline: t('60 days', '60 días'),
      priority: 'high',
      vcImpact: 9,
      initiatives: [
        {
          name: t('Universal Schema Framework', 'Marco de Esquema Universal'),
          description: t(
            'Every feature traceable to canonical schema making OVERWATCH³ look like inevitable infrastructure',
            'Cada característica trazable a esquema canónico haciendo que OVERWATCH³ parezca infraestructura inevitable'
          ),
          deliverables: [
            t('Canonical data schema documentation', 'Documentación de esquema de datos canónico'),
            t('API-first modular architecture', 'Arquitectura modular API-first'),
            t('Third-party integration marketplace', 'Mercado de integración de terceros'),
            t('White-label platform capabilities', 'Capacidades de plataforma de marca blanca')
          ],
          vcValue: t(
            'Demonstrates platform scalability and ecosystem potential vs. point solution',
            'Demuestra escalabilidad de plataforma y potencial de ecosistema vs. solución puntual'
          ),
          competitiveAdvantage: t(
            'Schema-driven architecture makes us infrastructure, not just software',
            'Arquitectura impulsada por esquemas nos convierte en infraestructura, no solo software'
          )
        },
        {
          name: t('Ecosystem Marketplace', 'Mercado de Ecosistema'),
          description: t(
            'Create ecosystem where partners build on OVERWATCH³ schema, generating network effects',
            'Crear ecosistema donde socios construyan sobre esquema OVERWATCH³, generando efectos de red'
          ),
          deliverables: [
            t('Partner developer portal', 'Portal de desarrolladores socios'),
            t('Revenue sharing marketplace', 'Mercado de participación en ingresos'),
            t('Certified integration program', 'Programa de integración certificada'),
            t('Ecosystem success metrics dashboard', 'Panel de métricas de éxito del ecosistema')
          ],
          vcValue: t(
            'Network effects and recurring revenue from ecosystem create compounding value',
            'Efectos de red e ingresos recurrentes del ecosistema crean valor compuesto'
          ),
          competitiveAdvantage: t(
            'Ecosystem becomes defensive moat - switching cost increases exponentially',
            'Ecosistema se convierte en foso defensivo - costo de cambio aumenta exponencialmente'
          )
        }
      ]
    },
    {
      id: 'advisory-supremacy',
      title: t('Phase 4: Advisory-Grade Intelligence Supremacy', 'Fase 4: Supremacía de Inteligencia de Grado Asesor'),
      description: t(
        'Establish OVERWATCH³ as the only platform delivering McKinsey-grade strategic intelligence at scale',
        'Establecer OVERWATCH³ como la única plataforma que entrega inteligencia estratégica de grado McKinsey a escala'
      ),
      timeline: t('90 days', '90 días'),
      priority: 'high',
      vcImpact: 8,
      initiatives: [
        {
          name: t('AI-Powered Strategic Advisory Engine', 'Motor de Asesoría Estratégica Impulsado por IA'),
          description: t(
            'AI that delivers strategic recommendations indistinguishable from top-tier consulting',
            'IA que entrega recomendaciones estratégicas indistinguibles de consultoría de primer nivel'
          ),
          deliverables: [
            t('Strategic AI recommendation engine', 'Motor de recomendaciones estratégicas de IA'),
            t('Predictive business modeling', 'Modelado predictivo de negocios'),
            t('Automated strategic planning', 'Planificación estratégica automatizada'),
            t('Executive briefing generation', 'Generación de briefings ejecutivos')
          ],
          vcValue: t(
            'Replaces expensive consulting engagements with platform-delivered intelligence',
            'Reemplaza compromisos de consultoría costosos con inteligencia entregada por plataforma'
          ),
          competitiveAdvantage: t(
            'No HRIS delivers strategic consulting - we make it core platform capability',
            'Ningún HRIS entrega consultoría estratégica - lo hacemos capacidad central de plataforma'
          )
        }
      ]
    },
    {
      id: 'enterprise-dominance',
      title: t('Phase 5: Enterprise-Grade Dominance', 'Fase 5: Dominio de Grado Empresarial'),
      description: t(
        'Achieve enterprise-grade hygiene and security that enables scaling into Fortune 500',
        'Lograr higiene y seguridad de grado empresarial que permita escalamiento hacia Fortune 500'
      ),
      timeline: t('120 days', '120 días'),
      priority: 'medium',
      vcImpact: 7,
      initiatives: [
        {
          name: t('Zero-Trust Security Architecture', 'Arquitectura de Seguridad Zero-Trust'),
          description: t(
            'Enterprise-grade security from day 1 enabling regulated industry expansion',
            'Seguridad de grado empresarial desde el día 1 habilitando expansión a industrias reguladas'
          ),
          deliverables: [
            t('SOC 2 Type II certification', 'Certificación SOC 2 Tipo II'),
            t('GDPR/CCPA compliance automation', 'Automatización de cumplimiento GDPR/CCPA'),
            t('HIPAA-ready healthcare modules', 'Módulos de salud listos para HIPAA'),
            t('Enterprise SSO and identity management', 'SSO empresarial y gestión de identidad')
          ],
          vcValue: t(
            'Enables upmarket expansion into regulated industries with higher ACVs',
            'Habilita expansión hacia mercados superiores en industrias reguladas con ACVs más altos'
          ),
          competitiveAdvantage: t(
            'Most SaaS retrofits compliance - we build it as core infrastructure',
            'La mayoría de SaaS retrofita cumplimiento - nosotros lo construimos como infraestructura central'
          )
        }
      ]
    }
  ];

  const calculateOverallProgress = () => {
    // Mock calculation - in real implementation, this would track actual completion
    return Math.floor(Math.random() * 40) + 10; // 10-50% to show it's in progress
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getVCImpactColor = (impact: number) => {
    if (impact >= 9) return 'text-green-400';
    if (impact >= 7) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="px-6 lg:px-20 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Crown className="w-8 h-8 text-yellow-400" />
                <h1 className="text-3xl font-bold">
                  {t('Strategic Supremacy Roadmap', 'Hoja de Ruta de Supremacía Estratégica')}
                </h1>
              </div>
              <p className="text-slate-300 mb-4">
                {t(
                  'The definitive plan to surpass all VC standards and achieve category-defining platform supremacy',
                  'El plan definitivo para superar todos los estándares VC y lograr supremacía de plataforma que define categoría'
                )}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-slate-400">
                    {t('Overall Progress', 'Progreso General')}: {calculateOverallProgress()}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-400" />
                  <span className="text-slate-400">
                    {t('Timeline: 120 days to supremacy', 'Cronograma: 120 días hasta supremacía')}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-400 mb-1">SUPREMACY</div>
              <div className="text-sm text-slate-400">
                {t('Beyond VC Standards', 'Más Allá de Estándares VC')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-8">
        {/* Key Insights */}
        <Card className="mb-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/30">
          <div className="flex items-start gap-4">
            <Eye className="w-6 h-6 text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('The Supremacy Strategy', 'La Estrategia de Supremacía')}
              </h3>
              <div className="grid lg:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">
                    {t('Beyond Baseline', 'Más Allá de la Línea Base')}
                  </h4>
                  <p className="text-slate-300">
                    {t(
                      'Most SaaS pitch metrics. We deliver cinematic proof + bilingual scalability + schema-driven modularity.',
                      'La mayoría de SaaS presenta métricas. Nosotros entregamos prueba cinematográfica + escalabilidad bilingüe + modularidad impulsada por esquemas.'
                    )}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    {t('Platform Inevitability', 'Inevitabilidad de Plataforma')}
                  </h4>
                  <p className="text-slate-300">
                    {t(
                      'Force investors to see OVERWATCH³ as infrastructure they cannot afford not to back.',
                      'Forzar a inversionistas a ver OVERWATCH³ como infraestructura que no pueden permitirse no respaldar.'
                    )}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">
                    {t('Category Definition', 'Definición de Categoría')}
                  </h4>
                  <p className="text-slate-300">
                    {t(
                      'Not just fundable - become the narrative setter that defines the entire category.',
                      'No solo financiable - convertirse en el narrador que define toda la categoría.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Phase Navigation */}
        <Tabs value={activePhase} onValueChange={setActivePhase}>
          <TabsList className="mb-8 bg-slate-800 grid grid-cols-5">
            {supremacyPhases.map((phase, index) => (
              <TabsTrigger key={phase.id} value={phase.id} className="text-xs lg:text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getPriorityColor(phase.priority)}`}></div>
                  <span>{t(`Phase ${index + 1}`, `Fase ${index + 1}`)}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {supremacyPhases.map((phase) => (
            <TabsContent key={phase.id} value={phase.id} className="space-y-6">
              {/* Phase Overview */}
              <Card className="p-6 bg-slate-800 border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-4 h-4 rounded-full ${getPriorityColor(phase.priority)}`}></div>
                      <h2 className="text-2xl font-bold text-white">{phase.title}</h2>
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
                        {phase.timeline}
                      </Badge>
                    </div>
                    <p className="text-slate-300 mb-4">{phase.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400 mb-1">
                      {t('VC Impact', 'Impacto VC')}
                    </div>
                    <div className={`text-2xl font-bold ${getVCImpactColor(phase.vcImpact)}`}>
                      {phase.vcImpact}/10
                    </div>
                  </div>
                </div>
              </Card>

              {/* Phase Initiatives */}
              <div className="grid gap-6">
                {phase.initiatives.map((initiative, index) => (
                  <Card key={index} className="p-6 bg-slate-800 border-slate-700 hover:border-green-500/30 transition-colors cursor-pointer"
                        onClick={() => setSelectedInitiative(initiative)}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Rocket className="w-5 h-5 text-green-400" />
                          <h3 className="text-xl font-bold text-white">{initiative.name}</h3>
                        </div>
                        <p className="text-slate-300 mb-4">{initiative.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">
                          {t('VC Value', 'Valor VC')}
                        </h4>
                        <p className="text-sm text-slate-300">{initiative.vcValue}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">
                          {t('Competitive Advantage', 'Ventaja Competitiva')}
                        </h4>
                        <p className="text-sm text-slate-300">{initiative.competitiveAdvantage}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <h4 className="font-semibold text-purple-400 mb-2">
                        {t('Key Deliverables', 'Entregables Clave')}
                      </h4>
                      <div className="grid lg:grid-cols-2 gap-2">
                        {initiative.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom Actions */}
        <div className="mt-12 flex justify-center gap-4">
          <Button 
            onClick={() => onNavigate('vc-readiness')}
            className="bg-green-600 hover:bg-green-700"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            {t('VC Readiness Assessment', 'Evaluación de Preparación VC')}
          </Button>
          <Button 
            onClick={() => onNavigate('master-demo')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Film className="w-4 h-4 mr-2" />
            {t('Cinematic Demo System', 'Sistema Demo Cinematográfico')}
          </Button>
          <Button 
            onClick={() => onNavigate('frameworks')}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Layers className="w-4 h-4 mr-2" />
            {t('Strategic Frameworks', 'Marcos Estratégicos')}
          </Button>
        </div>

        {/* Success Metrics */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            {t('Supremacy Success Metrics', 'Métricas de Éxito de Supremacía')}
          </h3>
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">10x</div>
              <div className="text-sm text-slate-400">
                {t('Demo Conversion Rate', 'Tasa de Conversión Demo')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">$50M+</div>
              <div className="text-sm text-slate-400">
                {t('Series A Valuation', 'Valoración Serie A')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">65M</div>
              <div className="text-sm text-slate-400">
                {t('Latino TAM Access', 'Acceso TAM Latino')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">∞</div>
              <div className="text-sm text-slate-400">
                {t('Category Definition', 'Definición de Categoría')}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}