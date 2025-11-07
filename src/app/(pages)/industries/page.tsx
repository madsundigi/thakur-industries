
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { INDUSTRIES } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: `Industries We Serve | Automotive & Aerospace Heat Treatment`,
  description: `Providing specialized heat treatment for Automotive, Aerospace, Railway, and more. We are experts in automotive component hardening and aerospace part hardening in India.`,
};

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <PageHeader
        title="Industries We Serve"
        description="Our expertise in heat treatment is trusted across a diverse range of critical industries, where performance and reliability are non-negotiable."
        className="mb-12 text-center max-w-4xl mx-auto"
      />
      <div className="space-y-16">
        {INDUSTRIES.map((industry, index) => {
          const image = PlaceHolderImages.find(img => img.id === industry.image);
          const isReversed = index % 2 !== 0;
          return (
            <div key={industry.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`relative h-80 w-full overflow-hidden rounded-lg shadow-xl ${isReversed ? 'lg:order-last' : ''}`}>
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
              <div>
                <h3 className="text-3xl font-bold mb-4">{industry.title}</h3>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={industry.id}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      View Treated Components
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        {industry.components.map(component => (
                          <li key={component} className="flex items-center gap-2 text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" />
                            <span>{component}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
