
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
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Heat Treating Steel – Induction & Case Hardening Services',
  description: 'Professional steel heat treating services for carbon and alloy steel components.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Heat Treating Steel",
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
  "description": "Professional steel heat treating services for carbon and alloy steel components, including induction and case hardening."
};

const steelTypes = [
    {
        name: 'Carbon Steel',
        description: 'Steels like EN8 are valued for their balance of strength and ductility. Heat treating enhances their surface hardness for applications requiring wear resistance.',
        image: 'blogEN8Steel'
    },
    {
        name: 'Alloy Steel',
        description: 'Grades like EN19, EN24, and 4140 contain elements like chromium and molybdenum, offering superior toughness and hardenability, ideal for high-stress parts.',
        image: 'blogAlloySteels'
    }
];

const materials = [
    { 
        name: 'EN8', 
        description: 'A versatile medium carbon steel, ideal for shafts and general-purpose parts requiring good surface hardness.',
        hardness: '50-55 HRC'
    },
    { 
        name: 'EN19 (4140)',
        description: 'A chromium-molybdenum alloy steel with high toughness, perfect for gears, axles, and crankshafts.',
        hardness: '52-58 HRC'
    },
    {
        name: 'EN24 (4340)',
        description: 'A high-strength nickel-chromium-molybdenum steel for heavy-duty applications like transmission parts.',
        hardness: '55-60 HRC'
    },
];

const benefits = [
    { icon: ShieldCheck, title: "Increased Hardness", description: "Achieve superior surface hardness for maximum wear resistance." },
    { icon: Cpu, title: "Improved Strength", description: "Enhances the steel's ability to withstand stress and load." },
    { icon: Zap, title: "Enhanced Durability", description: "Extends the service life of components, reducing downtime and costs." },
    { icon: CheckCircle, title: "Optimized Performance", description: "Tailors the material's properties to meet specific application needs." },
];

export default function HeatTreatingSteelPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'heroHeatTreatingSteel');
    
    return (
        <>
            <JsonLd data={serviceSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Heat treating steel components"
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
                            <span>Heat Treating Steel</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Heat Treating Steel for Industrial Applications
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Professional steel heat treating services to optimize the hardness, strength, and durability of your carbon and alloy steel components.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/services">View Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-3xl font-bold mb-4">An Overview of Steel Heat Treatment</h2>
                        <p className="text-muted-foreground text-lg">Steel heat treatment is a controlled process involving heating and cooling to alter the steel's microstructure. This enhances its mechanical properties, such as hardness, toughness, and wear resistance, to meet the demands of high-performance industrial applications. At {SITE_NAME}, we use advanced methods like <Link href="/induction-hardening-services" className="text-primary hover:underline">induction hardening</Link> and <Link href="/case-hardening-heat-treatment" className="text-primary hover:underline">case hardening</Link> to achieve precise results.</p>
                    </div>
                </section>

                {/* Steel Types Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Carbon Steel vs. Alloy Steel Treatment"
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {steelTypes.map((steel) => {
                                const image = PlaceHolderImages.find(img => img.id === steel.image);
                                return (
                                    <Card key={steel.name} className="overflow-hidden">
                                        {image && (
                                            <div className="relative h-64 w-full">
                                                <Image src={image.imageUrl} alt={steel.name} data-ai-hint={image.imageHint} fill className="object-cover" />
                                            </div>
                                        )}
                                        <CardHeader>
                                            <CardTitle>{steel.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{steel.description}</p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Materials Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Expertise in Key Steel Grades"
                            description="We have extensive experience in heat treating the most common steel grades used in automotive and industrial manufacturing."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {materials.map((material) => (
                                <Card key={material.name}>
                                    <CardHeader>
                                        <CardTitle>{material.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground pt-1">Target Hardness: {material.hardness}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{material.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                         <PageHeader
                            title="Benefits of Heat Treating Steel"
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
                            <Button asChild variant="link" className="text-lg">
                                <Link href="/metal-heat-treatment">Explore All Metal Heat Treatments <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Industrial Applications</h2>
                        <p className="text-muted-foreground text-lg mb-8">Our steel heat treating services are crucial for components used in the most demanding industrial sectors, including automotive, agriculture, and heavy machinery.</p>
                        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                            <Image src={PlaceHolderImages.find(i => i.id === 'industryAutomotive')?.imageUrl || ''} alt="Automotive components" data-ai-hint="automotive parts" fill className="object-cover" />
                        </div>
                    </div>
                </section>

                <CTASection />
            </div>
        </>
    )
}
