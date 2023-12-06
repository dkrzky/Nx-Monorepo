// deka-app/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

export default defineConfig({
  cacheDir: '../node_modules/.vite/deka-app',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths ],
  // },
  resolve: {
    alias: {
      'deka-lib': path.resolve(__dirname, '../../libs/deka-lib/src'),
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
