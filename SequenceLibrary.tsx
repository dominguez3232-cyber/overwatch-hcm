import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { useSequenceManager, DemoSequence } from "../utils/useSequenceManager";
import DemoSequenceController from "./DemoSequenceControllerSafe";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { ScrollArea } from "./ui/scroll-area";
import { toast } from "sonner@2.0.3";
import ShareModal from "./ShareModal";

interface SequenceLibraryProps {
  userId?: string;
  language: 'en' | 'es';
  onLoad?: (sequence: DemoSequence) => void;
  onNavigate?: (path: string) => void;
  mode?: 'standalone' | 'embedded';
}

export default function SequenceLibrary({ 
  userId = `founder-${Date.now()}`, 
  language, 
  onLoad,
  onNavigate,
  mode = 'standalone'
}: SequenceLibraryProps) {
  const [sequences, setSequences] = useState<DemoSequence[]>([]);
  const [selected, setSelected] = useState<DemoSequence | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [shareSequenceData, setShareSequenceData] = useState<{ id: string; name: string } | null>(null);

  const {
    sequences: managedSequences,
    isLoading,
    error,
    loadSequences,
    deleteSequence,
    shareSequence
  } = useSequenceManager();

  // Load sequences on mount
  useEffect(() => {
    loadSequences(userId, language);
  }, [loadSequences, userId, language]);

  // Update local sequences when managed sequences change
  useEffect(() => {
    setSequences(managedSequences);
  }, [managedSequences]);

  // Filter sequences
  const filteredSequences = sequences.filter(seq => {
    const matchesSearch = seq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (seq.sequence && seq.sequence.some(step => 
        step.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    
    const matchesCategory = filterCategory === 'all' || 
      seq.name.toLowerCase().includes(filterCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  // Group sequences by inferred category
  const groupedSequences = filteredSequences.reduce((groups, seq) => {
    let category = 'custom';
    const nameLower = seq.name.toLowerCase();
    
    if (nameLower.includes('investor') || nameLower.includes('demo') || nameLower.includes('pitch')) {
      category = 'investor-demo';
    } else if (nameLower.includes('onboarding') || nameLower.includes('training')) {
      category = 'onboarding-flow';
    } else if (nameLower.includes('coaching') || nameLower.includes('tactical')) {
      category = 'tactical-coaching';
    }

    if (!groups[category]) groups[category] = [];
    groups[category].push(seq);
    return groups;
  }, {} as Record<string, DemoSequence[]>);

  const handleLoad = (sequence: DemoSequence) => {
    if (onLoad) {
      onLoad(sequence);
      toast.success(language === 'en' ? 'Sequence loaded!' : '¡Secuencia cargada!');
    }
  };

  const handleDelete = async (id: string) => {
    const confirmMessage = language === 'en' 
      ? 'Are you sure you want to delete this sequence?' 
      : '¿Estás seguro de que quieres eliminar esta secuencia?';
    
    if (window.confirm(confirmMessage)) {
      const success = await deleteSequence(id);
      if (success) {
        if (selected?.id === id) {
          setSelected(null);
        }
        toast.success(language === 'en' ? 'Sequence deleted!' : '¡Secuencia eliminada!');
      }
    }
  };

  const handleShare = async (sequence: DemoSequence) => {
    if (!sequence.id) {
      toast.error(language === 'en' ? 'Cannot share unsaved sequence' : 'No se puede compartir secuencia no guardada');
      return;
    }

    try {
      const shareResult = await shareSequence(sequence.id);
      if (shareResult) {
        setShareSequenceData({
          id: shareResult.shareCode,
          name: sequence.name
        });
        setShareDialogOpen(true);
      }
    } catch (err) {
      toast.error(language === 'en' ? 'Failed to share sequence' : 'Error al compartir secuencia');
    }
  };



  const categoryIcons = {
    'investor-demo': '💼',
    'onboarding-flow': '🚀',
    'tactical-coaching': '🎯',
    'custom': '⚙️'
  };

  const categoryNames = {
    'investor-demo': {
      en: 'Investor Demos',
      es: 'Demos Inversor'
    },
    'onboarding-flow': {
      en: 'Onboarding Flows',
      es: 'Flujos Incorporación'
    },
    'tactical-coaching': {
      en: 'Tactical Coaching',
      es: 'Coaching Táctico'
    },
    'custom': {
      en: 'Custom Sequences',
      es: 'Secuencias Personalizadas'
    }
  };

  return (
    <div className={`${mode === 'standalone' ? 'min-h-screen' : ''} bg-background text-foreground`}>
      {mode === 'standalone' && (
        <div className="h-20 px-6 lg:px-20 flex items-center bg-card border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">📁</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">
                {language === 'en' ? 'Demo Sequence Library' : 'Biblioteca de Secuencias Demo'}
              </h1>
              <p className="text-muted-foreground text-sm">
                {language === 'en' ? 'Browse, preview, and deploy cinematic walkthroughs' : 'Explora, previsualiza y despliega recorridos cinematográficos'}
              </p>
            </div>
          </div>
          <div className="flex-1"></div>
          {onNavigate && (
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => onNavigate('sequence-builder')}
              >
                ⚡ {language === 'en' ? 'New Sequence' : 'Nueva Secuencia'}
              </Button>
              <Button 
                variant="ghost"
                onClick={() => onNavigate('persona')}
              >
                {language === 'en' ? 'Back to Platform' : 'Volver a Plataforma'}
              </Button>
            </div>
          )}
        </div>
      )}

      <div className="p-6 space-y-6">
        {mode === 'embedded' && (
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">📁</span>
            </div>
            <h2 className="text-2xl font-bold">
              {language === 'en' ? 'Demo Sequence Library' : 'Biblioteca de Secuencias Demo'}
            </h2>
          </div>
        )}

        {/* Search and Filter */}
        <div className="flex gap-4 items-center">
          <Input
            placeholder={language === 'en' ? 'Search sequences...' : 'Buscar secuencias...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {language === 'en' ? 'All Categories' : 'Todas las Categorías'}
              </SelectItem>
              <SelectItem value="investor">
                💼 {language === 'en' ? 'Investor Demos' : 'Demos Inversor'}
              </SelectItem>
              <SelectItem value="onboarding">
                🚀 {language === 'en' ? 'Onboarding' : 'Incorporación'}
              </SelectItem>
              <SelectItem value="coaching">
                🎯 {language === 'en' ? 'Coaching' : 'Coaching'}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {error && (
          <Alert>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sequence List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {language === 'en' ? 'Saved Sequences' : 'Secuencias Guardadas'}
              </h3>
              <Badge variant="outline">
                {filteredSequences.length} {language === 'en' ? 'sequences' : 'secuencias'}
              </Badge>
            </div>

            <ScrollArea className="h-[600px]">
              {isLoading ? (
                <div className="text-center py-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"
                  />
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Loading sequences...' : 'Cargando secuencias...'}
                  </p>
                </div>
              ) : filteredSequences.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📭</div>
                  <h4 className="text-lg font-medium mb-2">
                    {language === 'en' ? 'No sequences found' : 'No se encontraron secuencias'}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {searchTerm || filterCategory !== 'all' 
                      ? (language === 'en' ? 'Try adjusting your filters' : 'Intenta ajustar tus filtros')
                      : (language === 'en' ? 'Create your first demo sequence' : 'Crea tu primera secuencia demo')
                    }
                  </p>
                  {onNavigate && !searchTerm && filterCategory === 'all' && (
                    <Button onClick={() => onNavigate('sequence-builder')}>
                      ⚡ {language === 'en' ? 'Create Sequence' : 'Crear Secuencia'}
                    </Button>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(groupedSequences).map(([category, categorySequences]) => (
                    <div key={category}>
                      <div className="flex items-center gap-2 mb-3 px-2">
                        <span className="text-lg">{categoryIcons[category as keyof typeof categoryIcons]}</span>
                        <h4 className="font-medium text-muted-foreground">
                          {categoryNames[category as keyof typeof categoryNames]?.[language] || category}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {categorySequences.length}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        {categorySequences.map((seq) => (
                          <motion.div
                            key={seq.id}
                            whileHover={{ scale: 1.02 }}
                            className="group"
                          >
                            <Card 
                              className={`cursor-pointer hover:bg-accent/50 transition-colors ${
                                selected?.id === seq.id ? 'ring-2 ring-primary' : ''
                              }`}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex-1 min-w-0" onClick={() => setSelected(seq)}>
                                    <div className="flex items-center gap-2 mb-2">
                                      <h5 className="font-semibold truncate">{seq.name}</h5>
                                      {seq.isShared && (
                                        <Badge variant="outline" className="text-xs">
                                          {language === 'en' ? 'Shared' : 'Compartido'}
                                        </Badge>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                      <span>
                                        {seq.sequence.length} {language === 'en' ? 'steps' : 'pasos'}
                                      </span>
                                      <span>
                                        {new Date(seq.created_at).toLocaleDateString()}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button
                                      size="sm"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelected(seq);
                                      }}
                                      className="h-8 px-2 text-xs"
                                    >
                                      👁️ {language === 'en' ? 'Preview' : 'Vista'}
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleLoad(seq);
                                      }}
                                      className="h-8 px-2 text-xs"
                                    >
                                      📂 {language === 'en' ? 'Load' : 'Cargar'}
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleShare(seq);
                                      }}
                                      className="h-8 px-2 text-xs"
                                    >
                                      🔗
                                    </Button>
                                    {seq.id && !seq.isShared && (
                                      <Button
                                        size="sm"
                                        variant="destructive"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleDelete(seq.id!);
                                        }}
                                        className="h-8 px-2 text-xs"
                                      >
                                        🗑️
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>

          {/* Live Preview */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {language === 'en' ? 'Live Preview' : 'Vista Previa en Vivo'}
            </h3>
            
            {selected ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        🎥 {selected.name}
                      </CardTitle>
                      <CardDescription>
                        {selected.sequence.length} {language === 'en' ? 'steps' : 'pasos'} • {new Date(selected.created_at).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        onClick={() => handleLoad(selected)}
                      >
                        📂 {language === 'en' ? 'Load' : 'Cargar'}
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        onClick={() => handleShare(selected)}
                      >
                        🔗 {language === 'en' ? 'Share' : 'Compartir'}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <DemoSequenceController
                    sequence={selected.sequence}
                    autoPlay={false}
                    language={language}
                    showControls={true}
                  />
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <h4 className="text-lg font-medium mb-2">
                    {language === 'en' ? 'Select a sequence to preview' : 'Selecciona una secuencia para previsualizar'}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? 'Click on any sequence from the list to see a live demonstration'
                      : 'Haz clic en cualquier secuencia de la lista para ver una demostración en vivo'
                    }
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

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
          />
        )}
      </div>
    </div>
  );
}