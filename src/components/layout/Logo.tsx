
'use client';

import { motion } from 'framer-motion';
import { SITE_NAME } from '@/lib/constants';

export function Logo() {
  // Split the name for styling if it matches "Thakur Industries"
  const firstName = "Thakur";
  const secondName = "Industries";

  return (
    <motion.div 
      className="flex items-center gap-1 cursor-pointer select-none"
      whileHover="hover"
      initial="initial"
    >
      {/* Stylized "T" Icon representing a heat coil */}
      <motion.div
        className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border overflow-hidden"
        variants={{
          hover: { borderColor: 'hsl(var(--primary))' }
        }}
      >
        <motion.span 
          className="text-2xl font-black text-primary z-10"
          variants={{
            initial: { y: 0 },
            hover: { y: -2, scale: 1.1 }
          }}
        >
          T
        </motion.span>
        
        {/* Animated "Heat" Glow Effect */}
        <motion.div 
          className="absolute inset-0 bg-primary/10 opacity-0"
          variants={{
            hover: { 
              opacity: 1,
              transition: { duration: 0.3 } 
            }
          }}
        />
        
        {/* Bottom "Heat Bar" */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
          initial={{ scaleX: 0 }}
          variants={{
            hover: { scaleX: 1, transition: { duration: 0.4 } }
          }}
        />
      </motion.div>

      <div className="flex flex-col leading-none ml-1">
        <motion.span 
          className="text-xl font-extrabold tracking-tighter text-foreground"
          variants={{
            hover: { color: 'hsl(var(--primary))' }
          }}
        >
          {firstName.toUpperCase()}
        </motion.span>
        <motion.span 
          className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase"
          variants={{
            hover: { color: 'hsl(var(--foreground))', x: 2 }
          }}
        >
          {secondName}
        </motion.span>
      </div>
    </motion.div>
  );
}
