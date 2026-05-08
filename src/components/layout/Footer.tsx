import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS, SITE_NAME, SITE_ADDRESS, SITE_PHONE_NUMBER, SITE_TAGLINE } from '@/lib/constants';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card text-gray-400 border-t border-border">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
              <Logo />
            </Link>
            <p className="text-sm">{SITE_TAGLINE}</p>
            <div className="flex gap-4 mt-2">
                <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-sm uppercase text-gray-200">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-sm uppercase text-gray-200">Contact Us</h3>
            <address className="mt-4 space-y-3 text-sm not-italic">
                <p>
                    <a href={`tel:${SITE_PHONE_NUMBER}`} className="hover:text-primary transition-colors">{SITE_PHONE_NUMBER}</a>
                </p>
                <p>
                    <a href="mailto:sales@thakurindustries.in" className="hover:text-primary transition-colors">sales@thakurindustries.in</a>
                </p>
                <p>{SITE_ADDRESS}</p>
            </address>
          </div>
          <div>
             <h3 className="font-semibold tracking-wider text-sm uppercase text-gray-200">Our Hours</h3>
             <div className="mt-4 space-y-3 text-sm">
                <p>Monday - Saturday: 9am - 7pm</p>
                <p>Sunday: Closed</p>
             </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved. | Heat Treatment Company Ludhiana</p>
        </div>
      </div>
    </footer>
  );
}
