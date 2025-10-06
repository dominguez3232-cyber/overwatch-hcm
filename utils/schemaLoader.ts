import financeSchemas from '../schemas/finance';
import triggerSchemas from '../schemas/trigger';
import scienceSchemas from '../schemas/science';
import lawSchemas from '../schemas/law';
import newSchemas from '../schemas/new';
import timeSchemas from '../schemas/time';

// Schema interfaces matching your JSON structure
export interface SchemaNode {
  id: string;
  category: string;
  type: string;
  stakeholder: string;
  schemaTrace: string;
  caption: {
    en: string;
    es: string;
  };
  coachingOverlay: {
    en: {
      metricContext: string;
      strategicGuidance: string;
      tacticalTip: string;
    };
    es: {
      metricContext: string;
      strategicGuidance: string;
      tacticalTip: string;
    };
  };
  triggerRules: {
    event: 'hover' | 'click' | 'scripted';
    sequenceOrder: number;
    autoPlay: boolean;
  };
  visualTokens: {
    icon: string;
    color: string;
    glow: boolean;
    gradient?: string;
  };
  proofEngine: {
    roiMetric: string;
    value: string;
    unit: string;
    caption: {
      en: string;
      es: string;
    };
    trend: 'up' | 'down' | 'stable';
    confidence: number;
  };
  demoSequence?: {
    narrative: {
      en: string;
      es: string;
    };
    keyframes: Array<{
      timestamp: number;
      action: string;
      target: string;
    }>;
  };
}

// Schema map for different domains
const schemaMap = {
  finance: financeSchemas,
  trigger: triggerSchemas,
  science: scienceSchemas,
  law: lawSchemas,
  new: newSchemas,
  time: timeSchemas,
};

/**
 * Retrieves a schema node by its trace path
 * @param trace - Schema trace in format "domain.route" (e.g., "finance.ethical-roi")
 * @returns SchemaNode or null if not found
 */
export function getSchemaNode(trace: string): SchemaNode | null {
  const [domain, route] = trace.split('.');
  
  const domainSchemas = schemaMap[domain as keyof typeof schemaMap];
  if (!domainSchemas) {
    console.warn(`Schema domain "${domain}" not found`);
    return null;
  }
  
  const node = domainSchemas[route as keyof typeof domainSchemas];
  if (!node) {
    console.warn(`Schema route "${route}" not found in domain "${domain}"`);
    return null;
  }
  
  return node as SchemaNode;
}

/**
 * Gets all schema nodes for a specific domain
 * @param domain - Domain name (e.g., "finance")
 * @returns Array of SchemaNodes
 */
export function getDomainSchemas(domain: string): SchemaNode[] {
  const domainSchemas = schemaMap[domain as keyof typeof schemaMap];
  if (!domainSchemas) {
    return [];
  }
  
  return Object.values(domainSchemas) as SchemaNode[];
}

/**
 * Gets schema nodes filtered by stakeholder
 * @param stakeholder - Stakeholder type (e.g., "CEO", "CFO")
 * @returns Array of SchemaNodes
 */
export function getSchemasByStakeholder(stakeholder: string): SchemaNode[] {
  const allSchemas: SchemaNode[] = [];
  
  Object.values(schemaMap).forEach(domainSchemas => {
    Object.values(domainSchemas).forEach(schema => {
      if (schema.stakeholder === stakeholder) {
        allSchemas.push(schema as SchemaNode);
      }
    });
  });
  
  return allSchemas;
}

/**
 * Gets schemas for demo sequencing in order
 * @param domain - Optional domain filter
 * @returns Array of SchemaNodes sorted by sequenceOrder
 */
export function getDemoSequenceSchemas(domain?: string): SchemaNode[] {
  let schemas: SchemaNode[] = [];
  
  if (domain) {
    schemas = getDomainSchemas(domain);
  } else {
    Object.values(schemaMap).forEach(domainSchemas => {
      Object.values(domainSchemas).forEach(schema => {
        schemas.push(schema as SchemaNode);
      });
    });
  }
  
  return schemas
    .filter(schema => schema.demoSequence)
    .sort((a, b) => a.triggerRules.sequenceOrder - b.triggerRules.sequenceOrder);
}

/**
 * Validates schema node structure
 * @param node - Schema node to validate
 * @returns boolean indicating if valid
 */
export function validateSchemaNode(node: any): node is SchemaNode {
  return (
    node &&
    typeof node.id === 'string' &&
    typeof node.category === 'string' &&
    typeof node.schemaTrace === 'string' &&
    node.caption &&
    node.caption.en &&
    node.caption.es &&
    node.coachingOverlay &&
    node.proofEngine &&
    node.visualTokens &&
    node.triggerRules
  );
}

/**
 * Gets schema trace from route parameters
 * @param domain - Domain from URL
 * @param route - Route from URL
 * @returns Formatted schema trace
 */
export function buildSchemaTrace(domain: string, route: string): string {
  return `${domain}.${route}`;
}

export default {
  getSchemaNode,
  getDomainSchemas,
  getSchemasByStakeholder,
  getDemoSequenceSchemas,
  validateSchemaNode,
  buildSchemaTrace
};