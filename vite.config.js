import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        article: 'article.html',
        apiReference: 'api-reference.html',
        search: 'search.html',
        apiKeys: 'api-keys.html',
        architecture: 'architecture.html'
      }
    }
  }
})