import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Shield, 
  Target, 
  Crown,
  Zap,
  CheckCircle,
  X,
  ArrowRight,
  TrendingUp,
  Brain,
  Globe,
  Users,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

interface CompetitiveBattlecardProps {
  language: 'en' | 'es';
  competitor: 'rippling' | 'workday' | 'bamboohr' | 'adp' | 'paychex';
}

export function CompetitiveBattlecard({ language, competitor }: CompetitiveBattlecardProps) {
  const labels = {
    en: {
      title: "Competitive Battlecard",
      subtitle: "OVERWATCH vs",
      strengths: "Why OVERWATCH Wins",
      weaknesses: "Competitor Limitations",
      objections: "Common Objections & Responses",
      pricing: "Pricing Comparison",
      talkTrack: "Winning Talk Track",
      nextSteps: "Next Steps"
    },
    es: {
      title: "Tarjeta de Batalla Competitiva", 
      subtitle: "OVERWATCH vs",
      strengths: "Por Qué OVERWATCH Gana",
      weaknesses: "Limitaciones del Competidor",
      objections: "Objeciones Comunes y Respuestas",
      pricing: "Comparación de Precios",
      talkTrack: "Narrativa Ganadora",
      nextSteps: "Próximos Pasos"
    }
  };

  const currentLabels = labels[language];

  const competitorData = {
    rippling: {
      name: "Rippling",
      tagline: "All-in-one platform",
      strengths: ["Broad integration", "Device management", "Fast implementation"],
      weaknesses: [
        "Transaction-focused, not strategic",
        "No cultural intelligence or bilingual support", 
        "Limited advisory capabilities",
        "Weak analytics and forecasting",
        "One-size-fits-all approach"
      ],
      pricing: "$8-12/employee/month",
      ourAdvantage: "Advisory-grade intelligence vs. operational automation"
    },
    workday: {
      name: "Workday",
      tagline: "Enterprise HCM",
      strengths: ["Enterprise scale", "Financial integration", "Brand recognition"],
      weaknesses: [
        "Expensive and complex for SMBs",
        "Long implementation cycles (6-18 months)",
        "No bilingual cultural intelligence",
        "Requires extensive customization",
        "Poor SMB support experience"
      ],
      pricing: "$100-300/employee/month",
      ourAdvantage: "SMB-focused with Fortune 500 intelligence"
    },
    bamboohr: {
      name: "BambooHR", 
      tagline: "HR for growing companies",
      strengths: ["SMB-friendly", "Clean interface", "Good onboarding"],
      weaknesses: [
        "Basic reporting and analytics",
        "No financial convergence",
        "Limited strategic capabilities",
        "No cultural intelligence",
        "Weak compliance tools"
      ],
      pricing: "$6-12/employee/month",
      ourAdvantage: "Strategic intelligence vs. basic HR operations"
    },
    adp: {
      name: "ADP",
      tagline: "Payroll leader",
      strengths: ["Payroll expertise", "Compliance knowledge", "Market presence"],
      weaknesses: [
        "Legacy technology stack",
        "Payroll-centric, limited HR strategy",
        "No cultural intelligence",
        "Poor user experience",
        "Expensive add-on model"
      ],
      pricing: "$4-15/employee/month + fees",
      ourAdvantage: "Modern platform with strategic focus vs. legacy payroll"
    },
    paychex: {
      name: "Paychex",
      tagline: "Small business specialist", 
      strengths: ["SMB focus", "Local support", "Payroll reliability"],
      weaknesses: [
        "Limited technology innovation",
        "Basic HR functionality",
        "No strategic intelligence",
        "No bilingual capabilities",
        "Fragmented user experience"
      ],
      pricing: "$39-120/month base + per employee",
      ourAdvantage: "Technology-forward with strategic advisory vs. basic payroll service"
    }
  };

  const currentCompetitor = competitorData[competitor];

  const overwatchStrengths = language === 'en' ? [
    {
      icon: Brain,
      title: "Advisory-Grade Intelligence",
      description: "McKinsey-level frameworks and strategic insights previously only available to Fortune 500"
    },
    {
      icon: Globe,
      title: "Bilingual Cultural Intelligence (Lo Nuestro)",
      description: "AI-powered coaching that understands Latino workforce dynamics and cross-cultural management"
    },
    {
      icon: TrendingUp,
      title: "Real-Time EBITDA Impact Modeling",
      description: "Live P&L convergence with HR decisions, scenario planning, and ROI forecasting"
    },
    {
      icon: Zap,
      title: "90-Day Value Realization",
      description: "Pilot program with guaranteed ROI measurement and success-fee alignment"
    },
    {
      icon: Shield,
      title: "Industry-Specific Playbooks",
      description: "Pre-built frameworks for Manufacturing, Engineering, and Professional Services"
    }
  ] : [
    {
      icon: Brain,
      title: "Inteligencia de Grado Asesor",
      description: "Marcos McKinsey y insights estratégicos previamente solo disponibles para Fortune 500"
    },
    {
      icon: Globe,
      title: "Inteligencia Cultural Bilingüe (Lo Nuestro)",
      description: "Coaching IA que entiende dinámicas de fuerza laboral latina y gestión transcultural"
    },
    {
      icon: TrendingUp,
      title: "Modelado de Impacto EBITDA en Tiempo Real",
      description: "Convergencia P&L en vivo con decisiones RH, planificación de escenarios y pronóstico ROI"
    },
    {
      icon: Zap,
      title: "Realización de Valor en 90 Días",
      description: "Programa piloto con medición ROI garantizada y alineación de tarifa de éxito"
    },
    {
      icon: Shield,
      title: "Playbooks Específicos por Industria",
      description: "Marcos pre-construidos para Manufactura, Ingeniería y Servicios Profesionales"
    }
  ];

  const commonObjections = language === 'en' ? [
    {
      objection: "We're happy with our current system",
      response: "That's great that you have a functioning system. The question is: are you getting strategic intelligence that impacts your EBITDA, or just processing transactions? Let me show you what visibility into your people-to-profit connection looks like."
    },
    {
      objection: "This seems expensive/complex for our size",
      response: "I understand that concern. That's exactly why we created the 90-day pilot with success-fee protection. You only pay the performance fee if we deliver measurable ROI. What's the cost of not having visibility into your largest expense - your people?"
    },
    {
      objection: "We don't have time for another implementation",
      response: "Fair point - most implementations are disruptive. Ours is different: we deploy in phases over 90 days while you keep running your business. Day 1 you'll have better insights than you do today, and by Day 14 you'll see the EBITDA impact. Want to see the timeline?"
    },
    {
      objection: "We don't need bilingual features",
      response: "Even if your current team is primarily English-speaking, the market is shifting. 80% of workforce growth is coming from Latino workers. Lo Nuestro isn't just translation - it's cultural intelligence that helps any manager be more effective with diverse teams."
    }
  ] : [
    {
      objection: "Estamos contentos con nuestro sistema actual",
      response: "Es genial que tengan un sistema funcional. La pregunta es: ¿están obteniendo inteligencia estratégica que impacte su EBITDA, o solo procesando transacciones? Déjenme mostrarles cómo se ve la visibilidad de la conexión personas-ganancias."
    },
    {
      objection: "Esto parece caro/complejo para nuestro tamaño",
      response: "Entiendo esa preocupación. Por eso creamos el piloto de 90 días con protección de tarifa de éxito. Solo pagan la tarifa de rendimiento si entregamos ROI medible. ¿Cuál es el costo de no tener visibilidad en su mayor gasto - su gente?"
    },
    {
      objection: "No tenemos tiempo para otra implementación",
      response: "Punto justo - la mayoría de implementaciones son disruptivas. La nuestra es diferente: desplegamos en fases durante 90 días mientras siguen operando. Día 1 tendrán mejores insights que hoy, y para el Día 14 verán el impacto EBITDA. ¿Quieren ver el cronograma?"
    },
    {
      objection: "No necesitamos características bilingües",
      response: "Incluso si su equipo actual habla principalmente inglés, el mercado está cambiando. 80% del crecimiento de fuerza laboral viene de trabajadores latinos. Lo Nuestro no es solo traducción - es inteligencia cultural que ayuda a cualquier gerente ser más efectivo con equipos diversos."
    }
  ];

  const winningTalkTrack = language === 'en' ? [
    "Position the strategic gap: 'Most HRIS solutions handle transactions, but the real opportunity is turning your people data into profit intelligence.'",
    "Introduce the force multiplier concept: 'We call it f(x) → F(x) - transforming HR from cost center to command center where culture becomes your competitive advantage.'",
    "Anchor on industry expertise: 'We've built specific playbooks for [Manufacturing/Engineering/Professional Services] because generic solutions miss the nuances that drive results in your industry.'",
    "Risk reversal close: 'Here's what I suggest - let's run a 90-day pilot with success-fee protection. You only pay for performance if we deliver measurable ROI. What have you got to lose besides the opportunity cost of another quarter without this intelligence?'"
  ] : [
    "Posicionar la brecha estratégica: 'La mayoría de soluciones HRIS manejan transacciones, pero la oportunidad real es convertir datos de personas en inteligencia de ganancias.'",
    "Introducir el concepto multiplicador de fuerza: 'Lo llamamos f(x) → F(x) - transformando RH de centro de costos a centro de comando donde la cultura se convierte en ventaja competitiva.'",
    "Anclar en experiencia de industria: 'Hemos construido playbooks específicos para [Manufactura/Ingeniería/Servicios Profesionales] porque soluciones genéricas pierden los matices que impulsan resultados en su industria.'",
    "Cierre de reversión de riesgo: 'Esto es lo que sugiero - ejecutemos un piloto de 90 días con protección de tarifa de éxito. Solo pagan por rendimiento si entregamos ROI medible. ¿Qué tienen que perder además del costo de oportunidad de otro trimestre sin esta inteligencia?'"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-red-600/20 border-red-600/40 text-red-400 px-4 py-2">
          <Target className="w-4 h-4 mr-2" />
          Competitive Intelligence
        </Badge>
        
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {currentLabels.title}
          </h1>
          <div className="text-xl text-gray-400">
            {currentLabels.subtitle} {currentCompetitor.name}
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-green-600/20 rounded-full">
            <Crown className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium">OVERWATCH</span>
          </div>
          <span className="text-gray-500">vs</span>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-600/20 rounded-full">
            <span className="text-gray-400 font-medium">{currentCompetitor.name}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* OVERWATCH Strengths */}
        <Card className="bg-card/80 border-green-500/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-green-600">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">{currentLabels.strengths}</h2>
          </div>
          
          <div className="space-y-4">
            {overwatchStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div key={index} className="flex gap-3 p-3 bg-green-600/10 rounded-lg">
                  <div className="flex-shrink-0">
                    <Icon className="w-5 h-5 text-green-400 mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-green-400 mb-1">{strength.title}</h3>
                    <p className="text-sm text-gray-300">{strength.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Competitor Weaknesses */}
        <Card className="bg-card/80 border-red-500/30 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-red-600">
              <X className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">{currentLabels.weaknesses}</h2>
          </div>
          
          <div className="space-y-3">
            {currentCompetitor.weaknesses.map((weakness, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-red-600/10 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{weakness}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-blue-600/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="font-medium text-blue-400">
                {language === 'en' ? 'Our Key Advantage' : 'Nuestra Ventaja Clave'}
              </span>
            </div>
            <p className="text-sm text-gray-300">{currentCompetitor.ourAdvantage}</p>
          </div>
        </Card>
      </div>

      {/* Pricing Comparison */}
      <Card className="bg-card/80 border-blue-500/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-600">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.pricing}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-300">{currentCompetitor.name}</h3>
            <div className="p-4 bg-gray-600/20 rounded-lg">
              <div className="text-lg font-bold text-gray-400 mb-2">{currentCompetitor.pricing}</div>
              <div className="text-sm text-gray-500">
                {language === 'en' 
                  ? 'Transaction-focused with limited strategic value'
                  : 'Enfocado en transacciones con valor estratégico limitado'
                }
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-green-400">OVERWATCH</h3>
            <div className="p-4 bg-green-600/10 rounded-lg border border-green-600/30">
              <div className="text-lg font-bold text-green-400 mb-2">
                $2.5K-25K/month + success fees
              </div>
              <div className="text-sm text-gray-300">
                {language === 'en' 
                  ? 'Premium pricing with ROI guarantee and value-based upside'
                  : 'Precios premium con garantía ROI y ventaja basada en valor'
                }
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Objection Handling */}
      <Card className="bg-card/80 border-purple-500/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-600">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.objections}</h2>
        </div>
        
        <div className="space-y-4">
          {commonObjections.map((obj, index) => (
            <div key={index} className="p-4 bg-purple-600/10 rounded-lg">
              <div className="font-medium text-purple-400 mb-2">
                "{obj.objection}"
              </div>
              <div className="text-gray-300 text-sm">
                <strong>{language === 'en' ? 'Response:' : 'Respuesta:'}</strong> {obj.response}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Winning Talk Track */}
      <Card className="bg-card/80 border-yellow-500/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-yellow-600">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.talkTrack}</h2>
        </div>
        
        <div className="space-y-3">
          {winningTalkTrack.map((track, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-yellow-600/10 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-600 text-white text-sm font-bold flex items-center justify-center">
                {index + 1}
              </div>
              <p className="text-gray-300 text-sm italic">"{track}"</p>
            </div>
          ))}
        </div>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-green-600/10 via-blue-600/10 to-purple-600/10 border-green-500/30 p-6">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold text-white">{currentLabels.nextSteps}</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
              <Target className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Schedule Demo' : 'Agendar Demo'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              <Shield className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Create Pilot SOW' : 'Crear SOW Piloto'}
            </Button>
          </div>
          
          <p className="text-sm text-gray-400">
            {language === 'en' 
              ? "Use these talking points to position OVERWATCH as the strategic upgrade"
              : "Usa estos puntos de conversación para posicionar OVERWATCH como la actualización estratégica"
            }
          </p>
        </div>
      </Card>
    </div>
  );
}