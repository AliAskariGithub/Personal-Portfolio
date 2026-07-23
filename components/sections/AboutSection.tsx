'use client';

import { motion } from 'framer-motion';
import { Code, Feather, ArrowUpRight } from 'react-feather';
import { BiRocket } from 'react-icons/bi';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="mb-28 pt-[80px]"
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="font-poppins font-bold text-white uppercase mb-8" style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.03em' }}>
        ABOUT ME
      </h2>

      <div className="space-y-6 max-w-2xl">
        {/* Paragraph 1: Origin story */}
        <motion.p
          className="font-poppins text-base leading-relaxed"
          style={{ color: '#b5b0b0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          I started coding at 17, teaching myself Python through late nights and online resources. What began as curiosity quickly became obsession — I was building projects before I fully understood how they worked, learning by breaking things and fixing them. Growing up in Karachi, I didn&apos;t have access to the same tech networks as Silicon Valley, but I had something more valuable: the internet, unlimited curiosity, and the willingness to figure things out.
        </motion.p>

        {/* Paragraph 2: The throughline */}
        <motion.p
          className="font-poppins text-base leading-relaxed"
          style={{ color: '#b5b0b0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I&apos;ve always straddled two worlds: the logical, systems-thinking world of <span className="text-white font-medium">full-stack development and AI</span>, and the visual, human-centered world of <span className="text-white font-medium">brand and graphic design</span>. This dual track isn&apos;t accidental — I believe the best software isn&apos;t just technically sound, it&apos;s also thoughtfully designed. That philosophy led me to found <span className="text-purple">NexuGem Agency</span>, where I lead a small team building digital products that look as good as they function.
        </motion.p>

        {/* Know More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-2"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-purple text-sm font-medium hover:underline"
          >
            Know more <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        {/* Quick highlights */}
        <motion.div
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: '#6a6b6e' }}>
            <Code size={16} className="text-purple" />
            <span>Self-taught developer</span>
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: '#6a6b6e' }}>
            <Feather size={16} className="text-purple" />
            <span>Nationally awarded designer</span>
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: '#6a6b6e' }}>
            <BiRocket size={16} className="text-purple" />
            <span>Agency founder at 18</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
