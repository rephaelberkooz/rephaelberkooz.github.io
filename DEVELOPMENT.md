# Development Guide

This document outlines the development workflow for this website.

## Prerequisites

- Node.js and npm installed on your system
- Git installed on your system

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development Workflow

### Local Development

To run the website locally:
```bash
npm run dev
```

This will start a development server using Vite, which provides:
- Hot Module Replacement (HMR)
- Fast refresh
- Development environment optimizations

The local server will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Code Quality

Before committing your changes, ensure your code passes the linting checks:
```bash
npm run lint
```

This will:
- Check TypeScript and TSX files
- Report unused disable directives
- Enforce zero warnings policy
- Use ESLint with the configured rules

### Building for Production

The website uses static site generation (SSG) to create pre-rendered pages for optimal performance and SEO. The build process is configured in `vite.config.ts`.

To create a production build:
```bash
npm run build
```

This command:
1. Runs TypeScript compilation
2. Creates an optimized production build using Vite
3. Pre-renders each route (`/`, `/about-me`, `/resume`) to static HTML
4. Generates and includes SEO files (sitemap.xml, robots.txt)
5. Creates the following structure in the `dist` directory:
   ```
   dist/
   ├── about-me/
   │   └── index.html
   ├── resume/
   │   └── index.html
   ├── assets/
   │   ├── index.css
   │   └── index.js
   ├── index.html
   ├── sitemap.xml
   ├── robots.txt
   └── [other assets]
   ```

The build process ensures:
- Each route has its own pre-rendered HTML file
- Assets are properly referenced using relative paths
- MUI styles are included in the pre-rendered output
- Client-side hydration works correctly after initial load
- SEO files are properly generated and included
- All routes are accessible without client-side routing

### SEO Configuration

The website includes several SEO optimizations:

1. **Sitemap Generation**: 
   - Automatically generates sitemap.xml during build
   - Includes all routes with proper priorities
   - Updates lastmod dates automatically
   - Configurable through `generate-sitemap.ts`

2. **Robots.txt**:
   - Generated automatically
   - Includes reference to sitemap
   - Allows search engine crawling

3. **Static Pre-rendering**:
   - All pages are pre-rendered to static HTML
   - Improves initial page load and SEO
   - Enables proper indexing by search engines

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

This serves the production build locally before deployment. You can test:
- Direct access to routes (e.g., `/about-me`, `/resume`)
- Pre-rendered content loading
- Client-side navigation
- Asset loading from all routes
- SEO file accessibility

### Deployment

The website is configured for GitHub Pages deployment. To deploy:
```bash
npm run deploy
```

This command will:
1. Run the build process (`predeploy` script)
2. Deploy the contents of the `dist` directory to GitHub Pages
3. Preserve the static site structure for all routes
4. Ensure SEO files are properly deployed

The deployed site will be available at: https://rephaelberkooz.github.io/

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- Vite with Static Site Generation
- ESLint + Prettier for code quality

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   └── App.tsx        # Main application component
├── public/            # Static assets and SEO files
├── generate-sitemap.ts # SEO file generator
├── vite.config.ts     # Build configuration
└── DEVELOPMENT.md     # This file
```
