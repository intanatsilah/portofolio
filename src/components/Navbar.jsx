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

      const sections = ['hero', 'about', 'experience', 'portfolio', 'certificates', 'contact'];
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
    { name: 'Sertifikat', href: '#certificates', id: 'certificates' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl transition-all duration-300">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 flex items-center justify-between border backdrop-blur-md bg-[#fffcf7]/95 border-[#790C12]/30 text-[#2a2222] nav-shadow-red"
        >
          {/* Logo with profile photo and vintage motif */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
          >
            {/* Foto Profil Bulat dengan Border Merah Khas Scrapbook */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#790C12] shadow-[0_2px_10px_rgba(121,12,18,0.35)] group-hover:scale-105 transition-transform shrink-0 bg-stone-100">
              <img
                src="/assets/navbar_profile.png"
                alt="Foto Profil Intan Atsilah"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-serif font-black text-xs sm:text-sm tracking-wide leading-none text-[#241e1e] group-hover:text-[#790C12] transition-colors">
                INTAN ATSILAH
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider font-mono text-[#790C12] font-semibold">
                PORTFOLIO • 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
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
                  className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all ${
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
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white shadow-[0_4px_14px_rgba(121,12,18,0.35)] transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh CV</span>
              <span className="sm:hidden">CV</span>
            </button>

            {/* Mobile/Tablet Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-1.5 sm:p-2 rounded-full border border-[#790C12]/30 bg-[#f2eae0] text-[#2a2222] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile & Tablet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-50 p-5 rounded-2xl border backdrop-blur-xl lg:hidden bg-[#fcf7ee]/98 border-[#790C12]/30 text-[#2a2222] nav-shadow-red shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
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
                      ? 'bg-[#790C12] text-white font-semibold shadow-sm'
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
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#790C12] text-white text-sm font-semibold shadow-[0_4px_12px_rgba(121,12,18,0.35)] cursor-pointer"
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
