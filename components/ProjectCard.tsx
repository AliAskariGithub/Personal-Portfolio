'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'react-feather';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  href: string;
  tags?: string[];
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  href,
  tags,
  featured,
  index = 0
}: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-5 py-6 border-b cursor-pointer"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 8 }}
    >
      {/* Project Image */}
      <motion.div
        className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {featured && (
          <div className="absolute top-1 right-1 bg-purple/90 text-white text-[10px] px-1.5 py-0.5 rounded font-poppins font-medium">
            Featured
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-poppins font-semibold text-white text-lg group-hover:text-purple transition-colors">
            {title}
          </h3>
          <motion.div
            className="flex-shrink-0 w-8 h-8 rounded-full border border-purple/30 flex items-center justify-center group-hover:bg-purple group-hover:border-purple transition-all"
            whileHover={{ scale: 1.1, rotate: 45 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpRight size={16} className="text-purple group-hover:text-white transition-colors" />
          </motion.div>
        </div>

        <p className="font-poppins text-sm mb-2" style={{ color: '#998f8f' }}>
          {description}
        </p>

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full font-inter"
                style={{
                  background: 'rgba(157,76,204,0.15)',
                  color: '#c47ef5'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
}
