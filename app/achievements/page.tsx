'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Award, Star, Users } from 'react-feather';
import { FaCertificate } from 'react-icons/fa';
import { achievements } from '@/data/achievements';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const iconMap = {
  award: Award,
  certification: FaCertificate,
  hackathon: Star,
  recognition: Users,
};

export default function AchievementsPage() {
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
              ACHIEVEMENTS
            </motion.h1>

            <motion.p
              className="font-poppins mb-12 max-w-2xl"
              style={{ color: '#998f8f', fontSize: '18px', lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Recognition and milestones from my journey in tech, design, and entrepreneurship.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = iconMap[achievement.icon];
                return (
                  <motion.div
                    key={achievement.title}
                    className="p-6 rounded-xl border transition-all group"
                    style={{
                      borderColor: 'rgba(255,255,255,0.07)',
                      background: 'rgba(182,180,189,0.05)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      borderColor: 'rgba(157,76,204,0.3)',
                      background: 'rgba(157,76,204,0.08)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(157,76,204,0.15)' }}
                      >
                        <Icon size={26} className="text-purple" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-white text-lg mb-2 group-hover:text-purple transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="font-inter text-sm mb-3" style={{ color: '#6a6b6e' }}>
                          {achievement.issuer} · {achievement.year}
                        </p>
                        {achievement.description && (
                          <p className="font-poppins text-sm leading-relaxed" style={{ color: '#998f8f' }}>
                            {achievement.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <Footer />
        </div>
      </main>
    </>
  );
}
