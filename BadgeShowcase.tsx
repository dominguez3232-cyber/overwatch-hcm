import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ArrowLeft, 
  User, 
  Calendar,
  Trophy,
  Star,
  Target,
  ExternalLink,
  Share2,
  Copy,
  Check,
  Crown,
  Zap,
  TrendingUp,
  Users,
  Sparkles
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Avatar } from './ui/avatar';
import BadgeCard, { type BadgeData } from './BadgeCard';
import { getBadgesByUser, getUserProfile, getUserStats, type UserProfile } from '../utils/db';

interface BadgeShowcaseProps {
  username: string;
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  onBack?: () => void;
}

interface ReplayButtonProps {
  schemaTrace: string;
  language: 'en' | 'es';
  onReplay?: (schemaTrace: string) => void;
}

const translations = {
  en: {
    coachingBadges: "Coaching Badges",
    schemaProof: "Schema-driven proof of clarity, mastery, and execution.",
    backToProfile: "Back to Profile",
    shareProfile: "Share Profile",
    copyLink: "Copy Link",
    linkCopied: "Link Copied!",
    joinedOn: "Joined",
    totalPoints: "Total Points",
    averageScore: "Average Score",
    completionRate: "Completion Rate",
    latestAchievement: "Latest Achievement",
    profileStats: "Profile Stats",
    achievementGallery: "Achievement Gallery",
    noBadges: "No badges yet",
    noBadgesDescription: "This user hasn't earned any badges yet. Complete modules and overlays to start earning achievements!",
    userNotFound: "User not found",
    userNotFoundDescription: "The requested user profile could not be found.",
    loading: "Loading profile...",
    replay: "Replay",
    viewModule: "View Module",
    earnedOn: "Earned on",
    schema: "Schema",
    level: "Level",
    points: "Points",
    rarity: "Rarity",
    category: "Category",
    achievements: "Achievements",
    rank: "Rank",
    globalRank: "Global Rank"
  },
  es: {
    coachingBadges: "Insignias de Coaching",
    schemaProof: "Prueba basada en esquemas de claridad, maestría y ejecución.",
    backToProfile: "Volver al Perfil",
    shareProfile: "Compartir Perfil",
    copyLink: "Copiar Enlace",
    linkCopied: "¡Enlace Copiado!",
    joinedOn: "Se unió el",
    totalPoints: "Puntos Totales",
    averageScore: "Puntuación Promedio",
    completionRate: "Tasa de Finalización",
    latestAchievement: "Último Logro",
    profileStats: "Estadísticas del Perfil",
    achievementGallery: "Galería de Logros",
    noBadges: "Aún no hay insignias",
    noBadgesDescription: "Este usuario aún no ha obtenido insignias. ¡Completa módulos y overlays para comenzar a ganar logros!",
    userNotFound: "Usuario no encontrado",
    userNotFoundDescription: "No se pudo encontrar el perfil de usuario solicitado.",
    loading: "Cargando perfil...",
    replay: "Repetir",
    viewModule: "Ver Módulo",
    earnedOn: "Obtenido el",
    schema: "Esquema",
    level: "Nivel",
    points: "Puntos",
    rarity: "Rareza",
    category: "Categoría",
    achievements: "Logros",
    rank: "Rango",
    globalRank: "Rango Global"
  }
};

const ReplayButton: React.FC<ReplayButtonProps> = ({ schemaTrace, language, onReplay }) => {
  const t = translations[language];

  const handleReplay = () => {
    if (onReplay) {
      onReplay(schemaTrace);
    } else {
      // Default behavior - could navigate to overlay system
      console.log('Replaying schema:', schemaTrace);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleReplay}
      className="flex items-center gap-1 text-xs"
    >
      <ExternalLink className="w-3 h-3" />
      {t.replay}
    </Button>
  );
};

const BadgeShowcaseCard: React.FC<{ 
  badge: BadgeData; 
  language: 'en' | 'es';
  onReplay?: (schemaTrace: string) => void;
}> = ({ badge, language, onReplay }) => {
  const t = translations[language];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'en' 
      ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const levelColors = {
    Bronze: 'text-amber-600',
    Silver: 'text-gray-500',
    Gold: 'text-yellow-600',
    Platinum: 'text-purple-600',
    Diamond: 'text-blue-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-card border rounded-lg p-4 shadow hover:shadow-lg transition-all duration-200"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-start gap-3">
          <div className="text-2xl">{badge.icon}</div>
          <div className="flex-1">
            <h2 className="font-bold text-gray-800 dark:text-foreground text-lg leading-tight">
              {badge.title}
            </h2>
            <span className={`text-sm font-semibold ${levelColors[badge.level]}`}>
              {badge.level}
              {badge.points && (
                <span className="ml-2 text-xs text-muted-foreground">
                  +{badge.points} {t.points}
                </span>
              )}
            </span>
          </div>
        </div>
        
        {badge.rarity === 'Legendary' && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="text-orange-400"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        )}
      </div>

      <p className="text-sm text-gray-600 dark:text-muted-foreground mb-3 leading-relaxed">
        {badge.description}
      </p>

      <div className="space-y-2 mb-4">
        <p className="text-xs text-gray-500 dark:text-muted-foreground italic flex items-center gap-1">
          <Target className="w-3 h-3" />
          {t.schema}: <code className="bg-secondary px-1 py-0.5 rounded font-mono">{badge.schemaTrace}</code>
        </p>
        <p className="text-xs text-gray-500 dark:text-muted-foreground flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {t.earnedOn} {formatDate(badge.earnedOn)}
        </p>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-border">
        <div className="flex gap-2">
          {badge.category && (
            <Badge variant="secondary" className="text-xs">
              {badge.category}
            </Badge>
          )}
          {badge.rarity && badge.rarity !== 'Common' && (
            <Badge variant="outline" className="text-xs">
              {badge.rarity}
            </Badge>
          )}
        </div>
        <ReplayButton 
          schemaTrace={badge.schemaTrace} 
          language={language}
          onReplay={onReplay}
        />
      </div>
    </motion.div>
  );
};

export const BadgeShowcase: React.FC<BadgeShowcaseProps> = ({
  username,
  language,
  onNavigate,
  onBack
}) => {
  const [badges, setBadges] = useState<BadgeData[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [userProfile, userBadges, userStats] = await Promise.all([
          getUserProfile(username),
          getBadgesByUser(username),
          getUserStats(username)
        ]);

        if (!userProfile) {
          setError('user_not_found');
          return;
        }

        setProfile(userProfile);
        setBadges(userBadges);
        setStats(userStats);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('fetch_error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const handleShareProfile = async () => {
    const url = `${window.location.origin}/profile/${username}/badges`;
    
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleReplaySchema = (schemaTrace: string) => {
    // Navigate to overlay system with specific schema
    onNavigate(`overlay-system?schema=${schemaTrace}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-background dark:to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Award className="w-6 h-6 text-primary" />
          </motion.div>
          <p className="text-muted-foreground">{t.loading}</p>
        </div>
      </div>
    );
  }

  if (error === 'user_not_found') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-background dark:to-accent/5 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              onClick={onBack || (() => onNavigate('badge-system'))}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backToProfile}
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-foreground">
              {t.userNotFound}
            </h1>
          </div>

          <Card className="p-8 text-center">
            <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t.userNotFound}</h3>
            <p className="text-muted-foreground">{t.userNotFoundDescription}</p>
          </Card>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-background dark:to-accent/5 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={onBack || (() => onNavigate('badge-system'))}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.backToProfile}
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                {profile.avatar || <User className="w-8 h-8" />}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-foreground">
                  🏅 {profile.displayName}'s {t.coachingBadges}
                </h1>
                <p className="text-gray-600 dark:text-muted-foreground">
                  {t.schemaProof}
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={handleShareProfile}
            className="flex items-center gap-2"
          >
            {linkCopied ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                {t.linkCopied}
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                {t.shareProfile}
              </>
            )}
          </Button>
        </div>

        {/* Profile Stats */}
        {stats && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              {t.profileStats}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold">{stats.totalBadges}</p>
                <p className="text-sm text-muted-foreground">{t.achievements}</p>
              </div>
              
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-2xl font-bold">{stats.totalPoints}</p>
                <p className="text-sm text-muted-foreground">{t.totalPoints}</p>
              </div>
              
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Crown className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-2xl font-bold">{stats.level}</p>
                <p className="text-sm text-muted-foreground">{t.level}</p>
              </div>
              
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-2xl font-bold">{stats.completionRate}%</p>
                <p className="text-sm text-muted-foreground">{t.completionRate}</p>
              </div>
            </div>

            <Separator className="my-4" />
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {t.joinedOn} {new Date(profile.joinedDate).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}
              </span>
              {profile.bio && (
                <span className="italic max-w-md truncate">"{profile.bio}"</span>
              )}
            </div>
          </Card>
        )}

        {/* Achievement Gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" />
            {t.achievementGallery}
          </h2>
          
          {badges.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.noBadges}</h3>
              <p className="text-muted-foreground">{t.noBadgesDescription}</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {badges.map((badge) => (
                <BadgeShowcaseCard
                  key={badge.badgeId}
                  badge={badge}
                  language={language}
                  onReplay={handleReplaySchema}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BadgeShowcase;