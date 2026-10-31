import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileDown, 
  ExternalLink,
  FolderOpen
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function PortfolioPdfModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
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
                PDF
              </div>
              <div>
                <h3 className="font-serif font-black text-sm sm:text-base leading-tight text-[#241e1e]">
                  Portofolio Lengkap — Intan Atsilah Balqis Rana
                </h3>
                <span className="font-mono text-[11px] text-[#790C12] font-semibold flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  PDF Reader Embed Asli (Seluruh 10 Slide)
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
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors ml-1 cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded PDF Reader Langsung tanpa per slide */}
          <div className="flex-1 w-full h-full bg-[#323639] relative overflow-hidden">
            <iframe
              src={`${personalInfo.portfolioPdf}#toolbar=1&navpanes=0`}
              title="Portofolio Asli PDF Embed Reader"
              className="w-full h-full border-none"
            />
          </div>

          {/* Footer Bar */}
          <div className="px-4 sm:px-6 py-3 border-t border-[#790C12]/20 flex items-center justify-between text-xs bg-[#f4ece0] shrink-0">
            <span className="font-mono text-stone-600 truncate">
              File: <strong className="text-stone-900">Portfolio_Intan_Atsilah_Balqis_Rana.pdf</strong> (9.9 MB • 10 Halaman)
            </span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.portfolioPdf}
                download="Portfolio_Intan_Atsilah_Balqis_Rana.pdf"
                className="px-4 py-1.5 rounded-lg bg-[#790C12] hover:bg-[#921118] text-white font-semibold flex items-center gap-1.5 shadow-md"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Unduh File</span>
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
