// file for configuration of the dev server (like launchsettings.json, the proxy to the API )
// also configures which "packes" e.g. plugins i use 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
