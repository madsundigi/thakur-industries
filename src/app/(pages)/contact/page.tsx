'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_ADDRESS, SITE_PHONE_NUMBER, SITE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/shared/JsonLd';
import { BreadcrumbJsonLd } from '@/components/shared/BreadcrumbJsonLd';
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
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  IndianRupee,
  FileText,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const PHONE_TEL = SITE_PHONE_NUMBER.replace(/[^\d+]/g, '');
const WHATSAPP_URL =
  'https://wa.me/917900000776?text=' +
  encodeURIComponent(
    'Hello Thakur Industries, I would like an induction hardening rate per kg quote. Please find my component drawing attached.',
  );

// Frequently asked questions — single source of truth for both the visible
// accordion AND the FAQPage schema (kept in sync to avoid schema mismatch).
const FAQ_ITEMS = [
  {
    q: 'What is the induction hardening rate per kg in Ludhiana?',
    a: 'The induction hardening rate per kg depends on component weight, geometry, required case depth, steel grade and order quantity. We price most job work on a per-kilogram or per-piece basis, with reduced rates for bulk and repeat OEM orders. Share your drawing and quantity for an exact heat treatment quote in Ludhiana within 24 hours.',
  },
  {
    q: 'How fast will I get a quote after I enquire?',
    a: 'We respond to every enquiry within 24 hours on working days. Urgent requirements are handled faster — call or WhatsApp us directly with your drawing for same-day pricing on standard components.',
  },
  {
    q: 'Is there a minimum order quantity for heat treatment job work?',
    a: 'There is no rigid minimum order quantity. We accept single trial pieces and prototypes as well as multi-thousand-piece OEM production lots. Bulk and repeat orders receive better per-kg pricing.',
  },
  {
    q: 'What information should I include in my enquiry?',
    a: 'For the fastest and most accurate induction hardening rate per kg, include your component drawing, material grade, required hardness (HRC) and case depth, quantity, and your delivery timeline. A simple photo and part description also works to get an indicative quote started.',
  },
];

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          subject: `New Enquiry from ${values.name} — Thakur Industries`,
          from_name: 'Thakur Industries Website',
          name: values.name,
          phone: values.phone,
          email: values.email,
          city: values.city || '—',
          component_type: values.componentType || '—',
          required_service: values.requiredService || '—',
          message: values.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: '✅ Enquiry Sent Successfully!',
          description: 'Thank you. Our team will respond within 24 hours.',
        });
        form.reset();
        setIsSuccess(true);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      const errorMsg = 'Submission failed. Please call us directly at +91 7900000776 or try again.';
      setSubmitError(errorMsg);
      toast({
        title: 'Submission Failed',
        description: 'Please call us directly at +91 7900000776 or try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
        "email": "sales@thakurindustries.in"
      },
      "areaServed": ["Ludhiana", "Nawanshahr", "Punjab", "Haryana", "Delhi"]
  };

  // LocalBusiness schema — full NAP, hours & geo for the enquiry page.
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/contact#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE_NUMBER,
    email: 'sales@thakurindustries.in',
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1486/5, Street Number 1, Harkrishan Nagar, Shimlapuri',
      addressLocality: 'Ludhiana',
      addressRegion: 'Punjab',
      postalCode: '141003',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.871576,
      longitude: 75.875935,
    },
    areaServed: ['Ludhiana', 'Jalandhar', 'Khanna', 'Mandi Gobindgarh', 'Patiala', 'Punjab', 'Haryana', 'Delhi NCR'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:30',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <BreadcrumbJsonLd items={[{ name: 'Contact Us', href: '/contact' }]} />

      <div className="container mx-auto px-4 md:px-6">

        {/* Visible breadcrumb trail (matches BreadcrumbList schema) */}
        <nav aria-label="Breadcrumb" className="pt-24 md:pt-28">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-primary">Contact Us</li>
          </ol>
        </nav>

        <PageHeader
          title="Contact Us — Get a Hardening Quote in"
          highlightedWord="Ludhiana"
          description="Have a job work requirement for induction hardening, case hardening, or surface hardening? Our team is here to help industries across Ludhiana, Punjab, Haryana, and Delhi."
          className="mb-8 text-center !pt-6"
        />

        {/* Prominent Call / WhatsApp conversion cluster */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-black uppercase italic tracking-tight">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call for a Quote
            </a>
          </Button>
          <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white font-black uppercase italic tracking-tight border-none">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" /> WhatsApp Your Drawing
            </a>
          </Button>
        </div>

        {/* SEO intro — primary keyword in the first 100 words */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            Want an <strong>induction hardening rate per kg</strong> for your components? Send {SITE_NAME} your drawing
            and quantity and we will return a detailed <strong>heat treatment quote in Ludhiana</strong> within 24 hours.
            We provide induction hardening, case hardening and surface hardening job work for automotive, tractor and
            industrial OEMs across Punjab, Haryana and Delhi NCR — priced fairly per kilogram or per piece, with better
            rates on bulk and repeat orders.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">// GET IN TOUCH //</p>
             <h2 className="text-3xl font-bold mb-6">Get a Quote for Job Work</h2>
             <p className='mb-6 text-muted-foreground'>Please fill out the form below, and our technical team will respond with a suitable process plan and quotation within 24 hours.</p>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-green-200 bg-green-50 px-8 py-14 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3 3 7-7" />
                </svg>
                <h3 className="text-2xl font-bold text-green-800">Message Sent!</h3>
                <p className="text-green-700 max-w-sm">
                  We&apos;ll get back to you within 24 hours. For urgent queries, call us at{' '}
                  <a href={`tel:${PHONE_TEL}`} className="font-semibold underline underline-offset-2">
                    {SITE_PHONE_NUMBER}
                  </a>
                  .
                </p>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
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
                                    <SelectItem value="metal-heat-treatment">Metal Heat Treatment</SelectItem>
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
                <Button type="submit" size="lg" disabled={isSubmitting} className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    'Submit Inquiry'
                  )}
                </Button>
                {submitError && (
                  <p role="alert" className="mt-2 text-sm font-medium text-red-600">
                    {submitError}
                  </p>
                )}
              </form>
            </Form>
            )}
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
                    <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">{SITE_PHONE_NUMBER}</a>
                </div>
                 <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href="mailto:sales@thakurindustries.in" className="hover:text-primary">sales@thakurindustries.in</a>
                </div>
                <div className="flex items-center gap-4">
                    <MessageSquare className="h-6 w-6 text-primary flex-shrink-0" />
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        WhatsApp: +91 7900000776
                    </a>
                </div>
            </div>
             <div className="mt-8">
                <h3 className="text-2xl font-bold">Business Hours</h3>
                 <div className="mt-4 space-y-2 text-muted-foreground">
                    <p>Monday - Saturday: 9:00 AM – 6:30 PM</p>
                    <p>Sunday: Closed</p>
                 </div>
            </div>

            {/* What happens after you enquire — reassurance */}
            <div className="mt-8 rounded-2xl border border-border bg-secondary/30 p-6">
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">What Happens After You Enquire</h3>
                <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                  {[
                    'We review your drawing, material grade and quantity.',
                    'You receive an induction hardening rate per kg within 24 hours.',
                    'We confirm case depth, hardness (HRC) and turnaround.',
                    'Approve the quote and dispatch your components — typical 2–4 day turnaround.',
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>

        {/* Pricing / turnaround / MOQ quick-reference */}
        <section className="mt-16 md:mt-24 border-t border-border pt-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase text-center mb-3">// PRICING &amp; TURNAROUND //</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-10 text-center leading-none">
            Induction Hardening <span className="text-primary">Rate Per Kg</span> &amp; Lead Time
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: IndianRupee, title: 'Pricing Basis', desc: 'Rate per kg or per piece, with reduced rates on bulk and repeat OEM orders.' },
              { icon: FileText, title: 'Minimum Order', desc: 'No rigid minimum — single trial pieces to multi-thousand-piece lots accepted.' },
              { icon: Clock, title: 'Turnaround', desc: 'Quote within 24 hours; standard 2–4 working day job-work turnaround.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-8 bg-secondary/30 rounded-2xl border border-border">
                <item.icon className="h-10 w-10 text-primary mb-5" />
                <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal linking — keyword anchors to key service & quote pages */}
        <section className="mt-16 md:mt-20 border-t border-border pt-16">
          <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-8 text-center">
            Popular <span className="text-primary">Services</span> &amp; Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Gear Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-gears-ludhiana', label: 'Spur, helical & ring gears' },
              { title: 'Shaft Hardening in Ludhiana', href: '/induction-heat-treatment/induction-hardening-shafts-ludhiana', label: 'Transmission shafts' },
              { title: 'Get a Detailed Quote', href: '/get-quote', label: 'Send your drawing online' },
              { title: 'Induction Heat Treatment Guide', href: '/induction-heat-treatment', label: 'Main service hub' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col p-6 bg-secondary/30 border border-border rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all h-full"
              >
                <h3 className="font-black uppercase italic text-foreground group-hover:text-primary transition-colors text-sm mb-2">{link.title}</h3>
                <p className="text-xs text-muted-foreground font-medium mb-4">{link.label}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-black uppercase text-primary">
                  Open <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ — synced with FAQPage schema */}
        <section className="mt-16 md:mt-24 border-t border-border pt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-10 text-center leading-none">
            Enquiry &amp; Pricing <span className="text-primary">FAQs</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`} className="border rounded-2xl bg-secondary/30 px-8 transition-all hover:border-primary/20 group">
                <AccordionTrigger className="text-left font-bold uppercase italic tracking-tight text-base md:text-lg hover:text-primary py-6 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 font-medium leading-relaxed text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <div className="mt-16 md:mt-24">
            <h3 className="text-3xl font-bold text-center mb-8">Our Location &amp; Service Area</h3>
             <div className="relative h-[400px] w-full overflow-hidden rounded-lg border animate-in fade-in duration-700">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.498305727938!2d75.875935!3d30.871576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82605f8c6b75%3A0x2d81577c38724734!2sThakur%20Industries!5e0!3m2!1sen!2sin!4v1716800000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thakur Industries — Induction Hardening Job Work Ludhiana"
                  ></iframe>
            </div>
             <div className="text-center mt-4">
                <Button asChild variant="outline">
                    <a href="https://www.google.com/maps/search/Thakur+Industries+Shimlapuri+Ludhiana+Punjab" target="_blank" rel="noopener noreferrer">
                        Get Directions
                    </a>
                </Button>
            </div>
        </div>

        {/* Freshness / authority signal */}
        <div className="py-12 text-center text-xs text-muted-foreground font-medium">
          <p className="uppercase tracking-widest">Last updated: June 2026 · {SITE_NAME}, Ludhiana, Punjab</p>
        </div>
      </div>

      {/* Mobile sticky CTA — hidden on md+ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 flex gap-3 animate-in slide-in-from-bottom duration-500">
        <a href={`tel:${PHONE_TEL}`} className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase text-xs py-3 rounded-lg">
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-black uppercase text-xs py-3 rounded-lg">
          <MessageSquare className="h-4 w-4" /> WhatsApp
        </a>
        <a href="/get-quote" className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-black uppercase text-xs py-3 rounded-lg border border-border">
          Quote
        </a>
      </div>
    </>
  );
}
