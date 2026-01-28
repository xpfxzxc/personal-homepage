// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isVercel = process.env.VERCEL === '1';

// https://astro.build/config
export default defineConfig({
  site: isVercel ? 'https://xpfxzxc-personal-homepage.vercel.app' : 'https://xpfxzxc.github.io',
  base: isVercel ? '/' : '/personal-homepage',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});