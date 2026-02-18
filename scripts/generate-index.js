#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REACT_DIR = path.join(__dirname, '../src/react');
const INDEX_PATH = path.join(__dirname, '../src/index.ts');

// Get all .tsx files from the react directory
const componentFiles = fs.readdirSync(REACT_DIR)
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.basename(file, '.tsx'))
  .sort();

console.log(`Generating index.ts with ${componentFiles.length} component(s)...`);

// Generate export statements
const exportStatements = componentFiles
  .map(name => `export { default as ${name} } from './react/${name}';`)
  .join('\n');

// Write to index.ts
fs.writeFileSync(INDEX_PATH, exportStatements + '\n', 'utf-8');

console.log('✓ Generated src/index.ts');
console.log(`Exported components: ${componentFiles.join(', ')}`);
