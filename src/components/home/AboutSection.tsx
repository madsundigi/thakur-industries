import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'aboutTimeline');

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {aboutImage && (
             <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
                <Image
                    src={aboutImage.imageUrl}
                    alt="Thakur Industries factory floor"
                    data-ai-hint={aboutImage.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
          )}

          <div>
            <PageHeader
              title="Decades of Industrial Excellence"
              description="Founded on the principles of precision, reliability, and innovation, Thakur Industries has grown to become Ludhiana's most trusted partner in industrial heat treatment."
            />
            <p className="mt-4 text-muted-foreground">
              Our state-of-the-art facility, combined with a team of seasoned experts, allows us to tackle the most complex challenges and deliver results that exceed expectations. We are committed to continuous improvement and investment in the latest technology.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
