import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://rephaelberkooz.github.io';

const routes = [
  '/',
  '/about-me',
  '/resume'
];

function generateRobots() {
  const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robots);
  console.log('robots.txt generated successfully!');
}

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write sitemap
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

// Generate both files
generateSitemap();
generateRobots(); 