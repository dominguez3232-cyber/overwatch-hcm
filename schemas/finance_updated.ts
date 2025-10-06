export default {
  "ethical-roi": {
    "id": "ethical-roi",
    "category": "finance",
    "type": "ROI Intelligence",
    "stakeholder": "CEO",
    "schemaTrace": "finance.ethical-roi",
    "caption": {
      "en": "Value creation through ethical business practices",
      "es": "Creación de valor a través de prácticas empresariales éticas"
    },
    "coachingOverlay": {
      "en": {
        "metricContext": "Ethical ROI measures value creation through sustainable, responsible business practices that build long-term stakeholder trust.",
        "strategicGuidance": "Deploy ethical decision frameworks that create competitive advantage through transparency, fair practices, and stakeholder alignment.",
        "tacticalTip": "Track trust velocity, employee engagement, and customer loyalty as leading indicators of ethical ROI performance."
      },
      "es": {
        "metricContext": "El ROI ético mide la creación de valor a través de prácticas empresariales sostenibles y responsables que construyen confianza a largo plazo.",
        "strategicGuidance": "Despliega marcos de decisión éticos que crean ventaja competitiva a través de transparencia, prácticas justas y alineación de stakeholders.",
        "tacticalTip": "Rastrea velocidad de confianza, compromiso de empleados y lealtad de clientes como indicadores principales del rendimiento de ROI ético."
      }
    },
    "triggerRules": {
      "event": "hover",
      "sequenceOrder": 1,
      "autoPlay": false
    },
    "visualTokens": {
      "icon": "🌱",
      "color": "#22c55e",
      "glow": true,
      "gradient": "from-green-500 to-emerald-600"
    },
    "proofEngine": {
      "roiMetric": "Trust Premium",
      "value": "2.3x",
      "unit": "Customer Lifetime Value",
      "caption": {
        "en": "Ethical practices increased customer lifetime value by 230%",
        "es": "Las prácticas éticas aumentaron el valor de vida del cliente en 230%"
      },
      "trend": "up",
      "confidence": 94
    },
    "demoSequence": {
      "narrative": {
        "en": "Watch how ethical business practices transform into measurable competitive advantage",
        "es": "Observa cómo las prácticas empresariales éticas se transforman en ventaja competitiva medible"
      },
      "keyframes": [
        {
          "timestamp": 0,
          "action": "highlight_metric",
          "target": "trust-velocity"
        },
        {
          "timestamp": 2000,
          "action": "show_proof",
          "target": "customer-loyalty"
        },
        {
          "timestamp": 4000,
          "action": "animate_growth",
          "target": "lifetime-value"
        }
      ]
    }
  },
  
  "trust-velocity": {
    "id": "trust-velocity",
    "category": "finance",
    "type": "ROI Intelligence",
    "stakeholder": "CEO",
    "schemaTrace": "finance.trust-velocity",
    "caption": {
      "en": "Accelerating stakeholder confidence and relationship building",
      "es": "Acelerando la confianza de stakeholders y construcción de relaciones"
    },
    "coachingOverlay": {
      "en": {
        "metricContext": "Trust velocity measures how quickly your organization builds credible relationships with stakeholders, reducing sales cycles and increasing conversion rates.",
        "strategicGuidance": "Implement systematic trust-building processes across customer touchpoints, from onboarding to ongoing relationship management.",
        "tacticalTip": "Use transparent communication, consistent delivery, and proactive issue resolution to accelerate trust formation."
      },
      "es": {
        "metricContext": "La velocidad de confianza mide qué tan rápido tu organización construye relaciones creíbles con stakeholders, reduciendo ciclos de venta y aumentando tasas de conversión.",
        "strategicGuidance": "Implementa procesos sistemáticos de construcción de confianza en todos los puntos de contacto con clientes, desde incorporación hasta gestión continua de relaciones.",
        "tacticalTip": "Usa comunicación transparente, entrega consistente y resolución proactiva de problemas para acelerar la formación de confianza."
      }
    },
    "triggerRules": {
      "event": "click",
      "sequenceOrder": 2,
      "autoPlay": true
    },
    "visualTokens": {
      "icon": "⚡",
      "color": "#3b82f6",
      "glow": true,
      "gradient": "from-blue-500 to-cyan-600"
    },
    "proofEngine": {
      "roiMetric": "Sales Cycle Reduction",
      "value": "47%",
      "unit": "Time to Close",
      "caption": {
        "en": "Trust-building processes reduced average sales cycle by 47%",
        "es": "Los procesos de construcción de confianza redujeron el ciclo de venta promedio en 47%"
      },
      "trend": "up",
      "confidence": 91
    },
    "demoSequence": {
      "narrative": {
        "en": "See how systematic trust-building accelerates business outcomes",
        "es": "Ve cómo la construcción sistemática de confianza acelera los resultados empresariales"
      },
      "keyframes": [
        {
          "timestamp": 0,
          "action": "show_baseline",
          "target": "sales-cycle"
        },
        {
          "timestamp": 1500,
          "action": "apply_trust_process",
          "target": "customer-journey"
        },
        {
          "timestamp": 3000,
          "action": "reveal_acceleration",
          "target": "conversion-rate"
        }
      ]
    }
  },
  
  "burn-reduction": {
    "id": "burn-reduction",
    "category": "finance",
    "type": "ROI Intelligence",
    "stakeholder": "CFO",
    "schemaTrace": "finance.burn-reduction",
    "caption": {
      "en": "Operational efficiency and cost optimization strategies",
      "es": "Estrategias de eficiencia operacional y optimización de costos"
    },
    "coachingOverlay": {
      "en": {
        "metricContext": "Burn reduction focuses on intelligent cost optimization that maintains growth trajectory while extending runway and improving unit economics.",
        "strategicGuidance": "Identify high-impact cost reductions through process automation, vendor optimization, and resource reallocation without sacrificing core capabilities.",
        "tacticalTip": "Use activity-based costing to identify true cost drivers and prioritize reductions that increase operational leverage."
      },
      "es": {
        "metricContext": "La reducción de quema se enfoca en optimización inteligente de costos que mantiene la trayectoria de crecimiento mientras extiende la pista y mejora la economía unitaria.",
        "strategicGuidance": "Identifica reducciones de costos de alto impacto a través de automatización de procesos, optimización de proveedores y reasignación de recursos sin sacrificar capacidades centrales.",
        "tacticalTip": "Usa costeo basado en actividades para identificar verdaderos impulsores de costos y priorizar reducciones que aumenten el apalancamiento operativo."
      }
    },
    "triggerRules": {
      "event": "scripted",
      "sequenceOrder": 3,
      "autoPlay": true
    },
    "visualTokens": {
      "icon": "🔥",
      "color": "#f97316",
      "glow": true,
      "gradient": "from-orange-500 to-red-600"
    },
    "proofEngine": {
      "roiMetric": "Runway Extension",
      "value": "18",
      "unit": "Months Added",
      "caption": {
        "en": "Strategic cost optimization extended runway by 18 months",
        "es": "La optimización estratégica de costos extendió la pista en 18 meses"
      },
      "trend": "up",
      "confidence": 96
    },
    "demoSequence": {
      "narrative": {
        "en": "Discover how intelligent cost optimization preserves growth while extending runway",
        "es": "Descubre cómo la optimización inteligente de costos preserva el crecimiento mientras extiende la pista"
      },
      "keyframes": [
        {
          "timestamp": 0,
          "action": "show_current_burn",
          "target": "monthly-expenses"
        },
        {
          "timestamp": 2000,
          "action": "identify_opportunities",
          "target": "cost-categories"
        },
        {
          "timestamp": 4000,
          "action": "project_savings",
          "target": "runway-extension"
        }
      ]
    }
  },
  
  "strategic-spend": {
    "id": "strategic-spend",
    "category": "finance",
    "type": "ROI Intelligence",
    "stakeholder": "CEO",
    "schemaTrace": "finance.strategic-spend",
    "caption": {
      "en": "Investment prioritization and resource allocation",
      "es": "Priorización de inversión y asignación de recursos"
    },
    "coachingOverlay": {
      "en": {
        "metricContext": "Strategic spend optimizes resource allocation by prioritizing investments that generate the highest ROI and align with long-term strategic objectives.",
        "strategicGuidance": "Create a portfolio approach to spending that balances short-term results with long-term capability building across growth, efficiency, and risk mitigation.",
        "tacticalTip": "Use zero-based budgeting principles to challenge every expense and reallocate resources toward highest-impact initiatives."
      },
      "es": {
        "metricContext": "El gasto estratégico optimiza la asignación de recursos priorizando inversiones que generan el mayor ROI y se alinean con objetivos estratégicos a largo plazo.",
        "strategicGuidance": "Crea un enfoque de portafolio para el gasto que equilibre resultados a corto plazo con construcción de capacidades a largo plazo en crecimiento, eficiencia y mitigación de riesgos.",
        "tacticalTip": "Usa principios de presupuesto base cero para desafiar cada gasto y reasignar recursos hacia iniciativas de mayor impacto."
      }
    },
    "triggerRules": {
      "event": "hover",
      "sequenceOrder": 4,
      "autoPlay": false
    },
    "visualTokens": {
      "icon": "🎯",
      "color": "#8b5cf6",
      "glow": true,
      "gradient": "from-purple-500 to-indigo-600"
    },
    "proofEngine": {
      "roiMetric": "Resource Efficiency",
      "value": "3.2x",
      "unit": "Return Multiple",
      "caption": {
        "en": "Strategic resource allocation generated 3.2x return multiple",
        "es": "La asignación estratégica de recursos generó un múltiplo de retorno de 3.2x"
      },
      "trend": "up",
      "confidence": 88
    },
    "demoSequence": {
      "narrative": {
        "en": "Experience how strategic spending decisions multiply business impact",
        "es": "Experimenta cómo las decisiones de gasto estratégico multiplican el impacto empresarial"
      },
      "keyframes": [
        {
          "timestamp": 0,
          "action": "show_current_allocation",
          "target": "spend-categories"
        },
        {
          "timestamp": 1800,
          "action": "optimize_portfolio",
          "target": "strategic-reallocation"
        },
        {
          "timestamp": 3600,
          "action": "demonstrate_impact",
          "target": "roi-multiplication"
        }
      ]
    }
  },
  
  "adoption-lift": {
    "id": "adoption-lift",
    "category": "finance",
    "type": "ROI Intelligence",
    "stakeholder": "COO",
    "schemaTrace": "finance.adoption-lift",
    "caption": {
      "en": "User engagement and platform utilization enhancement",
      "es": "Mejora del compromiso de usuarios y utilización de plataforma"
    },
    "coachingOverlay": {
      "en": {
        "metricContext": "Adoption lift measures the acceleration of user engagement and platform utilization, directly correlating to revenue growth and customer success metrics.",
        "strategicGuidance": "Implement systematic onboarding, training, and engagement programs that reduce time-to-value and increase feature adoption across user segments.",
        "tacticalTip": "Use behavioral analytics to identify adoption bottlenecks and design interventions that guide users toward high-value actions and outcomes."
      },
      "es": {
        "metricContext": "El impulso de adopción mide la aceleración del compromiso de usuarios y utilización de plataforma, correlacionando directamente con el crecimiento de ingresos y métricas de éxito del cliente.",
        "strategicGuidance": "Implementa programas sistemáticos de incorporación, capacitación y compromiso que reduzcan el tiempo de valor y aumenten la adopción de características en segmentos de usuarios.",
        "tacticalTip": "Usa análisis de comportamiento para identificar cuellos de botella de adopción y diseñar intervenciones que guíen a los usuarios hacia acciones y resultados de alto valor."
      }
    },
    "triggerRules": {
      "event": "click",
      "sequenceOrder": 5,
      "autoPlay": true
    },
    "visualTokens": {
      "icon": "🚀",
      "color": "#10b981",
      "glow": true,
      "gradient": "from-emerald-500 to-teal-600"
    },
    "proofEngine": {
      "roiMetric": "User Activation",
      "value": "89%",
      "unit": "30-Day Retention",
      "caption": {
        "en": "Systematic adoption programs achieved 89% 30-day retention",
        "es": "Los programas sistemáticos de adopción lograron 89% de retención a 30 días"
      },
      "trend": "up",
      "confidence": 93
    },
    "demoSequence": {
      "narrative": {
        "en": "Watch how strategic adoption programs transform user engagement into business growth",
        "es": "Observa cómo los programas de adopción estratégica transforman el compromiso del usuario en crecimiento empresarial"
      },
      "keyframes": [
        {
          "timestamp": 0,
          "action": "show_baseline_adoption",
          "target": "user-engagement"
        },
        {
          "timestamp": 2500,
          "action": "deploy_adoption_program",
          "target": "onboarding-flow"
        },
        {
          "timestamp": 5000,
          "action": "reveal_lift_impact",
          "target": "retention-metrics"
        }
      ]
    }
  },
  
  "revenue-analytics": {
    "id": "revenue-analytics",
    "category": "finance",
    "type": "ROI Intelligence",
    "stakeholder": "CFO",
    "schemaTrace": "finance.revenue-analytics",
    "caption": {
      "en": "Advanced revenue analysis and predictive modeling",
      "es": "Análisis avanzado de ingresos y modelado predictivo"
    },
    "coachingOverlay": {
      "en": {
        "metricContext": "Revenue analytics provides deep insights into revenue patterns, customer behavior, and growth opportunities through advanced data modeling and predictive analysis.",
        "strategicGuidance": "Deploy sophisticated revenue modeling to identify growth levers, optimize pricing strategies, and predict revenue outcomes with high confidence intervals.",
        "tacticalTip": "Use cohort analysis, lifetime value modeling, and predictive analytics to optimize customer acquisition and retention strategies."
      },
      "es": {
        "metricContext": "El análisis de ingresos proporciona información profunda sobre patrones de ingresos, comportamiento del cliente y oportunidades de crecimiento a través de modelado de datos avanzado y análisis predictivo.",
        "strategicGuidance": "Despliega modelado sofisticado de ingresos para identificar palancas de crecimiento, optimizar estrategias de precios y predecir resultados de ingresos con intervalos de confianza altos.",
        "tacticalTip": "Usa análisis de cohortes, modelado de valor de vida y análisis predictivo para optimizar estrategias de adquisición y retención de clientes."
      }
    },
    "triggerRules": {
      "event": "hover",
      "sequenceOrder": 6,
      "autoPlay": false
    },
    "visualTokens": {
      "icon": "📊",
      "color": "#06b6d4",
      "glow": true,
      "gradient": "from-cyan-500 to-blue-600"
    },
    "proofEngine": {
      "roiMetric": "Revenue Predictability",
      "value": "94%",
      "unit": "Forecast Accuracy",
      "caption": {
        "en": "Advanced analytics achieved 94% revenue forecast accuracy",
        "es": "El análisis avanzado logró 94% de precisión en pronósticos de ingresos"
      },
      "trend": "up",
      "confidence": 97
    },
    "demoSequence": {
      "narrative": {
        "en": "Discover how predictive revenue analytics transforms financial planning and strategic decision-making",
        "es": "Descubre cómo el análisis predictivo de ingresos transforma la planificación financiera y la toma de decisiones estratégicas"
      },
      "keyframes": [
        {
          "timestamp": 0,
          "action": "show_historical_data",
          "target": "revenue-trends"
        },
        {
          "timestamp": 2000,
          "action": "apply_predictive_model",
          "target": "forecast-engine"
        },
        {
          "timestamp": 4000,
          "action": "reveal_insights",
          "target": "growth-opportunities"
        }
      ]
    }
  },
  
  "budget-authoring": {
    "id": "budget-authoring",
    "category": "finance",
    "type": "ROI Intelligence",
    "stakeholder": "CFO",
    "schemaTrace": "finance.budget-authoring",
    "caption": {
      "en": "Collaborative budget creation and resource planning",
      "es": "Creación colaborativa de presupuestos y planificación de recursos"
    },
    "coachingOverlay": {
      "en": {
        "metricContext": "Budget authoring enables collaborative, data-driven budget creation that aligns organizational priorities with financial constraints and strategic objectives.",
        "strategicGuidance": "Implement participatory budgeting processes that engage stakeholders, improve forecast accuracy, and create ownership for financial outcomes.",
        "tacticalTip": "Use rolling forecasts, scenario planning, and bottoms-up input to create realistic, flexible budgets that adapt to changing business conditions."
      },
      "es": {
        "metricContext": "La creación de presupuestos permite la creación colaborativa y basada en datos de presupuestos que alinea las prioridades organizacionales con las limitaciones financieras y los objetivos estratégicos.",
        "strategicGuidance": "Implementa procesos de presupuestación participativa que involucren a los stakeholders, mejoren la precisión de pronósticos y creen apropiación de resultados financieros.",
        "tacticalTip": "Usa pronósticos móviles, planificación de escenarios y entrada de abajo hacia arriba para crear presupuestos realistas y flexibles que se adapten a condiciones empresariales cambiantes."
      }
    },
    "triggerRules": {
      "event": "click",
      "sequenceOrder": 7,
      "autoPlay": true
    },
    "visualTokens": {
      "icon": "📝",
      "color": "#f59e0b",
      "glow": true,
      "gradient": "from-amber-500 to-orange-600"
    },
    "proofEngine": {
      "roiMetric": "Budget Accuracy",
      "value": "92%",
      "unit": "Variance Reduction",
      "caption": {
        "en": "Collaborative budgeting achieved 92% accuracy improvement",
        "es": "La presupuestación colaborativa logró 92% de mejora en precisión"
      },
      "trend": "up",
      "confidence": 89
    },
    "demoSequence": {
      "narrative": {
        "en": "Experience how collaborative budget authoring improves accuracy and stakeholder alignment",
        "es": "Experimenta cómo la creación colaborativa de presupuestos mejora la precisión y alineación de stakeholders"
      },
      "keyframes": [
        {
          "timestamp": 0,
          "action": "show_traditional_process",
          "target": "budget-planning"
        },
        {
          "timestamp": 2200,
          "action": "enable_collaboration",
          "target": "stakeholder-input"
        },
        {
          "timestamp": 4400,
          "action": "demonstrate_accuracy",
          "target": "variance-reduction"
        }
      ]
    }
  },
  
  "investor-relations": {
    "id": "investor-relations",
    "category": "finance",
    "type": "ROI Intelligence",
    "stakeholder": "CEO",
    "schemaTrace": "finance.investor-relations",
    "caption": {
      "en": "Strategic investor communication and relationship management",
      "es": "Comunicación estratégica con inversores y gestión de relaciones"
    },
    "coachingOverlay": {
      "en": {
        "metricContext": "Investor relations optimize stakeholder communication, build confidence in strategic direction, and facilitate access to growth capital through transparent, consistent engagement.",
        "strategicGuidance": "Develop systematic investor communication that demonstrates progress, addresses concerns proactively, and builds long-term trust through regular updates and strategic insights.",
        "tacticalTip": "Use data-driven storytelling, milestone tracking, and proactive communication to maintain investor confidence and support strategic initiatives."
      },
      "es": {
        "metricContext": "Las relaciones con inversores optimizan la comunicación con stakeholders, construyen confianza en la dirección estratégica y facilitan el acceso al capital de crecimiento a través de un compromiso transparente y consistente.",
        "strategicGuidance": "Desarrolla comunicación sistemática con inversores que demuestre progreso, aborde preocupaciones proactivamente y construya confianza a largo plazo a través de actualizaciones regulares e insights estratégicos.",
        "tacticalTip": "Usa narrativa basada en datos, seguimiento de hitos y comunicación proactiva para mantener la confianza del inversor y apoyar iniciativas estratégicas."
      }
    },
    "triggerRules": {
      "event": "hover",
      "sequenceOrder": 8,
      "autoPlay": false
    },
    "visualTokens": {
      "icon": "🤝",
      "color": "#6366f1",
      "glow": true,
      "gradient": "from-indigo-500 to-purple-600"
    },
    "proofEngine": {
      "roiMetric": "Investor Confidence",
      "value": "4.7",
      "unit": "Trust Score (1-5)",
      "caption": {
        "en": "Strategic investor relations achieved 4.7/5 trust score",
        "es": "Las relaciones estratégicas con inversores lograron puntuación de confianza de 4.7/5"
      },
      "trend": "up",
      "confidence": 95
    },
    "demoSequence": {
      "narrative": {
        "en": "See how strategic investor relations transforms stakeholder confidence into growth capital access",
        "es": "Ve cómo las relaciones estratégicas con inversores transforma la confianza de stakeholders en acceso a capital de crecimiento"
      },
      "keyframes": [
        {
          "timestamp": 0,
          "action": "show_baseline_trust",
          "target": "investor-sentiment"
        },
        {
          "timestamp": 1800,
          "action": "implement_communication",
          "target": "strategic-updates"
        },
        {
          "timestamp": 3600,
          "action": "reveal_confidence_lift",
          "target": "trust-metrics"
        }
      ]
    }
  }
};