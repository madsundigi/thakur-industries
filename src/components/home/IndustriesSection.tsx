import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { INDUSTRIES } from '@/lib/constants';
import PageHeader from '@/components/shared/PageHeader';

export function IndustriesSection() {
    const industryImage = PlaceHolderImages.find(img => img.id === 'industryAutomotive');
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        <PageHeader
                            title="Industries We Serve"
                            description="From automotive to aerospace, our precision heat treatment processes are trusted by leaders in a wide range of demanding industries."
                        />

                        <ul className="mt-8 grid grid-cols-2 gap-4">
                            {INDUSTRIES.map((industry) => (
                                <li key={industry.id} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span className="font-medium">{industry.title}</span>
                                </li>
                            ))}
                        </ul>

                        <Button asChild className="mt-8" size="lg">
                            <Link href="/industries">Explore Our Industry Solutions</Link>
                        </Button>
                    </div>

                    <div className="order-1 lg:order-2">
                      {industryImage && (
                        <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                            <Image
                                src={industryImage.imageUrl}
                                alt="Automotive industry manufacturing"
                                data-ai-hint={industryImage.imageHint}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                      )}
                    </div>
                </div>
            </div>
        </section>
    );
}
