'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cog, Tractor, Wrench, Car, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

const industries = [
  {
    icon: Car,
    title: 'Automotive Parts',
    description: 'Gears, Shafts, Axles'
  },
  {
    icon: Tractor,
    title: 'Agricultural Implements',
    description: 'Tractor & Farm Tools'
  },
  {
    icon: Cog,
    title: 'Machinery & Engineering',
    description: 'Precision Components'
  },
  {
    icon: Wrench,
    title: 'Custom Job Work',
    description: 'Tailored OEM Solutions'
  }
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={prefersReducedMotion ? undefined : fadeInBottom} {...hoverGlow}>
              <Card className="h-full text-center bg-card border-border hover:border-primary/30 transition-colors py-10">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold uppercase italic tracking-tight mb-2">{industry.title}</CardTitle>
                  <CardDescription className="font-bold text-primary/70 text-xs uppercase tracking-widest">{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
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
