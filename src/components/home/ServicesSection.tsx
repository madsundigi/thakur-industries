import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <PageHeader 
            title="Our Core Heat Treatment Services"
            description="We deliver a comprehensive range of industrial heat treatment services in Ludhiana, ensuring optimal material properties for any application."
            className="text-center mb-12"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const image = PlaceHolderImages.find(img => img.id === service.image);
            return (
              <Card key={service.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {image && (
                  <div className="relative h-48 w-full">
                     <Image
                        src={image.imageUrl}
                        alt={`Image for ${service.title} in Ludhiana`}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                     />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                   <Button asChild variant="link" className="p-0 h-auto justify-start mt-4">
                      <Link href={`/services#${service.id}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
