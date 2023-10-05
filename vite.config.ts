import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

const env = loadEnv('', process.cwd())

const rawData = fs.readFileSync(`brand-themes/${env.VITE_BRAND}/theme.json`);
const theme = JSON.parse(rawData);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    theme
  }
})
