'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { INDUSTRIES } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PageHeader from '../shared/PageHeader';

const CYLINDER_RADIUS = 400; // Increased radius
const ROTATION_SPEED = 0.05;
const DRAG_FACTOR = 0.1; 

export function IndustriesSlideshow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rotationY = useMotionValue(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const industriesWithImages = INDUSTRIES.map(industry => ({
        ...industry,
        image: PlaceHolderImages.find(img => img.id === industry.image),
    }));

    const anglePerItem = 360 / industriesWithImages.length;

    useEffect(() => {
        if (!isMounted) return;

        let animationFrameId: number;

        const animate = () => {
            rotationY.set(rotationY.get() + ROTATION_SPEED);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [rotationY, isMounted]);
    
    if (!isMounted) {
        return null; 
    }

    return (
        <section className="py-24 md:py-32 bg-secondary overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <PageHeader
                    title="Industries We Serve"
                    description="Our precision processes are trusted by leaders in demanding industries for everything from automotive heat treatment to aerospace part hardening."
                    className="text-center mb-36"
                />
                <motion.div
                    ref={containerRef}
                    className="relative w-full h-[300px] cursor-grab active:cursor-grabbing"
                    style={{ perspective: '2000px' }} // Adjusted perspective
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDrag={(event, info) => {
                        rotationY.set(rotationY.get() + info.offset.x * DRAG_FACTOR);
                    }}
                >
                    <motion.div
                        className="w-full h-full"
                        style={{
                            transformStyle: 'preserve-3d',
                            rotateY: rotationY,
                        }}
                    >
                        {industriesWithImages.map((industry, i) => {
                            if (!industry.image) return null;

                            const itemAngle = anglePerItem * i;
                            
                            return (
                                <CylinderItem 
                                    key={industry.id}
                                    industry={industry}
                                    itemAngle={itemAngle}
                                    rotationY={rotationY}
                                    radius={CYLINDER_RADIUS}
                                />
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}


function CylinderItem({ industry, itemAngle, rotationY, radius }: { industry: any, itemAngle: number, rotationY: any, radius: number }) {
    const z = Math.cos(Math.PI / 180 * itemAngle) * radius;
    const x = Math.sin(Math.PI / 180 * itemAngle) * radius;

    const opacity = useTransform(rotationY, (value) => {
        const itemRotation = (value + itemAngle) % 360;
        const normalizedRotation = Math.abs(itemRotation > 180 ? itemRotation - 360 : itemRotation);
        return 1 - Math.min(normalizedRotation / 90, 1) * 0.8;
    });

    const titleOpacity = useTransform(rotationY, (value) => {
        const itemRotation = (value + itemAngle) % 360;
        const normalizedRotation = Math.abs(itemRotation > 180 ? itemRotation - 360 : itemRotation);
        return 1 - Math.min(normalizedRotation / 20, 1);
    });

    return (
        <motion.div
            className="absolute top-0 left-1/2 w-[180px] h-[210px] -ml-[90px]"
            style={{
                transform: `translateX(${x}px) translateZ(${z}px) rotateY(${itemAngle}deg)`,
            }}
        >
            <motion.div 
                className="relative w-full h-full rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl group"
                style={{ opacity }}
            >
                <Image
                    src={industry.image.imageUrl}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    data-ai-hint={industry.image.imageHint}
                />
                <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm"
                    style={{ opacity: titleOpacity }}
                >
                    <h3 className="text-white font-bold text-base">{industry.title}</h3>
                </motion.div>
            </motion.div>
            {/* Mirror Reflection Effect */}
            <div 
                className="absolute top-full left-0 right-0 h-1/2 w-full origin-top"
                style={{
                    background: `linear-gradient(to bottom, rgba(30,30,30,0.2), transparent)`,
                    transform: 'scaleY(-1)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                }}
            >
                <motion.div 
                    className="relative w-full h-full brightness-50 blur-sm"
                    style={{ opacity }}
                >
                    <Image
                        src={industry.image.imageUrl}
                        alt=""
                        fill
                        className="object-cover"
                        aria-hidden="true"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}