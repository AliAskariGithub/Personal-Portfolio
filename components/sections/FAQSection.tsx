'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'react-feather';
import { faqs } from '@/data/faq';

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="border-b"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-poppins font-semibold text-white text-base group-hover:text-purple transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-purple" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-poppins text-sm leading-relaxed pb-5" style={{ color: '#b5b0b0' }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="faq"
      className="mb-28 pt-[80px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="font-poppins font-bold text-white uppercase mb-8" style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.03em' }}>
        FREQUENTLY ASKED
      </h2>

      <div className="max-w-2xl">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </motion.section>
  );
}
