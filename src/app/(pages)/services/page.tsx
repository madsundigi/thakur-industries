
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SERVICES, SITE_NAME, SITE_PHONE_NUMBER, CTA_PRIMARY, INDUSTRIES } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight, HardHat, Zap, Award, Gauge, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JsonLd } from '@/components/shared/JsonLd';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { ProgressCards } from '@/components/services/ProgressCards';
import { motion } from 'framer-motion';

const benefits = [
    { icon: Zap, title: "Precision & Consistency", description: "Achieve uniform hardness and case depth with our advanced induction hardening process." },
    { icon: Gauge, title: "Faster Turnaround", description: "Our efficient job work ensures your production timelines are met without compromising quality." },
    { icon: HardHat, title: "Enhanced Durability", description: "Significantly increase wear resistance and fatigue life of your critical mechanical parts." },
    { icon: Award, title: "ISO 9001 Certified", description: "As a leading company in Punjab, our commitment to quality is validated globally." },
];

const faqs = [
  {
    question: "What is induction heat treatment?",
    answer: "Induction heat treatment is a process used to harden the surface of steel and other alloy components. It uses electromagnetic induction to heat a targeted area, which is then rapidly cooled (quenched)."
  },
  {
    question: "What is the difference between induction hardening and case hardening?",
    answer: "Induction hardening is a type of case hardening. Induction hardening uses electromagnetic currents for precise control, while other methods like carburizing involve chemical diffusion."
  },
  {
    question: "Which components can be hardened using induction heating?",
    answer: "A wide variety of components can be treated, especially gears, shafts, axles, spindles, cams, and automotive components requiring localized hardness."
  }
];

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <PageHeader
                title="Industrial Heat"
                highlightedWord="Treatment"
                description="As a premier heat treatment company in Punjab, we specialize in enhancing the strength and durability of critical industrial components."
                className="text-center"
            />

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {benefits.map(benefit => (
                    <motion.div key={benefit.title} variants={fadeInBottom} className="text-center p-10 border rounded-2xl bg-secondary/30 hover:border-primary/50 transition-all group">
                        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <benefit.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">{benefit.title}</h3>
                        <p className="text-muted-foreground font-medium">{benefit.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            <section className="py-24 border-t border-border">
                <motion.h2 
                    className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter"
                    variants={fadeInBottom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our Core <span className="text-primary">Capabilities</span>
                </motion.h2>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {SERVICES.map((service) => {
                        const image = PlaceHolderImages.find(img => img.id === service.image);
                        return (
                        <motion.div key={service.id} variants={fadeInBottom} whileHover={{ y: -10 }}>
                            <Card className="flex flex-col overflow-hidden bg-card/50 border-border hover:border-primary/30 transition-all duration-300 h-full group">
                                {image && (
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={image.imageUrl}
                                        alt={service.title}
                                        data-ai-hint={image.imageHint}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl font-black uppercase italic tracking-tighter group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <p className="text-muted-foreground text-lg mb-8">{service.shortDescription}</p>
                                    <Button asChild variant="link" className="p-0 h-auto justify-start mt-auto text-primary font-black uppercase tracking-widest">
                                        <Link href={service.href} className="flex items-center gap-2">
                                            Explore Service <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            <section className="py-24 bg-secondary/20 rounded-3xl p-8 md:p-16 border border-primary/10">
                <motion.h2 
                    className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter"
                    variants={fadeInBottom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    The Hardening <span className="text-primary">Process</span>
                </motion.h2>
                <ProgressCards />
            </section>

            <Testimonials />

            <section className="py-24">
                <div className="max-w-4xl mx-auto">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-black text-center mb-16 uppercase italic tracking-tighter"
                        variants={fadeInBottom}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Service <span className="text-primary">FAQs</span>
                    </motion.h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl bg-secondary/30 px-8">
                                <AccordionTrigger className="text-left text-xl font-bold uppercase italic tracking-tight hover:text-primary transition-colors py-8 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-lg text-muted-foreground pb-8 leading-relaxed font-medium">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
        <CTASection />
    </div>
  );
}
