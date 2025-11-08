'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export function AeroNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-10deg', '10deg']);
  
  const springConfig = { stiffness: 300, damping: 30, mass: 1 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <motion.nav
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: 'preserve-3d',
        }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-xl border transition-all duration-300 w-[90vw] md:w-auto ${
          isScrolled 
            ? 'border-neutral-300/50 bg-white/50 backdrop-blur-lg' 
            : 'border-white/20 bg-white/20 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <Logo />
          </Link>
          <div className="hidden md:flex md:items-center md:gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24}/> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-24 z-40 bg-background/95 backdrop-blur-sm md:hidden">
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
        </div>
      )}
    </>
  );
}
