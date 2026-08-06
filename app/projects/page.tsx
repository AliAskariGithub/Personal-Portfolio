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

const categories = ['All', 'Development', 'Design', 'AI & Automation', 'Full-Stack', 'Education'];

const categoryMap: Record<string, string[]> = {
  'Development': ['Python', 'Next.js', 'FastAPI', 'TypeScript', 'REST API', 'PostgreSQL', 'React', 'Web Dev'],
  'Design': ['Branding', 'Identity', 'Visual Design', 'Logo Design', 'Icon Design', 'Social Media', 'Marketing', 'Graphics'],
  'AI & Automation': ['AI', 'Automation', 'Groq AI', 'Llama-3.3', 'OpenAI', 'RAG', 'AI Agents'],
  'Full-Stack': ['Next.js', 'FastAPI', 'TypeScript', 'REST API', 'PostgreSQL', 'React'],
  'Education': ['Education', 'Docusaurus', 'Learning'],
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

      // Check if it's a category filter
      if (selectedCategory === 'Development') {
        return matchesSearch && project.category === 'development';
      }
      if (selectedCategory === 'Design') {
        return matchesSearch && project.category === 'design';
      }

      const categoryTags = categoryMap[selectedCategory] || [];
      const matchesCategory = project.tags?.some(tag => categoryTags.includes(tag));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const devProjects = filteredProjects.filter(p => p.category === 'development');
  const designProjects = filteredProjects.filter(p => p.category === 'design');

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
            <SectionHeading>ALL PROJECTS</SectionHeading>
            <p className="font-poppins mb-6 sm:mb-8 max-w-2xl" style={{ color: '#998f8f', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
              A collection of web development projects and graphic design work showcasing AI automation, full-stack development, and creative branding.
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

          {/* Projects Grid - Separated by Category */}
          {filteredProjects.length > 0 ? (
            <div className="space-y-16">
              {/* Web Development Section */}
              {devProjects.length > 0 && (
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <h2 className="font-poppins font-bold text-white text-2xl mb-2">
                      Web Development
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {devProjects.length} {devProjects.length === 1 ? 'project' : 'projects'}
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {devProjects.map((project, index) => (
                      <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Graphic Design Section */}
              {designProjects.length > 0 && (
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <h2 className="font-poppins font-bold text-white text-2xl mb-2">
                      Graphic Design
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {designProjects.length} {designProjects.length === 1 ? 'project' : 'projects'}
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {designProjects.map((project, index) => (
                      <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                  </div>
                </div>
              )}
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

          <Footer />
        </div>
      </main>
    </>
  );
}
