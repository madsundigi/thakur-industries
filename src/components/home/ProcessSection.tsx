'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ProcessSection() {
    const quenchingImage = PlaceHolderImages.find(p => p.id === 'processHardening');
    const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative"
            >
                {quenchingImage && (
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                        <Image 
                            src={quenchingImage.imageUrl}
                            alt="Induction hardening with polymer and water quenching"
                            fill
                            className="object-cover"
                            data-ai-hint="technician monitoring machine"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                )}
                {/* Floating "Machine Data" decorative element */}
                <div className="absolute -bottom-6 -right-6 p-6 bg-background/90 backdrop-blur-md rounded-xl border border-primary/20 shadow-xl hidden md:block max-w-[200px]">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-black mb-2">Real-time Monitor</p>
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary" 
                        animate={{ width: ["20%", "80%", "45%", "90%"] }} 
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    </div>
                    <div className="h-1 w-3/4 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary" 
                        animate={{ width: ["60%", "30%", "75%", "40%"] }} 
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
            </motion.div>
            
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground uppercase italic leading-none mb-8">
                    Advanced <span className="text-primary">Quenching</span> Technology
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Our facility utilizes both polymer and water-based quenching. This allows us to precisely control cooling rates, ensuring optimal hardness while minimizing distortion for complex industrial gears and shafts.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      "Controlled Temperature",
                      "Reduced Distortion",
                      "Surface Integrity",
                      "Repeatable Results"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-bold text-foreground text-sm uppercase tracking-tight">{item}</span>
                      </div>
                    ))}
                </div>
                <Button asChild className="px-8 py-7 text-lg bg-primary text-primary-foreground font-bold" size="lg">
                    <Link href="/services#process" className="flex items-center gap-2">
                      Explore Our Process
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
