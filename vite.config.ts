import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // Served at root on user site / custom domain.
  // Set VITE_BASE_PATH to deploy under a sub-path.
  const base = env.VITE_BASE_PATH ?? '/'

  return {
    plugins: [react(), tailwindcss()],
    base,
  }
})
