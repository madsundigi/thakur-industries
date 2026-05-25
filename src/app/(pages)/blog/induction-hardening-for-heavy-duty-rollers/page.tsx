
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Induction Hardening for Heavy-Duty Rollers in Punjab',
  description: 'Learn about induction hardening techniques for large rollers used in machinery and manufacturing.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Induction Hardening for Heavy-Duty Rollers in Punjab",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Industrial Heat Treatment",
  "keywords": ["roller hardening Punjab", "surface hardening for rollers", "industrial component treatment"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/induction-hardening-for-heavy-duty-rollers",
  "inLanguage": "en"
};

const rollerHardeningParams = [
    { material: "EN8 / C45", hardness: "50–55", depth: "2–4", quench: "Water" },
    { material: "EN19 / 4140", hardness: "54–58", depth: "3–5", quench: "Polymer" },
    { material: "EN24 / 4340", hardness: "55–60", depth: "4–7", quench: "Polymer" },
    { material: "Cast Iron Rollers", hardness: "45–52", depth: "2–3", quench: "Polymer" },
];

const rollerApplications = [
    { industry: "Steel & Rolling Mills", examples: "Guide rollers, pinch rollers, conveyor rollers", benefit: "Higher surface hardness and fatigue life" },
    { industry: "Textile & Printing", examples: "Calendar rollers, press rollers", benefit: "Improved surface finish and wear resistance" },
    { industry: "Paper Manufacturing", examples: "Feed rollers, coating rollers", benefit: "Uniform hardness and reduced wear" },
    { industry: "Cement & Mining", examples: "Conveyor and drive rollers", benefit: "Resistance to impact and abrasion" },
    { industry: "Machine Tools", examples: "Support and feed rollers", benefit: "Dimensional stability and precision" },
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogRollerHardening');

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
                    <span className='truncate'>Induction Hardening for Heavy-Duty Rollers</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Induction Hardening for Heavy-Duty Rollers in Punjab</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn about induction hardening techniques for large rollers used in machinery and manufacturing.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A large industrial roller being treated with induction hardening."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <p>In industries such as steel processing, textile manufacturing, paper production, and heavy machinery, industrial rollers play a crucial role in material handling and forming operations. These rollers are continuously exposed to high friction, heavy loads, and abrasive environments, which can cause rapid surface wear and deformation if not properly treated.</p>
            <p>At {SITE_NAME}, we specialize in roller hardening services using medium-frequency induction systems that ensure uniform heating, deep case hardening, and minimal distortion — even for heavy and large-diameter components.</p>
            
            <h2 className="text-3xl font-bold mt-12">Why Induction Hardening Is Ideal for Industrial Rollers</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Deep case depth:</strong> Up to 5–10 mm depending on roller size and material.</li>
                <li><strong>Improved wear resistance:</strong> Prevents abrasion and pitting in high-friction environments.</li>
                <li><strong>Extended lifespan:</strong> Reduces maintenance and replacement costs.</li>
                <li><strong>Controlled distortion:</strong> Ensures dimensional accuracy and balanced geometry.</li>
                <li><strong>Energy efficiency:</strong> Only the required surface is heated, reducing overall energy usage.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12">Induction Hardening Process for Industrial Rollers</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li><strong>Surface Cleaning & Preparation:</strong> Rollers are cleaned to remove oil, rust, or scale for consistent heating.</li>
                <li><strong>Induction Heating:</strong> The roller is placed under a custom-designed coil that generates a magnetic field around its surface. This field induces eddy currents, rapidly heating the surface layer of the roller to 850–950°C.</li>
                <li><strong>Quenching:</strong> Immediately after heating, the roller undergoes polymer or water quenching, converting the heated layer into martensite, which gives it a hard, wear-resistant surface.</li>
                <li><strong>Tempering (Optional):</strong> Tempering relieves residual stresses while maintaining the desired surface hardness.</li>
                <li><strong>Testing & Quality Verification:</strong> Post-hardening, the roller’s surface hardness, case depth, and geometry are tested to ensure uniformity and performance.</li>
            </ol>
            
            <h2 className="text-3xl font-bold mt-12">Roller Hardening Parameters (Typical Values)</h2>
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
                        {rollerHardeningParams.map((row) => (
                            <TableRow key={row.material}>
                                <TableCell className="font-medium">{row.material}</TableCell>
                                <TableCell>{row.hardness}</TableCell>
                                <TableCell>{row.depth}</TableCell>
                                <TableCell>{row.quench}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Applications of Roller Hardening in Punjab’s Industries</h2>
            <div className="my-8 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Industry</TableHead>
                            <TableHead>Component Examples</TableHead>
                            <TableHead>Benefit of Induction Hardening</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rollerApplications.map((row) => (
                            <TableRow key={row.industry}>
                                <TableCell className="font-medium">{row.industry}</TableCell>
                                <TableCell>{row.examples}</TableCell>
                                <TableCell>{row.benefit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <h2 className="text-3xl font-bold mt-12">Conclusion: Stronger Rollers, Longer Life with Induction Hardening</h2>
            <p>Induction hardening provides a perfect balance between surface strength and structural integrity, making it ideal for heavy-duty industrial rollers. By combining precision heating, controlled quenching, and advanced monitoring, {SITE_NAME} ensures every roller delivers exceptional wear resistance, uniform hardness, and extended service life.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Contact {SITE_NAME} for Industrial Roller Hardening Services</h3>
                <p className="mt-2 text-muted-foreground">Get professional induction hardening job work for industrial rollers and heavy components at {SITE_NAME}, Ludhiana.</p>
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
