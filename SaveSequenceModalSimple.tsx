import React, { useState, useEffect } from "react";
import { motion } from 'motion/react';
import { toast } from "sonner@2.0.3";

interface SaveSequenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; language: string; sequence: string[] }) => Promise<boolean>;
  defaultLanguage?: 'en' | 'es';
  sequence: string[];
  isLoading?: boolean;
}

export default function SaveSequenceModalSimple({ 
  isOpen, 
  onClose, 
  onSave, 
  defaultLanguage = "en", 
  sequence,
  isLoading = false 
}: SaveSequenceModalProps) {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState(defaultLanguage);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setName("");
      setLanguage(defaultLanguage);
    }
  }, [isOpen, defaultLanguage]);

  if (!isOpen) return null;

  const handleSave = async () => {
    // Validation
    if (!name.trim()) {
      toast.error(language === 'en' ? 'Please enter a sequence name' : 'Por favor ingresa un nombre de secuencia');
      return;
    }
    
    if (sequence.length === 0) {
      toast.error(language === 'en' ? 'Cannot save empty sequence' : 'No se puede guardar secuencia vacía');
      return;
    }

    // Save sequence
    const success = await onSave({ name: name.trim(), language, sequence });
    if (success) {
      onClose();
      toast.success(language === 'en' ? 'Sequence saved successfully!' : '¡Secuencia guardada exitosamente!');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && name.trim()) {
      handleSave();
    }
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-card rounded-lg shadow-xl p-6 w-full max-w-md space-y-6 border border-border"
        onKeyDown={handleKeyPress}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">💾</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">
              {language === 'en' ? 'Save Demo Sequence' : 'Guardar Secuencia Demo'}
            </h2>
            <p className="text-muted-foreground text-sm">
              {sequence.length} {language === 'en' ? 'steps ready to save' : 'pasos listos para guardar'}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === 'en' ? 'Sequence Name' : 'Nombre de Secuencia'} *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={language === 'en' ? 'Investor Pitch Demo' : 'Demo Pitch Inversor'}
              className="w-full bg-input border border-border text-foreground rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              autoFocus
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === 'en' ? 'Language' : 'Idioma'}
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-input border border-border text-foreground rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={isLoading}
            >
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
            </select>
          </div>

          {/* Sequence Preview */}
          <div className="bg-secondary/30 rounded-lg p-3">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              {language === 'en' ? 'Sequence Preview' : 'Vista Previa'}
            </h4>
            <div className="flex flex-wrap gap-1">
              {sequence.slice(0, 4).map((step, index) => (
                <span 
                  key={index}
                  className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded border border-border"
                >
                  {step.split('/').pop()}
                </span>
              ))}
              {sequence.length > 4 && (
                <span className="text-xs text-muted-foreground px-2 py-1">
                  +{sequence.length - 4} {language === 'en' ? 'more' : 'más'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-border">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-4 py-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors border border-border"
          >
            {language === 'en' ? 'Cancel' : 'Cancelar'}
          </button>
          <button
            onClick={handleSave}
            disabled={isLoading || !name.trim() || sequence.length === 0}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-lg transition-all font-medium flex items-center justify-center gap-2"
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
            {language === 'en' ? 'Save Sequence' : 'Guardar Secuencia'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}