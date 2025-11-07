
'use client';

import { motion, useAnimation, useMotionValue, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useMemo, useState } from 'react';

export function OrbitingServices() {
    const orbitRadius = 300;
    const itemSize = 150;
    const animationDuration = 40;

    const servicesWithImages = useMemo(() => {
        return SERVICES.map(service => ({
            ...service,
            image: PlaceHolderImages.find(img => img.id === service.image),
        }));
    }, []);

    const [activeServiceTitle, setActiveServiceTitle] = useState(servicesWithImages[0]?.title || '');
    const rotation = useMotionValue(0);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            rotate: 360,
            transition: {
                duration: animationDuration,
                ease: 'linear',
                repeat: Infinity,
            },
        });
        return () => controls.stop();
    }, [controls, animationDuration]);

    useMotionValueEvent(rotation, "change", (latest) => {
        const numServices = servicesWithImages.length;
        const anglePerService = 360 / numServices;
        const normalizedRotation = (latest + 90) % 360; 
        const activeIndex = Math.floor(normalizedRotation / anglePerService);
        
        const currentActiveIndex = (numServices - 1 - activeIndex + numServices) % numServices;

        if (servicesWithImages[currentActiveIndex]) {
            setActiveServiceTitle(servicesWithImages[currentActiveIndex].title);
        }
    });

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
                    <div className="absolute z-10 w-48 h-48 rounded-full border-2 border-primary/20 bg-secondary flex flex-col items-center justify-center p-4 gap-2 shadow-2xl text-center">
                         <AnimatePresence mode="wait">
                            <motion.p
                                key={activeServiceTitle}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="font-bold text-primary text-base"
                            >
                                {activeServiceTitle}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        className="absolute w-full h-full"
                        style={{ rotate: rotation }}
                        animate={controls}
                    >
                        {servicesWithImages.map((service, index) => {
                            const angle = (index / servicesWithImages.length) * 2 * Math.PI;
                            const x = Math.cos(angle) * orbitRadius;
                            const y = Math.sin(angle) * orbitRadius;

                            return (
                                <motion.div
                                    key={service.id}
                                    className="absolute"
                                    style={{
                                        left: `calc(50% - ${itemSize / 2}px)`,
                                        top: `calc(50% - ${itemSize / 2}px)`,
                                        transform: `translate(${x}px, ${y}px)`,
                                    }}
                                >
                                    <motion.div style={{ rotate: -rotation.get() }}>
                                        <Link
                                            href={`/services#${service.id}`}
                                            className="flex flex-col items-center gap-2 group"
                                        >
                                            <div
                                                className="relative rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300"
                                                style={{ width: itemSize, height: itemSize }}
                                            >
                                                {service.image && (
                                                    <Image
                                                        src={service.image.imageUrl}
                                                        alt={service.title}
                                                        data-ai-hint={service.image.imageHint}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                )}
                                            </div>
                                            <span className="text-white text-center font-bold text-sm p-2">
                                                {service.title}
                                            </span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
