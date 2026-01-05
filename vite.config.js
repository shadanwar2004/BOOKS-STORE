import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/BOOKS-STORE/",   // 👈 MUST match repo name
})
