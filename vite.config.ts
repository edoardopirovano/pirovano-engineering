import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create separate chunks for major dependencies
          if (id.indexOf("node_modules") !== -1) {
            if (id.indexOf("react-dom") !== -1) {
              return "react-dom";
            }
            if (id.indexOf("react") !== -1) {
              return "react-core";
            }
            if (id.indexOf("framer-motion") !== -1) {
              return "animations";
            }
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 256,
    reportCompressedSize: true,
  },
});
