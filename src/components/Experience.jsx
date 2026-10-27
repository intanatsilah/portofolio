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
  Check
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
            /* Timeline Cards Grid */
            <motion.div
              key="timeline-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {filteredTimeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 sm:p-7 rounded-2xl border relative overflow-hidden transition-all hover:border-[#790C12] bg-white border-[#e5dcd1] shadow-[0_4px_16px_rgba(121,12,18,0.04)] hover:shadow-md"
                >
                  {/* Scrapbook Tape Indicator */}
                  <div className={`absolute top-0 left-8 w-24 h-3.5 ${
                    item.type === 'experience' ? 'washi-tape-red' : 'washi-tape-kraft'
                  } rotate-[-1deg] opacity-80`} />

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pt-2">
                    
                    {/* Left: Role, Org, Badges */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#790C12] text-white">
                          {item.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono border border-stone-300 text-stone-700 bg-[#faf6f0]">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-black tracking-tight mb-1 text-[#241e1e]">
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

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-mono border bg-[#f8f3ec] border-stone-200 text-stone-700"
                          >
                            #{s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Period & Location Stamped Box */}
                    <div className="lg:w-48 shrink-0 p-3.5 rounded-xl border border-dashed flex flex-col justify-center text-left lg:text-right border-[#790C12]/20 bg-[#faf6ef]">
                      <div className="flex lg:justify-end items-center gap-1.5 text-xs font-mono font-bold text-[#790C12] mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex lg:justify-end items-center gap-1.5 text-[11px] font-mono text-stone-500">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* SKILL & TOOL BOARD */
            <motion.div
              key="skills-board"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border relative overflow-hidden bg-white border-[#e5dcd1] shadow-sm"
                >
                  {/* Paperclip graphic */}
                  <div className="absolute top-3 right-4 rotate-45 text-stone-400">
                    <Paperclip className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2 text-[#790C12] font-mono text-xs uppercase font-bold tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Kompetensi Teknis</span>
                  </div>

                  <h3 className="text-xl font-serif font-black tracking-tight mb-5 text-[#241e1e]">
                    {cat.category}
                  </h3>

                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl border transition-all bg-[#faf6f0] border-stone-200 hover:border-[#790C12]/40"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm sm:text-base font-sans text-stone-900">
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#790C12] text-white">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-stone-600">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
