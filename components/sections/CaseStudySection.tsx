'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Zap, Cpu, TrendingUp, GitHub, ArrowUpRight } from 'react-feather';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudySection() {
  const featuredCaseStudy = caseStudies[0]; // Digital FTE

  return (
    <motion.section
      id="case-studies"
      className="mb-28 pt-[80px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-poppins font-bold text-white uppercase" style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.03em' }}>
          CASE STUDY
        </h2>
        <Link
          href="/case-studies"
          className="flex items-center gap-1 text-purple text-sm font-medium hover:underline"
        >
          Explore <ArrowUpRight size={14} />
        </Link>
      </div>

      <motion.div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(182,180,189,0.05)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header with image */}
        <div className="relative h-48 md:h-64">
          <Image
            src={featuredCaseStudy.image}
            alt={featuredCaseStudy.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="font-poppins font-bold text-white text-2xl md:text-3xl">
              {featuredCaseStudy.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple/20 flex items-center justify-center">
                <Zap size={16} className="text-purple" />
              </div>
              <h4 className="font-poppins font-semibold text-white text-lg">The Problem</h4>
            </div>
            <p className="font-poppins text-sm leading-relaxed pl-10" style={{ color: '#b5b0b0' }}>
              {featuredCaseStudy.problem}
            </p>
          </motion.div>

          {/* Build */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple/20 flex items-center justify-center">
                <Cpu size={16} className="text-purple" />
              </div>
              <h4 className="font-poppins font-semibold text-white text-lg">What Was Built</h4>
            </div>
            <p className="font-poppins text-sm leading-relaxed pl-10" style={{ color: '#b5b0b0' }}>
              {featuredCaseStudy.build}
            </p>
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple/20 flex items-center justify-center">
                <TrendingUp size={16} className="text-purple" />
              </div>
              <h4 className="font-poppins font-semibold text-white text-lg">The Outcome</h4>
            </div>
            <p className="font-poppins text-sm leading-relaxed pl-10" style={{ color: '#b5b0b0' }}>
              {featuredCaseStudy.outcome}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2 pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {featuredCaseStudy.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full font-inter"
                style={{
                  background: 'rgba(157,76,204,0.15)',
                  color: '#c47ef5'
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex gap-4 pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {featuredCaseStudy.liveUrl && (
              <a
                href={featuredCaseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple text-sm font-medium hover:underline"
              >
                <ExternalLink size={14} />
                View Project
              </a>
            )}
            {featuredCaseStudy.githubUrl && (
              <a
                href={featuredCaseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple text-sm font-medium hover:underline"
              >
                <GitHub size={14} />
                Source Code
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
