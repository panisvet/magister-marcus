import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

const gitHash = (() => {
  try { return execSync('git rev-parse --short HEAD').toString().trim() }
  catch { return 'dev' }
})()

const buildDate = new Date().toISOString().slice(0, 10)

export default defineConfig({
  define: {
    __BUILD_HASH__: JSON.stringify(gitHash),
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
  plugins: [react()],
  server: {
    proxy: {
      // During local dev: forwards /api/* to wrangler dev server (port 8788)
      '/api': {
        target: 'http://localhost:8788',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
