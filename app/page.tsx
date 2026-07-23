'use client';

import { motion } from 'framer-motion';
import {
  Star, Send,
  Users, Award, ArrowUpRight,
  Coffee, Download
} from 'react-feather';
import StickyProfile from '@/components/StickyProfile';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import JobCard from '@/components/JobCard';
import ToolCard from '@/components/ToolCard';
import BlogCard from '@/components/BlogCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

// New sections
import AboutSection from '@/components/sections/AboutSection';
import CaseStudySection from '@/components/sections/CaseStudySection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NexuGemSection from '@/components/sections/NexuGemSection';
import FAQSection from '@/components/sections/FAQSection';


import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { tools } from '@/data/tools';
import { blogPosts } from '@/data/blog';

export default function Home() {
  return (
    <main className="pt-[160px] pb-20 px-5 lg:px-0">
      <div className="max-w-[1140px] mx-auto flex gap-[100px] flex-col lg:flex-row">
        {/* Profile - Desktop sticky, mobile full-width */}
        <aside className="w-full lg:w-[344px] flex-shrink-0">
          <div className="lg:sticky lg:top-10">
            <StickyProfile />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Hero Section */}
          <motion.section
            className="mb-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(157,76,204,0.15), rgba(157,76,204,0.1))',
                border: '1px solid rgba(157,76,204,0.3)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Star size={14} className="text-purple" />
              <span className="font-inter text-sm text-purple">Available for work</span>
            </motion.div>

            {/* Main heading with LetterReveal */}
            <div className="mb-6">
              <motion.h1
                className="font-poppins font-bold text-white uppercase leading-tight"
                style={{
                  fontSize: 'clamp(48px, 7vw, 96px)',
                  letterSpacing: '-0.04em',
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                AGENTIC AI
              </motion.h1>
              <motion.h1
                className="font-poppins font-bold text-purple uppercase leading-tight"
                style={{
                  fontSize: 'clamp(48px, 7vw, 96px)',
                  letterSpacing: '-0.04em',
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                DEVELOPER
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="font-poppins mb-10 max-w-lg"
              style={{ color: '#998f8f', fontSize: '18px', lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I&apos;m <span className="text-white font-semibold">Ali Askari</span>, an 18-year-old tech entrepreneur from Karachi building
              <span className="text-purple font-semibold"> intelligent software</span>,
              <span className="text-purple font-semibold"> AI automation</span>, and
              <span className="text-white font-semibold"> creative digital brands</span>.
            </motion.p>

            {/* Stats with NumberTicker */}
            <motion.div
              className="flex gap-8 mb-12 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {[
                { value: 18, label: 'Years Old', icon: Coffee, suffix: '' },
                { value: 20, label: 'Projects Built', icon: Send, suffix: '+' },
                { value: 5, label: 'Happy Clients', icon: Users, suffix: '+' },
                { value: 3, label: 'National Award', icon: Award, suffix: 'rd' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <stat.icon size={16} className="text-purple" />
                  <span className="font-poppins font-bold text-white text-xl">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="font-poppins text-xs uppercase" style={{ color: '#6a6b6e' }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons - Download Resume & View Projects */}
            <div className="flex gap-5 flex-col sm:flex-row">
              <motion.a
                href="/resume.pdf"
                download
                className="group flex items-center justify-center gap-3 p-4 rounded-xl flex-1 relative overflow-hidden border-2 border-purple"
                style={{ background: 'transparent' }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02, background: 'rgba(157,76,204,0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={22} className="text-purple relative z-10" />
                <span className="font-poppins font-semibold text-purple text-base relative z-10">
                  Download Resume
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="group flex items-center justify-center gap-3 p-4 rounded-xl flex-1 relative overflow-hidden"
                style={{ background: '#9D4CCC', boxShadow: 'var(--shadow-card)' }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                  }}
                  animate={{
                    x: [0, -10, 0],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <Send size={22} className="relative z-10" />
                <span className="font-poppins font-semibold text-white text-base relative z-10">
                  Hire Me
                </span>
                <motion.div
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative z-10"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                >
                  <ArrowUpRight size={16} className="text-white" />
                </motion.div>
              </motion.a>
            </div>
          </motion.section>

          {/* 1. About Section - After Hero, before Featured Projects */}
          <AboutSection />

          {/* Featured Projects Section */}
          <section id="projects" className="mb-28 pt-[80px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <SectionHeading>FEATURED PROJECTS</SectionHeading>
                <motion.a
                  href="/projects"
                  className="flex items-center gap-1 text-purple text-sm font-medium hover:underline"
                  whileHover={{ x: 3 }}
                >
                  View all <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </motion.div>

            <div className="flex flex-col">
              {projects.slice(0, 4).map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </section>

          {/* 2. Case Study Spotlight - After Featured Projects */}
          <CaseStudySection />

          {/* Experience Section */}
          <section id="experience" className="mb-28 pt-[80px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <SectionHeading>MY EXPERIENCE</SectionHeading>
                <motion.a
                  href="/experience"
                  className="flex items-center gap-1 text-purple text-sm font-medium hover:underline"
                  whileHover={{ x: 3 }}
                >
                  Full timeline <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </motion.div>

            <div className="flex flex-col">
              {experiences.slice(0, 2).map((exp, index) => (
                <JobCard key={exp.company} {...exp} index={index} />
              ))}
            </div>
          </section>

          {/* 3. Achievements Section - After Experience */}
          <AchievementsSection />

          {/* Tech Stack Section */}
          <section id="tools" className="mb-28 pt-[80px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <SectionHeading>CORE TOOLS</SectionHeading>
                <motion.a
                  href="/tools"
                  className="flex items-center gap-1 text-purple text-sm font-medium hover:underline"
                  whileHover={{ x: 3 }}
                >
                  View all <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tools.slice(0, 6).map((tool, index) => (
                <ToolCard key={tool.title} {...tool} index={index} />
              ))}
            </div>
          </section>

          {/* 4. Testimonials Section - After Core Tools */}
          <TestimonialsSection />

          {/* Blog Section */}
          <section id="blog" className="mb-28 pt-[80px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center justify-between mb-6">
                <SectionHeading>AI & DESIGN THOUGHTS</SectionHeading>
                <motion.a
                  href="/blog"
                  className="flex items-center gap-1 text-purple text-sm font-medium hover:underline"
                  whileHover={{ x: 3 }}
                >
                  All posts <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </motion.div>

            <div className="flex flex-col">
              {blogPosts.slice(0, 3).map((post, index) => (
                <BlogCard key={post.slug} {...post} index={index} />
              ))}
            </div>
          </section>

          {/* 5. NexuGem Agency Section - After Blog */}
          <NexuGemSection />

          {/* 6. FAQ Section - Before Contact */}
          <FAQSection />

          {/* Contact Section */}
          <section id="contact" className="mb-16 pt-[80px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SectionHeading>LET&apos;S BUILD TOGETHER</SectionHeading>
            </motion.div>

            <motion.p
              className="font-poppins mb-8 max-w-lg"
              style={{ color: '#998f8f', fontSize: '16px', lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Got a project in mind? Let&apos;s create something amazing together. I&apos;m always open to discussing new projects and opportunities.
            </motion.p>

            <ContactForm />
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}
