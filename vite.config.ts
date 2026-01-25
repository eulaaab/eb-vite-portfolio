import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Helper to create aliases for src subdirectories
const srcAliases = ["assets", "hooks", "components", "pages", "constants", "styles"].reduce(
  (acc, dir) => {
    acc[dir] = `/src/${dir}`;
    return acc;
  },
  {} as Record<string, string>
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/eb-vite-portfolio/",
  resolve: {
    alias: {
      "@": "/src",
      ...srcAliases,
    },
  },
});
