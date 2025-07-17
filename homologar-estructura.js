#!/usr/bin/env node

/**
 * SCRIPT DE HOMOLOGACIÓN VIRETEC 2025
 * Migra componentes de /radical a estructura atómica
 * Siguiendo la guía artística "Geometría Futurista Profesional"
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 INICIANDO HOMOLOGACIÓN VIRETEC 2025');
console.log('📐 Aplicando estructura atómica + guía artística\n');

// Mapeo de componentes radical -> estructura atómica
const componentMapping = {
  // MOLECULES (Componentes reutilizables simples)
  'Button.tsx': 'molecules/Button.tsx',
  
  // ORGANISMS (Secciones completas)
  'Header.tsx': 'organisms/Header.tsx',
  'HeaderTesla.tsx': 'organisms/HeaderAlternate.tsx',
  'HeaderTeslaVerde.tsx': 'organisms/HeaderBrand.tsx',
  'Hero.tsx': 'organisms/Hero.tsx',
  'HeroFinal.tsx': 'organisms/HeroFinal.tsx',
  'HeroOptimizado.tsx': 'organisms/HeroOptimized.tsx',
  'HeroTesla.tsx': 'organisms/HeroTesla.tsx',
  'HeroTeslaVerde.tsx': 'organisms/HeroBrand.tsx',
  'HeroFuturisticHaven.tsx': 'organisms/HeroFuturistic.tsx',
  'HeroHomely.tsx': 'organisms/HeroWarm.tsx',
  'Ecosistema.tsx': 'organisms/Ecosystem.tsx',
  'EcosistemaRefinado.tsx': 'organisms/EcosystemRefined.tsx',
  
  // TEMPLATES (Layouts de página)
  // (Los Hero principales pueden ir aquí si son templates completos)
};

// Función para migrar un componente
function migrateComponent(fileName, targetPath) {
  const sourcePath = `app/components/radical/${fileName}`;
  const destPath = `app/components/${targetPath}`;
  
  console.log(`📦 Migrando: ${fileName} -> ${targetPath}`);
  
  try {
    // Crear directorio si no existe
    const destDir = path.dirname(destPath);
    fs.mkdirSync(destDir, { recursive: true });
    
    // Leer contenido original
    const content = fs.readFileSync(sourcePath, 'utf8');
    
    // Aplicar transformaciones para homologar al estilo
    const transformedContent = applyStyleTransformations(content, fileName);
    
    // Escribir archivo migrado
    fs.writeFileSync(destPath, transformedContent);
    
    console.log(`✅ Migrado exitosamente: ${targetPath}`);
    
  } catch (error) {
    console.error(`❌ Error migrando ${fileName}:`, error.message);
  }
}

// Función para aplicar transformaciones de estilo
function applyStyleTransformations(content, fileName) {
  let transformed = content;
  
  // 1. Asegurar imports de ComponentesBase
  if (!transformed.includes('@/app/components/ui/ComponentesBase')) {
    const importLine = "import { Button, Heading, Text, Card, Metric, Section } from '@/app/components/ui/ComponentesBase'\n";
    
    // Insertar después de las importaciones de React
    transformed = transformed.replace(
      /(import React.*\n)/,
      `$1${importLine}`
    );
  }
  
  // 2. Asegurar border-radius: 0 en todos los elementos con clases
  transformed = transformed.replace(
    /className="([^"]*?)"/g,
    (match, classes) => {
      // Si no tiene ya 'geometric', añadirlo
      if (!classes.includes('geometric') && 
          (classes.includes('btn') || 
           classes.includes('card') || 
           classes.includes('border') ||
           classes.includes('bg-'))) {
        return `className="${classes} geometric"`;
      }
      return match;
    }
  );
  
  // 3. Actualizar colores según la paleta definida
  const colorMappings = {
    // Azules antiguos -> Azul Viretec
    'blue-500': 'blue-viretec',
    'blue-400': 'blue-brillante', 
    'blue-600': 'blue-oceano',
    
    // Backgrounds
    'bg-gray-900': 'bg-negro-absoluto',
    'bg-gray-800': 'bg-gris-carbon',
    'bg-black': 'bg-negro-absoluto',
    
    // Textos
    'text-gray-300': 'text-blanco-perla',
    'text-gray-400': 'text-gris-platino',
    'text-gray-500': 'text-gris-suave'
  };
  
  Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
    const regex = new RegExp(oldColor, 'g');
    transformed = transformed.replace(regex, newColor);
  });
  
  // 4. Añadir comentario de migración
  const migrationComment = `
// =====================================================================
// COMPONENTE HOMOLOGADO - VIRETEC 2025
// Migrado desde /radical siguiendo "Geometría Futurista Profesional"
// ✅ Border-radius: 0 | ✅ Paleta unificada | ✅ ComponentesBase
// =====================================================================

`;
  
  transformed = migrationComment + transformed;
  
  return transformed;
}

// Función principal
async function main() {
  try {
    console.log('🔍 Analizando carpeta radical...\n');
    
    const radicalDir = 'app/components/radical';
    const files = fs.readdirSync(radicalDir);
    
    console.log(`📁 Encontrados ${files.length} componentes en radical:`);
    files.forEach(file => console.log(`   - ${file}`));
    console.log('');
    
    // Migrar cada componente
    for (const file of files) {
      if (componentMapping[file]) {
        migrateComponent(file, componentMapping[file]);
      } else {
        console.log(`⚠️  ${file} no tiene mapeo definido, saltando...`);
      }
    }
    
    console.log('\n🎉 HOMOLOGACIÓN COMPLETADA');
    console.log('\n📋 PRÓXIMOS PASOS:');
    console.log('1. Revisar componentes migrados en estructura atómica');
    console.log('2. Actualizar imports en page.tsx');
    console.log('3. Eliminar carpeta radical una vez verificado');
    console.log('4. Actualizar componentes restantes (SegmentedSolutions, etc.)');
    
  } catch (error) {
    console.error('❌ Error en el proceso:', error.message);
  }
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  main();
}

module.exports = { migrateComponent, applyStyleTransformations };
