'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Code, TrendingUp, Video } from 'react-feather';
import { BiPalette } from 'react-icons/bi';

const services = [
  { icon: Code, label: 'Web Development' },
  { icon: BiPalette, label: 'Brand Design' },
  { icon: TrendingUp, label: 'Digital Marketing' },
  { icon: Globe, label: 'SEO' },
  { icon: Video, label: 'Video Editing' },
];

export default function NexuGemSection() {
  return (
    <motion.section
      id="nexugem"
      className="mb-28 pt-[80px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="font-poppins font-bold text-white uppercase mb-8" style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.03em' }}>
        NEXUGEM AGENCY
      </h2>

      <motion.div
        className="rounded-2xl overflow-hidden border p-8"
        style={{
          borderColor: 'rgba(255,255,255,0.07)',
          background: 'linear-gradient(135deg, rgba(157,76,204,0.08), rgba(157,76,204,0.03))',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(157,76,204,0.2)' }}
              >
                <Globe size={24} className="text-purple" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-white text-xl">NexuGem Agency</h3>
                <p className="font-inter text-xs" style={{ color: '#6a6b6e' }}>Founded 2025 · Karachi, Pakistan</p>
              </div>
            </div>

            <p className="font-poppins text-base leading-relaxed mb-6" style={{ color: '#b5b0b0' }}>
              I founded NexuGem Agency to bring together talented freelancers under one roof, offering small businesses a complete digital presence package. We combine modern web development with AI-powered solutions and thoughtful brand design — no juggling multiple vendors, no communication gaps.
            </p>

            <p className="font-poppins text-sm leading-relaxed mb-6" style={{ color: '#998f8f' }}>
              Our team of five serves clients across retail, tech education, and startups, helping them establish their online presence with websites that convert, brands that resonate, and marketing that actually reaches the right audience.
            </p>

            {/* Services */}
            <div className="flex flex-wrap gap-3 mb-6">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <service.icon size={14} className="text-purple" />
                  {service.label}
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="https://www.nexugemagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-poppins font-semibold text-sm text-white transition-all"
              style={{ background: '#9D4CCC' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Visit NexuGem Agency
              <ArrowUpRight size={16} />
            </motion.a>
          </div>

          {/* Stats */}
          <div className="lg:w-48 flex lg:flex-col gap-4 lg:gap-3">
            {[
              { value: '5', label: 'Team Members' },
              { value: '10+', label: 'Projects Delivered' },
              { value: '3', label: 'Countries Served' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex-1 lg:flex-none text-center p-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.03)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-poppins font-bold text-purple text-2xl">{stat.value}</div>
                <div className="font-inter text-xs" style={{ color: '#6a6b6e' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
