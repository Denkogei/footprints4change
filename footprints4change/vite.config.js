import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is correct for direct deployment
  build: {
    outDir: 'dist', // Vite outputs built files here
    emptyOutDir: true, // Clears old files before building
  },
  
});
