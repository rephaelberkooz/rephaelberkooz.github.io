import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes, generateHTML } from './prerender';

// Plugin to copy SEO files
function copySEOFiles() {
  return {
    name: 'copy-seo-files',
    writeBundle() {
      const files = ['sitemap.xml', 'robots.txt'];
      const publicDir = path.join(process.cwd(), 'public');
      const distDir = path.join(process.cwd(), 'dist');

      files.forEach(file => {
        if (fs.existsSync(path.join(publicDir, file))) {
          fs.copyFileSync(
            path.join(publicDir, file),
            path.join(distDir, file)
          );
        }
      });
    }
  };
}

// Plugin to generate static pages
function generateStaticPages() {
  return {
    name: 'generate-static-pages',
    async closeBundle() {
      const distDir = path.resolve('dist');

      // Generate pages for each route
      for (const route of routes) {
        const routePath = route.path === '/' ? '' : route.path;
        const routeDir = path.join(distDir, routePath.slice(1));
        
        // Create directory if it doesn't exist
        fs.mkdirSync(routeDir, { recursive: true });
        
        // Calculate relative path to assets
        const depth = routePath.split('/').filter(Boolean).length;
        const assetPath = depth > 0 ? '../'.repeat(depth) : '.';
        
        // Generate HTML content with correct asset paths
        const html = generateHTML(route.path, route.component, assetPath);
        
        // Write the HTML file
        const filePath = path.join(routeDir, 'index.html');
        fs.writeFileSync(filePath, html);
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    eslint({ useEslintrc: true }),
    generateStaticPages(),
    copySEOFiles()
  ],
  define: {
    "process.env": {},
  },
  base: "./",
  build: {
    rollupOptions: {
      output: {
        // Ensure consistent filenames for assets
        entryFileNames: 'assets/index.js',
        assetFileNames: 'assets/index.[ext]'
      }
    }
  }
});
