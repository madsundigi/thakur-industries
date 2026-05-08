'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const hoverGlow = {
  whileHover: { 
    scale: 1.03, 
    /* Updated Shadow to Red */
    boxShadow: "0 0 20px rgba(255, 50, 50, 0.2)",
    transition: { duration: 0.2 }
  }
};

export function ServicesOverview() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
            className="text-center mb-16"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInBottom}
        >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground uppercase italic">
              Our <span className="text-primary">Hardening</span> Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Precision-engineered heat treatment solutions for modern manufacturing.
            </p>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
          {SERVICES.slice(0, 3).map((service) => {
            const image = PlaceHolderImages.find(img => img.id === service.image);
            return (
              <motion.div key={service.id} variants={prefersReducedMotion ? undefined : fadeInBottom}>
                <Link href={service.href || `/services#${service.id}`} className="block group">
                  <motion.div {...hoverGlow}>
                    <Card className="h-full overflow-hidden bg-secondary/30 border-border group-hover:border-primary/50 transition-all">
                      {image && (
                        <div className="relative h-56 w-full overflow-hidden">
                            <Image
                                src={image.imageUrl}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={image.imageHint}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-6">
                              <Zap className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                      )}
                      <CardHeader className="pt-6">
                        <CardTitle className="text-2xl font-bold uppercase italic tracking-tighter group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {service.shortDescription}
                        </p>
                        <div className="text-primary font-bold text-xs uppercase tracking-widest mt-6 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                            View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline" size="lg" className="font-bold border-primary text-primary hover:bg-primary/10">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
