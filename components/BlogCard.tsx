'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'react-feather';

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  tags?: string[];
  index?: number;
}

export default function BlogCard({
  title,
  slug,
  date,
  readTime,
  image,
  summary,
  tags,
  index = 0
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <motion.article
        className="group py-6 border-b cursor-pointer"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ x: 8 }}
      >
        <div className="flex gap-5">
          {/* Thumbnail */}
          <motion.div
            className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <motion.h3
              className="font-poppins font-semibold text-white text-lg mb-1 group-hover:text-purple transition-colors line-clamp-2"
              whileHover={{ x: 3 }}
            >
              {title}
            </motion.h3>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-2">
              <span className="font-inter text-xs" style={{ color: '#6a6b6e' }}>
                {date}
              </span>
              <div className="flex items-center gap-1 text-xs" style={{ color: '#6a6b6e' }}>
                <Clock size={12} />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Summary */}
            <p className="font-poppins text-sm mb-2 line-clamp-2" style={{ color: '#998f8f' }}>
              {summary}
            </p>

            {/* Tags & Link */}
            <div className="flex items-center justify-between">
              {tags && (
                <div className="flex flex-wrap gap-1.5">
                  {tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full font-inter"
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
              <div className="flex items-center gap-1 text-purple text-xs font-medium">
                Read more
                <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
