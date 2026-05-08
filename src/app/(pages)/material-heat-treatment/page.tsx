
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
  title: 'Material Wise Heat Treatment in Ludhiana, Punjab',
  description: 'Specialized induction hardening & heat treatment for EN8, EN19, EN24, 4140 & 4340 steel materials.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Heat Treatment for Alloy Steels",
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
  "description": "Induction and case hardening job work for EN8, EN19, EN24, 4140, 4340, and tool steels in Ludhiana & Punjab."
};

const materials = [
    { 
        name: 'EN8', 
        title: 'EN8 Heat Treatment in Ludhiana, Punjab',
        description: 'EN8 is a medium carbon steel commonly used for shafts, studs, and gears. Our induction hardening process for EN8 provides uniform surface hardness, excellent wear resistance, and strong core ductility — ideal for parts exposed to friction or stress.',
        details: [
            'Heating temperature: 850–870°C',
            'Quenching medium: Polymer or water',
            'Typical hardness: 50–55 HRC',
            'Applications: Shafts, Axles, Pins, Rollers'
        ]
    },
    { 
        name: 'EN19 & EN24',
        title: 'EN19 and EN24 Induction Hardening & Case Hardening',
        description: 'Both EN19 (4140 equivalent) and EN24 (4340 equivalent) are nickel-chromium-molybdenum alloy steels known for high toughness and fatigue resistance. Using our induction systems, we deliver precise surface hardening with controlled quenching for these grades — perfect for automotive and heavy engineering applications.',
        details: [
            'EN19: Excellent impact resistance, Case depth: 1–3 mm, Hardness: 50–58 HRC',
            'EN24: High core strength and fatigue resistance, Ideal for gears, shafts, and connecting rods'
        ]
    },
    {
        name: '4140 & 4340',
        title: 'Induction Hardening for 4140 & 4340 Alloy Steel in Punjab',
        description: 'Thakur Industries offers induction and surface hardening job work for 4140 and 4340 steels, widely used in power transmission and automotive components. Our polymer and water quenching control ensures tight tolerance on case depth and hardness.',
        details: [
            '4140: Medium carbon alloy with good toughness',
            '4340: High strength for extreme fatigue environments',
            'Case hardness: 50–60 HRC',
            'Quenching: Polymer bath (for precision)',
        ]
    },
    {
        name: 'Tool Steel',
        title: 'Customized Heat Treatment for Tool Steels',
        description: 'Tool steels require controlled induction hardening to improve wear life and surface integrity. We specialize in heat treatment for tool steels used in dies, punches, and forming tools, ensuring consistent performance and dimensional stability.',
        details: [
            'Uniform hardness distribution',
            'Crack-free finish',
            'Enhanced tool longevity'
        ]
    }
];

const benefits = [
    { icon: ShieldCheck, title: "Tailored Process Parameters", description: "Customized process for each steel grade to achieve desired properties." },
    { icon: Cpu, title: "Consistent Hardness & Microstructure", description: "Guaranteed uniformity across batches." },
    { icon: Zap, title: "Extended Component Life", description: "Increases wear resistance and durability of your parts." },
    { icon: CheckCircle, title: "Reduced Distortion", description: "Controlled quenching minimizes dimensional changes." },
];

export default function MaterialHeatTreatmentPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'heroMachine');
    
    return (
        <>
            <JsonLd data={serviceSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Heat treatment for alloy steels"
                            data-ai-hint="alloy steel bars"
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
                            <span>Material Heat Treatment</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Heat Treatment for Alloy Steels in Ludhiana, Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Professional induction hardening, case hardening, and surface treatment services for EN8, EN19, EN24, 4140, 4340, and tool steel materials.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Request a Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/induction-hardening">Explore Induction Hardening</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-3xl font-bold mb-4">Material-Wise Heat Treatment for Industrial Applications</h2>
                        <p className="text-muted-foreground text-lg">Every steel grade requires a unique combination of heating, hardening, and quenching parameters to achieve the desired mechanical properties. At {SITE_NAME}, we provide customized induction and case hardening processes for a wide range of materials used in automotive, agricultural, and industrial machinery components across Ludhiana and Punjab.</p>
                        <Button asChild variant="link" className="mt-4 text-lg">
                            <Link href="/contact">Looking for EN8 or EN19 heat treatment in Punjab? Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </section>

                {/* Materials Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Case & Surface Hardening for All Industrial Steel Grades"
                            className="text-center mb-12"
                        />
                        <div className="space-y-16">
                            {materials.map((material, index) => {
                                const isReversed = index % 2 !== 0;
                                return (
                                <div key={material.name} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
                                    <div className={isReversed ? 'md:order-last' : ''}>
                                        <h3 className="text-2xl font-bold mb-3">{material.title}</h3>
                                        <p className="text-muted-foreground mb-4">{material.description}</p>
                                        <ul className="space-y-2">
                                            {material.details.map(detail => (
                                                <li key={detail} className="flex items-center gap-3">
                                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                                    <span className='text-muted-foreground'>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`relative h-64 md:h-80 w-full rounded-lg shadow-xl overflow-hidden ${isReversed ? 'md:order-first' : ''}`}>
                                        <Image src={`https://picsum.photos/seed/${material.name}/600/400`} alt={material.title} data-ai-hint={`${material.name} steel part`} fill className="object-cover" />
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                </section>
                
                {/* Benefits Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                         <PageHeader
                            title="Why Choose Material-Wise Heat Treatment?"
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
                
                {/* Quenching Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                            <Image src={PlaceHolderImages.find(i => i.id === 'processQuenching')?.imageUrl || ''} alt="Quenching process for alloy steel" data-ai-hint="quenching tank" fill className="object-cover" />
                        </div>
                        <div className="md:order-first">
                            <h2 className="text-3xl font-bold mb-4">Controlled Quenching for Alloy Steel Components</h2>
                            <p className="text-muted-foreground text-lg mb-6">Every heat treatment process at Thakur Industries is paired with customized quenching media — either polymer-based or water-based — depending on the alloy and desired hardness depth. This ensures minimal distortion, clean surface finish, and maximum hardness retention.</p>
                            <Button asChild>
                                <Link href="/component-hardening">Learn more about our Component Hardening Process <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Testimonials />
                <CTASection />

            </div>
        </>
    )
}
