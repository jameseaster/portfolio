import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Keep the existing REACT_APP_* env var names working (exposed on import.meta.env)
  envPrefix: "REACT_APP_",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
});
