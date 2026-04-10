'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, MessageCircle, Clock } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export default function CTASection() {
  const whatsappLink = generateWhatsAppLink(
    COMPANY_INFO.contact.whatsapp,
    'Halo, saya tertarik dengan layanan PT. Fadjar Merah Indonesia. Mohon informasi lebih lanjut.'
  )

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      <div className="relative container-custom">
        <AnimateOnScroll direction="scale">
          <div className="relative rounded-3xl overflow-hidden border border-white/8">
            {/* top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

            {/* animated bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/70" />
            <motion.div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/12 rounded-full blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />

            <div className="relative grid lg:grid-cols-5">
              {/* ── LEFT 3/5 ── */}
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-14 text-white">
                <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Mulai Sekarang</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Siap <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Berkembang</span> Bersama Kami?
                </h2>
                <p className="text-white/55 mb-8 leading-relaxed text-lg max-w-lg">
                  Konsultasikan kebutuhan SDM perusahaan Anda secara gratis. Tim ahli kami siap merespons dalam 24 jam kerja.
                </p>

                <ul className="space-y-3 mb-9">
                  {['Konsultasi gratis tanpa komitmen', 'Respons cepat dalam 24 jam', 'Solusi disesuaikan anggaran & kebutuhan'].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-white/65">
                      <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-[10px] font-black">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-7 rounded-2xl transition-colors shadow-2xl shadow-red-900/40">
                    <MessageCircle size={18} />
                    WhatsApp Kami
                  </motion.a>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/14 border border-white/18 text-white font-semibold py-4 px-7 rounded-2xl transition-all">
                    Form Kontak <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* ── RIGHT 2/5 ── */}
              <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-white/8 p-8 md:p-10 flex flex-col justify-center text-white">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">Hubungi Langsung</div>

                <div className="space-y-3 mb-6">
                  <motion.a href={'tel:' + COMPANY_INFO.contact.phone}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/9 border border-white/8 hover:border-red-500/30 rounded-2xl p-4 transition-all group"
                  >
                    <div className="w-10 h-10 bg-red-600/20 group-hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                      <Phone size={17} className="text-red-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/35 mb-0.5">Telepon</div>
                      <div className="text-white font-semibold text-sm">{COMPANY_INFO.contact.phone}</div>
                    </div>
                  </motion.a>

                  <motion.a href={'mailto:' + COMPANY_INFO.contact.email}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 bg-white/5 hover:bg-white/9 border border-white/8 hover:border-blue-500/30 rounded-2xl p-4 transition-all group"
                  >
                    <div className="w-10 h-10 bg-blue-600/20 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                      <Mail size={17} className="text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/35 mb-0.5">Email</div>
                      <div className="text-white font-semibold text-sm break-all">{COMPANY_INFO.contact.email}</div>
                    </div>
                  </motion.a>
                </div>

                <div className="bg-red-950/50 border border-red-800/25 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-semibold mb-2">
                    <Clock size={12} /> Jam Operasional
                  </div>
                  <div className="text-white/45 text-xs space-y-0.5">
                    <div>{COMPANY_INFO.businessHours.weekdays}</div>
                    <div>{COMPANY_INFO.businessHours.saturday}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
