import { execSync } from 'child_process';
import path from 'path';

try {
  // Log the current directory and its contents
  console.log('Current directory:', process.cwd());
  console.log('Directory contents:', execSync('ls -la').toString());

  // Log Node and npm versions
  console.log('Node version:', process.version);
  console.log('NPM version:', execSync('npm -v').toString());

  // Run TypeScript compilation
  console.log('Running TypeScript compilation...');
  execSync('npx tsc', { stdio: 'inherit' });

  // Run Vite build
  console.log('Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });

  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
