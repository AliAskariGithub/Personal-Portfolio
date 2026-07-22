'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, Folder, Briefcase, Tool, Edit } from 'react-feather';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Folder, label: 'Projects', href: '/projects' },
  { icon: Briefcase, label: 'Experience', href: '/experience' },
  { icon: Tool, label: 'Tools', href: '/tools' },
  { icon: Edit, label: 'Thoughts', href: '/blog' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <nav className="fixed top-[30px] left-1/2 -translate-x-1/2 z-50">
      <motion.div
        className="relative flex items-center gap-1 px-3 h-14 rounded-2xl"
        style={{
          background: 'rgba(12, 12, 14, 0.75)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow:
            '0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(0,0,0,0.3)',
        }}
        initial={{ opacity: 0, y: -28, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Subtle top sheen */}
        <div
          className="absolute top-0 left-4 right-4 h-px rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
          }}
        />

        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredHref === item.href;

          return (
            <motion.div
              key={item.href}
              className="relative"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                    initial={{ opacity: 0, y: 4, scale: 0.88 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.88 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    <div
                      className="px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap"
                      style={{
                        background: 'rgba(30, 30, 36, 0.95)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.85)',
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: '0.01em',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                    >
                      {item.label}
                      {/* Arrow */}
                      <div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                        style={{
                          background: 'rgba(30, 30, 36, 0.95)',
                          borderRight: '1px solid rgba(255,255,255,0.1)',
                          borderBottom: '1px solid rgba(255,255,255,0.1)',
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.a
                href={item.href}
                className="relative flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer"
                onHoverStart={() => setHoveredHref(item.href)}
                onHoverEnd={() => setHoveredHref(null)}
                whileTap={{ scale: 0.9 }}
                aria-label={item.label}
              >
                {/* Active background pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(157,76,204,0.25), rgba(120,50,170,0.15))',
                      border: '1px solid rgba(157, 76, 204, 0.3)',
                      boxShadow:
                        '0 0 16px rgba(157,76,204,0.25), 0 0 4px rgba(157,76,204,0.4) inset',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover background */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <motion.div
                  animate={{
                    color: isActive
                      ? '#c47ef5'
                      : isHovered
                      ? '#b58fe0'
                      : '#6b6478',
                    y: isActive ? 0 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <item.icon
                    size={18}
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                </motion.div>

                {/* Active dot */}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#9D4CCC' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 25,
                      delay: 0.1,
                    }}
                  />
                )}
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </nav>
  );
}