
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
  title: 'Metal Heat Treatment Services in Ludhiana, Punjab | Thakur Industries',
  description: 'Professional metal heat treatment services in Ludhiana and Punjab. Induction hardening, case hardening, and steel heat treatment job work.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Metal Heat Treatment",
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
  "areaServed": ["Ludhiana", "Punjab", "Haryana"],
  "description": "Professional metal heat treatment services in Ludhiana and Punjab, including induction hardening, case hardening, and steel heat treatment job work."
};

const benefits = [
    { icon: ShieldCheck, title: "Consistent Hardness", description: "Achieve uniform hardness and case depth with our advanced heat treatment processes." },
    { icon: Cpu, title: "Industrial-Grade Machines", description: "Utilizing state-of-the-art equipment for reliable and repeatable results." },
    { icon: Zap, title: "20+ Years of Experience", description: "Our expertise ensures top-quality results for every component." },
    { icon: CheckCircle, title: "Small & Bulk Quantities", description: "Flexible job work capabilities for both small and large production runs." },
];

const industries = [
  { name: 'Automotive' },
  { name: 'Agricultural Implements' },
  { name: 'Engineering & Machinery' }
];

export default function MetalHeatTreatmentPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'heroMetalTreatment');
    
    return (
        <>
            <JsonLd data={serviceSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Metal Heat Treatment Services"
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
                            <span>Metal Heat Treatment</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Metal Heat Treatment Services for Industrial Components
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                           Professional metal heat treatment solutions to enhance the strength, durability, and performance of your industrial parts.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/services">View Services</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What is Metal Heat Treatment Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">What is Metal Heat Treatment?</h2>
                        <p className="text-muted-foreground text-lg">Metal heat treatment is a controlled process of heating and cooling metals to alter their physical and mechanical properties without changing their shape. The purpose is to improve a material's properties, such as increasing hardness, toughness, or ductility. Our services include popular methods like <Link href="/induction-hardening-services" className="text-primary hover:underline">induction hardening</Link>, <Link href="/case-hardening-heat-treatment" className="text-primary hover:underline">case hardening</Link>, and surface hardening.</p>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Our Metal Heat Treatment Capabilities"
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader><CardTitle>Steel & Alloy Treatment</CardTitle></CardHeader>
                                <CardContent><p className="text-muted-foreground">We specialize in treating a wide range of steels and alloys to meet your specific requirements.</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Automotive & Machinery Components</CardTitle></CardHeader>
                                <CardContent><p className="text-muted-foreground">Our processes are ideal for hardening components used in high-stress automotive and machinery applications.</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader><CardTitle>Small & Bulk Job Work</CardTitle></CardHeader>
                                <CardContent><p className="text-muted-foreground">We handle both small-batch job work and large-volume production runs with consistent quality.</p></CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                
                {/* Why Choose Us Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                         <PageHeader
                            title={`Why Choose ${SITE_NAME}?`}
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

                {/* Industries Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <PageHeader
                            title="Industries Served"
                            className="mb-8"
                        />
                         <div className="flex flex-wrap justify-center gap-4 mb-8">
                             {industries.map(industry => (
                                 <div key={industry.name} className="font-semibold bg-background py-2 px-4 rounded-full border">
                                     {industry.name}
                                 </div>
                             ))}
                         </div>
                        <Button asChild size="lg">
                            <Link href="/industries">Explore Our Industry Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </section>

                {/* Service Area Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Service Area</h2>
                        <p className="text-muted-foreground text-lg">We provide metal heat treatment services to clients in Ludhiana, across Punjab, and in neighboring states like Haryana.</p>
                    </div>
                </section>

                <CTASection />
            </div>
        </>
    )
}
