
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cog, Tractor, Wrench, Car } from 'lucide-react';
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
    title: 'Custom Job Work for OEMs',
    description: 'Tailored OEM Solutions'
  }
];

export function IndustriesServed() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proudly Serving Punjab’s Industrial Sectors
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We deliver precision heat treatment solutions for a wide range of critical industries, enhancing performance and durability where it matters most.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={prefersReducedMotion ? undefined : itemVariants}>
              <Card className="h-full text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <industry.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
            className="text-center mt-12"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <Button asChild size="lg">
                <Link href="/industries">Explore All Industries</Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
