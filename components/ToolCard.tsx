'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ToolCardProps {
  title: string;
  description: string;
  logo: string;
  href: string;
  proficiency?: number;
  index?: number;
}

export default function ToolCard({
  title,
  description,
  logo,
  href,
  proficiency = 10,
  index = 0
}: ToolCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 rounded-xl border transition-all"
      style={{
        background: 'rgba(182,180,189,0.08)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -5,
        borderColor: 'rgba(157,76,204,0.4)',
        background: 'rgba(157,76,204,0.1)'
      }}
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <motion.div
          className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)' }}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={logo}
            alt={title}
            fill
            className="object-contain p-2"
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-poppins font-semibold text-white text-base mb-0.5 group-hover:text-purple transition-colors">
            {title}
          </h3>
          <p className="font-poppins text-xs mb-2" style={{ color: '#998f8f' }}>
            {description}
          </p>

          {/* Proficiency Bar */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: proficiency >= 9 ? '#9D4CCC' : proficiency >= 7 ? '#c47ef5' : '#998f8f' }}
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency * 10}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs font-inter" style={{ color: '#6a6b6e' }}>
              {proficiency}/10
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
