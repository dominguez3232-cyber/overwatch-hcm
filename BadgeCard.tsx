import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Calendar, 
  Star, 
  Trophy, 
  Shield, 
  Target,
  CheckCircle,
  Medal,
  Crown,
  Gem,
  ChevronRight,
  ExternalLink,
  Share2
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export interface BadgeData {
  badgeId: string;
  title: string;
  description: string;
  schemaTrace: string;
  earnedOn: string;
  language: 'en' | 'es';
  icon?: string;
  level: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  category?: 'Foundation' | 'Advanced' | 'Expert' | 'Mastery';
  points?: number;
  rarity?: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
}

interface BadgeCardProps {
  badge: BadgeData;
  variant?: 'default' | 'compact' | 'showcase';
  onClick?: (badgeId: string) => void;
  onExport?: (badge: BadgeData) => void;
  showDetails?: boolean;
  showExport?: boolean;
  animated?: boolean;
  className?: string;
}

const translations = {
  en: {
    earned: 'Earned',
    level: 'Level',
    category: 'Category',
    points: 'Points',
    rarity: 'Rarity',
    viewDetails: 'View Details',
    schemaTrace: 'Schema Path',
    congratulations: 'Congratulations!',
    achievement: 'Achievement Unlocked'
  },
  es: {
    earned: 'Obtenido',
    level: 'Nivel',
    category: 'Categoría',
    points: 'Puntos',
    rarity: 'Rareza',
    viewDetails: 'Ver Detalles',
    schemaTrace: 'Ruta de Esquema',
    congratulations: '¡Felicitaciones!',
    achievement: 'Logro Desbloqueado'
  }
};

const levelIcons = {
  Bronze: Trophy,
  Silver: Medal,
  Gold: Award,
  Platinum: Crown,
  Diamond: Gem
};

const levelColors = {
  Bronze: 'from-amber-600 to-amber-800',
  Silver: 'from-gray-400 to-gray-600',
  Gold: 'from-yellow-400 to-yellow-600',
  Platinum: 'from-purple-400 to-purple-600',
  Diamond: 'from-blue-400 to-cyan-400'
};

const levelBorderColors = {
  Bronze: 'border-amber-500/50',
  Silver: 'border-gray-400/50',
  Gold: 'border-yellow-400/50',
  Platinum: 'border-purple-400/50',
  Diamond: 'border-blue-400/50'
};

const rarityColors = {
  Common: 'text-gray-400',
  Uncommon: 'text-green-400',
  Rare: 'text-blue-400',
  Epic: 'text-purple-400',
  Legendary: 'text-orange-400'
};

export const BadgeCard: React.FC<BadgeCardProps> = ({
  badge,
  variant = 'default',
  onClick,
  onExport,
  showDetails = false,
  showExport = false,
  animated = true,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const t = translations[badge.language];
  const LevelIcon = levelIcons[badge.level];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return badge.language === 'en' 
      ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  if (variant === 'compact') {
    return (
      <motion.div
        whileHover={animated ? { scale: 1.02 } : undefined}
        className={`flex items-center gap-3 p-3 bg-card rounded-lg border ${levelBorderColors[badge.level]} cursor-pointer ${className}`}
        onClick={() => onClick?.(badge.badgeId)}
      >
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${levelColors[badge.level]} flex items-center justify-center`}>
          {badge.icon ? (
            <span className="text-lg">{badge.icon}</span>
          ) : (
            <LevelIcon className="w-5 h-5 text-white" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium truncate">{badge.title}</h4>
          <p className="text-xs text-muted-foreground">
            {t.earned} {formatDate(badge.earnedOn)}
          </p>
        </div>
        <Badge variant="outline" className={rarityColors[badge.rarity || 'Common']}>
          {badge.level}
        </Badge>
      </motion.div>
    );
  }

  if (variant === 'showcase') {
    return (
      <Card className={`p-6 text-center bg-gradient-to-br from-card to-accent/20 border-2 ${levelBorderColors[badge.level]} ${className}`}>
        <motion.div
          initial={animated ? { scale: 0.8, opacity: 0 } : undefined}
          animate={animated ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.5, type: "spring" }}
          className="space-y-4"
        >
          <div className="relative mx-auto w-20 h-20">
            <motion.div
              animate={animated ? { rotate: 360 } : undefined}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${levelColors[badge.level]} opacity-20`}
            />
            <div className={`relative z-10 w-full h-full rounded-full bg-gradient-to-br ${levelColors[badge.level]} flex items-center justify-center shadow-lg`}>
              {badge.icon ? (
                <span className="text-3xl">{badge.icon}</span>
              ) : (
                <LevelIcon className="w-8 h-8 text-white" />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">{badge.title}</h3>
            <p className="text-sm text-muted-foreground">
              {badge.description}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs">
            <Badge variant="outline" className={rarityColors[badge.rarity || 'Common']}>
              {badge.level}
            </Badge>
            {badge.points && (
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {badge.points} {t.points}
              </span>
            )}
          </div>

          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {t.earned} {formatDate(badge.earnedOn)}
          </div>

          {onClick && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onClick(badge.badgeId)}
              className="w-full"
            >
              {t.viewDetails}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </motion.div>
      </Card>
    );
  }

  // Default variant
  return (
    <motion.div
      whileHover={animated ? { y: -4 } : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
    >
      <Card className={`p-4 cursor-pointer transition-all duration-300 border-2 ${levelBorderColors[badge.level]} ${isHovered ? 'shadow-lg' : ''}`}>
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${levelColors[badge.level]} flex items-center justify-center shadow-md`}>
              {badge.icon ? (
                <span className="text-xl">{badge.icon}</span>
              ) : (
                <LevelIcon className="w-6 h-6 text-white" />
              )}
            </div>
            {badge.rarity === 'Legendary' && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center"
              >
                <Star className="w-2 h-2 text-white" />
              </motion.div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold leading-tight">{badge.title}</h3>
              <Badge variant="outline" className={`${rarityColors[badge.rarity || 'Common']} whitespace-nowrap`}>
                {badge.level}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {badge.description}
            </p>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {formatDate(badge.earnedOn)}
              </div>
              
              {badge.points && (
                <div className="flex items-center gap-1 text-primary">
                  <Star className="w-3 h-3" />
                  {badge.points}
                </div>
              )}
            </div>

            {showDetails && (
              <motion.div
                initial={animated ? { opacity: 0, height: 0 } : undefined}
                animate={animated ? { opacity: 1, height: 'auto' } : undefined}
                className="mt-3 pt-3 border-t border-border space-y-2"
              >
                <div className="flex items-center gap-2 text-xs">
                  <Target className="w-3 h-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{t.schemaTrace}:</span>
                  <code className="text-xs bg-secondary px-1 py-0.5 rounded font-mono">
                    {badge.schemaTrace}
                  </code>
                </div>
                
                {badge.category && (
                  <div className="flex items-center gap-2 text-xs">
                    <Shield className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{t.category}:</span>
                    <Badge variant="secondary" className="text-xs">
                      {badge.category}
                    </Badge>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {(onClick || showExport) && (
          <motion.div
            initial={animated ? { opacity: 0 } : undefined}
            animate={animated ? { opacity: isHovered ? 1 : 0 } : undefined}
            className="mt-3 pt-3 border-t border-border"
          >
            <div className="flex gap-2">
              {onClick && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onClick(badge.badgeId)}
                  className="flex-1 justify-between text-xs"
                >
                  {t.viewDetails}
                  <ExternalLink className="w-3 h-3" />
                </Button>
              )}
              {showExport && onExport && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onExport(badge);
                  }}
                  className="text-xs"
                  title={badge.language === 'en' ? 'Export & Share' : 'Exportar y Compartir'}
                >
                  <Share2 className="w-3 h-3" />
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
};

export default BadgeCard;