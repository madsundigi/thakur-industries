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
  // Canonical host (www vs non-www) is enforced by Vercel's Primary Domain
  // setting, NOT here. An app-level host redirect fights Vercel's edge
  // redirect and causes ERR_TOO_MANY_REDIRECTS. Set the Primary Domain to the
  // non-www apex in Vercel → Settings → Domains to match the non-www canonical
  // tags, sitemap, and schema.
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
