import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  // Specifichiamo che i file sono nella root per coerenza con l'ambiente attuale
  srcDir: '.',
  publicDir: 'public',
});