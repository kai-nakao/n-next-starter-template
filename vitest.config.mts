/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './vitest.setup.mts',
  },
  resolve: {
    alias: {
      '@': __dirname + '/src',
    },
  },
})
