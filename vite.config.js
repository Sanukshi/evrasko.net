import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the build works in any folder (e.g. htdocs/evrasko).
  base: './',
  build: {
    // Recharts is ~530 KB minified; it is lazy-loaded with the dashboard preview,
    // so it never blocks the first render.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy-policy.html',
        terms: 'terms-of-use.html',
        product: 'product.html',
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },
});
