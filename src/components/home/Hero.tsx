
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
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
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
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
        </motion.div>
        {isDesktop && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-full h-full object-cover opacity-40"
            poster={heroImage?.imageUrl}
            preload="auto"
          >
            <source src="https://videos.pexels.com/video-files/7578278/7578278-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInBottom}
        >
          <h1 className="text-4xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl uppercase italic leading-[0.9]">
            Induction Hardening <span className="text-primary block lg:inline">and heat treatment services</span>
          </h1>
          <p className="mt-8 text-xl font-bold text-primary/90 uppercase tracking-widest max-w-3xl mx-auto">
            Precision Job Work for Automotive, Agricultural & Industrial Components
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 font-medium">
            Located in Ludhiana, Punjab. We deliver consistent hardness and superior durability for your critical metal parts with advanced induction technology.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button asChild size="lg" className="w-full sm:w-auto text-xl py-8 px-12 bg-primary hover:bg-primary/80 text-primary-foreground font-black uppercase italic shadow-[0_0_25px_rgba(125,249,255,0.4)]">
            <Link href="/contact" className="flex items-center gap-2">
              Request Quote
              <ArrowRight className="h-6 w-6" />
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-xl py-8 px-12 border-white bg-transparent text-white hover:bg-white hover:text-black font-black uppercase italic">
             <a href={`tel:${SITE_PHONE_NUMBER}`}>
              <Phone className="mr-2 h-6 w-6" />
              Call Now
            </a>
          </Button>

          <Button asChild size="lg" className="w-full sm:w-auto text-xl py-8 px-12 bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none font-black uppercase italic shadow-[0_0_20px_rgba(37,211,102,0.3)]">
             <a href="https://wa.me/917900000776" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              Send Drawing
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
