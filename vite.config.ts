import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ronal_ayra_revollo/",
  plugins: [react()],
  publicDir: "public",

  build: {
    outDir: "dist",
    assetsDir: "assets",
  },

  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
