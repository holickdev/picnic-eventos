// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Si también instalaste Tailwind, impórtalo aquí:
// import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Agrega tailwind() a esta lista si lo estás usando
  integrations: [react()], 

  server: {
    open: true  // Para que abra el navegador automáticamente (como tenías antes)
  }
});