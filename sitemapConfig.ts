// OVERWATCH³ Sitemap Configuration
// Maps the complete 6-domain schema system to navigable routes

export interface SitemapRoute {
  id: string;
  title: {
    en: string;
    es: string;
  };
  description?: {
    en: string;
    es: string;
  };
  stakeholder?: string;
  available?: boolean;
}

export interface SitemapBranch {
  title: string;
  description: {
    en: string;
    es: string;
  };
  icon: string;
  routes: string[];
  metadata: {
    domain: string;
    color: string;
    stakeholders: string[];
  };
}

export interface SitemapConfig {
  overwatch3: {
    [domain: string]: SitemapBranch;
  };
}

const sitemap: SitemapConfig = {
  overwatch3: {
    finance: {
      title: "💰 Finance Intelligence",
      description: {
        en: "Financial strategy and ROI optimization framework",
        es: "Marco de estrategia financiera y optimización de ROI"
      },
      icon: "💰",
      routes: [
        "ethical-roi",
        "trust-velocity", 
        "budget-authoring",
        "investor-relations"
      ],
      metadata: {
        domain: "finance",
        color: "from-amber-500 to-orange-600",
        stakeholders: ["CEO", "CFO", "Investors"]
      }
    },
    
    trigger: {
      title: "⚡ Trigger Intelligence", 
      description: {
        en: "Behavioral triggers and risk assessment systems",
        es: "Sistemas de activadores conductuales y evaluación de riesgo"
      },
      icon: "⚡",
      routes: [
        "behavioral-triggers",
        "difficulty-risk",
        "performance-triggers",
        "escalation-protocols"
      ],
      metadata: {
        domain: "trigger",
        color: "from-cyan-500 to-blue-600",
        stakeholders: ["CHRO", "CEO", "Managers"]
      }
    },
    
    science: {
      title: "🧠 Science Intelligence",
      description: {
        en: "Psychology and behavioral science frameworks",
        es: "Marcos de psicología y ciencia del comportamiento"
      },
      icon: "🧠",
      routes: [
        "psychology",
        "philosophy",
        "behavioral-science",
        "cognitive-frameworks"
      ],
      metadata: {
        domain: "science", 
        color: "from-purple-500 to-violet-600",
        stakeholders: ["CEO", "CHRO", "Leadership"]
      }
    },
    
    law: {
      title: "⚖️ Law Intelligence",
      description: {
        en: "Legal compliance and governance frameworks",
        es: "Marcos de cumplimiento legal y gobernanza"
      },
      icon: "⚖️",
      routes: [
        "assumed-right",
        "compliance-frameworks",
        "risk-mitigation",
        "governance-protocols"
      ],
      metadata: {
        domain: "law",
        color: "from-emerald-500 to-green-600", 
        stakeholders: ["Legal", "CEO", "Compliance"]
      }
    },
    
    new: {
      title: "🚀 New Intelligence",
      description: {
        en: "Innovation and market expansion strategies",
        es: "Estrategias de innovación y expansión de mercado"
      },
      icon: "🚀",
      routes: [
        "market-entry",
        "coaching-overlay",
        "innovation-frameworks",
        "expansion-strategies"
      ],
      metadata: {
        domain: "new",
        color: "from-rose-500 to-pink-600",
        stakeholders: ["CEO", "CMO", "Strategy"]
      }
    },
    
    time: {
      title: "⏱️ Time Intelligence",
      description: {
        en: "Velocity modeling and temporal optimization",
        es: "Modelado de velocidad y optimización temporal"
      },
      icon: "⏱️",
      routes: [
        "velocity-modeling",
        "before-after",
        "temporal-optimization",
        "timeline-frameworks"
      ],
      metadata: {
        domain: "time",
        color: "from-indigo-500 to-blue-600",
        stakeholders: ["COO", "CEO", "Operations"]
      }
    }
  }
};

// Helper functions for working with sitemap
export const getSitemapBranch = (domain: string): SitemapBranch | null => {
  return sitemap.overwatch3[domain] || null;
};

export const getAllDomains = (): string[] => {
  return Object.keys(sitemap.overwatch3);
};

export const getDomainRoutes = (domain: string): string[] => {
  const branch = getSitemapBranch(domain);
  return branch ? branch.routes : [];
};

export const getDomainColor = (domain: string): string => {
  const branch = getSitemapBranch(domain);
  return branch ? branch.metadata.color : 'from-gray-500 to-gray-600';
};

export const getDomainIcon = (domain: string): string => {
  const branch = getSitemapBranch(domain);
  return branch ? branch.icon : '🔬';
};

export const getDomainStakeholders = (domain: string): string[] => {
  const branch = getSitemapBranch(domain);
  return branch ? branch.metadata.stakeholders : [];
};

export default sitemap;