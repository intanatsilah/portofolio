import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import CertificatesSection from './components/CertificatesSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import PortfolioPdfModal from './components/PortfolioPdfModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Exclusively set light mode for vintage scrapbook aesthetic
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.removeItem('portfolio-theme');
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-[#241e1e] bg-scrapbook">
      {/* Floating Centered Navbar with Red Shadow */}
      <Navbar
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onOpenCvModal={() => setCvModalOpen(true)}
          onOpenPortfolioModal={() => setPortfolioModalOpen(true)}
        />

        {/* Section 2: Tentang (About) */}
        <About />

        {/* Section 3: Riwayat & Karir (Experience & Education & Skills) */}
        <Experience />

        {/* Section 4: Portfolio (Projects, Web, Mobile, Etc.) */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 5: Sertifikat (Certificates & SK Terverifikasi) */}
        <CertificatesSection
          onSelectCertificate={(cert) => setSelectedProject(cert)}
        />

        {/* Section 6: Kontak (Contact) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenCvModal={() => setCvModalOpen(true)}
        onOpenPortfolioModal={() => setPortfolioModalOpen(true)}
      />

      {/* Interactive Modals */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <PortfolioPdfModal
        isOpen={portfolioModalOpen}
        onClose={() => setPortfolioModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
