
'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const processSteps = [
  {
    step: '01',
    title: 'Preparation & Inspection',
    description: 'Each component undergoes rigorous cleaning and pre-heating. We inspect every detail to ensure it meets our strict quality standards before the hardening process begins.',
    tag: 'Discovery',
    imageId: 'processPreparation',
  },
  {
    step: '02',
    title: 'Induction Hardening',
    description: 'Using state-of-the-art technology, we apply a precise magnetic field to heat the component. This is followed by rapid quenching to create a hardened surface layer with exceptional wear resistance.',
    tag: 'Development',
    imageId: 'processHardening',
  },
  {
    step: '03',
    title: 'Finishing & Quality Assurance',
    description: 'The hardened component is tested for case depth, hardness, and structural integrity. Our quality assurance guarantees every part exceeds client specifications before delivery.',
    tag: 'Launch',
    imageId: 'processFinishing',
  },
];

const ANIMATION_DURATION = 5; // seconds

export function ProgressCards() {
  const [activeCard, setActiveCard] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % processSteps.length);
    }, ANIMATION_DURATION * 1000);

    return () => clearInterval(interval);
  }, [isDesktop]);
  
  const stepsWithImages = useMemo(() => {
      return processSteps.map(step => ({
          ...step,
          image: PlaceHolderImages.find(img => img.id === step.imageId),
      }));
  }, []);

  if (!isDesktop) {
    return (
      <div className="space-y-8">
        {stepsWithImages.map((step) => (
          <div key={step.step} className="bg-card border rounded-lg p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{step.tag}</span>
                <span className="text-5xl font-bold text-muted-foreground/20">{step.step}</span>
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {step.image && (
                <div className="relative aspect-video mt-2 overflow-hidden rounded-md">
                    <Image src={step.image.imageUrl} alt={step.title} data-ai-hint={step.image.imageHint} fill className="object-cover"/>
                </div>
              )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-8 items-start">
      <div className="relative w-8 h-[500px] bg-muted rounded-full overflow-hidden">
        <motion.div
          key={activeCard}
          className="absolute top-0 left-0 w-full bg-primary"
          initial={{ height: '0%' }}
          animate={{ height: '100%' }}
          transition={{ duration: ANIMATION_DURATION, ease: 'linear' }}
        />
      </div>
      <div className="flex-1 space-y-4">
        {stepsWithImages.map((step, index) => (
          <motion.div
            key={step.step}
            className={cn(
              "bg-card border rounded-lg p-6 overflow-hidden cursor-pointer",
              activeCard !== index && "text-muted-foreground"
            )}
            onClick={() => setActiveCard(index)}
            initial={false}
            animate={{ height: activeCard === index ? 'auto' : 60 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between">
              <div className='flex items-center gap-4'>
                <span className="text-5xl font-bold text-muted-foreground/20">{step.step}</span>
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>
              <span className="text-sm font-semibold text-primary hidden md:block">{step.tag}</span>
            </div>
            <AnimatePresence>
                {activeCard === index && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <p className="md:col-span-2 text-muted-foreground">{step.description}</p>
                        {step.image && (
                            <div className="relative aspect-video overflow-hidden rounded-md">
                                <Image src={step.image.imageUrl} alt={step.title} data-ai-hint={step.image.imageHint} fill className="object-cover"/>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

    