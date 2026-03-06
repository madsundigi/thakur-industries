
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Cpu, Gem, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { motion } from 'framer-motion';

const processSteps = [
    { step: "01", title: "Inspection", description: "Analysis of material grade and tolerances to define precise parameters." },
    { step: "02", title: "Preparation", description: "Cleaning to ensure uniform heat absorption and prevent scale formation." },
    { step: "03", title: "Heating", description: "Targeted electromagnetic heating using custom coils to reach critical temps." },
    { step: "04", title: "Quenching", description: "Rapid, synchronized cooling in polymer or water media to lock hardness." },
    { step: "05", title: "Hardness Test", description: "Verification of surface hardness (HRC) using calibrated equipment." },
    { step: "06", title: "Final Check", description: "Quality check and dimensional validation for OEM compliance." }
];

const materials = ['EN8', 'EN19', 'EN24', '4140', '4340', 'Tool Steel', 'Mild Steel', 'Alloy Steels'];

const benefits = [
    { icon: ShieldCheck, title: "Wear Resistance", description: "Hard, durable surface that withstands intense friction." },
    { icon: Gem, title: "Core Ductility", description: "Core remains tough and shock-resistant, preventing fractures." },
    { icon: Zap, title: "Fast & Precise", description: "Rapid localized heating minimizes energy waste and distortion." },
    { icon: Cpu, title: "Digital Control", description: "PLC-monitored cycles ensure identical results for every batch." },
];

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function InductionHardeningPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'serviceInductionHardening');

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <PageHeader
                    title="Induction"
                    highlightedWord="Hardening"
                    description="Precision induction heat treatment services for EN8, EN19, EN24, 4140 & 4340 steel components."
                    className="text-center"
                />

                <section className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                         >
                            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                                What Is <span className="text-primary">Induction</span> Hardening?
                            </h2>
                            <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-6">
                                Induction hardening is a <strong>localized surface hardening</strong> technique that uses electromagnetic induction to strengthen metal components. By rapidly heating the outer layer and immediately quenching it, we create a martensitic structure that is extremely hard while leaving the core ductile and tough.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Gears & Pinions", "Drive Shafts", "Axles & Rollers", "Camshafts"].map(item => (
                                    <div key={item} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        <span className="font-bold text-foreground uppercase tracking-tight text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            className="relative h-96 w-full overflow-hidden rounded-3xl shadow-2xl border border-primary/20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt="Induction hardening process"
                                    fill
                                    className="object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </motion.div>
                    </div>
                </section>
                
                <section className="py-24 bg-secondary/20 rounded-3xl px-8 md:px-16 border border-primary/10 my-24">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInBottom}
                    >
                        Our Process <span className="text-primary">Workflow</span>
                    </motion.h2>
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {processSteps.map(step => (
                            <motion.div key={step.step} variants={fadeInBottom} className="bg-card/50 p-8 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                                <div className="text-5xl font-black text-primary/20 mb-4 italic tracking-tighter group-hover:text-primary/40 transition-colors">{step.step}</div>
                                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-3">{step.title}</h3>
                                <p className="text-muted-foreground font-medium">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section className="py-24">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {benefits.map(benefit => (
                            <motion.div key={benefit.title} variants={fadeInBottom} className="text-center p-8 border rounded-2xl bg-secondary/30 group hover:border-primary/50 transition-all">
                                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <benefit.icon className="h-7 w-7 text-primary group-hover:text-inherit" />
                                </div>
                                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                 <section className="py-24 border-t border-border">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h2 
                            className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-foreground mb-8"
                            variants={fadeInBottom}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Heat Treatment for <span className="text-primary">Alloy Steels</span>
                        </motion.h2>
                        <p className="text-xl text-muted-foreground font-medium mb-12">
                            {SITE_NAME} specializes in induction hardening job work for all major steel grades used in manufacturing.
                        </p>
                        <motion.div 
                            className="flex flex-wrap justify-center gap-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {materials.map((material) => (
                                <motion.div key={material} variants={fadeInBottom} className="bg-secondary text-foreground border border-border rounded-xl px-8 py-4 text-sm font-black uppercase italic tracking-tighter shadow-sm">
                                    {material}
                                </motion.div>
                            ))}
                        </motion.div>
                        <div className="mt-16">
                            <Button asChild size="lg" className="bg-primary text-primary-foreground font-black uppercase italic tracking-tight py-8 px-12 text-xl">
                                <Link href="/contact">Contact for Bulk Job Work</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Testimonials />
                <CTASection />
            </div>
        </div>
    );
}
