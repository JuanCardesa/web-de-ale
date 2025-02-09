import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/web-de-ale/", // 👈 Usa el nombre exacto de tu repo en GitHub
})
