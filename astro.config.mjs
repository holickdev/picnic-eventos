// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'; // <--- 1. Importamos el plugin de Vite

// Si también instalaste Tailwind, impórtalo aquí:
// import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Agrega tailwind() a esta lista si lo estás usando
  integrations: [react()], 

  vite: {
    plugins: [tailwindcss()], // <--- 2. Lo agregamos aquí
  },

  server: {
    open: true  // Para que abra el navegador automáticamente (como tenías antes)
  }
});