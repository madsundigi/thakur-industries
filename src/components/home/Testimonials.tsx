
'use client';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/JsonLd";
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Rajiv Mehta",
    company: "Auto Parts Manufacturer, Ludhiana",
    quote: "We approached Thakur Industries for induction hardening of our automotive shafts. Their heat treatment services in Punjab are precise and delivered excellent hardness consistency. Highly recommended for automotive component manufacturers.",
    avatarId: "testimonialAvatar1",
    rating: 5,
  },
  {
    name: "Priya Singh",
    company: "Machinery Supplier, Jalandhar",
    quote: "As a machine parts supplier from Punjab, we needed case hardening job work for a large batch of steel gears. Thakur Industries’ industrial heat treatment process ensured perfect results and fast turnaround. Their quality is unmatched.",
    avatarId: "testimonialAvatar2",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Engineering Firm, Delhi",
    quote: "Thakur Industries is our go-to partner in India for custom gear hardening. Their induction technology is reliable and their team ensures we meet ISO quality standards every time. Truly a top-tier metal heat treatment specialist.",
    avatarId: "testimonialAvatar3",
    rating: 5,
  },
  {
    name: "Sanjay Verma",
    company: "Agricultural Equipment Co, Patiala",
    quote: "For our agricultural equipment, the durability provided by the case hardening job work in Punjab from Thakur Industries has been a game-changer. Their team in Ludhiana understands the demands of our industry.",
    avatarId: "testimonialAvatar4",
    rating: 5,
  },
  {
    name: "Anjali Desai",
    company: "Aerospace Components Inc, Bangalore",
    quote: "Finding a reliable industrial heat treatment company in India for aerospace parts is tough. Thakur Industries delivered with exceptional precision and met all our stringent specifications for aerospace part hardening.",
    avatarId: "testimonialAvatar5",
    rating: 5,
  },
];

const generateReviewSchema = (testimonial: typeof testimonials[0]) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'LocalBusiness',
      'name': 'Thakur Industries',
      'image': 'https://thakurinduction.com/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
        'addressLocality': 'Ludhiana',
        'addressRegion': 'Punjab',
        'postalCode': '141003',
        'addressCountry': 'IN'
      },
      'telephone': '+91 7900000776'
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': testimonial.rating.toString(),
      'bestRating': '5'
    },
    'author': {
      '@type': 'Person',
      'name': `${testimonial.name}, ${testimonial.company}`
    },
    'reviewBody': testimonial.quote
});

export function Testimonials() {
  return (
    <>
      <div className="hidden">
        {testimonials.map((testimonial, index) => (
          <JsonLd key={index} data={generateReviewSchema(testimonial)} />
        ))}
      </div>
      <section id="testimonials" aria-label="Client Testimonials" className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <PageHeader
              title="Trusted by Industry Leaders"
              description="Building lasting partnerships through reliable results, technical excellence, and exceptional service across India."
              className="text-center mb-16"
            />
          </motion.div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between bg-background border-white/10 p-8">
                        <CardContent className="p-0 flex flex-col items-start gap-6">
                          <div className="flex">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-muted-foreground text-lg italic flex-grow">"{testimonial.quote}"</p>
                          <div className="flex items-center gap-4 pt-4">
                            {avatar && (
                              <Image
                                src={avatar.imageUrl}
                                alt={`Portrait of ${testimonial.name}`}
                                data-ai-hint={avatar.imageHint}
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                              />
                            )}
                            <div>
                              <p className="font-semibold text-lg">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-[-50px] bg-background/50 border-white/20 hover:bg-primary" />
            <CarouselNext className="hidden md:flex right-[-50px] bg-background/50 border-white/20 hover:bg-primary" />
          </Carousel>

        </div>
      </section>
    </>
  );
}
