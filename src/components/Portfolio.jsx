import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Globe, 
  Smartphone, 
  Award, 
  Layers, 
  ExternalLink, 
  Eye, 
  Paperclip, 
  Sparkles,
  ArrowUpRight,
  Palette
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

export default function Portfolio({ onSelectProject }) {
  // Tabs: 'All Projects', 'UI/UX Design', 'Web App', 'Mobile App', 'Etc.' (Certificates dipindah ke Navbar tersendiri)
  const tabs = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'UI/UX Design', label: 'UI/UX Design', icon: Palette },
    { id: 'Web App', label: 'Web App', icon: Globe },
    { id: 'Mobile App', label: 'Mobile App', icon: Smartphone },
    { id: 'Etc.', label: 'Etc.', icon: FolderGit2 },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = portfolioProjects.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-[130px] opacity-10"
          style={{ background: '#790C12' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-handwriting text-2xl sm:text-3xl text-[#790C12] block mb-1">
              curated showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight">
              <span className="chrome-heading">
                Koleksi
              </span>{' '}
              <span className="text-[#790C12]">Portofolio</span>
            </h2>
            <div className="w-24 h-1 bg-[#790C12] mx-auto mt-3 rounded-full relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#790C12]" />
            </div>
          </motion.div>
        </div>

        {/* Tab Filter Strip */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl border flex flex-wrap justify-center gap-1 max-w-full bg-[#fffdf9] border-[#e2d5c5] shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isActive ? 'text-white' : 'text-[#564949] hover:text-[#790C12] hover:bg-[#790C12]/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioTabPill"
                      className="absolute inset-0 rounded-xl bg-[#790C12] shadow-[0_4px_14px_rgba(121,12,18,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid dengan Transisi Halus (Spring & Stagger) */}
        <motion.div 
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  duration: 0.35, 
                  ease: [0.25, 0.1, 0.25, 1],
                  layout: { type: 'spring', stiffness: 300, damping: 30 } 
                }}
                className="group rounded-2xl border relative flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 bg-white border-[#e5dcd1] hover:border-[#790C12] shadow-sm hover:shadow-[0_12px_30px_rgba(121,12,18,0.12)]"
              >
                {/* Washi Tape on Top Card */}
                <div className="washi-tape-red absolute top-0 right-8 w-20 h-3.5 -rotate-2 z-10 opacity-80" />

                {/* Card Top: Image & Overlay */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 border-b border-dashed border-[#790C12]/20 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Category Stamp Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#790C12] text-white shadow-md">
                      {project.category}
                    </div>

                    {/* Quick View Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-1.5 rounded-full bg-[#790C12] hover:bg-[#921118] text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Buka Link</span>
                        </a>
                      )}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-3.5 py-1.5 rounded-full bg-white text-[#790C12] font-semibold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Detail</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="text-[11px] font-mono text-[#790C12] font-semibold tracking-wide uppercase mb-1">
                      {project.client} • {project.year}
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-black tracking-tight mb-2 text-[#241e1e] group-hover:text-[#790C12] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 text-[#544845]">
                      {project.description}
                    </p>

                    {/* Metric Highlights Pill */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="p-2.5 rounded-xl border border-dashed mb-4 grid grid-cols-2 gap-2 text-center border-stone-200 bg-[#faf6f0]">
                        <div>
                          <div className="text-[10px] font-mono text-stone-500">
                            {project.metrics[0].label}
                          </div>
                          <div className="text-xs font-bold text-[#790C12]">
                            {project.metrics[0].value}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-stone-500">
                            {project.metrics[1]?.label || 'Status'}
                          </div>
                          <div className="text-xs font-bold text-[#790C12]">
                            {project.metrics[1]?.value || 'Verified'}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tools Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 4).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono border bg-[#f7f2eb] border-stone-200 text-stone-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Buttons (Buka Link & Detail) */}
                <div className="px-5 pb-5 pt-0 flex items-center gap-2">
                  {/* DIRECT PROJECT LINK BUTTON */}
                  {project.projectUrl ? (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white transition-all flex items-center justify-center gap-1.5 shadow-[0_2px_10px_rgba(121,12,18,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                      title={`Buka langsung ${project.title}`}
                    >
                      <span>Buka Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}

                  {/* CASE STUDY DETAIL BUTTON */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="py-2.5 px-3.5 rounded-xl text-xs font-semibold border border-[#790C12]/40 text-[#790C12] hover:bg-[#790C12]/10 transition-all flex items-center justify-center gap-1.5 bg-white shadow-xs"
                    title="Pelajari Studi Kasus & Dokumentasi"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Detail</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State jika tab kosong (misal Mobile App) */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-12 text-center rounded-2xl border border-dashed border-[#790C12]/20 bg-[#fffdfa] max-w-lg mx-auto"
          >
            <div className="w-14 h-14 rounded-full bg-[#790C12]/10 text-[#790C12] flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-black text-xl text-[#241e1e] mb-1">
              Belum Ada Proyek di Kategori Ini
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans max-w-sm mx-auto">
              Proyek aplikasi mobile dalam tahap eksplorasi dan pengembangan. Silakan cek tab <strong>UI/UX Design</strong> untuk melihat prototipe interaktif aplikasi mobile.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
