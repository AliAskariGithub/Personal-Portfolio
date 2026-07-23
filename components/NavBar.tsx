'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home, Folder, Briefcase, Tool, Edit, User, Menu, X } from 'react-feather';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const extendedNavItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: User, label: 'About', href: '/about' },
  { icon: Folder, label: 'Projects', href: '/projects' },
  { icon: Briefcase, label: 'Experience', href: '/experience' },
  { icon: Tool, label: 'Tools', href: '/tools' },
  { icon: Edit, label: 'Thoughts', href: '/blog' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation - visible on md and above */}
      <nav className="hidden md:block fixed top-[30px] left-1/2 -translate-x-1/2 z-50">
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

          {extendedNavItems.map((item, index) => {
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

      {/* Mobile/Tablet Navigation - Hamburger Menu */}
      <nav className="md:hidden fixed top-[20px] left-[20px] right-[20px] z-50">
        <motion.div
          className="flex items-center justify-between px-4 h-12 rounded-2xl"
          style={{
            background: 'rgba(12, 12, 14, 0.9)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow:
              '0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo/Name */}
          <a href="/" className="font-poppins font-semibold text-white text-sm">
            Ali Askari
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[45] bg-bg/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
              {extendedNavItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`w-full max-w-[280px] flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                      isActive
                        ? 'bg-purple/20 border border-purple/30'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <item.icon
                      size={24}
                      className={isActive ? 'text-purple' : 'text-gray-400'}
                    />
                    <span
                      className={`font-poppins font-medium text-lg ${
                        isActive ? 'text-purple' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-purple" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
