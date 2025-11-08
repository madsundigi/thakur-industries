
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { ChevronRight } from 'lucide-react';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Polymer & Water Quenching Process',
  description: 'Learn about our controlled polymer and water-based quenching processes for minimal distortion and optimal hardness.',
};

export default function QuenchingProcessPage() {
    return (
        <div className="bg-background">
            <section className="py-24 md:py-32 bg-secondary text-foreground text-center">
                 <div className="container mx-auto px-4 md:px-6 z-10 relative">
                    <div className="text-sm text-muted-foreground mb-4">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <ChevronRight className="inline-block w-4 h-4 mx-1" />
                        <Link href="/services" className="hover:text-primary">Services</Link>
                        <ChevronRight className="inline-block w-4 h-4 mx-1" />
                        <span>Quenching Process</span>
                    </div>
                    <PageHeader
                        title="Polymer & Water Quenching Process"
                        description="Our advanced quenching methods ensure controlled cooling for optimal hardness and minimal distortion in every component."
                    />
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="prose lg:prose-xl dark:prose-invert mx-auto">
                        <p>At Thakur Induction, our quenching process is a critical step in achieving the desired metallurgical properties for your components. We utilize both polymer and water-based quenching to provide flexible and precise cooling solutions tailored to the material and geometry of each part.</p>
                        
                        <h2>Polymer Quenching</h2>
                        <p>Polymer quenching is a modern technique that offers a more controlled and less severe cooling rate compared to water. This makes it ideal for:</p>
                        <ul>
                            <li>High-hardenability and alloy steels</li>
                            <li>Complex shapes and thin sections prone to distortion</li>
                            <li>Achieving uniform hardness across the surface</li>
                            <li>Minimizing the risk of quench cracking</li>
                        </ul>

                        <h2>Water Quenching</h2>
                        <p>Water quenching provides a very rapid cooling rate, which is necessary for achieving maximum hardness in low to medium-hardenability steels. It is effective for:</p>
                        <ul>
                            <li>Simple-shaped components</li>
                            <li>Materials requiring a very fast cooling rate to achieve martensitic transformation</li>
                            <li>Cost-effective and robust hardening applications</li>
                        </ul>
                        
                        <h3>Our Commitment to Quality</h3>
                        <p>We carefully monitor quenchant concentration, temperature, and agitation to ensure consistent and repeatable results for every batch. Our expertise in selecting the right quenching method is key to delivering distortion-free components that meet your exact specifications.</p>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    )
}
