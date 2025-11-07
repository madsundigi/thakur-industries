import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: `Blog & Case Studies`,
  description: `Insights, news, and case studies from the heat treatment experts at ${SITE_NAME}.`,
};

const blogPosts = [
  {
    slug: 'advancements-in-induction-hardening',
    title: '5 Key Advancements in Induction Hardening Technology',
    description: 'Explore how new technologies are pushing the boundaries of what\'s possible in surface hardening.',
    date: 'October 17, 2023',
    imageId: 'blogPost1'
  },
  {
    slug: 'case-study-automotive-gear-strength',
    title: 'Case Study: Increasing Automotive Gear Strength by 40%',
    description: 'A deep dive into how our custom case hardening process solved a critical failure point for a major auto manufacturer.',
    date: 'September 05, 2023',
    imageId: 'blogPost2'
  },
  {
    slug: 'choosing-right-heat-treatment',
    title: 'How to Choose the Right Heat Treatment for Your Application',
    description: 'A guide for engineers and product designers on selecting the optimal treatment for performance and cost.',
    date: 'August 21, 2023',
    imageId: 'blogPost3'
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <PageHeader
        title="Insights & Case Studies"
        description="Your expert resource for the latest in industrial heat treatment technology and best practices."
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
