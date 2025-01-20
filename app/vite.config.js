import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/RespiView/',
  server: {
    watch: {
      usePolling: true
    },
    proxy: {
      '/processed_data': {
        target: 'http://localhost:5173',
        rewrite: (path) => `/RespiView${path}`
      }
    }
  }
})
