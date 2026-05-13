const fs = require('fs');
const path = require('path');
const { allPages, buildCanonical } = require('../src/lib/site-data');

const filePath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const urls = allPages.map((page) => `  <url><loc>${buildCanonical(page.path)}</loc><changefreq>weekly</changefreq><priority>${page.priority || '0.7'}</priority></url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, xml, 'utf8');
console.log(`Wrote ${filePath}`);
