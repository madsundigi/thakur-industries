
import { SITE_URL, NAV_LINKS, SERVICES } from '@/lib/constants';

const blogPosts = [
    'what-is-induction-hardening-ludhiana',
    'difference-between-induction-and-case-hardening',
    'top-benefits-of-induction-heat-treatment',
    'materials-suitable-for-induction-hardening',
    'induction-hardening-for-automotive-parts',
    'role-of-quenching-in-induction-hardening',
    'surface-vs-through-hardening',
    'heat-treatment-for-en-series-steels',
    'how-induction-heat-treatment-extends-tool-life',
    'common-defects-in-induction-hardening-and-how-to-prevent-them',
    'induction-hardening-vs-flame-hardening',
    'high-frequency-vs-medium-frequency-induction-hardening',
    'importance-of-frequency-in-induction-hardening',
    'induction-hardening-for-agricultural-implements',
    'gear-hardening-process-explained',
    'induction-hardening-services-in-north-india',
    'induction-hardening-process-explained',
    'induction-hardening-for-shafts-and-axles',
    'case-depth-control-in-induction-hardening',
    'induction-hardening-for-gears-and-pinions',
    'induction-hardening-for-tool-steel-components',
    'induction-hardening-for-gearbox-components',
    'common-materials-used-in-induction-hardening',
    'induction-hardening-vs-nitriding',
    'induction-hardening-job-work-for-oems',
    'surface-hardening-benefits-for-automotive-gears',
    'induction-hardening-for-crankshafts-and-camshafts',
    'energy-efficient-induction-heating-india',
    'induction-hardening-for-forged-and-machined-parts',
    'hardness-testing-after-induction-hardening',
    'how-to-prevent-distortion-in-induction-hardening',
    'transmission-shaft-induction-hardening',
    'how-induction-heating-works-in-metal-hardening',
    'induction-hardening-for-heavy-duty-rollers',
    'importance-of-temperature-control-in-induction-hardening',
    'advantages-of-medium-frequency-induction-hardening',
    'induction-hardening-for-en24-and-4340-alloy-steels',
    'polymer-vs-water-quenching',
    'importance-of-coil-design-in-induction-heating',
    'surface-hardening-for-heavy-machinery-shafts',
    'how-to-prevent-cracks-in-induction-hardened-components',
    'induction-hardening-for-hydraulic-cylinder-rods',
    'induction-heat-treatment-for-4140-and-4150-steel-grades',
    'induction-hardening-for-aerospace-industry-components',
    'power-density-in-induction-hardening',
    'surface-finish-and-machining-after-induction-hardening',
    'importance-of-cooling-time-in-quenching',
    'induction-hardening-for-automotive-axles',
    'role-of-process-automation-in-induction-heat-treatment',
    'induction-hardening-for-industrial-tools-and-dies',
    'induction-hardening-for-powertrain-components',
    'heat-treatment-for-high-performance-alloy-steels',
    'role-of-induction-heating-in-modern-manufacturing',
    'induction-hardening-for-rolling-mill-components',
    'automotive-gear-and-shaft-induction-hardening',
    'surface-hardening-techniques-for-heavy-engineering-components',
    'temperature-monitoring-systems-in-induction-hardening',
    'induction-heat-treatment-for-en8-steel-components',
    'induction-hardening-job-work-for-export-units',
    'common-misconceptions-about-induction-hardening',
    'importance-of-proper-coil-alignment-in-induction-systems',
    'advantages-of-polymer-quenching-over-oil',
    'case-hardening-for-automotive-transmission-components',
    'advanced-induction-hardening-for-precision-components',
    'heat-treatment-for-heavy-duty-shafts-and-rollers',
    'surface-hardening-for-automotive-engine-parts',
    'en19-and-en24-alloy-steel-induction-hardening-guide'
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

    