import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for Vercel or '/repo-name/' for GitHub Pages
  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Static assets folder
    emptyOutDir: true, // Clear the dist folder on build
  },
});