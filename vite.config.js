import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/web-de-ale/", // Nombre de tu repositorio en GitHub
})
