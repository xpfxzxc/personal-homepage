// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://xpfxzxc.github.io',
  base: '/personal-homepage',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});