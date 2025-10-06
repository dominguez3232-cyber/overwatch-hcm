// Database seeding script for OVERWATCH³ Caption API configuration
// Run this to populate the app_config table with caption library data

import { createClient } from '@supabase/supabase-js';

// Caption library configuration that matches your Edge Function expectations
const captionConfig = {
  hooks: {
    humanCapital: {
      EN: [
        "Human capital, activated",
        "Adoption that sticks", 
        "Culture amplified",
        "Teams aligned, engaged",
        "Workforce velocity",
        "Talent optimized",
        "Engagement accelerated",
        "People strategy realized"
      ],
      ES: [
        "Capital humano, activado",
        "Adopción que permanece",
        "Cultura amplificada", 
        "Equipos alineados, comprometidos",
        "Velocidad de la fuerza laboral",
        "Talento optimizado",
        "Compromiso acelerado",
        "Estrategia de personas realizada"
      ]
    },
    financial: {
      EN: [
        "ROI proven, not promised",
        "Efficiency that compounds",
        "Capital optimized",
        "Value acceleration", 
        "Proof before promise",
        "Revenue lift realized",
        "Cost savings validated",
        "Investment returns amplified"
      ],
      ES: [
        "ROI comprobado, no prometido",
        "Eficiencia que se compone",
        "Capital optimizado",
        "Aceleración de valor",
        "Prueba antes de promesa", 
        "Aumento de ingresos realizado",
        "Ahorros de costos validados",
        "Retornos de inversión amplificados"
      ]
    },
    operational: {
      EN: [
        "Precision, not guesswork",
        "Schema-driven velocity",
        "Process excellence",
        "Operational clarity",
        "Execution optimized",
        "Workflow streamlined",
        "Efficiency multiplied",
        "Operations elevated"
      ],
      ES: [
        "Precisión, no conjeturas", 
        "Velocidad impulsada por esquemas",
        "Excelencia de procesos",
        "Claridad operacional",
        "Ejecución optimizada",
        "Flujo de trabajo optimizado",
        "Eficiencia multiplicada", 
        "Operaciones elevadas"
      ]
    },
    strategic: {
      EN: [
        "Built for solo-operators",
        "Founder-led, schema-driven", 
        "Strategic advantage",
        "Command center activated",
        "Intelligence amplified",
        "Vision executed",
        "Strategy realized",
        "Competitive edge secured"
      ],
      ES: [
        "Construido para operadores-solo",
        "Liderado por fundadores, impulsado por esquemas",
        "Ventaja estratégica",
        "Centro de comando activado",
        "Inteligencia amplificada",
        "Visión ejecutada",
        "Estrategia realizada", 
        "Ventaja competitiva asegurada"
      ]
    },
    default: {
      EN: [
        "Impact, realized",
        "Excellence delivered",
        "Results proven",
        "Value created",
        "Success amplified"
      ],
      ES: [
        "Impacto, realizado",
        "Excelencia entregada", 
        "Resultados probados",
        "Valor creado",
        "Éxito amplificado"
      ]
    }
  },
  contexts: {
    founderContext: {
      EN: [
        "Founder-led deployment, schema-driven clarity",
        "Built for founders, ready for scale",
        "Command center for founder-led companies",
        "Strategic execution at founder velocity",
        "Founder vision, enterprise execution"
      ],
      ES: [
        "Despliegue liderado por fundador, claridad impulsada por esquemas",
        "Construido para fundadores, listo para escala", 
        "Centro de comando para empresas lideradas por fundadores",
        "Ejecución estratégica a velocidad de fundador",
        "Visión de fundador, ejecución empresarial"
      ]
    },
    solooperatorContext: {
      EN: [
        "Built for solo-operators, ready for scale",
        "One-person powerhouse, enterprise capability", 
        "Solo execution, team-scale results",
        "Individual excellence, collective impact",
        "Solo operator, unlimited potential"
      ],
      ES: [
        "Construido para operadores-solo, listo para escala",
        "Potencia de una persona, capacidad empresarial",
        "Ejecución solo, resultados a escala de equipo",
        "Excelencia individual, impacto colectivo",
        "Operador solo, potencial ilimitado"
      ]
    },
    enterpriseContext: {
      EN: [
        "Enterprise-grade execution, startup velocity",
        "Scale without complexity",
        "Enterprise power, startup agility",
        "Corporate capability, entrepreneurial speed",
        "Enterprise excellence, simplified"
      ],
      ES: [
        "Ejecución grado empresarial, velocidad startup",
        "Escala sin complejidad",
        "Poder empresarial, agilidad startup", 
        "Capacidad corporativa, velocidad emprendedora",
        "Excelencia empresarial, simplificada"
      ]
    },
    crossborderContext: {
      EN: [
        "Bilingual execution at enterprise scale",
        "Cross-border operations, unified command",
        "Global reach, local execution",
        "International scale, cultural intelligence",
        "Cross-border excellence, seamless execution"
      ],
      ES: [
        "Ejecución bilingüe a escala empresarial",
        "Operaciones transfronterizas, comando unificado",
        "Alcance global, ejecución local",
        "Escala internacional, inteligencia cultural", 
        "Excelencia transfronteriza, ejecución sin problemas"
      ]
    },
    default: {
      EN: [
        "Operational clarity at scale",
        "Excellence delivered",
        "Strategic execution realized",
        "Performance optimized",
        "Results amplified"
      ],
      ES: [
        "Claridad operacional a escala",
        "Excelencia entregada",
        "Ejecución estratégica realizada",
        "Rendimiento optimizado",
        "Resultados amplificados"
      ]
    }
  }
};

// Seed function
async function seedCaptionConfig() {
  // Get Supabase credentials from environment or replace with your values
  const supabaseUrl = process.env.SUPABASE_URL || 'your-supabase-url';
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key';
  
  if (!supabaseUrl || !supabaseServiceKey || supabaseUrl === 'your-supabase-url') {
    console.error('❌ Please provide SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables');
    console.log('\nUsage:');
    console.log('SUPABASE_URL=your-url SUPABASE_SERVICE_ROLE_KEY=your-key node seed-caption-config.js');
    return;
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    console.log('🌱 Seeding caption configuration...');

    // Insert or update the caption configuration
    const { data, error } = await supabase
      .from('app_config')
      .upsert({
        key: 'captions_config',
        value: captionConfig,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'key'
      });

    if (error) {
      throw error;
    }

    console.log('✅ Caption configuration seeded successfully');
    console.log('📊 Configuration includes:');
    console.log(`   • ${Object.keys(captionConfig.hooks).length} hook categories`);
    console.log(`   • ${Object.keys(captionConfig.contexts).length} context categories`);
    console.log('   • Bilingual support (EN/ES)');
    console.log('\n🚀 Your Edge Function is now ready to generate captions!');
    
    // Test the configuration by generating a sample caption
    console.log('\n🧪 Testing configuration...');
    const testResponse = await fetch(`${supabaseUrl}/functions/v1/make-server-e346ddd7/captions-generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY || 'your-anon-key'}`
      },
      body: JSON.stringify({
        metric: 'Adoption Rate',
        value: '87%',
        impact_type: 'humanCapital',
        deployment_type: 'founderContext',
        language: 'EN'
      })
    });

    if (testResponse.ok) {
      const testResult = await testResponse.json();
      console.log('✅ Test caption generated:');
      console.log(`   "${testResult.caption}"`);
    } else {
      console.log('⚠️  Edge Function test failed, but configuration was seeded');
    }

  } catch (error) {
    console.error('❌ Error seeding configuration:', error.message);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedCaptionConfig();
}

export { seedCaptionConfig, captionConfig };