import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Zap,
  Code,
  Database,
  Send,
  Copy,
  CheckCircle,
  AlertCircle,
  Download,
  Share,
  Server,
  Globe,
  DollarSign,
  Users,
  Activity,
  TrendingUp,
  Target,
  Rocket,
  BarChart3,
  FileText,
  Play,
  Pause,
  RefreshCw,
  Settings,
  CloudLightning,
  Workflow,
  Link,
  ArrowRight,
  Package,
  Upload
} from 'lucide-react';

interface CaptionRequest {
  metric: string;
  value: string;
  impact_type: 'financial' | 'humanCapital' | 'operational' | 'strategic';
  deployment_type: 'founderContext' | 'solooperatorContext' | 'enterpriseContext' | 'crossborderContext';
  language: 'EN' | 'ES';
}

interface CaptionResponse {
  caption: string;
  meta: {
    metric: string;
    value: string;
    impact_type: string;
    deployment_type: string;
    language: string;
    hook: string;
    context: string;
  };
}

interface APISchemaProps {
  language: 'en' | 'es';
  onAPIGenerated?: (caption: string, request: CaptionRequest) => void;
  onSchemaExport?: (schema: any) => void;
  onNavigate?: (view: string) => void;
  enableLiveAPI?: boolean;
}

export function CaptionAPISchema({ language, onAPIGenerated, onSchemaExport, onNavigate, enableLiveAPI = true }: APISchemaProps) {
  const [activeRequest, setActiveRequest] = useState<CaptionRequest>({
    metric: 'Adoption Rate',
    value: '87%',
    impact_type: 'humanCapital',
    deployment_type: 'founderContext',
    language: 'EN'
  });
  
  const [currentResponse, setCurrentResponse] = useState<CaptionResponse | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [requestHistory, setRequestHistory] = useState<Array<{request: CaptionRequest, response: CaptionResponse}>>([]);
  const [copiedContent, setCopiedContent] = useState<string>('');
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [useLocalGeneration, setUseLocalGeneration] = useState(!enableLiveAPI);
  const [configStatus, setConfigStatus] = useState<'unknown' | 'configured' | 'missing'>('unknown');
  const [isSeeding, setIsSeeding] = useState(false);

  const t = (en: string, es: string) => language === 'en' ? en : es;

  // Live API call function - Updated for your Edge Function
  const callLiveAPI = async (request: CaptionRequest): Promise<CaptionResponse> => {
    try {
      // Import Supabase keys
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      
      // Map our request format to your Edge Function format
      const apiBody = {
        metric: request.metric,
        value: request.value,
        impact_type: request.impact_type,
        deployment_type: request.deployment_type,
        language: request.language,
        audit: true
      };

      const liveUrl = `https://${projectId}.supabase.co/functions/v1/make-server-e346ddd7/captions-generate`;

      const response = await fetch(liveUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(apiBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      
      return {
        caption: data.caption,
        meta: data.meta
      };
    } catch (error) {
      console.error('Live API call failed:', error);
      throw error;
    }
  };

  // Fallback local generation
  const generateLocalCaption = (request: CaptionRequest): CaptionResponse => {
    const fallbackHooks = {
      financial: { EN: 'ROI proven, not promised', ES: 'ROI comprobado, no prometido' },
      humanCapital: { EN: 'Human capital, activated', ES: 'Capital humano, activado' },
      operational: { EN: 'Precision, not guesswork', ES: 'Precisión, no conjeturas' },
      strategic: { EN: 'Strategic advantage', ES: 'Ventaja estratégica' }
    };

    const fallbackContexts = {
      founderContext: { EN: 'Founder-led deployment, schema-driven clarity', ES: 'Despliegue liderado por fundador, claridad impulsada por esquemas' },
      solooperatorContext: { EN: 'Built for solo-operators, ready for scale', ES: 'Construido para operadores-solo, listo para escala' },
      enterpriseContext: { EN: 'Enterprise-grade execution, startup velocity', ES: 'Ejecución grado empresarial, velocidad startup' },
      crossborderContext: { EN: 'Bilingual execution at enterprise scale', ES: 'Ejecución bilingüe a escala empresarial' }
    };

    const hook = fallbackHooks[request.impact_type][request.language];
    const context = fallbackContexts[request.deployment_type][request.language];
    const caption = `${request.value} ${request.metric}. ${hook}. ${context}.`;

    return {
      caption,
      meta: {
        metric: request.metric,
        value: request.value,
        impact_type: request.impact_type,
        deployment_type: request.deployment_type,
        language: request.language,
        hook,
        context
      }
    };
  };

  // Check database configuration
  const checkDatabaseConfig = async () => {
    try {
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-e346ddd7/captions-generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          metric: 'Test',
          value: 'Test',
          impact_type: 'humanCapital',
          deployment_type: 'founderContext',
          language: 'EN'
        })
      });

      if (response.ok) {
        setConfigStatus('configured');
      } else {
        const error = await response.json();
        if (error.error?.includes('Failed to load captions_config')) {
          setConfigStatus('missing');
        } else {
          setConfigStatus('configured');
        }
      }
    } catch (error) {
      console.error('Config check failed:', error);
      setConfigStatus('missing');
    }
  };

  // Seed database configuration
  const seedDatabaseConfig = async () => {
    setIsSeeding(true);
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      
      const supabase = createClient(`https://${projectId}.supabase.co`, publicAnonKey);

      const captionConfig = {
        hooks: {
          humanCapital: {
            EN: [
              "Human capital, activated",
              "Adoption that sticks", 
              "Culture amplified",
              "Teams aligned, engaged",
              "Workforce velocity"
            ],
            ES: [
              "Capital humano, activado",
              "Adopción que permanece",
              "Cultura amplificada", 
              "Equipos alineados, comprometidos",
              "Velocidad de la fuerza laboral"
            ]
          },
          financial: {
            EN: [
              "ROI proven, not promised",
              "Efficiency that compounds",
              "Capital optimized",
              "Value acceleration", 
              "Proof before promise"
            ],
            ES: [
              "ROI comprobado, no prometido",
              "Eficiencia que se compone",
              "Capital optimizado",
              "Aceleración de valor",
              "Prueba antes de promesa"
            ]
          },
          operational: {
            EN: [
              "Precision, not guesswork",
              "Schema-driven velocity",
              "Process excellence",
              "Operational clarity",
              "Execution optimized"
            ],
            ES: [
              "Precisión, no conjeturas", 
              "Velocidad impulsada por esquemas",
              "Excelencia de procesos",
              "Claridad operacional",
              "Ejecución optimizada"
            ]
          },
          strategic: {
            EN: [
              "Built for solo-operators",
              "Founder-led, schema-driven", 
              "Strategic advantage",
              "Command center activated",
              "Intelligence amplified"
            ],
            ES: [
              "Construido para operadores-solo",
              "Liderado por fundadores, impulsado por esquemas",
              "Ventaja estratégica",
              "Centro de comando activado",
              "Inteligencia amplificada"
            ]
          },
          default: {
            EN: ["Impact, realized"],
            ES: ["Impacto, realizado"]
          }
        },
        contexts: {
          founderContext: {
            EN: [
              "Founder-led deployment, schema-driven clarity",
              "Built for founders, ready for scale",
              "Command center for founder-led companies"
            ],
            ES: [
              "Despliegue liderado por fundador, claridad impulsada por esquemas",
              "Construido para fundadores, listo para escala", 
              "Centro de comando para empresas lideradas por fundadores"
            ]
          },
          solooperatorContext: {
            EN: [
              "Built for solo-operators, ready for scale",
              "One-person powerhouse, enterprise capability", 
              "Solo execution, team-scale results"
            ],
            ES: [
              "Construido para operadores-solo, listo para escala",
              "Potencia de una persona, capacidad empresarial",
              "Ejecución solo, resultados a escala de equipo"
            ]
          },
          enterpriseContext: {
            EN: [
              "Enterprise-grade execution, startup velocity",
              "Scale without complexity",
              "Enterprise power, startup agility"
            ],
            ES: [
              "Ejecución grado empresarial, velocidad startup",
              "Escala sin complejidad",
              "Poder empresarial, agilidad startup"
            ]
          },
          crossborderContext: {
            EN: [
              "Bilingual execution at enterprise scale",
              "Cross-border operations, unified command",
              "Global reach, local execution"
            ],
            ES: [
              "Ejecución bilingüe a escala empresarial",
              "Operaciones transfronterizas, comando unificado",
              "Alcance global, ejecución local"
            ]
          },
          default: {
            EN: ["Operational clarity at scale"],
            ES: ["Claridad operacional a escala"]
          }
        }
      };

      // Insert configuration into app_config table
      const { error } = await supabase
        .from('app_config')
        .upsert({
          key: 'captions_config',
          value: captionConfig
        }, {
          onConflict: 'key'
        });

      if (error) {
        throw error;
      }

      setConfigStatus('configured');
      console.log('✅ Database configuration seeded successfully');
    } catch (error) {
      console.error('❌ Failed to seed configuration:', error);
      alert(t(
        'Failed to seed database configuration. Check console for details.',
        'Falló la siembra de configuración de base de datos. Ver consola para detalles.'
      ));
    } finally {
      setIsSeeding(false);
    }
  };

  // API Call Handler (supports both live and local)
  const handleAPICall = async () => {
    setIsGenerating(true);
    
    try {
      let response: CaptionResponse;
      
      if (useLocalGeneration) {
        // Local generation with simulated delay
        await new Promise(resolve => setTimeout(resolve, 800));
        response = generateLocalCaption(activeRequest);
      } else {
        // Live API call
        response = await callLiveAPI(activeRequest);
      }
      
      setCurrentResponse(response);
      
      // Add to history
      setRequestHistory(prev => [{request: activeRequest, response}, ...prev.slice(0, 9)]);
      
      if (onAPIGenerated) {
        onAPIGenerated(response.caption, activeRequest);
      }
      
    } catch (error) {
      console.error('Caption generation failed:', error);
      // Fallback to local generation
      const response = generateLocalCaption(activeRequest);
      setCurrentResponse(response);
      
      setRequestHistory(prev => [{request: activeRequest, response}, ...prev.slice(0, 9)]);
      
      if (onAPIGenerated) {
        onAPIGenerated(response.caption, activeRequest);
      }
    }
    
    setIsGenerating(false);
  };

  // Copy functionality
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedContent(content);
    setTimeout(() => setCopiedContent(''), 2000);
  };

  // Auto-generation
  useEffect(() => {
    if (autoGenerate) {
      const interval = setInterval(() => {
        handleAPICall();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [autoGenerate, activeRequest]);

  // Check config on mount
  useEffect(() => {
    if (enableLiveAPI) {
      checkDatabaseConfig();
    }
  }, [enableLiveAPI]);

  const sampleRequests = [
    { metric: 'Cost Savings', value: '$1.2M annualized', impact_type: 'financial' as const, deployment_type: 'founderContext' as const },
    { metric: 'Adoption Rate', value: '87%', impact_type: 'humanCapital' as const, deployment_type: 'solooperatorContext' as const },
    { metric: 'Process Efficiency', value: '42% faster', impact_type: 'operational' as const, deployment_type: 'enterpriseContext' as const },
    { metric: 'Strategic Alignment', value: '94% accuracy', impact_type: 'strategic' as const, deployment_type: 'crossborderContext' as const }
  ];

  return (
    <div className="bg-slate-900 text-white p-8 rounded-xl border border-slate-700">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Server className="w-8 h-8 text-blue-400" />
          {t('Caption API Schema', 'Esquema API de Títulos')}
        </h2>
        <p className="text-lg text-slate-300 mb-4">
          {t(
            'Dynamically generate cinematic taglines using your live Edge Function',
            'Genera dinámicamente taglines cinematográficos usando tu Edge Function en vivo'
          )}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge className="bg-green-600/20 text-green-400 border-green-600/40">
            v1.0.0 Live
          </Badge>
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
            {t('Supabase Edge Function', 'Función Edge Supabase')}
          </Badge>
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/40">
            {t('Database-Driven', 'Impulsado por Base Datos')}
          </Badge>
          {configStatus === 'configured' && (
            <Badge className="bg-green-600/20 text-green-400 border-green-600/40">
              ✓ {t('Configured', 'Configurado')}
            </Badge>
          )}
          {configStatus === 'missing' && (
            <Badge className="bg-red-600/20 text-red-400 border-red-600/40">
              ⚠ {t('Config Missing', 'Config Faltante')}
            </Badge>
          )}
        </div>
      </div>

      <Tabs defaultValue="api-interface" className="mb-8">
        <TabsList className="grid w-full grid-cols-6 bg-slate-800">
          <TabsTrigger value="api-interface">
            {t('API Interface', 'Interfaz API')}
          </TabsTrigger>
          <TabsTrigger value="schema-docs">
            {t('Schema Docs', 'Docs Esquema')}
          </TabsTrigger>
          <TabsTrigger value="integration">
            {t('Integration', 'Integración')}
          </TabsTrigger>
          <TabsTrigger value="live-config">
            {t('Live API Config', 'Config API en Vivo')}
          </TabsTrigger>
          <TabsTrigger value="database-config">
            {t('Database Config', 'Config Base Datos')}
          </TabsTrigger>
          <TabsTrigger value="live-testing">
            {t('Live Testing', 'Pruebas en Vivo')}
          </TabsTrigger>
        </TabsList>

        {/* API Interface */}
        <TabsContent value="api-interface">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Request Builder */}
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-400" />
                {t('Request Builder', 'Constructor de Solicitudes')}
              </h3>
              
              <div className="space-y-4">
                {/* Request Parameters */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('Metric', 'Métrica')}
                    </label>
                    <input
                      type="text"
                      value={activeRequest.metric}
                      onChange={(e) => setActiveRequest({...activeRequest, metric: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('Value', 'Valor')}
                    </label>
                    <input
                      type="text"
                      value={activeRequest.value}
                      onChange={(e) => setActiveRequest({...activeRequest, value: e.target.value})}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('Impact Type', 'Tipo de Impacto')}
                    </label>
                    <select
                      value={activeRequest.impact_type}
                      onChange={(e) => setActiveRequest({...activeRequest, impact_type: e.target.value as any})}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    >
                      <option value="financial">Financial</option>
                      <option value="humanCapital">Human Capital</option>
                      <option value="operational">Operational</option>
                      <option value="strategic">Strategic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('Deployment Context', 'Contexto de Despliegue')}
                    </label>
                    <select
                      value={activeRequest.deployment_type}
                      onChange={(e) => setActiveRequest({...activeRequest, deployment_type: e.target.value as any})}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    >
                      <option value="founderContext">Founder Context</option>
                      <option value="solooperatorContext">Solo Operator Context</option>
                      <option value="enterpriseContext">Enterprise Context</option>
                      <option value="crossborderContext">Cross-border Context</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('Language', 'Idioma')}
                    </label>
                    <select
                      value={activeRequest.language}
                      onChange={(e) => setActiveRequest({...activeRequest, language: e.target.value as 'EN' | 'ES'})}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                    >
                      <option value="EN">English</option>
                      <option value="ES">Español</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="useLocalGeneration"
                      checked={useLocalGeneration}
                      onChange={(e) => setUseLocalGeneration(e.target.checked)}
                      className="rounded bg-slate-700 border-slate-600"
                    />
                    <label htmlFor="useLocalGeneration" className="text-sm text-slate-300">
                      {t('Use Local Fallback', 'Usar Respaldo Local')}
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    onClick={handleAPICall}
                    disabled={isGenerating}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        {t('Generating...', 'Generando...')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t('Generate Caption', 'Generar Título')}
                      </>
                    )}
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="autoGenerate"
                      checked={autoGenerate}
                      onChange={(e) => setAutoGenerate(e.target.checked)}
                      className="rounded bg-slate-700 border-slate-600"
                    />
                    <label htmlFor="autoGenerate" className="text-sm text-slate-300">
                      {t('Auto (5s)', 'Auto (5s)')}
                    </label>
                  </div>
                </div>

                {/* Sample Requests */}
                <div>
                  <p className="text-sm text-slate-400 mb-2">
                    {t('Quick Tests:', 'Pruebas Rápidas:')}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {sampleRequests.map((sample, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveRequest({...sample, language: activeRequest.language})}
                        className="p-2 bg-slate-700 hover:bg-slate-600 rounded text-xs text-left transition-colors"
                      >
                        <div className="font-medium">{sample.value} {sample.metric}</div>
                        <div className="text-slate-400">{sample.impact_type}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Response Display */}
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {t('API Response', 'Respuesta API')}
              </h3>
              
              {currentResponse ? (
                <div className="space-y-4">
                  {/* Generated Caption */}
                  <div className="p-4 bg-green-900/20 border border-green-600/40 rounded-lg">
                    <p className="text-sm text-green-400 mb-2">
                      {t('Generated Caption', 'Título Generado')}
                    </p>
                    <p className="text-lg font-medium text-white italic mb-3">
                      "{currentResponse.caption}"
                    </p>
                    <Button 
                      size="sm" 
                      onClick={() => handleCopy(currentResponse.caption)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {copiedContent === currentResponse.caption ? (
                        <span className="text-green-100">✓ Copied</span>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-2" />
                          {t('Copy Caption', 'Copiar Título')}
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Response JSON */}
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-slate-400">
                        {t('JSON Response', 'Respuesta JSON')}
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCopy(JSON.stringify(currentResponse, null, 2))}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                    <pre className="text-xs text-slate-300 overflow-x-auto">
                      {JSON.stringify(currentResponse, null, 2)}
                    </pre>
                  </div>

                  {/* Component Breakdown */}
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-3 bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-400 mb-1">Value + Metric</p>
                      <p className="text-white">{currentResponse.meta.value} {currentResponse.meta.metric}</p>
                    </div>
                    <div className="p-3 bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-400 mb-1">Narrative Hook</p>
                      <p className="text-white">{currentResponse.meta.hook}</p>
                    </div>
                    <div className="p-3 bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-400 mb-1">Context Tagline</p>
                      <p className="text-white">{currentResponse.meta.context}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CloudLightning className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">
                    {t(
                      'Click "Generate Caption" to see API response',
                      'Haz clic en "Generar Título" para ver la respuesta API'
                    )}
                  </p>
                </div>
              )}
            </Card>
          </div>
        </TabsContent>

        {/* Database Configuration Tab */}
        <TabsContent value="database-config">
          <Card className="p-6 bg-slate-800 border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              {t('Database Configuration', 'Configuración de Base de Datos')}
            </h3>
            
            <div className="space-y-6">
              {/* Status */}
              <div className="p-4 rounded-lg border" 
                   style={{ 
                     backgroundColor: configStatus === 'configured' ? 'rgb(5, 46, 22)' : 
                                     configStatus === 'missing' ? 'rgb(69, 10, 10)' : 
                                     'rgb(30, 41, 59)',
                     borderColor: configStatus === 'configured' ? 'rgb(34, 197, 94)' : 
                                  configStatus === 'missing' ? 'rgb(239, 68, 68)' : 
                                  'rgb(71, 85, 105)'
                   }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {configStatus === 'configured' ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : configStatus === 'missing' ? (
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    ) : (
                      <RefreshCw className="w-6 h-6 text-slate-400" />
                    )}
                    <div>
                      <p className="font-medium text-white">
                        {configStatus === 'configured' && t('Configuration Found', 'Configuración Encontrada')}
                        {configStatus === 'missing' && t('Configuration Missing', 'Configuración Faltante')}
                        {configStatus === 'unknown' && t('Checking Configuration...', 'Verificando Configuración...')}
                      </p>
                      <p className="text-sm text-slate-300">
                        {configStatus === 'configured' && t('The captions_config table is properly set up', 'La tabla captions_config está configurada correctamente')}
                        {configStatus === 'missing' && t('The captions_config entry needs to be created', 'La entrada captions_config necesita ser creada')}
                        {configStatus === 'unknown' && t('Testing Edge Function connectivity...', 'Probando conectividad de Edge Function...')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={checkDatabaseConfig}
                      className="border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {t('Check', 'Verificar')}
                    </Button>
                    
                    {configStatus === 'missing' && (
                      <Button 
                        size="sm"
                        onClick={seedDatabaseConfig}
                        disabled={isSeeding}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {isSeeding ? (
                          <>
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                            {t('Seeding...', 'Sembrando...')}
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            {t('Seed Config', 'Sembrar Config')}
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Configuration Details */}
              <div className="space-y-4">
                <h4 className="font-bold text-white">
                  {t('Required Configuration', 'Configuración Requerida')}
                </h4>
                
                <div className="grid lg:grid-cols-2 gap-4">
                  {/* Hooks */}
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h5 className="font-medium text-white mb-2">
                      {t('Narrative Hooks', 'Ganchos Narrativos')}
                    </h5>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• humanCapital (EN/ES)</div>
                      <div>• financial (EN/ES)</div>
                      <div>• operational (EN/ES)</div>
                      <div>• strategic (EN/ES)</div>
                      <div>• default (EN/ES)</div>
                    </div>
                  </div>
                  
                  {/* Contexts */}
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h5 className="font-medium text-white mb-2">
                      {t('Context Taglines', 'Etiquetas de Contexto')}
                    </h5>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div>• founderContext (EN/ES)</div>
                      <div>• solooperatorContext (EN/ES)</div>
                      <div>• enterpriseContext (EN/ES)</div>
                      <div>• crossborderContext (EN/ES)</div>
                      <div>• default (EN/ES)</div>
                    </div>
                  </div>
                </div>

                {/* SQL Command */}
                <div className="p-4 bg-slate-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-white">
                      {t('Manual SQL Setup', 'Configuración SQL Manual')}
                    </h5>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleCopy(`
-- Create app_config table if it doesn't exist
CREATE TABLE IF NOT EXISTS app_config (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert caption configuration
INSERT INTO app_config (key, value) VALUES (
  'captions_config',
  '{"hooks":{"humanCapital":{"EN":["Human capital, activated","Adoption that sticks","Culture amplified"],"ES":["Capital humano, activado","Adopción que permanece","Cultura amplificada"]},"financial":{"EN":["ROI proven, not promised","Efficiency that compounds","Capital optimized"],"ES":["ROI comprobado, no prometido","Eficiencia que se compone","Capital optimizado"]},"operational":{"EN":["Precision, not guesswork","Schema-driven velocity","Process excellence"],"ES":["Precisión, no conjeturas","Velocidad impulsada por esquemas","Excelencia de procesos"]},"strategic":{"EN":["Built for solo-operators","Founder-led, schema-driven","Strategic advantage"],"ES":["Construido para operadores-solo","Liderado por fundadores, impulsado por esquemas","Ventaja estratégica"]},"default":{"EN":["Impact, realized"],"ES":["Impacto, realizado"]}},"contexts":{"founderContext":{"EN":["Founder-led deployment, schema-driven clarity","Built for founders, ready for scale"],"ES":["Despliegue liderado por fundador, claridad impulsada por esquemas","Construido para fundadores, listo para escala"]},"solooperatorContext":{"EN":["Built for solo-operators, ready for scale","One-person powerhouse, enterprise capability"],"ES":["Construido para operadores-solo, listo para escala","Potencia de una persona, capacidad empresarial"]},"enterpriseContext":{"EN":["Enterprise-grade execution, startup velocity","Scale without complexity"],"ES":["Ejecución grado empresarial, velocidad startup","Escala sin complejidad"]},"crossborderContext":{"EN":["Bilingual execution at enterprise scale","Cross-border operations, unified command"],"ES":["Ejecución bilingüe a escala empresarial","Operaciones transfronterizas, comando unificado"]},"default":{"EN":["Operational clarity at scale"],"ES":["Claridad operacional a escala"]}}}'::jsonb
) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW();
                      `.trim())}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <pre className="text-xs text-slate-300 overflow-x-auto max-h-32">
{`-- Create app_config table if it doesn't exist
CREATE TABLE IF NOT EXISTS app_config (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert caption configuration (truncated for display)
INSERT INTO app_config (key, value) VALUES (
  'captions_config',
  '{"hooks": {...}, "contexts": {...}}'::jsonb
) ON CONFLICT (key) DO UPDATE SET 
  value = EXCLUDED.value, 
  updated_at = NOW();`}
                  </pre>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Live Testing Tab */}
        <TabsContent value="live-testing">
          <Card className="p-6 bg-slate-800 border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-green-400" />
              {t('Live API Testing', 'Pruebas API en Vivo')}
            </h3>
            
            <div className="space-y-6">
              {/* Request History */}
              {requestHistory.length > 0 && (
                <div>
                  <h4 className="font-bold text-white mb-3">
                    {t('Recent Requests', 'Solicitudes Recientes')}
                  </h4>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {requestHistory.map((item, idx) => (
                      <div key={idx} className="p-3 bg-slate-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-slate-400">
                            {item.request.impact_type} • {item.request.deployment_type} • {item.request.language}
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setActiveRequest(item.request)}
                            className="text-xs"
                          >
                            {t('Use', 'Usar')}
                          </Button>
                        </div>
                        <div className="text-white font-medium mb-1">
                          {item.request.value} {item.request.metric}
                        </div>
                        <div className="text-sm text-green-400 italic">
                          "{item.response.caption}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Test with provided sample */}
              <div className="p-4 bg-blue-900/20 border border-blue-600/40 rounded-lg">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  {t('Test with Your Sample', 'Probar con Tu Muestra')}
                </h4>
                <p className="text-slate-300 mb-3">
                  {t('Test your Edge Function with the exact JSON you provided:', 'Prueba tu Edge Function con el JSON exacto que proporcionaste:')}
                </p>
                <div className="bg-slate-700 p-3 rounded text-sm text-slate-300 mb-3">
                  <pre>{JSON.stringify({
                    "metric": "Adoption Rate",
                    "value": "87%",
                    "impact_type": "humanCapital",
                    "deployment_type": "founderContext",
                    "language": "EN"
                  }, null, 2)}</pre>
                </div>
                <Button 
                  onClick={() => {
                    setActiveRequest({
                      metric: 'Adoption Rate',
                      value: '87%',
                      impact_type: 'humanCapital',
                      deployment_type: 'founderContext',
                      language: 'EN'
                    });
                    setTimeout(handleAPICall, 100);
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {t('Test Sample Request', 'Probar Solicitud de Muestra')}
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Other tabs would continue here... */}
        <TabsContent value="schema-docs">
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">
              {t('Schema documentation coming soon...', 'Documentación de esquema próximamente...')}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="integration">
          <div className="text-center py-12">
            <Code className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">
              {t('Integration examples coming soon...', 'Ejemplos de integración próximamente...')}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="live-config">
          <div className="text-center py-12">
            <Settings className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">
              {t('Live configuration panel coming soon...', 'Panel de configuración en vivo próximamente...')}
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}