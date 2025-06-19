import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'eeb57d6c-6600-4b75-9689-2f360c9d88cb-00-3ltb9p85zypr4.sisko.replit.dev',
      'localhost' // Also keep localhost allowed
    ]
  }
})