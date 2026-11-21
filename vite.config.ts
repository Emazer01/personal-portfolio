import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Target deployment: https://Emazer01.github.io/ (user site root)
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  }
});
