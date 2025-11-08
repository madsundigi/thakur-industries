
import { SITE_URL, NAV_LINKS, SERVICES } from '@/lib/constants';

const blogPosts = [
    'what-is-induction-hardening-ludhiana',
    'difference-between-induction-and-case-hardening',
    'energy-efficient-induction-heating-india'
];

export async function GET() {
  const staticPaths = NAV_LINKS.map(link => link.href);
  const servicePaths = SERVICES.map(service => `/services#${service.id}`);
  const blogPaths = blogPosts.map(slug => `/blog/${slug}`);
  
  const allPaths = [...new Set([...staticPaths, ...servicePaths, ...blogPaths])];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths.map((path) => `
    <url>
      <loc>${SITE_URL}${path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${path === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
