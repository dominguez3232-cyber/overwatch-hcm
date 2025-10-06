import { projectId, publicAnonKey } from './supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-e346ddd7`;

interface ModuleData {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  estimatedTime: string;
  steps: Array<{
    id: string;
    trace: string;
    caption: string;
  }>;
}

interface LearnerProfile {
  id: string;
  name: string;
  email?: string;
  preferredLanguage: 'en' | 'es';
  completedModules: string[];
  metrics: {
    totalModulesCompleted: number;
    averageScore: number;
    totalLearningTime: number;
  };
}

interface CompletedOverlay {
  id: string;
  moduleId: string;
  learnerId: string;
  schemaTrace: string;
  completionTime: number;
  score: number;
  feedback?: string;
}

interface CertificateData {
  learnerName: string;
  moduleTitle: string;
  moduleCaption: {
    en: string;
    es: string;
  };
  schemaTrace: string;
  metrics: {
    clarityIndex: string;
    confidenceLift: string;
    executionSpeed: string;
  };
  completionDate: string;
  language: 'en' | 'es';
  certificateId: string;
}

class CertificateService {
  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  }

  // Module completion and certificate generation
  async completeModule(
    moduleId: string, 
    learnerId: string, 
    overlays?: CompletedOverlay[], 
    completionData?: any
  ): Promise<{ success: boolean; certificate: CertificateData; message: string }> {
    console.log(`Completing module ${moduleId} for learner ${learnerId}`);
    
    return this.makeRequest(`/modules/${moduleId}/complete`, {
      method: 'POST',
      body: JSON.stringify({
        learnerId,
        overlays,
        completionData,
      }),
    });
  }

  // Direct certificate generation
  async generateCertificate(moduleId: string, learnerId: string): Promise<{ success: boolean; certificate: CertificateData }> {
    console.log(`Generating certificate for ${learnerId}:${moduleId}`);
    
    return this.makeRequest('/certificates/generate', {
      method: 'POST',
      body: JSON.stringify({
        moduleId,
        learnerId,
      }),
    });
  }

  // Get certificate by ID
  async getCertificate(certificateId: string): Promise<{ certificate: CertificateData }> {
    return this.makeRequest(`/certificates/${certificateId}`);
  }

  // Get learner certificates
  async getLearnerCertificates(learnerId: string): Promise<{ certificates: CertificateData[] }> {
    return this.makeRequest(`/learners/${learnerId}/certificates`);
  }

  // Learner management
  async createOrUpdateLearner(learnerData: Partial<LearnerProfile>): Promise<{ success: boolean; learner: LearnerProfile }> {
    return this.makeRequest('/learners', {
      method: 'POST',
      body: JSON.stringify(learnerData),
    });
  }

  async getLearner(learnerId: string): Promise<{ learner: LearnerProfile }> {
    return this.makeRequest(`/learners/${learnerId}`);
  }

  // Module management
  async createOrUpdateModule(moduleData: Partial<ModuleData>): Promise<{ success: boolean; module: ModuleData }> {
    return this.makeRequest('/modules', {
      method: 'POST',
      body: JSON.stringify(moduleData),
    });
  }

  async getModule(moduleId: string): Promise<{ module: ModuleData }> {
    return this.makeRequest(`/modules/${moduleId}`);
  }

  // Convenience method for the onModuleComplete flow
  async onModuleComplete(moduleId: string, learnerId: string, overlays?: CompletedOverlay[]): Promise<CertificateData> {
    try {
      const result = await this.completeModule(moduleId, learnerId, overlays);
      console.log('Module completed successfully:', result);
      return result.certificate;
    } catch (error) {
      console.error('Error completing module:', error);
      throw error;
    }
  }

  // Seed demo data for testing
  async seedDemoData(): Promise<void> {
    try {
      // Create demo learner
      const demoLearner = {
        id: 'demo-learner-luis',
        name: 'Luis Dominguez',
        email: 'luis@example.com',
        preferredLanguage: 'en' as const,
        completedModules: [],
        metrics: {
          totalModulesCompleted: 0,
          averageScore: 0,
          totalLearningTime: 0,
        },
      };

      await this.createOrUpdateLearner(demoLearner);

      // Create demo module
      const demoModule = {
        id: 'demo-module-founder-clarity',
        title: 'Founder Clarity Sprint',
        description: 'Strategic clarity framework for founder-led decision making and capital velocity optimization',
        category: 'Foundation',
        difficulty: 'intermediate',
        estimatedTime: '45min',
        steps: [
          {
            id: 'step-1',
            trace: 'finance.trust-velocity',
            caption: 'Trust moves faster than capital.',
          },
          {
            id: 'step-2',
            trace: 'law.assumed-right',
            caption: 'Legal frameworks shape business velocity.',
          },
          {
            id: 'step-3',
            trace: 'time.velocity-modeling',
            caption: 'Time optimization through strategic modeling.',
          },
        ],
      };

      await this.createOrUpdateModule(demoModule);

      console.log('Demo data seeded successfully');
    } catch (error) {
      console.error('Error seeding demo data:', error);
      throw error;
    }
  }
}

// Create and export a singleton instance
export const certificateService = new CertificateService();

// Export types for use in components
export type {
  ModuleData,
  LearnerProfile,
  CompletedOverlay,
  CertificateData,
};