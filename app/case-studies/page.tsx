'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Zap, Cpu, TrendingUp, GitHub, ArrowLeft } from 'react-feather';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CaseStudiesPage() {
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
              CASE STUDIES
            </motion.h1>

            <motion.p
              className="font-poppins mb-12 max-w-2xl"
              style={{ color: '#998f8f', fontSize: '18px', lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Deep dives into selected projects — the problems, the solutions, and the outcomes.
            </motion.p>

            <div className="space-y-12">
              {caseStudies.map((caseStudy, studyIndex) => (
                <motion.div
                  key={caseStudy.slug}
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(182,180,189,0.05)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + studyIndex * 0.2, duration: 0.6 }}
                >
                  {/* Header with image */}
                  <div className="relative h-56 md:h-72">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-poppins font-bold text-white text-2xl md:text-3xl">
                        {caseStudy.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Problem */}
                    <motion.div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-purple/20 flex items-center justify-center">
                          <Zap size={16} className="text-purple" />
                        </div>
                        <h4 className="font-poppins font-semibold text-white text-lg">The Problem</h4>
                      </div>
                      <p className="font-poppins text-sm leading-relaxed pl-10" style={{ color: '#b5b0b0' }}>
                        {caseStudy.problem}
                      </p>
                    </motion.div>

                    {/* Build */}
                    <motion.div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-purple/20 flex items-center justify-center">
                          <Cpu size={16} className="text-purple" />
                        </div>
                        <h4 className="font-poppins font-semibold text-white text-lg">What Was Built</h4>
                      </div>
                      <p className="font-poppins text-sm leading-relaxed pl-10" style={{ color: '#b5b0b0' }}>
                        {caseStudy.build}
                      </p>
                    </motion.div>

                    {/* Outcome */}
                    <motion.div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-purple/20 flex items-center justify-center">
                          <TrendingUp size={16} className="text-purple" />
                        </div>
                        <h4 className="font-poppins font-semibold text-white text-lg">The Outcome</h4>
                      </div>
                      <p className="font-poppins text-sm leading-relaxed pl-10" style={{ color: '#b5b0b0' }}>
                        {caseStudy.outcome}
                      </p>
                    </motion.div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {caseStudy.technologies.map((tech) => (
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
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      {caseStudy.liveUrl && (
                        <a
                          href={caseStudy.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple text-sm font-medium hover:underline"
                        >
                          <ExternalLink size={14} />
                          View Project
                        </a>
                      )}
                      {caseStudy.githubUrl && (
                        <a
                          href={caseStudy.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple text-sm font-medium hover:underline"
                        >
                          <GitHub size={14} />
                          Source Code
                        </a>
                      )}
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
