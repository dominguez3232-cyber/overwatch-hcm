import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  VolumeX, 
  SkipForward, 
  SkipBack,
  Download,
  Settings,
  Mic,
  Languages,
  Gauge,
  Brain,
  Radio
} from 'lucide-react';

interface VoiceSynthesisConfig {
  voice: 'professional' | 'conversational' | 'executive' | 'bilingual';
  language: 'en' | 'es' | 'en-es';
  speed: number; // 0.5 - 2.0
  pitch: number; // 0.5 - 2.0
  volume: number; // 0.0 - 1.0
  emphasis: 'normal' | 'strategic' | 'urgent' | 'casual';
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
}

interface VoiceLibrary {
  id: string;
  name: string;
  language: 'en' | 'es' | 'both';
  gender: 'male' | 'female' | 'neutral';
  tone: 'professional' | 'conversational' | 'executive';
  description: string;
  sample?: string;
}

interface VoiceSynthesisEngineProps {
  text: string;
  language: 'en' | 'es';
  stakeholder?: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  config?: Partial<VoiceSynthesisConfig>;
  onPlayStateChange?: (isPlaying: boolean) => void;
  onComplete?: () => void;
  onError?: (error: string) => void;
  className?: string;
  mode?: 'compact' | 'full' | 'embedded';
}

export function VoiceSynthesisEngine({
  text,
  language,
  stakeholder = 'CEO',
  config = {},
  onPlayStateChange,
  onComplete,
  onError,
  className = "",
  mode = 'full'
}: VoiceSynthesisEngineProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [synthConfig, setSynthConfig] = useState<VoiceSynthesisConfig>({
    voice: 'professional',
    language: language as 'en' | 'es',
    speed: 1.0,
    pitch: 1.0,
    volume: 0.8,
    emphasis: 'normal',
    stakeholder,
    ...config
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const synthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Voice library for different stakeholders and languages
  const voiceLibrary: VoiceLibrary[] = [
    {
      id: 'ceo-professional-en',
      name: 'Executive Authority',
      language: 'en',
      gender: 'neutral',
      tone: 'executive',
      description: 'Commanding, strategic voice for CEO-level insights',
      sample: 'Strategic leadership requires decisive action and clear vision.'
    },
    {
      id: 'cfo-analytical-en',
      name: 'Financial Analyst',
      language: 'en',
      gender: 'neutral',
      tone: 'professional',
      description: 'Precise, analytical voice for financial guidance',
      sample: 'Revenue optimization demands rigorous analysis and disciplined execution.'
    },
    {
      id: 'chro-empathetic-en',
      name: 'People Leader',
      language: 'en',
      gender: 'female',
      tone: 'conversational',
      description: 'Warm, engaging voice for HR and people topics',
      sample: 'Employee engagement drives innovation and sustainable growth.'
    },
    {
      id: 'coo-operational-en',
      name: 'Operations Expert',
      language: 'en',
      gender: 'neutral',
      tone: 'professional',
      description: 'Direct, efficient voice for operational excellence',
      sample: 'Operational efficiency enables profitable scaling and competitive advantage.'
    },
    {
      id: 'bilingual-cultural-es',
      name: 'Cultural Intelligence',
      language: 'es',
      gender: 'neutral',
      tone: 'professional',
      description: 'Culturally intelligent voice for Latino market insights',
      sample: 'La inteligencia cultural es fundamental para el éxito en mercados diversos.'
    },
    {
      id: 'bilingual-bridge',
      name: 'Bilingual Bridge',
      language: 'both',
      gender: 'neutral',
      tone: 'conversational',
      description: 'Seamless bilingual voice for cross-cultural communication',
      sample: 'Bridging cultures creates competitive advantages. Conectar culturas crea ventajas competitivas.'
    }
  ];

  // Get available voices from browser
  const getAvailableVoices = useCallback(() => {
    return speechSynthesis.getVoices().filter(voice => 
      voice.lang.startsWith(synthConfig.language) || 
      voice.lang.startsWith('en') || 
      voice.lang.startsWith('es')
    );
  }, [synthConfig.language]);

  // Select optimal voice based on configuration
  const selectOptimalVoice = useCallback(() => {
    const voices = getAvailableVoices();
    if (voices.length === 0) return null;

    // Preference order: stakeholder match > language match > quality
    const stakeholderVoices = voiceLibrary.filter(v => 
      v.id.includes(stakeholder.toLowerCase()) && 
      (v.language === synthConfig.language || v.language === 'both')
    );

    if (stakeholderVoices.length > 0) {
      // Find browser voice that matches our preferred voice characteristics
      const preferredVoice = voices.find(v => 
        v.lang.startsWith(synthConfig.language) && 
        (v.name.includes('Professional') || v.name.includes('Executive') || v.name.includes('Neural'))
      );
      return preferredVoice || voices[0];
    }

    // Fallback to best available voice for language
    return voices.find(v => v.lang.startsWith(synthConfig.language)) || voices[0];
  }, [synthConfig.language, stakeholder]);

  // Generate enhanced text with stakeholder-specific modifications
  const enhanceTextForStakeholder = useCallback((rawText: string) => {
    const enhancements = {
      CEO: {
        prefix: 'From a strategic leadership perspective: ',
        emphasis: ['strategic', 'leadership', 'vision', 'competitive advantage'],
        pace: 'measured'
      },
      CFO: {
        prefix: 'From a financial analysis standpoint: ',
        emphasis: ['revenue', 'cost', 'ROI', 'efficiency', 'profitability'],
        pace: 'precise'
      },
      CHRO: {
        prefix: 'From a people and culture perspective: ',
        emphasis: ['engagement', 'retention', 'culture', 'development'],
        pace: 'conversational'
      },
      COO: {
        prefix: 'From an operational excellence viewpoint: ',
        emphasis: ['efficiency', 'process', 'optimization', 'execution'],
        pace: 'direct'
      }
    };

    const enhancement = enhancements[stakeholder];
    let enhancedText = rawText;

    // Add stakeholder context if in full mode
    if (mode === 'full') {
      enhancedText = enhancement.prefix + enhancedText;
    }

    // Add emphasis markers for key terms
    enhancement.emphasis.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      enhancedText = enhancedText.replace(regex, `<emphasis>${term}</emphasis>`);
    });

    return enhancedText;
  }, [stakeholder, mode]);

  // Synthesize speech with advanced configuration
  const synthesizeSpeech = useCallback(async () => {
    if (!('speechSynthesis' in window)) {
      onError?.('Speech synthesis not supported in this browser');
      return;
    }

    setIsLoading(true);
    
    try {
      // Cancel any existing synthesis
      speechSynthesis.cancel();
      
      const enhancedText = enhanceTextForStakeholder(text);
      const utterance = new SpeechSynthesisUtterance(enhancedText);
      
      // Configure voice
      const selectedVoice = selectOptimalVoice();
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      // Apply synthesis configuration
      utterance.rate = synthConfig.speed;
      utterance.pitch = synthConfig.pitch;
      utterance.volume = synthConfig.volume;
      utterance.lang = synthConfig.language === 'en' ? 'en-US' : 'es-ES';
      
      // Set up event handlers
      utterance.onstart = () => {
        setIsPlaying(true);
        setIsLoading(false);
        onPlayStateChange?.(true);
        
        // Start progress tracking
        const words = text.split(' ').length;
        const estimatedDuration = (words / (synthConfig.speed * 2.5)) * 1000; // Rough estimation
        setDuration(estimatedDuration);
        
        intervalRef.current = setInterval(() => {
          setCurrentTime(prev => {
            if (prev >= estimatedDuration) {
              if (intervalRef.current) clearInterval(intervalRef.current);
              return estimatedDuration;
            }
            return prev + 100;
          });
        }, 100);
      };
      
      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        onPlayStateChange?.(false);
        onComplete?.();
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
      
      utterance.onerror = (event) => {
        setIsPlaying(false);
        setIsLoading(false);
        onError?.(`Speech synthesis error: ${event.error}`);
      };
      
      synthesisRef.current = utterance;
      speechSynthesis.speak(utterance);
      
    } catch (error) {
      setIsLoading(false);
      onError?.(`Failed to synthesize speech: ${error}`);
    }
  }, [text, synthConfig, selectOptimalVoice, enhanceTextForStakeholder, onPlayStateChange, onComplete, onError]);

  // Playback controls
  const handlePlay = () => {
    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    } else {
      synthesizeSpeech();
    }
  };

  const handlePause = () => {
    speechSynthesis.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleSkip = (direction: 'forward' | 'backward') => {
    const skipAmount = 5000; // 5 seconds
    setCurrentTime(prev => {
      const newTime = direction === 'forward' 
        ? Math.min(prev + skipAmount, duration)
        : Math.max(prev - skipAmount, 0);
      return newTime;
    });
  };

  // Download audio (simulated - would require server-side generation in production)
  const handleDownload = async () => {
    // In production, this would call a server endpoint to generate high-quality audio
    console.log('Downloading audio for:', { text, synthConfig, stakeholder });
    
    // Simulated download
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `overwatch-coaching-${stakeholder.toLowerCase()}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Format time display
  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Compact mode for embedded use
  if (mode === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Button
          variant="ghost"
          size="sm"
          onClick={isPlaying ? handlePause : handlePlay}
          disabled={isLoading}
          className="text-blue-400 hover:text-blue-300"
        >
          {isLoading ? (
            <Radio className="w-4 h-4 animate-pulse" />
          ) : isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>
        
        {isPlaying && (
          <div className="text-xs text-muted-foreground">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        )}
      </div>
    );
  }

  // Embedded mode for coaching overlays
  if (mode === 'embedded') {
    return (
      <Card className={`bg-blue-500/10 border-blue-500/30 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Voice Coaching
              </span>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                {stakeholder}
              </Badge>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="text-blue-400 hover:text-blue-300"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={isPlaying ? handlePause : handlePlay}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              {isLoading ? (
                <Radio className="w-4 h-4 animate-pulse" />
              ) : isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              {isLoading ? 'Loading...' : isPlaying ? 'Pause' : 'Play'}
            </Button>
            
            {isPlaying && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleStop}
                >
                  <Square className="w-4 h-4" />
                </Button>
                
                <div className="flex-1 text-center text-sm text-muted-foreground">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </>
            )}
          </div>
          
          {isPlaying && (
            <div className="mt-3">
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  // Full mode with complete controls
  return (
    <Card className={`bg-card border-border ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">
                Voice Synthesis Engine
              </h3>
              <p className="text-sm text-muted-foreground">
                AI-powered coaching narration for {stakeholder}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              <Languages className="w-3 h-3 mr-1" />
              {synthConfig.language.toUpperCase()}
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              <Mic className="w-3 h-3 mr-1" />
              {synthConfig.voice}
            </Badge>
          </div>
        </div>

        {/* Main Controls */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            onClick={isPlaying ? handlePause : handlePlay}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <Radio className="w-5 h-5 animate-pulse" />
            ) : isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
            {isLoading ? 'Synthesizing...' : isPlaying ? 'Pause' : 'Play Coaching'}
          </Button>
          
          <Button
            variant="outline"
            onClick={handleStop}
            disabled={!isPlaying && !isPaused}
          >
            <Square className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => handleSkip('backward')}
            disabled={!isPlaying}
          >
            <SkipBack className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => handleSkip('forward')}
            disabled={!isPlaying}
          >
            <SkipForward className="w-4 h-4" />
          </Button>
          
          <div className="flex-1 text-center">
            <div className="text-sm text-muted-foreground">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          
          <Button
            variant="outline"
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-secondary rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* Voice Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Speed</label>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-muted-foreground" />
              <Slider
                value={[synthConfig.speed]}
                onValueChange={([value]) => setSynthConfig(prev => ({ ...prev, speed: value }))}
                min={0.5}
                max={2.0}
                step={0.1}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-8">
                {synthConfig.speed.toFixed(1)}x
              </span>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Pitch</label>
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <Slider
                value={[synthConfig.pitch]}
                onValueChange={([value]) => setSynthConfig(prev => ({ ...prev, pitch: value }))}
                min={0.5}
                max={2.0}
                step={0.1}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-8">
                {synthConfig.pitch.toFixed(1)}
              </span>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Volume</label>
            <div className="flex items-center gap-2">
              {synthConfig.volume === 0 ? (
                <VolumeX className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Volume2 className="w-4 h-4 text-muted-foreground" />
              )}
              <Slider
                value={[synthConfig.volume]}
                onValueChange={([value]) => setSynthConfig(prev => ({ ...prev, volume: value }))}
                min={0}
                max={1}
                step={0.1}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-8">
                {Math.round(synthConfig.volume * 100)}%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Utility hook for easy voice synthesis integration
export function useVoiceSynthesis(
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO',
  language: 'en' | 'es'
) {
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    setIsSupported('speechSynthesis' in window);
    
    const loadVoices = () => {
      setVoices(speechSynthesis.getVoices());
    };
    
    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', loadVoices);
    
    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  const synthesize = useCallback((text: string, config?: Partial<VoiceSynthesisConfig>) => {
    if (!isSupported) {
      console.warn('Speech synthesis not supported');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'en' ? 'en-US' : 'es-ES';
    utterance.rate = config?.speed || 1.0;
    utterance.pitch = config?.pitch || 1.0;
    utterance.volume = config?.volume || 0.8;

    speechSynthesis.speak(utterance);
  }, [isSupported, language]);

  return {
    isSupported,
    voices,
    synthesize
  };
}