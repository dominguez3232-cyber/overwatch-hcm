// OVERWATCH³ Tailwind Preset - Schema-Driven Design Tokens
// Automatically generated from tokens.json for consistency

const tokens = require('./tokens.json');

// Transform design tokens to Tailwind format
function transformTokens(tokenObj, prefix = '') {
  const result = {};
  
  for (const [key, value] of Object.entries(tokenObj)) {
    const currentKey = prefix ? `${prefix}-${key}` : key;
    
    if (value && typeof value === 'object' && value.value !== undefined) {
      // This is a design token with a value
      result[currentKey] = value.value;
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      // This is a nested object, recurse
      Object.assign(result, transformTokens(value, currentKey));
    }
  }
  
  return result;
}

// Extract specific token categories
const colors = transformTokens(tokens.overwatch.global.color);
const moduleColors = transformTokens(tokens.overwatch.modules);
const spacing = transformTokens(tokens.overwatch.global.spacing);
const borderRadius = transformTokens(tokens.overwatch.global.borderRadius);
const shadows = transformTokens(tokens.overwatch.global.boxShadow);
const moduleShadows = {};
const moduleGradients = {};

// Extract module-specific shadows and gradients
Object.keys(tokens.overwatch.modules).forEach(module => {
  const moduleData = tokens.overwatch.modules[module];
  if (moduleData.boxShadow) {
    moduleShadows[`${module}-card`] = moduleData.boxShadow.card.value;
  }
  if (moduleData.gradient) {
    moduleGradients[`${module}-bg`] = moduleData.gradient.background.value;
  }
});

module.exports = {
  theme: {
    extend: {
      colors: {
        // Global OVERWATCH³ colors
        ...colors,
        // Module-specific colors  
        ...moduleColors,
        // Semantic colors
        success: tokens.overwatch.semantic.success.value,
        warning: tokens.overwatch.semantic.warning.value,
        error: tokens.overwatch.semantic.error.value,
        info: tokens.overwatch.semantic.info.value,
      },
      spacing: {
        ...spacing,
      },
      borderRadius: {
        ...borderRadius,
        // Module-specific radius
        crm: tokens.overwatch.modules.crm.borderRadius.default.value,
        edm: tokens.overwatch.modules.edm.borderRadius.default.value,
        hris: tokens.overwatch.modules.hris.borderRadius.default.value,
        epm: tokens.overwatch.modules.epm.borderRadius.default.value,
        erp: tokens.overwatch.modules.erp.borderRadius.default.value,
        command: tokens.overwatch.global.borderRadius.command.value,
      },
      boxShadow: {
        ...shadows,
        ...moduleShadows,
      },
      backgroundImage: {
        ...moduleGradients,
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace'],
      },
    },
  },
  plugins: [
    // Plugin to generate component utility classes from tokens
    function({ addComponents }) {
      const components = {};
      
      // Generate module card components
      Object.keys(tokens.overwatch.modules).forEach(module => {
        const moduleToken = tokens.overwatch.modules[module];
        
        components[`.${module}-card`] = {
          '@apply bg-card/50 backdrop-blur-sm border border-border p-6': {},
          'border-radius': moduleToken.borderRadius.default.value,
          'box-shadow': moduleToken.boxShadow.card.value,
          'background-image': moduleToken.gradient.background.value,
        };
        
        components[`.${module}-button`] = {
          '@apply font-medium px-4 py-2 transition-colors text-white': {},
          'background-color': moduleToken.color.accent.value,
          'border-radius': moduleToken.borderRadius.default.value,
          '&:hover': {
            'background-color': moduleToken.color.highlight.value,
          },
        };
        
        components[`.${module}-badge`] = {
          '@apply px-2 py-1 rounded text-xs font-medium border': {},
          'background-color': moduleToken.color.muted.value,
          'color': moduleToken.color.accent.value,
          'border-color': `${moduleToken.color.accent.value}33`, // 20% opacity
        };
        
        components[`.${module}-header`] = {
          '@apply border': {},
          'border-radius': moduleToken.borderRadius.default.value,
          'background-image': `linear-gradient(to right, ${moduleToken.color.accent.value}1a, ${moduleToken.color.highlight.value}0d)`, // 10% and 5% opacity
          'border-color': `${moduleToken.color.accent.value}33`, // 20% opacity
        };
      });
      
      // Command center components
      components['.command-center-card'] = {
        '@apply bg-card/50 backdrop-blur-sm border border-border': {},
        'border-radius': tokens.overwatch.global.borderRadius.command.value,
        'box-shadow': tokens.overwatch.global.boxShadow['command-center'].value,
        'background-image': 'linear-gradient(135deg, rgba(192, 192, 192, 0.1) 0%, rgba(140, 140, 140, 0.05) 100%)',
      };
      
      components['.command-center-button'] = {
        '@apply font-medium px-6 py-3 transition-colors': {},
        'background-color': tokens.overwatch.global.color.accent.silver.value,
        'color': tokens.overwatch.global.color.background.primary.value,
        'border-radius': tokens.overwatch.global.borderRadius.command.value,
        '&:hover': {
          'background-color': `${tokens.overwatch.global.color.accent.silver.value}cc`, // 80% opacity
        },
      };
      
      // Universal module components
      components['.module-nav-button'] = {
        '@apply text-foreground hover:bg-secondary px-3 py-1 rounded transition-colors text-sm': {},
      };
      
      components['.module-nav-active'] = {
        '@apply bg-secondary/50 text-primary': {},
        'box-shadow': tokens.overwatch.global.boxShadow['silver-glow'].value,
      };
      
      components['.module-status-online'] = {
        '@apply w-2 h-2 rounded-full animate-pulse': {},
        'background-color': tokens.overwatch.semantic.success.value,
      };
      
      components['.module-status-warning'] = {
        '@apply w-2 h-2 rounded-full animate-pulse': {},
        'background-color': tokens.overwatch.semantic.warning.value,
      };
      
      components['.module-status-error'] = {
        '@apply w-2 h-2 rounded-full animate-pulse': {},
        'background-color': tokens.overwatch.semantic.error.value,
      };
      
      components['.module-metric-card'] = {
        '@apply backdrop-blur-sm border border-border rounded-lg': {},
        'background-color': tokens.overwatch.global.color.background.tertiary.value,
        'padding': tokens.overwatch.global.spacing.md.value,
      };
      
      components['.module-metric-value'] = {
        '@apply font-bold': {},
        'font-size': '24px',
        'color': tokens.overwatch.global.color.foreground.primary.value,
      };
      
      components['.module-metric-label'] = {
        'font-size': '14px',
        'color': tokens.overwatch.global.color.foreground.muted.value,
      };
      
      components['.module-chart-container'] = {
        '@apply backdrop-blur-sm border border-border rounded-lg': {},
        'background-color': tokens.overwatch.global.color.background.secondary.value,
        'padding': tokens.overwatch.global.spacing.xl.value,
      };
      
      components['.module-chart-title'] = {
        '@apply flex items-center gap-2 font-semibold': {},
        'font-size': '18px',
        'color': tokens.overwatch.global.color.foreground.primary.value,
        'margin-bottom': tokens.overwatch.global.spacing.md.value,
      };
      
      components['.competitive-card'] = {
        '@apply rounded-lg border border-border': {},
        'background-color': tokens.overwatch.global.color.background.secondary.value,
        'padding': tokens.overwatch.global.spacing.md.value,
      };
      
      components['.competitive-title'] = {
        '@apply font-medium': {},
        'font-size': '14px',
        'color': tokens.overwatch.global.color.foreground.primary.value,
      };
      
      components['.competitive-subtitle'] = {
        '@apply mt-1': {},
        'font-size': '12px',
        'color': tokens.overwatch.global.color.foreground.muted.value,
      };
      
      components['.silver-glow'] = {
        'box-shadow': tokens.overwatch.global.boxShadow['silver-glow'].value,
      };
      
      addComponents(components);
    },
  ],
};