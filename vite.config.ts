import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// matches github.com/srmarohit/portfolio for GitHub Pages
const GITHUB_PAGES_BASE = "/portfolio/";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? GITHUB_PAGES_BASE : "/",
}));
