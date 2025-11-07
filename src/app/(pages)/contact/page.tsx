'use client'

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_ADDRESS, SITE_PHONE_NUMBER } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JsonLd } from '@/components/shared/JsonLd';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const mapImage = PlaceHolderImages.find(img => img.id === 'contactMap');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'IndustrialBusiness',
    'name': SITE_NAME,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
      'addressLocality': 'Ludhiana',
      'addressRegion': 'PB',
      'postalCode': '141003',
      'addressCountry': 'IN',
    },
    'telephone': SITE_PHONE_NUMBER,
    'url': `https://thakurinduction.com/contact`,
    'image': 'https://thakurinduction.com/logo.png', // Replace with actual logo URL
    'description': 'Thakur Industries is a leading heat treatment specialist in Punjab, located at our induction hardening plant in Ludhiana.',
    'areaServed': ['Ludhiana', 'Punjab', 'India'],
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <div className="container mx-auto px-4 md:px-6">
        <PageHeader
          title="Contact Thakur Industries"
          description="We're here to help. Reach out to our induction hardening plant in Ludhiana for a consultation, quote, or a free test sample."
          className="mb-12 text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Company Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project or requirements for custom heat treatment..." {...field} rows={6} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </Form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>{SITE_ADDRESS}</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href={`tel:${SITE_PHONE_NUMBER}`} className="hover:text-primary">{SITE_PHONE_NUMBER}</a>
                </div>
                 <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href="mailto:sales@thakurinduction.com" className="hover:text-primary">sales@thakurinduction.com</a>
                </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
            <h3 className="text-3xl font-bold text-center mb-8">Our Location in Ludhiana</h3>
             {mapImage && (
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
                     <Image
                        src={mapImage.imageUrl}
                        alt="Map showing location of Thakur Industries, a heat treatment specialist in Punjab"
                        data-ai-hint={mapImage.imageHint}
                        fill
                        className="object-cover"
                     />
                </div>
             )}
        </div>
      </div>
    </>
  );
}
