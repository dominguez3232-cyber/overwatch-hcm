import React, { useState, useEffect } from "react";
import { motion } from 'motion/react';
import sitemap, { getDomainColor, getDomainIcon } from "../config/sitemapConfig";
import { getSchemaNode } from "../utils/schemaLoader";
import DemoSequenceController from "./DemoSequenceControllerSafe";
import { useSequenceManager, DemoSequence } from "../utils/useSequenceManager";
import SaveSequenceModalSimple from "./SaveSequenceModalSimple";
import LoadSequenceDropdownSimple from "./LoadSequenceDropdownSimple";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { Input } from "./ui/input";
import { toast } from "sonner@2.0.3";
import ShareModal from "./ShareModal";

interface SequenceBuilderProps {
  language: 'en' | 'es';
  onNavigate?: (path: string) => void;
}

export const SequenceBuilder: React.FC<SequenceBuilderProps> = ({ language, onNavigate }) => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('finance');
  const [userId] = useState(() => `founder-${Date.now()}`); // Generate a simple user ID
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [sequenceName, setSequenceName] = useState('');
  const [shareSequenceData, setShareSequenceData] = useState<{ id: string; name: string } | null>(null);
  const [currentSequenceId, setCurrentSequenceId] = useState<string | null>(null);

  const {
    sequences,
    isLoading,
    error,
    saveSequence,
    loadSequences,
    updateSequence,
    deleteSequence,
    shareSequence,
    loadSharedSequence,
    clearError
  } = useSequenceManager();

  const handleAdd = (branch: string, route: string) => {
    const trace = `${branch}.${route}`;
    if (!sequence.includes(trace)) {
      setSequence([...sequence, trace]);
    }
  };

  const handleRemove = (trace: string) => {
    setSequence(sequence.filter((item) => item !== trace));
  };

  const moveItem = (index: number, direction: number) => {
    const newSequence = [...sequence];
    const target = index + direction;
    if (target >= 0 && target < newSequence.length) {
      [newSequence[index], newSequence[target]] = [newSequence[target], newSequence[index]];
      setSequence(newSequence);
    }
  };

  const clearSequence = () => {
    setSequence([]);
    setCurrentSequenceId(null);
    setSequenceName('');
  };

  // Load sequences on component mount and handle URL parameters
  useEffect(() => {
    loadSequences(userId, language);
    
    // Check for shared sequence in URL
    const urlParams = new URLSearchParams(window.location.search);
    const sharedId = urlParams.get('id');
    if (sharedId) {
      handleLoadSharedFromUrl(sharedId);
    }
  }, [loadSequences, userId, language]);

  // Handle loading shared sequence from URL
  const handleLoadSharedFromUrl = async (shareId: string) => {
    try {
      const sharedSequence = await loadSharedSequence(shareId);
      if (sharedSequence) {
        setSequence(sharedSequence.sequence);
        setSequenceName(sharedSequence.name);
        setCurrentSequenceId(sharedSequence.id || null);
        toast.success(
          language === 'en' 
            ? `Loaded shared sequence: ${sharedSequence.name}` 
            : `Secuencia compartida cargada: ${sharedSequence.name}`
        );
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } catch (err) {
      toast.error(language === 'en' ? 'Failed to load shared sequence' : 'Error al cargar secuencia compartida');
    }
  };

  // Handle saving sequence
  const handleSaveSequence = async (saveData: { name: string; language: string; sequence: string[] }): Promise<boolean> => {
    try {
      const savedSequence = await saveSequence(saveData.name, sequence, userId, language);
      if (savedSequence) {
        setCurrentSequenceId(savedSequence.id || null);
        setSequenceName(saveData.name);
        return true;
      }
      return false;
    } catch (err) {
      toast.error(language === 'en' ? 'Failed to save sequence' : 'Error al guardar secuencia');
      return false;
    }
  };

  // Handle loading sequence
  const handleLoadSequence = (loadedSequence: DemoSequence) => {
    setSequence(loadedSequence.sequence);
    setSequenceName(loadedSequence.name);
    setCurrentSequenceId(loadedSequence.id || null);
    toast.success(language === 'en' ? 'Sequence loaded successfully!' : '¡Secuencia cargada exitosamente!');
  };

  // Handle deleting sequence
  const handleDeleteSequence = async (id: string) => {
    try {
      const success = await deleteSequence(id);
      if (success) {
        toast.success(language === 'en' ? 'Sequence deleted successfully!' : '¡Secuencia eliminada exitosamente!');
        // Clear current sequence if it was deleted
        if (currentSequenceId === id) {
          clearSequence();
        }
      }
    } catch (err) {
      toast.error(language === 'en' ? 'Failed to delete sequence' : 'Error al eliminar secuencia');
    }
  };

  // Handle sharing sequence
  const handleShareSequence = async () => {
    if (!currentSequenceId) {
      toast.error(language === 'en' ? 'Please save the sequence first' : 'Por favor guarda la secuencia primero');
      return;
    }

    try {
      const shareData = await shareSequence(currentSequenceId);
      if (shareData) {
        setShareSequenceData({
          id: shareData.shareCode,
          name: sequenceName
        });
        setShareDialogOpen(true);
      }
    } catch (err) {
      toast.error(language === 'en' ? 'Failed to share sequence' : 'Error al compartir secuencia');
    }
  };

  // Handle loading shared sequence by code
  const handleLoadSharedSequence = async (shareCodeInput: string) => {
    try {
      const sharedSequence = await loadSharedSequence(shareCodeInput);
      if (sharedSequence) {
        handleLoadSequence(sharedSequence);
      }
    } catch (err) {
      toast.error(language === 'en' ? 'Failed to load shared sequence' : 'Error al cargar secuencia compartida');
    }
  };

  const presetSequences = {
    'investor-demo': [
      'finance.trust-velocity',
      'trigger.difficulty-risk', 
      'science.philosophy',
      'law.assumed-right',
      'new.coaching-overlay',
      'time.before-after'
    ],
    'onboarding-flow': [
      'finance.ethical-roi',
      'trigger.culture-velocity',
      'science.framework-library',
      'law.compliance-risk',
      'new.strategic-advisory',
      'time.founder-journey'
    ],
    'tactical-coaching': [
      'finance.cash-flow-optimization',
      'trigger.performance-gaps',
      'science.behavioral-insights',
      'law.policy-framework',
      'new.implementation-roadmap',
      'time.milestone-tracking'
    ]
  };

  const loadPreset = (presetKey: keyof typeof presetSequences) => {
    setSequence(presetSequences[presetKey]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                🎬 {language === 'en' ? 'Demo Sequence Builder' : 'Constructor de Secuencia Demo'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Build cinematic walkthroughs for investor demos, onboarding flows, and tactical coaching'
                  : 'Construye recorridos cinemáticos para demos de inversores, flujos de incorporación y coaching táctico'
                }
              </p>
            </div>

            {onNavigate && (
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('schema-demo')}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors"
                >
                  {language === 'en' ? 'Schema Demo' : 'Demo de Esquema'}
                </button>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {language === 'en' ? 'Full Dashboard' : 'Dashboard Completo'}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Controls Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preset & Cloud Sequences */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              ⚡ {language === 'en' ? 'Quick Start & Library' : 'Inicio Rápido y Biblioteca'}
            </h3>
            
            {/* Quick Start Presets */}
            <div className="space-y-2 mb-4">
              <h4 className="text-sm font-medium text-muted-foreground">
                {language === 'en' ? 'Quick Start Templates' : 'Plantillas de Inicio Rápido'}
              </h4>
              {Object.entries(presetSequences).map(([key, _]) => (
                <button
                  key={key}
                  onClick={() => loadPreset(key as keyof typeof presetSequences)}
                  className="w-full text-left p-2 bg-secondary hover:bg-accent rounded-lg transition-colors border border-border text-sm"
                >
                  <div className="font-medium text-foreground">
                    {key === 'investor-demo' && (language === 'en' ? '💼 Investor Demo' : '💼 Demo Inversor')}
                    {key === 'onboarding-flow' && (language === 'en' ? '🚀 Onboarding Flow' : '🚀 Flujo Incorporación')}
                    {key === 'tactical-coaching' && (language === 'en' ? '🎯 Tactical Coaching' : '🎯 Coaching Táctico')}
                  </div>
                </button>
              ))}
            </div>

            {/* Cloud Actions */}
            <div className="border-t border-border pt-4 space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">
                {language === 'en' ? 'Sequence Management' : 'Gestión de Secuencias'}
              </h4>
              
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  size="sm" 
                  onClick={() => setSaveModalOpen(true)}
                  disabled={sequence.length === 0}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  💾 {language === 'en' ? 'Save' : 'Guardar'}
                </Button>
                
                <LoadSequenceDropdownSimple
                  sequences={sequences}
                  isLoading={isLoading}
                  language={language}
                  onLoad={handleLoadSequence}
                  onDelete={handleDeleteSequence}
                  onLoadShared={handleLoadSharedSequence}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={handleShareSequence}
                  disabled={!currentSequenceId}
                >
                  🔗 {language === 'en' ? 'Share' : 'Compartir'}
                </Button>
                {onNavigate && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onNavigate('sequence-library')}
                  >
                    📁 {language === 'en' ? 'Library' : 'Biblioteca'}
                  </Button>
                )}
              </div>
              
              {sequences.length > 0 && (
                <div className="text-xs text-muted-foreground text-center">
                  {sequences.length} {language === 'en' ? 'saved sequences' : 'secuencias guardadas'}
                </div>
              )}
            </div>
          </div>

          {/* Domain Filter */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              🎯 {language === 'en' ? 'Domain Filter' : 'Filtro de Dominio'}
            </h3>
            <div className="space-y-2">
              {Object.keys(sitemap.overwatch3).map((domain) => {
                const domainData = sitemap.overwatch3[domain];
                const isActive = selectedDomain === domain;
                
                return (
                  <button
                    key={domain}
                    onClick={() => setSelectedDomain(domain)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      isActive 
                        ? 'bg-primary/20 border-primary/50 text-primary' 
                        : 'bg-secondary hover:bg-accent border-border text-foreground'
                    } border flex items-center gap-3`}
                  >
                    <div className={`
                      w-6 h-6 rounded flex items-center justify-center text-sm
                      ${isActive ? `bg-gradient-to-r ${getDomainColor(domain)}` : 'bg-muted'}
                    `}>
                      {getDomainIcon(domain)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{domainData.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {domainData.routes.length} modules
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sequence Status */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              🛠️ {language === 'en' ? 'Sequence Status' : 'Estado de Secuencia'}
            </h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Current sequence:' : 'Secuencia actual:'} {sequence.length} {language === 'en' ? 'steps' : 'pasos'}
                </div>
                {sequenceName && (
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{sequenceName}</Badge>
                    {currentSequenceId && (
                      <Badge variant="outline" className="text-xs">
                        {language === 'en' ? 'Saved' : 'Guardado'}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              
              {error && (
                <Alert>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={clearSequence}
                  disabled={sequence.length === 0}
                  className="w-full"
                >
                  🗑️ {language === 'en' ? 'Clear All' : 'Limpiar Todo'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(sequence, null, 2));
                    toast.success(language === 'en' ? 'Sequence copied!' : '¡Secuencia copiada!');
                  }}
                  disabled={sequence.length === 0}
                  className="w-full"
                >
                  📋 {language === 'en' ? 'Copy Sequence' : 'Copiar Secuencia'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Available Modules Grid */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="text-lg">{getDomainIcon(selectedDomain)}</span>
            {sitemap.overwatch3[selectedDomain]?.title} - {language === 'en' ? 'Available Modules' : 'Módulos Disponibles'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sitemap.overwatch3[selectedDomain]?.routes.map((route) => {
              const trace = `${selectedDomain}.${route}`;
              const schema = getSchemaNode(trace);
              const isInSequence = sequence.includes(trace);
              
              return (
                <motion.button
                  key={trace}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAdd(selectedDomain, route)}
                  disabled={isInSequence}
                  className={`
                    p-4 rounded-lg border text-left transition-all
                    ${isInSequence 
                      ? 'bg-muted border-muted text-muted-foreground cursor-not-allowed opacity-50' 
                      : 'bg-secondary hover:bg-accent border-border hover:border-primary/50 cursor-pointer'
                    }
                  `}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`
                      w-8 h-8 rounded flex items-center justify-center text-sm
                      ${isInSequence 
                        ? 'bg-muted' 
                        : `bg-gradient-to-r ${getDomainColor(selectedDomain)}`
                      }
                    `}>
                      {schema?.visualTokens?.icon || getDomainIcon(selectedDomain)}
                    </div>
                    {isInSequence && <span className="text-xs text-primary">✓ Added</span>}
                  </div>
                  
                  <div className="font-medium mb-1">
                    {route.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                  
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {schema?.caption?.[language] || 'Schema intelligence module'}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Current Sequence */}
        {sequence.length > 0 && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              🧩 {language === 'en' ? 'Your Demo Sequence' : 'Tu Secuencia Demo'}
              <span className="text-sm font-normal text-muted-foreground">
                ({sequence.length} {language === 'en' ? 'steps' : 'pasos'})
              </span>
            </h3>
            
            <div className="space-y-3 mb-6">
              {sequence.map((trace, index) => {
                const schema = getSchemaNode(trace);
                const [domain, route] = trace.split('.');
                
                return (
                  <motion.div
                    key={trace}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-secondary border border-border rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-sm text-muted-foreground font-mono w-8">
                        {index + 1}.
                      </div>
                      
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center
                        bg-gradient-to-r ${getDomainColor(domain)}
                      `}>
                        <span className="text-sm">{schema?.visualTokens?.icon || getDomainIcon(domain)}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground">{trace}</div>
                        <div className="text-sm text-muted-foreground italic truncate">
                          {schema?.caption?.[language]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => moveItem(index, -1)}
                        disabled={index === 0}
                        className="px-2 py-1 bg-card hover:bg-accent border border-border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        title={language === 'en' ? 'Move up' : 'Mover arriba'}
                      >
                        ↑
                      </button>
                      <button 
                        onClick={() => moveItem(index, 1)}
                        disabled={index === sequence.length - 1}
                        className="px-2 py-1 bg-card hover:bg-accent border border-border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        title={language === 'en' ? 'Move down' : 'Mover abajo'}
                      >
                        ↓
                      </button>
                      <button 
                        onClick={() => handleRemove(trace)}
                        className="px-2 py-1 bg-destructive/20 hover:bg-destructive/30 text-destructive border border-destructive/50 rounded text-sm"
                        title={language === 'en' ? 'Remove' : 'Eliminar'}
                      >
                        ✕
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Live Preview */}
        {sequence.length > 0 && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              🎥 {language === 'en' ? 'Live Preview' : 'Vista Previa en Vivo'}
            </h3>
            <DemoSequenceController 
              sequence={sequence} 
              autoPlay={false} 
              language={language} 
            />
          </div>
        )}

        {/* Getting Started Help */}
        {sequence.length === 0 && (
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Ready to Build Your Demo?' : '¿Listo para Construir tu Demo?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en' 
                  ? 'Start by selecting a preset sequence or browse the available modules to build your custom cinematic walkthrough.'
                  : 'Comienza seleccionando una secuencia preestablecida o navega por los módulos disponibles para construir tu recorrido cinemático personalizado.'
                }
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => loadPreset('investor-demo')}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  💼 {language === 'en' ? 'Try Investor Demo' : 'Probar Demo Inversor'}
                </button>
                <button
                  onClick={() => loadPreset('onboarding-flow')}
                  className="px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  🚀 {language === 'en' ? 'Try Onboarding' : 'Probar Incorporación'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Save Sequence Modal */}
        <SaveSequenceModalSimple
          isOpen={saveModalOpen}
          onClose={() => setSaveModalOpen(false)}
          onSave={handleSaveSequence}
          defaultLanguage={language}
          sequence={sequence}
          isLoading={isLoading}
        />

        {/* Share Modal */}
        {shareSequenceData && (
          <ShareModal
            isOpen={shareDialogOpen}
            onClose={() => {
              setShareDialogOpen(false);
              setShareSequenceData(null);
            }}
            sequenceId={shareSequenceData.id}
            sequenceName={shareSequenceData.name}
            language={language}
            autoPlay={true}
          />
        )}
      </div>
    </div>
  );
};

export default SequenceBuilder;