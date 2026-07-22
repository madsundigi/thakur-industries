import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  images: {
    // Serve AVIF first (50% smaller than JPEG), fallback to WebP
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Canonical host: force www -> non-www (308 permanent) so the host that is
      // actually served matches the canonical tags, sitemap, and schema — all of
      // which use the non-www apex (https://thakurindustries.in). Removing this
      // www/non-www split lets Google index a single canonical URL per page.
      // NOTE: the Vercel project's Primary Domain must also be set to the
      // non-www apex, otherwise the edge redirect fights this one.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.thakurindustries.in' }],
        destination: 'https://thakurindustries.in/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Immutable cache for all versioned static assets
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Security headers for all routes
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ];
  },
};

export default nextConfig;
