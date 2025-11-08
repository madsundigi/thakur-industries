'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function AeroNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground" aria-label="Toggle mobile menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-20 z-40 bg-background/95 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
           <div className="flex h-full flex-col">
             <nav className="flex flex-col items-center gap-6 p-8">
               {NAV_LINKS.map((link) => (
                 <Link
                   key={link.href}
                   href={link.href}
                   onClick={() => setIsOpen(false)}
                   className="text-xl font-medium text-foreground transition-colors hover:text-primary"
                 >
                   {link.label}
                 </Link>
               ))}
             </nav>
           </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
