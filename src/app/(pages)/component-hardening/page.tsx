
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap, ShieldCheck, Cpu } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Component Hardening Services in Ludhiana, Punjab',
  description: 'Induction hardening job work for gears, shafts, pinions, and industrial parts in Ludhiana & Punjab.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Component Hardening",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Thakur Industries",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ludhiana",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    }
  },
  "areaServed": ["Ludhiana", "Punjab"],
  "description": "Induction hardening job work for gears, shafts, axles, and pinions in Ludhiana & Punjab."
};

const components = [
    { icon: Zap, title: 'Gears', description: 'Tooth-by-tooth hardening for improved wear life.' },
    { icon: ShieldCheck, title: 'Shafts', description: 'Uniform hardening for torque and fatigue strength.' },
    { icon: Cpu, title: 'Crankshafts', description: 'Localized journal and fillet hardening for durability.' },
    { icon: ArrowRight, title: 'Axles', description: 'Increased toughness and surface integrity.' },
];

const processSteps = [
    { title: "Preparation & Cleaning", description: "Surface preparation for consistent heating." },
    { title: "Induction Heating", description: "Rapid, controlled heating to the transformation temperature." },
    { title: "Quenching", description: "Polymer or water quenching ensures uniform hardness." },
    { title: "Tempering & Testing", description: "Ensures toughness, wear resistance, and dimensional accuracy." }
];

const materials = ['EN8', 'EN19', 'EN24', '4140', '4340', 'Tool Steel', 'Alloy Steel'];

const benefits = [
    { icon: ShieldCheck, title: "Enhanced Wear Resistance", description: "Increases component lifespan and performance under stress." },
    { icon: CheckCircle, title: "Increased Fatigue Strength", description: "Improves durability against cyclical loads and torsion." },
    { icon: Zap, title: "Minimal Distortion", description: "Localized heat reduces warping compared to other methods." },
    { icon: Cpu, title: "Localized Hardening", description: "Hardens only specific, critical areas of the component." },
];

export default function ComponentHardeningPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'serviceInductionHardening');

    return (
        <>
            <JsonLd data={serviceSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Component Hardening: Gears, Shafts, Axles"
                            data-ai-hint="hardened gears shafts"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                    )}
                    <div className="container mx-auto px-4 md:px-6 z-10 relative">
                        <div className="text-sm text-muted-foreground mb-4">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <ChevronRight className="inline-block w-4 h-4 mx-1" />
                            <Link href="/services" className="hover:text-primary">Services</Link>
                            <ChevronRight className="inline-block w-4 h-4 mx-1" />
                            <span>Component Hardening</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Component Hardening Job Work in Ludhiana, Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Precision induction hardening for gears, shafts, pinions, axles, and other steel components across Punjab.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/gear-hardening">Explore Gear Hardening</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What is Component Hardening Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Precision Induction Hardening for Industrial Components</h2>
                        <p className="text-muted-foreground text-lg">Component hardening is a localized induction heat treatment process applied to mechanical parts like gears, shafts, axles, and crankshafts to improve surface hardness, wear resistance, and load-bearing strength. At {SITE_NAME}, we use advanced induction systems to treat each component with precision, ensuring consistent results across every job.</p>
                    </div>
                </section>

                {/* Types of Components Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Shafts, Gears, Axles, Pinions | Industrial Induction Hardening"
                            description="We handle single-piece, batch, and job work orders for industrial clients across Punjab and Haryana."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {components.map(component => (
                                <Card key={component.title}>
                                    <CardHeader className="items-center text-center">
                                        <component.icon className="h-10 w-10 text-primary mb-2" />
                                        <CardTitle>{component.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-muted-foreground text-sm">{component.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 md:py-24">
                     <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Step-by-Step Induction Hardening Process"
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            {processSteps.map((step, index) => (
                                <div key={step.title} className="flex flex-col items-center">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">{index + 1}</div>
                                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                             <Button asChild variant="link">
                                <Link href="/material-heat-treatment">Learn about our Material Heat Treatment Process <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                 {/* Benefits Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Why Choose Induction Hardening for Components?"
                            description="Ideal for gears, shafts, crankshafts, and other precision components requiring hardness and reliability."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map(benefit => (
                                <Card key={benefit.title} className="text-center">
                                    <CardHeader>
                                        <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <Testimonials />
                <CTASection />
            </div>
        </>
    );
}
