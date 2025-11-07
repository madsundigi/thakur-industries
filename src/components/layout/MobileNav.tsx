'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS, CTA_SECONDARY, SITE_PHONE_NUMBER } from '@/lib/constants';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex h-full flex-col">
          <div className="border-b p-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
          </div>
          <nav className="flex flex-col gap-4 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-4">
             <Button asChild className="w-full">
                <a href={`tel:${SITE_PHONE_NUMBER}`}>{CTA_SECONDARY}</a>
             </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
