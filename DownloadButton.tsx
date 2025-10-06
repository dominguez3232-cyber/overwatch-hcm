import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, FileImage, FileCode, Check } from 'lucide-react';
import { Button } from './ui/button';

interface DownloadButtonProps {
  format: 'PNG' | 'SVG' | 'JPG' | 'PDF';
  badgeId?: string;
  badgeData?: any;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onDownload?: (format: string) => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  format,
  badgeId,
  badgeData,
  size = 'md',
  className = '',
  onDownload
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const getIcon = () => {
    switch (format) {
      case 'PNG':
      case 'JPG':
        return <FileImage className="w-4 h-4" />;
      case 'SVG':
        return <FileCode className="w-4 h-4" />;
      default:
        return <Download className="w-4 h-4" />;
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      if (onDownload) {
        onDownload(format);
      } else {
        // Default download logic
        await downloadBadgeImage(format, badgeId, badgeData);
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  const downloadBadgeImage = async (format: string, badgeId?: string, badgeData?: any) => {
    // Create a canvas element for generating the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size based on format
    const size = format === 'PNG' ? 400 : 300;
    canvas.width = size;
    canvas.height = size;
    
    if (ctx && badgeData) {
      // Background
      ctx.fillStyle = '#171717';
      ctx.fillRect(0, 0, size, size);
      
      // Border
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 3;
      ctx.strokeRect(15, 15, size - 30, size - 30);
      
      // Icon
      ctx.font = `${size * 0.16}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(badgeData.icon || '🏆', size / 2, size * 0.32);
      
      // Title
      ctx.font = `bold ${size * 0.05}px Arial`;
      ctx.fillStyle = '#ffffff';
      const title = badgeData.title || 'Achievement Badge';
      ctx.fillText(title, size / 2, size * 0.42);
      
      // Level
      ctx.font = `${size * 0.04}px Arial`;
      ctx.fillStyle = '#c0c0c0';
      ctx.fillText(badgeData.level || 'Gold', size / 2, size * 0.48);
      
      // Description (wrapped text)
      const description = badgeData.description || 'Excellence in achievement';
      const words = description.split(' ');
      let line = '';
      let y = size * 0.58;
      ctx.font = `${size * 0.032}px Arial`;
      ctx.fillStyle = '#888888';
      
      const maxWidth = size * 0.8;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, size / 2, y);
          line = words[n] + ' ';
          y += size * 0.045;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, size / 2, y);
      
      // Date
      ctx.font = `${size * 0.028}px Arial`;
      ctx.fillStyle = '#666666';
      const earnedDate = badgeData.earnedOn ? 
        new Date(badgeData.earnedOn).toLocaleDateString() : 
        new Date().toLocaleDateString();
      ctx.fillText(`Earned: ${earnedDate}`, size / 2, size * 0.82);
      
      // OVERWATCH³ branding
      ctx.font = `${size * 0.024}px Arial`;
      ctx.fillStyle = '#444444';
      ctx.fillText('OVERWATCH³', size / 2, size * 0.92);
    }
    
    // Convert to blob and download
    const mimeType = format === 'PNG' ? 'image/png' : 
                    format === 'JPG' ? 'image/jpeg' : 
                    'image/svg+xml';
    
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${badgeId || 'badge'}-${Date.now()}.${format.toLowerCase()}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }, mimeType, 0.9);
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        onClick={handleDownload}
        disabled={isDownloading}
        variant="outline"
        className={`flex items-center gap-2 w-full ${sizeClasses[size]} ${className}`}
      >
        {isDownloading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Download className="w-4 h-4" />
            </motion.div>
            Downloading...
          </>
        ) : (
          <>
            {getIcon()}
            Download {format}
          </>
        )}
      </Button>
    </motion.div>
  );
};

export default DownloadButton;