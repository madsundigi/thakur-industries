import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import PageHeader from "@/components/shared/PageHeader";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Automotive Parts Mfg.",
    quote: "Thakur Industries transformed our production line. Their induction hardening is consistent and reliable, which has drastically reduced our part failure rate. Unmatched quality in Ludhiana.",
    avatarId: "testimonialAvatar1",
  },
  {
    name: "Priya Singh",
    company: "Aerospace Components Inc.",
    quote: "The precision and adherence to specs from Thakur Industries are second to none. Their team provided a custom heat treatment solution that met our stringent aerospace requirements perfectly.",
    avatarId: "testimonialAvatar2",
  },
  {
    name: "Amit Patel",
    company: "Construction Equipment Co.",
    quote: "We've been working with them for over 5 years. Their durability claim isn't just a tagline; it's a promise they deliver on. Our equipment's longevity has improved significantly.",
    avatarId: "testimonialAvatar3",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <PageHeader
          title="What Our Clients Say"
          description="Building lasting partnerships through reliable results and exceptional service."
          className="text-center mb-12"
        />
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
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="p-6 flex flex-col items-start gap-6">
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                          {avatar && (
                            <Image
                              src={avatar.imageUrl}
                              alt={testimonial.name}
                              data-ai-hint={avatar.imageHint}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          )}
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
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
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
