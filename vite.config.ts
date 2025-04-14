import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // This ensures CSS files are properly placed
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]?v=[hash]' // Adds hash-based versioning
      }
    },
  }
})