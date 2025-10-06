import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Clock,
  Eye,
  MessageSquare,
  Bookmark
} from 'lucide-react';

interface VideoChapter {
  id: string;
  title: { en: string; es: string; };
  timestamp: number;
  duration: number;
  keyPoint: { en: string; es: string; };
  transcript: { en: string; es: string; };
}

interface InteractiveVideoPlayerProps {
  videoId: string;
  title: { en: string; es: string; };
  description: { en: string; es: string; };
  chapters: VideoChapter[];
  language: 'en' | 'es';
  autoplay?: boolean;
  onProgress?: (progress: number) => void;
  onComplete?: () => void;
  onChapterChange?: (chapterId: string) => void;
}

const SAMPLE_CHAPTERS: VideoChapter[] = [
  {
    id: 'intro',
    title: {
      en: 'Welcome & Personal Introduction',
      es: 'Bienvenida e Introducción Personal'
    },
    timestamp: 0,
    duration: 30,
    keyPoint: {
      en: 'Meet Luis and understand his founder journey',
      es: 'Conoce a Luis y entiende su viaje como fundador'
    },
    transcript: {
      en: 'Welcome to OVERWATCH³. I\'m Luis, and I\'ve been where you are - building a company from the ground up, facing the clarity challenges that come with rapid growth.',
      es: 'Bienvenido a OVERWATCH³. Soy Luis, y he estado donde tú estás - construyendo una empresa desde cero, enfrentando los desafíos de claridad que vienen con el crecimiento rápido.'
    }
  },
  {
    id: 'schema-methodology',
    title: {
      en: 'Schema-Driven Clarity Explained',
      es: 'Claridad Basada en Esquemas Explicada'
    },
    timestamp: 30,
    duration: 45,
    keyPoint: {
      en: 'How schemas create systematic clarity',
      es: 'Cómo los esquemas crean claridad sistemática'
    },
    transcript: {
      en: 'Every decision, every process, every outcome in your business can be traced to a schema. Think of schemas as the DNA of business clarity - they\'re reproducible, scalable, and measurable.',
      es: 'Cada decisión, cada proceso, cada resultado en tu negocio puede ser rastreado a un esquema. Piensa en los esquemas como el ADN de la claridad empresarial - son reproducibles, escalables y medibles.'
    }
  },
  {
    id: 'coaching-philosophy',
    title: {
      en: 'Cinematic Coaching Approach',
      es: 'Enfoque de Coaching Cinemático'
    },
    timestamp: 75,
    duration: 40,
    keyPoint: {
      en: 'Why coaching needs to be engaging and memorable',
      es: 'Por qué el coaching necesita ser atractivo y memorable'
    },
    transcript: {
      en: 'Traditional coaching is forgettable. Cinematic coaching creates emotional resonance that drives behavior change. When you experience clarity, not just learn about it, transformation happens.',
      es: 'El coaching tradicional es olvidable. El coaching cinemático crea resonancia emocional que impulsa el cambio de comportamiento. Cuando experimentas claridad, no solo aprendes sobre ella, sucede la transformación.'
    }
  },
  {
    id: 'squad-transformation',
    title: {
      en: 'Squad-Ready Transformation',
      es: 'Transformación Lista para Escuadrones'
    },
    timestamp: 115,
    duration: 35,
    keyPoint: {
      en: 'Building tactical teams for systematic execution',
      es: 'Construyendo equipos tácticos para ejecución sistemática'
    },
    transcript: {
      en: 'Your transformation isn\'t just personal - it\'s organizational. Squads become the deployment mechanism for clarity, turning individual insights into collective execution power.',
      es: 'Tu transformación no es solo personal - es organizacional. Los escuadrones se convierten en el mecanismo de despliegue para la claridad, convirtiendo ideas individuales en poder de ejecución colectiva.'
    }
  }
];

export default function InteractiveVideoPlayer({
  videoId,
  title,
  description,
  chapters = SAMPLE_CHAPTERS,
  language,
  autoplay = false,
  onProgress,
  onComplete,
  onChapterChange
}: InteractiveVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(150); // Total video duration in seconds
  const [currentChapter, setCurrentChapter] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [keyMoments, setKeyMoments] = useState<number[]>([]);

  const playerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const t = {
    en: {
      play: 'Play',
      pause: 'Pause',
      skipForward: 'Skip Forward 10s',
      skipBack: 'Skip Back 10s',
      mute: 'Mute',
      unmute: 'Unmute',
      fullscreen: 'Fullscreen',
      settings: 'Settings',
      transcript: 'Transcript',
      chapters: 'Chapters',
      keyMoments: 'Key Moments',
      playbackSpeed: 'Playback Speed',
      currentChapter: 'Current Chapter',
      nextChapter: 'Next Chapter',
      previousChapter: 'Previous Chapter',
      bookmarkMoment: 'Bookmark This Moment',
      shareTimestamp: 'Share Timestamp',
      videoCompleted: 'Video Completed!',
      continueJourney: 'Continue Your Journey'
    },
    es: {
      play: 'Reproducir',
      pause: 'Pausar',
      skipForward: 'Adelantar 10s',
      skipBack: 'Retroceder 10s',
      mute: 'Silenciar',
      unmute: 'Activar Sonido',
      fullscreen: 'Pantalla Completa',
      settings: 'Configuración',
      transcript: 'Transcripción',
      chapters: 'Capítulos',
      keyMoments: 'Momentos Clave',
      playbackSpeed: 'Velocidad de Reproducción',
      currentChapter: 'Capítulo Actual',
      nextChapter: 'Siguiente Capítulo',
      previousChapter: 'Capítulo Anterior',
      bookmarkMoment: 'Marcar Este Momento',
      shareTimestamp: 'Compartir Marca de Tiempo',
      videoCompleted: '¡Video Completado!',
      continueJourney: 'Continúa Tu Viaje'
    }
  };

  const text = t[language];

  // Simulate video playback
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + playbackSpeed;
          if (newTime >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return newTime;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying, playbackSpeed, duration]);

  // Handle completion callback
  useEffect(() => {
    if (currentTime >= duration && !isPlaying) {
      onComplete?.();
    }
  }, [currentTime, duration, isPlaying, onComplete]);

  // Handle progress callback
  useEffect(() => {
    if (onProgress) {
      const progress = (currentTime / duration) * 100;
      onProgress(progress);
    }
  }, [currentTime, duration, onProgress]);

  // Handle chapter changes
  useEffect(() => {
    const newChapter = chapters.findIndex(chapter => 
      currentTime >= chapter.timestamp && 
      currentTime < chapter.timestamp + chapter.duration
    );
    
    if (newChapter !== -1 && newChapter !== currentChapter) {
      setCurrentChapter(newChapter);
      onChapterChange?.(chapters[newChapter].id);
    }
  }, [currentTime, chapters, currentChapter, onChapterChange]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkip = (seconds: number) => {
    setCurrentTime(prev => Math.max(0, Math.min(duration, prev + seconds)));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const percentage = (e.clientX - rect.left) / rect.width;
      const newTime = percentage * duration;
      setCurrentTime(newTime);
    }
  };

  const handleChapterSelect = (chapterIndex: number) => {
    setCurrentTime(chapters[chapterIndex].timestamp);
    setCurrentChapter(chapterIndex);
  };

  const handleBookmark = () => {
    setKeyMoments(prev => [...prev, currentTime]);
  };

  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
  };

  const progress = (currentTime / duration) * 100;
  const currentChapterData = chapters[currentChapter];

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <Card className="overflow-hidden">
        <div 
          ref={playerRef}
          className={`relative bg-black aspect-video ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
        >
          {/* Video Display Area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <motion.div
                animate={{ scale: isPlaying ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-4xl">🎬</div>
              </motion.div>
              
              <div>
                <h3 className="text-xl font-semibold">{title[language]}</h3>
                <p className="text-white/70 mt-2">{description[language]}</p>
              </div>
              
              {currentChapterData && (
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
                  <h4 className="font-medium">{currentChapterData.title[language]}</h4>
                  <p className="text-sm text-white/70 mt-1">
                    {currentChapterData.keyPoint[language]}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Play/Pause Overlay */}
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
            </div>
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div 
              ref={progressRef}
              onClick={handleSeek}
              className="relative h-2 bg-white/20 rounded-full cursor-pointer mb-4"
            >
              <div 
                className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
              
              {/* Chapter Markers */}
              {chapters.map((chapter, index) => (
                <div
                  key={chapter.id}
                  className="absolute top-0 w-1 h-full bg-white/50"
                  style={{ left: `${(chapter.timestamp / duration) * 100}%` }}
                  title={chapter.title[language]}
                />
              ))}
              
              {/* Key Moments */}
              {keyMoments.map((moment, index) => (
                <div
                  key={index}
                  className="absolute top-0 w-1 h-full bg-yellow-400"
                  style={{ left: `${(moment / duration) * 100}%` }}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePlayPause}
                  className="hover:text-primary transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                
                <button
                  onClick={() => handleSkip(-10)}
                  className="hover:text-primary transition-colors"
                  title={text.skipBack}
                >
                  <SkipBack className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => handleSkip(10)}
                  className="hover:text-primary transition-colors"
                  title={text.skipForward}
                >
                  <SkipForward className="w-5 h-5" />
                </button>
                
                <button
                  onClick={handleVolumeToggle}
                  className="hover:text-primary transition-colors"
                  title={isMuted ? text.unmute : text.mute}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                
                <span className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handleBookmark}
                  className="hover:text-primary transition-colors"
                  title={text.bookmarkMoment}
                >
                  <Bookmark className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="hover:text-primary transition-colors"
                  title={text.transcript}
                >
                  <MessageSquare className="w-5 h-5" />
                </button>
                
                <select
                  value={playbackSpeed}
                  onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                  className="bg-white/20 text-white text-sm rounded px-2 py-1"
                  title={text.playbackSpeed}
                >
                  <option value={0.5}>0.5x</option>
                  <option value={0.75}>0.75x</option>
                  <option value={1}>1x</option>
                  <option value={1.25}>1.25x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>
                
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="hover:text-primary transition-colors"
                  title={text.fullscreen}
                >
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Chapters & Transcript */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chapters */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {text.chapters}
          </h3>
          <div className="space-y-3">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => handleChapterSelect(index)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  index === currentChapter 
                    ? 'bg-primary/10 border border-primary/20' 
                    : 'bg-secondary/50 hover:bg-secondary'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{chapter.title[language]}</h4>
                  <Badge variant="outline">
                    {formatTime(chapter.timestamp)}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {chapter.keyPoint[language]}
                </p>
              </button>
            ))}
          </div>
        </Card>

        {/* Transcript */}
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            {text.transcript}
          </h3>
          {currentChapterData && (
            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">{currentChapterData.title[language]}</h4>
                <p className="text-muted-foreground">
                  {currentChapterData.transcript[language]}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>
                  {formatTime(currentChapterData.timestamp)} - {formatTime(currentChapterData.timestamp + currentChapterData.duration)}
                </span>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Video Completion */}
      {currentTime >= duration && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Card className="p-8 bg-green-500/10 border-green-500/20">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">{text.videoCompleted}</h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'You\'ve completed the founder introduction. Ready to continue your OVERWATCH³ journey?'
                  : 'Has completado la introducción del fundador. ¿Listo para continuar tu viaje OVERWATCH³?'
                }
              </p>
              <Button onClick={onComplete}>
                {text.continueJourney}
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Key Moments Summary */}
      {keyMoments.length > 0 && (
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Bookmark className="w-5 h-5" />
            {text.keyMoments} ({keyMoments.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {keyMoments.map((moment, index) => (
              <button
                key={index}
                onClick={() => setCurrentTime(moment)}
                className="bg-secondary/50 hover:bg-secondary px-3 py-1 rounded text-sm transition-colors"
              >
                {formatTime(moment)}
              </button>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}