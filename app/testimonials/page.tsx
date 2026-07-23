'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { BsQuote } from 'react-icons/bs';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

export default function TestimonialsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-[160px] pb-20 px-5 lg:px-0">
        <div className="max-w-[1140px] mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple mb-8 hover:underline"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>
          </motion.div>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="font-poppins font-bold text-white uppercase mb-6"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.04em' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              CLIENT TESTIMONIALS
            </motion.h1>

            <motion.p
              className="font-poppins mb-12 max-w-2xl"
              style={{ color: '#998f8f', fontSize: '18px', lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              What clients and collaborators say about working with me.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl border transition-all"
                  style={{
                    borderColor: 'rgba(255,255,255,0.07)',
                    background: 'rgba(182,180,189,0.05)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    borderColor: 'rgba(157,76,204,0.3)',
                    y: -5
                  }}
                >
                  <BsQuote size={28} className="text-purple/30 mb-4" />

                  <p className="font-poppins text-base leading-relaxed mb-6 italic" style={{ color: '#b5b0b0' }}>
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-poppins font-bold"
                      style={{ background: 'rgba(157,76,204,0.2)', color: '#9D4CCC' }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-white text-base">{testimonial.name}</p>
                      <p className="font-inter text-sm" style={{ color: '#6a6b6e' }}>
                        {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Footer />
        </div>
      </main>
    </>
  );
}
