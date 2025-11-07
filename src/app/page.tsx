import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { OrbitingServices } from '@/components/home/OrbitingServices';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { AboutSection } from '@/components/home/AboutSection';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { SITE_NAME, SITE_PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Induction Heat Treatment & Case Hardening | ${SITE_NAME} Ludhiana`,
  description: `${SITE_NAME} — Precision industrial heat treatment services in Ludhiana, Punjab. Specializing in induction hardening and case hardening. Get 1 free testing sample. Call ${SITE_PHONE_NUMBER}.`,
};


export default function Home() {
  return (
    <>
      <Hero />
      <OrbitingServices />
      <IndustriesSection />
      <AboutSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
