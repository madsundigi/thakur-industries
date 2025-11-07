'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CTA_PRIMARY, CTA_SECONDARY } from '@/lib/constants';
import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
  const headline = "Precision Induction Heat Treatment & Case Hardening — Ludhiana";
  const words = headline.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/3252033/3252033-hd_1920_1080_25fps.mp4"
          poster="https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxpbmR1c3RyaWFsJTIwbWFjaGluZXxlbnwwfHx8fDE3NjI0MjQ0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 md:mr-4"
                variants={child}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Your Durability is Our Responsibility. Leading provider of induction hardening and steel hardening services in Ludhiana for clients across India.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">
                {CTA_PRIMARY}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/contact">
                {CTA_SECONDARY}
                <Phone className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
