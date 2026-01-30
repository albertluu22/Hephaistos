import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    // For development, Office on Windows will usually accept http://localhost; if you need https, see README_ADDIN.md
    https: false
  }
})
