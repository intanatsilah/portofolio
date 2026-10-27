import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  Sparkles,
  Paperclip,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import LinkedInIcon from './LinkedInIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate scrapbook letter dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#790C12', '#9c151c', '#f7d3a2', '#ffffff']
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[140px] opacity-10"
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
              let's collaborate
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight">
              <span className="chrome-heading">
                Hubungi
              </span>{' '}
              <span className="text-[#790C12]">Saya</span>
            </h2>
            <div className="w-24 h-1 bg-[#790C12] mx-auto mt-3 rounded-full relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#790C12]" />
            </div>
            <p className="mt-4 max-w-lg mx-auto text-sm text-stone-600">
              Terbuka untuk peluang karir fulltime, kontrak, proyek UI/UX Design, maupun peran Administrasi &amp; Tata Usaha.
            </p>
          </motion.div>
        </div>

        {/* Vintage Postcard Layout: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Postcard Postal Info & Direct Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border relative h-full flex flex-col justify-between bg-[#fffdf9] border-[#e2d5c5] shadow-md"
            >
              {/* Washi Tape */}
              <div className="washi-tape-red absolute -top-3 left-10 w-24 h-5 -rotate-2 rounded-xs" />

              <div>
                {/* Stamp & Airmail motif header */}
                <div className="flex items-center justify-between pb-4 border-b border-dashed border-[#790C12]/30 mb-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#790C12] font-bold block">
                      AIR MAIL • POSTAL
                    </span>
                    <span className="font-serif font-bold text-lg text-[#241e1e]">
                      Kartu Kontak Intan
                    </span>
                  </div>

                  {/* Stamp Graphic */}
                  <div className="w-12 h-14 border-2 border-dashed border-[#790C12] rounded p-1 flex flex-col items-center justify-center font-mono text-[8px] text-[#790C12] rotate-3 bg-[#790C12]/5">
                    <span className="font-bold">POST</span>
                    <span className="text-xs">✉</span>
                    <span>2026</span>
                  </div>
                </div>

                {/* Contact Channels */}
                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border flex items-center gap-3.5 transition-all group bg-[#faf6f0] border-stone-200 hover:border-[#790C12] hover:bg-[#f5ede0]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono text-stone-500 uppercase font-semibold">
                        WhatsApp / Kontak Cepat
                      </div>
                      <div className="font-mono font-bold text-sm truncate text-stone-900 group-hover:text-[#790C12] transition-colors">
                        {personalInfo.phone}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#790C12]" />
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3.5 rounded-xl border flex items-center gap-3.5 transition-all group bg-[#faf6f0] border-stone-200 hover:border-[#790C12] hover:bg-[#f5ede0]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#790C12]/15 text-[#790C12] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono text-stone-500 uppercase font-semibold">
                        Surel / Email Resmi
                      </div>
                      <div className="font-mono font-bold text-sm truncate text-stone-900 group-hover:text-[#790C12] transition-colors">
                        {personalInfo.email}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#790C12]" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl border flex items-center gap-3.5 transition-all group bg-[#faf6f0] border-stone-200 hover:border-[#790C12] hover:bg-[#f5ede0]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0077b5]/15 text-[#0077b5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono text-stone-500 uppercase font-semibold">
                        LinkedIn Profile
                      </div>
                      <div className="font-bold text-sm truncate text-stone-900 group-hover:text-[#0077b5] transition-colors">
                        Intan Atsilah Balqis Rana
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#0077b5]" />
                  </a>

                  {/* Location */}
                  <div className="p-3.5 rounded-xl border flex items-center gap-3.5 bg-[#faf6f0]/80 border-stone-200">
                    <div className="w-10 h-10 rounded-lg bg-[#790C12]/10 text-[#790C12] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-stone-500 uppercase font-semibold">
                        Lokasi &amp; Domisili
                      </div>
                      <div className="font-bold text-sm text-stone-900">
                        {personalInfo.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrapbook Handwriting Note */}
              <div className="mt-8 pt-4 border-t border-dashed border-[#790C12]/20 text-center">
                <span className="font-handwriting text-xl text-[#790C12] font-bold block">
                  "Terima kasih sudah berkunjung ke scrapbook portofolio saya!"
                </span>
                <span className="font-mono text-[10px] text-stone-500 font-semibold">
                  — Intan Atsilah Balqis Rana
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Scrapbook Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border relative h-full flex flex-col justify-between bg-white border-[#e2d5c5] shadow-md"
            >
              {/* Paperclip */}
              <div className="absolute top-4 right-5 text-stone-400 rotate-12">
                <Paperclip className="w-5 h-5" />
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#790C12] font-mono text-xs uppercase tracking-wider font-bold mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pesan Langsung</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-black tracking-tight mb-6 text-[#241e1e]">
                  Tinggalkan Catatan atau Undangan Interview
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl border border-dashed text-center my-8 border-[#790C12] bg-[#fbf5ee]"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#790C12] text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-[#790C12] mb-2">
                      Pesan Berhasil Terkirim!
                    </h4>
                    <p className="text-sm max-w-md mx-auto mb-6 text-stone-700">
                      Terima kasih atas pesan Anda, <strong>{formData.name || 'Rekan'}</strong>! Saya akan segera merespons melalui email dalam waktu 1x24 jam.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#790C12] text-white hover:bg-[#921118] transition-all shadow-sm"
                    >
                      Kirim Pesan Baru
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-mono font-semibold uppercase text-stone-600 mb-1">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Budi Santoso"
                          className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all bg-[#faf6f0] border-stone-300 text-stone-900 focus:border-[#790C12] focus:ring-1 focus:ring-[#790C12]"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono font-semibold uppercase text-stone-600 mb-1">
                          Email Anda *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. budi@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all bg-[#faf6f0] border-stone-300 text-stone-900 focus:border-[#790C12] focus:ring-1 focus:ring-[#790C12]"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-stone-600 mb-1">
                        Subjek Pesan *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Tawaran Proyek UI/UX atau Lowongan Administrasi"
                        className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all bg-[#faf6f0] border-stone-300 text-stone-900 focus:border-[#790C12] focus:ring-1 focus:ring-[#790C12]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-stone-600 mb-1">
                        Isi Pesan *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tuliskan pesan, rincian proyek, atau jadwal interview..."
                        className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none bg-[#faf6f0] border-stone-300 text-stone-900 focus:border-[#790C12] focus:ring-1 focus:ring-[#790C12]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-xl font-semibold text-sm bg-[#790C12] hover:bg-[#921118] text-white transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(121,12,18,0.35)] transform active:scale-[0.99]"
                    >
                      {loading ? (
                        <span>Mengirim Surat...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kirim Pesan Sekarang</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Privacy Footer */}
              <div className="mt-4 text-center">
                <span className="text-[11px] font-mono text-stone-500">
                  🔒 Data Anda bersifat privat dan hanya digunakan untuk keperluan korespondensi langsung.
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
