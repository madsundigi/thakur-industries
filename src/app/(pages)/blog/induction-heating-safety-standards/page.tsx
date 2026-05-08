
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Shield, Zap, Thermometer, Cpu } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Induction Heating Safety Standards for Industries',
  description: 'Learn essential safety standards and best practices for operating induction heat treatment equipment.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Heating Safety Standards for Industries",
  "author": { "@type": "Organization", "name": "Thakur Induction" },
  "publisher": { "@type": "Organization", "name": "Thakur Induction", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Safety",
  "keywords": ["induction heating safety", "industrial safety Punjab", "heat treatment precautions Ludhiana"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-heating-safety-standards-for-industries",
  "inLanguage": "en"
};

const safetyPractices = [
    { title: "Electrical Safety", icon: Zap, description: "All electrical cabinets are fully insulated and grounded. Operators wear rubber-soled footwear and insulating gloves. Emergency cut-off switches are positioned near every work zone.", },
    { title: "Thermal and Fire Safety", icon: Thermometer, description: "We use heat-resistant gloves and PPE suits, non-flammable polymer quenching fluids, and have dedicated fire extinguishers and thermal sensors in each unit.", },
    { title: "Magnetic Field Safety", icon: Shield, description: "Shielded induction coil setups and operator distance protocols are maintained. Regular EMF measurements are conducted as per IEC guidelines.", },
    { title: "Mechanical Safety", icon: Cpu, description: "Ergonomic lifting aids, automatic positioning jigs, and trained operators ensure safe handling of heavy components like shafts and gears.", }
];

const safetyBenefits = [
    { advantage: 'Reduced downtime', impact: 'Fewer accidents and breakdowns' },
    { advantage: 'Improved quality', impact: 'Consistent hardness results' },
    { advantage: 'Employee confidence', impact: 'Safe working conditions' },
    { advantage: 'Compliance readiness', impact: 'Easier audits and certifications' },
    { advantage: 'Customer trust', impact: 'Reliability and professionalism' },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogSafetyStandards');

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
                    <span className='truncate'>Induction Heating Safety Standards</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Heating Safety Standards for Industries</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn essential safety standards and best practices for operating induction heat treatment equipment.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt={featureImage.description}
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Safety First in Every Heat Treatment Operation</h2>
            <p>In modern manufacturing, induction heating is one of the most efficient, precise, and clean methods of hardening metal components. However, this advanced process involves high voltage, magnetic fields, and intense localized heat, which means that strict safety standards must be followed to ensure safe and reliable operations.</p>
            <p>At {SITE_NAME}, Ludhiana, we operate under internationally recognized safety norms, ensuring that every heat treatment job is carried out with zero risk to personnel, equipment, and environment.</p>

            <h2 className="text-3xl font-bold mt-12">Key Safety Practices at {SITE_NAME}</h2>
            <p>Preventable risks from high-voltage circuits, heated surfaces, magnetic fields, and mechanical handling are managed through our comprehensive safety protocols.</p>
            
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {safetyPractices.map(practice => (
                    <div key={practice.title} className="flex items-start gap-4 rounded-lg border bg-card p-4">
                        <practice.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-card-foreground">{practice.title}</h3>
                            <p className="text-muted-foreground text-sm">{practice.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold mt-12">Personal Protective Equipment (PPE)</h2>
            <p>No induction operation is performed without proper PPE gear. Our operators are equipped with face shields, heat-resistant gloves, insulated footwear, and ear protection to ensure maximum safety.</p>

            <h2 className="text-3xl font-bold mt-12">Safety Audits and Maintenance</h2>
            <p>At {SITE_NAME}, we follow a structured safety audit program, including daily equipment checks, weekly electrical inspections, and monthly calibrations, to maintain the highest industrial safety standards. All operators undergo regular safety training.</p>

            <h2 className="text-3xl font-bold mt-12">Environmental Safety</h2>
            <p>Our induction systems are inherently cleaner than conventional methods. We use biodegradable polymer quenching solutions and water recycling units to minimize our environmental footprint, aligning with green manufacturing goals.</p>

            <h2 className="text-3xl font-bold mt-12">Benefits of High Safety Standards</h2>
             <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Advantage</TableHead>
                            <TableHead>Impact</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {safetyBenefits.map((row) => (
                            <TableRow key={row.advantage}>
                                <TableCell className="font-medium">{row.advantage}</TableCell>
                                <TableCell>{row.impact}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Safety is the Foundation of Quality</h2>
            <p>In the world of induction heat treatment, precision and safety must coexist. At {SITE_NAME}, we’ve built our reputation on trust, technology, and total safety — serving industries across Ludhiana, Punjab, Haryana, and Delhi with commitment and care.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for a Safe, ISO-Certified Heat Treatment Provider?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, your trusted partner for precision and protection in industrial hardening.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                </div>
            </div>
        </article>
      </div>
    </>
  );
}
