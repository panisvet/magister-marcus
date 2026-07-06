import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

let buildHash = 'dev'
let buildDate = new Date().toISOString().split('T')[0]

try {
  buildHash = execSync('git rev-parse --short HEAD').toString().trim()
} catch (_) {
  buildHash = Math.random().toString(36).slice(2, 8)
}

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_HASH__: JSON.stringify(buildHash),
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
})
