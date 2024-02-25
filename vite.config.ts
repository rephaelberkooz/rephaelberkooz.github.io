import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({ useEslintrc: true })],
  define: {
    "process.env": {},
  },
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "about-me": resolve(__dirname, "./about-me/index.html"),
      },
    },
  },
});
