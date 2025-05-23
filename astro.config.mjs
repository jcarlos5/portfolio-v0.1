// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-v0-1-virid.vercel.app/',
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