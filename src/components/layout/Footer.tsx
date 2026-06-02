import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { SITE_NAME, SITE_ADDRESS, SITE_PHONE_NUMBER, SITE_TAGLINE } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/induction-heat-treatment', label: 'Heat Treatment Guide' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/quality-certifications', label: 'Quality & Certifications' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

const serviceLinks = [
  { href: '/get-quote', label: 'Get a Quote' },
  { href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', label: 'Shaft Hardening' },
  { href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', label: 'Gear Hardening' },
  { href: '/induction-heat-treatment/crankshafts-induction-hardening-ludhiana', label: 'Crankshaft Hardening' },
  { href: '/case-hardening-heat-treatment', label: 'Case Hardening' },
  { href: '/industries/automotive', label: 'Automotive Industry' },
  { href: '/industries/agricultural', label: 'Agricultural Industry' },
];

export function Footer() {
  return (
    <footer className="bg-card text-gray-400 border-t border-border">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
              <Logo />
            </Link>
            <p className="text-sm leading-relaxed">{SITE_TAGLINE}</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              ISO-process induction hardening job work in Ludhiana, Punjab. Serving automotive, agricultural & heavy engineering OEMs across North India.
            </p>
            <Link
              href="/get-quote"
              className="mt-2 inline-block text-xs font-black uppercase italic tracking-wider bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors w-fit"
            >
              Get a Free Quote →
            </Link>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="font-semibold tracking-wider text-xs uppercase text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="font-semibold tracking-wider text-xs uppercase text-gray-200 mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-semibold tracking-wider text-xs uppercase text-gray-200 mb-4">Contact Us</h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-primary shrink-0" />
                <a href={`tel:${SITE_PHONE_NUMBER}`} className="hover:text-primary transition-colors">{SITE_PHONE_NUMBER}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-primary shrink-0" />
                <a href="mailto:sales@thakurindustries.in" className="hover:text-primary transition-colors">sales@thakurindustries.in</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{SITE_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={15} className="text-primary shrink-0" />
                <div className="text-xs">
                  <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </address>
          </div>

        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</p>
          <p className="text-center">
            Induction Hardening &amp; Heat Treatment Job Work — Ludhiana, Punjab, India
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
            <span className="hidden sm:block text-gray-700">|</span>
            <p className="text-gray-600 text-[11px]">
              Digital Marketing by{' '}
              <a
                href="https://madsunmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors font-medium"
              >
                Madsun Media
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
