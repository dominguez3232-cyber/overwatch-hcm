import React from 'react';
import { 
  MetricCard, 
  SectionFrame, 
  OverlayPanel, 
  CaptionBlock, 
  ProofEngineMetric, 
  UIElement 
} from './FigmaComponentScaffolds';

import {
  MetricCardProps,
  SectionFrameProps,
  OverlayPanelProps,
  CaptionBlockProps,
  ProofEngineMetricProps,
  UIElementProps,
  FigmaNamingConvention,
  ComponentRegistry,
  generateFigmaName,
  generateReactComponentName
} from './FigmaScaffoldTypes';

// Component registry mapping Figma names to React components
const DEFAULT_COMPONENT_REGISTRY: ComponentRegistry = {
  // Metric Cards
  'metric-card/ceo-revenue-growth': {
    figmaName: 'metric-card/ceo-revenue-growth',
    reactComponent: MetricCard,
    propsMapping: {
      'stakeholder': 'stakeholder',
      'module': 'module', 
      'metric': 'metric',
      'value': 'value',
      'unit': 'unit',
      'trend': 'trend',
      'language': 'language'
    },
    defaultProps: {
      stakeholder: 'CEO',
      module: 'ERP',
      metric: 'Revenue Growth',
      size: 'md',
      variant: 'default'
    }
  },
  'metric-card/cfo-forecast-accuracy': {
    figmaName: 'metric-card/cfo-forecast-accuracy',
    reactComponent: MetricCard,
    propsMapping: {
      'stakeholder': 'stakeholder',
      'module': 'module',
      'metric': 'metric',
      'value': 'value',
      'unit': 'unit',
      'trend': 'trend',
      'language': 'language'
    },
    defaultProps: {
      stakeholder: 'CFO',
      module: 'EPM',
      metric: 'Forecast Accuracy',
      size: 'md',
      variant: 'default'
    }
  },
  'metric-card/chro-engagement-score': {
    figmaName: 'metric-card/chro-engagement-score',
    reactComponent: MetricCard,
    propsMapping: {
      'stakeholder': 'stakeholder',
      'module': 'module',
      'metric': 'metric',
      'value': 'value',
      'unit': 'unit',
      'trend': 'trend',
      'language': 'language'
    },
    defaultProps: {
      stakeholder: 'CHRO',
      module: 'HCM',
      metric: 'Engagement Score',
      size: 'md',
      variant: 'default'
    }
  },
  'metric-card/coo-pipeline-conversion': {
    figmaName: 'metric-card/coo-pipeline-conversion',
    reactComponent: MetricCard,
    propsMapping: {
      'stakeholder': 'stakeholder',
      'module': 'module',
      'metric': 'metric',
      'value': 'value',
      'unit': 'unit',
      'trend': 'trend',
      'language': 'language'
    },
    defaultProps: {
      stakeholder: 'COO',
      module: 'CRM',
      metric: 'Pipeline Conversion',
      size: 'md',
      variant: 'default'
    }
  },

  // Section Frames
  'section/ceo-epm': {
    figmaName: 'section/ceo-epm',
    reactComponent: SectionFrame,
    propsMapping: {
      'stakeholder': 'stakeholder',
      'module': 'module',
      'title': 'title',
      'subtitle': 'subtitle',
      'language': 'language',
      'children': 'children'
    },
    defaultProps: {
      stakeholder: 'CEO',
      module: 'EPM',
      title: 'CEO Command Center',
      language: 'en'
    }
  },
  'section/cfo-epm': {
    figmaName: 'section/cfo-epm',
    reactComponent: SectionFrame,
    propsMapping: {
      'stakeholder': 'stakeholder',
      'module': 'module',
      'title': 'title',
      'subtitle': 'subtitle',
      'language': 'language',
      'children': 'children'
    },
    defaultProps: {
      stakeholder: 'CFO',
      module: 'EPM',
      title: 'CFO Financial Command',
      language: 'en'
    }
  },

  // Overlays
  'overlay/ceo-revenue-growth': {
    figmaName: 'overlay/ceo-revenue-growth',
    reactComponent: OverlayPanel,
    propsMapping: {
      'stakeholder': 'stakeholder',
      'metric': 'metric',
      'content': 'content',
      'language': 'language',
      'isOpen': 'isOpen',
      'onClose': 'onClose'
    },
    defaultProps: {
      stakeholder: 'CEO',
      metric: 'Revenue Growth',
      language: 'en'
    }
  },

  // Captions
  'caption/ceo-revenue-growth': {
    figmaName: 'caption/ceo-revenue-growth',
    reactComponent: CaptionBlock,
    propsMapping: {
      'stakeholder': 'stakeholder',
      'metric': 'metric',
      'caption': 'caption',
      'language': 'language',
      'variant': 'variant'
    },
    defaultProps: {
      stakeholder: 'CEO',
      metric: 'Revenue Growth',
      caption: 'Growth that scales with discipline.',
      language: 'en',
      variant: 'default'
    }
  },

  // Proof Engine
  'proof/revenue-lift': {
    figmaName: 'proof/revenue-lift',
    reactComponent: ProofEngineMetric,
    propsMapping: {
      'metric': 'metric',
      'value': 'value',
      'unit': 'unit',
      'impact': 'impact',
      'language': 'language'
    },
    defaultProps: {
      metric: 'Revenue Lift',
      value: '127',
      unit: '%',
      impact: 'Average revenue increase across deployments',
      language: 'en'
    }
  },

  // UI Elements
  'ui/toggle-en-es': {
    figmaName: 'ui/toggle-en-es',
    reactComponent: UIElement,
    propsMapping: {
      'element': 'element',
      'language': 'language',
      'props': 'props'
    },
    defaultProps: {
      element: 'toggle-en-es',
      language: 'en'
    }
  },
  'ui/status-indicator': {
    figmaName: 'ui/status-indicator',
    reactComponent: UIElement,
    propsMapping: {
      'element': 'element',
      'language': 'language',
      'props': 'props'
    },
    defaultProps: {
      element: 'status-indicator',
      language: 'en'
    }
  }
};

// Factory class for creating components from Figma names
export class FigmaComponentFactory {
  private componentRegistry: ComponentRegistry;

  constructor(customRegistry?: Partial<ComponentRegistry>) {
    this.componentRegistry = {
      ...DEFAULT_COMPONENT_REGISTRY,
      ...customRegistry
    };
  }

  // Create a component based on Figma naming convention
  createComponent(
    figmaName: string, 
    props: Record<string, any> = {},
    key?: string
  ): React.ReactElement | null {
    const registryEntry = this.componentRegistry[figmaName];
    
    if (!registryEntry) {
      console.warn(`Component not found in registry: ${figmaName}`);
      return this.createFallbackComponent(figmaName, props, key);
    }

    const Component = registryEntry.reactComponent;
    const mappedProps = this.mapProps(props, registryEntry.propsMapping);
    const finalProps = {
      ...registryEntry.defaultProps,
      ...mappedProps,
      key: key || figmaName
    };

    return React.createElement(Component, finalProps);
  }

  // Create multiple components from an array of definitions
  createComponents(
    definitions: Array<{
      figmaName: string;
      props?: Record<string, any>;
      key?: string;
    }>
  ): React.ReactElement[] {
    return definitions
      .map((def, index) => 
        this.createComponent(
          def.figmaName, 
          def.props, 
          def.key || `${def.figmaName}-${index}`
        )
      )
      .filter(Boolean) as React.ReactElement[];
  }

  // Register a new component in the factory
  registerComponent(
    figmaName: string,
    reactComponent: React.ComponentType<any>,
    propsMapping: Record<string, string>,
    defaultProps?: Record<string, any>
  ): void {
    this.componentRegistry[figmaName] = {
      figmaName,
      reactComponent,
      propsMapping,
      defaultProps
    };
  }

  // Get all registered component names
  getRegisteredComponents(): string[] {
    return Object.keys(this.componentRegistry);
  }

  // Validate if a Figma name is registered
  isRegistered(figmaName: string): boolean {
    return figmaName in this.componentRegistry;
  }

  // Auto-register a component based on naming convention
  autoRegisterComponent(
    figmaName: string,
    componentType: 'metric-card' | 'section' | 'overlay' | 'caption' | 'proof' | 'ui',
    defaultProps?: Record<string, any>
  ): void {
    let reactComponent: React.ComponentType<any>;
    let propsMapping: Record<string, string>;

    switch (componentType) {
      case 'metric-card':
        reactComponent = MetricCard;
        propsMapping = {
          'stakeholder': 'stakeholder',
          'module': 'module',
          'metric': 'metric',
          'value': 'value',
          'unit': 'unit',
          'trend': 'trend',
          'language': 'language'
        };
        break;
      case 'section':
        reactComponent = SectionFrame;
        propsMapping = {
          'stakeholder': 'stakeholder',
          'module': 'module',
          'title': 'title',
          'subtitle': 'subtitle',
          'language': 'language',
          'children': 'children'
        };
        break;
      case 'overlay':
        reactComponent = OverlayPanel;
        propsMapping = {
          'stakeholder': 'stakeholder',
          'metric': 'metric',
          'content': 'content',
          'language': 'language',
          'isOpen': 'isOpen',
          'onClose': 'onClose'
        };
        break;
      case 'caption':
        reactComponent = CaptionBlock;
        propsMapping = {
          'stakeholder': 'stakeholder',
          'metric': 'metric',
          'caption': 'caption',
          'language': 'language',
          'variant': 'variant'
        };
        break;
      case 'proof':
        reactComponent = ProofEngineMetric;
        propsMapping = {
          'metric': 'metric',
          'value': 'value',
          'unit': 'unit',
          'impact': 'impact',
          'language': 'language'
        };
        break;
      case 'ui':
        reactComponent = UIElement;
        propsMapping = {
          'element': 'element',
          'language': 'language',
          'props': 'props'
        };
        break;
      default:
        throw new Error(`Unknown component type: ${componentType}`);
    }

    this.registerComponent(figmaName, reactComponent, propsMapping, defaultProps);
  }

  // Private method to map props based on registry configuration
  private mapProps(
    inputProps: Record<string, any>, 
    propsMapping: Record<string, string>
  ): Record<string, any> {
    const mappedProps: Record<string, any> = {};
    
    Object.entries(inputProps).forEach(([key, value]) => {
      const mappedKey = propsMapping[key] || key;
      mappedProps[mappedKey] = value;
    });

    return mappedProps;
  }

  // Create a fallback component for unregistered Figma names
  private createFallbackComponent(
    figmaName: string, 
    props: Record<string, any>,
    key?: string
  ): React.ReactElement {
    return React.createElement(
      'div',
      {
        key: key || figmaName,
        className: 'p-4 border border-dashed border-muted-foreground rounded-lg bg-muted/20',
        ...props
      },
      React.createElement(
        'div',
        { className: 'text-center text-muted-foreground' },
        React.createElement('div', { className: 'font-bold text-sm' }, 'Component Not Found'),
        React.createElement('div', { className: 'text-xs font-mono mt-1' }, figmaName),
        React.createElement(
          'div', 
          { className: 'text-xs mt-2' }, 
          'Register this component in the factory to render properly.'
        )
      )
    );
  }
}

// Default factory instance
export const defaultComponentFactory = new FigmaComponentFactory();

// Convenience hook for using the factory in React components
export const useFigmaComponentFactory = (customRegistry?: Partial<ComponentRegistry>) => {
  const [factory] = React.useState(() => new FigmaComponentFactory(customRegistry));
  return factory;
};

// Higher-order component for Anima integration
export const withFigmaComponent = (figmaName: string) => {
  return (WrappedComponent: React.ComponentType<any>) => {
    const FigmaWrappedComponent: React.FC<any> = (props) => {
      const component = defaultComponentFactory.createComponent(figmaName, props);
      return component || React.createElement(WrappedComponent, props);
    };
    
    FigmaWrappedComponent.displayName = `FigmaComponent(${generateReactComponentName(figmaName)})`;
    return FigmaWrappedComponent;
  };
};

// Export everything for easy import
export default {
  FigmaComponentFactory,
  defaultComponentFactory,
  useFigmaComponentFactory,
  withFigmaComponent,
  DEFAULT_COMPONENT_REGISTRY
};