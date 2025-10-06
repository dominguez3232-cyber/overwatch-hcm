import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";
import sequencesApp from "./sequences.tsx";

const app = new Hono();

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Caption Library Seed Data (embedded for performance)
const captionLibrarySeed = {
  captionHooks: {
    financial: {
      EN: [
        "ROI proven, not promised",
        "Efficiency that compounds", 
        "Capital optimized",
        "Value acceleration",
        "Proof before promise",
        "Returns, amplified",
        "Investment velocity",
        "Profit precision",
        "Revenue resilience",
        "Capital clarity",
        "Margin mastery",
        "Growth guaranteed",
        "Financial force",
        "Performance proven",
        "Results realized"
      ],
      ES: [
        "ROI comprobado, no prometido",
        "Eficiencia que se compone",
        "Capital optimizado", 
        "Aceleración de valor",
        "Prueba antes de promesa",
        "Retornos, amplificados",
        "Velocidad de inversión",
        "Precisión de ganancias",
        "Resistencia de ingresos",
        "Claridad de capital",
        "Dominio de márgenes",
        "Crecimiento garantizado",
        "Fuerza financiera",
        "Desempeño comprobado",
        "Resultados realizados"
      ]
    },
    humanCapital: {
      EN: [
        "Human capital, activated",
        "Adoption that sticks",
        "Culture amplified",
        "Teams aligned, engaged",
        "Workforce velocity",
        "Talent optimized",
        "People-first precision",
        "Engagement elevated",
        "Culture cultivated",
        "Teams transformed",
        "Human potential unlocked",
        "People-powered performance",
        "Workforce wisdom",
        "Talent trajectory",
        "Human capital harmony"
      ],
      ES: [
        "Capital humano, activado",
        "Adopción que permanece",
        "Cultura amplificada",
        "Equipos alineados, comprometidos",
        "Velocidad de la fuerza laboral",
        "Talento optimizado",
        "Precisión centrada en personas",
        "Compromiso elevado",
        "Cultura cultivada",
        "Equipos transformados",
        "Potencial humano desbloqueado",
        "Desempeño impulsado por personas",
        "Sabiduría de la fuerza laboral",
        "Trayectoria del talento",
        "Armonía del capital humano"
      ]
    },
    operational: {
      EN: [
        "Precision, not guesswork",
        "Schema-driven velocity",
        "Process excellence",
        "Operational clarity",
        "Execution optimized",
        "Systems synchronized",
        "Workflow wisdom",
        "Process perfection",
        "Operational intelligence",
        "Efficiency engineered",
        "Systems streamlined",
        "Process precision",
        "Operational orchestration",
        "Workflow weaponized",
        "Execution excellence"
      ],
      ES: [
        "Precisión, no conjeturas",
        "Velocidad impulsada por esquemas",
        "Excelencia de procesos",
        "Claridad operacional",
        "Ejecución optimizada",
        "Sistemas sincronizados",
        "Sabiduría de flujo de trabajo",
        "Perfección de procesos",
        "Inteligencia operacional",
        "Eficiencia diseñada",
        "Sistemas optimizados",
        "Precisión de procesos",
        "Orquestación operacional",
        "Flujo de trabajo armado",
        "Excelencia en ejecución"
      ]
    },
    strategic: {
      EN: [
        "Built for solo-operators",
        "Founder-led, schema-driven",
        "Strategic advantage",
        "Command center activated",
        "Intelligence amplified",
        "Vision validated",
        "Strategy simplified",
        "Leadership leveraged",
        "Intelligence integrated",
        "Vision velocity",
        "Strategic supremacy",
        "Command clarity",
        "Leadership logic",
        "Strategic synthesis",
        "Intelligence infrastructure"
      ],
      ES: [
        "Construido para operadores-solo",
        "Liderado por fundadores, impulsado por esquemas",
        "Ventaja estratégica",
        "Centro de comando activado",
        "Inteligencia amplificada",
        "Visión validada",
        "Estrategia simplificada",
        "Liderazgo aprovechado",
        "Inteligencia integrada",
        "Velocidad de visión",
        "Supremacía estratégica",
        "Claridad de comando",
        "Lógica de liderazgo",
        "Síntesis estratégica",
        "Infraestructura de inteligencia"
      ]
    }
  },
  contextTaglines: {
    founderContext: {
      EN: [
        "Founder-led deployment, schema-driven clarity",
        "Built for founder velocity, scaled for enterprise",
        "Solo-operator simplicity, enterprise sophistication",
        "Founder-first design, investor-grade results",
        "Designed for founders, validated by results"
      ],
      ES: [
        "Despliegue liderado por fundador, claridad impulsada por esquemas",
        "Construido para velocidad de fundador, escalado para empresa",
        "Simplicidad de operador-solo, sofisticación empresarial",
        "Diseño centrado en fundador, resultados grado inversionista",
        "Diseñado para fundadores, validado por resultados"
      ]
    },
    soloOperatorContext: {
      EN: [
        "Built for solo-operators, ready for scale",
        "One-person power, enterprise-grade precision",
        "Solo simplicity, strategic sophistication",
        "Individual intelligence, institutional impact",
        "Solo-operator optimized, scale-ready"
      ],
      ES: [
        "Construido para operadores-solo, listo para escala",
        "Poder de una persona, precisión grado empresarial",
        "Simplicidad solo, sofisticación estratégica",
        "Inteligencia individual, impacto institucional",
        "Optimizado para operador-solo, listo para escala"
      ]
    },
    enterpriseContext: {
      EN: [
        "Enterprise-grade execution, startup velocity",
        "Corporate sophistication, entrepreneurial speed",
        "Enterprise scale, founder agility",
        "Corporate precision, startup passion",
        "Enterprise intelligence, founder intuition"
      ],
      ES: [
        "Ejecución grado empresarial, velocidad startup",
        "Sofisticación corporativa, velocidad empresarial",
        "Escala empresarial, agilidad de fundador",
        "Precisión corporativa, pasión startup",
        "Inteligencia empresarial, intuición de fundador"
      ]
    },
    crossBorderContext: {
      EN: [
        "Bilingual execution at enterprise scale",
        "One click. Two languages. Infinite markets.",
        "Cross-border clarity, cultural intelligence",
        "Global reach, local resonance",
        "Bilingual by design, global by default"
      ],
      ES: [
        "Ejecución bilingüe a escala empresarial",
        "Un clic. Dos idiomas. Mercados infinitos.",
        "Claridad transfronteriza, inteligencia cultural",
        "Alcance global, resonancia local",
        "Bilingüe por diseño, global por defecto"
      ]
    }
  }
};

// Caption generation helper function
function generateCaption(
  metric: string,
  value: string,
  module: string,
  impactType: string,
  deploymentType: string,
  language: string = 'EN',
  template: string = 'basic'
): string {
  const hooks = captionLibrarySeed.captionHooks[impactType as keyof typeof captionLibrarySeed.captionHooks];
  const contexts = captionLibrarySeed.contextTaglines[deploymentType as keyof typeof captionLibrarySeed.contextTaglines];
  
  if (!hooks || !contexts) {
    return `${value}. Impact delivered. Ready for scale.`;
  }
  
  const hooksList = hooks[language as 'EN' | 'ES'] || hooks.EN;
  const contextsList = contexts[language as 'EN' | 'ES'] || contexts.EN;
  
  const hook = hooksList[Math.floor(Math.random() * hooksList.length)];
  const context = contextsList[Math.floor(Math.random() * contextsList.length)];
  
  // Template-based generation
  switch (template) {
    case 'expanded':
      return `${value} ${metric}. ${hook}. ${context}.`;
    case 'dashboard':
      return `${value} • ${hook}`;
    case 'social':
      return `${value} → ${hook} → ${context} #OverwatchHRIS`;
    case 'presentation':
      return `"${value}" - ${hook} | ${context}`;
    case 'cinematic':
      return `${value}.\n${hook}.\n${context}.`;
    default: // basic
      return `${value}. ${hook}. ${context}.`;
  }
}

// Rate limiting helper (simple in-memory store)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(clientId: string, limit: number = 100, windowMs: number = 60000): boolean {
  const now = Date.now();
  const key = clientId;
  
  let bucket = rateLimitStore.get(key);
  
  if (!bucket || bucket.resetTime < now) {
    bucket = { count: 0, resetTime: now + windowMs };
    rateLimitStore.set(key, bucket);
  }
  
  if (bucket.count >= limit) {
    return false; // Rate limited
  }
  
  bucket.count++;
  return true; // OK to proceed
}

// Health check endpoint
app.get("/make-server-e346ddd7/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Caption Generation API
app.post("/make-server-e346ddd7/generate-caption", async (c) => {
  try {
    // Rate limiting (basic IP-based)
    const clientIP = c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || 'unknown';
    
    if (!checkRateLimit(clientIP, 10, 60000)) { // 10 requests per minute
      return c.json(
        { 
          error: "Rate limit exceeded. Maximum 10 requests per minute.", 
          retryAfter: 60 
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await c.req.json();
    const { metric, value, module, impact_type, deployment_type, language = 'EN', template = 'basic' } = body;

    // Validate required fields
    if (!metric || !value || !impact_type || !deployment_type) {
      return c.json(
        { 
          error: "Missing required fields: metric, value, impact_type, deployment_type" 
        },
        { status: 400 }
      );
    }

    // Validate enum values
    const validImpactTypes = ['financial', 'humanCapital', 'operational', 'strategic'];
    const validDeploymentTypes = ['founderContext', 'soloOperatorContext', 'enterpriseContext', 'crossBorderContext'];
    const validLanguages = ['EN', 'ES'];
    const validTemplates = ['basic', 'expanded', 'dashboard', 'social', 'presentation', 'cinematic'];

    if (!validImpactTypes.includes(impact_type)) {
      return c.json(
        { 
          error: `Invalid impact_type. Must be one of: ${validImpactTypes.join(', ')}` 
        },
        { status: 400 }
      );
    }

    if (!validDeploymentTypes.includes(deployment_type)) {
      return c.json(
        { 
          error: `Invalid deployment_type. Must be one of: ${validDeploymentTypes.join(', ')}` 
        },
        { status: 400 }
      );
    }

    if (!validLanguages.includes(language)) {
      return c.json(
        { 
          error: `Invalid language. Must be one of: ${validLanguages.join(', ')}` 
        },
        { status: 400 }
      );
    }

    if (!validTemplates.includes(template)) {
      return c.json(
        { 
          error: `Invalid template. Must be one of: ${validTemplates.join(', ')}` 
        },
        { status: 400 }
      );
    }

    // Generate caption
    const caption = generateCaption(
      metric,
      value,
      module || '',
      impact_type,
      deployment_type,
      language,
      template
    );

    // Log the generation (store in KV for analytics)
    const logEntry = {
      request: { metric, value, module, impact_type, deployment_type, language, template },
      response: { caption },
      timestamp: new Date().toISOString(),
      clientIP,
      requestId: crypto.randomUUID()
    };

    // Store in KV for analytics (fire-and-forget)
    try {
      await kv.set(`caption_log_${logEntry.requestId}`, JSON.stringify(logEntry));
    } catch (kvError) {
      console.log('KV logging failed:', kvError);
      // Don't fail the request if logging fails
    }

    // Return successful response
    return c.json({
      caption,
      metadata: {
        generated_at: new Date().toISOString(),
        language,
        impact_type,
        deployment_type,
        template,
        request_id: logEntry.requestId
      }
    });

  } catch (error) {
    console.log('Caption generation error:', error);
    return c.json(
      { 
        error: "Internal server error during caption generation",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
});

// Batch Caption Generation API
app.post("/make-server-e346ddd7/generate-captions-batch", async (c) => {
  try {
    const clientIP = c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || 'unknown';
    
    // Higher rate limit for batch operations
    if (!checkRateLimit(`batch_${clientIP}`, 5, 60000)) { // 5 batch requests per minute
      return c.json(
        { 
          error: "Rate limit exceeded for batch operations. Maximum 5 batch requests per minute.",
          retryAfter: 60 
        },
        { status: 429 }
      );
    }

    const body = await c.req.json();
    const { requests } = body;

    if (!Array.isArray(requests) || requests.length === 0) {
      return c.json(
        { error: "requests must be a non-empty array" },
        { status: 400 }
      );
    }

    if (requests.length > 10) {
      return c.json(
        { error: "Maximum 10 requests per batch" },
        { status: 400 }
      );
    }

    const results = [];
    const batchId = crypto.randomUUID();

    for (let i = 0; i < requests.length; i++) {
      const req = requests[i];
      const { metric, value, module, impact_type, deployment_type, language = 'EN', template = 'basic' } = req;

      try {
        // Validate each request
        if (!metric || !value || !impact_type || !deployment_type) {
          results.push({
            index: i,
            success: false,
            error: "Missing required fields: metric, value, impact_type, deployment_type"
          });
          continue;
        }

        const caption = generateCaption(
          metric,
          value,
          module || '',
          impact_type,
          deployment_type,
          language,
          template
        );

        results.push({
          index: i,
          success: true,
          caption,
          metadata: {
            generated_at: new Date().toISOString(),
            language,
            impact_type,
            deployment_type,
            template
          }
        });

      } catch (error) {
        results.push({
          index: i,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    // Log batch operation
    try {
      await kv.set(`batch_log_${batchId}`, JSON.stringify({
        batchId,
        requestCount: requests.length,
        successCount: results.filter(r => r.success).length,
        timestamp: new Date().toISOString(),
        clientIP
      }));
    } catch (kvError) {
      console.log('Batch KV logging failed:', kvError);
    }

    return c.json({
      batch_id: batchId,
      total_requests: requests.length,
      successful_requests: results.filter(r => r.success).length,
      results
    });

  } catch (error) {
    console.log('Batch caption generation error:', error);
    return c.json(
      { 
        error: "Internal server error during batch caption generation",
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
});

// Caption Library Info API
app.get("/make-server-e346ddd7/caption-library", (c) => {
  return c.json({
    version: "1.0.0",
    description: "OVERWATCH³ Caption Library - Cinematic taglines for founder-led deployments",
    languages: ["EN", "ES"],
    impact_types: ["financial", "humanCapital", "operational", "strategic"],
    deployment_types: ["founderContext", "soloOperatorContext", "enterpriseContext", "crossBorderContext"],
    templates: ["basic", "expanded", "dashboard", "social", "presentation", "cinematic"],
    total_hooks: Object.values(captionLibrarySeed.captionHooks)
      .reduce((total, category) => total + category.EN.length + category.ES.length, 0),
    total_contexts: Object.values(captionLibrarySeed.contextTaglines)
      .reduce((total, category) => total + category.EN.length + category.ES.length, 0),
    endpoints: {
      generate_single: "POST /make-server-e346ddd7/generate-caption",
      generate_batch: "POST /make-server-e346ddd7/generate-captions-batch",
      library_info: "GET /make-server-e346ddd7/caption-library"
    },
    rate_limits: {
      single_requests: "10 per minute per IP",
      batch_requests: "5 per minute per IP",
      max_batch_size: 10
    }
  });
});

// Usage analytics endpoint (basic)
app.get("/make-server-e346ddd7/caption-analytics", async (c) => {
  try {
    // Simple analytics from KV store
    const logs = await kv.getByPrefix('caption_log_');
    const batchLogs = await kv.getByPrefix('batch_log_');
    
    const totalRequests = logs.length;
    const totalBatches = batchLogs.length;
    
    // Parse recent activity (last 24 hours)
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const recentLogs = logs.filter(log => {
      try {
        const entry = JSON.parse(log);
        return new Date(entry.timestamp).getTime() > oneDayAgo;
      } catch {
        return false;
      }
    });

    return c.json({
      total_requests: totalRequests,
      total_batches: totalBatches,
      requests_24h: recentLogs.length,
      uptime: "Available",
      status: "operational"
    });
    
  } catch (error) {
    console.log('Analytics error:', error);
    return c.json(
      { error: "Unable to fetch analytics" },
      { status: 500 }
    );
  }
});

// Certificate Generation System
interface ModuleData {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  estimatedTime: string;
  steps: Array<{
    id: string;
    trace: string;
    caption: string;
  }>;
}

interface LearnerProfile {
  id: string;
  name: string;
  email?: string;
  preferredLanguage: 'en' | 'es';
  completedModules: string[];
  metrics: {
    totalModulesCompleted: number;
    averageScore: number;
    totalLearningTime: number;
  };
}

interface CompletedOverlay {
  id: string;
  moduleId: string;
  learnerId: string;
  schemaTrace: string;
  completionTime: number;
  score: number;
  feedback?: string;
}

interface CertificateData {
  learnerName: string;
  moduleTitle: string;
  moduleCaption: {
    en: string;
    es: string;
  };
  schemaTrace: string;
  metrics: {
    clarityIndex: string;
    confidenceLift: string;
    executionSpeed: string;
  };
  completionDate: string;
  language: 'en' | 'es';
  certificateId: string;
}

// Certificate utility functions
function calculateImpactMetrics(overlays: CompletedOverlay[]): {
  clarityIndex: string;
  confidenceLift: string;
  executionSpeed: string;
} {
  if (!overlays || overlays.length === 0) {
    return {
      clarityIndex: "3.1x",
      confidenceLift: "2.4x", 
      executionSpeed: "+2.7x"
    };
  }

  const baseMultiplier = 2.0;
  const overlayCount = overlays.length;
  const avgScore = overlays.reduce((sum, o) => sum + o.score, 0) / overlayCount;
  
  const clarityIndex = (baseMultiplier + (avgScore * 0.5) + (overlayCount * 0.2)).toFixed(1);
  const confidenceLift = (baseMultiplier + (avgScore * 0.4) + (overlayCount * 0.1)).toFixed(1);
  const executionSpeed = (baseMultiplier + (avgScore * 0.7) + (overlayCount * 0.5)).toFixed(1);

  return {
    clarityIndex: `${clarityIndex}x`,
    confidenceLift: `${confidenceLift}x`,
    executionSpeed: `+${executionSpeed}x`
  };
}

function getBilingualCaptions(title: string, description: string): {
  en: string;
  es: string;
} {
  return {
    en: `This certifies completion of "${title}" with measurable coaching impact.`,
    es: `Se certifica la finalización de "${title}" con impacto medible de coaching.`
  };
}

async function getModuleById(moduleId: string): Promise<ModuleData | null> {
  try {
    const result = await kv.get(`module:${moduleId}`);
    return result;
  } catch (error) {
    console.log(`Error fetching module ${moduleId}:`, error);
    return null;
  }
}

async function getLearnerProfile(learnerId: string): Promise<LearnerProfile | null> {
  try {
    const result = await kv.get(`learner:${learnerId}`);
    return result;
  } catch (error) {
    console.log(`Error fetching learner ${learnerId}:`, error);
    return null;
  }
}

async function getCompletedOverlays(moduleId: string, learnerId: string): Promise<CompletedOverlay[]> {
  try {
    const result = await kv.getByPrefix(`overlay:${moduleId}:${learnerId}:`);
    return result || [];
  } catch (error) {
    console.log(`Error fetching completed overlays for ${moduleId}:${learnerId}:`, error);
    return [];
  }
}

async function generateCertificate(moduleId: string, learnerId: string): Promise<CertificateData | null> {
  try {
    const module = await getModuleById(moduleId);
    const learner = await getLearnerProfile(learnerId);
    const overlays = await getCompletedOverlays(moduleId, learnerId);

    if (!module || !learner) {
      console.log('Missing required data for certificate generation:', { module: !!module, learner: !!learner });
      return null;
    }

    const schemaTrace = overlays.length > 0 
      ? overlays.map(o => o.schemaTrace).join(' → ')
      : module.steps.map(s => s.trace).join(' → ');
    
    const metrics = calculateImpactMetrics(overlays.length > 0 ? overlays : [
      { id: '1', moduleId, learnerId, schemaTrace: module.steps[0]?.trace || '', completionTime: 100, score: 0.85 },
      { id: '2', moduleId, learnerId, schemaTrace: module.steps[1]?.trace || '', completionTime: 120, score: 0.90 },
      { id: '3', moduleId, learnerId, schemaTrace: module.steps[2]?.trace || '', completionTime: 90, score: 0.88 }
    ]);
    
    const captions = getBilingualCaptions(module.title, module.description);
    const certificateId = crypto.randomUUID();

    const certificate: CertificateData = {
      learnerName: learner.name,
      moduleTitle: module.title,
      moduleCaption: captions,
      schemaTrace,
      metrics,
      completionDate: new Date().toISOString(),
      language: learner.preferredLanguage || 'en',
      certificateId
    };

    // Store the certificate
    await kv.set(`certificate:${certificateId}`, certificate);
    await kv.set(`certificate:learner:${learnerId}:${moduleId}`, certificate);

    console.log(`Certificate generated successfully for ${learnerId}:${moduleId}`);
    return certificate;
  } catch (error) {
    console.log('Error generating certificate:', error);
    return null;
  }
}

// Certificate API Routes

// Module completion endpoint
app.post('/make-server-e346ddd7/modules/:moduleId/complete', async (c) => {
  try {
    const moduleId = c.req.param('moduleId');
    const { learnerId, overlays, completionData } = await c.req.json();

    if (!moduleId || !learnerId) {
      return c.json({ error: 'Missing required parameters: moduleId, learnerId' }, 400);
    }

    console.log(`Processing module completion for ${learnerId}:${moduleId}`);

    // Store completion overlays if provided
    if (overlays && Array.isArray(overlays)) {
      for (const overlay of overlays) {
        const overlayKey = `overlay:${moduleId}:${learnerId}:${overlay.id}`;
        await kv.set(overlayKey, {
          ...overlay,
          moduleId,
          learnerId,
          completedAt: new Date().toISOString()
        });
      }
    }

    // Update learner progress
    const learner = await getLearnerProfile(learnerId);
    if (learner) {
      const updatedLearner = {
        ...learner,
        completedModules: [...(learner.completedModules || []), moduleId].filter((id, index, arr) => arr.indexOf(id) === index),
        metrics: {
          ...learner.metrics,
          totalModulesCompleted: (learner.metrics?.totalModulesCompleted || 0) + 1
        }
      };
      await kv.set(`learner:${learnerId}`, updatedLearner);
    }

    // Generate certificate
    const certificate = await generateCertificate(moduleId, learnerId);

    if (!certificate) {
      return c.json({ error: 'Failed to generate certificate' }, 500);
    }

    return c.json({
      success: true,
      certificate,
      message: 'Module completed and certificate generated successfully'
    });

  } catch (error) {
    console.log('Error completing module:', error);
    return c.json({ error: 'Internal server error during module completion' }, 500);
  }
});

// Get certificate by ID
app.get('/make-server-e346ddd7/certificates/:certificateId', async (c) => {
  try {
    const certificateId = c.req.param('certificateId');
    const certificate = await kv.get(`certificate:${certificateId}`);
    
    if (!certificate) {
      return c.json({ error: 'Certificate not found' }, 404);
    }

    return c.json({ certificate });
  } catch (error) {
    console.log('Error fetching certificate:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get learner certificates
app.get('/make-server-e346ddd7/learners/:learnerId/certificates', async (c) => {
  try {
    const learnerId = c.req.param('learnerId');
    const certificates = await kv.getByPrefix(`certificate:learner:${learnerId}:`);
    
    return c.json({ certificates: certificates || [] });
  } catch (error) {
    console.log('Error fetching learner certificates:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Create or update learner profile
app.post('/make-server-e346ddd7/learners', async (c) => {
  try {
    const learnerData = await c.req.json();
    const learnerId = learnerData.id || crypto.randomUUID();
    
    const learner: LearnerProfile = {
      id: learnerId,
      name: learnerData.name || 'Strategic Leader',
      email: learnerData.email,
      preferredLanguage: learnerData.preferredLanguage || 'en',
      completedModules: learnerData.completedModules || [],
      metrics: {
        totalModulesCompleted: 0,
        averageScore: 0,
        totalLearningTime: 0,
        ...learnerData.metrics
      }
    };

    await kv.set(`learner:${learnerId}`, learner);
    
    return c.json({ success: true, learner });
  } catch (error) {
    console.log('Error creating/updating learner:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Create or update module
app.post('/make-server-e346ddd7/modules', async (c) => {
  try {
    const moduleData = await c.req.json();
    const moduleId = moduleData.id || crypto.randomUUID();
    
    const module: ModuleData = {
      id: moduleId,
      title: moduleData.title || 'Strategic Module',
      description: moduleData.description || 'Strategic learning module',
      category: moduleData.category || 'Foundation',
      difficulty: moduleData.difficulty || 'intermediate',
      estimatedTime: moduleData.estimatedTime || '45min',
      steps: moduleData.steps || []
    };

    await kv.set(`module:${moduleId}`, module);
    
    return c.json({ success: true, module });
  } catch (error) {
    console.log('Error creating/updating module:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get module by ID
app.get('/make-server-e346ddd7/modules/:moduleId', async (c) => {
  try {
    const moduleId = c.req.param('moduleId');
    const module = await getModuleById(moduleId);
    
    if (!module) {
      return c.json({ error: 'Module not found' }, 404);
    }

    return c.json({ module });
  } catch (error) {
    console.log('Error fetching module:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get learner profile
app.get('/make-server-e346ddd7/learners/:learnerId', async (c) => {
  try {
    const learnerId = c.req.param('learnerId');
    const learner = await getLearnerProfile(learnerId);
    
    if (!learner) {
      return c.json({ error: 'Learner not found' }, 404);
    }

    return c.json({ learner });
  } catch (error) {
    console.log('Error fetching learner:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Direct certificate generation endpoint
app.post('/make-server-e346ddd7/certificates/generate', async (c) => {
  try {
    const { moduleId, learnerId } = await c.req.json();

    if (!moduleId || !learnerId) {
      return c.json({ error: 'Missing required parameters: moduleId, learnerId' }, 400);
    }

    const certificate = await generateCertificate(moduleId, learnerId);

    if (!certificate) {
      return c.json({ error: 'Failed to generate certificate' }, 500);
    }

    return c.json({ success: true, certificate });
  } catch (error) {
    console.log('Error generating certificate:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Mount the sequences routes
app.route('/', sequencesApp);

Deno.serve(app.fetch);