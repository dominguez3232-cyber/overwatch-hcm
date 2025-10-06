// TypeScript definitions for OVERWATCH³ Figma Component Scaffold System
// Ensures type safety across Schema → Figma → Anima → React pipeline

export type StakeholderType = 'CEO' | 'CFO' | 'CHRO' | 'COO';
export type ModuleType = 'HCM' | 'ERP' | 'EPM' | 'CRM';
export type LanguageType = 'en' | 'es';
export type TrendType = 'up' | 'down' | 'stable';
export type SizeType = 'sm' | 'md' | 'lg';
export type VariantType = 'default' | 'compact' | 'detailed' | 'cinematic' | 'minimal';

// Core metric schema matching your JSON structure
export interface MetricSchema {
  stakeholder: StakeholderType;
  module: ModuleType;
  metric: string;
  value: string | number;
  unit?: string;
  trend?: TrendType;
  threshold?: {
    rule: string;
    alertStyle: 'warning' | 'success' | 'error';
    autoActivate?: boolean;
  };
}

// Overlay content schema for coaching system
export interface OverlayContentSchema {
  metricContext: string;
  strategicGuidance: string;
  tacticalTip: string;
  schemaTrace: string;
}

// Multilingual content schema
export interface MultilingualContentSchema {
  en: OverlayContentSchema;
  es: OverlayContentSchema;
}

// Complete overlay schema matching your coaching system
export interface OverlaySchema {
  overlay_id: string;
  stakeholder: StakeholderType;
  module: ModuleType;
  metric: string;
  triggers: {
    hover: {
      enabled: boolean;
      contentLevel: 'metricContext' | 'full';
    };
    click: {
      enabled: boolean;
      contentLevel: 'metricContext' | 'full';
    };
    threshold?: {
      enabled: boolean;
      rule: string;
      alertStyle: 'warning' | 'success' | 'error';
      autoActivate: boolean;
    };
    scripted?: {
      enabled: boolean;
      sequenceOrder: number;
      demoLabel: string;
    };
  };
  content: MultilingualContentSchema;
}

// Figma naming convention mapping
export interface FigmaNamingConvention {
  componentType: 'section' | 'metric-card' | 'overlay' | 'caption' | 'proof' | 'ui';
  stakeholder?: StakeholderType;
  module?: ModuleType;
  metric?: string;
  element?: string;
  figmaName: string; // The actual Figma component name
  reactComponentName: string; // The corresponding React component name
}

// Props interface for MetricCard component
export interface MetricCardProps {
  stakeholder: StakeholderType;
  module: ModuleType;
  metric: string;
  value: string | number;
  unit?: string;
  trend?: TrendType;
  language: LanguageType;
  size?: SizeType;
  variant?: VariantType;
  className?: string;
  onClick?: () => void;
  onHover?: () => void;
  // Anima-specific props that might be generated
  animaId?: string;
  animaVariant?: string;
  animaBreakpoint?: 'mobile' | 'tablet' | 'desktop';
}

// Props interface for SectionFrame component
export interface SectionFrameProps {
  stakeholder: StakeholderType;
  module: ModuleType;
  title: string;
  subtitle?: string;
  language: LanguageType;
  children: React.ReactNode;
  className?: string;
  // Section-specific properties
  layout?: 'grid' | 'flex' | 'masonry';
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

// Props interface for OverlayPanel component
export interface OverlayPanelProps {
  stakeholder: StakeholderType;
  metric: string;
  content: OverlayContentSchema;
  language: LanguageType;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  // Overlay behavior props
  trigger?: 'hover' | 'click' | 'threshold' | 'scripted';
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  backdrop?: boolean;
}

// Props interface for CaptionBlock component
export interface CaptionBlockProps {
  stakeholder: StakeholderType;
  metric: string;
  caption: string;
  language: LanguageType;
  variant?: VariantType;
  className?: string;
  // Caption styling options
  alignment?: 'left' | 'center' | 'right';
  emphasis?: boolean;
  showMetadata?: boolean;
}

// Props interface for ProofEngineMetric component
export interface ProofEngineMetricProps {
  metric: string;
  value: string | number;
  unit?: string;
  impact: string;
  language: LanguageType;
  size?: SizeType;
  className?: string;
  // Proof engine specific props
  validated?: boolean;
  source?: string;
  timeframe?: string;
}

// Props interface for UIElement component
export interface UIElementProps {
  element: 'header-bar' | 'toggle-en-es' | 'breadcrumb' | 'status-indicator' | 'floating-action' | 'navigation-menu';
  props?: Record<string, any>;
  language: LanguageType;
  className?: string;
  // UI element specific props
  theme?: 'light' | 'dark' | 'auto';
  responsive?: boolean;
}

// Color theme mapping for stakeholders
export interface StakeholderColorTheme {
  primary: string;
  secondary: string;
  bg: string;
  border: string;
  text: string;
  hover?: string;
  active?: string;
}

export interface StakeholderColorMapping {
  CEO: StakeholderColorTheme;
  CFO: StakeholderColorTheme;
  CHRO: StakeholderColorTheme;
  COO: StakeholderColorTheme;
}

// Component registry for Anima integration
export interface ComponentRegistryEntry {
  figmaName: string;
  reactComponent: React.ComponentType<any>;
  propsMapping: Record<string, string>; // Maps Figma property names to React prop names
  defaultProps?: Record<string, any>;
  variants?: string[];
}

export interface ComponentRegistry {
  [key: string]: ComponentRegistryEntry;
}

// Anima export configuration
export interface AnimaExportConfig {
  componentRegistry: ComponentRegistry;
  namingConvention: FigmaNamingConvention[];
  themeMapping: {
    colors: StakeholderColorMapping;
    typography: Record<string, string>;
    spacing: Record<string, string>;
    breakpoints: Record<string, string>;
  };
  codegenSettings: {
    includeComments: boolean;
    includeTypes: boolean;
    formatCode: boolean;
    outputDirectory: string;
  };
}

// Demo sequence for scripted overlays
export interface DemoSequenceStep {
  overlay_id: string;
  stakeholder: StakeholderType;
  metric: string;
  content: MultilingualContentSchema;
  captions: {
    en: string;
    es: string;
  };
  duration?: number;
  autoAdvance?: boolean;
}

export interface DemoSequence {
  id: string;
  name: string;
  description: string;
  steps: DemoSequenceStep[];
  settings: {
    autoPlay: boolean;
    loop: boolean;
    showProgress: boolean;
  };
}

// Analytics tracking for component usage
export interface ComponentAnalytics {
  componentId: string;
  stakeholder: StakeholderType;
  module: ModuleType;
  metric: string;
  interactions: {
    views: number;
    clicks: number;
    hovers: number;
    overlayOpens: number;
  };
  performance: {
    loadTime: number;
    renderTime: number;
  };
  timestamp: string;
}

// Export validation functions
export const validateMetricSchema = (metric: any): metric is MetricSchema => {
  return (
    typeof metric === 'object' &&
    ['CEO', 'CFO', 'CHRO', 'COO'].includes(metric.stakeholder) &&
    ['HCM', 'ERP', 'EPM', 'CRM'].includes(metric.module) &&
    typeof metric.metric === 'string' &&
    (typeof metric.value === 'string' || typeof metric.value === 'number')
  );
};

export const validateOverlaySchema = (overlay: any): overlay is OverlaySchema => {
  return (
    typeof overlay === 'object' &&
    typeof overlay.overlay_id === 'string' &&
    validateMetricSchema(overlay) &&
    typeof overlay.triggers === 'object' &&
    typeof overlay.content === 'object' &&
    typeof overlay.content.en === 'object' &&
    typeof overlay.content.es === 'object'
  );
};

// Utility functions for component generation
export const generateFigmaName = (
  componentType: FigmaNamingConvention['componentType'],
  stakeholder?: StakeholderType,
  module?: ModuleType,
  metric?: string,
  element?: string
): string => {
  const parts = [componentType];
  
  if (stakeholder) parts.push(stakeholder.toLowerCase());
  if (module) parts.push(module.toLowerCase());
  if (metric) parts.push(metric.toLowerCase().replace(/\s+/g, '-'));
  if (element) parts.push(element.toLowerCase().replace(/\s+/g, '-'));
  
  return parts.join('/');
};

export const generateReactComponentName = (figmaName: string): string => {
  return figmaName
    .split('/')
    .map(part => part.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(''))
    .join('');
};

// Default export for comprehensive type checking
export default {
  validateMetricSchema,
  validateOverlaySchema,
  generateFigmaName,
  generateReactComponentName
};