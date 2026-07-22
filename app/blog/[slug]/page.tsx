'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'react-feather';
import { blogPosts } from '@/data/blog';
import Footer from '@/components/Footer';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-[160px] pb-20 px-5">
        <div className="max-w-[680px] mx-auto">
          <h1 className="font-poppins font-bold text-white text-3xl mb-4">Post not found</h1>
          <Link href="/blog" className="text-purple flex items-center gap-2">
            <ArrowLeft size={16} /> Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[160px] pb-20 px-5 lg:px-0">
      <article className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple mb-8 hover:underline"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>

          {/* Hero image */}
          <motion.div
            className="relative w-full max-h-[360px] rounded-2xl overflow-hidden mb-8"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-poppins font-bold text-white uppercase mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {post.title}
          </motion.h1>

          {/* Meta */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-1.5 text-sm" style={{ color: '#6a6b6e' }}>
              <Calendar size={14} className="text-purple" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm" style={{ color: '#6a6b6e' }}>
              <Clock size={14} className="text-purple" />
              <span>{post.readTime} read</span>
            </div>
          </motion.div>

          {/* Tags */}
          {post.tags && (
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-inter"
                  style={{
                    background: 'rgba(157,76,204,0.15)',
                    color: '#c47ef5'
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Body */}
          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div
              className="font-poppins text-base leading-relaxed"
              style={{ color: '#b5b0b0' }}
            >
              {(post.body || post.summary).split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4">
                  {paragraph.startsWith('**') ? (
                    <strong className="text-white">{paragraph.replace(/\*\*/g, '')}</strong>
                  ) : paragraph.startsWith('- ') ? (
                    <span className="block ml-4">• {paragraph.slice(2)}</span>
                  ) : paragraph.match(/^\d\./) ? (
                    <span className="block ml-4">{paragraph}</span>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Share section */}
          <motion.div
            className="mt-12 pt-8 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-poppins text-sm mb-4" style={{ color: '#6a6b6e' }}>
              Enjoyed this article? Let&apos;s connect:
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/Syed_Ali_Askari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple text-sm hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/ali-askari-355257308"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple text-sm hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AliAskariGithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple text-sm hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>

        <Footer />
      </article>
    </main>
  );
}
