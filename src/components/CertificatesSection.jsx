import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Calendar, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function CertificatesSection({ onSelectCertificate }) {
  // Ambil data resmi sertifikat dari certificatesData
  const certificates = certificatesData;

  return (
    <section id="certificates" className="py-20 md:py-28 relative overflow-hidden bg-[#faf6f0]/60">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-[130px] opacity-10"
          style={{ background: '#790C12' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-handwriting text-2xl sm:text-3xl text-[#790C12] block mb-1">
              verified credentials &amp; achievements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight">
              <span className="chrome-heading">
                Sertifikat &amp;
              </span>{' '}
              <span className="text-[#790C12]">Penghargaan</span>
            </h2>
            <div className="w-24 h-1 bg-[#790C12] mx-auto mt-3 rounded-full relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#790C12]" />
            </div>
            <p className="mt-4 max-w-xl mx-auto text-sm text-stone-600">
              Dokumentasi legalitas, sertifikasi profesi kompetensi, serta apresiasi fungsionaris organisasi akademik resmi.
            </p>
          </motion.div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-2xl border relative flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 bg-white border-[#e5dcd1] hover:border-[#790C12] shadow-sm hover:shadow-[0_12px_30px_rgba(121,12,18,0.12)]"
            >
              {/* Washi Tape */}
              <div className="washi-tape-red absolute top-0 right-6 w-16 h-3 -rotate-2 z-10 opacity-80" />

              <div>
                {/* Certificate Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 border-b border-dashed border-[#790C12]/20 flex items-center justify-center p-2.5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-2xs"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#790C12] text-white font-mono text-[9px] font-bold shadow-xs flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Terverifikasi</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#790C12] font-semibold uppercase">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.year}</span>
                    </div>

                    {/* Stamped Certificate ID Badge */}
                    {cert.certificateId && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#faf6f0] border border-[#790C12]/20 text-[#790C12] shadow-2xs">
                        ID: {cert.certificateId}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif font-black text-base tracking-tight text-[#241e1e] group-hover:text-[#790C12] transition-colors line-clamp-2 mb-1.5 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-semibold text-stone-700 mb-2 truncate">
                    {cert.client}
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 flex items-center gap-2">
                {cert.projectUrl && (
                  <a
                    href={cert.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-[#790C12] hover:bg-[#921118] text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    title={`Buka ${cert.title}`}
                  >
                    <span>Buka File</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  onClick={() => onSelectCertificate(cert)}
                  className="py-2 px-3 rounded-xl text-xs font-semibold border border-[#790C12]/40 text-[#790C12] hover:bg-[#790C12]/10 transition-all flex items-center justify-center gap-1 bg-white"
                  title="Lihat Detail"
                >
                  <Eye className="w-3 h-3" />
                  <span>Detail</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
