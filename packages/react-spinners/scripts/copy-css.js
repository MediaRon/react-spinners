#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SRC_CSS = path.join(__dirname, '../src/css/spinner.css');
const DIST_CSS = path.join(__dirname, '../dist/spinner.css');

try {
  // Ensure dist directory exists
  const distDir = path.dirname(DIST_CSS);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Copy CSS file
  fs.copyFileSync(SRC_CSS, DIST_CSS);
  console.log('✓ Copied spinner.css to dist/');
} catch (error) {
  console.error('✗ Failed to copy spinner.css:', error.message);
  process.exit(1);
}
