
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Gear Hardening Services in Ludhiana, Punjab',
  description: 'Gear & pinion induction hardening job work for industrial & automotive parts in Ludhiana & Punjab.',
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gear Hardening",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Thakur Induction",
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ludhiana",
        "addressRegion": "Punjab",
        "addressCountry": "India"
        }
    },
    "areaServed": ["Ludhiana", "Punjab"],
    "description": "Gear and pinion induction hardening job work for industrial and automotive parts in Ludhiana & Punjab."
};

const processSteps = [
    { step: 1, title: 'Induction Heating', description: 'Gear teeth are heated selectively using a high-frequency induction coil.' },
    { step: 2, title: 'Quenching', description: 'Rapid cooling via polymer or water ensures a hard, martensitic surface formation.' },
    { step: 3, title: 'Tempering', description: 'The gear is reheated to relieve internal stresses and achieve the perfect balance of hardness and toughness.' },
    { step: 4, title: 'Inspection', description: 'Hardness, case depth, and tooth profile are verified to meet stringent quality standards.' }
];

const materials = ['EN8', 'EN19 (4140)', 'EN24 (4340)', '20MnCr5', '16MnCr5', 'Tool Steel'];

const benefits = [
    { icon: ShieldCheck, title: "Increased Tooth Wear Resistance", description: "Creates a hard surface that resists friction and abrasion, extending gear life." },
    { icon: Zap, title: "Enhanced Load-Bearing Capacity", description: "Strengthens teeth to handle higher torque and prevent fatigue failure." },
    { icon: Cpu, title: "Precise Case Depth Control", description: "Induction heating allows for exact control over the depth of the hardened layer." },
    { icon: CheckCircle, title: "Reduced Distortion", description: "Localized heating minimizes warping compared to through-hardening methods." },
];

const applications = [
    { application: "Automotive Gearboxes", gearType: "Spur/Helical Gears", process: "Induction Hardening" },
    { application: "Tractors & Farm Equipment", gearType: "Pinions & Crown Gears", process: "Surface Hardening" },
    { application: "Industrial Machinery", gearType: "Worm Gears & Shafts", process: "Localized Hardening" },
    { application: "Heavy Equipment", gearType: "Differential Gears", process: "Polymer Quenching" },
];


export default function GearHardeningPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'appGearHardening');
    const processImage = PlaceHolderImages.find(img => img.id === 'caseHardeningProcess');
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
                            alt="Gear Induction Hardening in Ludhiana"
                            data-ai-hint="gear hardening"
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
                            <span>Gear Hardening</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Gear Induction Hardening in Ludhiana, Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Precision heat treatment and gear tooth hardening job work for industrial and automotive gears across Punjab.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Request a Free Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/shaft-hardening">Explore Shaft Hardening</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What is Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Heat Treatment & Surface Hardening for Gears & Pinions</h2>
                            <p className="text-muted-foreground text-lg">Gear hardening is a specialized induction heat treatment process that strengthens the gear’s surface while maintaining a ductile core. The process improves wear resistance, load capacity, and fatigue strength, making it ideal for gears used in automotive, machinery, and heavy engineering applications across Ludhiana and Punjab.</p>
                        </div>
                        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                            {processImage && (
                                <Image
                                    src={processImage.imageUrl}
                                    alt="Diagram showing hardened gear teeth vs. soft core"
                                    data-ai-hint="gear cross-section"
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
                            title="Precision Gear Teeth Hardening Process"
                            description="Our induction systems allow selective heating, ensuring gear teeth harden evenly — without warping or distortion."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {processSteps.map((step) => (
                                <div key={step.step} className="flex flex-col items-center">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">{step.step}</div>
                                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                             <Button asChild variant="link">
                                <Link href="/component-hardening">Learn more about Component Hardening <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Why Choose Induction Gear Hardening?"
                            description="We offer both single gear job work and bulk production hardening for manufacturers across Punjab."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {benefits.map(benefit => (
                                <div key={benefit.title} className="flex items-start gap-4">
                                    <benefit.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Materials Section */}
                 <section className="py-20 md:py-28 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Material Compatibility for Gear & Pinion Hardening
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                             We provide induction hardening job work for all common alloy and carbon steels used in gear manufacturing. Our precision control ensures the right balance of surface hardness and toughness.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {materials.map((material) => (
                                <div key={material} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                                    {material}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Button asChild>
                                <Link href="/contact">Looking for EN24 gear hardening? Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                 {/* Applications Section */}
                <section className="py-16 md:py-24">
                     <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <PageHeader
                            title="Industrial & Automotive Gear Applications"
                            description="Thakur Induction provides gear induction hardening for components used in automobiles, tractors, machinery, and power transmission systems."
                            className="text-center mb-12"
                        />
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Application</TableHead>
                                    <TableHead>Gear Type</TableHead>
                                    <TableHead>Process</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {applications.map((row) => (
                                <TableRow key={row.application}>
                                    <TableCell className="font-medium">{row.application}</TableCell>
                                    <TableCell>{row.gearType}</TableCell>
                                    <TableCell>{row.process}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </section>
                
                 {/* Quality Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                            {qualityImage && (
                                <Image
                                    src={qualityImage.imageUrl}
                                    alt="Quality inspection of a hardened gear"
                                    data-ai-hint="quality inspection"
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                         <div className="lg:order-first">
                            <h2 className="text-3xl font-bold mb-4">Inspection and Hardness Testing for Gears</h2>
                            <p className="text-muted-foreground text-lg">Every gear undergoes case depth measurement, hardness testing, and surface integrity inspection using ISO-approved procedures. Our Ludhiana-based lab ensures reliable, consistent, and repeatable results across all gear types.</p>
                        </div>
                    </div>
                </section>
                
                <CTASection />
            </div>
        </>
    );
}

    