import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',             // Tells Vite your project starts in the root
  build: {
    outDir: 'dist'
  }
});
