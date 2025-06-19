import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // ← allows LAN access (0.0.0.0)
    port: 5173, // ← default port or change if needed
    allowedHosts: true
  },

  
})
