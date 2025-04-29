// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://jcarlos5.github.io',
  base: 'portfolio-v0.1',
  i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
      routing: {
          prefixDefaultLocale: true
      }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});