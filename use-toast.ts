import { toast as sonnerToast } from "sonner@2.0.3";

export interface ToastProps {
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}

export const useToast = () => {
  const toast = ({ title, description, type = 'info' }: ToastProps) => {
    const fullMessage = description ? `${title}: ${description}` : title;
    
    switch (type) {
      case 'success':
        return sonnerToast.success(fullMessage);
      case 'error':
        return sonnerToast.error(fullMessage);
      case 'warning':
        return sonnerToast.warning(fullMessage);
      default:
        return sonnerToast(fullMessage);
    }
  };

  return { toast };
};