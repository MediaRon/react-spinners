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
const imports = componentFiles
  .map(name => `import Raw${name} from './react/${name}';`)
  .join('\n');

const exportsWrapped = componentFiles
  .map(name => `export const ${name} = withSpinnerControls(Raw${name});`)
  .join('\n');

const fileContents = `
/**
 * AUTO-GENERATED FILE
 * Do not edit manually.
 */

import { withSpinnerControls } from './core/withSpinnerControls';

${imports}

${exportsWrapped}
`;

// Write to index.ts
fs.writeFileSync(INDEX_PATH, fileContents.trim() + '\n', 'utf-8');

console.log('✓ Generated src/index.ts');
console.log(`Exported components: ${componentFiles.join(', ')}`);
