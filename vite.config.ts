import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '',
  build: {
    outDir: '/public',
  },
  server: { port: 3000 },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
})
