import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from https://<user>.github.io/Portfolio/
  // so every built asset path needs this prefix. If you ever move to a custom
  // domain or Vercel/Netlify (which serve from the root), change this back to "/".
  base: '/Portfolio/',
})
