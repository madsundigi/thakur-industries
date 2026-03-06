
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronRight, Cpu, Gem, ShieldCheck, Zap } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Induction Hardening Services in Ludhiana & Punjab',
  description: 'Professional induction hardening for steel components including EN8, EN19, EN24, 4140, 4340 materials.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Induction Hardening",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Thakur Industries",
    "address": { "@type": "PostalAddress", "addressLocality": "Ludhiana", "addressRegion": "Punjab", "addressCountry": "India" }
  },
  "areaServed": ["Ludhiana", "Punjab"],
  "description": "Professional induction hardening services in Ludhiana & Punjab for EN8, EN19, EN24, 4140, and 4340 steel materials."
};

const processSteps = [
    {
        step: "01",
        title: "Part Placement",
        description: "The steel component is precisely positioned within a custom-made copper induction coil."
    },
    {
        step: "02",
        title: "Induction Heating",
        description: "An alternating magnetic field generates rapid, localized heat on the part's surface."
    },
    {
        step: "03",
        title: "Rapid Quenching",
        description: "The heated area is immediately cooled using a controlled polymer or water quench."
    },
    {
        step: "04",
        title: "Testing & Inspection",
        description: "We verify case depth and surface hardness to ensure it meets exact specifications."
    }
];

const materials = ['EN8', 'EN19', 'EN24', '4140', '4340', 'Tool Steel', 'Mild Steel', 'Alloy Steels'];

const benefits = [
    { icon: ShieldCheck, title: "Increased Wear Resistance", description: "Creates a hard, durable surface that withstands abrasion and friction." },
    { icon: Gem, title: "Maintains Core Ductility", description: "The core of the component remains tough and less brittle, preventing fractures." },
    { icon: Zap, title: "Fast & Repeatable", description: "An efficient process that delivers consistent results for high-volume production." },
    { icon: Cpu, title: "Localized & Precise", description: "Hardens only specific areas, reducing distortion and saving energy." },
];

export default function InductionHardeningPage() {
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
                            alt="Induction Hardening Process"
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
                            <span>Induction Hardening</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Induction Hardening Job Work in Ludhiana, Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Precision induction heat treatment services for EN8, EN19, EN24, 4140 & 4340 steel components.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Get a Free Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/services">Explore All Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What is Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div>
                            <h2 className="text-3xl font-bold mb-4">What Is Induction Hardening?</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Induction hardening is a precision <strong>localized surface hardening</strong> technique within the broader <strong>induction heat treatment</strong> field. This highly efficient <strong>surface hardening process</strong> begins with non-contact <strong>electromagnetic heating</strong>, where an induction coil generates intense eddy currents that rapidly raise the temperature of the component's outer layer to its transformation range.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                                This targeted heat is immediately followed by <strong>rapid quenching</strong> in a controlled polymer or water medium, which triggers a complete <strong>martensitic transformation</strong> in the steel's microstructure. This specialized <strong>steel hardening</strong> method results in an extremely hard, wear-resistant outer shell while the inner core remains ductile and tough, ensuring superior fatigue life and dimensional stability for critical industrial components.
                            </p>
                        </div>
                        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt="Close-up of induction hardening process"
                                    data-ai-hint={heroImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>
                </section>
                
                {/* Process Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="How the Induction Hardening Process Works"
                            description="Our systematic approach ensures every component achieves the desired metallurgical properties with precision and consistency."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map(step => (
                                <div key={step.step} className="bg-card p-6 rounded-lg border text-center flex flex-col items-center">
                                    <div className="text-5xl font-bold text-primary/20 mb-3">{step.step}</div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                                </div>
                            ))}
                        </div>
                         <div className="text-center mt-8">
                             <Button asChild variant="link">
                                 <Link href="/services#process">Learn about our Quenching Process <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Materials Section */}
                 <section className="py-20 md:py-28 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Heat Treatment for Alloy Steel, Shafts & Gears
                            </h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                                {SITE_NAME} specializes in induction hardening job work for all major steel grades used in manufacturing. We handle automotive, agricultural, and industrial components with precision control and minimal distortion.
                            </p>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-3">
                        {materials.map((material) => (
                            <div key={material}>
                            <div className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                                {material}
                            </div>
                            </div>
                        ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button asChild>
                                <Link href="/contact">Contact Us for EN8 & EN24 Hardening Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Why Choose Induction Hardening?"
                            description="This process offers significant advantages for improving the durability and performance of steel components."
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
    )
}
