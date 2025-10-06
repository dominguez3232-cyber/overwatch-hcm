import { FunctionComponent } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  BarChart3, 
  Shield, 
  Globe, 
  Building2,
  Briefcase,
  Calculator,
  Lightbulb,
  ChevronRight,
  Star,
  Award,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Eye,
  Clock
} from 'lucide-react';
import luisPortrait from 'figma:asset/4342e09cd01f340e942ef66b435317f36b2be13d.png';

interface PersonaLandingPageProps {
  language: 'en' | 'es';
  currentMode: 'founder' | 'trabajo' | 'accounting' | 'strategy';
  onNavigateToModule: (moduleId: string) => void;
  onLaunchPlatform: () => void;
}

const PersonaLandingPage: FunctionComponent<PersonaLandingPageProps> = ({
  language,
  currentMode,
  onNavigateToModule,
  onLaunchPlatform
}) => {
  const personaData = {
    founder: {
      en: {
        name: "LUIS DOMINGUEZ",
        codename: "EXECUTIVE_ONE",
        rank: "Founder & CEO",
        specialty: "Advisory-Grade HRIS Innovation",
        classification: "EXECUTIVE ADVISOR",
        portrait: luisPortrait,
        bio: "Founder and CEO specializing in transforming HR from cost center to command center for founder-led companies. Expert in bilingual HR systems with deep expertise in cross-border markets and Latino business culture. Focus: Building the world's first Advisory-Grade HRIS that combines HR, Finance, and cultural intelligence.",
        motto: "Culture is the queen piece that multiplies everything else.",
        dailyObjectives: [
          "Drive product innovation and strategic vision",
          "Assess market fit and expansion opportunities", 
          "Build strategic partnerships and investor relations",
          "Scale OVERWATCH platform adoption"
        ],
        keyMetrics: ["Platform Growth", "Market Penetration", "Customer Success", "Strategic Vision"],
        specialEquipment: ["Strategic Diagnostic Cockpit", "Culture Force Multiplier", "ROI Calculator", "Advisory Intelligence Center"]
      },
      es: {
        name: "LUIS DOMINGUEZ", 
        codename: "EJECUTIVO_UNO",
        rank: "Fundador y CEO",
        specialty: "Innovación HRIS de Grado Asesor",
        classification: "ASESOR EJECUTIVO",
        portrait: luisPortrait,
        bio: "Fundador y CEO especializado en transformar RH de centro de costos a centro de comando para empresas lideradas por fundadores. Experto en sistemas de RH bilingües con profunda experiencia en mercados transfronterizos y cultura empresarial latina. Enfoque: Construir el primer HRIS de Grado Asesor del mundo que combina RH, Finanzas e inteligencia cultural.",
        motto: "La cultura es la pieza reina que multiplica todo lo demás.",
        dailyObjectives: [
          "Impulsar innovación de producto y visión estratégica",
          "Evaluar ajuste de mercado y oportunidades de expansión",
          "Construir asociaciones estratégicas y relaciones con inversionistas", 
          "Escalar adopción de la plataforma OVERWATCH"
        ],
        keyMetrics: ["Crecimiento de Plataforma", "Penetración de Mercado", "Éxito del Cliente", "Visión Estratégica"],
        specialEquipment: ["Cabina de Diagnóstico Estratégico", "Multiplicador de Fuerza Cultural", "Calculadora ROI", "Centro de Inteligencia Asesor"]
      }
    },
    trabajo: {
      en: {
        name: "MARIA HERNANDEZ",
        codename: "CULTURAL_LEAD", 
        rank: "Head of Latino Market Operations",
        specialty: "Cross-Cultural HR & Talent",
        classification: "CULTURAL ADVISOR",
        portrait: "https://images.unsplash.com/photo-1692459411840-f396f46a0524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTY1OTI4MTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Cultural Lead is a specialist in bilingual workforce management and Latino market penetration. Expert at building bridges between cultures while maintaining compliance across different regulatory environments. Focus: Optimize human capital strategies for companies operating in both English and Spanish-speaking markets.",
        motto: "El trabajo en equipo hace que el sueño funcione.",
        dailyObjectives: [
          "Assess bilingual talent pipeline and development",
          "Monitor cross-cultural team dynamics and performance",
          "Review compliance across different labor jurisdictions",
          "Optimize Latino market engagement strategies"
        ],
        keyMetrics: ["Bilingual Team Performance", "Cultural Integration", "Compliance Score", "Latino Market Penetration"],
        specialEquipment: ["Brand Archetypes Module", "Culture Assessment Tools", "Bilingual Compliance Center", "Latino Talent Network"]
      },
      es: {
        name: "MARIA HERNANDEZ",
        codename: "LIDER_CULTURAL",
        rank: "Jefe de Operaciones del Mercado Latino", 
        specialty: "RH Intercultural y Talento",
        classification: "ASESOR CULTURAL",
        portrait: "https://images.unsplash.com/photo-1648448942225-7aa06c7e8f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTI4MjY1OXww&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Líder Cultural es especialista en gestión de fuerza laboral bilingüe y penetración del mercado latino. Experta en construir puentes entre culturas mientras mantiene el cumplimiento en diferentes entornos regulatorios. Enfoque: Optimizar estrategias de capital humano para empresas que operan en mercados de habla inglesa y española.",
        motto: "El trabajo en equipo hace que el sueño funcione.",
        dailyObjectives: [
          "Evaluar pipeline y desarrollo de talento bilingüe",
          "Monitorear dinámicas y desempeño de equipos interculturales",
          "Revisar cumplimiento en diferentes jurisdicciones laborales",
          "Optimizar estrategias de participación en el mercado latino"
        ],
        keyMetrics: ["Desempeño Equipo Bilingüe", "Integración Cultural", "Puntuación Cumplimiento", "Penetración Mercado Latino"],
        specialEquipment: ["Módulo de Arquetipos de Marca", "Herramientas de Evaluación Cultural", "Centro de Cumplimiento Bilingüe", "Red de Talento Latino"]
      }
    },
    accounting: {
      en: {
        name: "DAVID CHEN",
        codename: "FINANCE_LEAD",
        rank: "Chief Financial Officer", 
        specialty: "Financial Operations & Compliance",
        classification: "FINANCIAL ADVISOR",
        portrait: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY2NvdW50YW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5MjMyODIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Finance Lead specializes in transforming HR from a cost center into a measurable profit driver. Expert at financial modeling, ROI calculations, and compliance management across multiple jurisdictions. Focus: Quantify human capital impact and ensure all HR investments deliver measurable business returns.",
        motto: "Every dollar invested in people must return three.",
        dailyObjectives: [
          "Track ROI metrics across all HR initiatives",
          "Monitor compliance costs and risk mitigation",
          "Analyze payroll and benefits optimization opportunities", 
          "Model financial impact of talent decisions"
        ],
        keyMetrics: ["HR ROI", "Compliance Cost", "Payroll Efficiency", "Risk Score"],
        specialEquipment: ["ROI Calculator", "Pay & Tax Compliance Center", "Financial Reconciliation Engine", "Implementation Roadmap"]
      },
      es: {
        name: "DAVID CHEN",
        codename: "LIDER_FINANZAS", 
        rank: "Director Financiero Principal",
        specialty: "Operaciones Financieras y Cumplimiento",
        classification: "ASESOR FINANCIERO",
        portrait: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwcm9mZXNzaW9uYWwlMjBhY2NvdW50YW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5MjMyODIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Líder Financiero se especializa en transformar RH de un centro de costos en un generador de ganancias medible. Experto en modelado financiero, cálculos de ROI y gestión de cumplimiento en múltiples jurisdicciones. Enfoque: Cuantificar el impacto del capital humano y asegurar que todas las inversiones en RH entreguen retornos empresariales medibles.",
        motto: "Cada dólar invertido en personas debe retornar tres.",
        dailyObjectives: [
          "Rastrear métricas de ROI en todas las iniciativas de RH",
          "Monitorear costos de cumplimiento y mitigación de riesgos",
          "Analizar oportunidades de optimización de nómina y beneficios",
          "Modelar impacto financiero de decisiones de talento"
        ],
        keyMetrics: ["ROI RH", "Costo Cumplimiento", "Eficiencia Nómina", "Puntuación Riesgo"],
        specialEquipment: ["Calculadora ROI", "Centro Cumplimiento Nómina e Impuestos", "Motor Reconciliación Financiera", "Hoja de Ruta Implementación"]
      }
    },
    strategy: {
      en: {
        name: "SARAH WILLIAMS",
        codename: "STRATEGY_LEAD",
        rank: "Chief Strategy Officer",
        specialty: "Strategic Intelligence & Planning", 
        classification: "STRATEGIC ADVISOR",
        portrait: "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhzdHJhdGVnaWMlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkyODI2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Strategy Lead excels at connecting HR strategy to business outcomes through advanced analytics and strategic frameworks. Expert at competitive intelligence, market positioning, and long-term strategic planning. Focus: Transform reactive HR into predictive strategic advantage that drives sustainable competitive differentiation.",
        motto: "Strategy without execution is hallucination.",
        dailyObjectives: [
          "Analyze competitive landscape and positioning opportunities",
          "Model strategic scenarios and business impact",
          "Assess organizational readiness for strategic initiatives",
          "Optimize resource allocation for maximum strategic impact"
        ],
        keyMetrics: ["Strategic Alignment", "Competitive Position", "Execution Rate", "Future Readiness"],
        specialEquipment: ["Strategic Command Center", "Advanced Integration Tools", "Competitive Battlecards", "Strategic Framework Library"]
      },
      es: {
        name: "SARAH WILLIAMS",
        codename: "LIDER_ESTRATEGIA",
        rank: "Directora de Estrategia Principal",
        specialty: "Inteligencia Estratégica y Planificación",
        classification: "ASESORA ESTRATÉGICA", 
        portrait: "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhzdHJhdGVnaWMlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkyODI2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        bio: "Líder Estratégica sobresale en conectar la estrategia de RH con resultados empresariales a través de análisis avanzados y marcos estratégicos. Experta en inteligencia competitiva, posicionamiento de mercado y planificación estratégica a largo plazo. Enfoque: Transformar RH reactivo en ventaja estratégica predictiva que impulse diferenciación competitiva sostenible.",
        motto: "Estrategia sin ejecución es alucinación.",
        dailyObjectives: [
          "Analizar panorama competitivo y oportunidades de posicionamiento",
          "Modelar escenarios estratégicos e impacto empresarial", 
          "Evaluar preparación organizacional para iniciativas estratégicas",
          "Optimizar asignación de recursos para máximo impacto estratégico"
        ],
        keyMetrics: ["Alineación Estratégica", "Posición Competitiva", "Tasa de Ejecución", "Preparación Futura"],
        specialEquipment: ["Centro de Comando Estratégico", "Herramientas de Integración Avanzada", "Tarjetas de Batalla Competitiva", "Biblioteca de Marcos Estratégicos"]
      }
    }
  };

  const currentPersona = personaData[currentMode][language];

  const getIconForMode = () => {
    switch (currentMode) {
      case 'founder': return <Building2 className="w-6 h-6" />;
      case 'trabajo': return <Globe className="w-6 h-6" />;
      case 'accounting': return <Calculator className="w-6 h-6" />;
      case 'strategy': return <Lightbulb className="w-6 h-6" />;
      default: return <Target className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white font-sans overflow-hidden relative">
      {/* Sophisticated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-blue-500/20"></div>
          ))}
        </div>
      </div>
      
      {/* Executive Header removed per user request */}

      <div className="max-w-7xl mx-auto p-8">
        {/* Executive Brief removed per user request */}

        {/* Executive Intelligence Briefing */}
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          {/* Left Column - Executive Profile */}
          <div className="lg:col-span-8">
            <div className="bg-slate-800/90 border border-blue-500/30 rounded-lg p-6 relative backdrop-blur-sm">
              {/* Executive Banner */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-800 to-slate-700 text-center py-2 text-blue-100 font-medium text-sm rounded-t-lg">
                {language === 'en' ? '⬥ EXECUTIVE INTELLIGENCE ⬥ STRATEGIC ADVISORY ⬥' : '⬥ INTELIGENCIA EJECUTIVA ⬥ ASESORÍA ESTRATÉGICA ⬥'}
              </div>
              
              <div className="pt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Executive Profile */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={currentPersona.portrait}
                        alt={`${currentPersona.name} Portrait`}
                        className="w-20 h-20 object-cover border border-blue-500/50 rounded-lg shadow-lg"
                      />
                      <div>
                        <div className="text-white font-bold text-xl">{currentPersona.name}</div>
                        <div className="text-blue-400 font-medium">{currentPersona.rank}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Executive Details */}
                  <div className="space-y-4">
                    <div className="border border-blue-500/30 p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-blue-400 font-bold mb-3">
                        {language === 'en' ? 'EXECUTIVE PROFILE' : 'PERFIL EJECUTIVO'}
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-gray-300">{language === 'en' ? 'Position:' : 'Posición:'}</span>
                          <span className="text-white font-medium">{currentPersona.rank}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-gray-300">{language === 'en' ? 'Expertise:' : 'Experiencia:'}</span>
                          <span className="text-white font-medium">{currentPersona.specialty}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span className="text-gray-300">{language === 'en' ? 'Advisory Level:' : 'Nivel Asesor:'}</span>
                          <span className="text-blue-400 font-bold">{currentPersona.classification}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Strategic Status */}
                    <div className="border border-green-500/30 p-4 bg-green-900/20 rounded-lg">
                      <div className="text-green-400 font-bold mb-2">
                        {language === 'en' ? 'STRATEGIC STATUS' : 'ESTADO ESTRATÉGICO'}
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm">
                          {language === 'en' ? 'READY FOR ENGAGEMENT' : 'LISTO PARA PARTICIPACIÓN'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Platform Access */}
                    <div className="border border-blue-500/30 p-4 bg-blue-900/20 rounded-lg">
                      <div className="text-blue-400 font-bold mb-2">
                        {language === 'en' ? 'PLATFORM ACCESS' : 'ACCESO A PLATAFORMA'}
                      </div>
                      <div className="space-y-1">
                        {currentPersona.specialEquipment.slice(0, 3).map((equipment, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-blue-400 text-xs">{equipment}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Strategic Intelligence */}
          <div className="lg:col-span-4 space-y-6">
            {/* Strategic Brief */}
            <div className="bg-slate-800/90 border border-blue-500/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                {language === 'en' ? 'STRATEGIC BRIEF' : 'BRIEFING ESTRATÉGICO'}
              </div>
              <div className="text-sm text-gray-300 leading-relaxed mb-4">
                {currentPersona.bio}
              </div>
              <div className="border-l-4 border-blue-500 pl-3 bg-blue-900/20 p-3 rounded-r">
                <div className="text-blue-400 font-bold text-xs">
                  {language === 'en' ? 'LEADERSHIP PHILOSOPHY:' : 'FILOSOFÍA DE LIDERAZGO:'}
                </div>
                <div className="text-blue-300 italic text-sm mt-1">
                  "{currentPersona.motto}"
                </div>
              </div>
            </div>

            {/* Strategic Priorities */}
            <div className="bg-slate-800/90 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                {language === 'en' ? 'STRATEGIC PRIORITIES' : 'PRIORIDADES ESTRATÉGICAS'}
              </div>
              <div className="space-y-2">
                {currentPersona.dailyObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center text-xs text-white font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 text-sm">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Assessment */}
            <div className="bg-slate-800/90 border border-blue-500/30 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                {language === 'en' ? 'STRATEGIC ASSESSMENT' : 'EVALUACIÓN ESTRATÉGICA'}
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-gray-400">{language === 'en' ? 'Market Position:' : 'Posición de Mercado:'}</div>
                  <div className="text-green-400">STRONG</div>
                  <div className="text-gray-400">{language === 'en' ? 'Growth Potential:' : 'Potencial de Crecimiento:'}</div>
                  <div className="text-blue-400">HIGH</div>
                  <div className="text-gray-400">{language === 'en' ? 'Strategy:' : 'Estrategia:'}</div>
                  <div className="text-green-400">STANDARD-OPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Intelligence Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Key Metrics */}
          <div className="bg-gray-900/90 border-2 border-purple-500 rounded p-4">
            <div className="text-purple-400 font-bold mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              {language === 'en' ? 'PERFORMANCE METRICS' : 'MÉTRICAS DE DESEMPEÑO'}
            </div>
            <div className="space-y-2">
              {currentPersona.keyMetrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-400 text-xs">{metric}</span>
                  <div className="flex-1 bg-gray-800 h-1 rounded">
                    <div className="bg-purple-400 h-1 rounded" style={{width: '85%'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Equipment */}
          <div className="bg-gray-900/90 border-2 border-orange-500 rounded p-4">
            <div className="text-orange-400 font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              {language === 'en' ? 'EQUIPMENT LOADOUT' : 'EQUIPO ASIGNADO'}
            </div>
            <div className="space-y-2">
              {currentPersona.specialEquipment.map((equipment, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                  <span className="text-orange-400 text-xs">{equipment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service History */}
          <div className="bg-gray-900/90 border-2 border-cyan-500 rounded p-4">
            <div className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {language === 'en' ? 'SERVICE HISTORY' : 'HISTORIAL DE SERVICIO'}
            </div>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400">{language === 'en' ? 'Years Active:' : 'Años Activo:'}</span>
                <span className="text-cyan-400">8.5</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400">{language === 'en' ? 'Projects:' : 'Proyectos:'}</span>
                <span className="text-cyan-400">247</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400">{language === 'en' ? 'Success Rate:' : 'Tasa de Éxito:'}</span>
                <span className="text-green-400">98.7%</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-400">{language === 'en' ? 'Classification:' : 'Clasificación:'}</span>
                <span className="text-red-400">CONFIDENTIAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Command Actions */}
        <div className="text-center space-y-6">
          {/* Primary Platform Access */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-center py-3 mb-6 text-lg rounded-lg">
              {language === 'en' ? '⬥ EXECUTIVE PLATFORM ACCESS READY ⬥' : '⬥ ACCESO A PLATAFORMA EJECUTIVA LISTO ⬥'}
            </div>
            <button 
              onClick={onLaunchPlatform}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold px-12 py-4 text-xl rounded-lg border border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              {language === 'en' ? 'LAUNCH EXECUTIVE PLATFORM' : 'ABRIR PLATAFORMA EJECUTIVA'}
            </button>
          </div>
          
          {/* Strategic Access Points */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <button 
              onClick={() => onNavigateToModule('dashboard')}
              className="bg-slate-800 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-3 text-sm font-medium transition-all rounded-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="w-4 h-4" />
                {language === 'en' ? 'DASHBOARD' : 'TABLERO'}
              </div>
            </button>
            <button 
              onClick={() => onNavigateToModule('assessment')}
              className="bg-slate-800 border border-purple-500/50 text-purple-400 hover:bg-purple-600 hover:text-white px-4 py-3 text-sm font-medium transition-all rounded-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <Target className="w-4 h-4" />
                {language === 'en' ? 'ASSESSMENT' : 'EVALUACIÓN'}
              </div>
            </button>
            <button 
              onClick={() => onNavigateToModule('overwatch')}
              className="bg-slate-800 border border-red-500/50 text-red-400 hover:bg-red-600 hover:text-white px-4 py-3 text-sm font-medium transition-all rounded-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                {language === 'en' ? 'OVERWATCH³' : 'OVERWATCH³'}
              </div>
            </button>
            <button 
              onClick={() => onNavigateToModule('business-command-center')}
              className="bg-slate-800 border border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white px-4 py-3 text-sm font-medium transition-all rounded-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <Building2 className="w-4 h-4" />
                {language === 'en' ? 'COMMAND' : 'COMANDO'}
              </div>
            </button>
          </div>

          {/* Demo Choreography Tools */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-center py-2 mb-4 text-sm rounded-lg">
              {language === 'en' ? '⬥ DEMO CHOREOGRAPHY COCKPIT ⬥' : '⬥ CABINA DE COREOGRAFÍA DEMO ⬥'}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button 
                onClick={() => onNavigateToModule('sequence-builder')}
                className="bg-slate-800 border border-amber-500/50 text-amber-400 hover:bg-amber-600 hover:text-white px-6 py-4 text-sm font-medium transition-all rounded-lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-lg">⚡</span>
                  <div className="text-left">
                    <div className="font-bold">{language === 'en' ? 'SEQUENCE BUILDER' : 'CONSTRUCTOR SECUENCIA'}</div>
                    <div className="text-xs opacity-75">{language === 'en' ? 'Create cinematic walkthroughs' : 'Crear recorridos cinematográficos'}</div>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => onNavigateToModule('sequence-library')}
                className="bg-slate-800 border border-amber-500/50 text-amber-400 hover:bg-amber-600 hover:text-white px-6 py-4 text-sm font-medium transition-all rounded-lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-lg">📁</span>
                  <div className="text-left">
                    <div className="font-bold">{language === 'en' ? 'SEQUENCE LIBRARY' : 'BIBLIOTECA SECUENCIAS'}</div>
                    <div className="text-xs opacity-75">{language === 'en' ? 'Browse & deploy demos' : 'Explorar y desplegar demos'}</div>
                  </div>
                </div>
              </button>
            </div>
            <div className="text-center mt-3">
              <p className="text-amber-400 text-xs">
                {language === 'en' 
                  ? 'Build once, demo forever. Share instantly for investor presentations.'
                  : 'Construye una vez, demuestra para siempre. Comparte al instante para presentaciones de inversores.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Executive Footer */}
        <div className="mt-12 border-t border-blue-500/30 pt-6">
          <div className="text-center text-blue-400 text-sm">
            {language === 'en' 
              ? '⬥ Confidential Executive Intelligence Platform ⬥ C-Suite Access Only ⬥'
              : '⬥ Plataforma de Inteligencia Ejecutiva Confidencial ⬥ Solo Acceso C-Suite ⬥'
            }
          </div>
          <div className="text-center text-yellow-400 text-xs font-mono mt-2">
            {language === 'en' 
              ? 'OVERWATCH³ EXECUTIVE ACCESS - ADVISORY CREDENTIALS VERIFIED'
              : 'ACCESO EJECUTIVO OVERWATCH³ - CREDENCIALES ASESORAS VERIFICADAS'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaLandingPage;