import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, AlertCircle, XCircle, Clock, Wifi, WifiOff } from 'lucide-react';

interface StatusIndicatorProps {
  type: 'success' | 'warning' | 'error' | 'loading' | 'online' | 'offline';
  message?: string;
  language: 'en' | 'es';
  size?: 'sm' | 'md' | 'lg';
}

export function StatusIndicator({ type, message, language, size = 'md' }: StatusIndicatorProps) {
  const icons = {
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
    loading: Clock,
    online: Wifi,
    offline: WifiOff
  };

  const colors = {
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    loading: 'text-blue-500',
    online: 'text-green-500',
    offline: 'text-red-500'
  };

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const defaultMessages = {
    success: { en: 'Success', es: 'Éxito' },
    warning: { en: 'Warning', es: 'Advertencia' },
    error: { en: 'Error', es: 'Error' },
    loading: { en: 'Loading...', es: 'Cargando...' },
    online: { en: 'Online', es: 'En línea' },
    offline: { en: 'Offline', es: 'Sin conexión' }
  };

  const Icon = icons[type];
  const displayMessage = message || defaultMessages[type][language];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-2"
    >
      <motion.div
        animate={type === 'loading' ? { rotate: 360 } : {}}
        transition={type === 'loading' ? { duration: 2, repeat: Infinity, ease: "linear" } : {}}
      >
        <Icon className={`${sizes[size]} ${colors[type]}`} />
      </motion.div>
      {displayMessage && (
        <span className={`text-${size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'base'} text-muted-foreground`}>
          {displayMessage}
        </span>
      )}
    </motion.div>
  );
}