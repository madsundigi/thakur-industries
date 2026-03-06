
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
  title: 'Surface Hardening Job Work in Ludhiana, Punjab',
  description: 'Industrial surface hardening & induction heating job work for steel & alloy components in Punjab.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Surface Hardening",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Thakur Industries",
    "address": { "@type": "PostalAddress", "addressLocality": "Ludhiana", "addressRegion": "Punjab", "addressCountry": "India" }
  },
  "areaServed": ["Ludhiana", "Punjab"],
  "description": "Surface hardening job work for steel and alloy components in Ludhiana and Punjab."
};

const processSteps = [
    { title: "Induction Heating", description: "Targeted heating of the component surface using electromagnetic coils." },
    { title: "Quenching", description: "Immediate cooling using polymer or water-based quenching to form a hard surface layer." },
    { title: "Tempering", description: "Optional reheating for enhanced toughness and reduced brittleness." }
];

const benefits = [
    { icon: ShieldCheck, title: "Increases Wear Resistance", description: "Creates a hard, durable surface that withstands abrasion and friction." },
    { icon: Cpu, title: "Maintains Tough Core", description: "The core remains tough and less brittle, preventing fractures under impact." },
    { icon: Zap, title: "Localized Hardening", description: "Hardens only specific areas where needed, reducing distortion and saving energy." },
    { icon: CheckCircle, title: "Reduces Distortion", description: "Minimal distortion compared to through-hardening methods, preserving component geometry." },
];

const materials = ['EN8', 'EN19', 'EN24', '4140', '4340', 'Tool Steel'];
const components = ['Shafts', 'Gears', 'Axles', 'Rollers', 'Pins', 'Spindles'];
const applications = [
    { title: 'Shaft Hardening', imageId: 'appShaftHardening' },
    { title: 'Gear Tooth Hardening', imageId: 'appGearHardening' },
    { title: 'Bearing Journal Hardening', imageId: 'appBearingHardening' }
];

export default function SurfaceHardeningPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'serviceSurfaceHardening');
    const crossSectionImage = PlaceHolderImages.find(img => img.id === 'serviceCrossSection');
    
    return (
        <>
            <JsonLd data={serviceSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Surface Hardening Process"
                            data-ai-hint={heroImage.imageHint}
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
                            <span>Surface Hardening</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Surface Hardening Services in Ludhiana, Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Precision surface hardening and induction heating job work for steel, alloy, and industrial components across Punjab.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Get a Free Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/induction-hardening-services">Explore Induction Hardening</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What is Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div>
                            <h2 className="text-3xl font-bold mb-4">What Is Surface Hardening?</h2>
                            <p className="text-muted-foreground text-lg">Surface hardening is a heat treatment process designed to strengthen only the outer surface of steel or alloy components while retaining a tough, ductile core. This process improves wear resistance, fatigue strength, and longevity without affecting internal properties — making it ideal for shafts, gears, spindles, and pins used in heavy-duty machinery.</p>
                        </div>
                        {crossSectionImage && (
                            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                                <Image
                                    src={crossSectionImage.imageUrl}
                                    alt="Cross-section diagram showing hardened surface layer vs. soft core."
                                    data-ai-hint={crossSectionImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Precision Heat Treatment for Shafts, Gears, & Components"
                            description="Our localized surface hardening process ensures precise depth control, uniform hardness, and minimal distortion — essential for accuracy-driven components."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {processSteps.map((step, index) => (
                                <div key={step.title} className="bg-card p-6 rounded-lg border text-center">
                                    <div className="text-5xl font-bold text-primary/20 mb-3">0{index + 1}</div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                           <Button asChild variant="link">
                                <Link href="/quenching-process">Learn About Our Quenching Process <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>
                
                {/* Benefits Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                         <PageHeader
                            title="Why Choose Surface Hardening for Steel Components?"
                            description="Surface hardening is one of the most effective ways to enhance component life without compromising flexibility and strength."
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

                {/* Materials and Components Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Compatible Components & Steel Grades"
                            description={`We provide surface hardening job work for a wide range of components and materials, serving both OEMs and local manufacturers in Punjab.`}
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-center mb-6">Common Components</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {components.map((item) => (
                                        <div key={item} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-center mb-6">Material Grades</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {materials.map((item) => (
                                        <div key={item} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                         <div className="text-center mt-12">
                            <Button asChild>
                                <Link href="/induction-hardening-services">Explore Induction Hardening Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Localized Hardening Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Localized Surface Hardening for Precision Applications"
                            description={`Our localized surface hardening technology uses high-frequency induction heating to target only critical zones, ensuring optimal hardness where stress is highest. This method reduces energy consumption, improves metallurgical consistency, and allows flexibility in treating different geometries.`}
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {applications.map(app => {
                                const image = PlaceHolderImages.find(img => img.id === app.imageId);
                                return (
                                    <Card key={app.title} className="overflow-hidden">
                                        {image && (
                                            <div className="relative h-56 w-full">
                                                <Image src={image.imageUrl} alt={app.title} data-ai-hint={image.imageHint} fill className="object-cover"/>
                                            </div>
                                        )}
                                        <CardHeader>
                                            <CardTitle>{app.title}</CardTitle>
                                        </CardHeader>
                                    );
                            })}
                        </div>
                    </div>
                </section>

                <Testimonials />
                <CTASection />
            </div>
        </>
    );
}
