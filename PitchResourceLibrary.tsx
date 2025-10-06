/**
 * Pitch Resource Library
 * 
 * Comprehensive library of taglines, elevator pitches, founder stories,
 * and deployment strategies for various contexts and audiences.
 */

import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Zap, 
  Target, 
  Crown,
  MessageSquare,
  Clock,
  User,
  Lightbulb,
  Copy,
  Share,
  Star,
  ArrowRight,
  Globe,
  Building,
  TrendingUp,
  Shield
} from 'lucide-react';

interface PitchResourceLibraryProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

interface TaglineCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  taglines: string[];
  deployment: string[];
}

interface PitchVariation {
  id: string;
  title: string;
  duration: string;
  context: string;
  script: string;
  notes: string;
}

export function PitchResourceLibrary({ language, onNavigate }: PitchResourceLibraryProps) {
  const [selectedCategory, setSelectedCategory] = useState('reframe');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const t = (en: string, es: string) => language === 'en' ? en : es;

  const taglineCategories: TaglineCategory[] = [
    {
      id: 'reframe',
      title: t('Category Reframe', 'Reencuadre de Categoría'),
      description: t('Position OVERWATCH³ as inevitable infrastructure', 'Posicionar OVERWATCH³ como infraestructura inevitable'),
      icon: Target,
      taglines: [
        t('Not another SaaS tool—the Command Center where founders prove ROI.', 'No otra herramienta SaaS—el Centro de Comando donde fundadores prueban ROI.'),
        t('From schema to scale—built for solo-operators, ready for enterprise.', 'De esquema a escala—construido para operadores-solo, listo para empresa.'),
        t('Proof before promise. ROI, live on screen.', 'Prueba antes de promesa. ROI, en vivo en pantalla.'),
        t('The Command Center solo-operators didn\'t know they were missing.', 'El Centro de Comando que operadores-solo no sabían que les faltaba.')
      ],
      deployment: [
        t('Slide titles for investor presentations', 'Títulos de diapositivas para presentaciones de inversionistas'),
        t('LinkedIn post opening hooks', 'Ganchos de apertura para publicaciones LinkedIn'),
        t('Cold email subject lines', 'Líneas de asunto de correos fríos'),
        t('Demo narration punch lines', 'Líneas de impacto para narración de demos')
      ]
    },
    {
      id: 'bilingual',
      title: t('Bilingual Differentiation', 'Diferenciación Bilingüe'),
      description: t('Emphasize unique bilingual-first approach', 'Enfatizar enfoque único bilingüe-primero'),
      icon: Globe,
      taglines: [
        t('One click. Two languages. Infinite markets.', 'Un clic. Dos idiomas. Mercados infinitos.'),
        t('From Dallas to Bogotá—OVERWATCH³ speaks enterprise.', 'De Dallas a Bogotá—OVERWATCH³ habla empresa.'),
        t('Bilingual by design, not by retrofit.', 'Bilingüe por diseño, no por adaptación.'),
        t('65M Latino workers. One platform. Infinite opportunity.', '65M trabajadores Latinos. Una plataforma. Oportunidad infinita.')
      ],
      deployment: [
        t('Market differentiation slides', 'Diapositivas de diferenciación de mercado'),
        t('Partnership pitch materials', 'Materiales de pitch para asociaciones'),
        t('Diversity & inclusion narratives', 'Narrativas de diversidad e inclusión'),
        t('Cross-border opportunity discussions', 'Discusiones de oportunidades transfronterizas')
      ]
    },
    {
      id: 'roi',
      title: t('Cinematic ROI', 'ROI Cinematográfico'),
      description: t('Transform ROI from promise to proof', 'Transformar ROI de promesa a prueba'),
      icon: TrendingUp,
      taglines: [
        t('Every founder-led deployment is a cinematic case study.', 'Cada despliegue liderado por fundador es un caso de estudio cinematográfico.'),
        t('$1.2M saved. $3.4M lifted. 87% adoption. 92% engagement.', '$1.2M ahorrados. $3.4M elevados. 87% adopción. 92% compromiso.'),
        t('ROI isn\'t promised—it\'s proven.', 'El ROI no se promete—se prueba.'),
        t('Watch your business transform cinematically.', 'Ve tu negocio transformarse cinematográficamente.')
      ],
      deployment: [
        t('ROI demonstration moments', 'Momentos de demostración ROI'),
        t('Pilot success story presentations', 'Presentaciones de historias de éxito de pilotos'),
        t('Customer testimonial frameworks', 'Marcos de testimonios de clientes'),
        t('Proof-of-concept conclusions', 'Conclusiones de prueba de concepto')
      ]
    },
    {
      id: 'moat',
      title: t('Moat & Scale', 'Foso y Escala'),
      description: t('Emphasize defensive advantages and inevitability', 'Enfatizar ventajas defensivas e inevitabilidad'),
      icon: Shield,
      taglines: [
        t('Three moats. One inevitable Command Center.', 'Tres fosos. Un Centro de Comando inevitable.'),
        t('Bilingual. Modular. Cinematic. Founder-first.', 'Bilingüe. Modular. Cinematográfico. Fundador-primero.'),
        t('Schema-driven. Investor-ready. Enterprise-inevitable.', 'Impulsado por esquemas. Listo para inversionistas. Inevitable empresarial.'),
        t('Built founder-first, designed to scale enterprise-wide.', 'Construido fundador-primero, diseñado para escalar a nivel empresarial.')
      ],
      deployment: [
        t('Competitive differentiation slides', 'Diapositivas de diferenciación competitiva'),
        t('Investment thesis summaries', 'Resúmenes de tesis de inversión'),
        t('Strategic partnership discussions', 'Discusiones de asociaciones estratégicas'),
        t('Market positioning statements', 'Declaraciones de posicionamiento de mercado')
      ]
    },
    {
      id: 'founder',
      title: t('Founder & Platform', 'Fundador y Plataforma'),
      description: t('Personal story that builds into platform inevitability', 'Historia personal que construye hacia inevitabilidad de la plataforma'),
      icon: User,
      taglines: [
        t('Architect of inevitability.', 'Arquitecto de inevitabilidad.'),
        t('Solo founder execution → schema-driven velocity.', 'Ejecución de fundador solo → velocidad impulsada por esquemas.'),
        t('Authentic, practical, relentlessly focused on impact.', 'Auténtico, práctico, implacablemente enfocado en impacto.'),
        t('I don\'t just prototype fast—I encode inevitability.', 'No solo prototipo rápido—codifico inevitabilidad.')
      ],
      deployment: [
        t('Founder introduction moments', 'Momentos de introducción del fundador'),
        t('Team slide narratives', 'Narrativas de diapositivas de equipo'),
        t('Origin story presentations', 'Presentaciones de historia de origen'),
        t('Personal brand positioning', 'Posicionamiento de marca personal')
      ]
    }
  ];

  const linkedInPost = {
    en: {
      header: "Not another SaaS tool—the Command Center where founders prove ROI.",
      body: `I built Overwatch³ because I lived the chaos: siloed dashboards, disconnected systems, and solo-operators forced to duct-tape value across fragmented tools.

Now, Overwatch³ is live.
✅ Bilingual toggle (EN ↔ ES)
✅ Schema-driven modularity  
✅ Cinematic ROI Command Center

Every founder-led deployment is a case study. $1.2M saved. $3.4M lifted. 87% adoption. 92% engagement.

We're raising to scale from solo-operator validation to enterprise adoption. If you're investing in inevitability—or want to deploy the Command Center—DM me.`
    },
    es: {
      header: "No otra herramienta SaaS—el Centro de Comando donde fundadores prueban ROI.",
      body: `Construí Overwatch³ porque viví el caos: tableros aislados, sistemas desconectados, y operadores-solo obligados a improvisar valor a través de herramientas fragmentadas.

Ahora, Overwatch³ está en vivo.
✅ Alternador bilingüe (EN ↔ ES)
✅ Modularidad impulsada por esquemas
✅ Centro de Comando ROI Cinematográfico

Cada despliegue liderado por fundador es un caso de estudio. $1.2M ahorrados. $3.4M elevados. 87% adopción. 92% compromiso.

Estamos recaudando para escalar de validación de operador-solo a adopción empresarial. Si estás invirtiendo en inevitabilidad—o quieres desplegar el Centro de Comando—envíame mensaje.`
    }
  };

  const pitchVariations: PitchVariation[] = [
    {
      id: 'elevator',
      title: t('Elevator Pitch', 'Pitch de Ascensor'),
      duration: '20s',
      context: t('Quick introductions, networking events', 'Introducciones rápidas, eventos de networking'),
      script: t(
        '"Enterprises are drowning in siloed SaaS—HCM, ERP, EPM, CRM—fragmented, disconnected, and impossible to prove ROI. Overwatch³ is the bilingual, schema-driven Command Center where every solo-operator becomes a cinematic case study—ROI proven, not promised. With three moats—bilingual-first, modular schema, and a cinematic ROI engine—Overwatch³ isn\'t another SaaS tool, it\'s the inevitable enterprise platform."',
        '"Las empresas se ahogan en SaaS aislados—HCM, ERP, EPM, CRM—fragmentados, desconectados, e imposible probar ROI. Overwatch³ es el Centro de Comando bilingüe impulsado por esquemas donde cada operador-solo se convierte en caso de estudio cinematográfico—ROI probado, no prometido. Con tres fosos—bilingüe-primero, esquema modular, y motor ROI cinematográfico—Overwatch³ no es otra herramienta SaaS, es la plataforma empresarial inevitable."'
      ),
      notes: t(
        'Perfect for investor intros, LinkedIn DMs, conference networking',
        'Perfecto para introducciones de inversionistas, DMs LinkedIn, networking de conferencias'
      )
    },
    {
      id: 'founder-story',
      title: t('Founder Story', 'Historia del Fundador'),
      duration: '60s',
      context: t('Personal background, origin story moments', 'Antecedentes personales, momentos de historia de origen'),
      script: t(
        '"I built Overwatch³ because I lived the chaos firsthand. As a solo founder and consultant, I saw enterprises drowning in siloed SaaS—none with proof of ROI. So I designed Overwatch³ from the ground up: a bilingual, schema-driven Command Center where every founder-led deployment becomes a cinematic case study. In one click, English becomes Spanish. In one view, financial capital and human capital are unified. ROI isn\'t promised—it\'s proven, live on screen. With three moats—bilingual-first architecture, modular schema, and a cinematic ROI engine—Overwatch³ isn\'t another SaaS tool. It\'s the Command Center where solo-operators prove impact at enterprise scale."',
        '"Construí Overwatch³ porque viví el caos de primera mano. Como fundador solo y consultor, vi empresas ahogándose en SaaS aislados—ninguno con prueba de ROI. Así que diseñé Overwatch³ desde cero: un Centro de Comando bilingüe impulsado por esquemas donde cada despliegue liderado por fundador se convierte en caso de estudio cinematográfico. En un clic, inglés se convierte en español. En una vista, capital financiero y capital humano se unifican. El ROI no se promete—se prueba, en vivo en pantalla. Con tres fosos—arquitectura bilingüe-primero, esquema modular, y motor ROI cinematográfico—Overwatch³ no es otra herramienta SaaS. Es el Centro de Comando donde operadores-solo prueban impacto a escala empresarial."'
      ),
      notes: t(
        'Use for team slides, founder introductions, personal brand moments',
        'Usar para diapositivas de equipo, introducciones de fundador, momentos de marca personal'
      )
    },
    {
      id: 'market-inevitability',
      title: t('Market Inevitability', 'Inevitabilidad de Mercado'),
      duration: '30s',
      context: t('Market sizing, competitive positioning', 'Dimensionamiento de mercado, posicionamiento competitivo'),
      script: t(
        '"The HCM market will reach $65 billion by 2032, growing at 9.6% CAGR. Yet 80% of enterprise SaaS remains monolingual until late stage, leaving 65 million Latino workers underserved. OVERWATCH³ captures this inevitability: bilingual-first architecture targeting the fastest-growing workforce segment in America, combined with schema-driven modularity that transforms HR from cost center to command center. We\'re not chasing market share—we\'re creating the category where enterprises prove ROI cinematically, in any language."',
        '"El mercado HCM alcanzará $65 mil millones para 2032, creciendo al 9.6% CAGR. Sin embargo, 80% del SaaS empresarial permanece monolingüe hasta etapa tardía, dejando 65 millones de trabajadores Latinos desatendidos. OVERWATCH³ captura esta inevitabilidad: arquitectura bilingüe-primero dirigida al segmento de fuerza laboral de más rápido crecimiento en América, combinada con modularidad impulsada por esquemas que transforma RH de centro de costos a centro de comando. No estamos persiguiendo cuota de mercado—estamos creando la categoría donde las empresas prueban ROI cinematográficamente, en cualquier idioma."'
      ),
      notes: t(
        'Perfect for market opportunity slides, competitive analysis moments',
        'Perfecto para diapositivas de oportunidad de mercado, momentos de análisis competitivo'
      )
    }
  ];

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const selectedCategoryData = taglineCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="px-6 lg:px-20 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                <h1 className="text-3xl font-bold">
                  {t('Pitch Resource Library', 'Biblioteca de Recursos de Pitch')}
                </h1>
                <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/40">
                  {t('DEPLOYMENT READY', 'LISTO PARA DESPLIEGUE')}
                </Badge>
              </div>
              <p className="text-slate-300 mb-4">
                {t(
                  'Taglines, scripts, and deployment strategies for every investor interaction',
                  'Líneas de impacto, guiones y estrategias de despliegue para cada interacción con inversionistas'
                )}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-slate-400">
                    {t('5 Categories', '5 Categorías')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400">
                    {t('20+ Taglines', '20+ Líneas de Impacto')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-400">
                    {t('3 Pitch Variations', '3 Variaciones de Pitch')}
                  </span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => onNavigate('pitch-delivery')}
              className="bg-green-600 hover:bg-green-700"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              {t('Launch Pitch System', 'Lanzar Sistema de Pitch')}
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-8">
        <Tabs defaultValue="taglines" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="taglines">
              <Zap className="w-4 h-4 mr-2" />
              {t('Tagline Arsenal', 'Arsenal de Líneas')}
            </TabsTrigger>
            <TabsTrigger value="variations">
              <MessageSquare className="w-4 h-4 mr-2" />
              {t('Pitch Variations', 'Variaciones')}
            </TabsTrigger>
            <TabsTrigger value="linkedin">
              <Share className="w-4 h-4 mr-2" />
              {t('LinkedIn Post', 'Post LinkedIn')}
            </TabsTrigger>
          </TabsList>

          {/* Taglines Tab */}
          <TabsContent value="taglines" className="space-y-8">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              {taglineCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-lg text-left transition-all ${
                      selectedCategory === category.id
                        ? 'bg-green-600/20 border border-green-600/40'
                        : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-3 ${
                      selectedCategory === category.id ? 'text-green-400' : 'text-slate-400'
                    }`} />
                    <h3 className="font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-slate-400">{category.description}</p>
                  </button>
                );
              })}
            </div>

            {selectedCategoryData && (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Taglines */}
                <div className="lg:col-span-2">
                  <Card className="p-6 bg-slate-800 border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <selectedCategoryData.icon className="w-5 h-5 text-green-400" />
                      {selectedCategoryData.title}
                    </h3>
                    
                    <div className="space-y-4">
                      {selectedCategoryData.taglines.map((tagline, index) => (
                        <div key={index} className="group relative">
                          <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-green-500/50 transition-colors">
                            <div className="flex items-start justify-between">
                              <p className="text-lg text-white font-medium pr-4">
                                "{tagline}"
                              </p>
                              <Button
                                onClick={() => handleCopy(tagline)}
                                variant="ghost"
                                size="sm"
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                {copiedText === tagline ? (
                                  <span className="text-green-400 text-xs">✓</span>
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Deployment Guide */}
                <div>
                  <Card className="p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/20">
                    <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      {t('Deployment Strategy', 'Estrategia de Despliegue')}
                    </h4>
                    
                    <div className="space-y-3">
                      {selectedCategoryData.deployment.map((strategy, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Star className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="mt-6 p-6 bg-slate-800 border-slate-700">
                    <h4 className="font-bold text-white mb-4">
                      {t('Usage Tips', 'Consejos de Uso')}
                    </h4>
                    
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          {t(
                            'Use as slide titles for maximum impact',
                            'Usar como títulos de diapositivas para máximo impacto'
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          {t(
                            'Drop as LinkedIn post opening hooks',
                            'Soltar como ganchos de apertura de publicaciones LinkedIn'
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          {t(
                            'Use in cold outreach subject lines',
                            'Usar en líneas de asunto de alcance frío'
                          )}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Variations Tab */}
          <TabsContent value="variations" className="space-y-8">
            <div className="grid gap-8">
              {pitchVariations.map((variation) => (
                <Card key={variation.id} className="p-8 bg-slate-800 border-slate-700">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{variation.title}</h3>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
                          {variation.duration}
                        </Badge>
                      </div>
                      <p className="text-slate-400">{variation.context}</p>
                    </div>
                    <Button
                      onClick={() => handleCopy(variation.script)}
                      variant="outline"
                      size="sm"
                    >
                      {copiedText === variation.script ? (
                        <span className="text-green-400">✓ Copied</span>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-2" />
                          {t('Copy', 'Copiar')}
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="p-6 bg-slate-900/50 rounded-lg border-l-4 border-blue-500 mb-4">
                    <p className="text-lg leading-relaxed text-white">
                      {variation.script}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">
                      {t('Usage Notes', 'Notas de Uso')}
                    </h4>
                    <p className="text-sm text-slate-300">{variation.notes}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* LinkedIn Post Tab */}
          <TabsContent value="linkedin" className="space-y-8">
            <Card className="p-8 bg-slate-800 border-slate-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {t('LinkedIn Post Template', 'Plantilla Post LinkedIn')}
                    </h3>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
                      {t('FOUNDER-FOCUSED', 'ENFOCADO FUNDADOR')}
                    </Badge>
                  </div>
                  <p className="text-slate-400">
                    {t('Ready-to-post LinkedIn content with founder positioning', 'Contenido LinkedIn listo para publicar con posicionamiento de fundador')}
                  </p>
                </div>
                <Button
                  onClick={() => handleCopy(linkedInPost[language].header + '\n\n' + linkedInPost[language].body)}
                  variant="outline"
                  size="sm"
                >
                  {copiedText === (linkedInPost[language].header + '\n\n' + linkedInPost[language].body) ? (
                    <span className="text-green-400">✓ Copied</span>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-2" />
                      {t('Copy Post', 'Copiar Post')}
                    </>
                  )}
                </Button>
              </div>
              
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <h4 className="font-semibold text-yellow-400">
                    {t('Opening Hook', 'Gancho de Apertura')}
                  </h4>
                </div>
                <div className="p-4 bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-lg font-medium text-white">
                    {linkedInPost[language].header}
                  </p>
                </div>
              </div>
              
              {/* Body */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <h4 className="font-semibold text-blue-400">
                    {t('Full Post Body', 'Cuerpo Completo del Post')}
                  </h4>
                </div>
                <div className="p-6 bg-slate-900/50 rounded-lg border-l-4 border-blue-500">
                  <pre className="text-lg leading-relaxed text-white whitespace-pre-wrap font-medium">
                    {linkedInPost[language].body}
                  </pre>
                </div>
              </div>
              
              {/* Usage Notes */}
              <div className="p-4 bg-green-900/20 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  {t('Usage Strategy', 'Estrategia de Uso')}
                </h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      {t(
                        'Post during market hours (9AM-5PM EST) for maximum investor visibility',
                        'Publicar durante horas de mercado (9AM-5PM EST) para máxima visibilidad de inversionistas'
                      )}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      {t(
                        'Tag relevant VCs, enterprise founders, and HR leaders in comments',
                        'Etiquetar VCs relevantes, fundadores empresariales y líderes de RH en comentarios'
                      )}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      {t(
                        'Follow up with DM to engaged commenters offering platform demo',
                        'Seguir con mensaje directo a comentaristas comprometidos ofreciendo demo de plataforma'
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Access Footer */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              {t('Ready to Deploy?', '¿Listo para Desplegar?')}
            </h3>
            <p className="text-slate-300 mb-6">
              {t(
                'Transform every investor interaction with cinematic precision',
                'Transforma cada interacción con inversionistas con precisión cinematográfica'
              )}
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => onNavigate('pitch-delivery')}
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {t('Launch Pitch System', 'Lanzar Sistema de Pitch')}
              </Button>
              <Button
                onClick={() => onNavigate('investor-demo')}
                variant="outline"
              >
                <Building className="w-4 h-4 mr-2" />
                {t('Demo Center', 'Centro Demo')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}