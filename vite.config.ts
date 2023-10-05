import { defineConfig, loadEnv } from "vite";
import path from "path";
import fs from "fs";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const env = loadEnv('', process.cwd());
const rawData = fs.readFileSync(`brand-themes/${env.VITE_BRAND}/theme.json`);
console.log(rawData);
const theme = JSON.parse(rawData) ?? {};
console.log(theme);
export default defineConfig(async () => {
  return {
    plugins: [react()],
    define: {
      __APP_THEME__: theme,
    },
  };
});
