'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Image as ImageIcon, ChevronLeft, ChevronRight, X as CloseIcon } from 'react-feather';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  href: string;
  tags?: string[];
  featured?: boolean;
  index?: number;
  category?: 'development' | 'design';
  gallery?: string[];
}

export default function ProjectCard({
  title,
  description,
  longDescription,
  image,
  href,
  tags,
  featured,
  index = 0,
  category,
  gallery
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (gallery && gallery.length > 0) {
      e.preventDefault();
      setShowGallery(true);
    } else {
      // For non-gallery projects, navigate to href
      if (href && !href.startsWith('#')) {
        window.open(href, '_blank', 'noopener noreferrer');
      }
    }
  };

  return (
    <>
      <motion.div
        className="group relative overflow-hidden rounded-2xl cursor-pointer"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/20">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
          )}

          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-500 ${
              imageLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            unoptimized={image.startsWith('http')}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Featured Badge */}
          {featured && imageLoaded && (
            <motion.div
              className="absolute top-4 right-4 bg-purple text-white text-xs px-3 py-1.5 rounded-full font-poppins font-semibold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + index * 0.08, type: "spring", stiffness: 200 }}
            >
              Featured
            </motion.div>
          )}

          {/* Gallery Icon for Design Projects */}
          {gallery && gallery.length > 0 && imageLoaded && (
            <motion.div
              className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-poppins font-medium flex items-center gap-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 200 }}
            >
              <ImageIcon size={14} />
              {gallery.length} images
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="relative p-6">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-poppins font-bold text-white text-xl">
                    {title}
                  </h3>
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center group-hover:bg-purple transition-all"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight size={18} className="text-purple group-hover:text-white transition-colors" />
                  </motion.div>
                </div>

                <p className="font-poppins text-sm mb-4" style={{ color: '#998f8f' }}>
                  {description}
                </p>

                {/* Tags */}
                {tags && (
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag) => (
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
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-poppins font-bold text-white text-xl mb-3">
                  {title}
                </h3>

                <p className="font-poppins text-sm mb-4 leading-relaxed" style={{ color: '#b8b8b8' }}>
                  {longDescription || description}
                </p>

                {/* All Tags */}
                {tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full font-inter"
                        style={{
                          background: 'rgba(157,76,204,0.2)',
                          color: '#d49eff',
                          border: '1px solid rgba(157,76,204,0.3)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {!gallery && (
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple font-poppins font-semibold text-sm hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {category === 'design' ? 'View Gallery' : 'View Project'}
                    <ArrowUpRight size={16} />
                  </motion.a>
                )}
                {gallery && gallery.length > 0 && (
                  <motion.button
                    className="inline-flex items-center gap-2 text-purple font-poppins font-semibold text-sm hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Gallery
                    <ArrowUpRight size={16} />
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: '2px solid transparent',
          }}
          animate={{
            borderColor: isHovered ? 'rgba(157,76,204,0.5)' : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Gallery Modal/Carousel */}
      {showGallery && gallery && (
        <GalleryCarousel
          images={gallery}
          title={title}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
}

// Gallery Carousel Component with Keyboard Support
function GalleryCarousel({ images, title, onClose }: { images: string[]; title: string; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <div>
          <h2 className="font-poppins font-bold text-white text-xl md:text-2xl">{title}</h2>
          <p className="font-poppins text-sm" style={{ color: '#998f8f' }}>
            {currentIndex + 1} / {images.length}
          </p>
        </div>
        <motion.button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <CloseIcon size={20} />
        </motion.button>
      </div>

      {/* Main Image Container */}
      <div className="flex-1 relative flex items-center justify-center p-4 md:p-8" onClick={handleBackdropClick}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative w-full h-full max-w-6xl max-h-[calc(100vh-280px)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Loading Skeleton */}
            {imageLoading[currentIndex] !== false && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                <div className="w-16 h-16 border-4 border-purple/30 border-t-purple rounded-full animate-spin" />
              </div>
            )}

            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                fill
                className={`object-contain transition-opacity duration-300 ${
                  imageLoading[currentIndex] === false ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoading(prev => ({ ...prev, [currentIndex]: false }))}
                unoptimized
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 hover:bg-purple flex items-center justify-center text-white backdrop-blur-sm border border-white/10 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 hover:bg-purple flex items-center justify-center text-white backdrop-blur-sm border border-white/10 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}
      </div>

      {/* Thumbnails Strip */}
      {images.length > 1 && (
        <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto p-4 md:p-6">
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple scrollbar-track-white/5">
              {images.map((img, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-black/30"
                  style={{
                    border: idx === currentIndex ? '2px solid #9D4CCC' : '2px solid rgba(255,255,255,0.1)',
                    opacity: idx === currentIndex ? 1 : 0.6,
                  }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {idx === currentIndex && (
                    <div className="absolute inset-0 border-2 border-purple rounded-lg pointer-events-none" />
                  )}
                </motion.button>
              ))}
            </div>
            <p className="text-center text-white/40 text-xs mt-3 font-poppins">
              Use ← → arrow keys to navigate • Click outside image to close
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
