import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), { name: 'dev-csp', apply: 'serve', transformIndexHtml: html => html.replace("script-src 'self';", "script-src 'self' 'unsafe-inline';").replace('; upgrade-insecure-requests', '') }],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    proxy: { '/api': 'http://localhost:3001' },
    hmr: {
      overlay: false
    }
  }
})
