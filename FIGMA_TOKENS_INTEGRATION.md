# OVERWATCH³ Figma Tokens Integration Guide
## Schema-Driven Design → Code Pipeline

### 🎯 **Overview**
This guide shows how to integrate our unified `tokens.json` with Figma Tokens plugin and maintain a single source of truth for both design and development.

### 📋 **Setup Instructions**

#### **1. Install Figma Tokens Plugin**
1. Open Figma
2. Go to Plugins → Browse all plugins
3. Search for "Figma Tokens"
4. Install the plugin by Jan Six

#### **2. Import OVERWATCH³ Tokens**
1. Open the Figma Tokens plugin in your design file
2. Click "Import" → "Import from JSON"
3. Upload the `/tokens.json` file from your project
4. Select "Replace all tokens" to ensure clean import

#### **3. Configure Token Sets**
The tokens are organized into logical sets:

```
📁 overwatch
  📁 global          (Base matte black + silver theme)
  📁 modules         (CRM, EDM, HRIS, EPM, ERP specific)
  📁 components      (Component-level tokens)
  📁 semantic        (Success, warning, error colors)
  📁 navigation      (Navigation group configurations)
```

### 🎨 **Using Tokens in Figma**

#### **Global Colors**
```
overwatch.global.color.background.primary     → #0A0A0A (Matte black)
overwatch.global.color.foreground.primary     → #F5F5F5 (Silver text)
overwatch.global.color.accent.silver          → #C0C0C0 (Silver accent)
```

#### **Module-Specific Colors**
```
overwatch.modules.crm.color.accent            → #FF3B30 (CRM red)
overwatch.modules.edm.color.accent            → #34C759 (EDM green)
overwatch.modules.hris.color.accent           → #22C55E (HRIS emerald)
overwatch.modules.epm.color.accent            → #8B5CF6 (EPM purple)
overwatch.modules.erp.color.accent            → #3B82F6 (ERP blue)
```

#### **Component Tokens**
```
overwatch.components.button.crm.backgroundColor     → CRM button background
overwatch.components.card.crm.borderRadius          → CRM card radius
overwatch.components.badge.edm.color                → EDM badge text color
```

### 🔧 **Figma Design Workflow**

#### **1. Create Module Components**
When designing CRM module components:
1. Select your component
2. Apply `overwatch.modules.crm.color.accent` for primary elements
3. Use `overwatch.modules.crm.color.highlight` for hover states
4. Apply `overwatch.modules.crm.borderRadius.default` for consistent radius

#### **2. Component Naming Convention**
Follow this pattern to maintain schema alignment:
```
🎯 CRM/Card/Primary              → Uses CRM token set
📧 EDM/Button/Secondary          → Uses EDM token set  
🏢 HRIS/Badge/Active             → Uses HRIS token set
⚡ EPM/Chart/Container            → Uses EPM token set
📊 ERP/Metric/Value              → Uses ERP token set
```

#### **3. Auto-Layout with Token Spacing**
Use consistent spacing tokens:
```
overwatch.global.spacing.xs      → 4px   (Tight spacing)
overwatch.global.spacing.sm      → 8px   (Small gaps)
overwatch.global.spacing.md      → 16px  (Standard padding)
overwatch.global.spacing.lg      → 24px  (Section spacing)
overwatch.global.spacing.xl      → 32px  (Large padding)
overwatch.global.spacing.2xl     → 48px  (Major sections)
```

### ⚡ **Sync Workflow**

#### **Design → Code Pipeline**
1. **Design in Figma** using token references
2. **Export tokens** from Figma Tokens plugin
3. **Update tokens.json** in your project repository
4. **Run build** to regenerate Tailwind classes
5. **Deploy** with synchronized design tokens

#### **Automated Sync (Recommended)**
Set up GitHub Actions to automatically sync tokens:

```yaml
# .github/workflows/figma-tokens-sync.yml
name: Figma Tokens Sync
on:
  repository_dispatch:
    types: [figma-tokens-update]

jobs:
  sync-tokens:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Update tokens.json
        run: |
          # Your token sync logic here
          npm run build:tokens
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add tokens.json
          git commit -m "🎨 Update design tokens from Figma" || exit 0
          git push
```

### 🎯 **Module-Specific Design Patterns**

#### **CRM Intelligence Module**
```
Background:     overwatch.global.color.background.primary
Cards:          overwatch.components.card.crm
Buttons:        overwatch.components.button.crm
Accent:         overwatch.modules.crm.color.accent
Shadows:        overwatch.modules.crm.boxShadow.card
```

#### **EDM Intelligence Module**
```
Background:     overwatch.global.color.background.primary
Cards:          overwatch.components.card.edm
Buttons:        overwatch.components.button.edm
Accent:         overwatch.modules.edm.color.accent
Shadows:        overwatch.modules.edm.boxShadow.card
```

#### **Command Center Components**
```
Background:     overwatch.global.color.background.primary
Cards:          overwatch.components.card.command-center
Buttons:        overwatch.components.button.primary
Glow Effect:    overwatch.global.boxShadow.silver-glow
```

### 🔗 **Token Reference Examples**

#### **In Figma**
When applying tokens to components:
1. **Fill**: `overwatch.modules.crm.color.accent`
2. **Stroke**: `overwatch.global.color.border.default`
3. **Corner Radius**: `overwatch.modules.crm.borderRadius.default`
4. **Effect**: `overwatch.modules.crm.boxShadow.card`

#### **In Code (Auto-Generated)**
The same tokens become:
```tsx
// Using component classes (recommended)
<div className="crm-card">
  <button className="crm-button">CRM Action</button>
</div>

// Using atomic utilities (for custom cases)
<div className="bg-background border-crm-accent/20 shadow-crm-card rounded-crm">
  <span className="text-crm-accent">Custom CRM element</span>
</div>
```

### 🚀 **Advanced Features**

#### **Token Aliasing**
Create semantic aliases for better maintainability:
```json
{
  "cta-primary": {
    "value": "{overwatch.modules.crm.color.accent}",
    "type": "color",
    "description": "Primary call-to-action color"
  },
  "surface-elevated": {
    "value": "{overwatch.global.color.background.secondary}",
    "type": "color",
    "description": "Elevated surface backgrounds"
  }
}
```

#### **Theme Variants**
Support multiple themes while maintaining module structure:
```json
{
  "overwatch": {
    "light": {
      "global": {
        "color": {
          "background": {
            "primary": {
              "value": "#FFFFFF",
              "type": "color"
            }
          }
        }
      }
    },
    "dark": {
      // Current matte black theme
    }
  }
}
```

#### **Conditional Tokens**
Use Figma Tokens' conditional logic for responsive design:
```json
{
  "spacing": {
    "section": {
      "value": "{overwatch.global.spacing.xl}",
      "type": "spacing",
      "$extensions": {
        "figma-tokens": {
          "condition": "screen >= md"
        }
      }
    }
  }
}
```

### 📊 **Quality Assurance**

#### **Token Validation**
Before committing token changes:
1. **Design Review**: Ensure tokens maintain OVERWATCH³ aesthetic
2. **Accessibility Check**: Verify contrast ratios meet WCAG standards
3. **Component Test**: Validate all module components still function
4. **Build Test**: Ensure Tailwind compilation succeeds

#### **Design System Documentation**
Maintain token documentation in Figma:
1. Create a "Design Tokens" page in your Figma file
2. Document each module's color psychology and usage
3. Show before/after examples of token applications
4. Include accessibility notes for each color combination

### 🎨 **Best Practices**

#### **DO:**
- ✅ Always use token references, never hardcoded values
- ✅ Follow the module naming convention consistently  
- ✅ Test token changes across all module components
- ✅ Document token usage decisions in design files
- ✅ Use semantic naming for component-level tokens

#### **DON'T:**
- ❌ Override token values in individual components
- ❌ Create duplicate tokens with different names
- ❌ Mix module color schemes within components
- ❌ Use tokens for one-off experimental designs
- ❌ Skip the approval process for token changes

### 🔄 **Maintenance Workflow**

#### **Weekly Token Review**
1. **Audit Usage**: Check which tokens are actively used
2. **Clean Unused**: Remove deprecated or unused tokens
3. **Optimize Structure**: Consolidate similar token values
4. **Document Changes**: Update this guide with new patterns

#### **Version Control**
Tag token releases for easy rollback:
```bash
git tag -a tokens-v1.2.0 -m "Added Sales Intel module tokens"
git push origin tokens-v1.2.0
```

### 🎯 **Next Steps**

1. **Import tokens.json** into your Figma file using Figma Tokens plugin
2. **Redesign existing components** to use token references
3. **Create module-specific component libraries** following the token structure
4. **Set up automated sync** between Figma and your repository
5. **Train your design team** on the token workflow

---

**🪶 Your schema-driven design system is now complete!** Changes in Figma automatically propagate to code, ensuring perfect consistency between design and development while maintaining OVERWATCH³'s cinematic matte black + silver aesthetic with strategic module accents.