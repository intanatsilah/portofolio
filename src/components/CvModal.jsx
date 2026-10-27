import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileDown, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [viewMode, setViewMode] = useState('image'); // 'image' | 'pdf'

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 20, 180));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 20, 70));
  const handleResetZoom = () => setZoomLevel(100);

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

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl h-[92vh] rounded-2xl border shadow-2xl flex flex-col z-10 overflow-hidden bg-[#faf6f0] border-[#d8c8b8] text-[#241e1e]"
        >
          {/* Header Bar */}
          <div className="px-4 sm:px-6 py-3.5 border-b border-[#790C12]/20 flex items-center justify-between bg-[#790C12]/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#790C12] text-white flex items-center justify-center font-serif font-black text-sm shadow-[0_2px_10px_rgba(121,12,18,0.35)]">
                CV
              </div>
              <div>
                <h3 className="font-serif font-black text-sm sm:text-base leading-tight text-[#241e1e]">
                  CV Lengkap — Intan Atsilah Balqis Rana
                </h3>
                <span className="font-mono text-[11px] text-[#790C12] font-semibold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Menampilkan Seluruh Dokumen Asli (Halaman 1 &amp; 2)
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.cvPdf}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#790C12]/40 text-[#790C12] hover:bg-[#790C12] hover:text-white transition-all bg-white"
                title="Buka file PDF di tab baru browser"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Tab Baru</span>
              </a>

              <a
                href={personalInfo.cvPdf}
                download="CV_Intan_Atsilah_Balqis_Rana.pdf"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white flex items-center gap-1.5 shadow-md transition-transform hover:scale-102"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Unduh File Asli</span>
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

          {/* Document Toolbar: View Mode & Zoom (Tanpa Tab Halaman) */}
          <div className="px-4 sm:px-6 py-2.5 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono shrink-0 bg-[#f4ece0]">
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
                Dokumen Asli (Crisp HD)
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

            {/* Document Info & Zoom Controls */}
            {viewMode === 'image' && (
              <div className="flex items-center gap-3">
                <span className="text-stone-600 font-semibold hidden sm:inline">
                  Scroll ke bawah untuk membaca seluruh halaman
                </span>

                {/* Zoom Controls */}
                <div className="flex items-center gap-1 pl-2 sm:border-l border-stone-300">
                  <button
                    onClick={handleZoomOut}
                    className="p-1.5 rounded hover:bg-stone-200 text-stone-700"
                    title="Perkecil (Zoom Out)"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-[11px] text-stone-700 font-bold">
                    {zoomLevel}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="p-1.5 rounded hover:bg-stone-200 text-stone-700"
                    title="Perbesar (Zoom In)"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-1.5 rounded hover:bg-stone-200 text-stone-700"
                    title="Reset Ukuran"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Document Content View Area: LANGSUNG SELURUH HALAMAN */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-[#ece4d6] flex justify-center items-start">
            {viewMode === 'image' ? (
              <div 
                className="transition-all duration-200 flex flex-col items-center gap-8 max-w-full pb-8"
                style={{ width: `${zoomLevel}%` }}
              >
                {/* Halaman 1 */}
                <div className="flex flex-col items-center w-full max-w-3xl">
                  <div className="w-full flex items-center justify-between text-xs font-mono mb-2 px-1 text-stone-600 font-semibold">
                    <span className="font-bold text-[#790C12] uppercase tracking-wider">
                      ● HALAMAN 1 DARI 2
                    </span>
                    <span>Profil, Pendidikan &amp; Pengalaman Magang/Kerja</span>
                  </div>
                  <div className="relative shadow-2xl rounded-lg overflow-hidden border border-stone-300 bg-white w-full">
                    <img
                      src={personalInfo.cvPages[0]}
                      alt="CV Intan Atsilah Balqis Rana - Halaman 1 Asli"
                      className="w-full h-auto block select-none"
                    />
                  </div>
                </div>

                {/* Separator / Divider Antar Halaman */}
                <div className="w-full max-w-3xl flex items-center justify-center gap-3 my-1">
                  <div className="flex-1 h-px bg-stone-400 border-t border-dashed border-stone-400" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#790C12] font-semibold bg-white px-3.5 py-1 rounded-full border border-[#790C12]/30 shadow-xs">
                    Lanjut ke Halaman 2
                  </span>
                  <div className="flex-1 h-px bg-stone-400 border-t border-dashed border-stone-400" />
                </div>

                {/* Halaman 2 */}
                <div className="flex flex-col items-center w-full max-w-3xl">
                  <div className="w-full flex items-center justify-between text-xs font-mono mb-2 px-1 text-stone-600 font-semibold">
                    <span className="font-bold text-[#790C12] uppercase tracking-wider">
                      ● HALAMAN 2 DARI 2
                    </span>
                    <span>Organisasi, Kemampuan Teknikal &amp; Personal</span>
                  </div>
                  <div className="relative shadow-2xl rounded-lg overflow-hidden border border-stone-300 bg-white w-full">
                    <img
                      src={personalInfo.cvPages[1]}
                      alt="CV Intan Atsilah Balqis Rana - Halaman 2 Asli"
                      className="w-full h-auto block select-none"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Embedded PDF Object View */
              <div className="w-full h-full rounded-xl overflow-hidden border border-stone-300 bg-white shadow-inner">
                <iframe
                  src={`${personalInfo.cvPdf}#toolbar=1&navpanes=0`}
                  title="CV Intan Atsilah Balqis Rana PDF"
                  className="w-full h-full border-none"
                />
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 sm:px-6 py-3 border-t border-[#790C12]/20 flex items-center justify-between text-xs bg-[#f4ece0] shrink-0">
            <span className="font-mono text-stone-600 truncate">
              Dokumen: <strong className="text-stone-900">CV_Intan_Atsilah_Balqis_Rana.pdf</strong> (184 KB • Lengkap 2 Halaman)
            </span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.cvPdf}
                download="CV_Intan_Atsilah_Balqis_Rana.pdf"
                className="px-4 py-1.5 rounded-lg bg-[#790C12] hover:bg-[#921118] text-white font-semibold transition-all shadow-md flex items-center gap-1.5"
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
