
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Car, Tractor, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { CTASection } from '@/components/home/CTASection';
import { Button } from '@/components/ui/button';

const industries = [
    {
        icon: Car,
        title: "Automotive Parts",
        highlight: "Heat Treatment",
        description: "Automotive manufacturers across Ludhiana rely on us for precision hardening of gears, shafts, axles, and crankshafts.",
        components: ["Gears & Pinions", "Drive Shafts & Camshafts", "Axles & Bearings", "Differential Parts"],
        benefits: ["High fatigue resistance", "Improved torque strength", "Zero distortion", "OEM repeatability"],
        link: "/component-hardening",
        image: "industryAutomotive"
    },
    {
        icon: Tractor,
        title: "Tractor & Agriculture",
        highlight: "Implements",
        description: "Punjab’s agricultural industry depends on reliable components that can survive continuous stress and field loads.",
        components: ["PTO Shafts", "Rotavator Gears", "Axle Shafts", "Clutch Hubs"],
        benefits: ["Increased field life", "Abrasion resistance", "Impact toughness", "High-torque capacity"],
        link: "/material-heat-treatment",
        image: "industryAgriculture"
    },
    {
        icon: HardHat,
        title: "Industrial Machinery",
        highlight: "Engineering",
        description: "We support machinery industries with custom heat treatment for heavy-duty components requiring consistent hardness.",
        components: ["Tool Spindles", "Rollers & Die Holders", "Machine Beds", "Precision Gears"],
        benefits: ["Structural stability", "Precision longevity", "Heavy-duty handling", "Defect-free finish"],
        link: "/surface-hardening",
        image: "industryMachineTool"
    }
];

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function IndustriesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <PageHeader
                    title="Industries We"
                    highlightedWord="Serve"
                    description={`Providing precision induction hardening & heat treatment for automotive, agricultural, and industrial components across Ludhiana and Punjab.`}
                    className="text-center"
                />

                <div className="space-y-32 py-24">
                    {industries.map((industry, index) => {
                        const image = PlaceHolderImages.find(img => img.id === industry.image);
                        const isReversed = index % 2 !== 0;
                        return (
                            <section key={industry.title} className="relative">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <motion.div 
                                        className={`relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl border border-primary/20 ${isReversed ? 'lg:order-last' : ''}`}
                                        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={industry.title}
                                                data-ai-hint={image.imageHint}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </motion.div>
                                    
                                    <motion.div 
                                        className={isReversed ? 'lg:order-first' : ''}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <industry.icon className="h-12 w-12 text-primary mb-6" />
                                        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-foreground mb-6 leading-none">
                                            {industry.title} <span className="text-primary block">{industry.highlight}</span>
                                        </h2>
                                        <p className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed">{industry.description}</p>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                            <div>
                                                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Components Treated</h3>
                                                <ul className="space-y-3">
                                                    {industry.components.map(component => (
                                                    <li key={component} className="flex items-center gap-3 text-foreground font-bold text-sm uppercase italic">
                                                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                                                        <span>{component}</span>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Core Benefits</h3>
                                                <ul className="space-y-3">
                                                    {industry.benefits.map(benefit => (
                                                    <li key={benefit} className="flex items-center gap-3 text-muted-foreground font-medium text-sm">
                                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <Button asChild size="lg" className="bg-primary text-primary-foreground font-black uppercase italic tracking-tight">
                                            <Link href={industry.link} className="flex items-center gap-2">
                                                Explore Applications <ArrowRight className="h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
            <CTASection />
        </div>
    );
}
