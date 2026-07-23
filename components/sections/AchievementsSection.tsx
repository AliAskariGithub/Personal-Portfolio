'use client';

import { motion } from 'framer-motion';
import { Award, Star, Users, ArrowUpRight } from 'react-feather';
import Link from 'next/link';
import { achievements } from '@/data/achievements';
import { FaCertificate } from 'react-icons/fa';

const iconMap = {
  award: Award,
  certification: FaCertificate,
  hackathon: Star,
  recognition: Users,
};

export default function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="mb-28 pt-[80px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-poppins font-bold text-white uppercase" style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.03em' }}>
          ACHIEVEMENTS
        </h2>
        <Link
          href="/achievements"
          className="flex items-center gap-1 text-purple text-sm font-medium hover:underline"
        >
          Know more <ArrowUpRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.icon];
          return (
            <motion.div
              key={achievement.title}
              className="p-5 rounded-xl border transition-all group"
              style={{
                borderColor: 'rgba(255,255,255,0.07)',
                background: 'rgba(182,180,189,0.05)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                borderColor: 'rgba(157,76,204,0.3)',
                background: 'rgba(157,76,204,0.08)'
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(157,76,204,0.15)' }}
                >
                  <Icon size={22} className="text-purple" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-white text-base mb-1 group-hover:text-purple transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="font-inter text-xs mb-2" style={{ color: '#6a6b6e' }}>
                    {achievement.issuer} · {achievement.year}
                  </p>
                  {achievement.description && (
                    <p className="font-poppins text-xs leading-relaxed" style={{ color: '#998f8f' }}>
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
  );
}
