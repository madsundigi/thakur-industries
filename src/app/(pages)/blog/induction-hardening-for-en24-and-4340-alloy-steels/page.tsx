
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';
import { BlogRelatedLinks } from '@/components/shared/BlogRelatedLinks';

export const metadata: Metadata = {
  title: 'Induction Hardening for EN24 & 4340 Alloy Steels',
  description: 'Learn how EN24 and 4340 alloy steels respond to induction heat treatment and offer superior hardness.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for EN24 & 4340 Alloy Steels",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Heat Treatment Materials",
  "keywords": ["EN24 induction hardening", "4340 heat treatment Ludhiana", "alloy steel surface hardening Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-en24-and-4340-alloy-steels",
  "inLanguage": "en"
};

const hardnessData = [
    { material: "EN24", hardness: "56–60", depth: "2.5–4.0", quench: "Polymer (10–12%)" },
    { material: "4340", hardness: "57–62", depth: "3.0–5.0", quench: "Polymer or water" },
    { material: "EN19 (Reference)", hardness: "54–58", depth: "2.0–3.5", quench: "Polymer" },
];

const benefitsData = [
    { title: "Superior Surface Hardness", description: "Achieves a high-hardness martensitic layer (up to 62 HRC), making parts resistant to abrasion, impact, and fatigue." },
    { title: "Maintains Core Strength", description: "Only the surface is hardened — the core retains its ductility and toughness, essential for absorbing shock loads." },
    { title: "High Fatigue and Wear Resistance", description: "Ideal for rotating and load-bearing components, induction hardening improves component lifespan by 2–3 times." },
    { title: "Dimensional Accuracy and Low Distortion", description: "Localized heating ensures minimal warping compared to furnace hardening or flame hardening." },
    { title: "Energy and Cost Efficiency", description: "Induction hardening is faster, cleaner, and more efficient, with up to 40% lower energy use than traditional methods." },
];

export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogEn24_4340');

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
                    <span className='truncate'>EN24 & 4340 Alloy Steel Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for EN24 & 4340 Alloy Steels</h1>
                <p className="mt-4 text-xl text-muted-foreground">In Punjab’s industrial manufacturing hubs — especially Ludhiana — high-strength steels like EN24 and 4340 are widely used for shafts, gears, axles, spindles, and transmission components.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A close-up of a high-strength EN24 or 4340 alloy steel shaft."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>These steels are known for their excellent toughness, fatigue resistance, and strength, but to perform optimally under load, they need surface hardening that enhances wear resistance while keeping the core ductile. That’s where induction hardening comes in — a fast, localized, and controllable process that strengthens the outer layer of EN24 and 4340 components without affecting their internal structure.</p>
            <p>At {SITE_NAME}, Ludhiana, we specialize in precision-controlled induction hardening services for these alloy steels, using medium-frequency induction systems to achieve deep, uniform case hardening for heavy-duty parts.</p>
            
            <h2 className="text-3xl font-bold mt-12">Understanding EN24 and 4340 Alloy Steels</h2>
            <h3 className="text-2xl font-semibold mt-6">EN24 (AISI 4340 Equivalent)</h3>
            <p>EN24 is a nickel-chromium-molybdenum alloy steel offering a perfect combination of tensile strength, toughness, and wear resistance. It’s typically used in:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Transmission shafts</li>
                <li>Gears and spindles</li>
                <li>Connecting rods and crankshafts</li>
                <li>Heavy-duty axles</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6">4340 Steel (AISI 4340 / SAE 4340)</h3>
            <p>4340 is chemically similar to EN24 but has slightly higher nickel and molybdenum content, giving it better hardenability and impact resistance. It’s ideal for:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Aerospace components</li>
                <li>Tractor and automotive drive shafts</li>
                <li>Powertrain and industrial machinery parts</li>
            </ul>
            <p>Both materials respond exceptionally well to induction heat treatment, producing a hard, wear-resistant surface (up to 58–62 HRC) with a tough inner core.</p>

            <h2 className="text-3xl font-bold mt-12">How Induction Hardening Works for EN24 & 4340 Steels</h2>
            <p>Induction hardening uses electromagnetic heating to raise the steel’s surface temperature to around 850–900°C, followed by rapid polymer or water quenching to form martensite, the hardest phase of steel. Here’s a step-by-step process used at {SITE_NAME}:</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Surface Cleaning:</strong> Components are cleaned to remove oil, dirt, or oxide layers to ensure uniform heating.</li>
                <li><strong>Induction Heating:</strong> An induction coil generates an alternating magnetic field that heats the surface rapidly and uniformly.</li>
                <li><strong>Austenitizing:</strong> The heated layer reaches the austenitizing range (850–900°C) — transforming ferrite and pearlite to austenite.</li>
                <li><strong>Quenching:</strong> The part is then quenched immediately using a polymer or water-based quenching system, converting austenite to martensite.</li>
                <li><strong>Tempering (Optional):</strong> Tempering may follow to relieve internal stresses while maintaining required hardness and toughness.</li>
            </ol>

            <h2 className="text-3xl font-bold mt-12">Typical Hardness and Case Depth Achieved</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Material</TableHead>
                            <TableHead>Surface Hardness (HRC)</TableHead>
                            <TableHead>Case Depth (mm)</TableHead>
                            <TableHead>Quenching Medium</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {hardnessData.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                 <p className="text-sm text-muted-foreground mt-2"><CheckCircle className="inline-block mr-2 h-4 w-4 text-green-500" />{SITE_NAME} ensures precise temperature and time control for each material batch, guaranteeing uniform hardness and case depth.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12">Benefits of Induction Hardening for EN24 & 4340 Steels</h2>
            <div className="space-y-4">
                {benefitsData.map(item => (
                     <div key={item.title}>
                        <h3 className='text-xl font-semibold'>{item.title}</h3>
                        <p className='text-muted-foreground'>{item.description}</p>
                    </div>
                ))}
            </div>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Hardness Meets Reliability</h2>
            <p>EN24 and 4340 induction hardening provide the perfect combination of surface strength and core toughness, making them indispensable for automotive, aerospace, and industrial applications. With {SITE_NAME}’s advanced medium-frequency systems, manufacturers across Punjab can ensure deep, uniform hardening, controlled case depth, and superior fatigue and wear resistance.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Contact {SITE_NAME} for EN24 & 4340 Hardening Services</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME}, Ludhiana for EN24 and 4340 alloy steel heat treatment job work. Specializing in precision induction hardening, polymer quenching, and metallurgical quality testing for all industrial components.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/material-heat-treatment">Explore Material Services</Link>
                    </Button>
                </div>
            </div>
          <BlogRelatedLinks />
        </article>
      </div>
    </>
  );
}
