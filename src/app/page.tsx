
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { IndustriesServed } from '@/components/home/IndustriesServed';
import { MaterialExpertise } from '@/components/home/MaterialExpertise';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ServiceArea } from '@/components/home/ServiceArea';
import { CTASection } from '@/components/home/CTASection';
import { Testimonials } from '@/components/home/Testimonials';
import { Faq } from '@/components/home/Faq';

export const metadata: Metadata = {
  title: 'Induction Hardening Job Work in Ludhiana Punjab | Thakur Industries',
  description: 'Top induction hardening & heat treatment job work company in Ludhiana, Punjab. Gear hardening, shaft hardening, bearing race & case hardening. Serving Punjab, Haryana & Delhi. Call +91 7900000776.',
  keywords: [
    'induction hardening Ludhiana',
    'heat treatment job work Punjab',
    'gear hardening Ludhiana',
    'shaft hardening Punjab',
    'induction hardening job work',
    'case hardening Ludhiana',
    'heat treatment company Punjab',
    'induction heat treatment Ludhiana',
    'surface hardening Punjab',
    'bearing race hardening',
  ],
  alternates: { canonical: '/' },
};


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <IndustriesServed />
      <Testimonials />
      <MaterialExpertise />
      <ProcessSection />
      <ServiceArea />
      <Faq />
      <CTASection />
    </>
  );
}
