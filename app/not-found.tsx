'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home } from 'react-feather';
import { RiRobot3Fill as RobotIcon } from 'react-icons/ri';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-lg text-center">
        {/* Animated 404 */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-poppins font-bold text-purple"
            style={{ fontSize: 'clamp(120px, 20vw, 200px)', letterSpacing: '-0.05em', lineHeight: 1 }}
          >
            404
          </h1>

          {/* Floating robot */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-purple/20 flex items-center justify-center">
              <RobotIcon size={40} className="text-purple" />
            </div>
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="font-poppins font-bold text-white text-2xl sm:text-3xl mb-4">
            Page Not Found
          </h2>
          <p className="font-poppins text-gray-400 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Looks like this page went exploring! The AI assistant might know where it went,
            or you can head back home.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple text-white font-poppins font-medium transition-all hover:scale-105"
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-poppins font-medium transition-all hover:bg-white/10"
          >
            <ArrowLeft size={18} />
            Explore Projects
          </Link>
        </motion.div>

        {/* Fun message */}
        <motion.p
          className="mt-12 text-gray-600 text-xs sm:text-sm font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Error 404: Page not found • Last seen heading to the AI dimension 🚀
        </motion.p>
      </div>
    </div>
  );
}
