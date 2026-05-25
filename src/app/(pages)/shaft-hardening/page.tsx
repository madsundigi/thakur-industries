
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
  title: 'Shaft Hardening Services in Ludhiana, Punjab',
  description: 'Shaft, crankshaft, camshaft & drive shaft hardening job work in Ludhiana & Punjab industries.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Shaft Hardening",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Thakur Industries",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ludhiana",
      "addressRegion": "Punjab",
      "addressCountry": "India"
    }
  },
  "areaServed": ["Ludhiana", "Punjab"],
  "description": "Shaft, crankshaft, camshaft, and drive shaft hardening job work in Ludhiana & Punjab industries."
};

const shaftTypes = [
    { icon: Cpu, title: "Crankshafts", description: "Journal and fillet hardening for smooth power transmission." },
    { icon: Zap, title: "Camshafts", description: "Lobe and journal hardening for wear resistance." },
    { icon: ArrowRight, title: "Drive Shafts", description: "Surface hardening for torque-bearing components." },
    { icon: ShieldCheck, title: "Transmission Shafts", description: "Precision control for uniform case depth." }
];

const processSteps = [
    { title: "Pre-Cleaning", description: "Removing surface impurities to ensure uniform heating." },
    { title: "Induction Heating", description: "Controlled electromagnetic heating of the shaft surface." },
    { title: "Quenching", description: "Polymer or water-based quenching for case hardening." },
    { title: "Tempering & Inspection", description: "Relieves stress and ensures uniform hardness." }
];

const materials = ['EN8', 'EN19', 'EN24', '4140', '4340', 'Tool Steel'];

const benefits = [
    { icon: ShieldCheck, title: "Increased Wear Resistance", description: "Maximizes the operational life of rotating components." },
    { icon: CheckCircle, title: "Enhanced Torsional Strength", description: "Improves shaft's ability to withstand twisting forces." },
    { icon: Zap, title: "Minimal Distortion", description: "Localized heating reduces warping compared to furnace methods." },
    { icon: Cpu, title: "Long-Lasting Fatigue Resistance", description: "Increases durability against cyclical loads." },
];

export default function ShaftHardeningPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'appShaftHardening');
    const processImage = PlaceHolderImages.find(img => img.id === 'serviceCrossSection');
    const qualityImage = PlaceHolderImages.find(img => img.id === 'processFinishing');
    const quenchingImage = PlaceHolderImages.find(img => img.id === 'processQuenching');

    return (
        <>
            <JsonLd data={serviceSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Shaft Induction Hardening Process"
                            data-ai-hint="shaft hardening"
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
                            <span>Shaft Hardening</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Shaft Induction Hardening in Ludhiana, Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                             Precision induction hardening services for shafts, crankshafts, camshafts, and drive shafts — trusted by industries across Punjab.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Request a Free Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/gear-hardening">Explore Gear Hardening</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What is Shaft Hardening Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div>
                            <h2 className="text-3xl font-bold mb-4">Precision Heat Treatment for Shafts & Automotive Components</h2>
                            <p className="text-muted-foreground text-lg">Shaft hardening is a surface heat treatment process used to increase wear resistance, fatigue strength, and load capacity of rotating shafts. Through induction heating and controlled quenching, the outer layer of the shaft becomes hard while the core remains tough and ductile — ensuring durability under high mechanical stress.</p>
                        </div>
                        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                            {processImage && (
                                <Image
                                    src={processImage.imageUrl}
                                    alt="Cross-section of a hardened shaft"
                                    data-ai-hint={processImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>
                </section>
                
                {/* Types of Shafts Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Crankshaft, Camshaft, and Drive Shaft Hardening in Punjab"
                            description="We serve both OEMs and industrial workshops across Ludhiana and Punjab with batch or single job hardening services."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {shaftTypes.map(item => (
                                <Card key={item.title}>
                                    <CardHeader className="items-center text-center">
                                        <item.icon className="h-10 w-10 text-primary mb-2" />
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                             <Button asChild variant="link">
                                <Link href="/component-hardening">Explore Component Hardening <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 md:py-24">
                     <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Controlled Induction Hardening Process for Shafts"
                            description="Our programmable induction machines ensure precise heat zones and repeatable hardening depth, customized for each shaft type."
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
                    </div>
                </section>

                {/* Materials Section */}
                 <section className="py-20 md:py-28 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Alloy & Carbon Steels for Shaft Hardening
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            We specialize in shaft induction hardening for all standard steels used in mechanical and automotive applications. Material-specific heating and quenching parameters ensure maximum strength with minimum distortion.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {materials.map((material) => (
                                <div key={material} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                                    {material}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Why Choose Thakur Industries for Shaft Hardening?"
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
                        <div className="text-center mt-12">
                             <Button asChild>
                                <Link href="/contact">Request Shaft Hardening Job Work</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Testimonials />
                <CTASection />
            </div>
        </>
    );
}
