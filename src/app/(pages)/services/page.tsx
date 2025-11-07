import type { Metadata } from 'next';
import Image from 'next/image';
import { SERVICES, SITE_NAME } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: `Industrial Heat Treatment Services`,
  description: `Explore our expert services: Induction Hardening, Case Hardening, and Custom Heat Treatment solutions at ${SITE_NAME} in Ludhiana.`,
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <PageHeader
        title="Our Services"
        description="Precision, power, and performance. Our heat treatment services are engineered to meet the highest industrial standards."
        className="mb-12 text-center"
      />
      <div className="space-y-20">
        {SERVICES.map((service, index) => {
          const image = PlaceHolderImages.find(img => img.id === service.image);
          const isReversed = index % 2 !== 0;
          return (
            <div key={service.id} id={service.id} className="grid scroll-mt-24 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={isReversed ? 'lg:order-2' : ''}>
                {image && (
                  <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
                    <Image
                      src={image.imageUrl}
                      alt={service.title}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
              </div>
              <div className={isReversed ? 'lg:order-1' : ''}>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{service.title}</h3>
                <p className="mt-4 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Increased Hardness & Strength</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Enhanced Wear Resistance</span>
                  </li>
                   <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Improved Fatigue Life</span>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
