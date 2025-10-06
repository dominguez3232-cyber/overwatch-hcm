import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Copy,
  RefreshCw,
  Download,
  Share,
  Wand2,
  Zap,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  Globe,
  Rocket,
  Award,
  CheckCircle,
  Lightbulb,
  BarChart3
} from 'lucide-react';

interface CaptionFormula {
  metricPhrase: string;
  narrativeHook: string;
  contextTag?: string;
}

interface CaptionLibrary {
  speed: string[];
  accuracy: string[];
  engagement: string[];
  financial: string[];
  founderFirst: string[];
  bilingual: string[];
}

interface ModularCaptionProps {
  language: 'en' | 'es';
  onCaptionGenerated?: (caption: string, type: string) => void;
  onNavigate?: (view: string) => void;
}

export function ModularCaptionSystem({ language, onCaptionGenerated, onNavigate }: ModularCaptionProps) {
  const [selectedMetric, setSelectedMetric] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('financial');
  const [generatedCaption, setGeneratedCaption] = useState<string>('');
  const [captionHistory, setCaptionHistory] = useState<string[]>([]);
  const [copiedCaption, setCopiedCaption] = useState<string>('');
  const [autoGenerate, setAutoGenerate] = useState(false);

  const t = (en: string, es: string) => language === 'en' ? en : es;

  // Caption Library - Reusable Hooks
  const captionLibrary: Record<string, Record<string, string[]>> = {
    en: {
      speed: [
        "Activated at cinematic speed",
        "Decisions in days, not quarters",
        "Schema-driven velocity",
        "Real-time execution",
        "Instant deployment clarity"
      ],
      accuracy: [
        "Precision, not guesswork",
        "Traceable, auditable, bilingual",
        "Schema-verified accuracy",
        "Every metric proven",
        "Data-driven certainty"
      ],
      engagement: [
        "Human capital, activated",
        "Adoption that sticks",
        "Culture amplified",
        "Teams aligned, engaged",
        "Workforce velocity"
      ],
      financial: [
        "Proof before promise",
        "Efficiency that compounds",
        "ROI proven live",
        "Capital optimized",
        "Value acceleration"
      ],
      founderFirst: [
        "Built for solo-operators",
        "Founder-led, schema-driven",
        "From startup to scale",
        "Solo execution, enterprise results",
        "Founder velocity"
      ],
      bilingual: [
        "One click. Two languages. Infinite markets.",
        "Global scale, local precision",
        "Cross-border excellence",
        "Bilingual by design",
        "EN ↔ ES native"
      ]
    },
    es: {
      speed: [
        "Activado a velocidad cinematográfica",
        "Decisiones en días, no trimestres",
        "Velocidad impulsada por esquemas",
        "Ejecución en tiempo real",
        "Claridad de despliegue instantáneo"
      ],
      accuracy: [
        "Precisión, no conjeturas",
        "Rastreable, auditable, bilingüe",
        "Precisión verificada por esquemas",
        "Cada métrica probada",
        "Certeza basada en datos"
      ],
      engagement: [
        "Capital humano, activado",
        "Adopción que permanece",
        "Cultura amplificada",
        "Equipos alineados, comprometidos",
        "Velocidad de la fuerza laboral"
      ],
      financial: [
        "Prueba antes de promesa",
        "Eficiencia que se compone",
        "ROI probado en vivo",
        "Capital optimizado",
        "Aceleración de valor"
      ],
      founderFirst: [
        "Construido para operadores-solo",
        "Liderado por fundadores, impulsado por esquemas",
        "De startup a escala",
        "Ejecución solo, resultados empresariales",
        "Velocidad del fundador"
      ],
      bilingual: [
        "Un clic. Dos idiomas. Mercados infinitos.",
        "Escala global, precisión local",
        "Excelencia transfronteriza",
        "Bilingüe por diseño",
        "EN ↔ ES nativo"
      ]
    }
  };

  // Context Tags
  const contextTags = {
    en: [
      "Founder-led deployment, schema-driven clarity",
      "Bilingual execution at enterprise scale",
      "Solo-operator validation",
      "Built founder-first, ready for enterprise",
      "Cross-border operational excellence",
      "Schema-to-scale velocity"
    ],
    es: [
      "Despliegue liderado por fundador, claridad impulsada por esquemas",
      "Ejecución bilingüe a escala empresarial",
      "Validación operador-solo",
      "Construido fundador-primero, listo para empresa",
      "Excelencia operacional transfronteriza",
      "Velocidad esquema-a-escala"
    ]
  };

  // Sample metrics for demonstration
  const sampleMetrics = [
    { value: '$1.2M', type: 'costSavings', category: 'financial' },
    { value: '$3.4M', type: 'revenueLift', category: 'financial' },
    { value: '87%', type: 'adoption', category: 'engagement' },
    { value: '92%', type: 'engagement', category: 'engagement' },
    { value: '42%', type: 'speedIncrease', category: 'speed' },
    { value: '27%', type: 'efficiency', category: 'accuracy' },
    { value: '18%', type: 'compliance', category: 'accuracy' },
    { value: '94%', type: 'accuracy', category: 'accuracy' }
  ];

  // Generate caption using formula
  const generateCaption = (
    metricValue: string, 
    metricType: string, 
    category: string,
    includeContext: boolean = true
  ): string => {
    const hooks = captionLibrary[language][category];
    const contexts = contextTags[language];
    
    if (!hooks || hooks.length === 0) return '';
    
    const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
    const randomContext = contexts[Math.floor(Math.random() * contexts.length)];
    
    let caption = `${metricValue}. ${randomHook}.`;
    
    if (includeContext) {
      caption += ` ${randomContext}.`;
    }
    
    return caption;
  };

  // Auto-generate captions for all metrics
  const autoGenerateAll = () => {
    const generated = sampleMetrics.map(metric => 
      generateCaption(metric.value, metric.type, metric.category, true)
    );
    setCaptionHistory(generated);
  };

  // Handle copy to clipboard
  const handleCopy = (caption: string) => {
    navigator.clipboard.writeText(caption);
    setCopiedCaption(caption);
    setTimeout(() => setCopiedCaption(''), 2000);
    
    if (onCaptionGenerated) {
      onCaptionGenerated(caption, selectedCategory);
    }
  };

  // Generate single caption
  const handleGenerate = () => {
    if (!selectedMetric) return;
    
    const metric = sampleMetrics.find(m => m.type === selectedMetric);
    if (!metric) return;
    
    const caption = generateCaption(metric.value, metric.type, selectedCategory, true);
    setGeneratedCaption(caption);
    
    // Add to history
    setCaptionHistory(prev => [caption, ...prev.slice(0, 9)]);
  };

  // Export caption library
  const handleExport = (format: 'json' | 'csv' | 'txt') => {
    const data = {
      library: captionLibrary[language],
      contextTags: contextTags[language],
      sampleCaptions: captionHistory,
      timestamp: new Date().toISOString()
    };
    
    let content = '';
    switch (format) {
      case 'json':
        content = JSON.stringify(data, null, 2);
        break;
      case 'csv':
        content = captionHistory.join('\n');
        break;
      case 'txt':
        content = captionHistory.join('\n\n');
        break;
    }
    
    // Mock download
    alert(t(
      `Caption library exported as ${format.toUpperCase()}`,
      `Biblioteca de títulos exportada como ${format.toUpperCase()}`
    ));
  };

  useEffect(() => {
    if (autoGenerate) {
      const interval = setInterval(() => {
        const randomMetric = sampleMetrics[Math.floor(Math.random() * sampleMetrics.length)];
        const caption = generateCaption(randomMetric.value, randomMetric.type, randomMetric.category, true);
        setGeneratedCaption(caption);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [autoGenerate, language, selectedCategory]);

  return (
    <div className="bg-slate-900 text-white p-8 rounded-xl border border-slate-700">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Wand2 className="w-8 h-8 text-purple-400" />
          {t('Modular Caption System', 'Sistema de Títulos Modulares')}
        </h2>
        <p className="text-lg text-slate-300 mb-6">
          {t(
            'Auto-generate cinematic taglines for any metric, module, or founder-led deployment',
            'Auto-genera taglines cinematográficos para cualquier métrica, módulo, o despliegue liderado por fundador'
          )}
        </p>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
        <TabsList className="grid w-full grid-cols-6 bg-slate-800">
          {Object.keys(captionLibrary[language]).map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(captionLibrary[language]).map(([category, hooks]) => (
          <TabsContent key={category} value={category}>
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 capitalize flex items-center gap-2">
                {category === 'speed' && <Zap className="w-5 h-5 text-yellow-400" />}
                {category === 'accuracy' && <Target className="w-5 h-5 text-blue-400" />}
                {category === 'engagement' && <Users className="w-5 h-5 text-green-400" />}
                {category === 'financial' && <DollarSign className="w-5 h-5 text-purple-400" />}
                {category === 'founderFirst' && <Rocket className="w-5 h-5 text-orange-400" />}
                {category === 'bilingual' && <Globe className="w-5 h-5 text-cyan-400" />}
                {t(`${category} Hooks`, `Ganchos ${category}`)}
              </h3>
              <div className="grid lg:grid-cols-2 gap-3">
                {hooks.map((hook, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 cursor-pointer transition-colors"
                    onClick={() => handleCopy(hook)}
                  >
                    <p className="text-white font-medium">"{hook}"</p>
                    {copiedCaption === hook && (
                      <p className="text-green-400 text-xs mt-1">✓ Copied to clipboard</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Caption Generator */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Generator Controls */}
        <Card className="p-6 bg-slate-800 border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            {t('Caption Generator', 'Generador de Títulos')}
          </h3>
          
          {/* Metric Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t('Select Metric', 'Seleccionar Métrica')}
            </label>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
            >
              <option value="">{t('Choose a metric...', 'Elegir una métrica...')}</option>
              {sampleMetrics.map((metric) => (
                <option key={metric.type} value={metric.type}>
                  {metric.value} - {metric.type}
                </option>
              ))}
            </select>
          </div>

          {/* Generate Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleGenerate}
              disabled={!selectedMetric}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              {t('Generate Caption', 'Generar Título')}
            </Button>
            
            <Button 
              onClick={autoGenerateAll}
              variant="outline"
              className="w-full"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              {t('Generate All', 'Generar Todos')}
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
                {t('Auto-generate every 3 seconds', 'Auto-generar cada 3 segundos')}
              </label>
            </div>
          </div>
        </Card>

        {/* Generated Caption */}
        <Card className="p-6 bg-slate-800 border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            {t('Generated Caption', 'Título Generado')}
          </h3>
          
          {generatedCaption ? (
            <div className="space-y-4">
              <div className="p-4 bg-slate-700 rounded-lg border-l-4 border-purple-500">
                <p className="text-lg text-white font-medium italic">
                  "{generatedCaption}"
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleCopy(generatedCaption)}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copiedCaption === generatedCaption ? t('Copied!', '¡Copiado!') : t('Copy', 'Copiar')}
                </Button>
                
                <Button 
                  onClick={handleGenerate}
                  size="sm"
                  variant="outline"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {t('Regenerate', 'Regenerar')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Lightbulb className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">
                {t(
                  'Select a metric and click Generate to create your cinematic caption',
                  'Selecciona una métrica y haz clic en Generar para crear tu título cinematográfico'
                )}
              </p>
            </div>
          )}
        </Card>
      </div>

      {/* Caption History */}
      {captionHistory.length > 0 && (
        <Card className="p-6 bg-slate-800 border-slate-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            {t('Caption History', 'Historial de Títulos')} ({captionHistory.length})
          </h3>
          
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {captionHistory.map((caption, index) => (
              <div 
                key={index}
                className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 cursor-pointer transition-colors flex items-center justify-between"
                onClick={() => handleCopy(caption)}
              >
                <p className="text-white flex-1 mr-4">"{caption}"</p>
                <div className="flex items-center gap-2">
                  {copiedCaption === caption ? (
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/40">
                      ✓ Copied
                    </Badge>
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Export Options */}
      <div className="flex flex-wrap gap-3 justify-center">
        <h4 className="w-full text-center text-lg font-bold text-white mb-2">
          {t('Export Caption Library', 'Exportar Biblioteca de Títulos')}
        </h4>
        
        {['json', 'csv', 'txt'].map((format) => (
          <Button
            key={format}
            onClick={() => handleExport(format as 'json' | 'csv' | 'txt')}
            variant="outline"
            size="sm"
            className="uppercase"
          >
            {format === 'json' && <Download className="w-4 h-4 mr-2" />}
            {format === 'csv' && <BarChart3 className="w-4 h-4 mr-2" />}
            {format === 'txt' && <FileText className="w-4 h-4 mr-2" />}
            {format}
          </Button>
        ))}
        
        <Button
          onClick={() => {
            const allCaptions = captionHistory.join('\n\n');
            handleCopy(allCaptions);
          }}
          variant="outline"
          size="sm"
        >
          <Share className="w-4 h-4 mr-2" />
          {t('Copy All', 'Copiar Todos')}
        </Button>
        
        {onNavigate && (
          <Button
            onClick={() => onNavigate('caption-api')}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Server className="w-4 h-4 mr-2" />
            {t('API Schema', 'Esquema API')}
          </Button>
        )}
      </div>

      {/* Formula Reference */}
      <Card className="mt-6 p-4 bg-slate-800/50 border-slate-600">
        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
          <Target className="w-4 h-4 text-blue-400" />
          {t('Caption Formula', 'Fórmula de Título')}
        </h4>
        <p className="text-slate-300 text-sm font-mono">
          [Metric Impact Phrase] + [Narrative Hook] + [Optional Context Tagline]
        </p>
        <p className="text-slate-400 text-xs mt-2">
          {t(
            'Example: "$3.4M projected lift. ROI proven, not promised. Founder-led deployment, schema-driven clarity."',
            'Ejemplo: "$3.4M incremento proyectado. ROI probado, no prometido. Despliegue liderado por fundador, claridad impulsada por esquemas."'
          )}
        </p>
      </Card>
    </div>
  );
}

// Import fix
import { FileText, Server } from 'lucide-react';