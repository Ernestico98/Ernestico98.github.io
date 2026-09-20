import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // User site (ernestico98.github.io) is served from the domain root, so base '/'
  // stays correct both on github.io and later on ernestodavidph.com.
  base: '/',
  plugins: [react(), tailwindcss()],
})
