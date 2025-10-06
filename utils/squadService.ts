// Squad management utility functions for OVERWATCH³ platform

export interface SquadMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  accessLevel: 'Editor' | 'Viewer' | 'Coach';
  joinedAt: string;
  lastActive?: string;
}

export interface OverlayPath {
  trace: string;
  title: string;
  coachingFocus: string;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  badge?: string;
  prerequisites?: string[];
  completedBy?: string[]; // member IDs who completed this overlay
}

export interface SquadRole {
  id: string;
  title: string;
  description: string;
  overlays: OverlayPath[];
  coachingFocus: string;
  expectedImpact: string;
  assignedMembers: string[]; // member IDs assigned to this role
}

export interface SquadConfig {
  id: string;
  name: string;
  mission: string;
  tags: string[];
  members: SquadMember[];
  roles: SquadRole[];
  marketFocus?: string[];
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'active' | 'completed' | 'archived';
  createdBy: string;
  shareableLink?: string;
  deploymentUrl?: string;
}

export interface SquadProgress {
  squadId: string;
  totalOverlays: number;
  completedOverlays: number;
  totalBadges: number;
  earnedBadges: number;
  averageClarityIndex: number;
  memberProgress: {
    memberId: string;
    completedOverlays: number;
    earnedBadges: string[];
    clarityIndex: number;
  }[];
}

// Mock data for demo purposes
let squads: SquadConfig[] = [
  {
    id: 'squad-latam-gtm',
    name: 'LatAm GTM Strike Team',
    mission: 'Deploy schema-driven clarity across Latin American markets with bilingual coaching overlays for maximum market penetration velocity.',
    tags: ['Founder-led', 'Bilingual', 'LatAm GTM', 'Schema-first'],
    members: [
      {
        id: 'luis-dominguez',
        name: 'Luis Dominguez',
        email: 'luis@overwatch3.com',
        role: 'Founder',
        accessLevel: 'Editor',
        joinedAt: '2025-10-01T10:00:00Z',
        lastActive: '2025-10-02T15:30:00Z'
      },
      {
        id: 'ana-rivera',
        name: 'Ana Rivera',
        email: 'ana@overwatch3.com',
        role: 'Ops Lead',
        accessLevel: 'Editor',
        joinedAt: '2025-10-01T11:00:00Z',
        lastActive: '2025-10-02T14:45:00Z'
      },
      {
        id: 'carlos-mendez',
        name: 'Carlos Mendez',
        email: 'carlos@overwatch3.com',
        role: 'Sales Navigator',
        accessLevel: 'Viewer',
        joinedAt: '2025-10-01T12:00:00Z',
        lastActive: '2025-10-02T13:20:00Z'
      }
    ],
    roles: [
      {
        id: 'founder-role',
        title: 'Founder',
        description: 'Strategic clarity and conviction leadership',
        overlays: [
          {
            trace: 'finance.trust-velocity',
            title: 'Trust Velocity Master',
            coachingFocus: 'Capital velocity optimization',
            estimatedTime: '45min',
            difficulty: 'advanced',
            badge: '🧩 Trust Velocity Master',
            completedBy: ['luis-dominguez']
          },
          {
            trace: 'law.assumed-right',
            title: 'Legal Framework Navigation',
            coachingFocus: 'Risk mitigation and compliance',
            estimatedTime: '30min',
            difficulty: 'intermediate',
            badge: '🎯 Clarity Catalyst',
            completedBy: ['luis-dominguez']
          }
        ],
        coachingFocus: 'Clarity + Conviction',
        expectedImpact: '3.2x clarity index improvement',
        assignedMembers: ['luis-dominguez']
      },
      {
        id: 'ops-lead-role',
        title: 'Ops Lead',
        description: 'Execution velocity and risk management',
        overlays: [
          {
            trace: 'time.velocity-modeling',
            title: 'Time Optimization Framework',
            coachingFocus: 'Execution speed enhancement',
            estimatedTime: '35min',
            difficulty: 'intermediate',
            badge: '⚡ Velocity Navigator',
            completedBy: ['ana-rivera']
          },
          {
            trace: 'trigger.difficulty-risk',
            title: 'Risk Assessment Matrix',
            coachingFocus: 'Proactive risk management',
            estimatedTime: '40min',
            difficulty: 'advanced',
            badge: '🛡️ Risk Guardian'
          }
        ],
        coachingFocus: 'Execution + Risk Framing',
        expectedImpact: '2.7x execution speed increase',
        assignedMembers: ['ana-rivera']
      }
    ],
    marketFocus: ['US', 'Mexico', 'Colombia'],
    createdAt: '2025-10-01T09:00:00Z',
    updatedAt: '2025-10-02T16:00:00Z',
    status: 'active',
    createdBy: 'luis-dominguez',
    shareableLink: 'https://overwatch3.app/squad/latam-gtm-strike-team',
    deploymentUrl: 'https://overwatch3.app/lms/squad/latam-gtm-strike-team'
  }
];

// Squad CRUD operations
export const createSquad = async (squadData: Omit<SquadConfig, 'id' | 'createdAt' | 'updatedAt'>): Promise<SquadConfig> => {
  const newSquad: SquadConfig = {
    ...squadData,
    id: `squad-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    shareableLink: `https://overwatch3.app/squad/${squadData.name.toLowerCase().replace(/\s+/g, '-')}`
  };
  
  squads.push(newSquad);
  return newSquad;
};

export const getSquadById = async (squadId: string): Promise<SquadConfig | null> => {
  return squads.find(squad => squad.id === squadId) || null;
};

export const getAllSquads = async (): Promise<SquadConfig[]> => {
  return squads;
};

export const updateSquad = async (squadId: string, updates: Partial<SquadConfig>): Promise<SquadConfig | null> => {
  const squadIndex = squads.findIndex(squad => squad.id === squadId);
  if (squadIndex === -1) return null;
  
  squads[squadIndex] = {
    ...squads[squadIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  return squads[squadIndex];
};

export const deleteSquad = async (squadId: string): Promise<boolean> => {
  const squadIndex = squads.findIndex(squad => squad.id === squadId);
  if (squadIndex === -1) return false;
  
  squads.splice(squadIndex, 1);
  return true;
};

// Member management
export const addMemberToSquad = async (squadId: string, member: Omit<SquadMember, 'joinedAt'>): Promise<SquadConfig | null> => {
  const squad = await getSquadById(squadId);
  if (!squad) return null;
  
  const newMember: SquadMember = {
    ...member,
    joinedAt: new Date().toISOString()
  };
  
  return updateSquad(squadId, {
    members: [...squad.members, newMember]
  });
};

export const removeMemberFromSquad = async (squadId: string, memberId: string): Promise<SquadConfig | null> => {
  const squad = await getSquadById(squadId);
  if (!squad) return null;
  
  return updateSquad(squadId, {
    members: squad.members.filter(member => member.id !== memberId)
  });
};

export const assignMemberToRole = async (squadId: string, memberId: string, roleId: string): Promise<SquadConfig | null> => {
  const squad = await getSquadById(squadId);
  if (!squad) return null;
  
  const updatedRoles = squad.roles.map(role => {
    if (role.id === roleId) {
      return {
        ...role,
        assignedMembers: [...role.assignedMembers.filter(id => id !== memberId), memberId]
      };
    }
    // Remove member from other roles
    return {
      ...role,
      assignedMembers: role.assignedMembers.filter(id => id !== memberId)
    };
  });
  
  return updateSquad(squadId, { roles: updatedRoles });
};

// Progress tracking
export const getSquadProgress = async (squadId: string): Promise<SquadProgress | null> => {
  const squad = await getSquadById(squadId);
  if (!squad) return null;
  
  const totalOverlays = squad.roles.reduce((total, role) => total + role.overlays.length, 0);
  const completedOverlays = squad.roles.reduce((total, role) => 
    total + role.overlays.filter(overlay => overlay.completedBy && overlay.completedBy.length > 0).length, 0);
  
  const totalBadges = squad.roles.reduce((total, role) => 
    total + role.overlays.filter(overlay => overlay.badge).length, 0);
  const earnedBadges = squad.roles.reduce((total, role) => 
    total + role.overlays.filter(overlay => overlay.badge && overlay.completedBy && overlay.completedBy.length > 0).length, 0);
  
  const memberProgress = squad.members.map(member => {
    const memberCompletedOverlays = squad.roles.reduce((total, role) => 
      total + role.overlays.filter(overlay => overlay.completedBy?.includes(member.id)).length, 0);
    
    const memberEarnedBadges = squad.roles.reduce((badges: string[], role) => {
      const roleBadges = role.overlays
        .filter(overlay => overlay.badge && overlay.completedBy?.includes(member.id))
        .map(overlay => overlay.badge!);
      return [...badges, ...roleBadges];
    }, []);
    
    return {
      memberId: member.id,
      completedOverlays: memberCompletedOverlays,
      earnedBadges: memberEarnedBadges,
      clarityIndex: 2.5 + (memberCompletedOverlays * 0.3) // Mock calculation
    };
  });
  
  const averageClarityIndex = memberProgress.length > 0 
    ? memberProgress.reduce((sum, mp) => sum + mp.clarityIndex, 0) / memberProgress.length
    : 0;
  
  return {
    squadId,
    totalOverlays,
    completedOverlays,
    totalBadges,
    earnedBadges,
    averageClarityIndex,
    memberProgress
  };
};

// Role templates for quick squad creation
export const getRoleTemplates = (): SquadRole[] => [
  {
    id: 'founder-template',
    title: 'Founder',
    description: 'Strategic clarity and conviction leadership',
    overlays: [
      {
        trace: 'finance.trust-velocity',
        title: 'Trust Velocity Master',
        coachingFocus: 'Capital velocity optimization',
        estimatedTime: '45min',
        difficulty: 'advanced',
        badge: '🧩 Trust Velocity Master'
      },
      {
        trace: 'law.assumed-right',
        title: 'Legal Framework Navigation',
        coachingFocus: 'Risk mitigation and compliance',
        estimatedTime: '30min',
        difficulty: 'intermediate',
        badge: '🎯 Clarity Catalyst'
      },
      {
        trace: 'time.velocity-modeling',
        title: 'Strategic Time Management',
        coachingFocus: 'Executive time optimization',
        estimatedTime: '35min',
        difficulty: 'advanced',
        badge: '⚡ Time Master'
      }
    ],
    coachingFocus: 'Clarity + Conviction',
    expectedImpact: '3.2x clarity index improvement',
    assignedMembers: []
  },
  {
    id: 'ops-lead-template',
    title: 'Operations Lead',
    description: 'Execution velocity and operational excellence',
    overlays: [
      {
        trace: 'time.velocity-modeling',
        title: 'Time Optimization Framework',
        coachingFocus: 'Execution speed enhancement',
        estimatedTime: '35min',
        difficulty: 'intermediate',
        badge: '⚡ Velocity Navigator'
      },
      {
        trace: 'trigger.difficulty-risk',
        title: 'Risk Assessment Matrix',
        coachingFocus: 'Proactive risk management',
        estimatedTime: '40min',
        difficulty: 'advanced',
        badge: '🛡️ Risk Guardian'
      },
      {
        trace: 'finance.ethical-roi',
        title: 'Operational ROI Optimization',
        coachingFocus: 'Cost efficiency and performance',
        estimatedTime: '50min',
        difficulty: 'intermediate',
        badge: '📊 ROI Optimizer'
      }
    ],
    coachingFocus: 'Execution + Risk Management',
    expectedImpact: '2.7x execution speed increase',
    assignedMembers: []
  },
  {
    id: 'sales-lead-template',
    title: 'Sales Lead',
    description: 'Revenue generation and market penetration',
    overlays: [
      {
        trace: 'finance.trust-velocity',
        title: 'Customer Trust Acceleration',
        coachingFocus: 'Trust-based selling methodology',
        estimatedTime: '40min',
        difficulty: 'intermediate',
        badge: '🤝 Trust Builder'
      },
      {
        trace: 'trigger.difficulty-risk',
        title: 'Objection Handling Framework',
        coachingFocus: 'Risk mitigation in sales cycles',
        estimatedTime: '35min',
        difficulty: 'intermediate',
        badge: '🎯 Objection Master'
      }
    ],
    coachingFocus: 'Trust + Conversion',
    expectedImpact: '2.9x sales velocity increase',
    assignedMembers: []
  },
  {
    id: 'marketing-lead-template',
    title: 'Marketing Lead',
    description: 'Brand positioning and market expansion',
    overlays: [
      {
        trace: 'finance.trust-velocity',
        title: 'Brand Trust Acceleration',
        coachingFocus: 'Trust-based marketing strategies',
        estimatedTime: '45min',
        difficulty: 'intermediate',
        badge: '🚀 Brand Accelerator'
      },
      {
        trace: 'time.velocity-modeling',
        title: 'Campaign Velocity Optimization',
        coachingFocus: 'Marketing campaign efficiency',
        estimatedTime: '40min',
        difficulty: 'intermediate',
        badge: '📈 Campaign Optimizer'
      }
    ],
    coachingFocus: 'Brand + Velocity',
    expectedImpact: '2.6x marketing ROI improvement',
    assignedMembers: []
  },
  {
    id: 'hr-lead-template',
    title: 'HR Lead',
    description: 'Talent optimization and culture scaling',
    overlays: [
      {
        trace: 'law.assumed-right',
        title: 'Employment Law Mastery',
        coachingFocus: 'Legal compliance and risk management',
        estimatedTime: '50min',
        difficulty: 'advanced',
        badge: '⚖️ Compliance Guardian'
      },
      {
        trace: 'time.velocity-modeling',
        title: 'Talent Acquisition Velocity',
        coachingFocus: 'Hiring process optimization',
        estimatedTime: '35min',
        difficulty: 'intermediate',
        badge: '🎯 Talent Hunter'
      }
    ],
    coachingFocus: 'Compliance + Talent',
    expectedImpact: '2.8x hiring efficiency increase',
    assignedMembers: []
  }
];

// Squad analytics and reporting
export const getSquadAnalytics = async (squadId: string) => {
  const squad = await getSquadById(squadId);
  const progress = await getSquadProgress(squadId);
  
  if (!squad || !progress) return null;
  
  return {
    squad,
    progress,
    analytics: {
      totalMembers: squad.members.length,
      activeMembers: squad.members.filter(m => m.lastActive && 
        new Date(m.lastActive) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length,
      completionRate: progress.totalOverlays > 0 ? (progress.completedOverlays / progress.totalOverlays) * 100 : 0,
      badgeEarnRate: progress.totalBadges > 0 ? (progress.earnedBadges / progress.totalBadges) * 100 : 0,
      averageTimeToComplete: '2.5 days', // Mock data
      topPerformers: progress.memberProgress
        .sort((a, b) => b.completedOverlays - a.completedOverlays)
        .slice(0, 3)
        .map(mp => ({
          memberId: mp.memberId,
          memberName: squad.members.find(m => m.id === mp.memberId)?.name || 'Unknown',
          completedOverlays: mp.completedOverlays,
          clarityIndex: mp.clarityIndex
        }))
    }
  };
};

// Export squad configuration for sharing
export const exportSquadConfig = async (squadId: string): Promise<string> => {
  const squad = await getSquadById(squadId);
  if (!squad) throw new Error('Squad not found');
  
  const exportData = {
    ...squad,
    exportedAt: new Date().toISOString(),
    exportVersion: '1.0'
  };
  
  return JSON.stringify(exportData, null, 2);
};

// Import squad configuration
export const importSquadConfig = async (configJson: string): Promise<SquadConfig> => {
  const config = JSON.parse(configJson);
  const newSquad = await createSquad({
    ...config,
    id: undefined, // Generate new ID
    createdBy: 'imported-user' // You would get this from auth context
  });
  
  return newSquad;
};