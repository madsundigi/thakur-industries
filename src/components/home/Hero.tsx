
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const heroImage = PlaceHolderImages.find(p => p.id === 'heroMachine');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={prefersReducedMotion ? false : { scale: 1.1, opacity: 0.8 }}
        animate={prefersReducedMotion ? false : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {heroImage && (
            <Image 
                src={"https://picsum.photos/seed/hero/1920/1080"}
                alt="Background video poster"
                fill
                priority
                fetchPriority="high"
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover"
          poster={"https://picsum.photos/seed/hero/1920/1080"}
          preload="none" 
        >
          <source src="https://videos.pexels.com/video-files/3252033/3252033-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Induction Hardening & Heat Treatment Services in Ludhiana, Punjab
          </motion.h1>

          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-200"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Precision Heat Treatment Job Work for Automotive, Agricultural & Industrial Components.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto text-lg py-6 px-8 bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg py-6 px-8 border-white bg-transparent text-white hover:bg-white hover:text-black">
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
