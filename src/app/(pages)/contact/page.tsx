'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_ADDRESS, SITE_PHONE_NUMBER } from '@/lib/constants';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  city: z.string().optional(),
  componentType: z.string().optional(),
  requiredService: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
        name: "", 
        phone: "",
        email: "", 
        city: "", 
        componentType: "",
        requiredService: "",
        message: "" 
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  const contactPageSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Thakur Industries Contact Page",
      "description": "Contact Thakur Industries for induction hardening, case hardening, and surface heat treatment job work in Ludhiana, Punjab.",
      "publisher": {
        "@type": "LocalBusiness",
        "name": SITE_NAME,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ludhiana",
          "addressRegion": "Punjab",
          "addressCountry": "India"
        },
        "telephone": SITE_PHONE_NUMBER,
        "email": "sales@thakurinduction.com"
      },
      "areaServed": ["Ludhiana", "Punjab", "Haryana", "Delhi"]
  };

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <div className="container mx-auto px-4 md:px-6">
        <PageHeader
          title="Contact Us for Induction Heat Treatment Services"
          description="Have a job work requirement for induction hardening, case hardening, or surface hardening? Our team is here to help industries across Ludhiana, Punjab, Haryana, and Delhi."
          className="mb-12 text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
             <h2 className="text-3xl font-bold mb-6">Get a Quote for Job Work</h2>
             <p className='mb-6 text-muted-foreground'>Please fill out the form below, and our technical team will respond with a suitable process plan and quotation within 24 hours.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name / Company Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                            <Input placeholder="+91 12345 67890" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>City / Location</FormLabel>
                        <FormControl>
                            <Input placeholder="Ludhiana" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <FormField
                        control={form.control}
                        name="componentType"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Component Type / Material</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Material" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="en8">EN8</SelectItem>
                                    <SelectItem value="en19">EN19</SelectItem>
                                    <SelectItem value="en24">EN24</SelectItem>
                                    <SelectItem value="4140">4140</SelectItem>
                                    <SelectItem value="4340">4340</SelectItem>
                                    <SelectItem value="tool-steel">Tool Steel</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                        control={form.control}
                        name="requiredService"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Required Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Service" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="induction-hardening">Induction Hardening</SelectItem>
                                    <SelectItem value="case-hardening-heat-treatment">Case Hardening</SelectItem>
                                    <SelectItem value="surface-hardening">Surface Hardening</SelectItem>
                                    <SelectItem value="quenching">Quenching</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>
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
                <Button type="submit" size="lg">Submit Inquiry</Button>
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
             <div className="mt-8">
                <h3 className="text-2xl font-bold">Business Hours</h3>
                 <div className="mt-4 space-y-2 text-muted-foreground">
                    <p>Monday - Saturday: 9:00 AM – 6:30 PM</p>
                    <p>Sunday: Closed</p>
                 </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
            <h3 className="text-3xl font-bold text-center mb-8">Our Location & Service Area</h3>
             <div className="relative h-[400px] w-full overflow-hidden rounded-lg border">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.498305727938!2d75.875935!3d30.871576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82605f8c6b75%3A0x2d81577c38724734!2sThakur%20Induction!5e0!3m2!1sen!2sus!4v1646322895696"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thakur Industries — Heat Treatment Job Work"
                  ></iframe>
            </div>
             <div className="text-center mt-4">
                <Button asChild variant="outline">
                    <a href="https://www.google.com/maps/dir//Thakur+Induction/data=!4m2!4m1!3e0?entry=ttu" target="_blank" rel="noopener noreferrer">
                        Get Directions
                    </a>
                </Button>
            </div>
        </div>
      </div>
    </>
  );
}
