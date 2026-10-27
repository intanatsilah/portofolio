import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  FileDown, 
  ExternalLink, 
  Sparkles, 
  Paperclip, 
  GraduationCap, 
  Award, 
  ArrowDown, 
  CheckCircle2,
  FolderOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import LinkedInIcon from './LinkedInIcon';

export default function Hero({ onOpenCvModal, onOpenPortfolioModal }) {
  // Typewriter effect logic
  const phrases = [
    'UI/UX Junior Designer',
    'Administration Enthusiast',
    'Fresh Graduate S1 Informatika UMM'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('cv'); // 'cv', 'linkedin', 'portfolio'

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2200; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 500; // Pause before typing next word
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentText = phrases[phraseIndex].substring(0, charIndex);

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#790C12', '#9c151c', '#f7d3a2', '#ffffff']
    });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Scrapbook Grid & Watermarks */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Soft Radial Ambient Glow in Red */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full blur-[130px] opacity-15"
          style={{ background: 'radial-gradient(circle, #790C12 0%, rgba(121,12,18,0) 70%)' }}
        />
        
        {/* Vintage Postal Watermark circle */}
        <div 
          className="absolute -top-12 -left-12 sm:top-20 sm:left-10 w-44 h-44 rounded-full border-2 border-dashed opacity-25 pointer-events-none flex items-center justify-center font-mono text-[10px] tracking-widest text-[#790C12] rotate-12"
          style={{ borderColor: '#790C12' }}
        >
          POSTAGE • MALANG 2026 • CERTIFIED
        </div>

        <div 
          className="absolute bottom-10 right-4 sm:right-16 w-36 h-36 rounded-full border border-[#790C12]/25 opacity-25 pointer-events-none flex items-center justify-center font-mono text-[9px] text-[#790C12] -rotate-12"
        >
          INFORMATIKA UMM • PORTFOLIO
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Scrapbook Header, Big Name, Typewriter, Tabs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Vintage Scrapbook Stamp Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#790C12]/40 bg-[#790C12]/10 mb-4 relative rotate-[-1deg]"
            >
              {/* Little washi tape effect on top */}
              <div className="absolute -top-2 left-4 w-8 h-3.5 bg-[#790C12]/50 opacity-80 -rotate-3" />
              <Sparkles className="w-3.5 h-3.5 text-[#790C12]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#790C12] font-bold">
                Official Scrapbook Edition • 2026
              </span>
            </motion.div>

            {/* Giant Big Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-[1.1] mb-2">
                <span className="chrome-heading">
                  INTAN ATSILAH
                </span>
                <br />
                <span className="text-[#790C12] drop-shadow-[0_2px_15px_rgba(121,12,18,0.25)]">
                  BALQIS RANA
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Dynamic Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-1 font-mono text-base sm:text-xl md:text-2xl min-h-[38px] mb-4"
            >
              <span className="text-neutral-700">
                I am an{' '}
              </span>
              <span className="font-bold text-[#790C12] border-b-2 border-[#790C12]/60 pb-0.5">
                {currentText}
              </span>
              <span className="inline-block w-2.5 h-5 bg-[#790C12] animate-pulse ml-0.5" />
            </motion.div>

            {/* Short Scrapbook Bio Note */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base leading-relaxed max-w-xl mb-6 font-sans text-[#5a4f4c]"
            >
              Fresh graduate <span className="font-semibold text-[#790C12]">S1 Informatika UMM (IPK 3.88)</span>. Berpengalaman merancang UI/UX website Diskominfo Kab. Malang, Bank Sampah Dusun Sekar Putih Batu, serta mengelola administrasi &amp; verifikasi ratusan dokumen sebagai Staff Tata Usaha.
            </motion.p>

            {/* QUICK PILL BADGES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              <span className="px-2.5 py-1 rounded text-xs font-mono border flex items-center gap-1.5 bg-[#f4ede1] border-[#790C12]/30 text-[#433737]">
                <GraduationCap className="w-3.5 h-3.5 text-[#790C12]" />
                IPK 3.88 / 4.00
              </span>
              <span className="px-2.5 py-1 rounded text-xs font-mono border flex items-center gap-1.5 bg-[#f4ede1] border-[#790C12]/30 text-[#433737]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#790C12]" />
                150+ Berkas Terverifikasi
              </span>
              <span className="px-2.5 py-1 rounded text-xs font-mono border flex items-center gap-1.5 bg-[#f4ede1] border-[#790C12]/30 text-[#433737]">
                <Award className="w-3.5 h-3.5 text-[#790C12]" />
                Usability Score 86
              </span>
            </motion.div>

            {/* REQUIRED TABS: Lihat & Unduh CV, LinkedIn, Portofolio PDF */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-lg"
            >
              {/* Tab Bar Container */}
              <div className="p-1.5 rounded-2xl border transition-all bg-[#fffcf7] border-[#790C12]/30 shadow-[0_6px_20px_rgba(121,12,18,0.12)]">
                <div className="grid grid-cols-3 gap-1">
                  
                  {/* TAB 1: CV */}
                  <button
                    onClick={() => setActiveTab('cv')}
                    className={`relative py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                      activeTab === 'cv'
                        ? 'bg-[#790C12] text-white shadow-[0_2px_12px_rgba(121,12,18,0.4)]'
                        : 'text-[#564949] hover:text-[#790C12] hover:bg-[#790C12]/5'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Lihat &amp; Unduh CV</span>
                  </button>

                  {/* TAB 2: LINKEDIN */}
                  <button
                    onClick={() => setActiveTab('linkedin')}
                    className={`relative py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                      activeTab === 'linkedin'
                        ? 'bg-[#790C12] text-white shadow-[0_2px_12px_rgba(121,12,18,0.4)]'
                        : 'text-[#564949] hover:text-[#790C12] hover:bg-[#790C12]/5'
                    }`}
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </button>

                  {/* TAB 3: PORTOFOLIO PDF */}
                  <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`relative py-2.5 px-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                      activeTab === 'portfolio'
                        ? 'bg-[#790C12] text-white shadow-[0_2px_12px_rgba(121,12,18,0.4)]'
                        : 'text-[#564949] hover:text-[#790C12] hover:bg-[#790C12]/5'
                    }`}
                  >
                    <FolderOpen className="w-4 h-4" />
                    <span>Portofolio PDF</span>
                  </button>
                </div>

                {/* Tab Content Panel */}
                <div className="mt-2 p-3.5 rounded-xl border border-dashed transition-all border-[#790C12]/20 bg-[#f9f4ec]/80">
                  {activeTab === 'cv' && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                      <div>
                        <div className="text-xs font-bold font-mono text-[#790C12] uppercase tracking-wider">
                          Curriculum Vitae (2 Halaman)
                        </div>
                        <p className="text-xs text-stone-700">
                          Resume lengkap pendidikan, pengalaman kerja UMM &amp; Diskominfo.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={onOpenCvModal}
                          className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#790C12] text-[#790C12] hover:bg-[#790C12] hover:text-white transition-all flex items-center justify-center gap-1"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Baca CV</span>
                        </button>
                        <a
                          href={personalInfo.cvPdf}
                          download="CV_Intan_Atsilah_Balqis_Rana.pdf"
                          onClick={triggerConfetti}
                          className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white transition-all flex items-center justify-center gap-1 shadow-[0_2px_8px_rgba(121,12,18,0.35)]"
                        >
                          <FileDown className="w-3.5 h-3.5" />
                          <span>Unduh PDF</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {activeTab === 'linkedin' && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                      <div>
                        <div className="text-xs font-bold font-mono text-[#790C12] uppercase tracking-wider">
                          Profil LinkedIn Profesional
                        </div>
                        <p className="text-xs text-stone-700">
                          Terhubung secara profesional dan lihat jejaring karir Intan.
                        </p>
                      </div>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#0077b5] hover:bg-[#005f93] text-white transition-all flex items-center justify-center gap-1.5 shadow-[0_2px_8px_rgba(0,119,181,0.25)]"
                      >
                        <LinkedInIcon className="w-3.5 h-3.5" />
                        <span>Buka LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {activeTab === 'portfolio' && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                      <div>
                        <div className="text-xs font-bold font-mono text-[#790C12] uppercase tracking-wider">
                          Dokumen Portofolio PDF (10 Slide)
                        </div>
                        <p className="text-xs text-stone-700">
                          Kompilasi visual proyek UI/UX, Diskominfo, dan Bank Sampah.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={onOpenPortfolioModal}
                          className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#790C12] text-[#790C12] hover:bg-[#790C12] hover:text-white transition-all flex items-center justify-center gap-1"
                        >
                          <FolderOpen className="w-3.5 h-3.5" />
                          <span>Lihat Slide</span>
                        </button>
                        <a
                          href={personalInfo.portfolioPdf}
                          download="Portfolio_Intan_Atsilah_Balqis_Rana.pdf"
                          onClick={triggerConfetti}
                          className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white transition-all flex items-center justify-center gap-1 shadow-[0_2px_8px_rgba(121,12,18,0.35)]"
                        >
                          <FileDown className="w-3.5 h-3.5" />
                          <span>Unduh PDF</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Scrapbook Polaroid & Paper Collage */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -2, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-xs sm:max-w-sm w-full"
            >
              {/* Back Card: Candid graduation photo offset */}
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.02 }}
                className="absolute -top-4 -right-4 sm:-right-6 w-36 sm:w-44 p-2.5 rounded-lg shadow-xl border rotate-6 z-10 transition-all bg-white border-stone-200"
              >
                {/* Washi tape over graduation photo */}
                <div className="washi-tape-kraft absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 rotate-2 shadow-sm rounded-xs" />
                <img
                  src={personalInfo.gradImage}
                  alt="Intan Graduation Candid"
                  className="w-full aspect-[4/5] object-cover rounded filter saturate-105"
                />
                <div className="mt-1.5 text-center font-handwriting text-xs text-[#790C12] font-semibold">
                  Graduation UMM ✨
                </div>
              </motion.div>

              {/* Main Scrapbook Polaroid Card: Official Portrait */}
              <div className="p-4 pb-6 rounded-xl border relative shadow-[0_15px_35px_rgba(121,12,18,0.08)] transition-all polaroid bg-white border-[#d8c8b8]">
                {/* Top Center Washi Tape in Signature Red */}
                <div className="washi-tape-red absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 -rotate-2 rounded-xs flex items-center justify-center">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white font-bold opacity-95">
                    INTAN ATSILAH • 2026
                  </span>
                </div>

                {/* Metal Paperclip Graphic on Corner */}
                <div className="absolute top-2 left-3 text-stone-400 rotate-[-25deg] drop-shadow">
                  <Paperclip className="w-5 h-5 text-stone-400" />
                </div>

                {/* Main Photo */}
                <div className="mt-3 overflow-hidden rounded-lg aspect-[3/4] bg-stone-100 border border-stone-200">
                  <img
                    src={personalInfo.profileImage}
                    alt="Intan Atsilah Balqis Rana"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Polaroid Bottom Note */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-handwriting text-xl sm:text-2xl text-[#790C12] font-bold">
                      Hai, Intan disini! 👋
                    </h3>
                    <p className="text-[11px] font-mono tracking-wide text-stone-600">
                      UI/UX • Administrasi • Dev
                    </p>
                  </div>

                  {/* Vintage Postal Stamp Seal */}
                  <div className="w-11 h-11 rounded-full border-2 border-dashed border-[#790C12] text-[#790C12] flex flex-col items-center justify-center font-mono text-[7px] font-black rotate-12">
                    <span>SEALED</span>
                    <span className="text-[9px] font-bold">★ 2026 ★</span>
                  </div>
                </div>
              </div>

              {/* Little Sticky Note Badge pinned at bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 px-3 py-2 rounded-lg border shadow-lg rotate-[-6deg] z-20 bg-[#790C12] text-white border-[#58080c]"
              >
                <div className="font-handwriting text-base font-bold leading-none">
                  Available for Work!
                </div>
                <div className="font-mono text-[9px] opacity-90 mt-0.5">
                  Malang &amp; Remote
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-xs font-mono tracking-widest text-stone-500 hover:text-[#790C12] transition-colors"
          >
            <span>SCROLL DOWN</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-4 h-4 text-[#790C12]" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
