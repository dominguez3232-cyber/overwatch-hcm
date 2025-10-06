import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { VoiceSynthesisEngine } from './VoiceSynthesisEngine';
import { 
  Brain, 
  Target, 
  Lightbulb, 
  Code, 
  Globe, 
  Volume2, 
  Download, 
  X, 
  ChevronRight,
  Eye,
  Sidebar,
  Play,
  Pause
} from 'lucide-react';

interface OverlayConfig {
  overlay_enabled: boolean;
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: 'ERP' | 'EPM' | 'HCM' | 'CRM';
  metric: string;
  language: 'EN' | 'ES';
  guidance_level: 'Strategic' | 'Tactical' | 'Operational';
}

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

interface InteractiveCoachingOverlayProps {
  config: OverlayConfig;
  content: OverlayContent;
  mode: 'hover' | 'sidebar' | 'voiceover' | 'snapshot';
  target?: React.RefObject<HTMLElement>;
  position?: 'top' | 'bottom' | 'left' | 'right';
  onClose?: () => void;
  onExport?: (format: 'json' | 'pdf' | 'png') => void;
  children?: React.ReactNode;
  className?: string;
}

export function InteractiveCoachingOverlay({
  config,
  content,
  mode = 'hover',
  target,
  position = 'top',
  onClose,
  onExport,
  children,
  className = ""
}: InteractiveCoachingOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'es'>(config.language.toLowerCase() as 'en' | 'es');
  const overlayRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-show overlay when enabled
  useEffect(() => {
    if (config.overlay_enabled && mode !== 'hover') {
      setIsVisible(true);
    }
  }, [config.overlay_enabled, mode]);

  // Handle voiceover playback
  const handleVoiceoverToggle = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      // In a real implementation, this would use text-to-speech API
      console.log('Playing voiceover:', content.voiceoverScript?.[currentLanguage]);
      setIsPlaying(true);
      // Simulate audio duration
      setTimeout(() => setIsPlaying(false), 10000);
    }
  };

  // Get content in current language
  const getContent = (field: keyof Pick<OverlayContent, 'metricContext' | 'strategicGuidance' | 'tacticalTip'>) => {
    return content[field][currentLanguage];
  };

  const getVoiceoverContent = () => {
    return content.voiceoverScript?.[currentLanguage] || '';
  };

  // Handle export functionality
  const handleExport = (format: 'json' | 'pdf' | 'png') => {
    const exportData = {
      config,
      content: {
        metricContext: getContent('metricContext'),
        strategicGuidance: getContent('strategicGuidance'),
        tacticalTip: getContent('tacticalTip'),
        schemaTrace: content.schemaTrace
      },
      timestamp: new Date().toISOString(),
      stakeholder: config.stakeholder,
      module: config.module,
      metric: config.metric
    };
    
    onExport?.(format);
    console.log(`Exporting overlay to ${format}:`, exportData);
  };

  // Render visual cue for target element
  const renderVisualCue = () => {
    if (!target?.current || mode === 'sidebar') return null;

    const cueClass = {
      pulse: 'animate-pulse',
      highlight: 'ring-2 ring-offset-2',
      glow: 'shadow-lg'
    }[content.visualCue.type];

    return (
      <div 
        className={`absolute pointer-events-none ${cueClass}`}
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderColor: content.visualCue.color,
          boxShadow: content.visualCue.type === 'glow' ? `0 0 20px ${content.visualCue.color}` : undefined
        }}
      />
    );
  };

  // Hover mode overlay
  if (mode === 'hover') {
    return (
      <div 
        className={`relative group ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {renderVisualCue()}
        
        {isVisible && (
          <div className={`absolute z-50 w-80 ${position === 'top' ? 'bottom-full mb-2' : position === 'bottom' ? 'top-full mt-2' : position === 'left' ? 'right-full mr-2' : 'left-full ml-2'}`}>
            <Card className="bg-card/95 backdrop-blur-sm border-border shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    <Brain className="w-3 h-3 mr-1" />
                    {config.stakeholder} {currentLanguage === 'en' ? 'Insight' : 'Perspectiva'}
                  </Badge>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en')}
                      className="text-xs bg-secondary px-2 py-1 rounded hover:bg-accent transition-colors"
                    >
                      <Globe className="w-3 h-3 mr-1 inline" />
                      {currentLanguage.toUpperCase()}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-orange-400" />
                      <span className="text-sm font-medium text-orange-400">
                        {currentLanguage === 'en' ? 'Context' : 'Contexto'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{getContent('metricContext')}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Brain className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium text-purple-400">
                        {currentLanguage === 'en' ? 'Strategic' : 'Estratégico'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{getContent('strategicGuidance')}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-green-400">
                        {currentLanguage === 'en' ? 'Action' : 'Acción'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{getContent('tacticalTip')}</p>
                  </div>

                  <div className="border-t border-border pt-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Code className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-blue-400">Schema</span>
                    </div>
                    <code className="text-xs bg-secondary/50 px-2 py-1 rounded text-muted-foreground">
                      {content.schemaTrace}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }

  // Sidebar mode overlay
  if (mode === 'sidebar') {
    return (
      <div className={`fixed right-0 top-0 h-full w-96 bg-card/95 backdrop-blur-sm border-l border-border z-50 transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'} ${className}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  {currentLanguage === 'en' ? 'Strategic Coach' : 'Coach Estratégico'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {config.stakeholder} • {config.module} • {config.metric}
                </p>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-6">
            {/* Language Toggle */}
            <div className="flex gap-2">
              <Button
                variant={currentLanguage === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentLanguage('en')}
                className="flex-1"
              >
                English
              </Button>
              <Button
                variant={currentLanguage === 'es' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentLanguage('es')}
                className="flex-1"
              >
                Español
              </Button>
            </div>

            {/* Guidance Sections */}
            <div className="space-y-4">
              <Card className="bg-orange-500/10 border-orange-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-orange-400" />
                    <h4 className="font-medium text-orange-400">
                      {currentLanguage === 'en' ? 'Metric Context' : 'Contexto de Métrica'}
                    </h4>
                  </div>
                  <p className="text-sm text-foreground/80">{getContent('metricContext')}</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-500/10 border-purple-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <h4 className="font-medium text-purple-400">
                      {currentLanguage === 'en' ? 'Strategic Guidance' : 'Guía Estratégica'}
                    </h4>
                  </div>
                  <p className="text-sm text-foreground/80">{getContent('strategicGuidance')}</p>
                </CardContent>
              </Card>

              <Card className="bg-green-500/10 border-green-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-green-400" />
                    <h4 className="font-medium text-green-400">
                      {currentLanguage === 'en' ? 'Tactical Tip' : 'Consejo Táctico'}
                    </h4>
                  </div>
                  <p className="text-sm text-foreground/80">{getContent('tacticalTip')}</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-500/10 border-blue-500/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-blue-400" />
                    <h4 className="font-medium text-blue-400">
                      {currentLanguage === 'en' ? 'Schema Trace' : 'Rastreo de Esquema'}
                    </h4>
                  </div>
                  <code className="text-sm bg-secondary/50 px-3 py-2 rounded block text-muted-foreground">
                    {content.schemaTrace}
                  </code>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Voiceover Controls with Voice Synthesis */}
            {content.voiceoverScript && (
              <VoiceSynthesisEngine
                text={getVoiceoverContent()}
                language={currentLanguage}
                stakeholder={config.stakeholder}
                mode="embedded"
                onPlayStateChange={(playing) => setIsPlaying(playing)}
                onComplete={() => setIsPlaying(false)}
                onError={(error) => console.error('Voice synthesis error:', error)}
              />
            )}

            {/* Export Controls */}
            <div className="border-t border-border pt-4">
              <h4 className="font-medium text-foreground mb-3">
                {currentLanguage === 'en' ? 'Export Guidance' : 'Exportar Guía'}
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExport('json')}
                  className="text-xs"
                >
                  <Download className="w-3 h-3 mr-1" />
                  JSON
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExport('pdf')}
                  className="text-xs"
                >
                  <Download className="w-3 h-3 mr-1" />
                  PDF
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExport('png')}
                  className="text-xs"
                >
                  <Download className="w-3 h-3 mr-1" />
                  PNG
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Voiceover mode overlay with full voice synthesis
  if (mode === 'voiceover') {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <VoiceSynthesisEngine
          text={`${getContent('metricContext')} ${getContent('strategicGuidance')} ${getContent('tacticalTip')}`}
          language={currentLanguage}
          stakeholder={config.stakeholder}
          mode="full"
          onPlayStateChange={onPlayStateChange}
          onComplete={onComplete}
          onError={(error) => console.error('Voice synthesis error:', error)}
          className="w-96"
        />
      </div>
    );
  }

  // Snapshot mode overlay
  if (mode === 'snapshot') {
    return (
      <div className={`bg-card/90 rounded-lg p-4 border border-border ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">
              {config.stakeholder} {currentLanguage === 'en' ? 'Guidance' : 'Guía'}
            </h4>
            <p className="text-xs text-muted-foreground">{config.module} • {config.metric}</p>
          </div>
          
          <div className="ml-auto">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
              {currentLanguage === 'en' ? 'Strategic' : 'Estratégico'}
            </Badge>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div>
            <span className="text-orange-400 font-medium">
              {currentLanguage === 'en' ? 'Context:' : 'Contexto:'}
            </span>
            <p className="text-muted-foreground mt-1">{getContent('metricContext')}</p>
          </div>
          
          <div>
            <span className="text-purple-400 font-medium">
              {currentLanguage === 'en' ? 'Action:' : 'Acción:'}
            </span>
            <p className="text-muted-foreground mt-1">{getContent('tacticalTip')}</p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-border">
          <code className="text-xs bg-secondary/50 px-2 py-1 rounded text-muted-foreground">
            {content.schemaTrace}
          </code>
        </div>
      </div>
    );
  }

  return null;
}

// Utility hook for easy overlay integration
export function useCoachingOverlay(
  stakeholder: OverlayConfig['stakeholder'],
  module: OverlayConfig['module'],
  metric: string,
  language: 'EN' | 'ES' = 'EN'
) {
  const [overlayMode, setOverlayMode] = useState<'hover' | 'sidebar' | 'voiceover' | 'snapshot'>('hover');
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const config: OverlayConfig = {
    overlay_enabled: true,
    stakeholder,
    module,
    metric,
    language,
    guidance_level: 'Strategic'
  };

  const showOverlay = (mode: typeof overlayMode) => {
    setOverlayMode(mode);
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };

  return {
    config,
    overlayMode,
    isOverlayVisible,
    showOverlay,
    hideOverlay,
    setOverlayMode
  };
}