import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ArrowRight, 
  Download, 
  Share, 
  Copy, 
  Play, 
  Pause,
  RotateCcw,
  Maximize,
  Globe,
  Zap,
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  FileText,
  Slack,
  HelpCircle
} from 'lucide-react';

interface SnapshotData {
  founderName: string;
  company: string;
  deploymentDate: Date;
  modules: string[];
  language: 'en' | 'es' | 'both';
  metrics: {
    costSavings: number;
    revenueLift: number;
    adoption: number;
    engagement: number;
  };
  beforeState: {
    tools: string[];
    painPoints: string[];
    efficiency: number;
  };
  afterState: {
    features: string[];
    improvements: string[];
    efficiency: number;
  };
}

interface SnapshotProps {
  data: SnapshotData;
  language: 'en' | 'es';
  animated?: boolean;
  exportFormat?: 'figma' | 'notion' | 'linkedin' | 'pdf';
  onExport?: (format: string, data: any) => void;
}

export function VisualDashboardSnapshot({ 
  data, 
  language, 
  animated = true,
  exportFormat = 'figma',
  onExport 
}: SnapshotProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);
  const [copiedContent, setCopiedContent] = useState('');

  const t = (en: string, es: string) => language === 'en' ? en : es;

  // Animation sequence
  useEffect(() => {
    if (animated && isAnimating) {
      const interval = setInterval(() => {
        setCurrentFrame(prev => {
          if (prev >= 3) {
            setIsAnimating(false);
            setShowMetrics(true);
            return 3;
          }
          return prev + 1;
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [animated, isAnimating]);

  // Before state tools and issues
  const beforeTools = [
    { name: 'Excel', icon: '📊', status: 'manual' },
    { name: 'Slack', icon: '💬', status: 'disconnected' },
    { name: 'Salesforce', icon: '☁️', status: 'siloed' },
    { name: 'QuickBooks', icon: '💰', status: 'separate' },
    { name: 'BambooHR', icon: '👥', status: 'limited' }
  ];

  const afterFeatures = [
    { name: t('Bilingual Toggle', 'Alternador Bilingüe'), icon: <Globe className="w-4 h-4" />, status: 'active' },
    { name: t('Real-time KPIs', 'KPIs Tiempo Real'), icon: <BarChart3 className="w-4 h-4" />, status: 'live' },
    { name: t('Schema-driven', 'Impulsado por Esquemas'), icon: <Zap className="w-4 h-4" />, status: 'automated' },
    { name: t('ROI Proof Engine', 'Motor Prueba ROI'), icon: <TrendingUp className="w-4 h-4" />, status: 'proven' },
    { name: t('Coaching Overlays', 'Overlays de Coaching'), icon: <CheckCircle className="w-4 h-4" />, status: 'guided' }
  ];

  const formatCurrency = (amount: number) => `$${(amount / 1000000).toFixed(1)}M`;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'manual': case 'disconnected': case 'siloed': case 'separate': case 'limited':
        return 'text-red-400 bg-red-900/20';
      case 'active': case 'live': case 'automated': case 'proven': case 'guided':
        return 'text-green-400 bg-green-900/20';
      default:
        return 'text-slate-400 bg-slate-900/20';
    }
  };

  const generateCaption = (metric: string, value: number | string) => {
    const hooks = {
      costSavings: t('Efficiency that compounds', 'Eficiencia que se compone'),
      revenueLift: t('Proof before promise', 'Prueba antes de promesa'),
      adoption: t('Human capital, activated', 'Capital humano, activado'),
      engagement: t('Built for operators', 'Construido para operadores')
    };

    const contextTags = [
      t('Founder-led deployment', 'Despliegue liderado por fundador'),
      t('Schema-driven clarity', 'Claridad impulsada por esquemas'),
      t('Bilingual execution at enterprise scale', 'Ejecución bilingüe a escala empresarial')
    ];

    const hook = hooks[metric as keyof typeof hooks] || t('Cinematic impact', 'Impacto cinematográfico');
    const context = contextTags[Math.floor(Math.random() * contextTags.length)];
    
    return `${value}. ${hook}. ${context}.`;
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedContent(content);
    setTimeout(() => setCopiedContent(''), 2000);
  };

  const handleExport = (format: string) => {
    const exportData = {
      snapshot: data,
      format,
      captions: {
        costSavings: generateCaption('costSavings', formatCurrency(data.metrics.costSavings)),
        revenueLift: generateCaption('revenueLift', formatCurrency(data.metrics.revenueLift)),
        adoption: generateCaption('adoption', `${data.metrics.adoption}%`),
        engagement: generateCaption('engagement', `${data.metrics.engagement}%`)
      },
      timestamp: new Date().toISOString()
    };

    if (onExport) {
      onExport(format, exportData);
    }

    // Mock export notification
    alert(t(
      `Exported to ${format.toUpperCase()} format`,
      `Exportado a formato ${format.toUpperCase()}`
    ));
  };

  return (
    <div className="bg-slate-900 text-white p-8 rounded-xl border border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {t('Visual Dashboard Snapshot', 'Instantánea Dashboard Visual')}
          </h2>
          <p className="text-slate-300">
            {data.founderName} • {data.company} • {data.deploymentDate.toLocaleDateString()}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Language Badge */}
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/40">
            {data.language === 'both' ? 'EN ↔ ES' : data.language.toUpperCase()}
          </Badge>
          
          {/* Animation Controls */}
          {animated && (
            <Button
              onClick={() => {
                setIsAnimating(!isAnimating);
                if (!isAnimating) {
                  setCurrentFrame(0);
                  setShowMetrics(false);
                }
              }}
              variant="outline"
              size="sm"
            >
              {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          )}
          
          <Button
            onClick={() => {
              setCurrentFrame(0);
              setShowMetrics(false);
              setIsAnimating(false);
            }}
            variant="outline"
            size="sm"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Before → After Comparison */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Before Panel */}
        <Card className={`p-6 bg-red-900/10 border-red-600/30 transition-all duration-500 ${
          currentFrame >= 1 ? 'opacity-100' : 'opacity-50'
        }`}>
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-red-400 mb-2">
              {t('Before OVERWATCH³', 'Antes de OVERWATCH³')}
            </h3>
            <p className="text-slate-400">
              {t('Chaos, duct-taped tools, no proof', 'Caos, herramientas improvisadas, sin prueba')}
            </p>
          </div>

          {/* Fragmented Tools */}
          <div className="space-y-3 mb-6">
            {beforeTools.map((tool, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-3 bg-slate-800 rounded-lg transition-all duration-300 ${
                  currentFrame >= 1 ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-60'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-xl">{tool.icon}</span>
                <div className="flex-1">
                  <span className="text-white font-medium">{tool.name}</span>
                  <Badge className={`ml-2 text-xs ${getStatusColor(tool.status)}`}>
                    {tool.status}
                  </Badge>
                </div>
                <AlertTriangle className="w-4 h-4 text-red-400" />
              </div>
            ))}
          </div>

          {/* Before Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">{t('Efficiency', 'Eficiencia')}</p>
              <p className="text-xl font-bold text-red-400">{data.beforeState.efficiency}%</p>
            </div>
            <div className="text-center p-3 bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">{t('Visibility', 'Visibilidad')}</p>
              <p className="text-xl font-bold text-red-400">
                {t('Limited', 'Limitada')}
              </p>
            </div>
          </div>
        </Card>

        {/* Arrow */}
        <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-10">
          <div className={`w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center transition-all duration-500 ${
            currentFrame >= 2 ? 'scale-110 shadow-lg shadow-blue-500/50' : 'scale-100'
          }`}>
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* After Panel */}
        <Card className={`p-6 bg-green-900/10 border-green-600/30 transition-all duration-500 ${
          currentFrame >= 2 ? 'opacity-100' : 'opacity-50'
        }`}>
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-green-400 mb-2">
              {t('After OVERWATCH³ Command Center', 'Después del Centro de Comando OVERWATCH³')}
            </h3>
            <p className="text-slate-400">
              {t('Clarity, modular execution, ROI proven live', 'Claridad, ejecución modular, ROI probado en vivo')}
            </p>
          </div>

          {/* Unified Features */}
          <div className="space-y-3 mb-6">
            {afterFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-3 bg-slate-800 rounded-lg transition-all duration-300 ${
                  currentFrame >= 2 ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-60'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <span className="text-white font-medium">{feature.name}</span>
                  <Badge className={`ml-2 text-xs ${getStatusColor(feature.status)}`}>
                    {feature.status}
                  </Badge>
                </div>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
            ))}
          </div>

          {/* After Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">{t('Efficiency', 'Eficiencia')}</p>
              <p className="text-xl font-bold text-green-400">{data.afterState.efficiency}%</p>
            </div>
            <div className="text-center p-3 bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-400">{t('Visibility', 'Visibilidad')}</p>
              <p className="text-xl font-bold text-green-400">
                {t('Real-time', 'Tiempo Real')}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* ROI Impact Metrics */}
      {(showMetrics || currentFrame >= 3) && (
        <div className={`transition-all duration-1000 ${
          showMetrics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t('Cinematic ROI Impact', 'Impacto ROI Cinematográfico')}
            </h3>
            <p className="text-slate-300">
              {t('Every metric traceable. Every overlay bilingual. ROI proven, not promised.', 
                 'Cada métrica rastreable. Cada overlay bilingüe. ROI probado, no prometido.')}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-4 mb-6">
            {[
              { 
                key: 'costSavings', 
                label: t('Cost Savings', 'Ahorro Costos'), 
                value: formatCurrency(data.metrics.costSavings),
                icon: DollarSign,
                color: 'green'
              },
              { 
                key: 'revenueLift', 
                label: t('Revenue Lift', 'Incremento Ingresos'), 
                value: formatCurrency(data.metrics.revenueLift),
                icon: TrendingUp,
                color: 'blue'
              },
              { 
                key: 'adoption', 
                label: t('Adoption Rate', 'Tasa Adopción'), 
                value: `${data.metrics.adoption}%`,
                icon: Users,
                color: 'purple'
              },
              { 
                key: 'engagement', 
                label: t('Engagement Score', 'Puntaje Compromiso'), 
                value: `${data.metrics.engagement}%`,
                icon: Activity,
                color: 'yellow'
              }
            ].map((metric, index) => {
              const Icon = metric.icon;
              const caption = generateCaption(metric.key, metric.value);
              
              return (
                <Card 
                  key={metric.key}
                  className={`p-4 bg-${metric.color}-900/20 border-${metric.color}-600/40 hover:scale-105 transition-transform cursor-pointer`}
                  onClick={() => handleCopy(caption)}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 bg-${metric.color}-600 rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-slate-400 mb-1">{metric.label}</p>
                    <p className={`text-2xl font-bold text-${metric.color}-400 mb-2`}>
                      {metric.value}
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      {copiedContent === caption ? '✓ Copied' : 'Click to copy caption'}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Founder Quote */}
      <Card className="p-6 bg-slate-800 border-slate-700 mb-6">
        <div className="text-center">
          <p className="text-lg italic text-white mb-4">
            "{t(
              'OVERWATCH³ let me deploy solo, prove impact fast, and convert metrics into investor-grade proof. It\'s not just a platform—it\'s a Command Center for founders.',
              'OVERWATCH³ me permitió desplegar solo, probar impacto rápido, y convertir métricas en prueba grado inversionista. No es solo una plataforma—es un Centro de Comando para fundadores.'
            )}"
          </p>
          <p className="text-slate-400">— {data.founderName}</p>
        </div>
      </Card>

      {/* Export Options */}
      <div className="flex flex-wrap gap-3 justify-center">
        {['figma', 'notion', 'linkedin', 'pdf'].map((format) => (
          <Button
            key={format}
            onClick={() => handleExport(format)}
            variant="outline"
            size="sm"
            className="capitalize"
          >
            {format === 'figma' && <Maximize className="w-4 h-4 mr-2" />}
            {format === 'notion' && <FileText className="w-4 h-4 mr-2" />}
            {format === 'linkedin' && <Share className="w-4 h-4 mr-2" />}
            {format === 'pdf' && <Download className="w-4 h-4 mr-2" />}
            {t(`Export to ${format}`, `Exportar a ${format}`)}
          </Button>
        ))}
      </div>
    </div>
  );
}