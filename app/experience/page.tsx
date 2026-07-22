'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import JobCard from '@/components/JobCard';
import Footer from '@/components/Footer';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
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

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading>MY EXPERIENCE</SectionHeading>
          <p className="font-poppins mb-8 max-w-lg" style={{ color: '#998f8f', fontSize: '16px' }}>
            My journey in tech, from learning to code to founding a digital agency and building AI-powered solutions.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <JobCard key={exp.company} {...exp} index={index} />
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
