import React from 'react';
import PublicLandingPage from './PublicLandingPage';

interface LandingPageProps {
  language?: 'en' | 'es';
  onNavigate?: (path: string) => void;
  onRequestDemo?: () => void;
  onLaunchPlatform?: () => void;
}

/**
 * Main Landing Page Component
 * 
 * This serves as the primary entry point for OVERWATCH³.
 * It wraps the PublicLandingPage with any additional routing logic needed.
 * 
 * Usage in React Router:
 * <Route path="/" element={<LandingPage />} />
 * 
 * Usage in State-based routing (current):
 * {currentView === 'landing' && <LandingPage ... />}
 */
export default function LandingPage({ 
  language = 'en', 
  onNavigate, 
  onRequestDemo,
  onLaunchPlatform 
}: LandingPageProps) {
  return (
    <PublicLandingPage
      language={language}
      onNavigate={onNavigate}
      onRequestDemo={onRequestDemo}
      onLaunchPlatform={onLaunchPlatform}
    />
  );
}