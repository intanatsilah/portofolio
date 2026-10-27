import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCvModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero', id: 'hero' },
    { name: 'Tentang', href: '#about', id: 'about' },
    { name: 'Karir & Riwayat', href: '#experience', id: 'experience' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl transition-all duration-300">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 flex items-center justify-between border backdrop-blur-md bg-[#fffcf7]/95 border-[#790C12]/30 text-[#2a2222] nav-shadow-red"
        >
          {/* Logo with vintage stamp motif */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-[#790C12] text-white flex items-center justify-center font-serif font-bold text-sm shadow-[0_2px_10px_rgba(121,12,18,0.4)] group-hover:scale-105 transition-transform">
              IA
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-sm tracking-wider leading-none">
                INTAN ATSILAH
              </span>
              <span className="text-[10px] tracking-widest font-mono text-[#790C12] font-semibold">
                SCRAPBOOK • 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'text-white'
                      : 'text-[#5d4f4f] hover:text-[#790C12] hover:bg-[#790C12]/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#790C12] rounded-full -z-10 shadow-[0_2px_12px_rgba(121,12,18,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action: Quick CV Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white shadow-[0_4px_14px_rgba(121,12,18,0.35)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Unduh CV</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-full border border-[#790C12]/30 bg-[#f2eae0] text-[#2a2222] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 p-5 rounded-2xl border backdrop-blur-xl md:hidden bg-[#fcf7ee]/98 border-[#790C12]/30 text-[#2a2222] nav-shadow-red"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-[#790C12] text-white font-semibold'
                      : 'text-[#443838] hover:bg-[#790C12]/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-dashed border-[#790C12]/20 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#790C12] text-white text-sm font-semibold shadow-[0_4px_12px_rgba(121,12,18,0.35)]"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Lihat &amp; Unduh CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
