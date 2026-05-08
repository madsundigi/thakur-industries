'use client'

import { motion } from 'framer-motion';
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
    answer: "Induction hardening is a surface heat treatment process using electromagnetic induction to strengthen metal parts such as shafts, gears, and axles. We specialize in industrial hardening job work in Ludhiana and Punjab. You can <a href='/services' class='text-primary hover:underline font-bold'>learn more on our services page</a>."
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

const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

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
    <section className="py-24 md:py-32 bg-background">
      <JsonLd data={faqSchema} />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInBottom}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground uppercase italic leading-none">
            Job Work <span className="text-primary">FAQs</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find quick answers to common questions about our heat treatment services in Ludhiana.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl bg-secondary/30 px-6">
                <AccordionTrigger className="text-left text-lg font-bold uppercase italic tracking-tight hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
