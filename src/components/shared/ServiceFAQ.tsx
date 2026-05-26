'use client';

import { motion } from 'framer-motion';
import { JsonLd } from '@/components/shared/JsonLd';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SITE_URL } from '@/lib/constants';

export type FAQItem = {
  question: string;
  answer: string;
};

interface ServiceFAQProps {
  faqItems: FAQItem[];
  /** Optional heading override */
  heading?: string;
}

/**
 * ServiceFAQ — renders a visible accordion FAQ section + FAQPage JSON-LD schema.
 * Use on service pages that don't already have an FAQ accordion.
 * For pages with existing accordions, use <JsonLd data={buildFaqSchema(items)} /> directly.
 */
export function ServiceFAQ({ faqItems, heading = 'Frequently Asked Questions' }: ServiceFAQProps) {
  const schema = buildFaqSchema(faqItems);

  return (
    <>
      <JsonLd data={schema} />
      <motion.section
        className="py-20 border-t border-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
          {heading.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-primary">{heading.split(' ').slice(-1)}</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group"
            >
              <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-base md:text-lg hover:text-primary py-6 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 font-medium leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>
    </>
  );
}

/** Build a FAQPage JSON-LD object from an array of Q&A items */
export function buildFaqSchema(faqItems: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
