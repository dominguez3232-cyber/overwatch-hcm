import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DemoPage from '../components/DemoPage';
import DemoRequestPage from './DemoRequestPage';

/**
 * Demo Page Route Component
 * 
 * This is the React Router version of the demo page.
 * It handles URL-based routing and shared demo sequence loading.
 * 
 * URL Parameters:
 * - id: The shared sequence ID (required)
 * - autoplay: Whether to auto-start the demo sequence
 * - lang: Language preference (en/es)
 * 
 * Examples:
 * /demo?id=abc123 - Load shared sequence
 * /demo?id=abc123&autoplay=true - Auto-start sequence
 * /demo?id=abc123&lang=es - Load in Spanish
 */
export default function DemoPageRoute() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleNavigate = (path: string) => {
    // Map internal navigation to React Router paths
    const routeMap: { [key: string]: string } = {
      'sequence-library': '/demos',
      'sequence-builder': '/build',
      'persona': '/platform',
      'landing': '/',
      'dashboard': '/dashboard',
      'enhanced-landing': '/features',
      'sitemap': '/sitemap'
    };

    const routePath = routeMap[path] || `/${path}`;
    navigate(routePath);
  };

  // Get language from URL params or default to 'en'
  const language = (searchParams.get('lang') as 'en' | 'es') || 'en';

  // Check if we have a sequence ID
  const sequenceId = searchParams.get('id');
  
  if (!sequenceId) {
    // Show the demo request page
    return <DemoRequestPage />;
  }

  return (
    <DemoPage
      language={language}
      onNavigate={handleNavigate}
    />
  );
}