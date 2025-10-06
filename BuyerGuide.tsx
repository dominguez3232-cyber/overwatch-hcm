import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Brain,
  CheckCircle,
  ArrowRight,
  Calculator,
  FileText,
  Users,
  DollarSign,
  Zap,
  Globe
} from 'lucide-react';

interface BuyerGuideProps {
  language: 'en' | 'es';
  role?: 'ceo' | 'cfo' | 'chro' | 'coo';
}

export function BuyerGuide({ language, role = 'ceo' }: BuyerGuideProps) {
  const labels = {
    en: {
      title: "OVERWATCH Buyer Guide",
      subtitle: "Advisory-Grade HRIS for Strategic Leaders",
      problem: "The Strategic Gap",
      solution: "The OVERWATCH Advantage", 
      value: "Proven Value Delivery",
      implementation: "90-Day Success Plan",
      pricing: "Investment & ROI",
      nextSteps: "Next Steps",
      cta: "Schedule Demo",
      calculator: "ROI Calculator"
    },
    es: {
      title: "Guía del Comprador OVERWATCH",
      subtitle: "HRIS de Grado Asesor para Líderes Estratégicos",
      problem: "La Brecha Estratégica",
      solution: "La Ventaja OVERWATCH",
      value: "Entrega de Valor Comprobada",
      implementation: "Plan de Éxito de 90 Días",
      pricing: "Inversión y ROI",
      nextSteps: "Próximos Pasos",
      cta: "Agendar Demo",
      calculator: "Calculadora ROI"
    }
  };

  const currentLabels = labels[language];

  const getRoleSpecificContent = () => {
    const baseContent = {
      en: {
        problems: [
          "14+ disconnected HR/Finance tools creating data silos",
          "Strategic decisions delayed by incomplete intelligence",
          "No unified view of people impact on EBITDA",
          "Cultural advantages untapped and unmeasured"
        ],
        solutions: [
          "Unified Command Center for HR, Finance, and Strategy",
          "Real-time EBITDA impact modeling and scenario planning",
          "Bilingual AI coaching with cultural intelligence (Lo Nuestro)",
          "Advisory-grade frameworks previously only available to Fortune 500"
        ],
        values: [
          "+23% profitability improvement through culture investment",
          "+18% productivity gain from strategic alignment",
          "-43% turnover reduction in optimized organizations",
          "7.15:1 average ROI within 90 days"
        ]
      },
      es: {
        problems: [
          "14+ herramientas HR/Finanzas desconectadas creando silos de datos",
          "Decisiones estratégicas retrasadas por inteligencia incompleta",
          "Sin vista unificada del impacto de personas en EBITDA",
          "Ventajas culturales no aprovechadas ni medidas"
        ],
        solutions: [
          "Centro de Comando Unificado para RH, Finanzas y Estrategia",
          "Modelado de impacto EBITDA en tiempo real y planificación de escenarios",
          "Coaching IA bilingüe con inteligencia cultural (Lo Nuestro)",
          "Marcos de grado asesor previamente solo disponibles para Fortune 500"
        ],
        values: [
          "+23% mejora en rentabilidad a través de inversión en cultura",
          "+18% ganancia en productividad por alineación estratégica",
          "-43% reducción de rotación en organizaciones optimizadas",
          "7.15:1 ROI promedio dentro de 90 días"
        ]
      }
    };

    // Role-specific customizations
    if (role === 'cfo') {
      baseContent.en.problems[2] = "No real-time visibility into labor costs vs. revenue impact";
      baseContent.en.solutions[1] = "Live P&L impact modeling with workforce cost optimization";
      baseContent.es.problems[2] = "Sin visibilidad en tiempo real de costos laborales vs. impacto en ingresos";
      baseContent.es.solutions[1] = "Modelado de impacto P&L en vivo con optimización de costos de fuerza laboral";
    }

    if (role === 'chro') {
      baseContent.en.problems[0] = "HR operates in silos without strategic business impact visibility";
      baseContent.en.solutions[0] = "Strategic HR Command Center with C-suite intelligence integration";
      baseContent.es.problems[0] = "RH opera en silos sin visibilidad de impacto estratégico en el negocio";
      baseContent.es.solutions[0] = "Centro de Comando RH Estratégico con integración de inteligencia C-suite";
    }

    return baseContent[language];
  };

  const content = getRoleSpecificContent();

  const implementationSteps = language === 'en' ? [
    { phase: "Week 1-2", task: "Platform setup & data integration", icon: Zap },
    { phase: "Week 3-6", task: "Team onboarding & workflow automation", icon: Users },
    { phase: "Week 7-10", task: "Analytics deployment & scenario modeling", icon: Brain },
    { phase: "Week 11-12", task: "Success measurement & expansion planning", icon: Target }
  ] : [
    { phase: "Semana 1-2", task: "Configuración de plataforma e integración de datos", icon: Zap },
    { phase: "Semana 3-6", task: "Incorporación de equipo y automatización de flujos", icon: Users },
    { phase: "Semana 7-10", task: "Despliegue de analítica y modelado de escenarios", icon: Brain },
    { phase: "Semana 11-12", task: "Medición de éxito y planificación de expansión", icon: Target }
  ];

  const pricingTiers = language === 'en' ? [
    { 
      name: "Core HRIS", 
      price: "$2,500/mo", 
      description: "Essential HR operations with basic analytics",
      features: ["Payroll & Benefits", "Compliance Dashboard", "Basic Analytics", "Mobile Access"]
    },
    { 
      name: "Strategic HR", 
      price: "$8,500/mo", 
      description: "Advanced analytics with cultural intelligence",
      features: ["Everything in Core", "Lo Nuestro AI Coach", "Scenario Planning", "Command Centers"],
      popular: true
    },
    { 
      name: "Advisory Intelligence", 
      price: "$25,000/mo", 
      description: "Full advisory platform with success fees",
      features: ["Everything in Strategic", "Dedicated Success Manager", "Custom Frameworks", "Executive Coaching"]
    }
  ] : [
    { 
      name: "HRIS Central", 
      price: "$2,500/mes", 
      description: "Operaciones RH esenciales con analítica básica",
      features: ["Nómina y Beneficios", "Panel de Cumplimiento", "Analítica Básica", "Acceso Móvil"]
    },
    { 
      name: "RH Estratégico", 
      price: "$8,500/mes", 
      description: "Analítica avanzada con inteligencia cultural",
      features: ["Todo en Central", "Coach IA Lo Nuestro", "Planificación de Escenarios", "Centros de Comando"],
      popular: true
    },
    { 
      name: "Inteligencia Asesora", 
      price: "$25,000/mes", 
      description: "Plataforma asesora completa con tarifas de éxito",
      features: ["Todo en Estratégico", "Gerente de Éxito Dedicado", "Marcos Personalizados", "Coaching Ejecutivo"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-green-600/20 border-green-600/40 text-green-400 px-4 py-2">
          <Shield className="w-4 h-4 mr-2" />
          Advisory-Grade HRIS
        </Badge>
        
        <h1 className="text-3xl font-bold text-white">
          {currentLabels.title}
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {currentLabels.subtitle}
        </p>
      </div>

      {/* Problem Section */}
      <Card className="bg-card/80 border-red-500/30 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-red-600">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.problem}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
              <p className="text-gray-300">{problem}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Solution Section */}
      <Card className="bg-card/80 border-green-500/30 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-green-600">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.solution}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.solutions.map((solution, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">{solution}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Value Section */}
      <Card className="bg-card/80 border-blue-500/30 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-600">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.value}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.values.map((value, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-blue-600/10 rounded-lg">
              <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <p className="text-white font-medium">{value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Implementation Timeline */}
      <Card className="bg-card/80 border-purple-500/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-purple-600">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.implementation}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {implementationSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-purple-400">{step.phase}</div>
                  <div className="text-sm text-gray-400 mt-1">{step.task}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Pricing */}
      <Card className="bg-card/80 border-green-500/30 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-600">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">{currentLabels.pricing}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative p-4 rounded-lg border ${
                tier.popular 
                  ? 'border-green-500 bg-green-500/10' 
                  : 'border-gray-600 bg-gray-800/50'
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-2 left-4 bg-green-600 text-white">
                  Most Popular
                </Badge>
              )}
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-white">{tier.name}</h3>
                  <div className="text-2xl font-bold text-green-400">{tier.price}</div>
                  <p className="text-sm text-gray-400">{tier.description}</p>
                </div>
                
                <div className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              <Calculator className="w-4 h-4 mr-2" />
              {currentLabels.calculator}
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              <Globe className="w-4 h-4 mr-2" />
              {currentLabels.cta}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-400">
            {language === 'en' 
              ? "90-day pilot available with success-fee protection"
              : "Piloto de 90 días disponible con protección de tarifa de éxito"
            }
          </p>
        </div>
      </Card>
    </div>
  );
}