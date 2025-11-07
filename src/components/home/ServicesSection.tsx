'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <PageHeader 
            title="Our Core Heat Treatment Services"
            description="We deliver a comprehensive range of industrial heat treatment services in Ludhiana, ensuring optimal material properties for any application."
            className="text-center mb-16"
        />

        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((service) => {
            const image = PlaceHolderImages.find(img => img.id === service.image);
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={`/services#${service.id}`} className="group block">
                  <Card className="bg-secondary border-white/10 h-full flex flex-col md:flex-row items-center gap-6 p-6 transition-all duration-300 hover:bg-primary/10 hover:border-primary">
                    {image && (
                      <div className="relative h-48 w-full md:h-32 md:w-32 flex-shrink-0">
                         <Image
                            src={image.imageUrl}
                            alt={`Image for ${service.title} in Ludhiana`}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover rounded-md"
                         />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 mt-2">
                        <p className="text-muted-foreground">{service.description}</p>
                        <div className="text-primary mt-4 flex items-center font-semibold transition-transform duration-300 group-hover:translate-x-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </div>
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
