'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'react-feather';
import Link from 'next/link';
import { testimonials } from '@/data/testimonials';
import { BsQuote } from 'react-icons/bs';

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      className="mb-28 pt-[80px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-poppins font-bold text-white uppercase" style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.03em' }}>
          CLIENT TESTIMONIALS
        </h2>
        <Link
          href="/testimonials"
          className="flex items-center gap-1 text-purple text-sm font-medium hover:underline"
        >
          Read more <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.slice(0, 4).map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl border transition-all"
            style={{
              borderColor: 'rgba(255,255,255,0.07)',
              background: 'rgba(182,180,189,0.05)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
              borderColor: 'rgba(157,76,204,0.3)',
              y: -5
            }}
          >
            <BsQuote size={24} className="text-purple/30 mb-4" />

            <p className="font-poppins text-sm leading-relaxed mb-4 italic" style={{ color: '#b5b0b0' }}>
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-poppins font-bold text-sm"
                style={{ background: 'rgba(157,76,204,0.2)', color: '#9D4CCC' }}
              >
                {testimonial.initials}
              </div>
              <div>
                <p className="font-poppins font-medium text-white text-sm">{testimonial.name}</p>
                <p className="font-inter text-xs" style={{ color: '#6a6b6e' }}>
                  {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
