
'use client';
import { SITE_NAME } from "@/lib/constants";
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <motion.svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path 
          d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.path 
          d="M10.5 14C10.5 14 11 12 12 12C13 12 13.5 14 13.5 14" 
          stroke="hsl(var(--primary-foreground))"
          strokeOpacity="0.7"
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
         <motion.path 
          d="M12 12C13.5 12 15 10 15 8C15 6 12 2 12 2"
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        />
         <motion.path 
          d="M12 12C10.5 12 9 10 9 8C9 6 12 2 12 2"
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        />
      </motion.svg>

      <span className="font-bold text-lg text-foreground hidden sm:inline-block">{SITE_NAME}</span>
    </div>
  );
}
