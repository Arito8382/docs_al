import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
