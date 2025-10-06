// OVERWATCH³ Caption Generator - Figma Plugin
// Generates cinematic taglines using live Edge Function API

// Show the UI
figma.showUI(__html__, { width: 400, height: 600 });

// Track current selection
let currentSelection = null;

// Handle selection changes
figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection;
  currentSelection = selection.length > 0 ? selection[0] : null;
  
  // Send selection info to UI
  figma.ui.postMessage({
    type: 'selection-changed',
    hasTextSelected: currentSelection && currentSelection.type === 'TEXT',
    selectedType: currentSelection ? currentSelection.type : null
  });
});

// Handle messages from UI
figma.ui.onmessage = async (msg) => {
  try {
    switch (msg.type) {
      case 'caption-generated':
        await handleCaptionGenerated(msg.caption, msg.meta);
        break;
        
      case 'apply-caption':
        await applyCaptionToSelection(msg.caption);
        break;
        
      case 'close-plugin':
        figma.closePlugin();
        break;
        
      default:
        console.log('Unknown message type:', msg.type);
    }
  } catch (error) {
    console.error('Error handling message:', error);
    figma.notify(`Error: ${error.message}`, { error: true });
  }
};

async function handleCaptionGenerated(caption, meta) {
  // Log generation for debugging
  console.log('Caption generated:', caption, meta);
  
  // Auto-apply if text is selected
  if (currentSelection && currentSelection.type === 'TEXT') {
    await applyCaptionToSelection(caption);
  } else {
    figma.notify('Caption generated! Select a text layer to apply it.');
  }
}

async function applyCaptionToSelection(caption) {
  if (!currentSelection) {
    figma.notify('Please select a layer first', { error: true });
    return;
  }
  
  if (currentSelection.type !== 'TEXT') {
    figma.notify('Please select a text layer', { error: true });
    return;
  }
  
  try {
    const textNode = currentSelection;
    
    // Load the font
    await figma.loadFontAsync(textNode.fontName);
    
    // Apply the caption
    textNode.characters = caption;
    
    // Enforce character limits and provide feedback
    if (caption.length > 120) {
      figma.notify('⚠️ Caption exceeds 120 characters. Consider shortening for better readability.', { 
        timeout: 4000 
      });
    }
    
    // Success notification with OVERWATCH³ styling
    figma.notify('✅ Caption applied successfully!', { 
      timeout: 2000 
    });
    
    // Auto-zoom to the updated text
    figma.viewport.scrollAndZoomIntoView([textNode]);
    
  } catch (error) {
    console.error('Error applying caption:', error);
    figma.notify(`Failed to apply caption: ${error.message}`, { error: true });
  }
}

// Plugin lifecycle
function initializePlugin() {
  // Send initial selection state
  const selection = figma.currentPage.selection;
  currentSelection = selection.length > 0 ? selection[0] : null;
  
  figma.ui.postMessage({
    type: 'plugin-ready',
    hasTextSelected: currentSelection && currentSelection.type === 'TEXT',
    selectedType: currentSelection ? currentSelection.type : null
  });
}

// Utility functions
function validateTextNode(node) {
  if (!node) return { valid: false, error: 'No node selected' };
  if (node.type !== 'TEXT') return { valid: false, error: 'Selected node is not text' };
  return { valid: true };
}

function getOptimalFontSize(caption, maxWidth = 300) {
  // Simple heuristic for font sizing based on caption length
  if (caption.length < 30) return 24;
  if (caption.length < 60) return 20;
  if (caption.length < 90) return 18;
  return 16;
}

// Enhanced text formatting for OVERWATCH³ style
async function enhanceTextFormatting(textNode, caption) {
  try {
    // Apply OVERWATCH³ brand styling
    const optimalSize = getOptimalFontSize(caption);
    
    // Set text properties
    textNode.characters = caption;
    
    // Apply styling if possible (basic fallback)
    if (textNode.fontName && textNode.fontName.family) {
      await figma.loadFontAsync(textNode.fontName);
    }
    
    // Set text alignment for better presentation
    textNode.textAlignHorizontal = 'CENTER';
    
    return true;
  } catch (error) {
    console.error('Error enhancing text formatting:', error);
    return false;
  }
}

// Initialize the plugin
initializePlugin();

// Export functions for potential expansion
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    applyCaptionToSelection,
    validateTextNode,
    getOptimalFontSize,
    enhanceTextFormatting
  };
}