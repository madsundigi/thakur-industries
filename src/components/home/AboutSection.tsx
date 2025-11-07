'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'aboutTimeline');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={fadeIn}>
            {aboutImage && (
             <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <Image
                    src={aboutImage.imageUrl}
                    alt="Thakur Industries factory floor"
                    data-ai-hint={aboutImage.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            )}
          </motion.div>

          <motion.div variants={fadeIn}>
            <PageHeader
              title="Decades of Industrial Excellence"
              description="Founded on the principles of precision, reliability, and innovation, Thakur Industries has grown to become Ludhiana's most trusted partner in industrial heat treatment."
            />
            <p className="mt-6 text-lg text-muted-foreground">
              Our state-of-the-art facility, combined with a team of seasoned experts, allows us to tackle the most complex challenges and deliver results that exceed expectations. We are committed to continuous improvement and investment in the latest technology.
            </p>
            <Button asChild className="mt-10" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
