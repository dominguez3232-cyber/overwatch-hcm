import { Hono } from 'npm:hono';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { cors } from 'npm:hono/cors';

const app = new Hono();

// Enable CORS
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Create sequences table if it doesn't exist
const initializeSequencesTable = async () => {
  try {
    const { error } = await supabase.rpc('create_sequences_table_if_not_exists', {});
    if (error) {
      console.log('Sequences table initialization note:', error.message);
    }
  } catch (err) {
    console.log('Sequences table setup - using existing schema');
  }
};

// Initialize on startup
initializeSequencesTable();

// Sample demo sequences for when database is unavailable
const getSampleSequences = (language: string) => [
  {
    id: 'sample-investor-demo',
    name: language === 'en' ? 'Investor Demo: ROI Command Center' : 'Demo Inversor: Centro de Comando ROI',
    created_by: 'sample-user',
    language,
    sequence: [
      'overwatch-schema/finance/revenue-analytics',
      'overwatch-schema/finance/ethical-roi',
      'overwatch-schema/finance/trust-velocity',
      'overwatch-schema/finance/burn-reduction'
    ],
    created_at: new Date().toISOString(),
    isShared: true
  },
  {
    id: 'sample-founder-onboarding',
    name: language === 'en' ? 'Founder Onboarding: Command Center Setup' : 'Incorporación Fundador: Configuración Centro Comando',
    created_by: 'sample-user',
    language,
    sequence: [
      'persona',
      'dashboard',
      'overwatch/finance',
      'overwatch-schema/finance/strategic-spend'
    ],
    created_at: new Date().toISOString(),
    isShared: true
  },
  {
    id: 'sample-tactical-coaching',
    name: language === 'en' ? 'Tactical Coaching: Crisis Response' : 'Coaching Táctico: Respuesta Crisis',
    created_by: 'sample-user',
    language,
    sequence: [
      'overwatch-schema/finance/burn-reduction',
      'overwatch-schema/finance/adoption-lift',
      'dashboard'
    ],
    created_at: new Date().toISOString(),
    isShared: true
  }
];

// Get all sequences for a user
app.get('/make-server-e346ddd7/sequences/:userId', async (c) => {
  try {
    const userId = c.req.param('userId');
    const language = c.req.query('language') || 'en';
    
    try {
      const { data, error } = await supabase
        .from('demo_sequences')
        .select('*')
        .eq('created_by', userId)
        .eq('language', language)
        .order('created_at', { ascending: false });

      if (error) {
        console.log('Error fetching sequences from database:', error);
        // Return sample data if database is unavailable
        return c.json({ sequences: getSampleSequences(language) });
      }

      // If no sequences found, return sample data
      if (!data || data.length === 0) {
        return c.json({ sequences: getSampleSequences(language) });
      }

      return c.json({ sequences: data });
    } catch (dbError) {
      console.log('Database connection failed, using sample data:', dbError);
      // Return sample data if database connection fails
      return c.json({ sequences: getSampleSequences(language) });
    }
  } catch (err) {
    console.log('Error in get sequences:', err);
    // Final fallback to sample data
    return c.json({ sequences: getSampleSequences(c.req.query('language') || 'en') });
  }
});

// Save a new sequence
app.post('/make-server-e346ddd7/sequences', async (c) => {
  try {
    const body = await c.req.json();
    const { name, created_by, language, sequence } = body;

    if (!name || !created_by || !language || !sequence) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const { data, error } = await supabase
      .from('demo_sequences')
      .insert([{
        name,
        created_by,
        language,
        sequence,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.log('Error saving sequence:', error);
      return c.json({ error: 'Failed to save sequence' }, 500);
    }

    return c.json({ sequence: data });
  } catch (err) {
    console.log('Error in save sequence:', err);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Update an existing sequence
app.put('/make-server-e346ddd7/sequences/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const body = await c.req.json();
    const { name, sequence } = body;

    if (!name || !sequence) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const { data, error } = await supabase
      .from('demo_sequences')
      .update({ name, sequence })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.log('Error updating sequence:', error);
      return c.json({ error: 'Failed to update sequence' }, 500);
    }

    return c.json({ sequence: data });
  } catch (err) {
    console.log('Error in update sequence:', err);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Delete a sequence
app.delete('/make-server-e346ddd7/sequences/:id', async (c) => {
  try {
    const id = c.req.param('id');
    
    const { error } = await supabase
      .from('demo_sequences')
      .delete()
      .eq('id', id);

    if (error) {
      console.log('Error deleting sequence:', error);
      return c.json({ error: 'Failed to delete sequence' }, 500);
    }

    return c.json({ success: true });
  } catch (err) {
    console.log('Error in delete sequence:', err);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Share a sequence (make it public or get shareable link)
app.post('/make-server-e346ddd7/sequences/:id/share', async (c) => {
  try {
    const id = c.req.param('id');
    
    // Get the sequence
    const { data: sequence, error } = await supabase
      .from('demo_sequences')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !sequence) {
      return c.json({ error: 'Sequence not found' }, 404);
    }

    // Generate a shareable link/code
    const shareCode = `${sequence.language}-${sequence.id.substring(0, 8)}`;
    
    return c.json({ 
      shareCode,
      shareUrl: `${c.req.url.split('/sequences')[0]}/sequences/shared/${shareCode}`,
      sequence: {
        name: sequence.name,
        language: sequence.language,
        sequence: sequence.sequence,
        created_at: sequence.created_at
      }
    });
  } catch (err) {
    console.log('Error in share sequence:', err);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get shared sequence by share code or direct ID
app.get('/make-server-e346ddd7/sequences/shared/:shareCode', async (c) => {
  try {
    const shareCode = c.req.param('shareCode');
    
    // Check if it's a sample sequence ID first
    const sampleSequences = [
      ...getSampleSequences('en'),
      ...getSampleSequences('es')
    ];
    
    const sampleSequence = sampleSequences.find(seq => 
      seq.id === shareCode || shareCode.includes(seq.id.split('-')[0])
    );
    
    if (sampleSequence) {
      return c.json({
        sequence: {
          name: sampleSequence.name,
          language: sampleSequence.language,
          sequence: sampleSequence.sequence,
          created_at: sampleSequence.created_at,
          isShared: true
        }
      });
    }
    
    // Try parsing as language-prefix format
    const [language, idPrefix] = shareCode.split('-');
    
    if (!language || !idPrefix) {
      return c.json({ error: 'Invalid share code format' }, 400);
    }

    try {
      const { data, error } = await supabase
        .from('demo_sequences')
        .select('*')
        .eq('language', language)
        .like('id', `${idPrefix}%`)
        .single();

      if (error || !data) {
        // Fallback to sample data if not found in database
        const fallbackSequence = getSampleSequences(language)[0];
        return c.json({
          sequence: {
            name: fallbackSequence.name,
            language: fallbackSequence.language,
            sequence: fallbackSequence.sequence,
            created_at: fallbackSequence.created_at,
            isShared: true
          }
        });
      }

      return c.json({
        sequence: {
          name: data.name,
          language: data.language,
          sequence: data.sequence,
          created_at: data.created_at,
          isShared: true
        }
      });
    } catch (dbError) {
      console.log('Database error, using sample data:', dbError);
      const fallbackSequence = getSampleSequences(language)[0];
      return c.json({
        sequence: {
          name: fallbackSequence.name,
          language: fallbackSequence.language,
          sequence: fallbackSequence.sequence,
          created_at: fallbackSequence.created_at,
          isShared: true
        }
      });
    }
  } catch (err) {
    console.log('Error in get shared sequence:', err);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get public/featured sequences
app.get('/make-server-e346ddd7/sequences/public', async (c) => {
  try {
    const category = c.req.query('category') || 'featured';
    const language = c.req.query('language') || 'en';
    
    // Return sample sequences as public/featured sequences
    const sequences = getSampleSequences(language);
    
    return c.json({ 
      sequences,
      category,
      language 
    });
  } catch (err) {
    console.log('Error in get public sequences:', err);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default app;