
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, ShieldCheck, Thermometer,Cpu, Gem } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Case Hardening Services in Ludhiana, Punjab',
  description: 'Precision case hardening job work for steel components across Ludhiana & Punjab.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Case Hardening",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Thakur Industries",
    "address": { "@type": "PostalAddress", "addressLocality": "Ludhiana", "addressRegion": "Punjab", "addressCountry": "India" }
  },
  "areaServed": ["Ludhiana", "Punjab"],
  "description": "Case hardening job work for steel components across Ludhiana & Punjab."
};

const processSteps = [
    {
        step: "01",
        title: "Heating",
        description: "Components are heated to a high temperature (900°C–950°C) in a carbon-rich atmosphere.",
        icon: Thermometer
    },
    {
        step: "02",
        title: "Carburizing/Nitriding",
        description: "Carbon or nitrogen diffuses into the steel surface, creating the 'case'.",
        icon: Cpu
    },
    {
        step: "03",
        title: "Quenching",
        description: "Rapid cooling using polymer or water locks in the surface hardness.",
        icon: Gem
    },
    {
        step: "04",
        title: "Tempering & Inspection",
        description: "Reheating to improve toughness, followed by rigorous testing for quality assurance.",
        icon: ShieldCheck
    }
];

const materials = ['EN8', 'EN19', 'EN24', 'Mild Steel', '20MnCr5', '16MnCr5', 'Alloy Steel'];
const components = ['Gears', 'Shafts', 'Cams', 'Pins', 'Bearings', 'Bolts'];

const benefits = [
    { icon: ShieldCheck, title: "Excellent Wear Resistance", description: "Creates a hard, durable surface that withstands abrasion and friction." },
    { icon: Gem, title: "Tough Core", description: "The core of the component remains tough and less brittle, preventing fractures under impact." },
    { icon: ArrowRight, title: "Improved Impact Strength", description: "The combination of a hard case and tough core enhances overall component durability." },
    { icon: CheckCircle, title: "Cost-Effective", description: "An efficient process for batch production, offering great value for high-volume work." },
];

const comparisonData = [
    { aspect: "Process", induction: "Electromagnetic heating", case: "Chemical diffusion (carbon/nitrogen)" },
    { aspect: "Depth", induction: "0.5mm – 5mm", case: "0.2mm – 2mm" },
    { aspect: "Cycle Time", induction: "Minutes", case: "Hours" },
    { aspect: "Distortion", induction: "Minimal", case: "Moderate" },
    { aspect: "Best For", induction: "Precision localized treatment", case: "Batch production of small-medium parts" },
];


export default function CaseHardeningPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'serviceCaseHardening');
    const processImage = PlaceHolderImages.find(img => img.id === 'caseHardeningProcess');
    const qualityImage = PlaceHolderImages.find(img => img.id === 'processFinishing');

    return (
        <>
            <JsonLd data={serviceSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Case Hardening Process"
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
                            <span>Case Hardening</span>
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Case Hardening Job Work in Ludhiana, Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Reliable, precise, and controlled case hardening services for steel components used in industrial, automotive, and agricultural sectors.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Get a Free Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/induction-hardening">Explore Induction Hardening</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* What is Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div>
                            <h2 className="text-3xl font-bold mb-4">What Is Case Hardening?</h2>
                            <p className="text-muted-foreground text-lg">Case hardening is a thermo-chemical heat treatment process that increases the surface hardness of low-carbon or alloy steel components by infusing carbon or nitrogen atoms into the outer layer. The result — a hard, wear-resistant surface (case) and a tough, ductile core that resists impact and fatigue.</p>
                        </div>
                        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                            {processImage && (
                                <Image
                                    src={processImage.imageUrl}
                                    alt="Illustration of case vs core hardness in a steel component"
                                    data-ai-hint={processImage.imageHint}
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
                            title="Industrial Case Hardening Process Explained"
                            description="Our combination of depth hardening and quenching ensures a durable, high-wear-resistant surface — ideal for automotive and industrial parts."
                            className="text-center mb-12"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map(step => (
                                <div key={step.step} className="bg-card p-6 rounded-lg border text-center flex flex-col items-center">
                                     <step.icon className="h-10 w-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm flex-grow">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                 {/* Benefits Section */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Why Choose Case Hardening for Steel Components?"
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
                                <Link href="/contact">Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>


                {/* Materials & Components Section */}
                 <section className="py-20 md:py-28 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Case Hardening Suitable for Steel Components & Alloys
                            </h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                                {SITE_NAME} offers case hardening job work for a wide range of steels and alloy grades commonly used in Punjab’s manufacturing industries.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold text-center mb-6">Materials We Treat</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {materials.map((material) => (
                                    <div key={material} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                                        {material}
                                    </div>
                                ))}
                            </div>
                        </div>

                         <div className="mt-12">
                            <h3 className="text-xl font-bold text-center mb-6">Common Components</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {components.map((component) => (
                                    <div key={component} className="bg-card text-card-foreground border rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                                        {component}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Button asChild variant="outline">
                                <Link href="/surface-hardening">Explore Surface Hardening</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-16 md:py-24">
                     <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <PageHeader
                            title="Case Hardening vs. Induction Hardening"
                            className="text-center mb-12"
                        />
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Factor</TableHead>
                                    <TableHead>Case Hardening</TableHead>
                                    <TableHead>Induction Hardening</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {comparisonData.map((row) => (
                                <TableRow key={row.aspect}>
                                    <TableCell className="font-medium">{row.aspect}</TableCell>
                                    <TableCell>{row.case}</TableCell>
                                    <TableCell>{row.induction}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                         <div className="text-center mt-8">
                             <Button asChild variant="link">
                                 <Link href="/induction-hardening">Learn More About Induction Hardening <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                 {/* Quality Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                            {qualityImage && (
                                <Image
                                    src={qualityImage.imageUrl}
                                    alt="Quality inspection of a case hardened component"
                                    data-ai-hint={qualityImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                         <div className="lg:order-first">
                            <h2 className="text-3xl font-bold mb-4">Precision-Controlled Heat Treatment You Can Trust</h2>
                            <p className="text-muted-foreground text-lg">Our case hardening process in Ludhiana is carefully monitored to maintain temperature consistency and surface uniformity. Each part undergoes case depth testing, hardness inspection, and microstructure analysis to ensure perfect metallurgical results.</p>
                        </div>
                    </div>
                </section>


                 <Testimonials />
                 <CTASection />

            </div>
        </>
    )
}
