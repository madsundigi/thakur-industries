
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
    title: 'What is Induction Hardening and Why It’s Used in Ludhiana?',
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
    slug: 'energy-efficient-induction-heating-india',
    title: 'Energy-Efficient Induction Heating in India’s Manufacturing',
    description: 'Discover how modern induction heating provides an energy-efficient and cost-effective solution for industrial applications across India.',
    date: 'December 02, 2023',
    imageId: 'blogPost3'
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
