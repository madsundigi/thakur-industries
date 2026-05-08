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
      className={cn("space-y-4 pt-28 mb-12", className)} 
      {...props}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1 className="text-3xl font-black tracking-tighter text-foreground sm:text-5xl md:text-6xl uppercase italic leading-[1.1] break-words">
        {title} {highlightedWord && <span className="text-primary">{highlightedWord}</span>}
      </h1>
      {description && (
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
