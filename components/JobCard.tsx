'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'react-feather';

interface JobCardProps {
  company: string;
  role: string;
  date: string;
  description: string;
  href: string;
  achievements?: string[];
  index?: number;
}

export default function JobCard({
  company,
  role,
  date,
  description,
  href,
  achievements,
  index = 0
}: JobCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group py-6 border-b relative"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 8 }}
    >
      {/* Left accent line on hover */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
      />

      <div className="pl-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase size={14} className="text-purple" />
              <h3 className="font-poppins font-semibold text-white text-lg group-hover:text-purple transition-colors">
                {role}
              </h3>
            </div>
            <p className="font-poppins font-medium text-purple text-sm">{company}</p>
          </div>
          <div className="flex items-center gap-1 text-xs" style={{ color: '#6a6b6e' }}>
            <Calendar size={12} />
            <span>{date}</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-poppins text-sm mb-3" style={{ color: '#998f8f' }}>
          {description}
        </p>

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <ul className="space-y-1.5">
            {achievements.map((achievement, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-xs"
                style={{ color: '#b5b0b0' }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                <span className="text-purple mt-1">▸</span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.a>
  );
}
