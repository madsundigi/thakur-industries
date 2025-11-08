
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProcessSection() {
    const quenchingImage = PlaceHolderImages.find(p => p.id === 'processHardening');

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                {quenchingImage && (
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src={quenchingImage.imageUrl}
                            alt="Induction hardening with polymer and water quenching"
                            data-ai-hint={quenchingImage.imageHint}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                )}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Advanced Induction Technology with Polymer & Water Quenching
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                    Our state-of-the-art induction hardening technology utilizes both polymer and water-based quenching methods. This dual capability allows us to precisely control the cooling rate, ensuring optimal hardness and case depth while minimizing distortion for a wide variety of steel grades.
                </p>
                <ul className="mt-6 space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Controlled Temperature & Repeatable Results
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Reduced Part Distortion
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Enhanced Surface Strength & Durability
                    </li>
                </ul>
                <Button asChild className="mt-8" size="lg">
                    <Link href="/services#process">Explore Our Process</Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
