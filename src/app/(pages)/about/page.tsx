
import type { Metadata } from 'next';
import Image from 'next/image';
import { Award, Factory, Users, Zap } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: `About ${SITE_NAME} | Trusted Heat Treatment Specialist in India`,
  description: `Learn about our history, commitment to quality, and the expert team at ${SITE_NAME}, a trusted heat treatment company in Ludhiana, Punjab, serving clients across India.`,
};

const timelineEvents = [
  { year: '1998', event: `Founded Thakur Industries with a vision to provide top-tier heat treatment services in Ludhiana.` },
  { year: '2005', event: 'Expanded facility and invested in our first advanced induction hardening machine, becoming a key induction hardening plant in Ludhiana.' },
  { year: '2012', event: 'Achieved ISO 9001 certification, underscoring our commitment to quality in all heat treatment job work.' },
  { year: '2018', event: 'Introduced custom aerospace part hardening solutions, becoming a key regional partner for specialized industrial heat treatment.' },
  { year: '2023', event: 'Upgraded to next-generation automated systems for enhanced precision and efficiency in steel hardening services.' },
];

const stats = [
  { icon: Award, value: '25+', label: 'Years of Experience' },
  { icon: Users, value: '500+', label: 'Satisfied Clients' },
  { icon: Zap, value: '1M+', label: 'Parts Treated' },
  { icon: Factory, value: 'ISO 9001', label: 'Certified Quality' },
];

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'aboutTimeline');

  return (
    <div className="container mx-auto px-4 md:px-6">
      <PageHeader
        title="Our Story of Precision and Durability"
        description={`For over two decades, ${SITE_NAME} has been at the forefront of industrial innovation in Ludhiana, forging a reputation for uncompromising quality. We are a trusted induction hardening specialist in India.`}
        className="mb-12 text-center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {aboutImage && (
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                    src={aboutImage.imageUrl}
                    alt="Thakur Industries factory floor showing advanced heat treatment machinery"
                    data-ai-hint={aboutImage.imageHint}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        )}
        <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">To be the most reliable and technologically advanced partner for our clients, ensuring the enhanced durability and performance of their critical components through precision heat treatment, while upholding our promise: Your Durability is Our Responsibility.</p>
        </div>
      </div>
      
      <div className="py-16 md:py-24">
        <h3 className="text-3xl font-bold text-center mb-12">Our Journey as a Heat Treatment Company in Ludhiana</h3>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {timelineEvents.map((item, index) => (
            <div key={index} className="relative mb-8 flex items-center justify-between w-full">
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1 text-right' : 'order-3 text-left'}`}>
                <p className="text-lg font-bold text-primary">{item.year}</p>
                <p className="text-muted-foreground">{item.event}</p>
              </div>
              <div className="order-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background"></div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                    <stat.icon className="h-10 w-10 text-primary" />
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
}
