import React from 'react';
import { ArrowUp, Heart, Sparkles, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenCvModal, onOpenPortfolioModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t transition-colors pt-12 pb-8 overflow-hidden bg-[#f4efe6] border-[#d8c8b8] text-stone-700">
      {/* Background Decorative Washi Tape */}
      <div className="washi-tape-red absolute top-0 left-1/2 -translate-x-1/2 w-48 h-2.5 opacity-90" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-dashed border-[#790C12]/20">
          
          {/* Left: Vintage Brand & Signature */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#790C12] text-white flex items-center justify-center font-serif font-bold text-xs shadow-md">
                IA
              </div>
              <span className="font-serif font-bold text-lg tracking-wider text-[#790C12]">
                INTAN ATSILAH BALQIS RANA
              </span>
            </div>

            <p className="font-handwriting text-lg text-[#790C12] font-semibold">
              UI/UX Junior Designer &amp; Administration Enthusiast
            </p>

            <p className="text-xs font-mono text-stone-500 mt-1">
              Universitas Muhammadiyah Malang • S1 Informatika (2022 - 2026)
            </p>
          </div>

          {/* Middle: Quick Document Actions */}
          <div className="md:col-span-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-[#790C12]/40 text-[#790C12] hover:bg-[#790C12] hover:text-white transition-all flex items-center gap-1.5 bg-white shadow-xs"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Lihat CV</span>
            </button>

            <button
              onClick={onOpenPortfolioModal}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-[#790C12]/40 text-[#790C12] hover:bg-[#790C12] hover:text-white transition-all flex items-center gap-1.5 bg-white shadow-xs"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Portofolio PDF</span>
            </button>
          </div>

          {/* Right: Back to Top */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-[#790C12]/40 bg-white hover:bg-[#790C12] text-[#790C12] hover:text-white transition-all shadow-sm group"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Vintage Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-stone-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Intan Atsilah Balqis Rana. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with Scrapbook Vintage Aesthetic &amp;</span>
            <span className="text-[#790C12] font-bold">#790C12 Red</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
