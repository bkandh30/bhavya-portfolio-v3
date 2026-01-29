import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },

    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-avatar",
            "@radix-ui/react-slot",
            "@radix-ui/react-tooltip",
          ],
          "query-vendor": ["@tanstack/react-query"],

          // Utility chunks
          utils: ["clsx", "tailwind-merge", "class-variance-authority"],
        },

        // Optimize chunk naming for better caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    // CSS optimizations
    cssCodeSplit: false,
    cssMinify: true,

    // Disable sourcemaps in production
    sourcemap: false,

    // Optimize chunk size
    chunkSizeWarningLimit: 1000,

    // Target modern browsers for smaller bundles
    target: "es2020",

    // Enable module preload polyfill
    modulePreload: {
      polyfill: true,
    },

    // Compression
    reportCompressedSize: true,

    // Assets
    assetsInlineLimit: 4096,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@radix-ui/react-avatar",
      "@radix-ui/react-slot",
      "@radix-ui/react-tooltip",
    ],
    exclude: [],
  },

  css: {
    modules: {
      localsConvention: "camelCase",
    },
    devSourcemap: false,
  },

  // Preview server config
  preview: {
    port: 8080,
    host: true,
  },
});
