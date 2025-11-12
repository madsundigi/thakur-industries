
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/layout/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
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

export function AeroNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'bg-background/80 backdrop-blur-sm shadow-md'
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  {link.subLinks ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-foreground hover:text-primary focus:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent">
                        <Link href={link.href} className="font-medium">{link.label}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[150px] gap-3 p-4 md:w-[200px]">
                          {link.subLinks.map((subLink) => (
                            <ListItem key={subLink.label} href={subLink.href} title={subLink.label} />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-foreground hover:text-primary focus:text-primary")}>
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
