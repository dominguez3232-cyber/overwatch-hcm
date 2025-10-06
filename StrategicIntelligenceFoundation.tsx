/**
 * Strategic Intelligence Foundation
 * 
 * This component provides the foundational strategic intelligence that elevates
 * ALL OVERWATCH³ modules to Advisory-Grade standards using 2025 VC criteria
 * research as the minimum baseline.
 * 
 * Every strategic component in the platform inherits from this foundation.
 */

export interface VCBenchmarks {
  hcmSaaS: {
    marketSize: string;
    cagr: string;
    nrrTarget: number;
    churnMax: number;
    ltvCacMin: number;
    grossMarginMin: number;
    burnMultipleMax: number;
    paybackPeriodMax: number;
  };
  fundingStages: {
    [stage: string]: {
      arrTarget: string;
      fundingRange: string;
      keyFocus: string[];
      timeline: string;
      criticalMetrics: string[];
    };
  };
  competitiveLandscape: {
    [competitor: string]: {
      marketCap?: string;
      valuation?: string;
      revenue: string;
      nrr: string;
      keyAdvantages: string[];
    };
  };
}

export interface StrategicIntelligenceContext {
  vcBenchmarks: VCBenchmarks;
  marketDynamics: {
    keyTrends: string[];
    investmentFocus: string[];
    riskFactors: string[];
    opportunities: string[];
  };
  competitivePositioning: {
    overwatchAdvantages: string[];
    marketDifferentiators: string[];
    defensibleMoats: string[];
  };
  investmentReadiness: {
    evaluationCriteria: string[];
    preparationSteps: string[];
    riskMitigators: string[];
  };
}

export const getStrategicIntelligenceFoundation = (language: 'en' | 'es'): StrategicIntelligenceContext => {
  return {
    vcBenchmarks: {
      hcmSaaS: {
        marketSize: '$65B by 2032',
        cagr: '9.6%',
        nrrTarget: 115, // Minimum 115% for investment grade
        churnMax: 5, // Maximum 5% monthly churn
        ltvCacMin: 3, // Minimum 3:1 LTV:CAC ratio
        grossMarginMin: 75, // Minimum 75% gross margin
        burnMultipleMax: 1.5, // Maximum 1.5x burn multiple
        paybackPeriodMax: 12 // Maximum 12 months payback
      },
      fundingStages: {
        seed: {
          arrTarget: '$100K+ ARR',
          fundingRange: '$1M - $5M',
          keyFocus: ['Product-Market Fit', 'Customer Validation', 'Team Building'],
          timeline: '18-24 months runway',
          criticalMetrics: ['User Traction', 'Early Revenue', 'Customer Feedback']
        },
        seriesA: {
          arrTarget: '$1M+ ARR',
          fundingRange: '$5M - $20M',
          keyFocus: ['Repeatable Sales', 'Market Leadership', 'Scalable Operations'],
          timeline: '24-36 months runway',
          criticalMetrics: ['100%+ NRR', 'LTV:CAC > 3:1', 'Predictable Growth']
        },
        seriesB: {
          arrTarget: '$10M+ ARR',
          fundingRange: '$15M - $50M',
          keyFocus: ['Market Expansion', 'Operational Excellence', 'Path to IPO'],
          timeline: '36+ months runway',
          criticalMetrics: ['110%+ NRR', 'Rule of 40', 'Market Leadership']
        },
        growth: {
          arrTarget: '$50M+ ARR',
          fundingRange: '$50M+',
          keyFocus: ['Market Dominance', 'Profitability', 'Global Expansion'],
          timeline: 'Path to IPO/Exit',
          criticalMetrics: ['120%+ NRR', 'Positive Cash Flow', 'Category Leadership']
        }
      },
      competitiveLandscape: {
        workday: {
          marketCap: '$58B',
          revenue: '$8.45B',
          nrr: '108%',
          keyAdvantages: ['Enterprise Scale', 'AI Innovation', 'Global Reach']
        },
        gusto: {
          valuation: '$9.5B',
          revenue: '$200M+',
          nrr: '115%',
          keyAdvantages: ['SMB Focus', 'User Experience', 'Benefits Integration']
        },
        rippling: {
          valuation: '$13.5B',
          revenue: '$270M+',
          nrr: '120%',
          keyAdvantages: ['Platform Extensibility', 'IT Integration', 'Global Payroll']
        },
        ceridian: {
          marketCap: '$12B',
          revenue: '$1.4B',
          nrr: '111%',
          keyAdvantages: ['Real-time Payroll', 'Workforce Management', 'Global Compliance']
        }
      }
    },
    marketDynamics: {
      keyTrends: [
        language === 'en' ? 'AI-driven recruiting and compliance automation' : 'Automatización de reclutamiento y cumplimiento con IA',
        language === 'en' ? 'Global payroll and multi-entity solutions' : 'Nómina global y soluciones multi-entidad',
        language === 'en' ? 'Employee engagement and analytics platforms' : 'Plataformas de compromiso y analítica de empleados',
        language === 'en' ? 'DEI data-driven initiatives' : 'Iniciativas de DEI basadas en datos',
        language === 'en' ? 'Remote/hybrid workforce management' : 'Gestión de fuerza laboral remota/híbrida',
        language === 'en' ? 'Regulatory compliance automation' : 'Automatización de cumplimiento regulatorio',
        language === 'en' ? 'Predictive HR analytics' : 'Analítica predictiva de RH'
      ],
      investmentFocus: [
        language === 'en' ? 'Platform extensibility and ecosystem' : 'Extensibilidad de plataforma y ecosistema',
        language === 'en' ? 'AI/ML for bias reduction and compliance' : 'IA/ML para reducción de sesgo y cumplimiento',
        language === 'en' ? 'Multi-entity and international capabilities' : 'Capacidades multi-entidad e internacionales',
        language === 'en' ? 'Integration depth with ERP/Finance systems' : 'Profundidad de integración con sistemas ERP/Finanzas',
        language === 'en' ? 'Vertical-specific solutions' : 'Soluciones específicas por vertical',
        language === 'en' ? 'Embedded analytics and insights' : 'Analítica e insights integrados'
      ],
      riskFactors: [
        language === 'en' ? 'AI bias litigation and compliance' : 'Litigios de sesgo de IA y cumplimiento',
        language === 'en' ? 'Regulatory changes and data privacy' : 'Cambios regulatorios y privacidad de datos',
        language === 'en' ? 'Market saturation and competition' : 'Saturación de mercado y competencia',
        language === 'en' ? 'Economic downturns affecting HR spend' : 'Recesiones económicas afectando gasto en RH',
        language === 'en' ? 'Cybersecurity and data breaches' : 'Ciberseguridad y violaciones de datos'
      ],
      opportunities: [
        language === 'en' ? '65M Latino workers in US market' : '65M trabajadores Latinos en mercado US',
        language === 'en' ? 'Cross-border operations growth' : 'Crecimiento de operaciones transfronterizas',
        language === 'en' ? 'Mid-market digital transformation' : 'Transformación digital del mercado medio',
        language === 'en' ? 'Compliance automation demand' : 'Demanda de automatización de cumplimiento',
        language === 'en' ? 'Integration with fintech and AI' : 'Integración con fintech e IA'
      ]
    },
    competitivePositioning: {
      overwatchAdvantages: [
        language === 'en' ? 'Advisory-Grade Intelligence - McKinsey-style insights built into HR operations' : 'Inteligencia de Grado Asesor - Insights estilo McKinsey integrados en operaciones RH',
        language === 'en' ? 'Bilingual & Cross-Border - Native Spanish/English with Latino market focus' : 'Bilingüe y Transfronterizo - Español/Inglés nativo con enfoque en mercado Latino',
        language === 'en' ? 'Culture Force Multiplier - Culture as strategic advantage amplifying all business functions' : 'Multiplicador de Fuerza Cultural - Cultura como ventaja estratégica amplificando todas las funciones empresariales',
        language === 'en' ? '12-Layer Diagnostic Cockpit - Comprehensive lifecycle mapping and risk assessment' : 'Cabina de Diagnóstico de 12 Capas - Mapeo integral del ciclo de vida y evaluación de riesgos',
        language === 'en' ? 'Persona-Driven Experience - Mode toggles for Founder, Trabajo, Accounting, Strategy personas' : 'Experiencia Dirigida por Personas - Alternar modos para personas Fundador, Trabajo, Contabilidad, Estrategia',
        language === 'en' ? 'Unified HR-Finance-Culture Platform - Integrated system eliminating vendor sprawl' : 'Plataforma Unificada HR-Finanzas-Cultura - Sistema integrado eliminando dispersión de proveedores'
      ],
      marketDifferentiators: [
        language === 'en' ? 'Only HRIS with built-in strategic advisory capabilities' : 'Único HRIS con capacidades asesoras estratégicas integradas',
        language === 'en' ? 'First bilingual HCM platform targeting Latino market' : 'Primera plataforma HCM bilingüe dirigida al mercado Latino',
        language === 'en' ? 'Culture-centric approach vs. process-centric competitors' : 'Enfoque centrado en cultura vs. competidores centrados en procesos',
        language === 'en' ? 'Advisory-grade insights vs. basic reporting' : 'Insights de grado asesor vs. reportes básicos',
        language === 'en' ? 'Cross-border compliance vs. domestic-only solutions' : 'Cumplimiento transfronterizo vs. soluciones solo domésticas'
      ],
      defensibleMoats: [
        language === 'en' ? 'Proprietary strategic frameworks and methodologies' : 'Marcos y metodologías estratégicas propietarias',
        language === 'en' ? 'Bilingual data models and cultural intelligence' : 'Modelos de datos bilingües e inteligencia cultural',
        language === 'en' ? 'Advisory-grade algorithm and insight generation' : 'Algoritmo de grado asesor y generación de insights',
        language === 'en' ? 'Cross-border compliance expertise and automation' : 'Experiencia y automatización de cumplimiento transfronterizo',
        language === 'en' ? 'Integrated ecosystem reducing vendor dependencies' : 'Ecosistema integrado reduciendo dependencias de proveedores'
      ]
    },
    investmentReadiness: {
      evaluationCriteria: [
        language === 'en' ? 'SaaS Metrics Excellence - NRR >115%, Churn <5%, LTV:CAC >3:1' : 'Excelencia en Métricas SaaS - NRR >115%, Abandono <5%, LTV:CAC >3:1',
        language === 'en' ? 'Market Differentiation - Clear competitive advantages and moats' : 'Diferenciación de Mercado - Ventajas competitivas y fosos claros',
        language === 'en' ? 'Scalability - Platform architecture supporting enterprise growth' : 'Escalabilidad - Arquitectura de plataforma soportando crecimiento empresarial',
        language === 'en' ? 'Team Depth - Domain expertise and execution track record' : 'Profundidad de Equipo - Experiencia de dominio y historial de ejecución',
        language === 'en' ? 'Market Opportunity - Addressable market size and growth potential' : 'Oportunidad de Mercado - Tamaño de mercado direccionable y potencial de crecimiento'
      ],
      preparationSteps: [
        language === 'en' ? 'Optimize SaaS metrics to exceed industry benchmarks' : 'Optimizar métricas SaaS para superar benchmarks de la industria',
        language === 'en' ? 'Build referenceable customer base with case studies' : 'Construir base de clientes referenciales con casos de estudio',
        language === 'en' ? 'Prepare comprehensive data room and financial models' : 'Preparar sala de datos integral y modelos financieros',
        language === 'en' ? 'Document competitive advantages and market positioning' : 'Documentar ventajas competitivas y posicionamiento de mercado',
        language === 'en' ? 'Establish key partnerships and ecosystem relationships' : 'Establecer asociaciones clave y relaciones de ecosistema'
      ],
      riskMitigators: [
        language === 'en' ? 'Diversified customer base across industries and geographies' : 'Base de clientes diversificada entre industrias y geografías',
        language === 'en' ? 'Multiple revenue streams and expansion opportunities' : 'Múltiples flujos de ingresos y oportunidades de expansión',
        language === 'en' ? 'Strong compliance and security posture' : 'Postura sólida de cumplimiento y seguridad',
        language === 'en' ? 'Experienced leadership team with track record' : 'Equipo de liderazgo experimentado con historial',
        language === 'en' ? 'Clear path to profitability and cash flow positive' : 'Camino claro hacia rentabilidad y flujo de efectivo positivo'
      ]
    }
  };
};

// Utility functions to calculate VC-grade metrics
export const calculateVCReadinessScore = (metrics: {
  nrr: number;
  churn: number;
  ltvCac: number;
  grossMargin: number;
  arr: number;
  burnMultiple?: number;
  paybackPeriod?: number;
}): { score: number; grade: string; improvements: string[] } => {
  const benchmarks = getStrategicIntelligenceFoundation('en').vcBenchmarks.hcmSaaS;
  let score = 0;
  const improvements: string[] = [];

  // NRR scoring (25 points)
  if (metrics.nrr >= benchmarks.nrrTarget + 15) score += 25;
  else if (metrics.nrr >= benchmarks.nrrTarget + 5) score += 20;
  else if (metrics.nrr >= benchmarks.nrrTarget) score += 15;
  else {
    score += Math.max(0, Math.floor((metrics.nrr / benchmarks.nrrTarget) * 15));
    improvements.push('Improve Net Revenue Retention to >115%');
  }

  // Churn scoring (20 points)
  if (metrics.churn <= benchmarks.churnMax - 2) score += 20;
  else if (metrics.churn <= benchmarks.churnMax - 1) score += 15;
  else if (metrics.churn <= benchmarks.churnMax) score += 10;
  else {
    score += Math.max(0, 10 - Math.floor((metrics.churn - benchmarks.churnMax) * 2));
    improvements.push('Reduce customer churn to <5%');
  }

  // LTV:CAC scoring (20 points)
  if (metrics.ltvCac >= benchmarks.ltvCacMin + 2) score += 20;
  else if (metrics.ltvCac >= benchmarks.ltvCacMin + 1) score += 15;
  else if (metrics.ltvCac >= benchmarks.ltvCacMin) score += 10;
  else {
    score += Math.max(0, Math.floor((metrics.ltvCac / benchmarks.ltvCacMin) * 10));
    improvements.push('Optimize LTV:CAC ratio to >3:1');
  }

  // Gross Margin scoring (15 points)
  if (metrics.grossMargin >= benchmarks.grossMarginMin + 10) score += 15;
  else if (metrics.grossMargin >= benchmarks.grossMarginMin + 5) score += 12;
  else if (metrics.grossMargin >= benchmarks.grossMarginMin) score += 10;
  else {
    score += Math.max(0, Math.floor((metrics.grossMargin / benchmarks.grossMarginMin) * 10));
    improvements.push('Improve gross margins to >75%');
  }

  // ARR growth scoring (10 points)
  if (metrics.arr >= 10000000) score += 10; // $10M+ ARR
  else if (metrics.arr >= 1000000) score += 8; // $1M+ ARR
  else if (metrics.arr >= 100000) score += 5; // $100K+ ARR
  else improvements.push('Increase ARR to meet funding stage requirements');

  // Burn multiple scoring (10 points) - optional
  if (metrics.burnMultiple !== undefined) {
    if (metrics.burnMultiple <= benchmarks.burnMultipleMax - 0.5) score += 10;
    else if (metrics.burnMultiple <= benchmarks.burnMultipleMax) score += 7;
    else if (metrics.burnMultiple <= benchmarks.burnMultipleMax + 0.3) score += 4;
    else improvements.push('Improve capital efficiency (burn multiple <1.5x)');
  }

  const finalScore = Math.min(100, score);
  let grade = 'Needs Improvement';
  if (finalScore >= 85) grade = 'Investment Ready';
  else if (finalScore >= 70) grade = 'Nearly Ready';
  else if (finalScore >= 50) grade = 'Developing';

  return { score: finalScore, grade, improvements };
};

export const getCompetitiveIntelligence = (language: 'en' | 'es', competitor?: string) => {
  const foundation = getStrategicIntelligenceFoundation(language);
  
  if (competitor && foundation.vcBenchmarks.competitiveLandscape[competitor]) {
    return foundation.vcBenchmarks.competitiveLandscape[competitor];
  }
  
  return foundation.vcBenchmarks.competitiveLandscape;
};

export const getMarketOpportunitySize = (language: 'en' | 'es') => {
  const foundation = getStrategicIntelligenceFoundation(language);
  return {
    totalMarket: foundation.vcBenchmarks.hcmSaaS.marketSize,
    growthRate: foundation.vcBenchmarks.hcmSaaS.cagr,
    opportunities: foundation.marketDynamics.opportunities
  };
};

export const getFundingStageGuidance = (language: 'en' | 'es', stage: string) => {
  const foundation = getStrategicIntelligenceFoundation(language);
  return foundation.vcBenchmarks.fundingStages[stage] || foundation.vcBenchmarks.fundingStages.seed;
};

export const getStrategicRecommendations = (
  language: 'en' | 'es', 
  context: 'growth' | 'fundraising' | 'expansion' | 'optimization'
) => {
  const foundation = getStrategicIntelligenceFoundation(language);
  
  const baseRecommendations = {
    growth: [
      language === 'en' ? 'Focus on NRR expansion through upselling and cross-selling' : 'Enfocarse en expansión NRR a través de upselling y cross-selling',
      language === 'en' ? 'Invest in customer success to reduce churn' : 'Invertir en éxito del cliente para reducir abandono',
      language === 'en' ? 'Develop vertical-specific solutions for market penetration' : 'Desarrollar soluciones específicas por vertical para penetración de mercado'
    ],
    fundraising: foundation.investmentReadiness.preparationSteps,
    expansion: [
      language === 'en' ? 'Target Latino market with bilingual capabilities' : 'Orientar mercado Latino con capacidades bilingües',
      language === 'en' ? 'Develop cross-border compliance features' : 'Desarrollar características de cumplimiento transfronterizo',
      language === 'en' ? 'Build strategic partnerships for market entry' : 'Construir asociaciones estratégicas para entrada al mercado'
    ],
    optimization: [
      language === 'en' ? 'Improve operational efficiency to enhance margins' : 'Mejorar eficiencia operacional para aumentar márgenes',
      language === 'en' ? 'Optimize customer acquisition cost through better targeting' : 'Optimizar costo de adquisición de clientes a través de mejor targeting',
      language === 'en' ? 'Implement predictive analytics for proactive management' : 'Implementar analítica predictiva para gestión proactiva'
    ]
  };
  
  return baseRecommendations[context];
};