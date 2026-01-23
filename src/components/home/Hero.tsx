'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SITE_PHONE_NUMBER } from '@/lib/constants';

export function Hero() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const heroImage = PlaceHolderImages.find(p => p.id === 'serviceInductionHardening');

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Induction hardening process in action"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            sizes="100vw"
          />
        )}
        {isDesktop && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-full h-full object-cover"
            poster={heroImage?.imageUrl}
            preload="auto"
          >
            <source src="https://videos.pexels.com/video-files/7578278/7578278-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Induction Hardening & Heat Treatment Services in Ludhiana, Punjab
          </h1>

          <p 
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-200"
          >
            Precision Heat Treatment Job Work for Automotive, Agricultural & Industrial Components.
          </p>
          
          <div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto text-lg py-6 px-8 bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg py-6 px-8 border-white bg-transparent text-white hover:bg-white hover:text-black">
               <a href={`tel:${SITE_PHONE_NUMBER}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call for Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
