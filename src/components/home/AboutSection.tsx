
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Factory, Award } from 'lucide-react';
import Link from 'next/link';

const stats = [
    {
      icon: Award,
      text: '18+ Years of Experience',
      desc: 'Delivering excellence in heat treatment since 2005.'
    },
    {
      icon: Factory,
      text: 'ISO-Certified Process',
      desc: 'Ensuring consistent quality and precision in every job.'
    },
    {
      icon: Check,
      text: '1000+ Components Treated Monthly',
      desc: 'Trusted by leading manufacturers for high-volume work.'
    }
];

export function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
        >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted Heat Treatment Experts in Punjab
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              With a legacy of precision and reliability, we are the trusted partner for leading industrial and automotive companies in Ludhiana and beyond.
            </p>
        </motion.div>
        
        <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm"
              variants={fadeIn}
            >
              <stat.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground">{stat.text}</h3>
              <p className="mt-2 text-muted-foreground">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Button asChild className="mt-12" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
