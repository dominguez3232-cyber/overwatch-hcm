/**
 * Pitch Delivery System
 * 
 * Comprehensive teleprompter and speaker guidance system for delivering
 * the OVERWATCH³ 90-second cinematic pitch with precision timing,
 * delivery notes, and visual cues.
 */

import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Play, 
  Pause, 
  RotateCcw,
  Timer,
  Mic,
  Eye,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
  Volume2,
  Hand,
  ArrowUpDown,
  Film,
  Crown,
  Lightbulb
} from 'lucide-react';

interface PitchDeliverySystemProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

interface PitchScene {
  id: number;
  title: string;
  duration: number; // seconds
  script: string;
  deliveryNotes: {
    cadence: string;
    tone: string;
    gestures: string;
    visualCue: string;
  };
  taglines: string[];
  timing: string;
}

export function PitchDeliverySystem({ language, onNavigate }: PitchDeliverySystemProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [sceneStartTime, setSceneStartTime] = useState(0);

  const t = (en: string, es: string) => language === 'en' ? en : es;

  const pitchScenes: PitchScene[] = [
    {
      id: 1,
      title: t('Opening Hook – Chaos → Cockpit', 'Gancho de Apertura – Caos → Cabina'),
      duration: 15,
      script: t(
        '"This is what enterprise leaders see today: silos, noise, and no proof of ROI. HCM, ERP, EPM, CRM—fragmented, disconnected, impossible to unify. Now… this is Overwatch³. The Command Center where solo-operators prove ROI, in any language."',
        '"Esto es lo que ven los líderes empresariales hoy: silos, ruido, y ninguna prueba de ROI. HCM, ERP, EPM, CRM—fragmentado, desconectado, imposible de unificar. Ahora… esto es Overwatch³. El Centro de Comando donde operadores-solo prueban ROI, en cualquier idioma."'
      ),
      deliveryNotes: {
        cadence: t('Slow and deliberate on the problem, pause at "Now…"', 'Lento y deliberado en el problema, pausa en "Ahora…"'),
        tone: t('Confident, cinematic, inevitable', 'Confiado, cinematográfico, inevitable'),
        gestures: t('Point to fragmented chaos, then sweep to unified cockpit', 'Señalar al caos fragmentado, luego barrer hacia la cabina unificada'),
        visualCue: t('Start with chaotic dashboard, fade to OVERWATCH³ cockpit', 'Comenzar con dashboard caótico, desvanecer a cabina OVERWATCH³')
      },
      taglines: [
        t('Not another SaaS tool—the Command Center where founders prove ROI.', 'No otra herramienta SaaS—el Centro de Comando donde fundadores prueban ROI.'),
        t('From schema to scale—built for solo-operators, ready for enterprise.', 'De esquema a escala—construido para operadores-solo, listo para empresa.')
      ],
      timing: '0:00 - 0:15'
    },
    {
      id: 2,
      title: t('Bilingual Toggle', 'Alternador Bilingüe'),
      duration: 10,
      script: t(
        '"With one click, English becomes Spanish. From Dallas to Mexico City, from New York to Bogotá—Overwatch³ speaks the enterprise\'s language from day one."',
        '"Con un clic, inglés se convierte en español. De Dallas a Ciudad de México, de Nueva York a Bogotá—Overwatch³ habla el idioma de la empresa desde el día uno."'
      ),
      deliveryNotes: {
        cadence: t('Quick demonstration, emphasize geographic span', 'Demostración rápida, enfatizar alcance geográfico'),
        tone: t('Energetic, confident about differentiation', 'Enérgico, confiado sobre diferenciación'),
        gestures: t('Use hands to "toggle" when switching languages', 'Usar manos para "alternar" al cambiar idiomas'),
        visualCue: t('Click EN ↔ ES toggle, entire interface flips instantly', 'Hacer clic en alternador EN ↔ ES, toda la interfaz cambia instantáneamente')
      },
      taglines: [
        t('One click. Two languages. Infinite markets.', 'Un clic. Dos idiomas. Mercados infinitos.'),
        t('Bilingual by design, not by retrofit.', 'Bilingüe por diseño, no por adaptación.')
      ],
      timing: '0:15 - 0:25'
    },
    {
      id: 3,
      title: t('Schema Advantage', 'Ventaja de Esquema'),
      duration: 12,
      script: t(
        '"Every metric, every overlay, every proof point is traceable back to schema. This isn\'t a feature. It\'s a platform—modular, auditable, and built to scale."',
        '"Cada métrica, cada superposición, cada punto de prueba es trazable de vuelta al esquema. Esto no es una característica. Es una plataforma—modular, auditable, y construida para escalar."'
      ),
      deliveryNotes: {
        cadence: t('Deliberate emphasis on "This isn\'t a feature"', 'Énfasis deliberado en "Esto no es una característica"'),
        tone: t('Authoritative, technical confidence', 'Autoritativo, confianza técnica'),
        gestures: t('Trace connections from schema to UI elements', 'Trazar conexiones desde esquema a elementos UI'),
        visualCue: t('Show JSON schema lighting up UI components', 'Mostrar esquema JSON iluminando componentes UI')
      },
      taglines: [
        t('Schema-driven. Investor-ready. Enterprise-inevitable.', 'Impulsado por esquemas. Listo para inversionistas. Inevitable empresarial.'),
        t('Not a feature. A platform.', 'No una característica. Una plataforma.')
      ],
      timing: '0:25 - 0:37'
    },
    {
      id: 4,
      title: t('Proof Across Modules', 'Prueba a Través de Módulos'),
      duration: 25,
      script: t(
        '"In HCM, onboarding is 42% faster, compliance 18% higher. In ERP, efficiency gains compound, errors drop by 15%. In EPM, forecasts are 12% more accurate, cycles 30% faster. And in CRM, pipeline conversion climbs 22%, retention 10%. Every module comes with elite playbooks encoded into the workflow—so best practices aren\'t taught, they\'re lived."',
        '"En HCM, la incorporación es 42% más rápida, cumplimiento 18% mayor. En ERP, las ganancias de eficiencia se componen, errores caen 15%. En EPM, pronósticos son 12% más precisos, ciclos 30% más rápidos. Y en CRM, conversión de pipeline sube 22%, retención 10%. Cada módulo viene con libros de juego élite codificados en el flujo de trabajo—así las mejores prácticas no se enseñan, se viven."'
      ),
      deliveryNotes: {
        cadence: t('Rapid-fire metrics, building momentum', 'Métricas de fuego rápido, construyendo impulso'),
        tone: t('Energetic proof, building to crescendo', 'Prueba enérgica, construyendo hacia crescendo'),
        gestures: t('Count modules on fingers, emphasize percentages', 'Contar módulos en dedos, enfatizar porcentajes'),
        visualCue: t('Rapid module switching with animated metrics', 'Cambio rápido de módulos con métricas animadas')
      },
      taglines: [
        t('Every module is a cinematic case study.', 'Cada módulo es un caso de estudio cinematográfico.'),
        t('Best practices aren\'t taught, they\'re lived.', 'Las mejores prácticas no se enseñan, se viven.')
      ],
      timing: '0:37 - 1:02'
    },
    {
      id: 5,
      title: t('ROI Proof Engine', 'Motor de Prueba ROI'),
      duration: 12,
      script: t(
        '"And here\'s the centerpiece: the ROI Proof Engine. $1.2 million saved. $3.4 million lifted. 87% adoption. 92% engagement. Every pilot is a cinematic case study—ROI isn\'t promised, it\'s proven, live on screen."',
        '"Y aquí está la pieza central: el Motor de Prueba ROI. $1.2 millones ahorrados. $3.4 millones elevados. 87% adopción. 92% compromiso. Cada piloto es un caso de estudio cinematográfico—el ROI no se promete, se prueba, en vivo en pantalla."'
      ),
      deliveryNotes: {
        cadence: t('Slow build to dramatic reveal of numbers', 'Construcción lenta hacia revelación dramática de números'),
        tone: t('Cinematic proof, inevitable conclusion', 'Prueba cinematográfica, conclusión inevitable'),
        gestures: t('Use hands to "split" when showing before/after', 'Usar manos para "dividir" al mostrar antes/después'),
        visualCue: t('Split-screen before/after with metrics animating', 'Pantalla dividida antes/después con métricas animándose')
      },
      taglines: [
        t('ROI isn\'t promised—it\'s proven.', 'El ROI no se promete—se prueba.'),
        t('Every founder-led deployment is a cinematic case study.', 'Cada despliegue liderado por fundador es un caso de estudio cinematográfico.')
      ],
      timing: '1:02 - 1:14'
    },
    {
      id: 6,
      title: t('The Moat', 'El Foso'),
      duration: 8,
      script: t(
        '"Three moats make this inevitable: bilingual-first architecture, schema-driven modularity, and a cinematic ROI cockpit. Together, they form a fortress competitors can\'t breach."',
        '"Tres fosos hacen esto inevitable: arquitectura bilingüe-primero, modularidad impulsada por esquemas, y una cabina ROI cinematográfica. Juntos, forman una fortaleza que los competidores no pueden romper."'
      ),
      deliveryNotes: {
        cadence: t('Deliberate, building to fortress metaphor', 'Deliberado, construyendo hacia metáfora de fortaleza'),
        tone: t('Confident inevitability, defensive strength', 'Inevitabilidad confiada, fuerza defensiva'),
        gestures: t('Count three moats, build fortress with hands', 'Contar tres fosos, construir fortaleza con manos'),
        visualCue: t('Show three glowing shields forming fortress', 'Mostrar tres escudos brillantes formando fortaleza')
      },
      taglines: [
        t('Three moats. One inevitable Command Center.', 'Tres fosos. Un Centro de Comando inevitable.'),
        t('Bilingual. Modular. Cinematic. Founder-first.', 'Bilingüe. Modular. Cinematográfico. Fundador-primero.')
      ],
      timing: '1:14 - 1:22'
    },
    {
      id: 7,
      title: t('The Ask & Future', 'La Solicitud y el Futuro'),
      duration: 8,
      script: t(
        '"We\'re raising [$X] to scale Overwatch³ from alpha pilots to enterprise adoption. With SOC 2, GDPR, and HIPAA readiness on the roadmap, we\'re not just another SaaS tool—we are the Command Center where solo-operators prove impact at enterprise scale, in any language."',
        '"Estamos recaudando [$X] para escalar Overwatch³ de pilotos alfa a adopción empresarial. Con preparación SOC 2, GDPR, e HIPAA en la hoja de ruta, no somos solo otra herramienta SaaS—somos el Centro de Comando donde operadores-solo prueban impacto a escala empresarial, en cualquier idioma."'
      ),
      deliveryNotes: {
        cadence: t('Return to slow, inevitable conclusion', 'Regresar a conclusión lenta e inevitable'),
        tone: t('Confident ask, inevitable future', 'Solicitud confiada, futuro inevitable'),
        gestures: t('Open hands for ask, sweep to horizon for future', 'Manos abiertas para solicitud, barrer hacia horizonte para futuro'),
        visualCue: t('Show runway extending with compliance milestones', 'Mostrar pista extendiéndose con hitos de cumplimiento')
      },
      taglines: [
        t('Fuel the Command Center. Scale the inevitability.', 'Alimentar el Centro de Comando. Escalar la inevitabilidad.'),
        t('The Command Center where solo-operators prove impact at enterprise scale.', 'El Centro de Comando donde operadores-solo prueban impacto a escala empresarial.')
      ],
      timing: '1:22 - 1:30'
    }
  ];

  const totalDuration = pitchScenes.reduce((sum, scene) => sum + scene.duration, 0);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Auto-advance scenes
  useEffect(() => {
    if (isPlaying && elapsedTime > 0) {
      let cumulativeTime = 0;
      for (let i = 0; i < pitchScenes.length; i++) {
        cumulativeTime += pitchScenes[i].duration;
        if (elapsedTime <= cumulativeTime && currentScene !== i) {
          setCurrentScene(i);
          setSceneStartTime(cumulativeTime - pitchScenes[i].duration);
          break;
        }
      }
      
      if (elapsedTime >= totalDuration) {
        setIsPlaying(false);
      }
    }
  }, [elapsedTime, isPlaying, currentScene, pitchScenes, totalDuration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setElapsedTime(0);
    setCurrentScene(0);
    setSceneStartTime(0);
  };

  const handleSceneSelect = (sceneIndex: number) => {
    const cumulativeTime = pitchScenes.slice(0, sceneIndex).reduce((sum, scene) => sum + scene.duration, 0);
    setCurrentScene(sceneIndex);
    setElapsedTime(cumulativeTime);
    setSceneStartTime(cumulativeTime);
  };

  const currentSceneData = pitchScenes[currentScene];
  const sceneProgress = Math.min(((elapsedTime - sceneStartTime) / currentSceneData.duration) * 100, 100);
  const totalProgress = (elapsedTime / totalDuration) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-800">
        <div className="px-6 lg:px-20 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mic className="w-8 h-8 text-green-400" />
                <h1 className="text-3xl font-bold">
                  {t('Pitch Delivery System', 'Sistema de Entrega de Pitch')}
                </h1>
                <Badge className="bg-green-600/20 text-green-400 border-green-600/40">
                  {t('90-SECOND PITCH', 'PITCH 90 SEGUNDOS')}
                </Badge>
              </div>
              <p className="text-slate-300 mb-4">
                {t(
                  'Cinematic teleprompter and speaker guidance for investor-ready delivery',
                  'Teleprompter cinematográfico y guía del orador para entrega lista para inversionistas'
                )}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-400">
                    {formatTime(elapsedTime)} / {formatTime(totalDuration)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-400">
                    {t('Scene', 'Escena')} {currentScene + 1}/{pitchScenes.length}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {Math.round(totalProgress)}%
              </div>
              <div className="text-sm text-slate-400">
                {t('Complete', 'Completo')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 py-8">
        {/* Main Controls */}
        <Card className="p-6 bg-slate-800 border-slate-700 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                onClick={handlePlayPause}
                className={`h-12 w-12 rounded-full ${
                  isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="h-12"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {t('Reset', 'Reiniciar')}
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={() => handleSceneSelect(Math.max(0, currentScene - 1))}
                disabled={currentScene === 0}
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-lg font-medium min-w-24 text-center">
                {currentSceneData.timing}
              </span>
              <Button
                onClick={() => handleSceneSelect(Math.min(pitchScenes.length - 1, currentScene + 1))}
                disabled={currentScene === pitchScenes.length - 1}
                variant="outline"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Progress value={totalProgress} className="h-3 mb-4" />
          <Progress value={sceneProgress} className="h-2" />
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Script Display */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isPlaying ? 'bg-green-600 animate-pulse' : 'bg-slate-600'
                }`}>
                  {currentScene + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {currentSceneData.title}
                  </h3>
                  <div className="text-sm text-slate-400">
                    {currentSceneData.timing} • {currentSceneData.duration}s
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-slate-900/50 rounded-lg border-l-4 border-green-500 mb-6">
                <p className="text-xl leading-relaxed text-white font-medium">
                  {currentSceneData.script}
                </p>
              </div>
              
              {/* Quick Taglines */}
              <div className="mb-6">
                <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {t('Power Taglines', 'Líneas de Poder')}
                </h4>
                <div className="space-y-2">
                  {currentSceneData.taglines.map((tagline, index) => (
                    <div key={index} className="p-3 bg-slate-700/50 rounded-lg text-sm text-slate-300">
                      "{tagline}"
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Delivery Guidance */}
          <div className="space-y-6">
            {/* Delivery Notes */}
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h4 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {t('Delivery Guide', 'Guía de Entrega')}
              </h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="w-3 h-3 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">
                      {t('Cadence', 'Cadencia')}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">
                    {currentSceneData.deliveryNotes.cadence}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-3 h-3 text-yellow-400" />
                    <span className="text-sm font-semibold text-yellow-400">
                      {t('Tone', 'Tono')}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">
                    {currentSceneData.deliveryNotes.tone}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Hand className="w-3 h-3 text-green-400" />
                    <span className="text-sm font-semibold text-green-400">
                      {t('Gestures', 'Gestos')}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">
                    {currentSceneData.deliveryNotes.gestures}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Film className="w-3 h-3 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">
                      {t('Visual Cue', 'Señal Visual')}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">
                    {currentSceneData.deliveryNotes.visualCue}
                  </p>
                </div>
              </div>
            </Card>

            {/* Scene Navigator */}
            <Card className="p-6 bg-slate-800 border-slate-700">
              <h4 className="font-bold text-white mb-4">
                {t('Scene Navigator', 'Navegador de Escenas')}
              </h4>
              
              <div className="space-y-2">
                {pitchScenes.map((scene, index) => (
                  <button
                    key={scene.id}
                    onClick={() => handleSceneSelect(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentScene === index
                        ? 'bg-green-600/20 border border-green-600/40 text-green-400'
                        : 'bg-slate-700/50 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          currentScene === index ? 'bg-green-600' : 'bg-slate-600'
                        }`}>
                          {scene.id}
                        </div>
                        <div>
                          <div className="font-medium text-sm">
                            {scene.title.split('–')[0].trim()}
                          </div>
                          <div className="text-xs opacity-70">
                            {scene.timing}
                          </div>
                        </div>
                      </div>
                      {currentScene === index && isPlaying && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Quick Access */}
            <Card className="p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/20">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                {t('Quick Access', 'Acceso Rápido')}
              </h4>
              
              <div className="space-y-2">
                <Button
                  onClick={() => onNavigate('investor-demo')}
                  className="w-full bg-blue-600 hover:bg-blue-700 justify-start"
                >
                  <Film className="w-4 h-4 mr-2" />
                  {t('Demo Center', 'Centro Demo')}
                </Button>
                <Button
                  onClick={() => onNavigate('pitch-resources')}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 justify-start"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  {t('Tagline Arsenal', 'Arsenal de Líneas')}
                </Button>
                <Button
                  onClick={() => onNavigate('cinematic-roi')}
                  className="w-full bg-green-600 hover:bg-green-700 justify-start"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  {t('ROI Engine', 'Motor ROI')}
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Summary */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              {t('Pitch Complete', 'Pitch Completo')} 
              {totalProgress >= 100 && ' ✨'}
            </h3>
            <p className="text-slate-300 mb-4">
              {t(
                'This 90-second pitch transforms "Is this fundable?" into "How do we not miss this?"',
                'Este pitch de 90 segundos transforma "¿Es esto financiable?" en "¿Cómo no perdemos esto?"'
              )}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-slate-400">
                  {t('7 Scenes', '7 Escenas')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-blue-400" />
                <span className="text-slate-400">
                  {t('90 Seconds', '90 Segundos')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-yellow-400" />
                <span className="text-slate-400">
                  {t('Inevitable', 'Inevitable')}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}