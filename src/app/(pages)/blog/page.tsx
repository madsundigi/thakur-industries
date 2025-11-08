
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
