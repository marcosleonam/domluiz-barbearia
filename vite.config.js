import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' -> caminhos relativos. Funciona em GitHub Pages
// (usuario.github.io/repo/) e em domínio próprio sem ajuste.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
