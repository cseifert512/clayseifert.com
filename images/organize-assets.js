#!/usr/bin/env node
/**
 * Image Organization Script for Dual-Mode Portfolio
 * 
 * This script organizes images from HIRANO/ and PORTFOLIO/ folders
 * into the appropriate public/visuals/ structure for the dual-mode site.
 */

const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✓ Created directory: ${dirPath}`);
  }
}

// Copy file
function copyFile(src, dest) {
  try {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied: ${path.basename(src)} → ${dest}`);
    return true;
  } catch (err) {
    console.error(`✗ Error copying ${src}: ${err.message}`);
    return false;
  }
}

// Main organization logic
function organizeImages() {
  const baseDir = path.join(__dirname, '..');
  const imagesDir = path.join(baseDir, 'images');
  const publicDir = path.join(baseDir, 'public', 'visuals');

  console.log('\n🎨 Starting Image Organization...\n');

  // Ensure public/visuals structure exists
  const directories = [
    'hero',
    'philosophy', 
    'domains',
    'work',
    'og'
  ];

  directories.forEach(dir => {
    ensureDir(path.join(publicDir, dir));
  });

  // HIRANO images - Conceptual/Artistic for Living mode
  console.log('\n📁 Processing HIRANO images (conceptual/organic)...');
  
  const hiranoImages = {
    // Hero backgrounds - organic/living themes
    'undefined_robots_as_plants,_cy.jpeg': 'hero/living-organic-1.jpeg',
    'undefined_photograph_of_futuri.webp': 'hero/systems-tech-1.webp',
    'UNDERGROUND-min.jpeg': 'hero/living-organic-2.jpeg',
    
    // Philosophy section - material studies and concepts
    'seedream-3_pablo_picasso_painti.jpeg': 'philosophy/living-artistic.jpeg',
    'undefined_human_brain_merged_w.jpeg': 'philosophy/living-intelligence.jpeg',
    
    // Domain visuals - human-robot synthesis
    'flux-1-kontext-dev_human_and_robot_sitt (1).png': 'domains/living-systems-organic.png',
    'gemini-2.0-flash-preview-image-generation_human_and_robot_sitt.png': 'domains/distributed-organic.png',
    'imagen-4.0-ultra-generate-preview-06-06_robot_treating_human.png': 'domains/material-intel-organic.png',
  };

  Object.entries(hiranoImages).forEach(([src, dest]) => {
    const srcPath = path.join(imagesDir, 'HIRANO', src);
    const destPath = path.join(publicDir, dest);
    if (fs.existsSync(srcPath)) {
      copyFile(srcPath, destPath);
    }
  });

  // PORTFOLIO images - Architectural work for UT Austin and projects
  console.log('\n📁 Processing PORTFOLIO images (architectural work)...');
  
  // Sample a few representative images for different sections
  const portfolioImages = {
    // UT Austin thesis work - both technical and organic views
    'img15.jpg': 'work/ut-austin-tech-1.jpg',
    'img27.jpg': 'work/ut-austin-organic-1.jpg',
    'img31.jpg': 'work/ut-austin-tech-2.jpg',
    'img32.jpg': 'work/ut-austin-organic-2.jpg',
    
    // Research publications - computational/parametric
    'img65.jpg': 'work/research-tech-1.jpg',
    'img66.jpg': 'work/research-tech-2.jpg',
    'img67.jpg': 'work/research-organic-1.jpg',
    
    // Domain examples - computational design
    'img81.jpg': 'domains/computational-tech-1.jpg',
    'img82.jpg': 'domains/computational-organic-1.jpg',
    
    // Philosophy section - architectural concepts
    'img107.jpg': 'philosophy/systems-parametric-1.jpg',
    'img111.jpg': 'philosophy/living-spatial-1.jpg',
    
    // Additional project work for gallery
    'img125.jpg': 'work/gallery-1.jpg',
    'img126.jpg': 'work/gallery-2.jpg',
    'img127.jpg': 'work/gallery-3.jpg',
    'img146.jpg': 'work/gallery-4.jpg',
    'img148.jpg': 'work/gallery-5.jpg',
    'img150.jpg': 'work/gallery-6.jpg',
  };

  Object.entries(portfolioImages).forEach(([src, dest]) => {
    const srcPath = path.join(imagesDir, 'PORTFOLIO', src);
    const destPath = path.join(publicDir, dest);
    if (fs.existsSync(srcPath)) {
      copyFile(srcPath, destPath);
    }
  });

  // Generate image mapping reference file
  console.log('\n📝 Generating image mapping reference...');
  
  const mapping = {
    generated_at: new Date().toISOString(),
    description: 'Image mapping for dual-mode portfolio',
    sections: {
      hero: {
        systems: ['hero/systems-tech-1.webp'],
        living: ['hero/living-organic-1.jpeg', 'hero/living-organic-2.jpeg']
      },
      philosophy: {
        systems: ['philosophy/systems-parametric-1.jpg'],
        living: ['philosophy/living-artistic.jpeg', 'philosophy/living-intelligence.jpeg', 'philosophy/living-spatial-1.jpg']
      },
      domains: {
        'living-systems': {
          systems: 'domains/computational-tech-1.jpg',
          living: 'domains/living-systems-organic.png'
        },
        'distributed-production': {
          living: 'domains/distributed-organic.png'
        },
        'material-intelligence': {
          living: 'domains/material-intel-organic.png'
        },
        'computational-design': {
          systems: 'domains/computational-tech-1.jpg',
          living: 'domains/computational-organic-1.jpg'
        }
      },
      work: {
        'ut-austin': {
          systems: ['work/ut-austin-tech-1.jpg', 'work/ut-austin-tech-2.jpg'],
          living: ['work/ut-austin-organic-1.jpg', 'work/ut-austin-organic-2.jpg']
        },
        'research': {
          systems: ['work/research-tech-1.jpg', 'work/research-tech-2.jpg'],
          living: ['work/research-organic-1.jpg']
        },
        gallery: [
          'work/gallery-1.jpg',
          'work/gallery-2.jpg', 
          'work/gallery-3.jpg',
          'work/gallery-4.jpg',
          'work/gallery-5.jpg',
          'work/gallery-6.jpg'
        ]
      }
    },
    remaining_images: {
      hirano: fs.readdirSync(path.join(imagesDir, 'HIRANO')).filter(f => !f.includes('.')).length === 0 
        ? fs.readdirSync(path.join(imagesDir, 'HIRANO')).filter(f => f.includes('.'))
        : [],
      portfolio: fs.readdirSync(path.join(imagesDir, 'PORTFOLIO')).filter(f => f.includes('.'))
    }
  };

  fs.writeFileSync(
    path.join(imagesDir, 'image-mapping.json'),
    JSON.stringify(mapping, null, 2)
  );
  
  console.log('✓ Created image-mapping.json');

  console.log('\n✅ Image organization complete!\n');
  console.log('📋 Summary:');
  console.log(`   • HIRANO images processed: ${Object.keys(hiranoImages).length}`);
  console.log(`   • PORTFOLIO images processed: ${Object.keys(portfolioImages).length}`);
  console.log(`   • Check image-mapping.json for full details`);
  console.log(`   • Remaining images can be used as needed\n`);
}

// Run the script
try {
  organizeImages();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

