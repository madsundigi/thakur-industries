'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from 'next/navigation';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

export function AeroNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>(['/induction-heat-treatment', '/locations']); 
  const pathname = usePathname();

  const toggleSubMenu = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubMenus(prev => 
      prev.includes(href) ? prev.filter(h => h !== href) : [...prev, href]
    );
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'bg-background/80 backdrop-blur-md shadow-md border-b border-white/5'
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {NAV_LINKS.filter(l => l.href !== '/contact').map((link) => (
                <NavigationMenuItem key={link.href}>
                  {link.subLinks ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary focus:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent">
                        <Link href={link.href} className="font-bold uppercase tracking-wider text-xs italic">{link.label}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className={cn(
                          "grid gap-1 p-2",
                          link.label === 'Locations We Serve' ? "w-[300px] grid-cols-2 md:w-[450px]" : "w-[200px] md:w-[280px]"
                        )}>
                          {link.subLinks.map((subLink) => (
                            <ListItem key={subLink.label} href={subLink.href} title={subLink.label} />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link 
                        href={link.href}
                        className={cn(
                          navigationMenuTriggerStyle(), 
                          "bg-transparent text-foreground hover:text-primary focus:text-primary font-bold uppercase tracking-wider text-xs italic",
                          pathname === link.href ? "text-primary" : ""
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="font-black uppercase italic tracking-tight border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="sm" className="font-black uppercase italic tracking-tight bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/get-quote">Get a Quote</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-foreground hover:text-primary transition-colors" 
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-20 z-40 bg-background/98 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <ScrollArea className="h-full">
              <nav className="flex flex-col p-6 gap-2">
                {NAV_LINKS.map((link) => (
                  <div key={link.href} className="flex flex-col border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => {
                          if (!link.subLinks) setIsOpen(false);
                        }}
                        className={cn(
                          "text-lg font-black uppercase italic tracking-tighter py-4 transition-colors flex-1",
                          pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                      {link.subLinks && (
                        <button 
                          onClick={(e) => toggleSubMenu(e, link.href)}
                          className="p-4 text-primary bg-secondary/30 rounded-lg ml-2"
                        >
                          {openSubMenus.includes(link.href) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                        </button>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {link.subLinks && openSubMenus.includes(link.href) && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col pl-4 border-l-2 border-primary/30 mb-4 bg-secondary/10 rounded-r-xl"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "text-sm font-bold uppercase tracking-tight py-3 transition-colors hover:text-primary flex items-center gap-2",
                                pathname === subLink.href ? "text-primary" : "text-muted-foreground"
                              )}
                            >
                              <div className="h-1 w-1 bg-primary/40 rounded-full" />
                              {subLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="mt-8 pt-4 space-y-4">
                  <Button asChild size="lg" className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tight py-6">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Get Industrial Quote</Link>
                  </Button>
                </div>
              </nav>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group",
            className
          )}
          {...props}
        >
          <div className="text-xs font-black uppercase tracking-tight italic group-hover:translate-x-1 transition-transform">{title}</div>
          {children && (
            <p className="line-clamp-2 text-[10px] leading-snug text-muted-foreground uppercase font-bold mt-1">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
