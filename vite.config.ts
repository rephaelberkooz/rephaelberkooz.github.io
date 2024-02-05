import path from 'path'
// import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // plugins: [eslint(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
