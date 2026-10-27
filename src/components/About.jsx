import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle, 
  Award, 
  MapPin, 
  Calendar, 
  FileCheck2, 
  Sparkles,
  Paperclip,
  Bookmark
} from 'lucide-react';
import { personalInfo, educationData, statsData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Vintage Background Accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-[110px] opacity-10"
          style={{ background: '#790C12' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: Scrapbook handwriting + title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            {/* Scrapbook script label */}
            <span className="font-handwriting text-2xl sm:text-3xl text-[#790C12] block mb-1">
              get to know me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight">
              <span className="chrome-heading">
                Tentang
              </span>{' '}
              <span className="text-[#790C12]">Saya</span>
            </h2>
            {/* Vintage underline decorative stroke */}
            <div className="w-24 h-1 bg-[#790C12] mx-auto mt-3 rounded-full relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#790C12]" />
            </div>
          </motion.div>
        </div>

        {/* Top Grid: Photo Collage & Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Photos Collage: Formal + Graduation with Scrapbook Styling */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Photo 1: Formal Portrait in Blazer */}
              <motion.div
                initial={{ opacity: 0, rotate: -4 }}
                whileInView={{ opacity: 1, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-3 pb-5 rounded-xl border relative shadow-[0_10px_25px_rgba(121,12,18,0.08)] z-20 bg-white border-stone-200"
              >
                {/* Washi Tape */}
                <div className="washi-tape-red absolute -top-3 left-8 w-20 h-5 -rotate-6 rounded-xs" />
                <div className="overflow-hidden rounded-lg aspect-[3/4] bg-stone-100 border border-stone-200">
                  <img
                    src={personalInfo.profileImage}
                    alt="Intan Formal Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-handwriting text-lg text-[#790C12] font-bold">
                    Intan Atsilah Balqis Rana
                  </span>
                  <span className="font-mono text-[10px] text-stone-500 font-semibold">
                    S1 Informatika
                  </span>
                </div>
              </motion.div>

              {/* Photo 2: Graduation Candid with Bouquet & Medal */}
              <motion.div
                initial={{ opacity: 0, rotate: 6, x: 20 }}
                whileInView={{ opacity: 1, rotate: 5, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-6 -right-6 sm:-right-8 w-44 sm:w-52 p-3 pb-4 rounded-xl border shadow-xl z-30 bg-[#faf6f0] border-stone-300"
              >
                {/* Paperclip */}
                <div className="absolute -top-3 right-4 rotate-12">
                  <Paperclip className="w-5 h-5 text-stone-400" />
                </div>
                <div className="overflow-hidden rounded-lg aspect-square border border-stone-200">
                  <img
                    src={personalInfo.candidImage}
                    alt="Intan Graduation Candid"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="font-handwriting text-sm text-[#790C12] font-bold block">
                    Universitas Muhammadiyah Malang
                  </span>
                  <span className="font-mono text-[9px] text-stone-500">
                    2022 - 2026
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Bio Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl border relative backdrop-blur-sm bg-[#fffdfa] border-[#e2d5c5] shadow-[0_10px_25px_rgba(121,12,18,0.06)]"
            >
              {/* Little Stamp Badge */}
              <div className="absolute top-4 right-4 sm:right-6 px-2.5 py-1 rounded border border-dashed border-[#790C12] text-[#790C12] font-mono text-[10px] uppercase font-bold rotate-2 bg-[#790C12]/5">
                RINGKASAN PROFIL
              </div>

              <div className="flex items-center gap-2 text-[#790C12] font-mono text-xs uppercase tracking-wider font-bold mb-3">
                <Bookmark className="w-4 h-4" />
                <span>Ringkasan Profil</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold leading-snug mb-4 text-[#241e1e]">
                Know About Me!
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#4e4340]">
                <p>
                  Saya adalah lulusan baru (Fresh Graduate) program studi <strong>S1 Informatika Universitas Muhammadiyah Malang</strong> dengan ketertarikan di bidang <strong className="text-[#790C12]">UI/UX Design</strong> dan <strong className="text-[#790C12]">Administrasi</strong>.
                </p>
                <p>
                  Berpengalaman dalam merancang dan membangun website peminjaman ruang rapat 5 divisi <strong>DISKOMINFO Kabupaten Malang</strong> serta merancang prototype mobile <strong>Bank Sampah Dusun Sekar Putih Batu</strong> yang berhasil meraih skor Usability Testing <strong>86 / 100</strong>.
                </p>
                <p>
                  Di ranah administrasi, memiliki pengalaman di <strong>Biro Kemahasiswaan UMM</strong>, <strong>Lembaga Sertifikasi Profesi (LSP) UMM</strong> sebagai staff tata usaha, dan aktif didalam organisasi maupun komunitas.
                </p>
              </div>

              {/* Personal Details Tag Bar */}
              <div className="mt-6 pt-5 border-t border-dashed border-[#790C12]/20 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#433737]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#790C12]" />
                  <span>Domisili: Malang, Jawa Timur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#790C12]" />
                  <span>Status: Siap Bekerja (PartTime/Fulltime/Contract)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#790C12]" />
                  <span>Spesialisasi: UI/UX &amp; Administrasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#790C12]" />
                  <span>Bahasa: Indonesia (Fasih), English</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Middle Section: Riwayat Pendidikan Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-2xl border relative overflow-hidden mb-16 bg-[#faf6f0] border-[#d8c8b8] shadow-[0_6px_20px_rgba(121,12,18,0.06)]"
        >
          {/* Top Washi Tape Corner */}
          <div className="washi-tape-kraft absolute top-0 left-8 w-28 h-4 rotate-[-1deg]" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#790C12] text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#790C12]">
                  Riwayat Pendidikan Resmi
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-[#241e1e]">
                  {educationData.institution}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#790C12] text-white shadow-sm">
                IPK: {educationData.gpa}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono border border-[#790C12]/30 text-stone-700 bg-white">
                Periode: {educationData.period}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5">
              <p className="text-sm leading-relaxed text-stone-700">
                Menuntaskan studi di jenjang <strong>S1 Informatika</strong> dengan fokus mata kuliah pada interaksi manusia, desain antarmuka, rekayasa software, dan manajemen siklus hidup proyek teknologi.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="text-xs font-mono font-bold text-[#790C12] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Mata Kuliah Relevan:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {educationData.relevantCourses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium border transition-colors bg-white border-[#e0d3c5] text-stone-800 shadow-xs"
                  >
                    • {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section: STATISTIK PROJECT (Scrapbook Stamped Cards) */}
        <div>
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#790C12] font-bold">
              Key Metrics &amp; Proven Track Record
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black mt-1 text-[#241e1e]">
              Statistik &amp; Pencapaian Proyek
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-5 rounded-xl border relative flex flex-col justify-between text-center transition-all bg-white border-[#e2d5c5] hover:border-[#790C12] shadow-sm hover:shadow-md"
              >
                {/* Stamp Tag */}
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#790C12] font-bold mb-2">
                  {stat.badge}
                </div>

                {/* Big Metric Number */}
                <div className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#790C12] my-1">
                  {stat.value}
                  <span className="text-sm font-sans font-normal text-stone-500">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="font-bold text-xs sm:text-sm mt-1 mb-0.5 text-stone-800">
                  {stat.label}
                </div>

                {/* Subtext */}
                <div className="text-[11px] leading-tight text-stone-500">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
