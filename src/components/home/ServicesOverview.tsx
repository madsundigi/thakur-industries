
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ServicesOverview() {
    
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
        >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Induction Hardening & Case Hardening Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We provide a range of specialized heat treatment job work solutions to enhance the strength, durability, and performance of your metal components.
            </p>
        </motion.div>

        <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
        >
          {SERVICES.slice(0, 3).map((service) => {
            const image = PlaceHolderImages.find(img => img.id === service.image);
            return (
              <motion.div key={service.id} variants={fadeIn}>
                <Link href={service.href || `/services#${service.id}`} className="block group">
                  <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    {image && (
                      <div className="relative h-48 w-full">
                          <Image
                              src={image.imageUrl}
                              alt={service.title}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                          />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
                      <div className="text-primary font-semibold text-sm mt-4 flex items-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
