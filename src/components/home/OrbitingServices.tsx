
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useMemo } from 'react';

// Icons for the center
import { Zap, HardHat, Settings, TestTube } from 'lucide-react';

const icons = [
    <Zap key="zap" className="w-8 h-8 text-primary" />,
    <HardHat key="hardhat" className="w-8 h-8 text-primary" />,
    <Settings key="settings" className="w-8 h-8 text-primary" />,
    <TestTube key="testtube" className="w-8 h-8 text-primary" />,
];

export function OrbitingServices() {
    const orbitRadius = 300; // Diameter would be 600
    const itemSize = 150; // Width/Height of the orbiting items

    const servicesWithImages = useMemo(() => {
        return SERVICES.map(service => ({
            ...service,
            image: PlaceHolderImages.find(img => img.id === service.image),
        }));
    }, []);

    return (
        <section className="relative py-24 md:py-48 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-4">
                    Our Core Heat Treatment Services
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl mb-24">
                    Precision, durability, and custom solutions for every industrial need.
                </p>

                <div className="relative flex items-center justify-center" style={{ height: `${orbitRadius * 2}px` }}>
                    {/* Central decorative element */}
                     <div className="absolute z-10 w-48 h-48 rounded-full border-2 border-primary/20 bg-secondary flex flex-wrap items-center justify-center p-4 gap-4 shadow-2xl">
                        {icons.map((icon, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + 1, type: 'spring' }}
                            >
                                {icon}
                            </motion.div>
                        ))}
                    </div>


                    {/* Orbiting items */}
                    <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 40, // Animation speed
                            ease: 'linear',
                            repeat: Infinity, // Repeat type
                        }}
                    >
                        {servicesWithImages.map((service, index) => {
                            const angle = (index / servicesWithImages.length) * 2 * Math.PI;
                            const x = Math.cos(angle) * orbitRadius;
                            const y = Math.sin(angle) * orbitRadius;

                            return (
                                <Link
                                    href={`/services#${service.id}`}
                                    key={service.id}
                                    className="absolute"
                                    style={{
                                        left: `calc(50% - ${itemSize / 2}px)`,
                                        top: `calc(50% - ${itemSize / 2}px)`,
                                        transform: `translate(${x}px, ${y}px)`,
                                    }}
                                >
                                    <motion.div
                                        className="flex flex-col items-center gap-2 group"
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: 40,
                                            ease: 'linear',
                                            repeat: Infinity,
                                        }}
                                    >
                                        <div
                                            className="relative rounded-lg overflow-hidden"
                                            style={{ width: itemSize, height: itemSize }}
                                        >
                                            {service.image && (
                                                <Image
                                                    src={service.image.imageUrl}
                                                    alt={service.title}
                                                    data-ai-hint={service.image.imageHint}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            </div>
                                        </div>
                                         <span className="text-white text-center font-bold text-sm p-2">
                                            {service.title}
                                        </span>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
