
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'How to Prevent Cracks in Induction Hardened Components',
  description: 'Learn techniques to control quenching and minimize surface cracking during induction hardening.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Prevent Cracks in Induction Hardened Components",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["crack prevention in induction hardening", "surface stress control", "quenching management Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/how-to-prevent-cracks-in-induction-hardened-components",
  "inLanguage": "en"
};

const crackCauses = [
    { cause: "Overheating beyond the critical temperature", effect: "Grain coarsening and brittle surface layer" },
    { cause: "Too rapid quenching", effect: "Thermal shock and micro-cracks" },
    { cause: "High carbon or alloy steel without tempering", effect: "Brittle martensite formation" },
    { cause: "Sharp edges or geometry transitions", effect: "Localized stress concentration" },
    { cause: "Non-uniform heating or cooling", effect: "Uneven case depth and residual stress" },
];

const quenchingParams = [
    { parameter: "Quench Type", strategy: "Polymer (8–12%) preferred over water" },
    { parameter: "Flow Rate", strategy: "Uniform, 5–8 L/min per nozzle" },
    { parameter: "Quench Angle", strategy: "360° surround for shafts and gears" },
    { parameter: "Temperature Control", strategy: "Quench temperature maintained between 25–35°C" },
    { parameter: "Agitation", strategy: "Continuous flow to avoid vapor blanket formation" },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogCracks');

  return (
    <>
      <JsonLd data={blogSchema} />
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-8">
                <div className="text-sm text-muted-foreground mb-4">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <ChevronRight className="inline-block w-4 h-4 mx-1" />
                    <Link href="/blog" className="hover:text-primary">Blog</Link>
                    <ChevronRight className="inline-block w-4 h-4 mx-1" />
                    <span className='truncate'>How to Prevent Cracks</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">How to Prevent Cracks in Induction Hardened Components</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn techniques to control quenching and minimize surface cracking during induction hardening.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="Illustration of a crack-free metal surface vs a cracked one"
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            
            <h2 className="text-3xl font-bold mt-12">Introduction: Cracking — The Hidden Challenge in Induction Hardening</h2>
            <p>Induction hardening gives components high surface hardness and excellent wear resistance. However, one of the most common and costly challenges is surface cracking—tiny fractures that appear after heat treatment or during service life. These cracks often result from thermal shock, residual stress, or improper quenching and can lead to premature failure of shafts, gears, and other critical components.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in crack prevention and surface stress management, ensuring every part meets its strength, fatigue, and reliability goals.</p>

            <h2 className="text-3xl font-bold mt-12">Why Cracks Form During Induction Hardening</h2>
            <p>Cracking occurs when stresses from rapid heating and cooling exceed the metal’s tensile strength. The sudden temperature difference between the hot surface and the cooler core leads to expansion and contraction, creating stress zones. Here are the main causes:</p>
            <Table className="my-8">
                <TableHeader>
                    <TableRow>
                        <TableHead>Cause</TableHead>
                        <TableHead>Effect</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {crackCauses.map(item => (
                        <TableRow key={item.cause}>
                            <TableCell className="font-medium">{item.cause}</TableCell>
                            <TableCell>{item.effect}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <p>Controlling each stage—heating, holding, and quenching—is essential for crack-free induction hardening.</p>

            <h2 className="text-3xl font-bold mt-12">Preventive Measures for Crack-Free Induction Hardening</h2>
            <p>At {SITE_NAME}, we apply a structured approach to prevent surface cracking:</p>
            <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Controlled Heating Rate:</span> Gradual heating reduces thermal stress. We use programmable systems to control power and time precisely.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Customized Coil Design:</span> Coils are tailored to the component’s shape for even energy distribution.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Optimized Quenching Strategy:</span> We use polymer quenching for sensitive materials and multi-zone sprays for large parts.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Post-Tempering Process:</span> Tempering (at 150–200°C) relieves residual stresses and prevents delayed cracking.</div></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" /><div><span className="font-semibold">Pre- and Post-Inspection:</span> We use magnetic particle or dye penetrant testing to detect microcracks.</div></li>
            </ul>
             <p className="mt-4">💡 Crack-free results come from engineering discipline—not trial and error.</p>

            <h2 className="text-3xl font-bold mt-12">Role of Quenching Management in Crack Prevention</h2>
            <p>Quenching is the most critical stage for crack control. At {SITE_NAME}, we follow strict quenching management protocols:</p>
             <Table className="my-8">
                <TableHeader>
                    <TableRow>
                        <TableHead>Parameter</TableHead>
                        <TableHead>Control Strategy</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {quenchingParams.map(item => (
                        <TableRow key={item.parameter}>
                            <TableCell className="font-medium">{item.parameter}</TableCell>
                            <TableCell>{item.strategy}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
             <p>🧠 Consistent cooling prevents uneven contraction and residual stress accumulation.</p>


            <h2 className="text-3xl font-bold mt-12">Conclusion: Precision Is the Best Crack Prevention</h2>
            <p>Crack prevention in induction hardening isn’t just about quenching—it’s about complete process control. From coil design and heating parameters to quenching management and post-tempering, every step must work in harmony. At {SITE_NAME}, we’ve perfected this balance to deliver crack-free, distortion-free, and high-performance components to manufacturers across Ludhiana and Punjab.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Facing Cracks or Distortion in Your Components?</h3>
                <p className="mt-2 text-muted-foreground">Partner with {SITE_NAME}, Ludhiana—specialists in surface stress control, polymer quenching, and advanced heat treatment services.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
