import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const serviceLinks = [
  { label: 'Shaft Hardening Services Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana' },
  { label: 'Gear Hardening Job Work Punjab', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana' },
  { label: 'Crankshaft Induction Hardening Ludhiana', href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana' },
  { label: 'Case Hardening Heat Treatment Punjab', href: '/case-hardening-heat-treatment' },
  { label: 'Bearing Race Hardening Ludhiana', href: '/induction-heat-treatment/induction-hardening-bearings-ludhiana' },
  { label: 'On-site Induction Hardening Punjab', href: '/induction-heat-treatment/on-site' },
  { label: 'Automotive Parts Heat Treatment', href: '/industries/automotive' },
  { label: 'Agricultural Equipment Hardening Punjab', href: '/industries/agricultural' },
  { label: 'Induction Hardening Rate & Quote', href: '/get-quote' },
  { label: 'Our Work — Job Work Portfolio', href: '/our-work' },
];

/**
 * BlogRelatedLinks — added to every blog post for internal SEO linking.
 * Links all 74 blog posts to the 10 top money/service pages with
 * keyword-rich anchor text. Boosts service page rankings.
 */
export function BlogRelatedLinks() {
  return (
    <aside className="not-prose mt-16 border-t border-border pt-12">
      <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-2">
        Related <span className="text-primary">Services</span>
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Thakur Industries — Induction Hardening &amp; Heat Treatment Job Work, Ludhiana, Punjab.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {serviceLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-3 bg-secondary/40 rounded-xl border border-border hover:border-primary/50 hover:text-primary transition-all group text-sm font-bold text-foreground no-underline"
          >
            <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="/get-quote"
        className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-xl font-black uppercase italic tracking-tight hover:opacity-90 transition-opacity text-base no-underline"
      >
        Get a Free Quote for Induction Hardening Job Work <ArrowRight className="h-5 w-5" />
      </Link>
    </aside>
  );
}
