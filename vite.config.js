import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacidade: fileURLToPath(new URL('./privacidade.html', import.meta.url)),
        cookies: fileURLToPath(new URL('./cookies.html', import.meta.url)),
        termos: fileURLToPath(new URL('./termos.html', import.meta.url)),
      },
    },
  },
});
