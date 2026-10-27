import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Layers, ExternalLink, Calendar, User, Sparkles, Paperclip } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col z-10 overflow-hidden bg-[#faf6f0] border-[#d8c8b8] text-[#241e1e]"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#790C12]/20 flex items-center justify-between bg-[#790C12]/10">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#790C12] text-white shadow-xs">
                {project.category}
              </span>
              <div>
                <h3 className="font-serif font-black text-base sm:text-lg text-[#241e1e]">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-[#790C12] font-semibold">
                  {project.client} • {project.year}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Tagline */}
            <div className="font-handwriting text-2xl text-[#790C12] font-bold">
              "{project.tagline}"
            </div>

            {/* Images Showcase */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#790C12]">
                  Visual Utama Proyek
                </span>
              </div>

              {/* Tampilkan CUKUP IMAGE UTAMA SAJA, disesuaikan dengan kontainer */}
              <div className="p-3 sm:p-4 rounded-2xl border bg-white border-stone-200 shadow-xs flex flex-col items-center">
                <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-stone-50 border border-stone-200 relative group flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#790C12] text-white font-mono text-[10px] font-bold shadow-sm">
                    Image Utama
                  </div>
                </div>
                <div className="text-xs font-mono text-stone-600 text-center mt-2.5 font-medium">
                  {project.title}
                </div>
              </div>
            </div>

            {/* Narrative Overview */}
            <div>
              <h4 className="font-serif font-bold text-base text-[#790C12] uppercase tracking-wider mb-2">
                Deskripsi &amp; Konteks Proyek
              </h4>
              <p className="text-sm leading-relaxed text-stone-700">
                {project.description}
              </p>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div>
                <h4 className="font-serif font-bold text-base text-[#790C12] uppercase tracking-wider mb-3">
                  Indikator Kunci &amp; Hasil
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border text-center bg-white border-stone-200 shadow-xs"
                    >
                      <div className="text-[10px] font-mono text-stone-500 uppercase">
                        {m.label}
                      </div>
                      <div className="text-sm font-bold text-[#790C12] mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.features && (
              <div>
                <h4 className="font-serif font-bold text-base text-[#790C12] uppercase tracking-wider mb-2">
                  Fitur Utama &amp; Solusi
                </h4>
                <div className="space-y-2">
                  {project.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#790C12] shrink-0 mt-0.5" />
                      <span className="text-stone-700">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Used */}
            <div>
              <h4 className="font-serif font-bold text-base text-[#790C12] uppercase tracking-wider mb-2">
                Tools &amp; Teknologi
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#790C12]/10 border border-[#790C12]/30 text-[#790C12]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 border-t border-[#790C12]/20 flex items-center justify-between bg-[#f4ece0]">
            {project.projectUrl ? (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white transition-all shadow-md flex items-center gap-1.5"
              >
                <span>{project.actionLabel || 'Buka Link Proyek Asli'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : <div />}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold border border-stone-300 text-stone-700 bg-white hover:bg-stone-100 transition-all shadow-xs"
            >
              Tutup Detail
            </button>
          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
