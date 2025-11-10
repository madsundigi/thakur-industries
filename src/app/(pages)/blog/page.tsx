
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: `Blog & Articles on Heat Treatment | ${SITE_NAME}`,
  description: `Explore informational articles about heat treatment. Learn what is induction hardening, its advantages, and the difference between case hardening and induction hardening.`,
};

const blogPosts = [
  {
    slug: 'what-is-induction-hardening-ludhiana',
    title: 'A Step-by-Step Guide to the Induction Hardening Process',
    description: 'A look into the induction hardening process, its advantages, and why it is a critical manufacturing step for Ludhiana\'s industrial sector.',
    date: 'October 25, 2023',
    imageId: 'blogPost1'
  },
  {
    slug: 'difference-between-induction-and-case-hardening',
    title: 'Induction Hardening vs Case Hardening – Which Is Better for Steel Components?',
    description: 'Understand the key differences, benefits, and applications when choosing between case hardening and induction hardening for your components.',
    date: 'November 08, 2024',
    imageId: 'blogPost2'
  },
  {
    slug: 'top-benefits-of-induction-heat-treatment',
    title: 'Top Benefits of Induction Heat Treatment for Industrial Components',
    description: 'Discover how induction heat treatment improves component strength, precision, and durability in Ludhiana and Punjab industries.',
    date: 'July 26, 2024',
    imageId: 'blogPost4'
  },
  {
    slug: 'materials-suitable-for-induction-hardening',
    title: 'Top Materials Suitable for Induction Hardening — EN8, EN19, 4140 & More',
    description: 'Find out which steel materials give the best results under induction hardening for industrial components in Punjab.',
    date: 'January 15, 2024',
    imageId: 'blogPost5'
  },
  {
    slug: 'induction-hardening-for-automotive-parts',
    title: 'Induction Hardening for Automotive Parts — Strength That Drives Performance',
    description: 'Specialized induction hardening for automotive gears, shafts, and crankshafts for Punjab\'s automotive industry.',
    date: 'July 30, 2024',
    imageId: 'blogAutomotiveParts'
  },
  {
    slug: 'role-of-quenching-in-induction-hardening',
    title: 'Understanding the Role of Polymer & Water Quenching in Induction Hardening',
    description: 'Explore how polymer and water quenching affect the hardness, cooling rate, and structure of heat-treated metals.',
    date: 'August 15, 2024',
    imageId: 'blogQuenchingRole'
  },
  {
    slug: 'surface-vs-through-hardening',
    title: 'Surface Hardening vs. Through Hardening: Which is Right for You?',
    description: 'Understand the differences between surface hardening and through hardening and which process is right for your industrial components.',
    date: 'August 20, 2024',
    imageId: 'blogHardeningComparison'
  },
  {
    slug: 'heat-treatment-for-en-series-steels',
    title: 'Heat Treatment & Induction Hardening for EN Series Steels — EN8, EN19, EN24',
    description: 'Detailed guide on induction hardening & heat treatment processes for EN steels widely used in Punjab\'s industries.',
    date: 'August 25, 2024',
    imageId: 'blogEnSeries'
  },
  {
    slug: 'how-induction-hardening-increases-component-life',
    title: 'How Induction Hardening Extends the Life of Shafts, Gears, and Tools',
    description: 'Learn how surface hardening and induction processes enhance wear resistance and durability of metal components.',
    date: 'September 05, 2024',
    imageId: 'blogComponentLife'
  },
  {
    slug: 'common-defects-in-induction-hardening-and-how-to-prevent-them',
    title: 'Top 5 Common Defects in Induction Hardening and How to Avoid Them',
    description: 'Know the main reasons behind defects like soft spots and cracks in induction hardening, and how to prevent them.',
    date: 'September 10, 2024',
    imageId: 'blogDefects'
  },
  {
    slug: 'induction-hardening-vs-flame-hardening',
    title: 'Induction Hardening vs Flame Hardening - Which Is Better?',
    description: 'Comparing induction and flame hardening for precision, speed, and energy efficiency in industrial metal parts.',
    date: 'September 15, 2024',
    imageId: 'blogFlameVsInduction'
  },
  {
    slug: 'importance-of-frequency-in-induction-hardening',
    title: 'Choosing the Right Frequency for Induction Hardening Applications',
    description: 'Learn how frequency impacts heat penetration, case depth, and hardness during the induction hardening process.',
    date: 'September 20, 2024',
    imageId: 'blogFrequency'
  },
  {
    slug: 'induction-hardening-for-agricultural-implements',
    title: 'Induction Hardening Job Work for Agricultural Implements in Punjab',
    description: "Induction hardening for agricultural & tractor components enhances strength & wear resistance for Punjab's farm sector.",
    date: 'September 25, 2024',
    imageId: 'blogAgricultural'
  },
  {
    slug: 'gear-hardening-process-explained',
    title: 'Understanding the Gear Hardening Process in Induction Heat Treatment',
    description: 'Step-by-step explanation of induction gear hardening, quenching, and hardness testing in Ludhiana & Punjab.',
    date: 'October 01, 2024',
    imageId: 'blogGearProcess'
  },
  {
    slug: 'induction-hardening-services-in-north-india',
    title: 'Thakur Induction – Leading Induction Hardening Services in North India',
    description: 'Serving Ludhiana, Punjab, Haryana & Delhi NCR with professional induction heat treatment & case hardening services.',
    date: 'October 05, 2024',
    imageId: 'blogNorthIndia'
  },
  {
    slug: 'induction-hardening-process-explained',
    title: 'Step-by-Step Guide to the Induction Hardening Process',
    description: 'Learn about the induction hardening process, frequency selection, quenching types, and its use for gears and shafts.',
    date: 'October 10, 2024',
    imageId: 'blogGearProcess'
  },
  {
    slug: 'induction-hardening-for-shafts-and-axles',
    title: 'Induction Hardening for Shafts & Axles in Ludhiana, Punjab',
    description: 'Learn how induction hardening improves the strength and fatigue life of shafts and axles in Punjab’s industries.',
    date: 'October 15, 2024',
    imageId: 'blogShaftsAndAxles'
  },
  {
    slug: 'case-depth-control-in-induction-hardening',
    title: 'Case Depth Control & Accuracy in Induction Hardening',
    description: 'Understand how case depth and hardness control determine the success of induction heat treatment.',
    date: 'October 20, 2024',
    imageId: 'blogCaseDepth'
  },
  {
    slug: 'induction-hardening-for-gears-and-pinions',
    title: 'Gear & Pinion Induction Hardening Services in Punjab',
    description: 'Explore gear and pinion hardening processes that enhance wear resistance for automotive and farm machinery parts.',
    date: 'October 22, 2024',
    imageId: 'blogGearsAndPinions'
  },
  {
    slug: 'induction-hardening-for-tool-steel-components',
    title: 'Tool Steel Induction Hardening Services in Ludhiana',
    description: 'Learn how induction hardening enhances D2, H13, and M2 tool steels for superior strength and durability.',
    date: 'November 01, 2024',
    imageId: 'blogToolSteel'
  },
  {
    slug: 'induction-hardening-for-gearbox-components',
    title: 'Induction Hardening for Gearbox Components',
    description: 'Discover how induction heat treatment improves the durability and performance of gearbox parts.',
    date: 'November 05, 2024',
    imageId: 'blogGearbox'
  },
  {
    slug: 'common-materials-used-in-induction-hardening',
    title: 'Common Steels Used for Induction Hardening',
    description: 'A guide to materials that respond best to induction hardening and their ideal applications.',
    date: 'November 12, 2024',
    imageId: 'blogCommonMaterials'
  },
  {
    slug: 'induction-hardening-vs-nitriding',
    title: 'Induction Hardening vs Nitriding: Key Differences',
    description: 'Compare induction hardening and nitriding for surface hardness, depth, and cost-effectiveness.',
    date: 'November 15, 2024',
    imageId: 'blogNitriding'
  },
  {
    slug: 'surface-hardening-benefits-for-automotive-gears',
    title: 'Surface Hardening Benefits for Automotive Gears',
    description: 'Learn how surface hardening boosts gear life and performance in Punjab’s automotive industry.',
    date: 'November 18, 2024',
    imageId: 'blogAutomotiveGears'
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <PageHeader
        title="Insights & Case Studies"
        description="Your expert resource for the latest in industrial heat treatment technology, process advantages, and best practices."
        className="mb-12 text-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const image = PlaceHolderImages.find(img => img.id === post.imageId);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                {image && (
                  <div className="relative h-56 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>

                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

    
