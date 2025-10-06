import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

/**
 * Landing Page Route Component
 * 
 * This is the React Router version of the landing page.
 * It handles URL-based routing and provides navigation functions.
 */
export default function LandingPageRoute() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    // Map internal navigation to React Router paths
    const routeMap: { [key: string]: string } = {
      'persona': '/platform',
      'demo': '/demo',
      'sequence-library': '/demos',
      'sequence-builder': '/build',
      'enhanced-landing': '/features',
      'sitemap': '/sitemap',
      'company': '/about',
      'contact': '/contact'
    };

    const routePath = routeMap[path] || `/${path}`;
    navigate(routePath);
  };

  const handleRequestDemo = () => {
    navigate('/demo');
  };

  const handleLaunchPlatform = () => {
    navigate('/platform');
  };

  // Get language from URL params or default to 'en'
  const urlParams = new URLSearchParams(window.location.search);
  const language = (urlParams.get('lang') as 'en' | 'es') || 'en';

  return (
    <LandingPage
      language={language}
      onNavigate={handleNavigate}
      onRequestDemo={handleRequestDemo}
      onLaunchPlatform={handleLaunchPlatform}
    />
  );
}