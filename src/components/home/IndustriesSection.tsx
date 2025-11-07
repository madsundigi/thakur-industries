'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { INDUSTRIES } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';

export function IndustriesSection() {
    const industryImage = PlaceHolderImages.find(img => img.id === 'industryAutomotive');
    
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section className="py-24 md:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div 
                    className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.div className="order-2 lg:order-1" variants={fadeIn}>
                        <PageHeader
                            title="Industries We Serve"
                            description="From automotive heat treatment in Ludhiana to aerospace part hardening for India, our precision processes are trusted by leaders in demanding industries."
                        />

                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {INDUSTRIES.map((industry) => (
                                <li key={industry.id} className="flex items-center gap-3 text-lg">
                                    <CheckCircle className="h-6 w-6 text-primary" />
                                    <span className="font-medium">{industry.title}</span>
                                </li>
                            ))}
                        </ul>

                        <Button asChild className="mt-10" size="lg">
                            <Link href="/industries">Explore Our Industry Solutions</Link>
                        </Button>
                    </motion.div>

                    <motion.div className="order-1 lg:order-2" variants={fadeIn}>
                      {industryImage && (
                        <div className="relative aspect-square overflow-hidden rounded-lg shadow-2xl">
                            <Image
                                src={industryImage.imageUrl}
                                alt="Automotive component hardening at our factory"
                                data-ai-hint={industryImage.imageHint}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                      )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
