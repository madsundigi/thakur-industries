// No 'use client' — Radix Accordion handles its own state internally.
// framer-motion entrance animation replaced with CSS (no JS bundle cost).
import { JsonLd } from '@/components/shared/JsonLd';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SITE_URL } from '@/lib/constants';

// Suppress unused import warning — SITE_URL is used in buildFaqSchema
void SITE_URL;

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
 * Server Component: no 'use client', no framer-motion, no hydration cost.
 */
export function ServiceFAQ({ faqItems, heading = 'Frequently Asked Questions' }: ServiceFAQProps) {
  // Schema built on the server at render time — never shipped to the client
  const schema = buildFaqSchema(faqItems);

  // Split heading once — avoid calling .split(' ') twice
  const words = heading.split(' ');
  const lastWord = words[words.length - 1];
  const prefix = words.slice(0, -1).join(' ');

  return (
    <>
      <JsonLd data={schema} />
      {/* animate-in uses Tailwind's built-in CSS animation — zero JS */}
      <section className="py-20 border-t border-border animate-in fade-in slide-in-from-bottom-6 duration-700">
        <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
          {prefix}{' '}
          <span className="text-primary">{lastWord}</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.question}
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
      </section>
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
