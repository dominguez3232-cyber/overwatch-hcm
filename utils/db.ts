import { badgeService, type BadgeData } from './badgeService';

// Database utility functions for badge management
// In a real implementation, these would connect to your Supabase database

export interface UserProfile {
  username: string;
  displayName: string;
  avatar?: string;
  joinedDate: string;
  totalBadges: number;
  totalPoints: number;
  level: string;
  bio?: string;
  language: 'en' | 'es';
}

// Mock user data for demonstration
const mockUsers: Record<string, UserProfile> = {
  'luis': {
    username: 'luis',
    displayName: 'Luis Dominguez',
    avatar: '👨‍💼',
    joinedDate: '2024-01-15',
    totalBadges: 8,
    totalPoints: 2150,
    level: 'Platinum',
    bio: 'Founder & CEO at OVERWATCH³. Strategic intelligence pioneer focused on transforming HR into command centers.',
    language: 'en'
  },
  'maria': {
    username: 'maria',
    displayName: 'María González',
    avatar: '👩‍💼',
    joinedDate: '2024-02-20',
    totalBadges: 5,
    totalPoints: 1200,
    level: 'Gold',
    bio: 'CFO especializada en optimización de velocidad de capital y frameworks financieros estratégicos.',
    language: 'es'
  },
  'carlos': {
    username: 'carlos',
    displayName: 'Carlos Rivera',
    avatar: '👨‍💻',
    joinedDate: '2024-03-10',
    totalBadges: 12,
    totalPoints: 3400,
    level: 'Diamond',
    bio: 'Strategic Operations Director. Expert in cross-domain mastery and organizational velocity optimization.',
    language: 'en'
  }
};

// Mock badge data mapped to users
const mockUserBadges: Record<string, BadgeData[]> = {
  'luis': [
    {
      badgeId: "trust-velocity-master-luis",
      title: "🧩 Trust Velocity Master",
      description: "Mastered financial trust optimization and capital velocity dynamics",
      schemaTrace: "finance.trust-velocity",
      earnedOn: "2024-10-01",
      language: "en",
      icon: "🧩",
      level: "Gold",
      category: "Advanced",
      points: 250,
      rarity: "Rare"
    },
    {
      badgeId: "legal-framework-specialist-luis",
      title: "⚖️ Legal Framework Specialist",
      description: "Expert understanding of assumed rights and legal velocity frameworks",
      schemaTrace: "law.assumed-right",
      earnedOn: "2024-09-28",
      language: "en",
      icon: "⚖️",
      level: "Gold",
      category: "Advanced",
      points: 200,
      rarity: "Rare"
    },
    {
      badgeId: "time-optimizer-luis",
      title: "⚡ Time Velocity Optimizer",
      description: "Mastered strategic time optimization and velocity modeling techniques",
      schemaTrace: "time.velocity-modeling",
      earnedOn: "2024-09-25",
      language: "en",
      icon: "⚡",
      level: "Gold",
      category: "Advanced",
      points: 300,
      rarity: "Rare"
    },
    {
      badgeId: "strategic-master-luis",
      title: "👑 Strategic Foundation Master",
      description: "Achieved mastery across multiple strategic intelligence domains",
      schemaTrace: "strategic.mastery",
      earnedOn: "2024-10-02",
      language: "en",
      icon: "👑",
      level: "Diamond",
      category: "Mastery",
      points: 1000,
      rarity: "Legendary"
    },
    {
      badgeId: "founder-clarity-sprint-luis",
      title: "🎯 Founder Clarity Sprint",
      description: "Completed comprehensive founder-led strategic clarity framework",
      schemaTrace: "founder.clarity-sprint",
      earnedOn: "2024-09-15",
      language: "en",
      icon: "🎯",
      level: "Platinum",
      category: "Expert",
      points: 400,
      rarity: "Epic"
    }
  ],
  'maria': [
    {
      badgeId: "trust-velocity-master-maria",
      title: "🧩 Maestro de Velocidad de Confianza",
      description: "Dominó la optimización de confianza financiera y dinámicas de velocidad de capital",
      schemaTrace: "finance.trust-velocity",
      earnedOn: "2024-09-30",
      language: "es",
      icon: "🧩",
      level: "Gold",
      category: "Advanced",
      points: 250,
      rarity: "Rare"
    },
    {
      badgeId: "financial-reconciliation-maria",
      title: "💰 Especialista en Reconciliación Financiera",
      description: "Experta en frameworks de reconciliación y análisis financiero avanzado",
      schemaTrace: "finance.reconciliation",
      earnedOn: "2024-09-20",
      language: "es",
      icon: "💰",
      level: "Gold",
      category: "Advanced",
      points: 300,
      rarity: "Rare"
    },
    {
      badgeId: "bilingual-specialist-maria",
      title: "🌍 Especialista Bilingüe",
      description: "Demostró competencia en sistemas bilingües y mercados latinos",
      schemaTrace: "culture.bilingual-mastery",
      earnedOn: "2024-09-10",
      language: "es",
      icon: "🌍",
      level: "Silver",
      category: "Foundation",
      points: 150,
      rarity: "Uncommon"
    }
  ],
  'carlos': [
    {
      badgeId: "cross-domain-expert-carlos",
      title: "🚀 Cross-Domain Expert",
      description: "Achieved expertise across Finance, Law, Time, and Strategic domains",
      schemaTrace: "mastery.cross-domain",
      earnedOn: "2024-10-05",
      language: "en",
      icon: "🚀",
      level: "Diamond",
      category: "Mastery",
      points: 1500,
      rarity: "Legendary"
    },
    {
      badgeId: "operations-velocity-carlos",
      title: "⚡ Operations Velocity Master",
      description: "Mastered operational velocity optimization and strategic execution",
      schemaTrace: "operations.velocity-optimization",
      earnedOn: "2024-09-28",
      language: "en",
      icon: "⚡",
      level: "Platinum",
      category: "Expert",
      points: 500,
      rarity: "Epic"
    },
    {
      badgeId: "leadership-influence-carlos",
      title: "👥 Leadership Influence Specialist",
      description: "Expert in leadership style influence and organizational transformation",
      schemaTrace: "leadership.influence-mastery",
      earnedOn: "2024-09-22",
      language: "en",
      icon: "👥",
      level: "Gold",
      category: "Advanced",
      points: 350,
      rarity: "Rare"
    }
  ]
};

// Get user profile by username
export async function getUserProfile(username: string): Promise<UserProfile | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const profile = mockUsers[username.toLowerCase()];
  return profile || null;
}

// Get badges for a specific user
export async function getBadgesByUser(username: string): Promise<BadgeData[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const badges = mockUserBadges[username.toLowerCase()];
  return badges || [];
}

// Get user statistics
export async function getUserStats(username: string): Promise<{
  totalBadges: number;
  totalPoints: number;
  level: string;
  averageScore: number;
  completionRate: number;
  latestBadge?: BadgeData;
}> {
  const badges = await getBadgesByUser(username);
  const profile = await getUserProfile(username);
  
  if (!profile || badges.length === 0) {
    return {
      totalBadges: 0,
      totalPoints: 0,
      level: 'Bronze',
      averageScore: 0,
      completionRate: 0
    };
  }

  const totalPoints = badges.reduce((sum, badge) => sum + (badge.points || 0), 0);
  const latestBadge = badges.sort((a, b) => new Date(b.earnedOn).getTime() - new Date(a.earnedOn).getTime())[0];
  
  return {
    totalBadges: badges.length,
    totalPoints,
    level: profile.level,
    averageScore: 4.2, // Mock average score
    completionRate: 87, // Mock completion rate
    latestBadge
  };
}

// Search users by username or display name
export async function searchUsers(query: string): Promise<UserProfile[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const users = Object.values(mockUsers);
  const searchTerm = query.toLowerCase();
  
  return users.filter(user => 
    user.username.toLowerCase().includes(searchTerm) ||
    user.displayName.toLowerCase().includes(searchTerm)
  );
}

// Get leaderboard (top users by points)
export async function getLeaderboard(limit: number = 10): Promise<Array<UserProfile & { totalPoints: number; rank: number }>> {
  await new Promise(resolve => setTimeout(resolve, 400));
  
  const usersWithStats = await Promise.all(
    Object.values(mockUsers).map(async (user) => {
      const stats = await getUserStats(user.username);
      return {
        ...user,
        totalPoints: stats.totalPoints,
        rank: 0 // Will be set below
      };
    })
  );

  // Sort by total points and assign ranks
  const sorted = usersWithStats
    .sort((a, b) => b.totalPoints - a.totalPoints)
    .slice(0, limit)
    .map((user, index) => ({
      ...user,
      rank: index + 1
    }));

  return sorted;
}

// Check if user exists
export async function userExists(username: string): Promise<boolean> {
  const profile = await getUserProfile(username);
  return profile !== null;
}

export default {
  getUserProfile,
  getBadgesByUser,
  getUserStats,
  searchUsers,
  getLeaderboard,
  userExists
};