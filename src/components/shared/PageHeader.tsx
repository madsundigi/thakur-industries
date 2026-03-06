
'use client';

import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  highlightedWord?: string;
}

export default function PageHeader({ title, description, highlightedWord, className, ...props }: PageHeaderProps) {
  return (
    <motion.div 
      className={cn("space-y-6 pt-24 mb-16", className)} 
      {...props}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl md:text-7xl uppercase italic leading-tight">
        {title} {highlightedWord && <span className="text-primary">{highlightedWord}</span>}
      </h1>
      {description && (
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground font-medium">
          {description}
        </p>
      )}
    </motion.div>
  );
}
