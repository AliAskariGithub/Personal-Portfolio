'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Code, Feather } from 'react-feather';
import { BiRocket } from 'react-icons/bi';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
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
              className="font-poppins font-bold text-white uppercase mb-10"
              style={{ fontSize: 'clamp(48px, 7vw, 96px)', letterSpacing: '-0.04em' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              ABOUT ME
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Image */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative w-full aspect-square max-w-[350px] rounded-2xl overflow-hidden border-2 border-purple/30 shadow-2xl">
                  <Image
                    src="/About.jpeg"
                    alt="Ali Askari"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Paragraph 1: Origin story */}
                <motion.p
                  className="font-poppins text-lg leading-relaxed"
                  style={{ color: '#b5b0b0' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I started coding at 17, teaching myself Python through late nights and online resources. What began as curiosity quickly became obsession — I was building projects before I fully understood how they worked, learning by breaking things and fixing them. Growing up in Karachi, I didn&apos;t have access to the same tech networks as Silicon Valley, but I had something more valuable: the internet, unlimited curiosity, and the willingness to figure things out.
                </motion.p>

                {/* Paragraph 2: The throughline */}
                <motion.p
                  className="font-poppins text-lg leading-relaxed"
                  style={{ color: '#b5b0b0' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  I&apos;ve always straddled two worlds: the logical, systems-thinking world of <span className="text-white font-medium">full-stack development and AI</span>, and the visual, human-centered world of <span className="text-white font-medium">brand and graphic design</span>. This dual track isn&apos;t accidental — I believe the best software isn&apos;t just technically sound, it&apos;s also thoughtfully designed. That philosophy led me to found <span className="text-purple">NexuGem Agency</span>, where I lead a small team building digital products that look as good as they function.
                </motion.p>

                {/* Paragraph 3: Current focus */}
                <motion.p
                  className="font-poppins text-lg leading-relaxed"
                  style={{ color: '#b5b0b0' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Right now, I&apos;m deep in <span className="text-purple">agentic AI systems</span> — building autonomous assistants that don&apos;t just respond to commands but reason, plan, and execute. I&apos;m fascinated by the shift from &quot;AI as a tool&quot; to &quot;AI as a teammate.&quot; When I&apos;m not coding, you&apos;ll find me designing fictional brand logos for fun, debugging with a cup of chai, or exploring open-source agent frameworks like OpenClaw.
                </motion.p>

                {/* Paragraph 4: Education & Growth */}
                <motion.p
                  className="font-poppins text-lg leading-relaxed"
                  style={{ color: '#b5b0b0' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  My journey accelerated in 2024 through the <span className="text-white font-medium">Governor Sindh IT Initiative (GIAIC)</span>, where I immersed myself in AI, web development, and automation. I was selected as a Lead Student to mentor peers in Python, web development, and AI fundamentals — an experience that sharpened my communication skills and deepened my understanding through teaching others.
                </motion.p>

                {/* Paragraph 5: Vision & Values */}
                <motion.p
                  className="font-poppins text-lg leading-relaxed"
                  style={{ color: '#b5b0b0' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  I&apos;m driven by the belief that <span className="text-white font-medium">technology should empower people</span>, not replace them. Every project I take on — whether it&apos;s an AI-powered automation system, a full-stack web application, or a brand identity — starts with understanding the human problem behind it. I approach challenges with a spec-first mindset, ensuring that every line of code serves a clear purpose and delivers real value.
                </motion.p>

                {/* Quick highlights */}
                <motion.div
                  className="flex flex-wrap gap-6 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#6a6b6e' }}>
                    <Code size={18} className="text-purple" />
                    <span>Self-taught developer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#6a6b6e' }}>
                    <Feather size={18} className="text-purple" />
                    <span>Nationally awarded designer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#6a6b6e' }}>
                    <BiRocket size={18} className="text-purple" />
                    <span>Agency founder at 18</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <Footer />
        </div>
      </main>
    </>
  );
}
