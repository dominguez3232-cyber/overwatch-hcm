# OVERWATCH³ Module Token System
## Schema-Driven Design → Code Pipeline

### 🎯 **Overview**
This document outlines the comprehensive Tailwind V4 token system for OVERWATCH³ modules, enabling one-click design-to-code workflows while maintaining the matte black + silver aesthetic with module-specific accent theming.

### 🎨 **Color Token Architecture**

#### **Base Matte Black + Silver Palette**
```css
/* Global Foundation */
--background: #0c0c0c        /* Matte black base */
--foreground: #f5f5f5        /* Silver text */
--primary: #c0c0c0           /* Silver accent */
--card: #171717              /* Card surfaces */
--border: #333333            /* Subtle borders */
```

#### **Module-Specific Accent Colors**
```css
/* CRM Intelligence - Red Accent */
--crm-accent: #FF3B30         /* Primary CRM red */
--crm-highlight: #FF6B5E      /* Hover/active states */
--crm-muted: #4A1713          /* Background tints */

/* EDM Intelligence - Green Accent */
--edm-accent: #34C759         /* Primary EDM green */
--edm-highlight: #6EE787      /* Hover/active states */
--edm-muted: #1A3A20          /* Background tints */

/* HRIS³ - Emerald Accent */
--hris-accent: #22C55E        /* Primary HRIS emerald */
--hris-highlight: #4ADE80     /* Hover/active states */
--hris-muted: #052E16         /* Background tints */

/* EPM Cloud - Purple Accent */
--epm-accent: #8B5CF6         /* Primary EPM purple */
--epm-highlight: #A78BFA      /* Hover/active states */
--epm-muted: #2E1065          /* Background tints */

/* ERP Assessment - Blue Accent */
--erp-accent: #3B82F6         /* Primary ERP blue */
--erp-highlight: #60A5FA      /* Hover/active states */
--erp-muted: #1E3A8A          /* Background tints */
```

### 🎨 **Component Class Presets**

#### **Ready-to-Use Module Components**
These classes combine multiple Tailwind utilities for common module patterns:

```tsx
// CRM Module Components
<div className="crm-card">...</div>              // Card with CRM styling
<button className="crm-button">...</button>      // CRM accent button
<span className="crm-badge">...</span>           // CRM status badge
<header className="crm-header">...</header>      // CRM module header

// EDM Module Components  
<div className="edm-card">...</div>              // Card with EDM styling
<button className="edm-button">...</button>      // EDM accent button
<span className="edm-badge">...</span>           // EDM status badge
<header className="edm-header">...</header>      // EDM module header

// HRIS Module Components
<div className="hris-card">...</div>             // Card with HRIS styling
<button className="hris-button">...</button>     // HRIS accent button

// EPM Module Components
<div className="epm-card">...</div>              // Card with EPM styling
<button className="epm-button">...</button>      // EPM accent button

// ERP Module Components
<div className="erp-card">...</div>              // Card with ERP styling
<button className="erp-button">...</button>      // ERP accent button

// Command Center Components
<div className="command-center-card">...</div>   // Silver-themed command card
<button className="command-center-button">...</button> // Silver accent button
<div className="silver-glow">...</div>           // Silver glow effect
```

#### **Universal Module Components**
```tsx
// Navigation
<button className="module-nav-button">...</button>          // Standard nav button
<button className="module-nav-button module-nav-active">...</button> // Active nav

// Status Indicators
<div className="module-status-online"></div>    // Green pulse dot
<div className="module-status-warning"></div>   // Yellow pulse dot  
<div className="module-status-error"></div>     // Red pulse dot

// Metrics & Analytics
<div className="module-metric-card">             // Metric container
  <div className="module-metric-value">1,247</div>  // Large number
  <div className="module-metric-label">Leads</div>  // Description
</div>

<div className="module-chart-container">         // Chart wrapper
  <h3 className="module-chart-title">📊 Pipeline</h3>
  {/* Chart content */}
</div>

// Competitive Intelligence
<div className="competitive-card">              // Competitor comparison
  <div className="competitive-title">vs. Salesforce</div>
  <div className="competitive-subtitle">Advisory intelligence vs. enterprise overhead</div>
</div>
```

### 🎯 **Usage Examples**

#### **CRM Intelligence Module**
```tsx
export function CrmDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with CRM branding */}
      <header className="crm-header px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">CRM Intelligence</h1>
          <span className="crm-badge">Live Pipeline</span>
          <div className="module-status-online"></div>
        </div>
      </header>
      
      {/* Main content area */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metrics */}
        <div className="module-metric-card">
          <div className="module-metric-value text-crm-accent">1,847</div>
          <div className="module-metric-label">Total Leads</div>
        </div>
        
        {/* CRM Analytics Card */}
        <div className="crm-card lg:col-span-2">
          <div className="module-chart-container">
            <h3 className="module-chart-title">
              <span className="text-crm-accent">📈</span>
              Pipeline Forecasting
            </h3>
            {/* Chart component */}
          </div>
        </div>
        
        {/* Competitive Intelligence */}
        <div className="competitive-card">
          <div className="competitive-title">vs. Salesforce</div>
          <div className="competitive-subtitle">
            Schema-driven coaching vs. complex enterprise overhead
          </div>
        </div>
      </div>
      
      {/* CRM Actions */}
      <div className="p-6 flex gap-4">
        <button className="crm-button">Generate Report</button>
        <button className="module-nav-button">Export Data</button>
      </div>
    </div>
  );
}
```

#### **EDM Intelligence Module**
```tsx
export function EdmDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="edm-header px-6 py-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="text-edm-accent">📧</span>
          EDM Intelligence
        </h1>
      </header>
      
      <div className="p-6">
        <div className="edm-card">
          <div className="module-chart-container">
            <h3 className="module-chart-title">
              <span className="text-edm-accent">📊</span>
              Campaign ROI Tracking
            </h3>
            {/* EDM-specific chart */}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 🔧 **Shadow & Border Radius System**

#### **Module-Specific Shadows**
```css
--shadow-crm-card: 0 4px 12px rgba(255, 59, 48, 0.25)    /* CRM red glow */
--shadow-edm-card: 0 4px 12px rgba(52, 199, 89, 0.25)    /* EDM green glow */
--shadow-hris-card: 0 4px 12px rgba(34, 197, 94, 0.25)   /* HRIS emerald glow */
--shadow-epm-card: 0 4px 12px rgba(139, 92, 246, 0.25)   /* EPM purple glow */
--shadow-erp-card: 0 4px 12px rgba(59, 130, 246, 0.25)   /* ERP blue glow */
--shadow-silver-glow: 0 0 20px rgba(192, 192, 192, 0.15) /* Command center glow */
```

#### **Module Border Radius**
```css
--radius-crm: 0.75rem          /* CRM component radius */
--radius-edm: 0.75rem          /* EDM component radius */
--radius-command: 1rem         /* Command center radius */
```

### 🚀 **Figma → Schema → Tailwind Pipeline**

#### **1. Figma Design Tokens**
```json
{
  "componentName": "CRM_Module",
  "theme": {
    "background": "#0A0A0A",
    "primary": "#C0C0C0", 
    "accent": "#FF3B30"
  },
  "sections": [...]
}
```

#### **2. Schema-Driven Implementation**
```tsx
// Direct mapping from JSON to component classes
const moduleTheme = {
  crm: 'crm-card crm-button crm-badge',
  edm: 'edm-card edm-button edm-badge', 
  hris: 'hris-card hris-button hris-badge'
};

// One-click component generation
<div className={`${moduleTheme.crm} module-chart-container`}>
  {/* Auto-themed content */}
</div>
```

#### **3. Atomic Utilities for Custom Cases**
```tsx
// When you need custom combinations
<div className="bg-background border-crm-accent/20 shadow-crm-card rounded-crm">
  <span className="text-crm-highlight">Custom CRM element</span>
</div>

// Mix module tokens with standard utilities  
<button className="bg-crm-accent hover:bg-crm-highlight px-4 py-2 rounded-crm transition-colors">
  Custom CRM Button
</button>
```

### 📊 **Navigation Group Architecture**

#### **Enterprise Core Modules**
- **HRIS³**: `hris-*` classes, emerald accent (#22C55E)
- **EPM Cloud**: `epm-*` classes, purple accent (#8B5CF6)  
- **ERP Assessment**: `erp-*` classes, blue accent (#3B82F6)

#### **Customer Intelligence Modules**
- **CRM Intelligence**: `crm-*` classes, red accent (#FF3B30)
- **EDM Intelligence**: `edm-*` classes, green accent (#34C759)
- **Sales Intel**: Future module, orange accent planned

#### **Strategic Command Modules**
- **Business Intel**: `command-center-*` classes, silver theme
- **ROI Analytics**: `command-center-*` classes, silver theme
- **Deployment**: `command-center-*` classes, silver theme

### 🌐 **Bilingual Support**

All module tokens work seamlessly with English/Spanish toggles:

```tsx
// Tokens remain consistent across languages
<div className="crm-card">
  <h3 className="module-chart-title">
    {language === 'en' ? 'Pipeline Forecasting' : 'Pronóstico de Pipeline'}
  </h3>
</div>
```

### 🎯 **Best Practices**

#### **DO:**
- ✅ Use module-specific component classes for consistent theming
- ✅ Combine atomic utilities for custom variations
- ✅ Leverage module status indicators for real-time feedback
- ✅ Apply appropriate shadows and radius for visual hierarchy

#### **DON'T:**
- ❌ Override module accent colors without design system approval
- ❌ Mix module themes within the same component
- ❌ Use hardcoded colors instead of design tokens
- ❌ Ignore the matte black + silver base aesthetic

### 🔄 **Version Control & Updates**

This token system is designed for:
- **Schema-driven updates**: JSON changes propagate to CSS automatically
- **Modular deployment**: Add new modules without affecting existing ones
- **Investor-grade consistency**: Traceable design decisions from Figma to production
- **Developer efficiency**: One-click styling with semantic class names

---

**🪶 Ready for deployment!** Your CRM + EDM modules now have a complete, schema-driven design token system that maintains OVERWATCH³'s cinematic matte black + silver aesthetic while providing module-specific theming hooks for independent development and deployment.