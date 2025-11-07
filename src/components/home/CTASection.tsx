import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { CTA_PRIMARY, CTA_SECONDARY } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Ready to Enhance Your Component Durability?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Partner with Ludhiana's leading heat treatment specialists. Contact us today for a consultation and receive a complimentary test sample to experience the Thakur Industries difference.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto text-lg py-7 px-10">
            <Link href="/contact">
              {CTA_PRIMARY}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg py-7 px-10">
            <Link href="/contact">
              {CTA_SECONDARY}
              <Phone className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
