
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
  title: 'Improving Surface Finish After Induction Hardening',
  description: 'Learn post-hardening machining and grinding techniques that ensure precise surface finishes.',
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Improving Surface Finish After Induction Hardening",
  "author": { "@type": "Organization", "name": "Thakur Industries" },
  "publisher": { "@type": "Organization", "name": "Thakur Industries", "logo": {"@type": "ImageObject", "url": "https://thakurindustries.in/logo.png"} },
  "datePublished": new Date().toISOString().split('T')[0],
  "articleSection": "Quality Control",
  "keywords": ["surface finish after induction hardening", "post-hardening grinding Ludhiana", "machining after heat treatment Punjab"],
  "mainEntityOfPage": "https://thakurindustries.in/blog/surface-finish-and-machining-after-induction-hardening",
  "inLanguage": "en"
};

const surfaceChallenges = [
    { title: "Rapid Heating and Cooling", description: "Uneven heat penetration may cause slight expansion and contraction." },
    { title: "Oxide Scaling", description: "Exposure to air at high temperatures leads to oxide layer formation." },
    { title: "Quenching Distortion", description: "Improper quenching flow can leave the surface uneven." },
    { title: "Coil Misalignment or Fixture Stress", description: "Can cause uneven heating zones and rough spots." }
];

const postHardeningTechniques = [
    { title: "Cylindrical Grinding", description: "Removes surface irregularities and restores dimension after hardening. Ideal for shafts, axles, rollers, and spindles.", benefits: ["Precision roundness (±0.005 mm)", "Mirror-finish surface (Ra ≤ 0.4 µm)", "No micro-crack formation due to low-stress grinding"] },
    { title: "Centerless Grinding", description: "Ideal for continuous production and uniform outer diameter control.", benefits: ["Fast, precise, and distortion-free", "Maintains high surface quality on long shafts"], useCase: "Automotive transmission shafts, hydraulic rods, and drive pins." },
    { title: "Honing & Lapping", description: "Removes fine peaks on the surface left after grinding for ultra-smooth texture.", benefits: ["Enhanced fit between mating components", "Improved lubricant retention", "Reduced friction and wear"] },
    { title: "Super Finishing (Mirror Polish)", description: "Achieves extremely low surface roughness (Ra ≤ 0.1 µm).", benefits: ["Eliminates grinding marks", "Improves fatigue life", "Reduces contact stress"] },
    { title: "Post-Heat Machining", description: "Final machining (turning, boring, or milling) performed after heat treatment to correct size deviations using special carbide or CBN tools." }
];

const bestPractices = [
    { factor: "Hardness range", practice: "Maintain between 50–60 HRC for machinability" },
    { factor: "Grinding speed", practice: "Use moderate wheel speed to avoid burn marks" },
    { factor: "Cooling", practice: "Always use coolant to prevent micro-cracks" },
    { factor: "Quenching type", practice: "Polymer quenching minimizes distortion" },
    { factor: "Case depth", practice: "Ensure finishing doesn’t remove hardened layer" }
];

const caseStudy = {
    surfaceHardness: "56–58 HRC",
    finalRoughness: "Ra 0.35 µm",
    dimensionalAccuracy: "±0.01 mm",
    result: "Perfectly finished shafts ready for OEM-level performance."
};

const finalBenefits = [
    "Improved Fatigue Life – Smooth surfaces prevent crack initiation.",
    "Better Fit and Assembly – Ensures tight tolerance mating parts.",
    "Enhanced Lubrication – Retains oil film for longer operational life.",
    "Reduced Noise and Friction – Ideal for gears and rotating components.",
    "Export-Ready Appearance – Shiny, uniform finish for international clients."
];


export default function BlogPostPage() {
  const featureImage = PlaceHolderImages.find(img => img.id === 'blogSurfaceFinish');

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
                    <span className='truncate'>Improving Surface Finish After Induction Hardening</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Improving Surface Finish After Induction Hardening</h1>
                <p className="mt-4 text-xl text-muted-foreground">Learn post-hardening machining and grinding techniques that ensure precise surface finishes.</p>
            </div>
          
            {featureImage && (
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl my-8">
                    <Image
                        src={featureImage.imageUrl}
                        alt="A perfectly polished metal shaft after induction hardening and grinding."
                        data-ai-hint={featureImage.imageHint}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h2 className="text-3xl font-bold mt-12">Introduction: Why Surface Finish Matters After Induction Hardening</h2>
            <p>Induction hardening gives components the surface strength and wear resistance they need — but once the process is complete, achieving the right surface finish becomes equally important. A hardened surface may appear strong but can develop minor distortions, scaling, or roughness that affect the component’s performance and fit.</p>
            <p>That’s why post-hardening finishing — such as grinding, polishing, and light machining — is a vital step in the overall heat treatment process.</p>
            <p>At {SITE_NAME}, Ludhiana, we ensure every induction-hardened part not only meets hardness and case depth requirements but also maintains superior dimensional accuracy and finish quality.</p>
            
            <h2 className="text-3xl font-bold mt-12">What Happens to the Surface During Induction Hardening?</h2>
            <p>During induction hardening, the component’s surface is rapidly heated and quenched. While this improves hardness, it can also cause:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Slight thermal distortion or surface waviness</li>
                <li>Minor oxidation or discoloration</li>
                <li>Variations in micro-topography</li>
            </ul>
            <p>To restore smoothness and accuracy, post-hardening finishing operations are applied.</p>

            <h2 className="text-3xl font-bold mt-12">Post-Hardening Techniques to Improve Surface Finish</h2>
            <p>After induction hardening, components undergo finishing processes to achieve the required smoothness, flatness, and dimensional tolerance. Here are the most effective methods:</p>
            
            <h3 className="text-2xl font-semibold mt-6">1. Cylindrical Grinding</h3>
            <p><strong>Purpose:</strong> Removes surface irregularities and restores dimension after hardening. Ideal for shafts, axles, rollers, and spindles.</p>
            
            <h3 className="text-2xl font-semibold mt-6">2. Centerless Grinding</h3>
            <p><strong>Purpose:</strong> Ideal for continuous production and uniform outer diameter control, ensuring high surface quality on long shafts.</p>

            <h3 className="text-2xl font-semibold mt-6">3. Honing & Lapping</h3>
            <p><strong>Purpose:</strong> Removes fine peaks on the surface left after grinding for an ultra-smooth texture, enhancing fit and lubricant retention.</p>

            <h3 className="text-2xl font-semibold mt-6">4. Super Finishing (Mirror Polish)</h3>
            <p><strong>Purpose:</strong> Achieves extremely low surface roughness (Ra ≤ 0.1 µm), eliminating grinding marks and reducing contact stress.</p>

            <h3 className="text-2xl font-semibold mt-6">5. Post-Heat Machining</h3>
            <p>In certain cases, final machining (turning, boring, or milling) is performed after heat treatment to correct size deviations using special carbide or CBN tools.</p>

            <h2 className="text-3xl font-bold mt-12">Key Considerations for Post-Hardening Surface Improvement</h2>
            <Table className="my-8">
                <TableHeader>
                    <TableRow>
                        <TableHead>Factor</TableHead>
                        <TableHead>Best Practice</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bestPractices.map(item => (
                        <TableRow key={item.factor}>
                            <TableCell className="font-medium">{item.factor}</TableCell>
                            <TableCell>{item.practice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <h2 className="text-3xl font-bold mt-12">Case Study: Post-Hardening Finish for Automotive Shafts</h2>
            <p>For a tractor transmission shaft made of EN19, our process includes induction hardening followed by cylindrical grinding. We consistently achieve:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground my-4">
                <li>Surface Hardness: {caseStudy.surfaceHardness}</li>
                <li>Final Surface Roughness: {caseStudy.finalRoughness}</li>
                <li>Dimensional Accuracy: {caseStudy.dimensionalAccuracy}</li>
            </ul>
            <p className="font-semibold text-foreground"><CheckCircle className="inline-block mr-2 h-5 w-5 text-green-500" />{caseStudy.result}</p>
            
            <h2 className="text-3xl font-bold mt-12">Conclusion: Strength with Smoothness</h2>
            <p>A component isn’t truly complete after hardening — it’s complete when its surface is strong, smooth, and precise. By combining controlled induction heating, proper quenching, and post-hardening finishing, manufacturers can achieve both mechanical durability and aesthetic perfection.</p>
            <p>At {SITE_NAME}, we guarantee precision hardness with premium finish — ready for performance and export standards alike.</p>
            
            <div className="mt-12 not-prose rounded-lg bg-secondary p-8 text-center">
                <h3 className="text-2xl font-bold">Looking for Post-Hardening Finishing Services?</h3>
                <p className="mt-2 text-muted-foreground">Contact {SITE_NAME} for precision surface hardening and finishing in Ludhiana, Punjab.</p>
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
