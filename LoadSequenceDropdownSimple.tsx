import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DemoSequence } from '../utils/useSequenceManager';
import { toast } from 'sonner@2.0.3';

interface LoadSequenceDropdownSimpleProps {
  sequences: DemoSequence[];
  isLoading: boolean;
  language: 'en' | 'es';
  onLoad: (sequence: DemoSequence) => void;
  onDelete?: (id: string) => void;
  onLoadShared?: (shareCode: string) => void;
  disabled?: boolean;
}

export default function LoadSequenceDropdownSimple({
  sequences,
  isLoading,
  language,
  onLoad,
  onDelete,
  onLoadShared,
  disabled = false
}: LoadSequenceDropdownSimpleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shareCode, setShareCode] = useState('');

  const handleLoadShared = () => {
    if (shareCode.trim() && onLoadShared) {
      onLoadShared(shareCode.trim());
      setShareCode('');
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled || isLoading}
        className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors border border-border"
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          />
        ) : (
          '📂'
        )}
        {language === 'en' ? 'Load Sequence' : 'Cargar Secuencia'}
        {sequences.length > 0 && (
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            {sequences.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-xl z-50">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold mb-3 text-foreground">
              {language === 'en' ? 'Load Demo Sequence' : 'Cargar Secuencia Demo'}
            </h3>
            
            {/* Load from Share Code */}
            {onLoadShared && (
              <div className="space-y-2 mb-4 p-3 bg-secondary/30 rounded-lg">
                <h4 className="text-sm font-medium text-muted-foreground">
                  {language === 'en' ? 'Load Shared Sequence' : 'Cargar Secuencia Compartida'}
                </h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={language === 'en' ? 'Enter share code...' : 'Ingrese código...'}
                    value={shareCode}
                    onChange={(e) => setShareCode(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleLoadShared();
                      }
                    }}
                    className="flex-1 bg-input border border-border text-foreground rounded px-2 py-1 text-sm"
                  />
                  <button 
                    onClick={handleLoadShared}
                    disabled={!shareCode.trim()}
                    className="px-3 py-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded text-sm disabled:opacity-50"
                  >
                    {language === 'en' ? 'Load' : 'Cargar'}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="max-h-64 overflow-y-auto p-2">
            {sequences.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    />
                    {language === 'en' ? 'Loading...' : 'Cargando...'}
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-2">📭</div>
                    <div className="text-sm">
                      {language === 'en' ? 'No saved sequences found' : 'No se encontraron secuencias guardadas'}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-1">
                {sequences.map((sequence) => (
                  <div
                    key={sequence.id}
                    className="group bg-secondary/30 hover:bg-accent/50 rounded-lg p-3 transition-colors border border-border"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-medium text-sm text-foreground truncate">
                            {sequence.name}
                          </h5>
                          {sequence.isShared && (
                            <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">
                              {language === 'en' ? 'Shared' : 'Compartido'}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>
                            {sequence.sequence.length} {language === 'en' ? 'steps' : 'pasos'}
                          </span>
                          <span>•</span>
                          <span>
                            {new Date(sequence.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => {
                            onLoad(sequence);
                            setIsOpen(false);
                          }}
                          className="px-2 py-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded text-xs"
                        >
                          {language === 'en' ? 'Load' : 'Cargar'}
                        </button>
                        {onDelete && sequence.id && !sequence.isShared && (
                          <button
                            onClick={() => {
                              if (window.confirm(language === 'en' ? 'Delete this sequence?' : '¿Eliminar esta secuencia?')) {
                                onDelete(sequence.id!);
                              }
                            }}
                            className="px-2 py-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded text-xs"
                          >
                            🗑️
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Close button */}
          <div className="p-2 border-t border-border">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {language === 'en' ? 'Close' : 'Cerrar'}
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}