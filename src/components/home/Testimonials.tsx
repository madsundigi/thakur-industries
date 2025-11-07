
'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PageHeader from "@/components/shared/PageHeader";
import { JsonLd } from "@/components/shared/JsonLd";

const testimonialsData = [
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

const generateReviewSchema = (testimonial: typeof testimonialsData[0]) => ({
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
  const [cards, setCards] = useState(testimonialsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(shuffle([...testimonialsData]));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const shuffle = (array: typeof testimonialsData) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  return (
     <>
      <div className="hidden">
        {testimonialsData.map((testimonial, index) => (
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
          
          <div className="relative h-[500px] w-full max-w-4xl mx-auto">
            <AnimatePresence>
                {cards.slice(0, 4).map((testimonial, index) => {
                     const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
                     const isCenter = index === 0;

                     return (
                        <motion.div
                            key={testimonial.name}
                            layout
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ 
                                scale: 1 - (index * 0.05), 
                                opacity: 1 - (index * 0.2), 
                                y: index * -20,
                                zIndex: cards.length - index
                            }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="absolute w-full"
                        >
                            <div className="p-1 h-full">
                                <div className="h-full flex flex-col justify-between bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
                                    <div className="p-0 flex flex-col items-start gap-6">
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
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                     );
                })}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </>
  );
}
