import { useState, useCallback } from 'react';
import { projectId, publicAnonKey } from './supabase/info';

export interface DemoSequence {
  id?: string;
  name: string;
  created_by: string;
  language: 'en' | 'es';
  sequence: string[];
  created_at: string;
  isShared?: boolean;
}

export interface SequenceManagerHook {
  sequences: DemoSequence[];
  isLoading: boolean;
  error: string | null;
  saveSequence: (name: string, sequence: string[], userId: string, language: 'en' | 'es') => Promise<DemoSequence | null>;
  loadSequences: (userId: string, language: 'en' | 'es') => Promise<void>;
  updateSequence: (id: string, name: string, sequence: string[]) => Promise<DemoSequence | null>;
  deleteSequence: (id: string) => Promise<boolean>;
  shareSequence: (id: string) => Promise<{ shareCode: string; shareUrl: string } | null>;
  loadSharedSequence: (shareCode: string) => Promise<DemoSequence | null>;
  loadPublicSequences: (category: string, language: 'en' | 'es') => Promise<DemoSequence[]>;
  clearError: () => void;
}

export const useSequenceManager = (): SequenceManagerHook => {
  const [sequences, setSequences] = useState<DemoSequence[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-e346ddd7`;

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const handleApiCall = useCallback(async (
    apiCall: () => Promise<Response>
  ): Promise<any> => {
    try {
      setError(null);
      const response = await apiCall();
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error' }));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      console.error('API call failed:', err);
      
      // For network errors or server unavailable, provide fallback
      if (errorMessage.includes('fetch') || errorMessage.includes('Network') || errorMessage.includes('500')) {
        console.log('Server unavailable, using fallback data');
        setError('Server temporarily unavailable - using sample data');
        return { sequences: [] }; // Return empty but valid structure
      }
      
      setError(errorMessage);
      return null;
    }
  }, []);

  const saveSequence = useCallback(async (
    name: string,
    sequence: string[],
    userId: string,
    language: 'en' | 'es'
  ): Promise<DemoSequence | null> => {
    setIsLoading(true);
    
    const result = await handleApiCall(() =>
      fetch(`${baseUrl}/sequences`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          name,
          created_by: userId,
          language,
          sequence,
        }),
      })
    );
    
    setIsLoading(false);
    
    if (result?.sequence) {
      setSequences(prev => [result.sequence, ...prev]);
      return result.sequence;
    }
    
    return null;
  }, [baseUrl, handleApiCall]);

  const loadSequences = useCallback(async (
    userId: string,
    language: 'en' | 'es'
  ): Promise<void> => {
    setIsLoading(true);
    
    const result = await handleApiCall(() =>
      fetch(`${baseUrl}/sequences/${userId}?language=${language}`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      })
    );
    
    setIsLoading(false);
    
    if (result?.sequences) {
      setSequences(result.sequences);
    }
  }, [baseUrl, handleApiCall]);

  const updateSequence = useCallback(async (
    id: string,
    name: string,
    sequence: string[]
  ): Promise<DemoSequence | null> => {
    setIsLoading(true);
    
    const result = await handleApiCall(() =>
      fetch(`${baseUrl}/sequences/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          name,
          sequence,
        }),
      })
    );
    
    setIsLoading(false);
    
    if (result?.sequence) {
      setSequences(prev => 
        prev.map(seq => seq.id === id ? result.sequence : seq)
      );
      return result.sequence;
    }
    
    return null;
  }, [baseUrl, handleApiCall]);

  const deleteSequence = useCallback(async (id: string): Promise<boolean> => {
    setIsLoading(true);
    
    const result = await handleApiCall(() =>
      fetch(`${baseUrl}/sequences/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      })
    );
    
    setIsLoading(false);
    
    if (result?.success) {
      setSequences(prev => prev.filter(seq => seq.id !== id));
      return true;
    }
    
    return false;
  }, [baseUrl, handleApiCall]);

  const shareSequence = useCallback(async (
    id: string
  ): Promise<{ shareCode: string; shareUrl: string } | null> => {
    const result = await handleApiCall(() =>
      fetch(`${baseUrl}/sequences/${id}/share`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      })
    );
    
    return result ? { shareCode: result.shareCode, shareUrl: result.shareUrl } : null;
  }, [baseUrl, handleApiCall]);

  const loadSharedSequence = useCallback(async (
    shareCode: string
  ): Promise<DemoSequence | null> => {
    setIsLoading(true);
    
    const result = await handleApiCall(() =>
      fetch(`${baseUrl}/sequences/shared/${shareCode}`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      })
    );
    
    setIsLoading(false);
    
    return result?.sequence || null;
  }, [baseUrl, handleApiCall]);

  const loadPublicSequences = useCallback(async (
    category: string,
    language: 'en' | 'es'
  ): Promise<DemoSequence[]> => {
    setIsLoading(true);
    
    const result = await handleApiCall(() =>
      fetch(`${baseUrl}/sequences/public?category=${category}&language=${language}`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      })
    );
    
    setIsLoading(false);
    
    return result?.sequences || [];
  }, [baseUrl, handleApiCall]);

  return {
    sequences,
    isLoading,
    error,
    saveSequence,
    loadSequences,
    updateSequence,
    deleteSequence,
    shareSequence,
    loadSharedSequence,
    loadPublicSequences,
    clearError,
  };
};