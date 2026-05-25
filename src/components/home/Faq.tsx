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
    answer: "Induction hardening is a surface heat treatment process using electromagnetic induction to strengthen metal parts such as shafts, gears, and axles. We specialize in industrial hardening job work in Ludhiana and Punjab. You can <a href='/induction-heat-treatment' class='text-primary hover:underline font-bold'>learn more on our induction heat treatment page</a>."
  },
  {
    question: "Induction hardening job work Ludhiana mein kahan milega? (Where to get induction hardening job work in Ludhiana?)",
    answer: "Thakur Industries, Shimlapuri, Ludhiana mein aapko Punjab ka best induction hardening job work milega. Hum gears, shafts, bearings aur crankshafts ke liye surface hardening karte hain. Call ya WhatsApp karein: +91 7900000776."
  },
  {
    question: "What is the rate / cost of induction hardening job work in Punjab?",
    answer: "Induction hardening rates depend on component size, material grade (EN8, EN19, EN24), case depth required, and batch quantity. We offer competitive job work rates for Punjab industries. <a href='/contact' class='text-primary hover:underline font-bold'>Contact us for a free quotation</a> — we respond within 24 hours."
  },
  {
    question: "Do you offer induction heat treatment services across Punjab — Jalandhar, Patiala, Mandi Gobindgarh?",
    answer: "Yes, we provide induction heat treatment and case hardening job work across all major industrial towns in Punjab including Ludhiana, Jalandhar, Patiala, Mandi Gobindgarh, Khanna, Phagwara, Nawanshahr, Samrala, Sangrur, Dhuri, Malerkotla and Sirhind. We also serve Haryana and Delhi NCR."
  },
  {
    question: "What materials can be hardened using your process?",
    answer: "We work on EN8 (C45), EN19 (4140), EN24 (4340), EN31, 20MnCr5, Tool Steel (D2, H13), Cast Iron, and various Alloy Steels — offering consistent surface hardness between 55–62 HRC and accurate case depth from 0.5mm to 10mm."
  },
  {
    question: "Gear aur shaft ka hardening kitne din mein ho jaata hai? (How long does gear and shaft hardening take?)",
    answer: "Standard job work batches are typically completed within 2–4 working days depending on quantity and component complexity. Urgent orders are also accepted. Contact us on WhatsApp at +91 7900000776 for fastest response."
  },
  {
    question: "Do you provide on-site induction hardening for large components in Punjab?",
    answer: "Yes, we offer mobile on-site induction hardening services for large shafts, rollers, and fixed machinery that cannot be transported to our workshop. This service is available across Punjab and nearby states."
  },
  {
    question: "How is case hardening different from induction hardening?",
    answer: "Case hardening (carburizing/nitriding) treats the full surface layer chemically, while induction hardening uses electromagnetic heating to harden specific zones rapidly. Induction hardening gives better precision, less distortion, and faster cycle times. We offer both processes — <a href='/contact' class='text-primary hover:underline font-bold'>ask our team which is best for your component</a>."
  },
  {
    question: "Do you provide hardness testing reports with job work?",
    answer: "Yes, every batch comes with documented hardness test reports (Rockwell HRC) for quality assurance. We provide traceable reports required for OEM-grade and export-standard components."
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
