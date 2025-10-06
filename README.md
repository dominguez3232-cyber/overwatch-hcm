# OVERWATCH³ Caption Generator - Figma Plugin

A professional Figma plugin that generates cinematic taglines using OVERWATCH³'s live Edge Function API.

## 🚀 Features

- **Live API Integration**: Connects directly to your Supabase Edge Function
- **OVERWATCH³ Branding**: Professional UI matching your platform aesthetic  
- **Quick Presets**: One-click access to common metric/value combinations
- **Bilingual Support**: Generate captions in English and Spanish
- **Smart Text Handling**: Automatic font loading and character limits
- **Auto-Apply**: Seamlessly updates selected text layers

## 📋 Setup Instructions

### 1. Install in Figma

1. Open Figma Desktop
2. Go to **Plugins** → **Development** → **Create with manifest**
3. Select the folder containing these files:
   - `manifest.json`
   - `code.js` 
   - `ui.html`
4. Click **Create Plugin**

### 2. Configure API Connection

1. Run the plugin from **Plugins** → **Development** → **OVERWATCH³ Caption Generator**
2. In the "API Configuration" section:
   - **Functions URL**: Enter your Edge Function endpoint
     ```
     https://YOUR-PROJECT-ID.supabase.co/functions/v1/make-server-e346ddd7/captions-generate
     ```
   - **Bearer Token** (optional): For audit logging, enter a Supabase user access token

### 3. Generate Captions

1. **Select a text layer** in your Figma design
2. **Choose a preset** or manually enter:
   - Metric (e.g., "Adoption Rate")
   - Value (e.g., "87%") 
   - Impact Type (Human Capital, Financial, Operational, Strategic)
   - Deployment Context (Founder, Solo Operator, Enterprise, Cross-border)
   - Language (English/Spanish)
3. **Click "Generate Caption"**
4. Caption automatically applies to selected text layer

## 🎯 Quick Presets

The plugin includes pre-configured combinations for rapid generation:

- **87% Adoption Rate** (Human Capital)
- **$3.4M Revenue Lift** (Financial)  
- **42% Faster** (Operational)
- **94% Accuracy** (Strategic)

## 🔧 Configuration Options

### API Endpoint Format
```
https://YOUR-PROJECT-ID.supabase.co/functions/v1/make-server-e346ddd7/captions-generate
```

### Authentication Options
- **Public Mode**: Omit Bearer token (no audit logging)
- **Authenticated Mode**: Include Supabase user access token for audit trails

### Request Schema
```json
{
  "metric": "Adoption Rate",
  "value": "87%", 
  "impact_type": "humanCapital",
  "deployment_type": "founderContext",
  "language": "EN"
}
```

### Response Format
```json
{
  "caption": "87% Adoption Rate. Human capital, activated. Founder-led deployment, schema-driven clarity.",
  "meta": {
    "metric": "Adoption Rate",
    "value": "87%",
    "impact_type": "humanCapital", 
    "deployment_type": "founderContext",
    "language": "EN",
    "hook": "Human capital, activated",
    "context": "Founder-led deployment, schema-driven clarity"
  }
}
```

## 📊 Caption Structure

Generated captions follow the proven formula:
```
[Value] [Metric]. [Narrative Hook]. [Context Tagline].
```

**Example**: `87% Adoption Rate. Human capital, activated. Founder-led deployment, schema-driven clarity.`

## 🎨 Design Integration

### Character Limits
- **Recommended**: Under 80 characters for optimal readability
- **Warning**: Plugin notifies if caption exceeds 120 characters
- **Auto-formatting**: Centers text and optimizes font size

### Font Handling
- Automatically loads existing fonts from text layers
- Maintains original font family and weight
- Applies optimal sizing based on caption length

## 🔍 Troubleshooting

### Common Issues

**"Please configure the Functions URL first"**
- Ensure your Edge Function URL is correctly entered
- Verify the endpoint is accessible and responding

**"Generation failed: HTTP 500"**  
- Check that `captions_config` is seeded in your database
- Verify your Edge Function is deployed and running

**"Please select a text layer"**
- Select a text element in Figma before generating
- Plugin only works with text layers, not other element types

**Font loading errors**
- Plugin attempts to load fonts automatically
- If issues persist, ensure text layer uses web-safe fonts

### Debug Mode
Enable browser console in Figma to see detailed error messages:
1. **Figma Desktop**: Help → Show Developer Tools → Console
2. Look for plugin-specific console.log messages

## 🚀 Advanced Usage

### Batch Caption Generation
1. Create multiple text layers
2. Select each and generate different captions
3. Use presets for rapid iteration

### A/B Testing
- Generate multiple captions for same metric
- Test different impact types and contexts
- Compare performance across deployment contexts

### Localization Workflow  
- Generate English version first
- Switch language to Spanish
- Generate localized version for bilingual designs

## 📞 Support

For technical support or feature requests:
- Check your Edge Function logs in Supabase Dashboard
- Verify database configuration in OVERWATCH³ platform
- Review Caption API Schema component for testing

## 🔄 Updates

The plugin automatically uses the latest caption library from your database. No manual updates required when you modify hooks or contexts in the `captions_config` table.

---

**Built for OVERWATCH³** - The world's first Advisory-Grade HRIS that transforms HR from cost center to command center.