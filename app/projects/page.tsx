'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Search, Filter, X } from 'react-feather';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { projects } from '@/data/projects';

const categories = ['All', 'AI & Automation', 'Full-Stack', 'Education', 'Design', 'Tools'];

const categoryMap: Record<string, string[]> = {
  'AI & Automation': ['AI', 'Automation', 'Python', 'Groq AI', 'Llama-3.3', 'OpenAI', 'RAG'],
  'Full-Stack': ['Next.js', 'FastAPI', 'TypeScript', 'REST API', 'PostgreSQL', 'React'],
  'Education': ['Education', 'Docusaurus', 'Learning'],
  'Design': ['Design', 'Web Dev', 'Branding', 'SEO'],
  'Tools': ['Tools', 'OpenClaw', 'Agents'],
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      if (selectedCategory === 'All') return matchesSearch;

      const categoryTags = categoryMap[selectedCategory] || [];
      const matchesCategory = project.tags?.some(tag => categoryTags.includes(tag));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <NavBar />
      <main className="pt-[100px] sm:pt-[120px] md:pt-[160px] pb-20 px-4 sm:px-5 lg:px-0">
        <div className="max-w-[1140px] mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple mb-6 sm:mb-8 hover:underline text-sm sm:text-base"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading>FEATURED PROJECTS</SectionHeading>
            <p className="font-poppins mb-6 sm:mb-8 max-w-lg" style={{ color: '#998f8f', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
              A collection of projects showcasing AI automation, full-stack development, and creative design work.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            className="mb-6 sm:mb-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Search Bar */}
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple transition-colors text-sm sm:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filter Toggle & Category Pills */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-purple text-white'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white transition-colors text-sm"
              >
                <Filter size={16} />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>

            {/* Results Count */}
            <div className="text-gray-500 text-xs sm:text-sm">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </motion.div>

          {/* Projects Grid/List */}
          {filteredProjects.length > 0 ? (
            <div className="flex flex-col">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16 sm:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-base sm:text-lg mb-4">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-purple hover:underline text-sm sm:text-base"
              >
                Clear all filters
              </button>
            </motion.div>
          )}

          {/* Design Gallery Section */}
          <motion.section
            className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-poppins font-bold text-white uppercase mb-3 sm:mb-4" style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}>
              Design & Video Gallery
            </h2>
            <p className="font-poppins mb-6 sm:mb-8 max-w-lg" style={{ color: '#998f8f', fontSize: 'clamp(12px, 2.5vw, 16px)' }}>
              Graphic design work, brand identities, and video editing projects.
            </p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { title: 'NexuGem Brand Identity', category: 'Branding', image: 'https://framerusercontent.com/images/tRZviFpeGXyuMVmVqGj8O1XPpo.webp' },
                { title: 'Mom\'s Kitchen Logo', category: 'Logo Design', image: 'https://framerusercontent.com/images/4mYEXU91rLBNKIW9k6hZh16l7Q.jpeg' },
                { title: 'Tech Startup Poster', category: 'Poster Design', image: 'https://framerusercontent.com/images/a70g11CzlnQYCTEi1c802r8x1CE.jpg' },
                { title: 'Social Media Campaign', category: 'Social Media', image: 'https://framerusercontent.com/images/SmKpJArNfpH0J4YgHNcqsyxuyEA.jpg' },
                { title: 'Product Promo Video', category: 'Video Editing', image: 'https://framerusercontent.com/images/iwNXp5FbnVuonnC3boDtFbw8Mk.jpg' },
                { title: 'Event Poster Series', category: 'Poster Design', image: 'https://framerusercontent.com/images/zOWx0eEsJcZm7ntGp0RzPSjE00.jpg' },
                { title: 'E-commerce Banner', category: 'Digital Marketing', image: 'https://framerusercontent.com/images/X45kreSZsm5DFF2be6T8o6YaJAQ.jpg' },
                { title: 'Brand Guidelines', category: 'Branding', image: 'https://framerusercontent.com/images/QYuBadXuZMyXPEyAxGrVh7iNaU.jpg' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <p className="text-white font-poppins font-medium text-xs sm:text-sm mb-1">{item.title}</p>
                      <span className="text-purple text-[10px] sm:text-xs">{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Video Gallery */}
            <div className="mt-10 sm:mt-12">
              <h3 className="font-poppins font-semibold text-white text-lg sm:text-xl mb-4 sm:mb-6">Video Editing Work</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Product Demo Reel', duration: '2:30', thumbnail: 'https://framerusercontent.com/images/a70g11CzlnQYCTEi1c802r8x1CE.jpg' },
                  { title: 'Brand Story Video', duration: '1:45', thumbnail: 'https://framerusercontent.com/images/SmKpJArNfpH0J4YgHNcqsyxuyEA.jpg' },
                ].map((video, index) => (
                  <motion.div
                    key={video.title}
                    className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-[10px] sm:border-l-[14px] border-l-white border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-poppins font-medium text-sm sm:text-base">{video.title}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{video.duration}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <Footer />
        </div>
      </main>
    </>
  );
}
