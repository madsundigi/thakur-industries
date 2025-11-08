
import { SITE_URL, NAV_LINKS, SERVICES } from '@/lib/constants';

const blogPosts = [
    'what-is-induction-hardening-ludhiana',
    'difference-between-induction-and-case-hardening',
    'energy-efficient-induction-heating-india',
    'top-benefits-of-induction-heat-treatment',
    'materials-suitable-for-induction-hardening',
    'induction-hardening-for-automotive-parts',
    'role-of-quenching-in-induction-hardening',
    'surface-vs-through-hardening',
    'heat-treatment-for-en-series-steels',
    'how-induction-hardening-increases-component-life',
    'common-defects-in-induction-hardening-and-how-to-prevent-them',
    'induction-hardening-vs-flame-hardening',
    'importance-of-frequency-in-induction-hardening',
    'induction-hardening-for-agricultural-implements',
    'gear-hardening-process-explained',
    'induction-hardening-services-in-north-india'
];

export async function GET() {
  const navLinks = NAV_LINKS.map(link => {
    if (link.subLinks) {
      const mainLinks = link.subLinks.map(sl => sl.href).filter(href => !href.includes('#'));
      return [link.href, ...mainLinks];
    }
    return link.href;
  }).flat();
  
  const servicePaths = SERVICES.map(service => service.href).filter(href => !href.includes('#'));
  const blogPaths = blogPosts.map(slug => `/blog/${slug}`);
  
  const allPaths = [...new Set([...navLinks, ...servicePaths, ...blogPaths, '/about', '/blog', '/quenching-process', '/material-heat-treatment', '/component-hardening', '/gear-hardening', '/shaft-hardening'])];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths.map((path) => {
    if(!path) return '';
    return `
    <url>
      <loc>${SITE_URL}${path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${path === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `}).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
