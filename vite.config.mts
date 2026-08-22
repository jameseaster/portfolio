/// <reference types="vitest/config" />
import { readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { buildPersonSchema } from "./src/data/jsonLd.mjs";
import type { Resume } from "./src/data/resume.js";

// Injects schema.org Person data into index.html so crawlers that do not run
// JavaScript still see it. Sourced from src/data/resume.json.
function resumeJsonLd(): Plugin {
  return {
    name: "resume-json-ld",
    transformIndexHtml() {
      const resume = JSON.parse(
        readFileSync("./src/data/resume.json", "utf8"),
      ) as Resume;
      return [
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(buildPersonSchema(resume)),
          injectTo: "head",
        },
      ];
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), resumeJsonLd()],
  // Keep the existing REACT_APP_* env var names working (exposed on import.meta.env)
  envPrefix: "REACT_APP_",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    css: true,
  },
});
