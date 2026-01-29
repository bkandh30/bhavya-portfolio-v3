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
        pure_funcs: ["console.log", "console.info", "console.warn"],
        passes: 3,
        dead_code: true,
        unused: true,
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
        // CHANGED: Function-based manualChunks instead of object
        manualChunks: (id) => {
          // React core - essential, load first
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "react-core";
          }
          // Router - needed for navigation
          if (id.includes("node_modules/react-router")) {
            return "router";
          }
          // Radix UI components - split separately
          if (id.includes("node_modules/@radix-ui")) {
            return "radix";
          }
          // Lucide icons - only used icons should be included
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
          // TanStack Query - lazy load since not heavily used
          if (id.includes("node_modules/@tanstack")) {
            return "query";
          }
          // Toast notifications
          if (id.includes("node_modules/sonner")) {
            return "toast";
          }
          // Utility libraries
          if (
            id.includes("node_modules/clsx") ||
            id.includes("node_modules/tailwind-merge") ||
            id.includes("node_modules/class-variance-authority")
          ) {
            return "utils";
          }
        },

        // Optimize chunk naming for better caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
      // ADDED: Explicit tree-shake configuration for better dead code elimination
      treeshake: {
        moduleSideEffects: false,
        preset: "recommended",
      },
    },

    // CSS optimizations
    cssCodeSplit: false,
    cssMinify: true,

    // Disable sourcemaps in production
    sourcemap: false,

    // Optimize chunk size
    chunkSizeWarningLimit: 500,

    // Target modern browsers for smaller bundles
    target: "esnext",

    // Disable polyfill since modern browsers don't use it
    modulePreload: {
      polyfill: false,
    },

    // Compression
    reportCompressedSize: true,

    // Assets
    assetsInlineLimit: 4096,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["@tanstack/react-query"],
  },

  css: {
    modules: {
      localsConvention: "camelCase",
    },
    devSourcemap: false,
  },

  esbuild: {
    treeShaking: true,
    legalComments: "none",
  },

  // Preview server config
  preview: {
    port: 8080,
    host: true,
  },
});
