import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileDown, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function PortfolioPdfModal({ isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [viewMode, setViewMode] = useState('image'); // 'image' | 'pdf'

  if (!isOpen) return null;

  const slides = [
    { page: 1, title: "Cover Portofolio", subtitle: "INTAN ATSILAH BALQIS RANA • UI/UX | ADMINISTRASI", tag: "Cover" },
    { page: 2, title: "About Me & Education", subtitle: "Fresh Graduate S1 Informatika UMM (IPK 3.88/4.00)", tag: "Profile" },
    { page: 3, title: "Skills & Tools", subtitle: "Kompetensi Desain, Administrasi & Bahasa", tag: "Competency" },
    { page: 4, title: "Organization: HIMIF UMM", subtitle: "Sekretaris & Anggota Bidang Akademik HIMIF", tag: "Organization" },
    { page: 5, title: "Organization: DevCom UMM", subtitle: "Coordinator Social Media (Insights 1,300+)", tag: "Leadership" },
    { page: 6, title: "Work & Internship: Biro Kemahasiswaan & LSP", subtitle: "Part-Time Staff Tata Usaha Kemahasiswaan & LSP", tag: "Administration" },
    { page: 7, title: "Internship: Web Ruang Rapat DISKOMINFO", subtitle: "Sistem Peminjaman Ruang Rapat 5 Divisi", tag: "Web Project" },
    { page: 8, title: "Project: Prototype Mobile Bank Sampah", subtitle: "Dusun Sekar Putih Batu • Usability Score 86/100", tag: "Mobile UI/UX" },
    { page: 9, title: "Project: Prototype Mobile SmartTime", subtitle: "Academic & Task Reminder Assistant", tag: "Mobile UI/UX" },
    { page: 10, title: "Contact & Collaboration: Work With Me", subtitle: "Malang, Indonesia • WhatsApp, Email & LinkedIn", tag: "Closing" }
  ];

  const current = slides[currentSlide - 1];
  const slideImage = `/assets/portfolio_slide_${currentSlide}.png`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-5xl h-[92vh] rounded-2xl border shadow-2xl flex flex-col z-10 overflow-hidden bg-[#faf6f0] border-[#d8c8b8] text-[#241e1e]"
        >
          {/* Header */}
          <div className="px-4 sm:px-6 py-3.5 border-b border-[#790C12]/20 flex items-center justify-between bg-[#790C12]/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#790C12] text-white flex items-center justify-center font-serif font-black text-sm shadow-[0_2px_10px_rgba(121,12,18,0.35)]">
                SLIDE
              </div>
              <div>
                <h3 className="font-serif font-black text-sm sm:text-base leading-tight text-[#241e1e]">
                  Portofolio Slide Asli — 10 Halaman
                </h3>
                <span className="font-mono text-[11px] text-[#790C12] font-semibold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Dokumen Scrapbook Asli Intan Atsilah
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.portfolioPdf}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#790C12]/40 text-[#790C12] hover:bg-[#790C12] hover:text-white transition-all bg-white"
                title="Buka file PDF di tab baru browser"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Tab Baru</span>
              </a>

              <a
                href={personalInfo.portfolioPdf}
                download="Portfolio_Intan_Atsilah_Balqis_Rana.pdf"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white flex items-center gap-1.5 shadow-md transition-transform hover:scale-102"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Unduh File Asli (9.9 MB)</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors ml-1"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Navigation & Controls Bar */}
          <div className="px-4 sm:px-6 py-2.5 border-b border-stone-200 flex flex-wrap items-center justify-between text-xs font-mono gap-2 shrink-0 bg-[#f4ece0]">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-stone-200 shadow-xs">
              <button
                onClick={() => setViewMode('image')}
                className={`px-3 py-1 rounded-md transition-all font-semibold ${
                  viewMode === 'image'
                    ? 'bg-[#790C12] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Slide HD Asli
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-md transition-all font-semibold ${
                  viewMode === 'pdf'
                    ? 'bg-[#790C12] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                PDF Reader Embed
              </button>
            </div>

            {/* Slide Selector Buttons */}
            {viewMode === 'image' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => Math.max(1, prev - 1))}
                  disabled={currentSlide === 1}
                  className="p-1.5 rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-[#790C12] hover:text-white disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1 overflow-x-auto max-w-[280px] sm:max-w-none">
                  {slides.map((s) => (
                    <button
                      key={s.page}
                      onClick={() => setCurrentSlide(s.page)}
                      className={`w-7 h-7 rounded-lg font-bold flex items-center justify-center transition-all ${
                        currentSlide === s.page
                          ? 'bg-[#790C12] text-white scale-105 shadow-sm'
                          : 'border border-stone-300 text-stone-700 bg-white hover:bg-stone-100'
                      }`}
                    >
                      {s.page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => Math.min(10, prev + 1))}
                  disabled={currentSlide === 10}
                  className="p-1.5 rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-[#790C12] hover:text-white disabled:opacity-30 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <span className="text-stone-600 font-bold hidden sm:inline pl-2 border-l border-stone-300">
                  {currentSlide} / 10
                </span>
              </div>
            )}
          </div>

          {/* Slide Display Area */}
          <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#ece4d6] flex justify-center items-center">
            {viewMode === 'image' ? (
              <div className="max-w-4xl w-full flex flex-col items-center gap-4">
                <div className="w-full flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-[#790C12] text-white font-bold uppercase shadow-xs">
                    {current.tag}
                  </span>
                  <span className="text-stone-700 font-semibold truncate ml-2">
                    {current.title} — {current.subtitle}
                  </span>
                </div>

                {/* The Exact Original Slide Rendering */}
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-stone-300 bg-white">
                  <img
                    src={slideImage}
                    alt={`Slide ${currentSlide} - ${current.title}`}
                    className="w-full h-auto object-contain block select-none"
                  />
                </div>
              </div>
            ) : (
              /* PDF Embed Reader */
              <div className="w-full h-full rounded-xl overflow-hidden border border-stone-300 bg-white shadow-inner">
                <iframe
                  src={`${personalInfo.portfolioPdf}#toolbar=1&navpanes=0`}
                  title="Portofolio Asli PDF"
                  className="w-full h-full border-none"
                />
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 sm:px-6 py-3 border-t border-[#790C12]/20 flex items-center justify-between text-xs bg-[#f4ece0] shrink-0">
            <span className="font-mono text-stone-600 truncate">
              File: <strong className="text-stone-900">Portfolio_Intan_Atsilah_Balqis_Rana.pdf</strong> (9.9 MB)
            </span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.portfolioPdf}
                download="Portfolio_Intan_Atsilah_Balqis_Rana.pdf"
                className="px-4 py-1.5 rounded-lg bg-[#790C12] hover:bg-[#921118] text-white font-semibold flex items-center gap-1.5 shadow-md"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Unduh File Asli</span>
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
