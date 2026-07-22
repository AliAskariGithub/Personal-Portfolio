'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'react-feather';

interface ArrowButtonProps {
  href: string;
  color?: string;
}

export default function ArrowButton({ href, color = '#9D4CCC' }: ArrowButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-8 h-8 rounded-full border-2"
      style={{ borderColor: color }}
      whileHover={{ rotate: 45, scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      aria-label="View project"
    >
      <ArrowRight size={16} color={color} />
    </motion.a>
  );
}
