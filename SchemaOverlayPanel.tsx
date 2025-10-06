import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Eye, 
  Lightbulb,
  Play,
  Pause
} from 'lucide-react';
import { SchemaNode } from '../utils/schemaLoader';

interface SchemaOverlayPanelProps {
  schema: SchemaNode;
  language: 'en' | 'es';
  onTriggerDemo?: () => void;
  isDemo?: boolean;
}

export const SchemaOverlayPanel: React.FC<SchemaOverlayPanelProps> = ({
  schema,
  language,
  onTriggerDemo,
  isDemo = false
}) => {
  const [activeSection, setActiveSection] = useState<'context' | 'guidance' | 'tactical'>('context');
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  const coachingContent = schema.coachingOverlay[language];
  const caption = schema.caption[language];
  const proofCaption = schema.proofEngine.caption[language];

  const handleDemoTrigger = () => {
    if (onTriggerDemo) {
      onTriggerDemo();
      setIsDemoPlaying(true);
      // Auto-stop demo after sequence duration
      setTimeout(() => setIsDemoPlaying(false), 6000);
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'context': return <Eye className="w-4 h-4" />;
      case 'guidance': return <Target className="w-4 h-4" />;
      case 'tactical': return <Lightbulb className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header with Schema Identity */}
      <Card className="p-6 border-2" style={{ borderColor: schema.visualTokens.color + '40' }}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl"
              style={{ 
                backgroundColor: schema.visualTokens.color + '20',
                filter: schema.visualTokens.glow ? `drop-shadow(0 0 8px ${schema.visualTokens.color}40)` : 'none'
              }}
            >
              {schema.visualTokens.icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{caption}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge 
                  variant="outline" 
                  style={{ borderColor: schema.visualTokens.color, color: schema.visualTokens.color }}
                >
                  {schema.stakeholder}
                </Badge>
                <Badge variant="secondary">{schema.type}</Badge>
              </div>
            </div>
          </div>
          
          {/* Demo Controls */}
          {schema.demoSequence && (
            <Button
              onClick={handleDemoTrigger}
              disabled={isDemoPlaying}
              className="flex items-center gap-2"
              style={{ 
                backgroundColor: schema.visualTokens.color + '20',
                borderColor: schema.visualTokens.color,
                color: schema.visualTokens.color
              }}
              variant="outline"
            >
              {isDemoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {language === 'en' ? 'Demo' : 'Demo'}
            </Button>
          )}
        </div>
        
        {/* Schema Trace */}
        <div className="text-xs text-muted-foreground font-mono">
          schema: {schema.schemaTrace}
        </div>
      </Card>

      {/* Coaching Content Navigation */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">
            {language === 'en' ? 'Strategic Coaching' : 'Coaching Estratégico'}
          </h2>
          <div className="flex bg-muted rounded-lg p-1">
            {['context', 'guidance', 'tactical'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section as any)}
                className={`px-3 py-1 rounded text-sm transition-all flex items-center gap-2 ${
                  activeSection === section 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {getSectionIcon(section)}
                {section === 'context' && (language === 'en' ? 'Context' : 'Contexto')}
                {section === 'guidance' && (language === 'en' ? 'Strategy' : 'Estrategia')}
                {section === 'tactical' && (language === 'en' ? 'Tactical' : 'Táctico')}
              </button>
            ))}
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Dynamic Coaching Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {activeSection === 'context' && (
              <div className="space-y-3">
                <h3 className="font-medium flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-500" />
                  {language === 'en' ? 'Metric Context' : 'Contexto de Métrica'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {coachingContent.metricContext}
                </p>
              </div>
            )}

            {activeSection === 'guidance' && (
              <div className="space-y-3">
                <h3 className="font-medium flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-500" />
                  {language === 'en' ? 'Strategic Guidance' : 'Guía Estratégica'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {coachingContent.strategicGuidance}
                </p>
              </div>
            )}

            {activeSection === 'tactical' && (
              <div className="space-y-3">
                <h3 className="font-medium flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-orange-500" />
                  {language === 'en' ? 'Tactical Implementation' : 'Implementación Táctica'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {coachingContent.tacticalTip}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Card>

      {/* Proof Engine Results */}
      <Card className="p-6 bg-gradient-to-r from-background to-accent/5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            {language === 'en' ? 'Proof Engine' : 'Motor de Prueba'}
          </h2>
          <Badge 
            variant="outline" 
            className="text-green-600 border-green-600"
          >
            {schema.proofEngine.confidence}% {language === 'en' ? 'Confidence' : 'Confianza'}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-3xl font-bold text-primary mb-1">
              {schema.proofEngine.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {schema.proofEngine.unit}
            </div>
          </div>
          
          <div className="md:col-span-2 flex items-center">
            <div className="space-y-2">
              <div className="text-sm font-medium">
                {schema.proofEngine.roiMetric}
              </div>
              <div className="text-sm text-muted-foreground">
                {proofCaption}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Demo Sequence Info */}
      {schema.demoSequence && (
        <Card className="p-6 border-dashed">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
              <Play className="w-4 h-4 text-blue-500" />
            </div>
            <h3 className="font-medium">
              {language === 'en' ? 'Cinematic Demo Available' : 'Demo Cinematográfico Disponible'}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {schema.demoSequence.narrative[language]}
          </p>
          <div className="text-xs text-muted-foreground">
            {schema.demoSequence.keyframes.length} {language === 'en' ? 'keyframes' : 'fotogramas clave'} • 
            {Math.max(...schema.demoSequence.keyframes.map(k => k.timestamp)) / 1000}s {language === 'en' ? 'duration' : 'duración'}
          </div>
        </Card>
      )}
    </motion.div>
  );
};

export default SchemaOverlayPanel;