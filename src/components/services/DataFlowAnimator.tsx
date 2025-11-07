
'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { CheckCircle, HardHat, Zap, Gauge, TestTube, Settings, ClipboardCheck } from 'lucide-react';

const INPUTS = [
    { icon: HardHat, label: 'Preparation & Preheating', items: ['Component Cleaning', 'Quality Inspection', 'Uniform Preheating'] },
];

const ENGINE_PROCESSES = [
    { icon: Zap, label: 'Induction Heating' },
    { icon: Gauge, label: 'Precision Control' },
    { icon: Settings, label: 'Magnetic Field Application' },
];

const OUTPUTS = [
    { icon: TestTube, label: 'Quenching & Cooling', items: ['Rapid Cooling', 'Controlled Medium', 'Martensitic Transformation'] },
    { icon: ClipboardCheck, label: 'Quality Testing', items: ['Hardness Testing', 'Case Depth Analysis', 'Certification'] },
];

const PARTICLE_COUNT = 30;

export function DataFlowAnimator() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });
    const prefersReducedMotion = usePrefersReducedMotion();

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    if (prefersReducedMotion) {
        // Render a static, accessible version if motion is disabled
        return (
            <div className="w-full max-w-5xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-primary">1. Input</h3>
                    <FlowCard title={INPUTS[0].label} icon={INPUTS[0].icon} items={INPUTS[0].items} />
                </div>
                <div className="space-y-4 text-center">
                    <h3 className="font-bold text-lg text-primary">2. Processing</h3>
                    <div className="p-4 rounded-lg border bg-card text-card-foreground">
                        {ENGINE_PROCESSES.map(p => <p key={p.label}>{p.label}</p>)}
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-primary">3. Output</h3>
                    {OUTPUTS.map(output => (
                         <FlowCard key={output.label} title={output.label} icon={output.icon} items={output.items} />
                    ))}
                </div>
            </div>
        );
    }
    
    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="w-full max-w-6xl mx-auto aspect-[16/10] md:aspect-[16/7] relative flex justify-between items-center"
        >
            {/* Input Section */}
            <motion.div variants={cardVariants} className="w-1/4 space-y-4">
                <h3 className="text-center font-bold text-lg text-primary/80">INPUT</h3>
                {INPUTS.map(input => (
                    <FlowCard key={input.label} title={input.label} icon={input.icon} items={input.items} />
                ))}
            </motion.div>

            {/* SVG Paths and Particles */}
            <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 1 }}>
                <svg
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    className='pointer-events-none'
                >
                    <defs>
                        <path
                            id="path-left"
                            d="M 25%,50% C 35%,50% 35%,50% 50%,50%"
                            fill="none"
                            stroke="none"
                        />
                        <path
                            id="path-right-top"
                            d="M 50%,50% C 65%,50% 65%,30% 75%,30%"
                            fill="none"
                            stroke="none"
                        />
                        <path
                            id="path-right-bottom"
                            d="M 50%,50% C 65%,50% 65%,70% 75%,70%"
                            fill="none"
                            stroke="none"
                        />
                    </defs>

                    <g>
                        {Array.from({ length: PARTICLE_COUNT / 2 }).map((_, i) => (
                            <Particle key={`left-${i}`} pathId="#path-left" delay={i * 0.15} />
                        ))}
                        {Array.from({ length: PARTICLE_COUNT / 4 }).map((_, i) => (
                            <Particle key={`top-${i}`} pathId="#path-right-top" delay={i * 0.3} />
                        ))}
                        {Array.from({ length: PARTICLE_COUNT / 4 }).map((_, i) => (
                            <Particle key={`bottom-${i}`} pathId="#path-right-bottom" delay={i * 0.3} />
                        ))}
                    </g>
                </svg>
            </div>
            
            {/* Center Engine */}
            <motion.div variants={cardVariants} className="relative w-1/3 h-2/3 flex items-center justify-center" style={{ zIndex: 2 }}>
                <div className="w-full h-full p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-[hsl(var(--primary)/0.2)] shadow-2xl relative flex flex-col items-center justify-center gap-2 text-center">
                    <motion.div
                        className="absolute inset-0 border-2 border-[hsl(var(--primary))] rounded-2xl"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                    <h3 className="font-bold text-lg text-primary">PROCESSING ENGINE</h3>
                    {ENGINE_PROCESSES.map((proc, index) => (
                        <div key={proc.label} className="flex items-center gap-2 text-sm">
                            <proc.icon className="w-4 h-4 text-primary/80" />
                            <span>{proc.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Output Section */}
            <motion.div variants={cardVariants} className="w-1/4 h-full flex flex-col justify-around">
                 <h3 className="text-center font-bold text-lg text-primary/80">OUTPUT</h3>
                {OUTPUTS.map(output => (
                    <FlowCard key={output.label} title={output.label} icon={output.icon} items={output.items} />
                ))}
            </motion.div>
        </motion.div>
    );
}

const Particle = ({ pathId, delay }: { pathId: string; delay: number }) => {
  const pathRef = useRef<SVGPathElement | null>(null);

  React.useEffect(() => {
    const element = document.querySelector(pathId);
    if (element instanceof SVGPathElement) {
      pathRef.current = element;
    }
  }, [pathId]);

  return (
    <motion.circle
      r="3"
      fill="hsl(var(--primary))"
      animate={{
        offsetDistance: ['0%', '100%'],
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatDelay: 1,
        delay,
        ease: 'linear'
      }}
    >
      <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode='linear'>
        <mpath href={pathId} />
      </animateMotion>
    </motion.circle>
  );
};

interface FlowCardProps {
    icon: React.ElementType;
    title: string;
    items: string[];
}

function FlowCard({ icon: Icon, title, items }: FlowCardProps) {
    return (
        <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-[hsl(var(--primary)/0.2)] shadow-xl" style={{ zIndex: 2 }}>
            <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-base">{title}</h4>
            </div>
            <ul className="space-y-2 pl-2">
                {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500/70" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
