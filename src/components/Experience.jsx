import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Wrench, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layout, 
  FileSpreadsheet, 
  Code2, 
  Sparkles,
  Paperclip,
  Check,
  Eye,
  X,
  Maximize2
} from 'lucide-react';
import { careerTimeline, skillCategories } from '../data/portfolioData';

export default function Experience() {
  // Tabs: 'Semua Riwayat', 'Pendidikan', 'Magang & Kerja', 'Organisasi', 'Skill & Tool'
  const tabs = [
    { id: 'all', label: 'Semua Riwayat', icon: Sparkles },
    { id: 'education', label: 'Pendidikan', icon: GraduationCap },
    { id: 'experience', label: 'Magang & Kerja', icon: Briefcase },
    { id: 'organization', label: 'Organisasi', icon: Users },
    { id: 'skills', label: 'Skill & Tool', icon: Wrench },
  ];

  const [activeTab, setActiveTab] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Filter timeline items based on activeTab
  const filteredTimeline = careerTimeline.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'education') return item.type === 'education';
    if (activeTab === 'experience') return item.type === 'experience';
    if (activeTab === 'organization') return item.type === 'organization';
    return false;
  });

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-handwriting text-2xl sm:text-3xl text-[#790C12] block mb-1">
              journey &amp; career track
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight">
              <span className="chrome-heading">
                Riwayat &amp;
              </span>{' '}
              <span className="text-[#790C12]">Karir</span>
            </h2>
            <div className="w-24 h-1 bg-[#790C12] mx-auto mt-3 rounded-full relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#790C12]" />
            </div>
          </motion.div>
        </div>

        {/* Tab Controls: Scrapbook Index Card Strip */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl border flex flex-wrap justify-center gap-1 max-w-full bg-[#fffdf9] border-[#e2d5c5] shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#790C12] text-white shadow-[0_2px_12px_rgba(121,12,18,0.4)]'
                      : 'text-[#564949] hover:text-[#790C12] hover:bg-[#790C12]/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB CONTENT */}
        <AnimatePresence mode="wait">
          {activeTab !== 'skills' ? (
            /* Timeline Cards Grid: selalu gunakan grid 2 kolom (md:grid-cols-2) agar lebar kartu tetap konsisten dan tidak melebar memenuhi satu layar penuh */
            <motion.div
              key="timeline-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredTimeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border relative overflow-hidden transition-all hover:border-[#790C12] bg-white border-[#e5dcd1] shadow-[0_4px_16px_rgba(121,12,18,0.04)] hover:shadow-md flex flex-col justify-between group"
                >
                  {/* Scrapbook Tape Indicator */}
                  <div className={`absolute top-0 right-8 w-24 h-3.5 ${
                    item.type === 'experience' ? 'washi-tape-red' : 'washi-tape-kraft'
                  } rotate-[-1deg] opacity-80 z-10`} />

                  {/* Card Image Banner */}
                  {item.image && (
                    <div className="relative aspect-[16/8] overflow-hidden bg-stone-100 border-b border-dashed border-[#790C12]/20 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                      
                      {/* Pill Lokasi */}
                      <div className="absolute bottom-2.5 left-4 flex items-center gap-1.5 text-[11px] font-mono font-bold text-white bg-black/50 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                        <MapPin className="w-3 h-3 text-[#f7c2c5]" />
                        <span>{item.location}</span>
                      </div>

                      {/* Tombol Lihat Foto */}
                      <button
                        onClick={() => setSelectedPhoto({
                          src: item.image,
                          title: item.title,
                          organization: item.organization,
                          category: item.category,
                          period: item.period
                        })}
                        className="absolute bottom-2.5 right-4 px-3 py-1 rounded-full bg-[#790C12]/90 hover:bg-[#790C12] text-white font-semibold text-xs flex items-center gap-1.5 shadow-md backdrop-blur-xs transition-all hover:scale-105 cursor-pointer z-10"
                        title="Lihat foto dokumentasi ukuran penuh"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Lihat Foto</span>
                      </button>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex flex-col gap-4">
                    
                    {/* Role, Org, Badges, Date */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#790C12] text-white">
                            {item.category}
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono border border-stone-300 text-stone-700 bg-[#faf6f0]">
                            {item.status}
                          </span>
                        </div>

                        {/* Periode Badge */}
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#790C12] bg-[#faf6ef] px-2.5 py-1 rounded-lg border border-[#790C12]/15">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-black tracking-tight mb-1 text-[#241e1e] group-hover:text-[#790C12] transition-colors">
                        {item.title}
                      </h3>

                      <div className="font-bold text-sm sm:text-base text-[#790C12] mb-3">
                        {item.organization}
                      </div>

                      <p className="text-sm leading-relaxed mb-4 text-[#504441]">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 mb-4">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <CheckCircle2 className="w-4 h-4 text-[#790C12] shrink-0 mt-0.5" />
                            <span className="text-stone-700">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Skill Tags at bottom */}
                  <div className="px-6 sm:px-7 pb-6 flex flex-wrap gap-1.5 pt-3 border-t border-dashed border-stone-200 mt-auto">
                    {item.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-mono border bg-[#f8f3ec] border-stone-200 text-stone-700"
                      >
                        #{s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* SKILL & TOOL BOARD - 4 Card Kecil & Ringkas Berjajar Horizontal (grid-cols-2 md:grid-cols-4) */
            <motion.div
              key="skills-board"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
            >
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-4.5 rounded-2xl border relative overflow-hidden bg-white border-[#e5dcd1] shadow-[0_2px_12px_rgba(121,12,18,0.03)] hover:shadow-md hover:border-[#790C12] transition-all flex flex-col justify-between"
                >
                  {/* Washi Tape Minimalis */}
                  <div className={`absolute top-0 right-3 w-12 h-2.5 ${
                    idx % 2 === 0 ? 'washi-tape-red' : 'washi-tape-kraft'
                  } rotate-[-1deg] opacity-75 z-10`} />

                  <div>
                    {/* Header Mini */}
                    <div className="flex items-center gap-1 text-[#790C12] font-mono text-[10px] uppercase font-bold tracking-wider mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Kategori #{idx + 1}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-serif font-black tracking-tight mb-3 text-[#241e1e] leading-snug">
                      {cat.category}
                    </h3>

                    {/* Skill Items Compact Chips */}
                    <div className="flex flex-col gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-2.5 py-1.5 rounded-lg border bg-[#faf6f0] border-stone-200/80 flex items-center justify-between gap-1 hover:border-[#790C12]/40 transition-colors"
                        >
                          <span className="font-semibold text-xs text-stone-900 truncate">
                            {skill.name}
                          </span>
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-[#790C12] text-white shrink-0">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Ringkas */}
                  <div className="mt-3.5 pt-2 border-t border-dashed border-stone-200 flex items-center justify-between text-[10px] font-mono text-stone-500">
                    <span>{cat.skills.length} item</span>
                    <span className="text-[#790C12] font-bold">Verified</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL FULL IMAGE PREVIEW */}
        <AnimatePresence>
          {selectedPhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#e2d5c5]"
              >
                {/* Washi Tape Header */}
                <div className="washi-tape-red absolute top-0 left-12 w-28 h-4 -rotate-1 z-10 opacity-90" />

                {/* Modal Top Bar */}
                <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#e5dcd1] bg-[#fffdf9]">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#790C12] uppercase tracking-wider">
                      {selectedPhoto.category} • {selectedPhoto.period}
                    </div>
                    <h4 className="font-serif font-black text-lg sm:text-xl text-stone-900">
                      {selectedPhoto.title}
                    </h4>
                    <div className="text-xs text-stone-600 font-medium">
                      {selectedPhoto.organization}
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-2 rounded-full hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                    title="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Full Image Container */}
                <div className="p-4 sm:p-6 bg-[#faf6f0] flex items-center justify-center max-h-[75vh] overflow-auto">
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain shadow-lg border border-stone-200"
                  />
                </div>

                {/* Modal Footer */}
                <div className="px-5 py-3.5 bg-white border-t border-[#e5dcd1] flex justify-between items-center text-xs font-mono text-stone-500">
                  <span>Dokumentasi Riwayat &amp; Karir Intan Atsilah</span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-4 py-1.5 rounded-lg bg-[#790C12] text-white font-semibold hover:bg-[#921118] transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
