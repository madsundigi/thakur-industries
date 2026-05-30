'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_PHONE_NUMBER } from '@/lib/constants';

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export function Hero() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const heroImage = PlaceHolderImages.find(p => p.id === 'serviceInductionHardening');

  return (
    <section className="relative min-h-[600px] h-[85vh] w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* Ken Burns zoom via CSS — GPU-composited, zero JS overhead */}
        <div className="hero-kenburns absolute inset-0 z-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt="Induction hardening process in action"
              fill
              priority
              fetchPriority="high"
              className="object-cover opacity-60"
              data-ai-hint={heroImage.imageHint}
              sizes="100vw"
            />
          )}
        </div>
        {isDesktop && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-full h-full object-cover opacity-40"
            poster={heroImage?.imageUrl}
            preload="none"
          >
            <source src="https://videos.pexels.com/video-files/7578278/7578278-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInBottom}
        >
          <h1 className="text-3xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl uppercase italic leading-[1.1] break-words">
            Induction Hardening <span className="text-primary block md:inline">and heat treatment services</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg font-bold text-primary/90 uppercase tracking-widest max-w-2xl mx-auto">
            Precision Job Work for Automotive, Agricultural & Industrial Components
          </p>
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-gray-300 font-medium">
            Located in Ludhiana, Punjab. We deliver consistent hardness and superior durability for your critical metal parts.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button asChild size="lg" className="w-full sm:w-auto h-auto py-4 px-8 text-base bg-primary hover:bg-primary/80 text-primary-foreground font-black uppercase italic shadow-lg">
            <Link href="/contact" className="flex items-center gap-2">
              Request Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-auto py-4 px-8 text-base border-white bg-transparent text-white hover:bg-white hover:text-black font-black uppercase italic">
             <a href={`tel:${SITE_PHONE_NUMBER}`} className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>

          <Button asChild size="lg" className="w-full sm:w-auto h-auto py-4 px-8 text-base bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none font-black uppercase italic shadow-lg">
             <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Send Drawing
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#services" aria-label="Scroll to services" className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] hidden sm:block">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
