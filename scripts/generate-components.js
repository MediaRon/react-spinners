#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SVG_DIR = path.join(__dirname, '../src/svg');
const REACT_DIR = path.join(__dirname, '../src/react');

// Create react directory if it doesn't exist
if (!fs.existsSync(REACT_DIR)) {
  fs.mkdirSync(REACT_DIR, { recursive: true });
}

// Get all SVG files
const svgFiles = fs.readdirSync(SVG_DIR).filter(file => file.endsWith('.svg'));

console.log(`Generating React components from ${svgFiles.length} SVG file(s)...`);

svgFiles.forEach(file => {
  const inputPath = path.join(SVG_DIR, file);
  const componentName = path.basename(file, '.svg');
  const outputPath = path.join(REACT_DIR, `${componentName}.tsx`);

  try {
    // Generate the component using @svgr/cli
    execSync(
      `npx @svgr/cli --typescript --out-dir ${REACT_DIR} --filename-case pascal ${inputPath}`,
      { stdio: 'inherit' }
    );
    console.log(`✓ Generated ${componentName}.tsx`);
  } catch (error) {
    console.error(`✗ Failed to generate ${componentName}.tsx:`, error.message);
    process.exit(1);
  }
});

console.log('Component generation complete!');
