
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Droplet, Thermometer, Zap } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Polymer & Water Quenching Services in Ludhiana, Punjab',
  description: 'Controlled polymer & water quenching for induction heat treatment and surface hardening processes.',
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Polymer and Water Quenching",
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
    "description": "Controlled polymer and water quenching for induction heat treatment and surface hardening processes."
};

const benefits = [
    { icon: CheckCircle, title: "Stable Case Depth", description: "Ensures uniform hardness and predictable results across every component." },
    { icon: Zap, title: "No Cracking or Defects", description: "Prevents microstructural defects and cracking, enhancing part integrity." },
    { icon: Thermometer, title: "Optimized Cooling Curve", description: "Tailored cooling rates for each alloy to achieve optimal mechanical properties." },
    { icon: Droplet, title: "Repeatable Batch Results", description: "Guarantees consistency for high-volume production runs." },
];

const applications = [
    { component: "Shafts & Gears", quenchType: "Polymer", result: "Controlled case hardness" },
    { component: "Pins & Axles", quenchType: "Water", result: "Deep, rapid hardness" },
    { component: "Spindles & Rollers", quenchType: "Polymer", result: "Uniform surface finish" },
    { component: "Tools & Dies", quenchType: "Water", result: "High surface strength" },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'How to Choose the Right Quenching Method for Induction Hardening',
  'description': 'A step-by-step guide to selecting between polymer quenching and water quenching for induction hardening of steel components.',
  'totalTime': 'PT15M',
  'step': [
    {
      '@type': 'HowToStep',
      'position': 1,
      'name': 'Identify the Steel Grade and Component Type',
      'text': 'Start with the steel grade — EN8, EN19, EN24, 4140, or alloy steel. Higher alloy steels (EN24, 4340) are more quench-sensitive and prone to cracking with rapid water quench. Component geometry (thin walls, sharp transitions) also affects quench choice.',
    },
    {
      '@type': 'HowToStep',
      'position': 2,
      'name': 'Determine the Required Case Depth and Hardness',
      'text': 'For shallow case depths (0.5–2mm) and precision components, polymer quenching is preferred — it provides a controlled cooling rate with less distortion. For deep case depths (3–8mm) and robust components, water quenching delivers faster, deeper hardness.',
    },
    {
      '@type': 'HowToStep',
      'position': 3,
      'name': 'Select Polymer or Water Quenching',
      'text': 'Choose polymer quenching for: precision gears, shafts with tight tolerances, thin-walled components, and high-alloy steels. Choose water quenching for: heavy-duty rollers, large-diameter shafts, low-carbon steels, and components requiring deep rapid hardness.',
    },
    {
      '@type': 'HowToStep',
      'position': 4,
      'name': 'Verify Results with Rockwell Hardness Testing',
      'text': 'After quenching, verify surface hardness with Rockwell HRC testing on calibrated equipment. Check case depth on sample cross-sections. Adjust polymer concentration or water pressure for future batches if target hardness is not achieved.',
    },
  ],
};

export default function QuenchingProcessPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'processQuenching');
    const processImage = PlaceHolderImages.find(img => img.id === 'processHardening');
    const qualityImage = PlaceHolderImages.find(img => img.id === 'processFinishing');

    return (
        <>
            <JsonLd data={serviceSchema} />
            <JsonLd data={howToSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Polymer & Water Quenching Process"
                            data-ai-hint="quenching process"
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
                            <span>Quenching Process</span>
                        </div>
                         <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Polymer & Water Quenching Job Work in Ludhiana, Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Controlled cooling solutions for induction heat treatment, case hardening, and surface hardening processes.
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

                {/* What is Quenching Section */}
                 <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">What Is the Quenching Process?</h2>
                            <p className="text-muted-foreground text-lg">Quenching is a crucial step in the induction heat treatment process, where a heated steel component is rapidly cooled to achieve desired hardness and strength. {SITE_NAME} uses controlled polymer and water-based quenching systems in Ludhiana to ensure consistent metallurgical results and minimal distortion — essential for precision hardening jobs.</p>
                        </div>
                        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                            {processImage && (
                                <Image
                                    src={processImage.imageUrl}
                                    alt="Schematic of heating and quenching process"
                                    data-ai-hint="heating process"
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>
                </section>

                {/* Polymer Quenching Section */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Precision Polymer Quenching for Induction Hardening"
                            description="Polymer quenching involves cooling metal components using water mixed with a polymer solution. The polymer concentration determines the cooling rate, making it a highly controlled and repeatable process."
                            className="text-center mb-12"
                        />
                        <div className="max-w-4xl mx-auto">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                                <li className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /> Controlled cooling rate adjustment</li>
                                <li className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /> Reduced distortion vs. water quenching</li>
                                <li className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /> Suitable for high-precision steel parts</li>
                                <li className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /> Consistent metallurgical properties</li>
                            </ul>
                        </div>
                         <div className="text-center mt-12">
                             <Button asChild variant="link">
                                 <Link href="/induction-hardening-services">Learn how we apply Induction Hardening <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                 {/* Water Quenching Section */}
                 <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Water Quenching Process in Punjab"
                            description="For components requiring rapid and deep hardness, Thakur Industries also provides water quenching job work. Water quenching ensures high surface hardness for heavy-duty parts made from EN8, EN19, EN24, 4140, and 4340 steels commonly used across Punjab’s automotive and machinery industries."
                            className="text-center mb-12"
                        />
                         <div className="max-w-4xl mx-auto">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                                <li className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /> Fast cooling for deeper case hardness</li>
                                <li className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /> Cost-effective for mass production</li>
                                <li className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /> Ideal for robust, thick-walled parts</li>
                                <li className="flex items-center gap-3"><CheckCircle className="h-6 w-6 text-primary flex-shrink-0" /> Compatible with all hardening processes</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why Controlled Quenching Matters */}
                <section className="py-16 md:py-24 bg-secondary">
                    <div className="container mx-auto px-4 md:px-6">
                        <PageHeader
                            title="Consistent Hardness, Zero Distortion, Longer Life"
                            description="The quenching stage directly influences the performance and durability of hardened parts. Using controlled quenching systems, Thakur Industries ensures:"
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

                 {/* Applications Section */}
                <section className="py-16 md:py-24">
                     <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <PageHeader
                            title="Industrial Applications in Ludhiana & Punjab"
                            description="Our polymer and water quenching services support various heat treatment processes and component types, used across multiple industries."
                            className="text-center mb-12"
                        />
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Component Type</TableHead>
                                    <TableHead>Quenching Type</TableHead>
                                    <TableHead>Result</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {applications.map((row) => (
                                <TableRow key={row.component}>
                                    <TableCell className="font-medium">{row.component}</TableCell>
                                    <TableCell>{row.quenchType}</TableCell>
                                    <TableCell>{row.result}</TableCell>
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
                                    alt="Quality inspection of a hardened component"
                                    data-ai-hint={qualityImage.imageHint}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                         <div className="lg:order-first">
                            <h2 className="text-3xl font-bold mb-4">Ensuring Consistency in Every Job</h2>
                            <p className="text-muted-foreground text-lg">All quenched components undergo hardness testing, case depth verification, and microstructure inspection. Our Ludhiana-based facility uses ISO-certified procedures to maintain process control and data logging for every batch.</p>
                        </div>
                    </div>
                </section>

                <CTASection />
            </div>
        </>
    );
}
