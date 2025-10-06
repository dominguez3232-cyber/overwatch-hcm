import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, MessageCircle, BarChart3, Settings, X } from 'lucide-react';

interface FloatingActionButtonProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
}

export function FloatingActionButton({ language, onNavigate }: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: MessageCircle,
      label: language === 'en' ? 'Get Help' : 'Obtener Ayuda',
      action: () => {
        // Trigger coaching overlay or help system
        console.log('Help requested');
      }
    },
    {
      icon: BarChart3,
      label: language === 'en' ? 'Analytics' : 'Analíticas',
      action: () => onNavigate('dashboard')
    },
    {
      icon: Settings,
      label: language === 'en' ? 'Settings' : 'Configuración',
      action: () => {
        // Open settings
        console.log('Settings opened');
      }
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Items */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-16 right-0 space-y-3"
        >
          {actions.map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                transition: { delay: index * 0.1 }
              }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              onClick={() => {
                action.action();
                setIsOpen(false);
              }}
              className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:bg-accent transition-colors shadow-lg group"
            >
              <action.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
              <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Main FAB */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary-foreground" />
          ) : (
            <Plus className="w-6 h-6 text-primary-foreground" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}