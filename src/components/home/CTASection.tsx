// No 'use client' — no hooks, no browser APIs, no framer-motion needed
// Hover effects handled entirely by Tailwind/CSS (GPU-composited transforms)
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageSquare, Star } from 'lucide-react';
import { SITE_PHONE_NUMBER } from '@/lib/constants';
import { JsonLd } from '@/components/shared/JsonLd';

// Schema hoisted to module scope — JSON.stringify runs once, not on every render
const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Thakur Industries',
  url: 'https://thakurindustries.in',
  telephone: '+91 7900000776',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
    addressLocality: 'Ludhiana',
    addressRegion: 'Punjab',
    postalCode: '141003',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '127',
  },
};

// Static star indices — hoisted to avoid new array allocation on every render
const STARS = [1, 2, 3, 4, 5] as const;

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden border-t border-primary/20">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <JsonLd data={aggregateRatingSchema} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Visible aggregate rating — required for AggregateRating rich result eligibility */}
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
          <div className="flex">
            {STARS.map(i => (
              <Star
                key={i}
                className={`h-4 w-4 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400/40'}`}
              />
            ))}
          </div>
          <span className="text-white font-black text-sm">4.8 / 5</span>
          <span className="text-gray-500 text-xs">·</span>
          <span className="text-gray-300 text-xs font-medium">127+ verified client reviews</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic leading-none">
          Ready to <span className="text-primary">Harden</span> Your Quality?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Contact us for a free consultation. Send your component details or drawings and get a
          quick quotation within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* CSS hover scale — no JS animation runtime needed */}
          <div className="transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,50,50,0.3)] hover:shadow-[0_0_40px_rgba(255,50,50,0.5)] transition-shadow duration-300">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-10 py-8 text-xl bg-primary hover:bg-primary/80 text-primary-foreground font-black group relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-150%] after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:skew-x-[-20deg] hover:after:translate-x-[150%] after:transition-transform after:duration-700"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Send Inquiry
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>

          <div className="transition-transform hover:scale-105 active:scale-95">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-10 py-8 text-xl border-white text-white hover:bg-white hover:text-black font-black"
            >
              <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
                <Phone className="h-6 w-6" />
                Call: {SITE_PHONE_NUMBER}
              </a>
            </Button>
          </div>

          <div className="transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] transition-shadow duration-300">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-10 py-8 text-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black border-none"
            >
              <a
                href="https://wa.me/917900000776"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-6 w-6" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
