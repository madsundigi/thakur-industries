'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Cog, Tractor, Wrench, Car, ArrowRight } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const industries = [
  {
    icon: Car,
    title: 'Automotive Parts',
    description: 'Gears, Shafts, Axles',
    sublabel: 'Ludhiana Auto OEMs',
    imageId: 'industryAutomotive',
    href: '/industries/automotive',
  },
  {
    icon: Tractor,
    title: 'Agricultural Implements',
    description: 'Tractor & Farm Tools',
    sublabel: 'Punjab Farm Equipment',
    imageId: 'industryAgriculture',
    href: '/industries/agricultural',
  },
  {
    icon: Cog,
    title: 'Machinery & Engineering',
    description: 'Precision Components',
    sublabel: 'CNC & Machine Tools',
    imageId: 'industryMachineTool',
    href: '/induction-heat-treatment',
  },
  {
    icon: Wrench,
    title: 'Custom Job Work',
    description: 'Tailored OEM Solutions',
    sublabel: 'All Industry Types',
    imageId: 'processHardening',
    href: '/our-work',
  },
];

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
    y: -10,
    /* Updated Shadow to Red */
    boxShadow: "0 10px 30px rgba(255, 50, 50, 0.15)",
    transition: { duration: 0.3 }
  }
};

export function IndustriesServed() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInBottom}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground uppercase italic">
            Industries <span className="text-primary">We Serve</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We deliver precision heat treatment solutions across critical sectors, enhancing durability where it matters most.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((industry, index) => {
            const image = PlaceHolderImages.find(img => img.id === industry.imageId);
            return (
              <motion.div key={index} variants={prefersReducedMotion ? undefined : fadeInBottom}>
                <Link href={industry.href} className="block group">
                  <div className="relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-border group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(255,50,50,0.15)]">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={industry.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-all duration-300" />
                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="h-11 w-11 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                        <industry.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">{industry.sublabel}</p>
                        <h3 className="text-lg font-black text-white uppercase italic tracking-tighter leading-tight">{industry.title}</h3>
                        <p className="text-gray-300 text-xs font-bold uppercase tracking-widest mt-1">{industry.description}</p>
                        <div className="mt-3 flex items-center gap-1 text-primary text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
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
            transition={{ delay: 0.5 }}
        >
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold">
                <Link href="/industries" className="flex items-center gap-2">
                  Explore All Industries
                  <ArrowRight className="h-5 w-5" />
                </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
