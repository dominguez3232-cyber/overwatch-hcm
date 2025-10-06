import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Database, Eye, Globe } from 'lucide-react';

interface OverlayContent {
  metricContext: {
    en: string;
    es: string;
  };
  strategicGuidance: {
    en: string;
    es: string;
  };
  tacticalTip: {
    en: string;
    es: string;
  };
  schemaTrace: string;
  visualCue: {
    type: 'pulse' | 'highlight' | 'glow';
    color: string;
  };
  voiceoverScript?: {
    en: string;
    es: string;
  };
}

// OVERWATCH³ Coaching Overlay Library - Seedable by Role + Module
export const coachingOverlayLibrary: Record<string, OverlayContent> = {
  // CFO + EPM Overlays
  'cfo-epm-forecast_accuracy': {
    metricContext: {
      en: 'Forecast Accuracy measures how closely projected financials match actuals—critical for budget confidence and investor trust.',
      es: 'Precisión de pronóstico mide qué tan cerca están las proyecciones financieras de los resultados reales—crítico para la confianza presupuestaria y la confianza del inversionista.'
    },
    strategicGuidance: {
      en: 'High accuracy signals operational discipline and strategic foresight. CFOs use this to validate planning cycles and board narratives.',
      es: 'Alta precisión señala disciplina operacional y previsión estratégica. Los CFOs usan esto para validar ciclos de planificación y narrativas de la junta directiva.'
    },
    tacticalTip: {
      en: 'Use rolling forecasts with schema-linked variance tracking. Activate EPM overlay to auto-flag deviations >10%.',
      es: 'Usa pronósticos móviles con seguimiento de variaciones vinculadas al esquema. Activa la superposición EPM para marcar automáticamente desviaciones >10%.'
    },
    schemaTrace: 'epm.forecast_accuracy.variance_tracking.enabled = true',
    visualCue: {
      type: 'pulse',
      color: '#3b82f6'
    },
    voiceoverScript: {
      en: 'As a CFO, forecast accuracy is your strategic compass. This metric directly impacts board confidence and investor relations. Focus on rolling forecasts and automated variance detection.',
      es: 'Como CFO, la precisión del pronóstico es tu brújula estratégica. Esta métrica impacta directamente la confianza de la junta directiva y las relaciones con inversionistas. Enfócate en pronósticos móviles y detección automatizada de variaciones.'
    }
  },

  'cfo-epm-cash_flow_velocity': {
    metricContext: {
      en: 'Cash Flow Velocity measures how quickly cash converts through your business cycle—the faster, the more efficient your capital deployment.',
      es: 'Velocidad de flujo de efectivo mide qué tan rápido se convierte el efectivo a través de tu ciclo de negocio—mientras más rápido, más eficiente el despliegue de capital.'
    },
    strategicGuidance: {
      en: 'Optimize payment terms, invoice processes, and collection cycles. This metric directly impacts your runway and growth capability.',
      es: 'Optimiza términos de pago, procesos de facturación y ciclos de cobranza. Esta métrica impacta directamente tu resistencia financiera y capacidad de crecimiento.'
    },
    tacticalTip: {
      en: 'Implement automated invoice generation and payment reminders. Monitor Days Sales Outstanding (DSO) weekly.',
      es: 'Implementa generación automatizada de facturas y recordatorios de pago. Monitorea Días de Ventas Pendientes (DSO) semanalmente.'
    },
    schemaTrace: 'epm.cash_flow.velocity_tracking.dso_monitoring = true',
    visualCue: {
      type: 'glow',
      color: '#10b981'
    }
  },

  'cfo-erp-cost_center_efficiency': {
    metricContext: {
      en: 'Cost Center Efficiency tracks resource utilization across departments—identifying optimization opportunities and budget reallocation targets.',
      es: 'Eficiencia de centros de costo rastrea la utilización de recursos entre departamentos—identificando oportunidades de optimización y objetivos de reasignación presupuestaria.'
    },
    strategicGuidance: {
      en: 'Use this to drive strategic budget conversations and identify departments ready for expansion or requiring intervention.',
      es: 'Usa esto para impulsar conversaciones presupuestarias estratégicas e identificar departamentos listos para expansión o que requieren intervención.'
    },
    tacticalTip: {
      en: 'Set efficiency thresholds by department type. Manufacturing should target 85%+, Services 75%+, R&D varies by innovation cycle.',
      es: 'Establece umbrales de eficiencia por tipo de departamento. Manufactura debería apuntar a 85%+, Servicios 75%+, I+D varía según el ciclo de innovación.'
    },
    schemaTrace: 'erp.cost_centers.efficiency_thresholds.department_specific = true',
    visualCue: {
      type: 'highlight',
      color: '#f59e0b'
    }
  },

  // CEO + EPM Overlays
  'ceo-epm-strategic_objective_completion': {
    metricContext: {
      en: 'Strategic Objective Completion measures how effectively your organization executes on quarterly and annual strategic initiatives.',
      es: 'Finalización de objetivos estratégicos mide qué tan efectivamente tu organización ejecuta iniciativas estratégicas trimestrales y anuales.'
    },
    strategicGuidance: {
      en: 'This is your execution scorecard. High completion rates indicate strong alignment between strategy and operations, essential for board confidence.',
      es: 'Este es tu tablero de puntuación de ejecución. Altas tasas de finalización indican fuerte alineación entre estrategia y operaciones, esencial para la confianza de la junta directiva.'
    },
    tacticalTip: {
      en: 'Break large objectives into monthly milestones. Use OKR methodology with 70% completion target—100% suggests goals were too conservative.',
      es: 'Divide objetivos grandes en hitos mensuales. Usa metodología OKR con objetivo de finalización del 70%—100% sugiere que las metas fueron demasiado conservadoras.'
    },
    schemaTrace: 'epm.strategic_objectives.okr_methodology.completion_target = 0.7',
    visualCue: {
      type: 'pulse',
      color: '#8b5cf6'
    },
    voiceoverScript: {
      en: 'As CEO, this metric reflects your strategic leadership effectiveness. Focus on ambitious but achievable goals with clear monthly checkpoints.',
      es: 'Como CEO, esta métrica refleja tu efectividad de liderazgo estratégico. Enfócate en metas ambiciosas pero alcanzables con puntos de control mensuales claros.'
    }
  },

  'ceo-epm-market_opportunity_capture': {
    metricContext: {
      en: 'Market Opportunity Capture tracks how effectively you identify and convert market opportunities into revenue streams.',
      es: 'Captura de oportunidades de mercado rastrea qué tan efectivamente identificas y conviertes oportunidades de mercado en flujos de ingresos.'
    },
    strategicGuidance: {
      en: 'This metric indicates market timing and competitive positioning strength. Use it to guide resource allocation and expansion decisions.',
      es: 'Esta métrica indica sincronización de mercado y fortaleza de posicionamiento competitivo. Úsala para guiar asignación de recursos y decisiones de expansión.'
    },
    tacticalTip: {
      en: 'Implement quarterly opportunity reviews with cross-functional teams. Track conversion rates from identification to revenue realization.',
      es: 'Implementa revisiones trimestrales de oportunidades con equipos multifuncionales. Rastrea tasas de conversión desde identificación hasta realización de ingresos.'
    },
    schemaTrace: 'epm.market_opportunities.conversion_tracking.quarterly_reviews = true',
    visualCue: {
      type: 'glow',
      color: '#ef4444'
    }
  },

  // CHRO + HCM Overlays
  'chro-hcm-employee_engagement_score': {
    metricContext: {
      en: 'Employee Engagement Score measures workforce satisfaction, commitment, and discretionary effort—directly correlating with productivity and retention.',
      es: 'Puntuación de compromiso de empleados mide satisfacción de la fuerza laboral, compromiso y esfuerzo discrecional—correlacionando directamente con productividad y retención.'
    },
    strategicGuidance: {
      en: 'High engagement drives innovation, customer satisfaction, and profitability. Use this as your culture health indicator and retention predictor.',
      es: 'Alto compromiso impulsa innovación, satisfacción del cliente y rentabilidad. Usa esto como tu indicador de salud cultural y predictor de retención.'
    },
    tacticalTip: {
      en: 'Survey quarterly with actionable questions. Scores below 7/10 require immediate intervention. Focus on manager quality and career development.',
      es: 'Encuesta trimestralmente con preguntas accionables. Puntuaciones debajo de 7/10 requieren intervención inmediata. Enfócate en calidad de gerentes y desarrollo profesional.'
    },
    schemaTrace: 'hcm.engagement.quarterly_surveys.intervention_threshold = 7.0',
    visualCue: {
      type: 'pulse',
      color: '#06b6d4'
    },
    voiceoverScript: {
      en: 'As CHRO, engagement is your strategic lever for organizational performance. Focus on manager development and clear career pathways.',
      es: 'Como CHRO, el compromiso es tu palanca estratégica para el rendimiento organizacional. Enfócate en desarrollo de gerentes y trayectorias profesionales claras.'
    }
  },

  'chro-hcm-talent_retention_rate': {
    metricContext: {
      en: 'Talent Retention Rate measures your ability to keep high-performing employees—critical for maintaining institutional knowledge and reducing hiring costs.',
      es: 'Tasa de retención de talento mide tu capacidad para mantener empleados de alto rendimiento—crítico para mantener conocimiento institucional y reducir costos de contratación.'
    },
    strategicGuidance: {
      en: 'Focus retention efforts on top 20% performers and critical roles. A 1% improvement in retention saves 3-5x annual salary in replacement costs.',
      es: 'Enfoca esfuerzos de retención en el 20% superior de empleados de alto rendimiento y roles críticos. Una mejora del 1% en retención ahorra 3-5x salario anual en costos de reemplazo.'
    },
    tacticalTip: {
      en: 'Implement stay interviews for top performers. Create succession plans for critical roles. Monitor retention by manager and department.',
      es: 'Implementa entrevistas de permanencia para empleados de alto rendimiento. Crea planes de sucesión para roles críticos. Monitorea retención por gerente y departamento.'
    },
    schemaTrace: 'hcm.retention.stay_interviews.top_performer_priority = true',
    visualCue: {
      type: 'highlight',
      color: '#84cc16'
    }
  },

  'chro-hcm-cultural_intelligence_index': {
    metricContext: {
      en: 'Cultural Intelligence Index measures your organization\'s ability to work effectively across cultural boundaries—essential for Latino market expansion.',
      es: 'Índice de inteligencia cultural mide la capacidad de tu organización para trabajar efectivamente a través de fronteras culturales—esencial para expansión al mercado Latino.'
    },
    strategicGuidance: {
      en: 'High cultural intelligence enables authentic market penetration and cross-border talent acquisition. This is your competitive moat in diverse markets.',
      es: 'Alta inteligencia cultural permite penetración auténtica de mercado y adquisición de talento transfronterizo. Este es tu foso competitivo en mercados diversos.'
    },
    tacticalTip: {
      en: 'Implement bilingual leadership development and cultural competency training. Measure with cross-cultural team effectiveness scores.',
      es: 'Implementa desarrollo de liderazgo bilingüe y entrenamiento de competencia cultural. Mide con puntuaciones de efectividad de equipos multiculturales.'
    },
    schemaTrace: 'hcm.cultural_intelligence.bilingual_leadership.competency_tracking = true',
    visualCue: {
      type: 'glow',
      color: '#f97316'
    }
  },

  // COO + ERP Overlays
  'coo-erp-operational_efficiency_ratio': {
    metricContext: {
      en: 'Operational Efficiency Ratio measures output per unit of input across your operations—the core metric for scalable growth.',
      es: 'Relación de eficiencia operacional mide producción por unidad de insumo a través de tus operaciones—la métrica central para crecimiento escalable.'
    },
    strategicGuidance: {
      en: 'This metric determines your ability to scale profitably. Focus on process automation and resource optimization to improve ratios.',
      es: 'Esta métrica determina tu capacidad para escalar rentablemente. Enfócate en automatización de procesos y optimización de recursos para mejorar las relaciones.'
    },
    tacticalTip: {
      en: 'Benchmark against industry standards. Implement continuous improvement cycles with monthly efficiency reviews and bottleneck identification.',
      es: 'Establece puntos de referencia contra estándares de la industria. Implementa ciclos de mejora continua con revisiones mensuales de eficiencia e identificación de cuellos de botella.'
    },
    schemaTrace: 'erp.operational_efficiency.continuous_improvement.monthly_reviews = true',
    visualCue: {
      type: 'pulse',
      color: '#22c55e'
    },
    voiceoverScript: {
      en: 'As COO, operational efficiency is your foundation for scalable growth. Focus on automation and continuous process improvement.',
      es: 'Como COO, la eficiencia operacional es tu fundación para crecimiento escalable. Enfócate en automatización y mejora continua de procesos.'
    }
  },

  'coo-erp-supply_chain_resilience': {
    metricContext: {
      en: 'Supply Chain Resilience measures your ability to maintain operations during disruptions—critical for business continuity and customer satisfaction.',
      es: 'Resistencia de cadena de suministro mide tu capacidad para mantener operaciones durante interrupciones—crítico para continuidad de negocio y satisfacción del cliente.'
    },
    strategicGuidance: {
      en: 'Build redundancy in critical suppliers and maintain strategic inventory buffers. This metric prevents revenue disruption during market volatility.',
      es: 'Construye redundancia en proveedores críticos y mantén reservas estratégicas de inventario. Esta métrica previene interrupción de ingresos durante volatilidad de mercado.'
    },
    tacticalTip: {
      en: 'Diversify supplier base with 70/20/10 rule: 70% primary, 20% secondary, 10% strategic backup. Monitor supplier financial health quarterly.',
      es: 'Diversifica base de proveedores con regla 70/20/10: 70% primario, 20% secundario, 10% respaldo estratégico. Monitorea salud financiera de proveedores trimestralmente.'
    },
    schemaTrace: 'erp.supply_chain.supplier_diversification.rule_70_20_10 = true',
    visualCue: {
      type: 'highlight',
      color: '#6366f1'
    }
  },

  'coo-crm-customer_satisfaction_nps': {
    metricContext: {
      en: 'Net Promoter Score measures customer loyalty and likelihood to recommend—a leading indicator of revenue growth and market expansion.',
      es: 'Puntuación neta de promotor mide lealtad del cliente y probabilidad de recomendar—un indicador líder de crecimiento de ingresos y expansión de mercado.'
    },
    strategicGuidance: {
      en: 'NPS above 50 indicates strong customer advocacy. Use this to guide product development and identify expansion opportunities through referrals.',
      es: 'NPS arriba de 50 indica fuerte promoción del cliente. Usa esto para guiar desarrollo de productos e identificar oportunidades de expansión a través de referencias.'
    },
    tacticalTip: {
      en: 'Survey post-purchase and quarterly. Segment NPS by customer type and product line. Focus on converting passives (7-8) to promoters (9-10).',
      es: 'Encuesta post-compra y trimestralmente. Segmenta NPS por tipo de cliente y línea de producto. Enfócate en convertir pasivos (7-8) a promotores (9-10).'
    },
    schemaTrace: 'crm.nps.segmentation.customer_type_product_line = true',
    visualCue: {
      type: 'glow',
      color: '#ec4899'
    }
  },

  // CEO + HCM Strategic Overlays
  'ceo-hcm-leadership_pipeline_strength': {
    metricContext: {
      en: 'Leadership Pipeline Strength measures your organization\'s readiness for growth through internal leadership development and succession planning.',
      es: 'Fortaleza del pipeline de liderazgo mide la preparación de tu organización para el crecimiento a través del desarrollo interno de liderazgo y planificación de sucesión.'
    },
    strategicGuidance: {
      en: 'Strong leadership pipelines enable rapid scaling without external hiring delays. This metric predicts your ability to execute ambitious growth plans.',
      es: 'Pipelines fuertes de liderazgo permiten escalamiento rápido sin demoras de contratación externa. Esta métrica predice tu capacidad para ejecutar planes ambiciosos de crecimiento.'
    },
    tacticalTip: {
      en: 'Identify high-potential employees early. Create 18-month leadership development tracks with mentorship and cross-functional exposure.',
      es: 'Identifica empleados de alto potencial temprano. Crea pistas de desarrollo de liderazgo de 18 meses con mentoría y exposición multifuncional.'
    },
    schemaTrace: 'hcm.leadership_pipeline.development_tracks.duration_months = 18',
    visualCue: {
      type: 'pulse',
      color: '#8b5cf6'
    }
  },

  // CFO + ERP Strategic Overlays
  'cfo-erp-working_capital_optimization': {
    metricContext: {
      en: 'Working Capital Optimization measures how efficiently you manage cash conversion cycles—directly impacting cash flow and growth capability.',
      es: 'Optimización de capital de trabajo mide qué tan eficientemente manejas ciclos de conversión de efectivo—impactando directamente flujo de efectivo y capacidad de crecimiento.'
    },
    strategicGuidance: {
      en: 'Optimize inventory, payables, and receivables to free up cash for strategic investments. Every day reduced in cash conversion cycle improves liquidity.',
      es: 'Optimiza inventario, cuentas por pagar y por cobrar para liberar efectivo para inversiones estratégicas. Cada día reducido en ciclo de conversión de efectivo mejora liquidez.'
    },
    tacticalTip: {
      en: 'Target 30-day reduction in cash conversion cycle annually. Negotiate extended payment terms with suppliers while accelerating customer collections.',
      es: 'Apunta a reducción de 30 días en ciclo de conversión de efectivo anualmente. Negocia términos de pago extendidos con proveedores mientras aceleras cobranzas de clientes.'
    },
    schemaTrace: 'erp.working_capital.cash_conversion_cycle.annual_reduction_target = 30',
    visualCue: {
      type: 'highlight',
      color: '#10b981'
    }
  },

  'cfo-erp-accounts_receivable_velocity': {
    metricContext: {
      en: 'Accounts Receivable Velocity measures how quickly you convert sales into cash—critical for maintaining healthy cash flow in growing companies.',
      es: 'Velocidad de cuentas por cobrar mide qué tan rápido conviertes ventas en efectivo—crítico para mantener flujo de efectivo saludable en empresas en crecimiento.'
    },
    strategicGuidance: {
      en: 'Fast A/R conversion enables aggressive growth investment without external funding. Target 30-day average collection period for optimal cash velocity.',
      es: 'Conversión rápida de cuentas por cobrar permite inversión agresiva en crecimiento sin financiamiento externo. Apunta a período promedio de cobranza de 30 días para velocidad de efectivo óptima.'
    },
    tacticalTip: {
      en: 'Implement automated invoicing, payment reminders, and early payment discounts. Monitor DSO weekly and escalate accounts over 45 days.',
      es: 'Implementa facturación automatizada, recordatorios de pago y descuentos por pago anticipado. Monitorea DSO semanalmente y escala cuentas sobre 45 días.'
    },
    schemaTrace: 'erp.accounts_receivable.collection_velocity.target_dso = 30',
    visualCue: {
      type: 'pulse',
      color: '#06b6d4'
    }
  },

  'cfo-erp-cost_per_acquisition_roi': {
    metricContext: {
      en: 'Cost Per Acquisition ROI measures the financial return on customer acquisition investments—essential for profitable scaling.',
      es: 'ROI de costo por adquisición mide el retorno financiero en inversiones de adquisición de clientes—esencial para escalamiento rentable.'
    },
    strategicGuidance: {
      en: 'Optimize CAC across all channels to maximize customer lifetime value. A 3:1 LTV:CAC ratio indicates healthy unit economics for growth.',
      es: 'Optimiza CAC en todos los canales para maximizar valor de por vida del cliente. Una relación LTV:CAC de 3:1 indica economías unitarias saludables para crecimiento.'
    },
    tacticalTip: {
      en: 'Track CAC by channel, segment customers by value, and focus spend on highest-converting sources. Calculate payback period monthly.',
      es: 'Rastrea CAC por canal, segmenta clientes por valor y enfoca gasto en fuentes de mayor conversión. Calcula período de recuperación mensualmente.'
    },
    schemaTrace: 'erp.customer_acquisition.cac_roi.ltv_ratio_target = 3.0',
    visualCue: {
      type: 'glow',
      color: '#f59e0b'
    }
  },

  'cfo-erp-inventory_turnover_optimization': {
    metricContext: {
      en: 'Inventory Turnover Optimization measures how efficiently you convert inventory into sales—critical for cash flow and profitability.',
      es: 'Optimización de rotación de inventario mide qué tan eficientemente conviertes inventario en ventas—crítico para flujo de efectivo y rentabilidad.'
    },
    strategicGuidance: {
      en: 'Higher turnover reduces carrying costs and frees capital for growth. Target 6-12 turns annually depending on industry and business model.',
      es: 'Mayor rotación reduce costos de mantenimiento y libera capital para crecimiento. Apunta a 6-12 rotaciones anuales dependiendo de industria y modelo de negocio.'
    },
    tacticalTip: {
      en: 'Implement just-in-time ordering, demand forecasting, and ABC analysis. Monitor slow-moving inventory weekly and implement clearance strategies.',
      es: 'Implementa pedidos justo a tiempo, pronóstico de demanda y análisis ABC. Monitorea inventario de movimiento lento semanalmente e implementa estrategias de liquidación.'
    },
    schemaTrace: 'erp.inventory.turnover_optimization.annual_turns_target = 8',
    visualCue: {
      type: 'highlight',
      color: '#8b5cf6'
    }
  },

  // CFO + HCM Strategic Overlays
  'cfo-hcm-employee_cost_per_revenue': {
    metricContext: {
      en: 'Employee Cost Per Revenue measures labor efficiency relative to revenue generation—key metric for operational leverage assessment.',
      es: 'Costo de empleado por ingresos mide eficiencia laboral relativa a generación de ingresos—métrica clave para evaluación de apalancamiento operacional.'
    },
    strategicGuidance: {
      en: 'Optimize this ratio to achieve scalable growth. Target decreasing ratio over time as revenue grows faster than headcount through automation and efficiency.',
      es: 'Optimiza esta relación para lograr crecimiento escalable. Apunta a relación decreciente con el tiempo mientras ingresos crecen más rápido que personal a través de automatización y eficiencia.'
    },
    tacticalTip: {
      en: 'Benchmark against industry standards. For services: 40-60%, SaaS: 30-50%, Manufacturing: 15-25%. Focus on high-impact roles first.',
      es: 'Establece puntos de referencia contra estándares de industria. Para servicios: 40-60%, SaaS: 30-50%, Manufactura: 15-25%. Enfócate en roles de alto impacto primero.'
    },
    schemaTrace: 'hcm.employee_costs.revenue_ratio.industry_benchmark = true',
    visualCue: {
      type: 'pulse',
      color: '#22c55e'
    }
  },

  'cfo-hcm-talent_acquisition_roi': {
    metricContext: {
      en: 'Talent Acquisition ROI measures the financial return on hiring investments—critical for building efficient, profitable teams.',
      es: 'ROI de adquisición de talento mide el retorno financiero en inversiones de contratación—crítico para construir equipos eficientes y rentables.'
    },
    strategicGuidance: {
      en: 'Track cost-per-hire, time-to-productivity, and first-year value creation. High-quality hires should generate 3-5x their total cost in year one.',
      es: 'Rastrea costo por contratación, tiempo a productividad y creación de valor del primer año. Contrataciones de alta calidad deberían generar 3-5x su costo total en el primer año.'
    },
    tacticalTip: {
      en: 'Implement structured onboarding, 90-day check-ins, and performance tracking. Measure revenue impact of new hires by quarter.',
      es: 'Implementa incorporación estructurada, revisiones de 90 días y seguimiento de desempeño. Mide impacto de ingresos de nuevas contrataciones por trimestre.'
    },
    schemaTrace: 'hcm.talent_acquisition.roi_tracking.first_year_multiplier = 4.0',
    visualCue: {
      type: 'glow',
      color: '#3b82f6'
    }
  },

  'cfo-hcm-compensation_efficiency_ratio': {
    metricContext: {
      en: 'Compensation Efficiency Ratio measures total compensation cost relative to productivity output—essential for competitive positioning.',
      es: 'Relación de eficiencia de compensación mide costo total de compensación relativo a producción de productividad—esencial para posicionamiento competitivo.'
    },
    strategicGuidance: {
      en: 'Balance competitive compensation with profitability. Use equity and performance incentives to align costs with company success.',
      es: 'Balancea compensación competitiva con rentabilidad. Usa patrimonio e incentivos de desempeño para alinear costos con éxito de la empresa.'
    },
    tacticalTip: {
      en: 'Conduct annual compensation benchmarking, implement pay-for-performance models, and use equity to reduce cash compensation burden.',
      es: 'Conduce benchmarking anual de compensación, implementa modelos de pago por desempeño y usa patrimonio para reducir carga de compensación en efectivo.'
    },
    schemaTrace: 'hcm.compensation.efficiency_ratio.benchmark_tracking = true',
    visualCue: {
      type: 'highlight',
      color: '#ef4444'
    }
  },

  // CFO + CRM Strategic Overlays  
  'cfo-crm-customer_lifetime_value': {
    metricContext: {
      en: 'Customer Lifetime Value measures total revenue potential per customer—fundamental for pricing, acquisition, and retention strategy.',
      es: 'Valor de por vida del cliente mide potencial de ingresos totales por cliente—fundamental para estrategia de precios, adquisición y retención.'
    },
    strategicGuidance: {
      en: 'Maximize CLV through upselling, cross-selling, and retention. A 10% increase in retention can increase CLV by 30-90%.',
      es: 'Maximiza CLV a través de venta adicional, venta cruzada y retención. Un aumento del 10% en retención puede incrementar CLV en 30-90%.'
    },
    tacticalTip: {
      en: 'Segment customers by value tier, implement loyalty programs, and track expansion revenue. Focus retention efforts on high-CLV segments.',
      es: 'Segmenta clientes por nivel de valor, implementa programas de lealtad y rastrea ingresos de expansión. Enfoca esfuerzos de retención en segmentos de alto CLV.'
    },
    schemaTrace: 'crm.customer_lifetime_value.retention_impact_tracking = true',
    visualCue: {
      type: 'pulse',
      color: '#10b981'
    }
  },

  'cfo-crm-revenue_predictability_score': {
    metricContext: {
      en: 'Revenue Predictability Score measures consistency and forecastability of revenue streams—critical for financial planning and investor confidence.',
      es: 'Puntuación de predictibilidad de ingresos mide consistencia y capacidad de pronóstico de flujos de ingresos—crítico para planificación financiera y confianza del inversionista.'
    },
    strategicGuidance: {
      en: 'Build recurring revenue models and long-term contracts to increase predictability. Target 70%+ recurring revenue for venture-backed companies.',
      es: 'Construye modelos de ingresos recurrentes y contratos a largo plazo para aumentar predictibilidad. Apunta a 70%+ ingresos recurrentes para empresas respaldadas por capital de riesgo.'
    },
    tacticalTip: {
      en: 'Implement subscription models, annual contracts, and renewal tracking. Use cohort analysis to predict future revenue patterns.',
      es: 'Implementa modelos de suscripción, contratos anuales y seguimiento de renovaciones. Usa análisis de cohortes para predecir patrones futuros de ingresos.'
    },
    schemaTrace: 'crm.revenue_predictability.recurring_revenue_target = 0.70',
    visualCue: {
      type: 'glow',
      color: '#6366f1'
    }
  },

  // CEO + HCM Strategic Overlays
  'ceo-hcm-organizational_health_index': {
    metricContext: {
      en: 'Organizational Health Index measures overall company culture, engagement, and operational effectiveness—leading indicator of long-term success.',
      es: 'Índice de salud organizacional mide cultura general de la empresa, compromiso y efectividad operacional—indicador líder de éxito a largo plazo.'
    },
    strategicGuidance: {
      en: 'Healthy organizations outperform peers by 2.3x revenue growth and 1.9x profitability. Focus on leadership quality, clear direction, and employee empowerment.',
      es: 'Organizaciones saludables superan a pares por 2.3x crecimiento de ingresos y 1.9x rentabilidad. Enfócate en calidad de liderazgo, dirección clara y empoderamiento de empleados.'
    },
    tacticalTip: {
      en: 'Conduct quarterly pulse surveys, implement 360-degree feedback, and create clear career progression paths. Address toxic behaviors immediately.',
      es: 'Conduce encuestas de pulso trimestrales, implementa retroalimentación de 360 grados y crea trayectorias claras de progresión profesional. Aborda comportamientos tóxicos inmediatamente.'
    },
    schemaTrace: 'hcm.organizational_health.quarterly_assessment.intervention_triggers = true',
    visualCue: {
      type: 'pulse',
      color: '#8b5cf6'
    },
    voiceoverScript: {
      en: 'As CEO, organizational health is your foundation for sustainable growth. Healthy cultures drive innovation, retention, and performance at scale.',
      es: 'Como CEO, la salud organizacional es tu fundación para crecimiento sostenible. Culturas saludables impulsan innovación, retención y desempeño a escala.'
    }
  },

  'ceo-hcm-succession_planning_readiness': {
    metricContext: {
      en: 'Succession Planning Readiness measures preparedness for leadership transitions—critical for business continuity and investor confidence.',
      es: 'Preparación de planificación de sucesión mide preparación para transiciones de liderazgo—crítico para continuidad de negocio y confianza del inversionista.'
    },
    strategicGuidance: {
      en: 'Develop internal leaders for 80% of key positions. Strong succession planning increases company valuation and reduces transition risk.',
      es: 'Desarrolla líderes internos para 80% de posiciones clave. Planificación fuerte de sucesión aumenta valuación de empresa y reduce riesgo de transición.'
    },
    tacticalTip: {
      en: 'Create leadership development programs, cross-train key personnel, and maintain updated succession plans for all critical roles.',
      es: 'Crea programas de desarrollo de liderazgo, entrena personal clave de manera cruzada y mantén planes de sucesión actualizados para todos los roles críticos.'
    },
    schemaTrace: 'hcm.succession_planning.internal_readiness_target = 0.80',
    visualCue: {
      type: 'highlight',
      color: '#f59e0b'
    }
  },

  'ceo-hcm-innovation_capacity_index': {
    metricContext: {
      en: 'Innovation Capacity Index measures organizational ability to generate and implement new ideas—key driver of competitive advantage.',
      es: 'Índice de capacidad de innovación mide habilidad organizacional para generar e implementar nuevas ideas—impulsor clave de ventaja competitiva.'
    },
    strategicGuidance: {
      en: 'Foster innovation through psychological safety, dedicated innovation time, and cross-functional collaboration. Innovation drives 30-50% of revenue in leading companies.',
      es: 'Fomenta innovación a través de seguridad psicológica, tiempo dedicado a innovación y colaboración multifuncional. Innovación impulsa 30-50% de ingresos en empresas líderes.'
    },
    tacticalTip: {
      en: 'Implement idea management systems, 20% innovation time, and rapid prototyping processes. Celebrate both successes and intelligent failures.',
      es: 'Implementa sistemas de gestión de ideas, 20% tiempo de innovación y procesos de prototipado rápido. Celebra tanto éxitos como fallas inteligentes.'
    },
    schemaTrace: 'hcm.innovation_capacity.innovation_time_allocation = 0.20',
    visualCue: {
      type: 'glow',
      color: '#06b6d4'
    }
  },

  // CEO + CRM Strategic Overlays
  'ceo-crm-market_share_velocity': {
    metricContext: {
      en: 'Market Share Velocity measures speed of competitive positioning improvement—critical for establishing market leadership.',
      es: 'Velocidad de cuota de mercado mide velocidad de mejora de posicionamiento competitivo—crítico para establecer liderazgo de mercado.'
    },
    strategicGuidance: {
      en: 'Rapid market share gains in early stages create defensive moats. Target 20%+ annual market share growth in emerging markets.',
      es: 'Ganancias rápidas de cuota de mercado en etapas tempranas crean fosos defensivos. Apunta a 20%+ crecimiento anual de cuota de mercado en mercados emergentes.'
    },
    tacticalTip: {
      en: 'Track competitive win rates, customer switching patterns, and brand awareness metrics. Invest heavily in differentiation and customer experience.',
      es: 'Rastrea tasas de victoria competitiva, patrones de cambio de clientes y métricas de conciencia de marca. Invierte fuertemente en diferenciación y experiencia del cliente.'
    },
    schemaTrace: 'crm.market_share.velocity_tracking.annual_growth_target = 0.20',
    visualCue: {
      type: 'pulse',
      color: '#ef4444'
    }
  },

  'ceo-crm-customer_advocacy_score': {
    metricContext: {
      en: 'Customer Advocacy Score measures customer willingness to actively promote your company—strongest indicator of product-market fit.',
      es: 'Puntuación de promoción del cliente mide disposición del cliente para promover activamente tu empresa—indicador más fuerte de ajuste producto-mercado.'
    },
    strategicGuidance: {
      en: 'Customer advocates drive 50%+ of new business through referrals and testimonials. Focus on creating remarkable experiences that customers want to share.',
      es: 'Promotores de clientes impulsan 50%+ de nuevos negocios a través de referencias y testimonios. Enfócate en crear experiencias notables que clientes quieran compartir.'
    },
    tacticalTip: {
      en: 'Implement advocacy programs, case study development, and referral incentives. Track Net Promoter Score and follow up on every interaction.',
      es: 'Implementa programas de promoción, desarrollo de casos de estudio e incentivos de referencia. Rastrea Net Promoter Score y da seguimiento a cada interacción.'
    },
    schemaTrace: 'crm.customer_advocacy.nps_tracking.advocacy_threshold = 9',
    visualCue: {
      type: 'glow',
      color: '#22c55e'
    }
  },

  // CEO + ERP Strategic Overlays
  'ceo-erp-business_model_scalability': {
    metricContext: {
      en: 'Business Model Scalability measures ability to grow revenue without proportional cost increases—fundamental for venture-scale outcomes.',
      es: 'Escalabilidad del modelo de negocio mide capacidad para crecer ingresos sin aumentos proporcionales de costos—fundamental para resultados a escala de capital de riesgo.'
    },
    strategicGuidance: {
      en: 'Optimize for increasing gross margins and operational leverage. Target 80%+ gross margins for software, 40-60% for services.',
      es: 'Optimiza para aumentar márgenes brutos y apalancamiento operacional. Apunta a 80%+ márgenes brutos para software, 40-60% para servicios.'
    },
    tacticalTip: {
      en: 'Automate core processes, invest in technology infrastructure, and build repeatable delivery models. Track unit economics religiously.',
      es: 'Automatiza procesos centrales, invierte en infraestructura tecnológica y construye modelos de entrega repetibles. Rastrea economías unitarias religiosamente.'
    },
    schemaTrace: 'erp.business_model.scalability_metrics.gross_margin_target = 0.80',
    visualCue: {
      type: 'highlight',
      color: '#8b5cf6'
    }
  },

  // CHRO + ERP Strategic Overlays
  'chro-erp-workforce_productivity_index': {
    metricContext: {
      en: 'Workforce Productivity Index measures output per employee relative to industry benchmarks—key driver of competitive advantage.',
      es: 'Índice de productividad de fuerza laboral mide producción por empleado relativa a benchmarks de industria—impulsor clave de ventaja competitiva.'
    },
    strategicGuidance: {
      en: 'High productivity enables premium pricing and market leadership. Target top quartile performance through technology, training, and culture optimization.',
      es: 'Alta productividad permite precios premium y liderazgo de mercado. Apunta a desempeño de cuartil superior a través de tecnología, entrenamiento y optimización cultural.'
    },
    tacticalTip: {
      en: 'Implement productivity tracking, skills development programs, and performance management. Benchmark against top performers quarterly.',
      es: 'Implementa seguimiento de productividad, programas de desarrollo de habilidades y gestión de desempeño. Establece puntos de referencia contra mejores ejecutores trimestralmente.'
    },
    schemaTrace: 'erp.workforce_productivity.benchmark_tracking.quartile_target = 1',
    visualCue: {
      type: 'pulse',
      color: '#22c55e'
    }
  },

  'chro-erp-human_capital_roi': {
    metricContext: {
      en: 'Human Capital ROI measures financial return on all people investments—training, benefits, compensation, and development programs.',
      es: 'ROI de capital humano mide retorno financiero en todas las inversiones en personas—entrenamiento, beneficios, compensación y programas de desarrollo.'
    },
    strategicGuidance: {
      en: 'Strategic human capital investments should generate 3-5x returns through increased productivity, retention, and innovation. Track and optimize continuously.',
      es: 'Inversiones estratégicas de capital humano deberían generar retornos de 3-5x a través de mayor productividad, retención e innovación. Rastrea y optimiza continuamente.'
    },
    tacticalTip: {
      en: 'Measure training impact on performance, calculate retention savings, and track promotion rates. Link people investments to business outcomes.',
      es: 'Mide impacto de entrenamiento en desempeño, calcula ahorros de retención y rastrea tasas de promoción. Vincula inversiones en personas con resultados de negocio.'
    },
    schemaTrace: 'erp.human_capital_roi.investment_tracking.target_multiplier = 4.0',
    visualCue: {
      type: 'glow',
      color: '#f59e0b'
    }
  },

  // CHRO + EPM Strategic Overlays
  'chro-epm-talent_pipeline_velocity': {
    metricContext: {
      en: 'Talent Pipeline Velocity measures speed of developing internal candidates for key roles—critical for rapid scaling.',
      es: 'Velocidad de pipeline de talento mide velocidad de desarrollo de candidatos internos para roles clave—crítico para escalamiento rápido.'
    },
    strategicGuidance: {
      en: 'Fast talent development enables rapid expansion without external hiring delays. Target 18-month development cycles for leadership roles.',
      es: 'Desarrollo rápido de talento permite expansión rápida sin demoras de contratación externa. Apunta a ciclos de desarrollo de 18 meses para roles de liderazgo.'
    },
    tacticalTip: {
      en: 'Create structured development paths, mentoring programs, and stretch assignments. Track progression rates and skill gap closure.',
      es: 'Crea trayectorias de desarrollo estructuradas, programas de mentoría y asignaciones desafiantes. Rastrea tasas de progresión y cierre de brechas de habilidades.'
    },
    schemaTrace: 'epm.talent_pipeline.development_velocity.leadership_cycle_months = 18',
    visualCue: {
      type: 'pulse',
      color: '#3b82f6'
    }
  },

  'chro-epm-diversity_innovation_correlation': {
    metricContext: {
      en: 'Diversity Innovation Correlation tracks relationship between team diversity and innovation output—proven driver of competitive advantage.',
      es: 'Correlación diversidad-innovación rastrea relación entre diversidad de equipo y producción de innovación—impulsor probado de ventaja competitiva.'
    },
    strategicGuidance: {
      en: 'Diverse teams generate 70% more innovative solutions and achieve 2.3x better financial performance. Particularly critical for Latino market expansion.',
      es: 'Equipos diversos generan 70% más soluciones innovadoras y logran 2.3x mejor desempeño financiero. Particularmente crítico para expansión al mercado Latino.'
    },
    tacticalTip: {
      en: 'Track diversity metrics across all levels, measure innovation pipeline, and correlate team composition with breakthrough ideas.',
      es: 'Rastrea métricas de diversidad en todos los niveles, mide pipeline de innovación y correlaciona composición de equipo con ideas revolucionarias.'
    },
    schemaTrace: 'epm.diversity_innovation.correlation_tracking.innovation_multiplier = 1.7',
    visualCue: {
      type: 'highlight',
      color: '#06b6d4'
    }
  },

  // CHRO + CRM Strategic Overlays
  'chro-crm-employee_customer_advocacy_link': {
    metricContext: {
      en: 'Employee Customer Advocacy Link measures correlation between employee engagement and customer satisfaction—key for sustainable growth.',
      es: 'Vínculo promoción empleado-cliente mide correlación entre compromiso de empleado y satisfacción del cliente—clave para crecimiento sostenible.'
    },
    strategicGuidance: {
      en: 'Engaged employees deliver 12% better customer outcomes and 18% higher productivity. This link is especially strong in service-based businesses.',
      es: 'Empleados comprometidos entregan 12% mejores resultados para clientes y 18% mayor productividad. Este vínculo es especialmente fuerte en negocios basados en servicios.'
    },
    tacticalTip: {
      en: 'Correlate employee NPS with customer NPS, implement customer-facing employee recognition, and measure service quality by engagement level.',
      es: 'Correlaciona NPS de empleado con NPS de cliente, implementa reconocimiento de empleado orientado al cliente y mide calidad de servicio por nivel de compromiso.'
    },
    schemaTrace: 'crm.employee_advocacy_link.correlation_tracking.engagement_impact = 0.18',
    visualCue: {
      type: 'glow',
      color: '#84cc16'
    }
  },

  // COO + HCM Strategic Overlays
  'coo-hcm-operational_workforce_agility': {
    metricContext: {
      en: 'Operational Workforce Agility measures ability to rapidly reallocate human resources based on changing business needs—critical for market responsiveness.',
      es: 'Agilidad operacional de fuerza laboral mide capacidad para reasignar rápidamente recursos humanos basados en necesidades cambiantes de negocio—crítico para capacidad de respuesta de mercado.'
    },
    strategicGuidance: {
      en: 'Agile workforces adapt 3x faster to market changes and achieve 25% higher productivity. Build cross-functional capabilities and flexible team structures.',
      es: 'Fuerzas laborales ágiles se adaptan 3x más rápido a cambios de mercado y logran 25% mayor productividad. Construye capacidades multifuncionales y estructuras de equipo flexibles.'
    },
    tacticalTip: {
      en: 'Cross-train employees, implement flexible work arrangements, and create rapid response teams for critical projects.',
      es: 'Entrena empleados de manera cruzada, implementa arreglos de trabajo flexibles y crea equipos de respuesta rápida para proyectos críticos.'
    },
    schemaTrace: 'hcm.workforce_agility.cross_training_coverage.target_percentage = 0.60',
    visualCue: {
      type: 'pulse',
      color: '#f59e0b'
    }
  },

  'coo-hcm-performance_execution_velocity': {
    metricContext: {
      en: 'Performance Execution Velocity measures speed from goal setting to achievement—key indicator of organizational execution capability.',
      es: 'Velocidad de ejecución de desempeño mide velocidad desde establecimiento de metas hasta logro—indicador clave de capacidad de ejecución organizacional.'
    },
    strategicGuidance: {
      en: 'Fast execution creates competitive advantages and enables rapid market capture. Target 90-day goal cycles with weekly progress tracking.',
      es: 'Ejecución rápida crea ventajas competitivas y permite captura rápida de mercado. Apunta a ciclos de metas de 90 días con seguimiento semanal de progreso.'
    },
    tacticalTip: {
      en: 'Implement OKR methodology, weekly check-ins, and obstacle removal processes. Celebrate quick wins and learn from delays.',
      es: 'Implementa metodología OKR, revisiones semanales y procesos de remoción de obstáculos. Celebra victorias rápidas y aprende de demoras.'
    },
    schemaTrace: 'hcm.performance_execution.goal_cycle_days.target_duration = 90',
    visualCue: {
      type: 'highlight',
      color: '#22c55e'
    }
  },

  // COO + EPM Strategic Overlays
  'coo-epm-process_optimization_roi': {
    metricContext: {
      en: 'Process Optimization ROI measures financial return on operational improvements—essential for building scalable, efficient operations.',
      es: 'ROI de optimización de procesos mide retorno financiero en mejoras operacionales—esencial para construir operaciones escalables y eficientes.'
    },
    strategicGuidance: {
      en: 'Process improvements should generate 5-10x returns through cost reduction, quality improvement, and capacity increases. Focus on high-impact bottlenecks first.',
      es: 'Mejoras de procesos deberían generar retornos de 5-10x a través de reducción de costos, mejora de calidad y aumentos de capacidad. Enfócate en cuellos de botella de alto impacto primero.'
    },
    tacticalTip: {
      en: 'Map value streams, identify waste, and implement lean methodologies. Measure cycle time, defect rates, and throughput improvements.',
      es: 'Mapea flujos de valor, identifica desperdicios e implementa metodologías lean. Mide tiempo de ciclo, tasas de defectos y mejoras de rendimiento.'
    },
    schemaTrace: 'epm.process_optimization.roi_tracking.target_multiplier = 7.0',
    visualCue: {
      type: 'glow',
      color: '#3b82f6'
    }
  },

  'coo-epm-capacity_utilization_optimization': {
    metricContext: {
      en: 'Capacity Utilization Optimization measures efficiency of resource deployment across all operational areas—key for profitable scaling.',
      es: 'Optimización de utilización de capacidad mide eficiencia de despliegue de recursos en todas las áreas operacionales—clave para escalamiento rentable.'
    },
    strategicGuidance: {
      en: 'Optimal utilization balances efficiency with flexibility. Target 80-85% utilization for most resources, maintaining buffer for growth and emergencies.',
      es: 'Utilización óptima balancea eficiencia con flexibilidad. Apunta a 80-85% utilización para la mayoría de recursos, manteniendo reserva para crecimiento y emergencias.'
    },
    tacticalTip: {
      en: 'Implement capacity planning, demand forecasting, and resource scheduling systems. Monitor utilization weekly and adjust proactively.',
      es: 'Implementa planificación de capacidad, pronóstico de demanda y sistemas de programación de recursos. Monitorea utilización semanalmente y ajusta proactivamente.'
    },
    schemaTrace: 'epm.capacity_utilization.target_percentage.optimal_range = [0.80, 0.85]',
    visualCue: {
      type: 'pulse',
      color: '#8b5cf6'
    }
  },

  // Cross-Functional Strategic Overlays
  'cross-all-cultural_intelligence_multiplier': {
    metricContext: {
      en: 'Cultural Intelligence Multiplier measures organizational ability to operate effectively across cultural boundaries—OVERWATCH³\'s strategic differentiator for Latino market expansion.',
      es: 'Multiplicador de inteligencia cultural mide capacidad organizacional para operar efectivamente a través de fronteras culturales—diferenciador estratégico de OVERWATCH³ para expansión al mercado Latino.'
    },
    strategicGuidance: {
      en: 'High cultural intelligence enables authentic market penetration, better talent acquisition, and deeper customer relationships in diverse markets.',
      es: 'Alta inteligencia cultural permite penetración auténtica de mercado, mejor adquisición de talento y relaciones más profundas con clientes en mercados diversos.'
    },
    tacticalTip: {
      en: 'Implement bilingual communications, cultural competency training, and diverse leadership development. Measure cross-cultural team effectiveness.',
      es: 'Implementa comunicaciones bilingües, entrenamiento de competencia cultural y desarrollo de liderazgo diverso. Mide efectividad de equipos multiculturales.'
    },
    schemaTrace: 'cultural_intelligence.cross_functional.latino_market_readiness = true',
    visualCue: {
      type: 'glow',
      color: '#f97316'
    },
    voiceoverScript: {
      en: 'Cultural intelligence is OVERWATCH³\'s secret weapon for Latino market dominance. This capability multiplies every other business function.',
      es: 'La inteligencia cultural es el arma secreta de OVERWATCH³ para dominancia del mercado Latino. Esta capacidad multiplica cada otra función empresarial.'
    }
  },

  'cross-all-digital_transformation_velocity': {
    metricContext: {
      en: 'Digital Transformation Velocity measures speed of technology adoption and process digitization—critical for competitive positioning.',
      es: 'Velocidad de transformación digital mide velocidad de adopción de tecnología y digitalización de procesos—crítico para posicionamiento competitivo.'
    },
    strategicGuidance: {
      en: 'Fast digital adoption creates sustainable competitive advantages and enables rapid scaling. Target 90%+ digital process coverage within 18 months.',
      es: 'Adopción digital rápida crea ventajas competitivas sostenibles y permite escalamiento rápido. Apunta a 90%+ cobertura de procesos digitales dentro de 18 meses.'
    },
    tacticalTip: {
      en: 'Prioritize high-impact automation, implement change management, and measure adoption rates. Focus on user experience and training.',
      es: 'Prioriza automatización de alto impacto, implementa gestión de cambio y mide tasas de adopción. Enfócate en experiencia del usuario y entrenamiento.'
    },
    schemaTrace: 'digital_transformation.velocity_tracking.process_coverage_target = 0.90',
    visualCue: {
      type: 'highlight',
      color: '#06b6d4'
    }
  },

  // INDUSTRY-SPECIFIC OVERLAYS

  // Healthcare Industry Overlays
  'cfo-healthcare-patient_revenue_optimization': {
    metricContext: {
      en: 'Patient Revenue Optimization measures revenue per patient episode and payer mix efficiency—critical for healthcare profitability and sustainability.',
      es: 'Optimización de ingresos por paciente mide ingresos por episodio de paciente y eficiencia de mezcla de pagadores—crítico para rentabilidad y sostenibilidad de atención médica.'
    },
    strategicGuidance: {
      en: 'Focus on high-margin procedures, optimize payer contracts, and reduce claim denials. Target 15-20% improvement in revenue per patient through better case mix.',
      es: 'Enfócate en procedimientos de alto margen, optimiza contratos de pagadores y reduce negaciones de reclamos. Apunta a mejora del 15-20% en ingresos por paciente a través de mejor mezcla de casos.'
    },
    tacticalTip: {
      en: 'Implement prior authorization automation, optimize coding accuracy, and negotiate value-based care contracts. Track denial rates weekly.',
      es: 'Implementa automatización de autorización previa, optimiza precisión de codificación y negocia contratos de atención basada en valor. Rastrea tasas de negación semanalmente.'
    },
    schemaTrace: 'healthcare.patient_revenue.optimization.target_improvement = 0.175',
    visualCue: {
      type: 'pulse',
      color: '#0ea5e9'
    }
  },

  'chro-healthcare-clinician_retention': {
    metricContext: {
      en: 'Clinician Retention measures ability to keep medical professionals—critical given nationwide shortages and high replacement costs averaging $200K+ per physician.',
      es: 'Retención de clínicos mide capacidad para mantener profesionales médicos—crítico dadas las escaseces nacionales y altos costos de reemplazo promediando $200K+ por médico.'
    },
    strategicGuidance: {
      en: 'Focus on work-life balance, professional development, and competitive compensation. Healthcare turnover costs 2-3x more than other industries.',
      es: 'Enfócate en equilibrio trabajo-vida, desarrollo profesional y compensación competitiva. Rotación en atención médica cuesta 2-3x más que otras industrias.'
    },
    tacticalTip: {
      en: 'Implement flexible scheduling, continuing education support, and burnout prevention programs. Monitor satisfaction monthly through pulse surveys.',
      es: 'Implementa horarios flexibles, apoyo de educación continua y programas de prevención de agotamiento. Monitorea satisfacción mensualmente a través de encuestas de pulso.'
    },
    schemaTrace: 'healthcare.clinician_retention.satisfaction_tracking.monthly_pulse = true',
    visualCue: {
      type: 'glow',
      color: '#22c55e'
    }
  },

  'coo-healthcare-patient_safety_metrics': {
    metricContext: {
      en: 'Patient Safety Metrics track clinical outcomes and safety events—directly impacting quality ratings, reimbursements, and liability exposure.',
      es: 'Métricas de seguridad del paciente rastrean resultados clínicos y eventos de seguridad—impactando directamente calificaciones de calidad, reembolsos y exposición a responsabilidad.'
    },
    strategicGuidance: {
      en: 'Implement zero-harm initiatives, real-time monitoring, and predictive analytics. Safety improvements directly correlate with financial performance.',
      es: 'Implementa iniciativas de cero daño, monitoreo en tiempo real y analíticas predictivas. Mejoras de seguridad se correlacionan directamente con desempeño financiero.'
    },
    tacticalTip: {
      en: 'Use electronic surveillance systems, implement rapid response teams, and track near-miss events. Focus on prevention over correction.',
      es: 'Usa sistemas de vigilancia electrónica, implementa equipos de respuesta rápida y rastrea eventos de casi falla. Enfócate en prevención sobre corrección.'
    },
    schemaTrace: 'healthcare.patient_safety.zero_harm_initiatives.prevention_focus = true',
    visualCue: {
      type: 'highlight',
      color: '#dc2626'
    }
  },

  // Fintech Industry Overlays
  'cfo-fintech-regulatory_compliance_cost': {
    metricContext: {
      en: 'Regulatory Compliance Cost measures spend on compliance infrastructure as percentage of revenue—critical for fintech scalability and risk management.',
      es: 'Costo de cumplimiento regulatorio mide gasto en infraestructura de cumplimiento como porcentaje de ingresos—crítico para escalabilidad fintech y gestión de riesgos.'
    },
    strategicGuidance: {
      en: 'Balance compliance investment with growth capital. Target 3-8% of revenue on compliance for early-stage fintech, scaling to 12-15% for mature companies.',
      es: 'Balancea inversión de cumplimiento con capital de crecimiento. Apunta a 3-8% de ingresos en cumplimiento para fintech temprano, escalando a 12-15% para empresas maduras.'
    },
    tacticalTip: {
      en: 'Automate compliance monitoring, implement continuous controls testing, and invest in regulatory technology. Track cost per compliance requirement.',
      es: 'Automatiza monitoreo de cumplimiento, implementa pruebas continuas de controles e invierte en tecnología regulatoria. Rastrea costo por requisito de cumplimiento.'
    },
    schemaTrace: 'fintech.regulatory_compliance.cost_percentage.early_stage_target = 0.055',
    visualCue: {
      type: 'pulse',
      color: '#7c3aed'
    }
  },

  'coo-fintech-transaction_fraud_rate': {
    metricContext: {
      en: 'Transaction Fraud Rate measures fraudulent activity relative to total transactions—critical for customer trust and regulatory standing in financial services.',
      es: 'Tasa de fraude de transacciones mide actividad fraudulenta relativa a transacciones totales—crítico para confianza del cliente y posición regulatoria en servicios financieros.'
    },
    strategicGuidance: {
      en: 'Implement multi-layered fraud detection using AI/ML. Target <0.1% fraud rate while maintaining low false positives to avoid customer friction.',
      es: 'Implementa detección de fraude multicapa usando AI/ML. Apunta a <0.1% tasa de fraude mientras mantienes bajos falsos positivos para evitar fricción del cliente.'
    },
    tacticalTip: {
      en: 'Use real-time transaction monitoring, behavioral analytics, and device fingerprinting. Balance security with user experience optimization.',
      es: 'Usa monitoreo de transacciones en tiempo real, analíticas de comportamiento y huellas digitales de dispositivos. Balancea seguridad con optimización de experiencia del usuario.'
    },
    schemaTrace: 'fintech.fraud_detection.target_rate.maximum_threshold = 0.001',
    visualCue: {
      type: 'glow',
      color: '#ef4444'
    }
  },

  'chro-fintech-technical_talent_density': {
    metricContext: {
      en: 'Technical Talent Density measures percentage of engineering/data science roles—critical for fintech innovation and competitive differentiation.',
      es: 'Densidad de talento técnico mide porcentaje de roles de ingeniería/ciencia de datos—crítico para innovación fintech y diferenciación competitiva.'
    },
    strategicGuidance: {
      en: 'Maintain 40-60% technical talent for early-stage fintech, scaling to 30-40% at maturity. Technical talent drives product velocity and innovation.',
      es: 'Mantén 40-60% talento técnico para fintech temprano, escalando a 30-40% en madurez. Talento técnico impulsa velocidad de producto e innovación.'
    },
    tacticalTip: {
      en: 'Invest in continuous learning, competitive compensation packages, and technical career paths. Track engineering productivity and innovation metrics.',
      es: 'Invierte en aprendizaje continuo, paquetes de compensación competitivos y trayectorias profesionales técnicas. Rastrea productividad de ingeniería y métricas de innovación.'
    },
    schemaTrace: 'fintech.technical_talent.density_target.early_stage = 0.50',
    visualCue: {
      type: 'highlight',
      color: '#0ea5e9'
    }
  },

  // E-commerce Industry Overlays
  'cfo-ecommerce-customer_acquisition_payback': {
    metricContext: {
      en: 'Customer Acquisition Payback measures time to recover CAC through customer purchases—critical for e-commerce cash flow and growth sustainability.',
      es: 'Retorno de adquisición de cliente mide tiempo para recuperar CAC a través de compras del cliente—crítico para flujo de efectivo de e-commerce y sostenibilidad de crecimiento.'
    },
    strategicGuidance: {
      en: 'Target 3-6 month payback period for healthy unit economics. Focus on increasing average order value and purchase frequency to accelerate payback.',
      es: 'Apunta a período de retorno de 3-6 meses para economías unitarias saludables. Enfócate en aumentar valor promedio de pedido y frecuencia de compra para acelerar retorno.'
    },
    tacticalTip: {
      en: 'Optimize onboarding flow, implement cross-selling strategies, and use cohort analysis to track payback by acquisition channel.',
      es: 'Optimiza flujo de incorporación, implementa estrategias de venta cruzada y usa análisis de cohortes para rastrear retorno por canal de adquisición.'
    },
    schemaTrace: 'ecommerce.cac_payback.target_months.healthy_range = [3, 6]',
    visualCue: {
      type: 'pulse',
      color: '#f59e0b'
    }
  },

  'coo-ecommerce-inventory_velocity': {
    metricContext: {
      en: 'Inventory Velocity measures how quickly products sell through—critical for cash flow, storage costs, and avoiding obsolete inventory in e-commerce.',
      es: 'Velocidad de inventario mide qué tan rápido se venden los productos—crítico para flujo de efectivo, costos de almacenamiento y evitar inventario obsoleto en e-commerce.'
    },
    strategicGuidance: {
      en: 'Optimize for 8-12 inventory turns annually. Use demand forecasting and dynamic pricing to accelerate slow-moving inventory turnover.',
      es: 'Optimiza para 8-12 rotaciones de inventario anualmente. Usa pronóstico de demanda y precios dinámicos para acelerar rotación de inventario de movimiento lento.'
    },
    tacticalTip: {
      en: 'Implement ABC analysis, use predictive analytics for demand planning, and create automated reorder points. Monitor dead stock weekly.',
      es: 'Implementa análisis ABC, usa analíticas predictivas para planificación de demanda y crea puntos de reorden automatizados. Monitorea stock muerto semanalmente.'
    },
    schemaTrace: 'ecommerce.inventory_velocity.annual_turns_target = 10',
    visualCue: {
      type: 'glow',
      color: '#8b5cf6'
    }
  },

  'chro-ecommerce-seasonal_workforce_agility': {
    metricContext: {
      en: 'Seasonal Workforce Agility measures ability to scale labor for peak periods—critical for e-commerce companies facing seasonal demand variations.',
      es: 'Agilidad de fuerza laboral estacional mide capacidad para escalar trabajo para períodos pico—crítico para empresas de e-commerce enfrentando variaciones estacionales de demanda.'
    },
    strategicGuidance: {
      en: 'Build flexible workforce models using temporary staff, contractors, and automation. Plan for 200-400% capacity increases during peak seasons.',
      es: 'Construye modelos de fuerza laboral flexibles usando personal temporal, contratistas y automatización. Planifica para aumentos de capacidad del 200-400% durante temporadas pico.'
    },
    tacticalTip: {
      en: 'Create seasonal hiring playbooks, cross-train permanent staff, and implement workforce management systems. Start planning 6 months ahead.',
      es: 'Crea manuales de contratación estacional, entrena personal permanente de manera cruzada e implementa sistemas de gestión de fuerza laboral. Comienza planificación 6 meses antes.'
    },
    schemaTrace: 'ecommerce.seasonal_workforce.capacity_multiplier.peak_season = 3.0',
    visualCue: {
      type: 'highlight',
      color: '#22c55e'
    }
  },

  // Manufacturing Industry Overlays
  'coo-manufacturing-overall_equipment_effectiveness': {
    metricContext: {
      en: 'Overall Equipment Effectiveness (OEE) measures manufacturing productivity through availability, performance, and quality—key metric for operational excellence.',
      es: 'Efectividad General del Equipo (OEE) mide productividad de manufactura a través de disponibilidad, desempeño y calidad—métrica clave para excelencia operacional.'
    },
    strategicGuidance: {
      en: 'Target 85%+ OEE for world-class manufacturing. Focus on predictive maintenance, operator training, and quality at source to optimize all three components.',
      es: 'Apunta a 85%+ OEE para manufactura de clase mundial. Enfócate en mantenimiento predictivo, entrenamiento de operadores y calidad en la fuente para optimizar los tres componentes.'
    },
    tacticalTip: {
      en: 'Implement IoT sensors, real-time monitoring dashboards, and total productive maintenance (TPM). Track OEE hourly and address losses immediately.',
      es: 'Implementa sensores IoT, tableros de monitoreo en tiempo real y mantenimiento productivo total (TPM). Rastrea OEE por hora y aborda pérdidas inmediatamente.'
    },
    schemaTrace: 'manufacturing.oee.target_percentage.world_class = 0.85',
    visualCue: {
      type: 'pulse',
      color: '#059669'
    }
  },

  'cfo-manufacturing-cost_per_unit_optimization': {
    metricContext: {
      en: 'Cost Per Unit Optimization tracks all manufacturing costs relative to production volume—critical for pricing strategy and competitive positioning.',
      es: 'Optimización de costo por unidad rastrea todos los costos de manufactura relativos al volumen de producción—crítico para estrategia de precios y posicionamiento competitivo.'
    },
    strategicGuidance: {
      en: 'Drive continuous cost reduction through lean manufacturing, automation, and supplier optimization. Target 3-5% annual cost reduction while maintaining quality.',
      es: 'Impulsa reducción continua de costos a través de manufactura lean, automatización y optimización de proveedores. Apunta a reducción de costos anual del 3-5% manteniendo calidad.'
    },
    tacticalTip: {
      en: 'Implement activity-based costing, value stream mapping, and supplier scorecards. Track material, labor, and overhead costs separately.',
      es: 'Implementa costeo basado en actividades, mapeo de flujo de valor y tarjetas de calificación de proveedores. Rastrea costos de material, trabajo y gastos generales por separado.'
    },
    schemaTrace: 'manufacturing.cost_per_unit.annual_reduction_target = 0.04',
    visualCue: {
      type: 'glow',
      color: '#dc2626'
    }
  },

  // SaaS Industry Overlays
  'cfo-saas-magic_number': {
    metricContext: {
      en: 'SaaS Magic Number measures sales efficiency by comparing new ARR to sales & marketing spend—key indicator of scalable growth potential.',
      es: 'Número mágico SaaS mide eficiencia de ventas comparando nuevo ARR con gasto de ventas y marketing—indicador clave de potencial de crecimiento escalable.'
    },
    strategicGuidance: {
      en: 'Target Magic Number >1.0 for efficient growth. Numbers >1.5 indicate exceptional sales efficiency and warrant aggressive investment in growth.',
      es: 'Apunta a Número Mágico >1.0 para crecimiento eficiente. Números >1.5 indican eficiencia de ventas excepcional y justifican inversión agresiva en crecimiento.'
    },
    tacticalTip: {
      en: 'Calculate quarterly: (New ARR this quarter × 4) ÷ (Sales & Marketing spend previous quarter). Optimize by channel and improve funnel conversion.',
      es: 'Calcula trimestralmente: (Nuevo ARR este trimestre × 4) ÷ (Gasto de ventas y marketing trimestre anterior). Optimiza por canal y mejora conversión de embudo.'
    },
    schemaTrace: 'saas.magic_number.target_efficiency.minimum_threshold = 1.0',
    visualCue: {
      type: 'pulse',
      color: '#3b82f6'
    }
  },

  'chro-saas-engineering_velocity': {
    metricContext: {
      en: 'Engineering Velocity measures development team productivity and feature delivery speed—critical for SaaS product competitiveness and time-to-market.',
      es: 'Velocidad de ingeniería mide productividad del equipo de desarrollo y velocidad de entrega de características—crítico para competitividad de producto SaaS y tiempo al mercado.'
    },
    strategicGuidance: {
      en: 'Focus on developer productivity, technical debt reduction, and continuous deployment. High velocity teams ship 10x more features with higher quality.',
      es: 'Enfócate en productividad del desarrollador, reducción de deuda técnica y despliegue continuo. Equipos de alta velocidad envían 10x más características con mayor calidad.'
    },
    tacticalTip: {
      en: 'Implement DORA metrics (deployment frequency, lead time, MTTR, change failure rate). Use feature flags and automated testing.',
      es: 'Implementa métricas DORA (frecuencia de despliegue, tiempo de entrega, MTTR, tasa de fallas de cambio). Usa banderas de características y pruebas automatizadas.'
    },
    schemaTrace: 'saas.engineering_velocity.dora_metrics.deployment_frequency = "daily"',
    visualCue: {
      type: 'highlight',
      color: '#06b6d4'
    }
  }
};

interface CoachingOverlaySeedProps {
  language: 'en' | 'es';
  onSeedExport: (seedData: any, format: 'json' | 'sql' | 'csv') => void;
  onSeedLoad: (seedData: any) => void;
}

export function CoachingOverlaySeed({
  language,
  onSeedExport,
  onSeedLoad
}: CoachingOverlaySeedProps) {
  const overlayStats = {
    totalOverlays: Object.keys(coachingOverlayLibrary).length,
    byStakeholder: {
      CEO: Object.keys(coachingOverlayLibrary).filter(k => k.startsWith('ceo-')).length,
      CFO: Object.keys(coachingOverlayLibrary).filter(k => k.startsWith('cfo-')).length,
      CHRO: Object.keys(coachingOverlayLibrary).filter(k => k.startsWith('chro-')).length,
      COO: Object.keys(coachingOverlayLibrary).filter(k => k.startsWith('coo-')).length,
      CrossFunction: Object.keys(coachingOverlayLibrary).filter(k => k.startsWith('cross-')).length
    },
    byModule: {
      HCM: Object.keys(coachingOverlayLibrary).filter(k => k.includes('-hcm-')).length,
      ERP: Object.keys(coachingOverlayLibrary).filter(k => k.includes('-erp-')).length,
      EPM: Object.keys(coachingOverlayLibrary).filter(k => k.includes('-epm-')).length,
      CRM: Object.keys(coachingOverlayLibrary).filter(k => k.includes('-crm-')).length,
      All: Object.keys(coachingOverlayLibrary).filter(k => k.includes('-all-')).length
    },
    byComplexity: {
      Strategic: Object.keys(coachingOverlayLibrary).filter(k => 
        coachingOverlayLibrary[k].voiceoverScript !== undefined
      ).length,
      Tactical: Object.keys(coachingOverlayLibrary).length - Object.keys(coachingOverlayLibrary).filter(k => 
        coachingOverlayLibrary[k].voiceoverScript !== undefined
      ).length
    },
    specialFeatures: {
      Bilingual: Object.keys(coachingOverlayLibrary).length, // All are bilingual
      VoiceoverReady: Object.keys(coachingOverlayLibrary).filter(k => 
        coachingOverlayLibrary[k].voiceoverScript !== undefined
      ).length,
      LatinoMarketFocused: Object.keys(coachingOverlayLibrary).filter(k => 
        k.includes('cultural_intelligence') || k.includes('diversity')
      ).length
    }
  };

  const handleExport = (format: 'json' | 'sql' | 'csv') => {
    const seedData = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      overlayLibrary: coachingOverlayLibrary,
      stats: overlayStats,
      schema: {
        overlayConfig: {
          overlay_enabled: 'boolean',
          stakeholder: 'enum[CEO,CFO,CHRO,COO]',
          module: 'enum[ERP,EPM,HCM,CRM]',
          metric: 'string',
          language: 'enum[EN,ES]',
          guidance_level: 'enum[Strategic,Tactical,Operational]'
        },
        overlayContent: {
          metricContext: 'object{en:string,es:string}',
          strategicGuidance: 'object{en:string,es:string}',
          tacticalTip: 'object{en:string,es:string}',
          schemaTrace: 'string',
          visualCue: 'object{type:enum[pulse,highlight,glow],color:string}',
          voiceoverScript: 'object{en:string,es:string}?'
        }
      }
    };

    onSeedExport(seedData, format);
  };

  const handleLoadSample = () => {
    onSeedLoad(coachingOverlayLibrary);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Coaching Overlay Library Seed' : 'Semilla de Biblioteca de Superposiciones de Coaching'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? 'Pre-loaded coaching content for OVERWATCH³ Interactive Coaching System. Ready for Supabase deployment.'
              : 'Contenido de coaching precargado para el Sistema de Coaching Interactivo OVERWATCH³. Listo para despliegue en Supabase.'
            }
          </p>
          
          <div className="flex gap-4 mb-6">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              <Database className="w-4 h-4 mr-2" />
              {overlayStats.totalOverlays} {language === 'en' ? 'Overlays' : 'Superposiciones'}
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Bilingual Ready' : 'Listo Bilingüe'}
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
              <Eye className="w-4 h-4 mr-2" />
              4 {language === 'en' ? 'Stakeholder Types' : 'Tipos de Interesados'}
            </Badge>
          </div>
        </div>

        {/* Enhanced Statistics Dashboard */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">
                {language === 'en' ? 'Overlays by Stakeholder' : 'Superposiciones por Interesado'}
              </h3>
              <div className="space-y-3">
                {Object.entries(overlayStats.byStakeholder).map(([stakeholder, count]) => (
                  <div key={stakeholder} className="flex justify-between items-center">
                    <span className="text-foreground">{stakeholder === 'CrossFunction' ? 
                      (language === 'en' ? 'Cross-Functional' : 'Multifuncional') : stakeholder
                    }</span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">
                {language === 'en' ? 'Overlays by Module' : 'Superposiciones por Módulo'}
              </h3>
              <div className="space-y-3">
                {Object.entries(overlayStats.byModule).map(([module, count]) => (
                  <div key={module} className="flex justify-between items-center">
                    <span className="text-foreground">{module === 'All' ? 
                      (language === 'en' ? 'All Modules' : 'Todos los Módulos') : module
                    }</span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">
                {language === 'en' ? 'Special Features' : 'Características Especiales'}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">
                    {language === 'en' ? 'Bilingual Ready' : 'Listo Bilingüe'}
                  </span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {overlayStats.specialFeatures.Bilingual}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">
                    {language === 'en' ? 'Voiceover Scripts' : 'Scripts de Narración'}
                  </span>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    {overlayStats.specialFeatures.VoiceoverReady}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">
                    {language === 'en' ? 'Latino Market Focus' : 'Enfoque Mercado Latino'}
                  </span>
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                    {overlayStats.specialFeatures.LatinoMarketFocused}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comprehensive Feature Showcase */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-lg font-bold text-blue-400">
                    {language === 'en' ? 'Strategic Coverage' : 'Cobertura Estratégica'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Complete stakeholder ecosystem' : 'Ecosistema completo de interesados'}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-400">{overlayStats.byStakeholder.CEO}</div>
                  <div className="text-sm text-muted-foreground">CEO Overlays</div>
                </div>
                <div className="bg-card/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-green-400">{overlayStats.byStakeholder.CFO}</div>
                  <div className="text-sm text-muted-foreground">CFO Overlays</div>
                </div>
                <div className="bg-card/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-purple-400">{overlayStats.byStakeholder.CHRO}</div>
                  <div className="text-sm text-muted-foreground">CHRO Overlays</div>
                </div>
                <div className="bg-card/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-orange-400">{overlayStats.byStakeholder.COO}</div>
                  <div className="text-sm text-muted-foreground">COO Overlays</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold text-green-400">
                    {language === 'en' ? 'Latino Market Ready' : 'Listo para Mercado Latino'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Cultural intelligence built-in' : 'Inteligencia cultural integrada'}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    {language === 'en' ? 'Bilingual Content' : 'Contenido Bilingüe'}
                  </span>
                  <Badge className="bg-green-500/20 text-green-400">100%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    {language === 'en' ? 'Cultural Intelligence' : 'Inteligencia Cultural'}
                  </span>
                  <Badge className="bg-orange-500/20 text-orange-400">
                    {overlayStats.specialFeatures.LatinoMarketFocused}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    {language === 'en' ? 'Cross-Border Expertise' : 'Experiencia Transfronteriza'}
                  </span>
                  <Badge className="bg-blue-500/20 text-blue-400">
                    {overlayStats.byStakeholder.CrossFunction}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Overlays Preview */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Featured Overlay Content' : 'Contenido de Superposición Destacado'}
            </h3>
            
            <div className="space-y-4">
              {Object.entries(coachingOverlayLibrary).slice(0, 5).map(([key, content]) => (
                <div key={key} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <code className="text-sm bg-secondary px-2 py-1 rounded text-blue-400">
                      {key}
                    </code>
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: content.visualCue.color }} />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-orange-400 font-medium">
                        {language === 'en' ? 'Context:' : 'Contexto:'}
                      </span>
                      <p className="text-muted-foreground mt-1">
                        {content.metricContext[language]}
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-purple-400 font-medium">
                        {language === 'en' ? 'Strategic:' : 'Estratégico:'}
                      </span>
                      <p className="text-muted-foreground mt-1">
                        {content.strategicGuidance[language]}
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-green-400 font-medium">
                        {language === 'en' ? 'Tactical:' : 'Táctico:'}
                      </span>
                      <p className="text-muted-foreground mt-1">
                        {content.tacticalTip[language]}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-border">
                    <code className="text-xs bg-secondary/50 px-2 py-1 rounded text-muted-foreground">
                      {content.schemaTrace}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Coaching Coverage Matrix */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Coaching Coverage Matrix' : 'Matriz de Cobertura de Coaching'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'en' 
                ? 'Complete stakeholder-module coverage ensuring every role has relevant strategic guidance'
                : 'Cobertura completa stakeholder-módulo asegurando que cada rol tenga guía estratégica relevante'
              }
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="bg-secondary">
                    <th className="p-3 text-left border-r border-border">
                      {language === 'en' ? 'Stakeholder' : 'Interesado'}
                    </th>
                    <th className="p-3 text-center border-r border-border">HCM</th>
                    <th className="p-3 text-center border-r border-border">ERP</th>
                    <th className="p-3 text-center border-r border-border">EPM</th>
                    <th className="p-3 text-center border-r border-border">CRM</th>
                    <th className="p-3 text-center">
                      {language === 'en' ? 'Total' : 'Total'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {['CEO', 'CFO', 'CHRO', 'COO'].map((stakeholder, index) => (
                    <tr key={stakeholder} className={index % 2 === 0 ? 'bg-card' : 'bg-secondary/30'}>
                      <td className="p-3 font-medium border-r border-border">{stakeholder}</td>
                      <td className="p-3 text-center border-r border-border">
                        <Badge variant="outline" className="text-xs">
                          {Object.keys(coachingOverlayLibrary).filter(k => 
                            k.startsWith(stakeholder.toLowerCase()) && k.includes('-hcm-')
                          ).length}
                        </Badge>
                      </td>
                      <td className="p-3 text-center border-r border-border">
                        <Badge variant="outline" className="text-xs">
                          {Object.keys(coachingOverlayLibrary).filter(k => 
                            k.startsWith(stakeholder.toLowerCase()) && k.includes('-erp-')
                          ).length}
                        </Badge>
                      </td>
                      <td className="p-3 text-center border-r border-border">
                        <Badge variant="outline" className="text-xs">
                          {Object.keys(coachingOverlayLibrary).filter(k => 
                            k.startsWith(stakeholder.toLowerCase()) && k.includes('-epm-')
                          ).length}
                        </Badge>
                      </td>
                      <td className="p-3 text-center border-r border-border">
                        <Badge variant="outline" className="text-xs">
                          {Object.keys(coachingOverlayLibrary).filter(k => 
                            k.startsWith(stakeholder.toLowerCase()) && k.includes('-crm-')
                          ).length}
                        </Badge>
                      </td>
                      <td className="p-3 text-center">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {Object.keys(coachingOverlayLibrary).filter(k => 
                            k.startsWith(stakeholder.toLowerCase())
                          ).length}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-accent border-t-2 border-border">
                    <td className="p-3 font-bold border-r border-border">
                      {language === 'en' ? 'Cross-Functional' : 'Multifuncional'}
                    </td>
                    <td className="p-3 text-center border-r border-border" colSpan={4}>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                        {overlayStats.byStakeholder.CrossFunction} {language === 'en' ? 'Universal Overlays' : 'Superposiciones Universales'}
                      </Badge>
                    </td>
                    <td className="p-3 text-center">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {overlayStats.byStakeholder.CrossFunction}
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <div className="text-2xl font-bold text-green-400 mb-1">{overlayStats.totalOverlays}</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Total Coaching Points' : 'Puntos de Coaching Totales'}
                </div>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {Math.round((overlayStats.specialFeatures.VoiceoverReady / overlayStats.totalOverlays) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Voice-Ready Coverage' : 'Cobertura Lista para Voz'}
                </div>
              </div>
              <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/30">
                <div className="text-2xl font-bold text-orange-400 mb-1">100%</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Bilingual Support' : 'Soporte Bilingüe'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Controls */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4">
              {language === 'en' ? 'Seed Data Export' : 'Exportar Datos Semilla'}
            </h3>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <Button onClick={() => handleExport('json')} className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                {language === 'en' ? 'Export JSON' : 'Exportar JSON'}
              </Button>
              
              <Button onClick={() => handleExport('sql')} variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                {language === 'en' ? 'Export SQL' : 'Exportar SQL'}
              </Button>
              
              <Button onClick={() => handleExport('csv')} variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                {language === 'en' ? 'Export CSV' : 'Exportar CSV'}
              </Button>
              
              <Button onClick={handleLoadSample} variant="secondary" className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                {language === 'en' ? 'Load Sample Data' : 'Cargar Datos de Muestra'}
              </Button>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">
                {language === 'en' ? 'Advanced Deployment Instructions:' : 'Instrucciones de Despliegue Avanzadas:'}
              </h4>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>
                  <strong>{language === 'en' ? 'Export & Store:' : 'Exportar y Almacenar:'}</strong> 
                  {language === 'en' 
                    ? ' Export JSON seed data and load into Supabase kv_store with "coaching_overlay_" prefix'
                    : ' Exportar datos semilla JSON y cargar en kv_store de Supabase con prefijo "coaching_overlay_"'
                  }
                </li>
                <li>
                  <strong>{language === 'en' ? 'Provider Setup:' : 'Configuración del Proveedor:'}</strong> 
                  {language === 'en' 
                    ? ' Initialize CoachingOverlayProvider with stakeholder modes and language settings'
                    : ' Inicializar CoachingOverlayProvider con modos de interesados y configuraciones de idioma'
                  }
                </li>
                <li>
                  <strong>{language === 'en' ? 'Component Integration:' : 'Integración de Componentes:'}</strong> 
                  {language === 'en' 
                    ? ' Add useMetricCoaching hooks to existing metric components for instant coaching'
                    : ' Agregar hooks useMetricCoaching a componentes de métricas existentes para coaching instantáneo'
                  }
                </li>
                <li>
                  <strong>{language === 'en' ? 'Voice Synthesis:' : 'Síntesis de Voz:'}</strong> 
                  {language === 'en' 
                    ? ' Configure text-to-speech API for voiceover mode (optional but recommended)'
                    : ' Configurar API text-to-speech para modo narración (opcional pero recomendado)'
                  }
                </li>
                <li>
                  <strong>{language === 'en' ? 'Analytics Setup:' : 'Configuración de Analíticas:'}</strong> 
                  {language === 'en' 
                    ? ' Enable coaching interaction tracking for optimization insights'
                    : ' Habilitar seguimiento de interacciones de coaching para insights de optimización'
                  }
                </li>
              </ol>
              
              <div className="mt-4 p-3 bg-blue-500/10 rounded border border-blue-500/30">
                <h5 className="font-medium text-blue-400 mb-2">
                  {language === 'en' ? '🚀 Ready-to-Deploy Features:' : '🚀 Características Listas para Desplegar:'}
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>✅ {overlayStats.totalOverlays} {language === 'en' ? 'coaching overlays' : 'superposiciones de coaching'}</div>
                  <div>✅ {language === 'en' ? '4 stakeholder modes' : '4 modos de interesados'}</div>
                  <div>✅ {language === 'en' ? 'Bilingual support' : 'Soporte bilingüe'}</div>
                  <div>✅ {language === 'en' ? 'Export capabilities' : 'Capacidades de exportación'}</div>
                  <div>✅ {language === 'en' ? 'Analytics tracking' : 'Seguimiento de analíticas'}</div>
                  <div>✅ {language === 'en' ? 'Voice scripts ready' : 'Scripts de voz listos'}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Utility function to get overlay content by key
export function getOverlayContent(key: string): OverlayContent | null {
  return coachingOverlayLibrary[key] || null;
}

// Utility function to search overlays by stakeholder/module
export function searchOverlays(
  stakeholder?: string,
  module?: string,
  metric?: string
): Record<string, OverlayContent> {
  return Object.entries(coachingOverlayLibrary)
    .filter(([key, _]) => {
      const parts = key.split('-');
      if (stakeholder && !parts[0]?.toLowerCase().includes(stakeholder.toLowerCase())) return false;
      if (module && !parts[1]?.toLowerCase().includes(module.toLowerCase())) return false;
      if (metric && !parts[2]?.toLowerCase().includes(metric.toLowerCase())) return false;
      return true;
    })
    .reduce((acc, [key, content]) => {
      acc[key] = content;
      return acc;
    }, {} as Record<string, OverlayContent>);
}