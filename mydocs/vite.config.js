import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        article: fileURLToPath(new URL('./article.html', import.meta.url)),
        apiReference: fileURLToPath(new URL('./api-reference.html', import.meta.url)),
        search: fileURLToPath(new URL('./search.html', import.meta.url)),
        apiKeys: fileURLToPath(new URL('./api-keys.html', import.meta.url)),
        architecture: fileURLToPath(new URL('./architecture.html', import.meta.url)),
      },
    },
  },
})
