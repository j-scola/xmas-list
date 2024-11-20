import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    open: true, // Automatically open the browser
    port: 3000, // Custom port (default is 5173)
  },
  resolve: {
    alias: {
      '@': '/src', // Shortcut for importing files from src
    },
  },
});
