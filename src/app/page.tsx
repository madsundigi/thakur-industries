
import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { IndustriesServed } from '@/components/home/IndustriesServed';
import { MaterialExpertise } from '@/components/home/MaterialExpertise';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ServiceArea } from '@/components/home/ServiceArea';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Induction Hardening & Heat Treatment in Ludhiana, Punjab',
  description: 'Leading induction heat treatment and case hardening job work provider in Ludhiana & Punjab. Serving nearby Haryana & Delhi industries.',
};


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <IndustriesServed />
      <MaterialExpertise />
      <ProcessSection />
      <ServiceArea />
      <CTASection />
    </>
  );
}
