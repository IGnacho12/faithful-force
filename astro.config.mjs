import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',  // O 'hybrid' si lo prefieres
  adapter: vercel(),
});
