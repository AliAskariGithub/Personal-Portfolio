'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="font-poppins font-bold text-white uppercase mb-8"
      style={{
        fontSize: 'clamp(36px, 5vw, 72px)',
        letterSpacing: '-0.03em',
      }}
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.h2>
  );
}
