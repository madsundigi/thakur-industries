
'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { JsonLd } from "@/components/shared/JsonLd";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

const testimonialsData = [
  {
    name: "Karan Singh",
    company: "Ludhiana Gears Pvt. Ltd.",
    quote: "Reliable and precise hardening job work every time. Their induction hardening process in Ludhiana is top-notch.",
    rating: 5,
    avatarId: "testimonialAvatar1"
  },
  {
    name: "Harpreet Singh",
    company: "Harpreet Engineering Works, Rajpura",
    quote: "One of the best induction heat treatment companies in Punjab. Quality and delivery always on time for our case hardening needs.",
    rating: 5,
    avatarId: "testimonialAvatar2"
  },
  {
    name: "Rohit Verma",
    company: "Rohit Manufacturing Co., Ambala",
    quote: "Professional service and consistent quality for our automotive shafts. A great surface hardening company to work with.",
    rating: 5,
    avatarId: "testimonialAvatar3"
  }
];

export function Testimonials() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const reviewSchema = {
        "@context": "https://schema.org/",
        "@type": "LocalBusiness",
        "name": "Thakur Industries",
        "image": "https://thakurinduction.com/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri",
            "addressLocality": "Ludhiana",
            "addressRegion": "Punjab",
            "postalCode": "141003",
            "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "38"
        },
        "review": testimonialsData.map(t => ({
          "@type": "Review",
          "author": {"@type": "Person", "name": t.name },
          "reviewBody": t.quote,
          "reviewRating": {"@type": "Rating", "ratingValue": t.rating.toString()}
        }))
    };

    const TestimonialGrid = () => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {testimonialsData.map((testimonial) => {
                const avatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
                return (
                <Card key={testimonial.name} className="bg-card">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="flex mb-4">
                            {Array(testimonial.rating).fill(0).map((_, i) => <Star key={i} className="h-5 w-5 text-primary fill-primary" />)}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 mt-6">
                             {avatar && (
                                <Image
                                    src={avatar.imageUrl}
                                    alt={`Avatar of ${testimonial.name}`}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                    data-ai-hint={avatar.imageHint}
                                />
                             )}
                            <div>
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )})}
        </div>
    );

    const TestimonialCarousel = () => (
        <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-md mx-auto mt-12"
        >
            <CarouselContent>
                {testimonialsData.map((testimonial, index) => {
                     const avatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
                    return (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card>
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                 <div className="flex mb-4">
                                    {Array(testimonial.rating).fill(0).map((_, i) => <Star key={i} className="h-5 w-5 text-primary fill-primary" />)}
                                </div>
                                <p className="text-muted-foreground italic text-base">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4 mt-6">
                                    {avatar && (
                                        <Image
                                            src={avatar.imageUrl}
                                            alt={`Avatar of ${testimonial.name}`}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                            data-ai-hint={avatar.imageHint}
                                        />
                                    )}
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                )})}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
        </Carousel>
    );

    return (
        <section className="py-20 md:py-28 bg-secondary">
            <JsonLd data={reviewSchema} />
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        What Our Clients Say About Our Heat Treatment Services
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Trusted by Manufacturers Across Ludhiana, Punjab & Haryana for Precision Hardening Job Work
                    </p>
                </div>
                
                {isDesktop ? <TestimonialGrid /> : <TestimonialCarousel />}
            </div>
        </section>
    );
}
