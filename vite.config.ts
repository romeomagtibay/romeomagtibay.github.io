import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // When deployed to GitHub Pages at https://<user>.github.io/rmagtibay/
  // the app lives under the /rmagtibay/ sub-path, so all asset URLs must
  // be prefixed with that. When you eventually attach a custom domain
  // (which serves the site at the root), set VITE_BASE_PATH=/ in the
  // deploy environment — no code change needed.
  const base = env.VITE_BASE_PATH ?? '/rmagtibay/'

  return {
    plugins: [react(), tailwindcss()],
    base,
  }
})
