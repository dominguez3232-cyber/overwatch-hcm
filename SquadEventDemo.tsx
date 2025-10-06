import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Users, 
  Award, 
  Zap, 
  Target,
  CheckCircle,
  Play,
  Trophy
} from 'lucide-react';

interface SquadEventDemoProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

export default function SquadEventDemo({
  language,
  onNavigate
}: SquadEventDemoProps) {
  const [eventLog, setEventLog] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const t = {
    en: {
      title: 'Squad & Badge Integration Demo',
      subtitle: 'Test squad creation, role assignment, and badge generation events',
      simulateEvents: 'Simulate Squad Events',
      eventLog: 'Event Log',
      clearLog: 'Clear Log',
      squadCreated: 'Squad Created',
      memberAssigned: 'Member Assigned',
      overlayCompleted: 'Overlay Completed',
      badgeEarned: 'Badge Earned',
      generating: 'Generating events...',
      createTestSquad: 'Create Test Squad',
      assignRoles: 'Assign Roles',
      completeOverlays: 'Complete Overlays',
      earnBadges: 'Earn Badges'
    },
    es: {
      title: 'Demo de Integración Squad & Badges',
      subtitle: 'Prueba creación de escuadrones, asignación de roles y eventos de generación de insignias',
      simulateEvents: 'Simular Eventos de Squad',
      eventLog: 'Registro de Eventos',
      clearLog: 'Limpiar Registro',
      squadCreated: 'Escuadrón Creado',
      memberAssigned: 'Miembro Asignado',
      overlayCompleted: 'Overlay Completado',
      badgeEarned: 'Insignia Obtenida',
      generating: 'Generando eventos...',
      createTestSquad: 'Crear Squad de Prueba',
      assignRoles: 'Asignar Roles',
      completeOverlays: 'Completar Overlays',
      earnBadges: 'Obtener Insignias'
    }
  };

  const text = t[language];

  const addToLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setEventLog(prev => [`[${timestamp}] ${message}`, ...prev]);
  };

  const simulateSquadEvents = async () => {
    setIsGenerating(true);
    
    try {
      // Step 1: Create test squad
      await new Promise(resolve => setTimeout(resolve, 500));
      addToLog(`🏗️ ${text.squadCreated}: "LatAm GTM Strike Team"`);
      
      // Step 2: Assign members
      await new Promise(resolve => setTimeout(resolve, 300));
      addToLog(`👤 ${text.memberAssigned}: Luis Dominguez → Founder`);
      await new Promise(resolve => setTimeout(resolve, 200));
      addToLog(`👤 ${text.memberAssigned}: Ana Rivera → Ops Lead`);
      
      // Step 3: Complete overlays and earn badges
      const overlays = [
        { trace: 'finance.trust-velocity', badge: '🧩 Trust Velocity Master' },
        { trace: 'law.assumed-right', badge: '🎯 Clarity Catalyst' },
        { trace: 'time.velocity-modeling', badge: '⚡ Velocity Navigator' }
      ];
      
      for (const overlay of overlays) {
        await new Promise(resolve => setTimeout(resolve, 400));
        addToLog(`✅ ${text.overlayCompleted}: ${overlay.trace}`);
        
        // Simulate badge generation
        try {
          const { checkBadgeUnlocks } = await import('../utils/badgeService');
          const badges = await checkBadgeUnlocks("overlayComplete", {
            overlayId: overlay.trace,
            learnerId: 'demo-squad-member',
            feedbackScore: 4.5 + Math.random() * 0.5
          });
          
          if (badges.length > 0) {
            await new Promise(resolve => setTimeout(resolve, 200));
            addToLog(`🏆 ${text.badgeEarned}: ${overlay.badge}`);
          }
        } catch (error) {
          console.error('Error generating badge:', error);
        }
      }
      
      // Step 4: Demo completion
      await new Promise(resolve => setTimeout(resolve, 300));
      addToLog(`🎉 Squad deployment completed! 3 badges earned, 2.8x clarity index achieved.`);
      
    } catch (error) {
      console.error('Error simulating squad events:', error);
      addToLog(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const testIndividualEvents = async (eventType: string) => {
    try {
      const { checkBadgeUnlocks, onDemoLaunch, onSchemaCreate } = await import('../utils/badgeService');
      
      switch (eventType) {
        case 'overlay':
          const overlayBadges = await checkBadgeUnlocks("overlayComplete", {
            overlayId: 'finance.trust-velocity',
            learnerId: 'test-user',
            feedbackScore: 4.8
          });
          addToLog(`✅ Overlay test: ${overlayBadges.length} badges generated`);
          break;
          
        case 'demo':
          const demoBadges = await onDemoLaunch('squad-mastery-demo', 'test-user');
          addToLog(`🎬 Demo test: ${demoBadges.length} badges generated`);
          break;
          
        case 'schema':
          const schemaBadges = await onSchemaCreate('custom.squad-framework', 'test-user');
          addToLog(`🛠️ Schema test: ${schemaBadges.length} badges generated`);
          break;
      }
    } catch (error) {
      console.error('Error testing event:', error);
      addToLog(`❌ Test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{text.title}</h1>
          <p className="text-muted-foreground">{text.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Controls */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Event Simulation
            </h3>
            
            <div className="space-y-4">
              <Button 
                onClick={simulateSquadEvents}
                disabled={isGenerating}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                    {text.generating}
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    {text.simulateEvents}
                  </>
                )}
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => testIndividualEvents('overlay')}
                  className="text-sm"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {text.completeOverlays}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => testIndividualEvents('demo')}
                  className="text-sm"
                >
                  <Play className="w-3 h-3 mr-1" />
                  Demo Launch
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => testIndividualEvents('schema')}
                  className="text-sm"
                >
                  <Target className="w-3 h-3 mr-1" />
                  Schema Create
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('squad-creation')}
                  className="text-sm"
                >
                  <Users className="w-3 h-3 mr-1" />
                  {text.createTestSquad}
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => onNavigate('squad-dashboard')}
                    className="flex-1"
                  >
                    📊 Squad Analytics
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => onNavigate('badge-system')}
                    className="flex-1"
                  >
                    🏆 Badge System
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Event Log */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                {text.eventLog}
              </h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setEventLog([])}
              >
                {text.clearLog}
              </Button>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {eventLog.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No events yet. Click "Simulate Squad Events" to start!</p>
                </div>
              ) : (
                eventLog.map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm p-2 bg-secondary/50 rounded border-l-2 border-primary"
                  >
                    {entry}
                  </motion.div>
                ))
              )}
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <p className="text-sm text-muted-foreground">Events Logged</p>
            <p className="text-xl font-bold">{eventLog.length}</p>
          </Card>
          <Card className="p-4 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <p className="text-sm text-muted-foreground">Overlays Completed</p>
            <p className="text-xl font-bold">
              {eventLog.filter(e => e.includes('Overlay Completed')).length}
            </p>
          </Card>
          <Card className="p-4 text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-sm text-muted-foreground">Badges Earned</p>
            <p className="text-xl font-bold">
              {eventLog.filter(e => e.includes('Badge Earned')).length}
            </p>
          </Card>
          <Card className="p-4 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <p className="text-sm text-muted-foreground">Clarity Index</p>
            <p className="text-xl font-bold">2.8x</p>
          </Card>
        </div>
      </div>
    </div>
  );
}