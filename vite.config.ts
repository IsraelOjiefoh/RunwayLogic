import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure output directory is correct
  },
  server: {
    historyApiFallback: true, // Enable fallback for React routes
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: for cleaner imports
    },
  },
});
