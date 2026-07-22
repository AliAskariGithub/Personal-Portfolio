'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import ToolCard from '@/components/ToolCard';
import Footer from '@/components/Footer';
import { tools, toolCategories } from '@/data/tools';

export default function ToolsPage() {
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
          <SectionHeading>CORE TOOLS & SKILLS</SectionHeading>
          <p className="font-poppins mb-12 max-w-lg" style={{ color: '#998f8f', fontSize: '16px' }}>
            Technologies and frameworks I use daily to build intelligent software and creative solutions.
            Proficiency is rated on a scale of 1-10.
          </p>
        </motion.div>

        {/* Tools by Category */}
        {toolCategories.map((category, catIndex) => {
          const categoryTools = tools.filter(tool => tool.category === category.key);
          if (categoryTools.length === 0) return null;

          return (
            <motion.section
              key={category.key}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="font-poppins font-semibold text-white text-xl">
                  {category.label}
                </h2>
                <span
                  className="text-sm px-2 py-0.5 rounded-full"
                  style={{
                    background: 'rgba(157,76,204,0.15)',
                    color: '#c47ef5'
                  }}
                >
                  {categoryTools.length} skills
                </span>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {categoryTools.map((tool, index) => (
                  <ToolCard key={tool.title} {...tool} index={index} />
                ))}
              </div>
            </motion.section>
          );
        })}

        {/* Daily Tools Section */}
        <motion.section
          className="mt-16 p-6 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(157,76,204,0.1), rgba(157,76,204,0.05))',
            border: '1px solid rgba(157,76,204,0.2)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-poppins font-semibold text-white text-lg mb-4">
            🛠️ Daily Tools
          </h3>
          <p className="font-poppins text-sm mb-4" style={{ color: '#b5b0b0' }}>
            The tools I use every day for development and design:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'VS Code', 'Cursor.dev', 'GitHub', 'ChatGPT', 'Claude Code', 'Notion', 'Figma', 'Terminal'
            ].map((tool, i) => (
              <motion.span
                key={tool}
                className="px-3 py-1.5 rounded-lg text-sm font-medium"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  background: 'rgba(157,76,204,0.2)',
                  borderColor: 'rgba(157,76,204,0.5)'
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <Footer />
      </div>
    </main>
  );
}
