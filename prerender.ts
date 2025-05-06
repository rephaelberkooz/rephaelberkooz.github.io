import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from '@mui/material';
import { THEME } from './src/theme';
import { About, Home, Resume } from './src/pages';

// Function to render a route
function renderRoute(Component: React.ComponentType, url: string) {
  return renderToString(
    createElement(StaticRouter, { location: url },
      createElement(ThemeProvider, { theme: THEME },
        createElement(Component)
      )
    )
  );
}

// Export routes and their components for pre-rendering
export const routes = [
  { path: '/', component: Home },
  { path: '/about-me', component: About },
  { path: '/resume', component: Resume },
];

// Function to generate HTML for a route
export function generateHTML(url: string, component: React.ComponentType, assetPath: string = '.') {
  const content = renderRoute(component, url);
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="${assetPath}/man.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rephael Berkooz</title>
    <script type="module" crossorigin src="${assetPath}/assets/index.js"></script>
    <link rel="stylesheet" href="${assetPath}/assets/index.css">
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
</html>`;
} 