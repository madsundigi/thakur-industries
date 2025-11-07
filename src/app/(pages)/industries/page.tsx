import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { INDUSTRIES, SITE_NAME } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';

export const metadata: Metadata = {
  title: `Industries We Serve`,
  description: `Providing specialized heat treatment for Automotive, Aerospace, Railway, and more at ${SITE_NAME}.`,
};

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6">
       <PageHeader
        title="Industries We Serve"
        description="Our expertise in heat treatment is trusted across a diverse range of critical industries, where performance and reliability are non-negotiable."
        className="mb-12 text-center max-w-4xl mx-auto"
      />
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {INDUSTRIES.map(industry => (
            <AccordionItem key={industry.id} value={industry.id}>
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    {industry.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                    {industry.description}
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
