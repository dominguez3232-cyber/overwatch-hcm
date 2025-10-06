import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Card, CardContent } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

interface SaveSequenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: SequenceSaveData) => Promise<boolean>;
  language: 'en' | 'es';
  currentSequence: string[];
  isLoading?: boolean;
  error?: string | null;
  initialName?: string;
}

export interface SequenceSaveData {
  name: string;
  description?: string;
  tags: string[];
  category: 'investor-demo' | 'onboarding-flow' | 'tactical-coaching' | 'custom';
  isPrivate: boolean;
}

export const SaveSequenceModal: React.FC<SaveSequenceModalProps> = ({
  isOpen,
  onClose,
  onSave,
  language,
  currentSequence,
  isLoading = false,
  error = null,
  initialName = ''
}) => {
  const [formData, setFormData] = useState<SequenceSaveData>({
    name: initialName,
    description: '',
    tags: [],
    category: 'custom',
    isPrivate: true
  });
  const [tagInput, setTagInput] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: initialName,
        description: '',
        tags: [],
        category: 'custom',
        isPrivate: true
      });
      setTagInput('');
      setShowAdvanced(false);
    }
  }, [isOpen, initialName]);

  const handleSave = async () => {
    if (!formData.name.trim()) {
      toast.error(language === 'en' ? 'Please enter a sequence name' : 'Por favor ingresa un nombre de secuencia');
      return;
    }

    if (currentSequence.length === 0) {
      toast.error(language === 'en' ? 'Cannot save empty sequence' : 'No se puede guardar secuencia vacía');
      return;
    }

    const success = await onSave(formData);
    if (success) {
      onClose();
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.target === document.activeElement) {
      e.preventDefault();
      if (tagInput.trim()) {
        addTag();
      } else if (formData.name.trim()) {
        handleSave();
      }
    }
  };

  const categoryOptions = {
    'investor-demo': {
      en: '💼 Investor Demo',
      es: '💼 Demo Inversor',
      description: {
        en: 'Sequences designed for investor presentations and funding pitches',
        es: 'Secuencias diseñadas para presentaciones de inversores y pitches de financiamiento'
      }
    },
    'onboarding-flow': {
      en: '🚀 Onboarding Flow',
      es: '🚀 Flujo Incorporación',
      description: {
        en: 'Employee and stakeholder onboarding sequences',
        es: 'Secuencias de incorporación de empleados y stakeholders'
      }
    },
    'tactical-coaching': {
      en: '🎯 Tactical Coaching',
      es: '🎯 Coaching Táctico',
      description: {
        en: 'Training and coaching sequences for teams',
        es: 'Secuencias de entrenamiento y coaching para equipos'
      }
    },
    'custom': {
      en: '⚙️ Custom',
      es: '⚙️ Personalizado',
      description: {
        en: 'Custom sequences for specific use cases',
        es: 'Secuencias personalizadas para casos de uso específicos'
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-primary-foreground font-bold text-lg"
              >
                💾
              </motion.span>
            </div>
            <div>
              <DialogTitle className="text-xl">
                {language === 'en' ? 'Save Demo Sequence' : 'Guardar Secuencia Demo'}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm">
                {language === 'en' 
                  ? 'Create a reusable cinematic walkthrough for your command center'
                  : 'Crea un recorrido cinematográfico reutilizable para tu centro de comando'
                }
              </DialogDescription>
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Sequence Preview */}
          <Card className="bg-secondary/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-sm font-medium text-muted-foreground">
                  {language === 'en' ? 'Sequence Preview' : 'Vista Previa Secuencia'}
                </Label>
                <Badge variant="outline">
                  {currentSequence.length} {language === 'en' ? 'steps' : 'pasos'}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-1">
                {currentSequence.slice(0, 6).map((step, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {step.split('/').pop()}
                  </Badge>
                ))}
                {currentSequence.length > 6 && (
                  <Badge variant="outline" className="text-xs">
                    +{currentSequence.length - 6} {language === 'en' ? 'more' : 'más'}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="sequence-name" className="text-base font-medium">
                {language === 'en' ? 'Sequence Name' : 'Nombre Secuencia'} *
              </Label>
              <Input
                id="sequence-name"
                placeholder={language === 'en' ? 'Enter sequence name...' : 'Ingresa nombre de secuencia...'}
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                onKeyPress={handleKeyPress}
                className="mt-1"
                autoFocus
              />
            </div>

            <div>
              <Label htmlFor="sequence-category" className="text-base font-medium">
                {language === 'en' ? 'Category' : 'Categoría'}
              </Label>
              <Select 
                value={formData.category} 
                onValueChange={(value: any) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categoryOptions).map(([key, option]) => (
                    <SelectItem key={key} value={key}>
                      <div className="flex items-center gap-2">
                        <span>{option[language]}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                {categoryOptions[formData.category].description[language]}
              </p>
            </div>
          </div>

          {/* Advanced Options */}
          <div>
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <motion.span
                animate={{ rotate: showAdvanced ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▶
              </motion.span>
              {language === 'en' ? 'Advanced Options' : 'Opciones Avanzadas'}
            </button>

            <AnimatePresence>
              {showAdvanced && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 mt-4 pt-4 border-t border-border">
                    {/* Description */}
                    <div>
                      <Label htmlFor="sequence-description" className="text-sm font-medium">
                        {language === 'en' ? 'Description (Optional)' : 'Descripción (Opcional)'}
                      </Label>
                      <Textarea
                        id="sequence-description"
                        placeholder={language === 'en' 
                          ? 'Describe what this sequence demonstrates...'
                          : 'Describe qué demuestra esta secuencia...'
                        }
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        className="mt-1 min-h-[80px]"
                      />
                    </div>

                    {/* Tags */}
                    <div>
                      <Label className="text-sm font-medium">
                        {language === 'en' ? 'Tags' : 'Etiquetas'}
                      </Label>
                      <div className="flex gap-2 mt-1">
                        <Input
                          placeholder={language === 'en' ? 'Add tag...' : 'Agregar etiqueta...'}
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              addTag();
                            }
                          }}
                          className="flex-1"
                        />
                        <Button 
                          type="button" 
                          size="sm" 
                          onClick={addTag}
                          disabled={!tagInput.trim()}
                        >
                          +
                        </Button>
                      </div>
                      {formData.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {formData.tags.map((tag, index) => (
                            <Badge 
                              key={index} 
                              variant="secondary" 
                              className="cursor-pointer hover:bg-destructive/20"
                              onClick={() => removeTag(tag)}
                            >
                              {tag} ×
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Privacy */}
                    <div className="flex items-center gap-3">
                      <Label className="text-sm font-medium">
                        {language === 'en' ? 'Privacy' : 'Privacidad'}
                      </Label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="privacy"
                            checked={formData.isPrivate}
                            onChange={() => setFormData(prev => ({ ...prev, isPrivate: true }))}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm">
                            🔒 {language === 'en' ? 'Private' : 'Privado'}
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="privacy"
                            checked={!formData.isPrivate}
                            onChange={() => setFormData(prev => ({ ...prev, isPrivate: false }))}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm">
                            🌐 {language === 'en' ? 'Shareable' : 'Compartible'}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Error Display */}
          {error && (
            <Alert>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button 
              variant="outline" 
              onClick={onClose}
              disabled={isLoading}
              className="flex-1"
            >
              {language === 'en' ? 'Cancel' : 'Cancelar'}
            </Button>
            <Button 
              onClick={handleSave}
              disabled={isLoading || !formData.name.trim() || currentSequence.length === 0}
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
              ) : (
                '💾'
              )}
              <span className="ml-2">
                {language === 'en' ? 'Save Sequence' : 'Guardar Secuencia'}
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};