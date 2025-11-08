
'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/shared/JsonLd";

const faqs = [
  {
    question: "What is induction hardening, and how does it work?",
    answer: "Induction hardening is a surface heat treatment process using electromagnetic induction to strengthen metal parts such as shafts, gears, and axles. We specialize in industrial hardening job work in Ludhiana and Punjab. You can <a href='/services' class='text-primary hover:underline'>learn more on our services page</a>."
  },
  {
    question: "Do you offer induction heat treatment services in Punjab and Haryana?",
    answer: "Yes, we provide induction heat treatment and case hardening job work throughout Ludhiana, Punjab, and nearby industrial areas in Haryana and Delhi NCR."
  },
  {
    question: "What materials can be hardened using your process?",
    answer: "We work on EN8, EN19, EN24, 4140, 4340, and various tool steels — offering consistent surface hardness and metallurgical accuracy for every component."
  },
  {
    question: "How is case hardening different from surface hardening?",
    answer: "Case hardening strengthens the entire surface layer ('case') of a component, while other surface hardening methods might focus on specific zones to enhance wear resistance without affecting the core. We offer both case hardening and other surface hardening services."
  },
  {
    question: "Do you provide polymer and water quenching options?",
    answer: "Yes, our facility in Ludhiana offers both polymer and water-based quenching methods for controlled heat treatment and to minimize distortion, ensuring the highest quality for your parts."
  },
];

export function Faq() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>?/gm, '') // Strip HTML for schema
      }
    }))
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <JsonLd data={faqSchema} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions About Induction Hardening
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find quick answers to common questions about our heat treatment job work in Ludhiana.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
