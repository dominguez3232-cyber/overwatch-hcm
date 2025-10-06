import React, { createContext, useContext, useState, useCallback } from 'react';

interface OverlayConfig {
  overlay_enabled: boolean;
  stakeholder: 'CEO' | 'CFO' | 'CHRO' | 'COO';
  module: 'ERP' | 'EPM' | 'HCM' | 'CRM';
  metric: string;
  language: 'EN' | 'ES';
  guidance_level: 'Strategic' | 'Tactical' | 'Operational';
}

interface OverlayContent {
  metricContext: {
    en: string;
    es: string;
  };
  strategicGuidance: {
    en: string;
    es: string;
  };
  tacticalTip: {
    en: string;
    es: string;
  };
  schemaTrace: string;
  visualCue: {
    type: 'pulse' | 'highlight' | 'glow';
    color: string;
  };
  voiceoverScript?: {
    en: string;
    es: string;
  };
}

interface OverlayState {
  activeOverlay: string | null;
  overlayMode: 'hover' | 'sidebar' | 'voiceover' | 'snapshot';
  globalEnabled: boolean;
  currentStakeholder: OverlayConfig['stakeholder'];
  currentModule: OverlayConfig['module'];
  language: 'EN' | 'ES';
}

interface CoachingOverlayContextType {
  state: OverlayState;
  overlayLibrary: Record<string, OverlayContent>;
  
  // State management
  setGlobalEnabled: (enabled: boolean) => void;
  setStakeholder: (stakeholder: OverlayConfig['stakeholder']) => void;
  setModule: (module: OverlayConfig['module']) => void;
  setLanguage: (language: 'EN' | 'ES') => void;
  setOverlayMode: (mode: OverlayState['overlayMode']) => void;
  
  // Overlay management
  activateOverlay: (metricId: string, mode?: OverlayState['overlayMode']) => void;
  deactivateOverlay: () => void;
  getOverlayContent: (metricId: string) => OverlayContent | null;
  
  // Analytics
  trackOverlayInteraction: (metricId: string, action: string) => void;
  getOverlayAnalytics: () => any;
  
  // Export functionality
  exportOverlayData: (format: 'json' | 'pdf' | 'png') => void;
}

const CoachingOverlayContext = createContext<CoachingOverlayContextType | undefined>(undefined);

export function useCoachingOverlayContext() {
  const context = useContext(CoachingOverlayContext);
  if (!context) {
    throw new Error('useCoachingOverlayContext must be used within a CoachingOverlayProvider');
  }
  return context;
}

interface CoachingOverlayProviderProps {
  children: React.ReactNode;
  initialStakeholder?: OverlayConfig['stakeholder'];
  initialModule?: OverlayConfig['module'];
  initialLanguage?: 'EN' | 'ES';
  overlayLibrary?: Record<string, OverlayContent>;
}

export function CoachingOverlayProvider({
  children,
  initialStakeholder = 'CEO',
  initialModule = 'EPM',
  initialLanguage = 'EN',
  overlayLibrary = {}
}: CoachingOverlayProviderProps) {
  const [state, setState] = useState<OverlayState>({
    activeOverlay: null,
    overlayMode: 'hover',
    globalEnabled: true,
    currentStakeholder: initialStakeholder,
    currentModule: initialModule,
    language: initialLanguage
  });

  const [analytics, setAnalytics] = useState<Record<string, any>>({
    interactions: {},
    totalViews: 0,
    averageEngagementTime: 0,
    mostViewedMetrics: [],
    stakeholderEngagement: {}
  });

  // State management functions
  const setGlobalEnabled = useCallback((enabled: boolean) => {
    setState(prev => ({ ...prev, globalEnabled: enabled }));
  }, []);

  const setStakeholder = useCallback((stakeholder: OverlayConfig['stakeholder']) => {
    setState(prev => ({ ...prev, currentStakeholder: stakeholder }));
  }, []);

  const setModule = useCallback((module: OverlayConfig['module']) => {
    setState(prev => ({ ...prev, currentModule: module }));
  }, []);

  const setLanguage = useCallback((language: 'EN' | 'ES') => {
    setState(prev => ({ ...prev, language }));
  }, []);

  const setOverlayMode = useCallback((mode: OverlayState['overlayMode']) => {
    setState(prev => ({ ...prev, overlayMode: mode }));
  }, []);

  // Overlay management functions
  const activateOverlay = useCallback((metricId: string, mode?: OverlayState['overlayMode']) => {
    setState(prev => ({
      ...prev,
      activeOverlay: metricId,
      overlayMode: mode || prev.overlayMode
    }));
    
    // Track activation
    trackOverlayInteraction(metricId, 'activate');
  }, []);

  const deactivateOverlay = useCallback(() => {
    setState(prev => ({ ...prev, activeOverlay: null }));
  }, []);

  const getOverlayContent = useCallback((metricId: string): OverlayContent | null => {
    const key = `${state.currentStakeholder}-${state.currentModule}-${metricId}`.toLowerCase();
    return overlayLibrary[key] || null;
  }, [overlayLibrary, state.currentStakeholder, state.currentModule]);

  // Analytics functions
  const trackOverlayInteraction = useCallback((metricId: string, action: string) => {
    const timestamp = new Date().toISOString();
    const interactionKey = `${state.currentStakeholder}-${state.currentModule}-${metricId}`;
    
    setAnalytics(prev => ({
      ...prev,
      interactions: {
        ...prev.interactions,
        [interactionKey]: [
          ...(prev.interactions[interactionKey] || []),
          { action, timestamp, stakeholder: state.currentStakeholder, module: state.currentModule }
        ]
      },
      totalViews: prev.totalViews + (action === 'activate' ? 1 : 0),
      stakeholderEngagement: {
        ...prev.stakeholderEngagement,
        [state.currentStakeholder]: (prev.stakeholderEngagement[state.currentStakeholder] || 0) + 1
      }
    }));
  }, [state.currentStakeholder, state.currentModule]);

  const getOverlayAnalytics = useCallback(() => {
    return {
      ...analytics,
      activeOverlays: Object.keys(analytics.interactions).length,
      engagementByStakeholder: analytics.stakeholderEngagement,
      topMetrics: Object.entries(analytics.interactions)
        .sort(([, a], [, b]) => (b as any[]).length - (a as any[]).length)
        .slice(0, 5)
        .map(([key, interactions]) => ({
          metric: key,
          views: (interactions as any[]).filter(i => i.action === 'activate').length
        }))
    };
  }, [analytics]);

  // Export functionality
  const exportOverlayData = useCallback((format: 'json' | 'pdf' | 'png') => {
    const exportData = {
      state,
      analytics: getOverlayAnalytics(),
      overlayLibrary: Object.keys(overlayLibrary).length,
      exportTimestamp: new Date().toISOString(),
      version: '1.0.0'
    };

    console.log(`Exporting overlay data to ${format}:`, exportData);
    
    if (format === 'json') {
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `overwatch-coaching-overlay-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
    
    // Track export
    trackOverlayInteraction('system', `export-${format}`);
  }, [state, getOverlayAnalytics, overlayLibrary, trackOverlayInteraction]);

  const contextValue: CoachingOverlayContextType = {
    state,
    overlayLibrary,
    setGlobalEnabled,
    setStakeholder,
    setModule,
    setLanguage,
    setOverlayMode,
    activateOverlay,
    deactivateOverlay,
    getOverlayContent,
    trackOverlayInteraction,
    getOverlayAnalytics,
    exportOverlayData
  };

  return (
    <CoachingOverlayContext.Provider value={contextValue}>
      {children}
    </CoachingOverlayContext.Provider>
  );
}

// Utility hook for easy metric integration
export function useMetricCoaching(metricId: string, metricName?: string) {
  const context = useCoachingOverlayContext();
  
  const hasOverlay = context.getOverlayContent(metricId) !== null;
  const isActive = context.state.activeOverlay === metricId;
  
  const activate = useCallback((mode?: OverlayState['overlayMode']) => {
    if (hasOverlay && context.state.globalEnabled) {
      context.activateOverlay(metricId, mode);
    }
  }, [hasOverlay, context, metricId]);
  
  const deactivate = useCallback(() => {
    context.deactivateOverlay();
  }, [context]);
  
  const trackInteraction = useCallback((action: string) => {
    context.trackOverlayInteraction(metricId, action);
  }, [context, metricId]);
  
  return {
    hasOverlay,
    isActive,
    activate,
    deactivate,
    trackInteraction,
    content: context.getOverlayContent(metricId),
    config: {
      overlay_enabled: context.state.globalEnabled && hasOverlay,
      stakeholder: context.state.currentStakeholder,
      module: context.state.currentModule,
      metric: metricName || metricId,
      language: context.state.language,
      guidance_level: 'Strategic' as const
    }
  };
}

// Global overlay controls component
export function OverlayControls() {
  const context = useCoachingOverlayContext();
  
  return (
    <div className="fixed top-4 left-4 z-50 bg-card/95 backdrop-blur-sm rounded-lg p-3 border border-border shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Coaching:</span>
          <button
            onClick={() => context.setGlobalEnabled(!context.state.globalEnabled)}
            className={`w-8 h-4 rounded-full transition-colors ${
              context.state.globalEnabled ? 'bg-green-500' : 'bg-secondary'
            }`}
          >
            <div className={`w-3 h-3 rounded-full bg-white transition-transform ${
              context.state.globalEnabled ? 'translate-x-4' : 'translate-x-0'
            }`} />
          </button>
        </div>
        
        <select
          value={context.state.currentStakeholder}
          onChange={(e) => context.setStakeholder(e.target.value as any)}
          className="bg-input border border-border rounded px-2 py-1 text-sm"
        >
          <option value="CEO">CEO</option>
          <option value="CFO">CFO</option>
          <option value="CHRO">CHRO</option>
          <option value="COO">COO</option>
        </select>
        
        <select
          value={context.state.overlayMode}
          onChange={(e) => context.setOverlayMode(e.target.value as any)}
          className="bg-input border border-border rounded px-2 py-1 text-sm"
        >
          <option value="hover">Hover</option>
          <option value="sidebar">Sidebar</option>
          <option value="voiceover">Voiceover</option>
          <option value="snapshot">Snapshot</option>
        </select>
        
        <button
          onClick={() => context.exportOverlayData('json')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          Export
        </button>
      </div>
    </div>
  );
}