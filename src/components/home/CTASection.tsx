
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE_PHONE_NUMBER } from '@/lib/constants';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in Touch for Induction Hardening Job Work
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Ready to enhance your components? Contact us for a free consultation and quote. Let's discuss your project requirements today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto text-base py-6 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">
              Send Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
           <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base py-6 px-8">
            <a href={`tel:${SITE_PHONE_NUMBER}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Us: {SITE_PHONE_NUMBER}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
