import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      styles: path.resolve(__dirname, './src/styles'),
      hooks: path.resolve(__dirname, './src/hooks'),
      api: path.resolve(__dirname, './src/api'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 5173,
  },
});
