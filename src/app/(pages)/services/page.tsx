
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SERVICES, SITE_NAME, SITE_PHONE_NUMBER, CTA_PRIMARY, INDUSTRIES } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight, HardHat, Zap, Award, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JsonLd } from '@/components/shared/JsonLd';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { DataFlowAnimator } from '@/components/services/DataFlowAnimator';

const benefits = [
    { icon: Zap, title: "Precision & Consistency", description: "Achieve uniform hardness and case depth with our advanced induction hardening process, ensuring every component meets exact specifications." },
    { icon: Gauge, title: "Faster Turnaround", description: "Our efficient heat treatment job work in Ludhiana ensures your production timelines are met without compromising on quality." },
    { icon: HardHat, title: "Enhanced Durability", description: "Significantly increase wear resistance and fatigue life of your parts with our expert steel hardening services." },
    { icon: Award, title: "ISO 9001 Certified", description: "As a leading heat treatment company in Punjab, our commitment to quality is validated by international standards." },
];

const faqs = [
  {
    question: "What is induction heat treatment?",
    answer: "Induction heat treatment is a process used to harden the surface of steel and other alloy components. It uses electromagnetic induction to heat a targeted area, which is then rapidly cooled (quenched). This creates a hard, wear-resistant surface layer while the core of the component remains ductile and tough."
  },
  {
    question: "What is the difference between induction hardening and case hardening?",
    answer: "Induction hardening is a type of case hardening. 'Case hardening' is a general term for processes that harden the surface ('case') of a metal. Induction hardening does this using electromagnetic currents, offering precise control over the hardened area and depth. Other methods include carburizing or nitriding."
  },
  {
    question: "How much does heat treatment cost in Punjab?",
    answer: "The cost of heat treatment in Punjab varies based on the process (e.g., induction vs. case hardening), component size, material, and required hardness depth. Thakur Industries offers competitive pricing for all heat treatment job work. Contact us for a free quote and a complimentary test sample."
  },
  {
    question: "Which components can be hardened using induction heating?",
    answer: "A wide variety of components can be treated, especially those requiring localized hardness. Common examples include gears, shafts, axles, spindles, cams, and automotive components. Our custom heat treatment in Ludhiana is tailored to your specific needs."
  }
];

export default function ServicesPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Induction Heat Treatment in Ludhiana, Punjab, India',
        'provider': {
            '@type': 'LocalBusiness',
            'name': SITE_NAME,
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
                'addressLocality': 'Ludhiana',
                'addressRegion': 'PB',
                'postalCode': '141003',
                'addressCountry': 'IN'
            },
            'telephone': SITE_PHONE_NUMBER,
        },
        'areaServed': ['Ludhiana', 'Punjab', 'India'],
        'description': `Thakur Industries provides precision induction heat treatment, case hardening, and industrial heat treatment services in Ludhiana, Punjab, India. Contact us for gear and shaft hardening job work.`,
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-secondary text-foreground text-center">
             <div className="container mx-auto px-4 md:px-6 z-10 relative">
                <div className="text-sm text-muted-foreground mb-4">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <ChevronRight className="inline-block w-4 h-4 mx-1" />
                    <span>Services</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                    Industrial Induction Heat Treatment & Case Hardening Services — Ludhiana, Punjab
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                    As a premier heat treatment company in Punjab, we specialize in enhancing the strength and durability of critical industrial components for clients across India.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/contact">{CTA_PRIMARY}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <a href={`tel:${SITE_PHONE_NUMBER}`}>Call Now: {SITE_PHONE_NUMBER}</a>
                    </Button>
                </div>
            </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                 <PageHeader
                    title="Why Choose Our Heat Treatment Services?"
                    description="Our industrial heat treatment in Punjab combines precision, speed, and certified quality to give your components a competitive edge."
                    className="text-center mb-12"
                 />
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {benefits.map(benefit => (
                         <div key={benefit.title} className="text-center p-6 border rounded-lg bg-card shadow-sm">
                             <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                             <h3 className="text-xl font-bold">{benefit.title}</h3>
                             <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                         </div>
                     ))}
                 </div>
            </div>
        </section>

        {/* Service Grid Section */}
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <PageHeader
                    title="Our Core Services"
                    description="From induction hardening job work in Ludhiana to comprehensive case hardening in Punjab, we offer a full spectrum of steel hardening services."
                    className="text-center mb-12"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((service, index) => {
                    const image = PlaceHolderImages.find(img => img.id === service.image);
                    return (
                    <Card key={service.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        {image && (
                        <div className="relative h-48 w-full">
                            <Image
                                src={image.imageUrl}
                                alt={`${service.title} services for metal heat treatment in Ludhiana`}
                                data-ai-hint={image.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        )}
                        <CardHeader>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                        <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                        <Button asChild variant="link" className="p-0 h-auto justify-start mt-4">
                            <Link href={`/services#${service.id}`}>
                                Learn More <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    );
                })}
                </div>
            </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <PageHeader
                    title="The Induction Hardening Process Explained"
                    description="We utilize state-of-the-art equipment to deliver precise and repeatable results for all gear and shaft hardening job work."
                    className="text-center mb-12"
                />
                <DataFlowAnimator />
            </div>
        </section>

        {/* Industries Served Section */}
        <section className="py-16 md:py-24 bg-secondary">
             <div className="container mx-auto px-4 md:px-6 text-center">
                <PageHeader 
                    title="Serving Critical Industries Across India"
                    description="Our automotive heat treatment services in India and expertise in other sectors make us a trusted partner for manufacturers nationwide."
                    className="mb-8"
                />
                 <div className="flex flex-wrap justify-center gap-4 mb-8">
                     {INDUSTRIES.map(industry => (
                         <div key={industry.id} className="font-semibold bg-background py-2 px-4 rounded-full border">
                             {industry.title}
                         </div>
                     ))}
                 </div>
                <Button asChild size="lg">
                    <Link href="/industries">Explore Industry Solutions <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <PageHeader
                    title="Frequently Asked Questions"
                    description={`Answers to common questions about our induction hardening and heat treatment services in Ludhiana.`}
                    className="text-center mb-12"
                 />
                 <Accordion type="single" collapsible className="w-full">
                     {faqs.map((faq, index) => (
                         <AccordionItem key={index} value={`item-${index}`}>
                             <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                             <AccordionContent className="text-base">{faq.answer}</AccordionContent>
                         </AccordionItem>
                     ))}
                 </Accordion>
            </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
}
