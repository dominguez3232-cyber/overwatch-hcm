import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Search, 
  Trophy, 
  Star, 
  Crown, 
  ArrowRight,
  ExternalLink,
  Award,
  TrendingUp,
  Calendar,
  User
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar } from './ui/avatar';
import { searchUsers, getLeaderboard, type UserProfile } from '../utils/db';

interface ProfileDirectoryProps {
  language: 'en' | 'es';
  onNavigate: (view: string) => void;
  onViewProfile: (username: string) => void;
}

const translations = {
  en: {
    profileDirectory: 'Profile Directory',
    subtitle: 'Discover OVERWATCH³ achievers and their badge collections',
    searchUsers: 'Search users...',
    topAchievers: 'Top Achievers',
    allUsers: 'All Users',
    viewProfile: 'View Profile',
    viewBadges: 'View Badges',
    totalPoints: 'Total Points',
    joinedOn: 'Joined',
    noResults: 'No users found',
    noResultsDescription: 'Try adjusting your search terms.',
    leaderboard: 'Leaderboard',
    rank: 'Rank',
    searchPlaceholder: 'Search by name or username...',
    achievements: 'Achievements',
    level: 'Level'
  },
  es: {
    profileDirectory: 'Directorio de Perfiles',
    subtitle: 'Descubre los logros de OVERWATCH³ y sus colecciones de insignias',
    searchUsers: 'Buscar usuarios...',
    topAchievers: 'Mejores Logros',
    allUsers: 'Todos los Usuarios',
    viewProfile: 'Ver Perfil',
    viewBadges: 'Ver Insignias',
    totalPoints: 'Puntos Totales',
    joinedOn: 'Se unió el',
    noResults: 'No se encontraron usuarios',
    noResultsDescription: 'Intenta ajustar tus términos de búsqueda.',
    leaderboard: 'Tabla de Clasificación',
    rank: 'Rango',
    searchPlaceholder: 'Buscar por nombre o usuario...',
    achievements: 'Logros',
    level: 'Nivel'
  }
};

const levelIcons = {
  Bronze: Trophy,
  Silver: Award,
  Gold: Star,
  Platinum: Crown,
  Diamond: Crown
};

const levelColors = {
  Bronze: 'text-amber-600 bg-amber-100 dark:bg-amber-900/20',
  Silver: 'text-gray-500 bg-gray-100 dark:bg-gray-900/20',
  Gold: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20',
  Platinum: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20',
  Diamond: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20'
};

interface UserCardProps {
  user: UserProfile & { totalPoints?: number; rank?: number };
  language: 'en' | 'es';
  onViewProfile: (username: string) => void;
  showRank?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, language, onViewProfile, showRank = false }) => {
  const t = translations[language];
  const LevelIcon = levelIcons[user.level as keyof typeof levelIcons] || Trophy;

  const handleViewProfile = () => {
    // Update URL and navigate
    window.history.pushState({}, '', `/profile/${user.username}/badges`);
    onViewProfile(user.username);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="group"
    >
      <Card className="p-4 h-full cursor-pointer transition-all duration-200 hover:shadow-lg">
        <div className="flex items-start gap-4">
          {showRank && user.rank && (
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                user.rank === 1 ? 'bg-yellow-500 text-white' :
                user.rank === 2 ? 'bg-gray-400 text-white' :
                user.rank === 3 ? 'bg-amber-600 text-white' :
                'bg-muted text-muted-foreground'
              }`}>
                {user.rank}
              </div>
              <span className="text-xs text-muted-foreground mt-1">#{user.rank}</span>
            </div>
          )}
          
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-lg flex-shrink-0">
            {user.avatar || <User className="w-6 h-6" />}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold truncate group-hover:text-primary transition-colors">
                  {user.displayName}
                </h3>
                <p className="text-sm text-muted-foreground">@{user.username}</p>
              </div>
              
              <Badge className={`${levelColors[user.level as keyof typeof levelColors]} border-0`}>
                <LevelIcon className="w-3 h-3 mr-1" />
                {user.level}
              </Badge>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                {user.totalBadges} {t.achievements}
              </div>
              {(user.totalPoints !== undefined && user.totalPoints > 0) && (
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {user.totalPoints} {t.totalPoints}
                </div>
              )}
            </div>

            {user.bio && (
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                {user.bio}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {t.joinedOn} {new Date(user.joinedDate).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleViewProfile}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {t.viewBadges}
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const ProfileDirectory: React.FC<ProfileDirectoryProps> = ({
  language,
  onNavigate,
  onViewProfile
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<UserProfile[]>([]);
  const [leaderboard, setLeaderboard] = useState<Array<UserProfile & { totalPoints: number; rank: number }>>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'search'>('leaderboard');

  const t = translations[language];

  // Load leaderboard on component mount
  useEffect(() => {
    const loadLeaderboard = async () => {
      setLoading(true);
      try {
        const data = await getLeaderboard(10);
        setLeaderboard(data);
      } catch (error) {
        console.error('Error loading leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  // Handle search
  useEffect(() => {
    const performSearch = async () => {
      if (!searchTerm.trim()) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      try {
        const results = await searchUsers(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error('Error searching users:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleViewUserProfile = (username: string) => {
    onViewProfile(`profile-badges-${username}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3 mb-2">
          <Users className="w-8 h-8 text-primary" />
          {t.profileDirectory}
        </h2>
        <p className="text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      {/* Search */}
      <Card className="p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setActiveTab('search');
            }}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'leaderboard'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <TrendingUp className="w-4 h-4 inline mr-2" />
          {t.leaderboard}
        </button>
        <button
          onClick={() => setActiveTab('search')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'search'
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          <Search className="w-4 h-4 inline mr-2" />
          {t.allUsers}
        </button>
      </div>

      {/* Content */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-500" />
            {t.topAchievers}
          </h3>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-4 animate-pulse">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-full" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {leaderboard.map((user) => (
                <UserCard
                  key={user.username}
                  user={user}
                  language={language}
                  onViewProfile={handleViewUserProfile}
                  showRank={true}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'search' && (
        <div className="space-y-4">
          {searchTerm && (
            <h3 className="text-xl font-semibold">
              {language === 'en' 
                ? `Search results for "${searchTerm}"`
                : `Resultados de búsqueda para "${searchTerm}"`
              }
            </h3>
          )}
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="p-4 animate-pulse">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-full" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : searchTerm && searchResults.length === 0 ? (
            <Card className="p-8 text-center">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.noResults}</h3>
              <p className="text-muted-foreground">{t.noResultsDescription}</p>
            </Card>
          ) : searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((user) => (
                <UserCard
                  key={user.username}
                  user={user}
                  language={language}
                  onViewProfile={handleViewUserProfile}
                />
              ))}
            </div>
          ) : !searchTerm ? (
            <Card className="p-8 text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.searchUsers}</h3>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Use the search box above to find OVERWATCH³ users and view their achievements.'
                  : 'Usa la caja de búsqueda arriba para encontrar usuarios de OVERWATCH³ y ver sus logros.'
                }
              </p>
            </Card>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ProfileDirectory;