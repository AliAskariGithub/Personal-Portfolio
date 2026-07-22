'use client';

import { motion } from 'framer-motion';
import { GitHub, Twitter, Linkedin, Mail, MapPin, Code, Feather } from 'react-feather';
import Image from 'next/image';

const socialLinks = [
  { icon: GitHub, href: 'https://github.com/AliAskariGithub', label: 'GitHub', color: '#6a6b6e' },
  { icon: Twitter, href: 'https://x.com/Syed_Ali_Askari', label: 'Twitter', color: '#1DA1F2' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ali-askari-355257308', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Mail, href: 'mailto:syedaliaskrizaidi1@gmail.com', label: 'Email', color: '#9D4CCC' },
];

export default function StickyProfile() {
  return (
    <motion.div
      className="relative w-full bg-white rounded-2xl p-6 flex flex-col items-center overflow-hidden"
      style={{
        boxShadow: '0px 30px 80px -46px rgba(157,76,204,0.55)',
        maxWidth: '344px',
      }}
      initial={{ opacity: 0, x: -50, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(157,76,204,0.3) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(157,76,204,0.2) 0%, transparent 70%)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Profile photo - Larger */}
      <motion.div
        className="relative w-[240px] h-[300px] rounded-2xl overflow-hidden mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/profile.jpg"
          alt="Ali Askari"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent" />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="font-poppins font-bold text-black text-center mb-1"
        style={{ fontSize: '32px' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Ali Askari
      </motion.h1>

      {/* Role badges */}
      <motion.div
        className="flex items-center gap-2 mb-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-purple/10 text-purple font-medium">
          <Code size={12} /> Developer
        </span>
        <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-purple/10 text-purple font-medium">
          <Feather size={12} /> Designer
        </span>
      </motion.div>

      {/* Bio */}
      <motion.p
        className="font-poppins font-medium text-center mb-4"
        style={{ color: '#6a6b6e', fontSize: '14px', maxWidth: '280px', lineHeight: 1.6 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Agentic AI Developer building intelligent software with clean code and creative design.
      </motion.p>

      {/* Location */}
      <motion.div
        className="flex items-center gap-1.5 mb-4"
        style={{ color: '#6a6b6e' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <MapPin size={14} className="text-purple" />
        <span className="font-poppins text-sm">Karachi, Pakistan</span>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="flex gap-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {socialLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all"
            style={{
              borderColor: 'rgba(157,76,204,0.2)',
              color: '#6a6b6e'
            }}
            whileHover={{
              scale: 1.15,
              borderColor: link.color,
              color: link.color,
              background: `${link.color}15`
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.1, type: "spring", stiffness: 200 }}
            aria-label={link.label}
          >
            <link.icon size={18} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
