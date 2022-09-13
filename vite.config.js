import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  path: "name",
  plugins: [
    react(),
    viteCompression({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|css|html|svg|jsx|png|jpg|webp)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ]
})
