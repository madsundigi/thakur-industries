'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Factory, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// ---------------------------------------------------------------------------
// Countup hook — pure requestAnimationFrame + IntersectionObserver, no framer
// ---------------------------------------------------------------------------
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOut cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// ---------------------------------------------------------------------------
// Stat data
// ---------------------------------------------------------------------------
const stats = [
    {
      icon: Award,
      text: '18+ Years of Experience',
      desc: 'Delivering excellence in heat treatment since 2005.',
      numericValue: 18,
      suffix: '+',
      label: 'Years of Experience',
    },
    {
      icon: Factory,
      text: 'ISO-Certified Process',
      desc: 'Ensuring consistent quality and precision in every job.',
      numericValue: null,
      suffix: '',
      label: 'ISO-Certified Process',
    },
    {
      icon: Check,
      text: '1000+ Components Monthly',
      desc: 'Trusted by leading manufacturers for high-volume work.',
      numericValue: 1000,
      suffix: '+',
      label: 'Components Monthly',
    }
];

// ---------------------------------------------------------------------------
// Animated stat card — renders countup for cards that have a numericValue
// ---------------------------------------------------------------------------
function AnimatedStatText({
  numericValue,
  suffix,
  label,
  fullText,
  prefersReducedMotion,
}: {
  numericValue: number | null;
  suffix: string;
  label: string;
  fullText: string;
  prefersReducedMotion: boolean;
}) {
  const { count, ref } = useCountUp(numericValue ?? 0, 2000);

  if (numericValue === null || prefersReducedMotion) {
    return <>{fullText}</>;
  }

  return (
    <>
      <span ref={ref}>{count}</span>
      {suffix} {label}
    </>
  );
}

// ---------------------------------------------------------------------------
// Framer variants (unchanged)
// ---------------------------------------------------------------------------
const fadeInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function AboutSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const factoryImage = PlaceHolderImages.find(img => img.id === 'aboutTimeline');

  return (
    <section className="relative py-24 md:py-32 border-y border-border overflow-hidden">
      {/* Subtle factory background */}
      {factoryImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={factoryImage.imageUrl}
            alt="Thakur Industries factory floor"
            fill
            className="object-cover opacity-[0.08]"
            data-ai-hint={factoryImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 z-0 bg-secondary/90" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInBottom}
          >
            {/* Section label */}
            <p className="text-xs font-bold tracking-[0.3em] text-primary/60 mb-3 uppercase">
              // ABOUT US //
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6 uppercase italic">
              Trusted <span className="text-primary">Heat Treatment</span> Experts
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                With a legacy of precision and reliability, Thakur Industries is the preferred partner for leading industrial and automotive companies in Ludhiana and North India.
              </p>
              <p>
                We specialize in induction hardening, a process that creates a wear-resistant surface while maintaining a tough core, significantly extending the life of your mechanical parts.
              </p>
            </div>
            <Button asChild className="mt-10 bg-primary text-primary-foreground font-bold" size="lg">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl border border-border flex items-start gap-6 group hover:border-primary/50 transition-colors"
                variants={prefersReducedMotion ? undefined : fadeInBottom}
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground uppercase italic tracking-tight">
                    <AnimatedStatText
                      numericValue={stat.numericValue}
                      suffix={stat.suffix}
                      label={stat.label}
                      fullText={stat.text}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  </h3>
                  <p className="mt-2 text-muted-foreground">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
