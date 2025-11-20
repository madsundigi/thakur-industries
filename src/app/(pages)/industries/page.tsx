
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, Car, Tractor, HardHat, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Industries Served - Thakur Industries Ludhiana, Punjab',
  description: 'Heat treatment & hardening job work for automotive, agricultural, and machinery parts across Punjab.',
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Heat Treatment for Automotive, Agricultural, and Industrial Parts",
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
    "description": "Heat treatment and hardening job work for automotive, agricultural, and machinery parts across Punjab."
};

const industries = [
    {
        icon: Car,
        title: "Automotive Parts Heat Treatment in Ludhiana",
        description: "Automotive manufacturers across Ludhiana and Punjab rely on Thakur Industries for precision hardening of gears, shafts, axles, and crankshafts. Our induction heat treatment ensures components withstand high loads, friction, and continuous motion without failure.",
        components: ["Gears & Pinions", "Drive Shafts & Camshafts", "Axles & Bearings", "Differential and Transmission Parts"],
        benefits: ["High fatigue and wear resistance", "Improved torque strength", "Zero distortion hardening", "Consistent results for OEM parts"],
        link: "/component-hardening",
        image: "industryAutomotive"
    },
    {
        icon: Tractor,
        title: "Tractor Parts Hardening & Agricultural Implements Heat Treatment in Punjab",
        description: "Punjab’s agricultural industry depends on reliable tractor and implement components that can survive continuous stress, dust, and field loads. Thakur Industries provides localized surface hardening and induction heat treatment for tillers, ploughs, rotavator shafts, gear sets, and tractor transmission parts.",
        components: ["PTO Shafts", "Rotavator Gears", "Axle Shafts", "Clutch Hubs & Bearings"],
        benefits: ["Increased operational life of implements", "Resistance to impact and abrasion", "Reduced replacement downtime", "Ideal for high-torque agricultural machinery"],
        link: "/material-heat-treatment",
        image: "industryAgriculture"
    },
    {
        icon: HardHat,
        title: "Industrial Equipment & Machinery Heat Treatment",
        description: "Thakur Industries supports machinery and engineering industries by offering custom heat treatment for heavy-duty components requiring consistent hardness and low distortion. This includes parts used in machine tools, rolling mills, hydraulic systems, and general engineering setups across Punjab.",
        components: ["Shafts, Spindles, and Couplings", "Rollers & Die Holders", "Machine Tool Beds & Rotors"],
        benefits: ["Ensures structural stability and endurance", "Improves longevity of machine tools", "Handles heavy-duty components"],
        link: "/surface-hardening",
        image: "industryMachineTool"
    }
];

export default function IndustriesPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'heroIndustries');

    return (
        <>
            <JsonLd data={serviceSchema} />
            <div className="bg-background">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt="Industrial collage of gears, tractor parts, and machine shafts"
                            data-ai-hint={heroImage.imageHint}
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                    )}
                    <div className="container mx-auto px-4 md:px-6 z-10 relative">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Industries We Serve | Heat Treatment Services in Punjab
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            Providing precision induction hardening & heat treatment for automotive, agricultural, and industrial components across Ludhiana and Punjab.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">Request Job Work Quote</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/component-hardening">Explore Component Hardening</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                 {/* Intro Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-3xl font-bold mb-4">Reliable Heat Treatment Partner for Multiple Industries</h2>
                        <p className="text-muted-foreground text-lg">With over a decade of expertise in induction hardening and surface treatment, {SITE_NAME} serves a wide spectrum of industries requiring durable and precision-engineered components. Our state-of-the-art facility in Ludhiana offers customized job work for automotive, agricultural, and industrial machinery parts, ensuring consistent quality, accuracy, and strength.</p>
                    </div>
                </section>

                {/* Industries Section */}
                <div className="space-y-16 md:space-y-24 py-16">
                {industries.map((industry, index) => {
                    const image = PlaceHolderImages.find(img => img.id === industry.image);
                    const isReversed = index % 2 !== 0;
                    return (
                        <section key={industry.title} className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-secondary' : ''}`}>
                            <div className="container mx-auto px-4 md:px-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div className={`relative h-80 lg:h-96 w-full overflow-hidden rounded-lg shadow-xl ${isReversed ? 'lg:order-last' : ''}`}>
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={industry.title}
                                                data-ai-hint={image.imageHint}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className={isReversed ? 'lg:order-first' : ''}>
                                        <h2 className="text-3xl font-bold mb-4">{industry.title}</h2>
                                        <p className="text-muted-foreground mb-6">{industry.description}</p>
                                        
                                        <h3 className="text-xl font-semibold mb-3">Components Treated:</h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                                            {industry.components.map(component => (
                                            <li key={component} className="flex items-center gap-2 text-muted-foreground">
                                                <CheckCircle className="h-4 w-4 text-primary" />
                                                <span>{component}</span>
                                            </li>
                                            ))}
                                        </ul>
                                        
                                        <Button asChild variant="link" className="p-0 h-auto">
                                            <Link href={industry.link}>Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
                </div>

                <CTASection />
            </div>
        </>
    );
}
