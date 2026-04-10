'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, TrendingUp, Shield, Zap } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

const ease = [0.21, 0.47, 0.32, 0.98] as const

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  animate: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease } }),
}

const stats = [
  { value: '500+', label: 'Klien Aktif',        color: 'text-red-400' },
  { value: '5K+',  label: 'Karyawan',            color: 'text-orange-400' },
  { value: '10+',  label: 'Tahun Pengalaman',    color: 'text-blue-400' },
  { value: '98%',  label: 'Kepuasan Klien',      color: 'text-emerald-400' },
]

const industries = ['Manufaktur', 'Retail', 'FMCG', 'Logistik', 'Perbankan', 'Healthcare', 'Konstruksi']
const checks     = ['Rekrutmen Profesional', 'Payroll Management', 'Training & Development', 'HR Consulting']

export default function HeroSection() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden min-h-screen flex items-center">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/50" />
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      {/* animated orbs */}
      <motion.div className="absolute -top-32 right-0 w-[650px] h-[650px] bg-red-700/20 rounded-full blur-[130px] pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-700/12 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/6 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />

      {/* ── Content ── */}
      <div className="relative container-custom py-28 md:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            {/* badge */}
            <motion.div custom={0} variants={fadeUp} initial="initial" animate="animate" className="mb-7">
              <span className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm font-medium text-white/85">
                <Star size={13} className="text-yellow-400 fill-yellow-400" />
                Outsourcing &amp; HR Partner Terpercaya #1
              </span>
            </motion.div>

            {/* h1 */}
            <motion.h1
              custom={0.12} variants={fadeUp} initial="initial" animate="animate"
              className="text-5xl sm:text-6xl lg:text-[4.25rem] font-bold leading-[1.04] tracking-tight mb-6"
            >
              Tenaga Kerja{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-red-500 animate-gradient bg-[length:200%_auto]">
                Profesional
              </span>
              <br />untuk Bisnis Anda
            </motion.h1>

            {/* description */}
            <motion.p custom={0.24} variants={fadeUp} initial="initial" animate="animate"
              className="text-lg text-white/55 mb-9 leading-relaxed max-w-lg">
              {COMPANY_INFO.tagline}. Lebih dari satu dekade mendampingi ratusan perusahaan Indonesia tumbuh dengan solusi SDM berkualitas tinggi.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={0.36} variants={fadeUp} initial="initial" animate="animate"
              className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl shadow-red-900/40 hover:shadow-red-900/60 hover:-translate-y-0.5 active:scale-[0.98]">
                Konsultasi Gratis
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform animate-bounce-x" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/8 backdrop-blur-sm hover:bg-white/14 border border-white/18 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300">
                Lihat Layanan
              </Link>
            </motion.div>

            {/* checklist */}
            <motion.div custom={0.48} variants={fadeUp} initial="initial" animate="animate"
              className="grid grid-cols-2 gap-2.5">
              {checks.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-white/55">
                  <CheckCircle size={14} className="text-red-400 flex-shrink-0" />
                  {c}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — stats card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease }}
          >
            <div className="relative">
              {/* glow ring behind card */}
              <div className="absolute inset-0 rounded-3xl bg-red-600/8 blur-2xl scale-105" />

              {/* main card */}
              <div className="relative bg-white/6 backdrop-blur-2xl border border-white/10 rounded-3xl p-7 shadow-2xl">
                {/* top row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Ringkasan Kinerja</span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                {/* 2×2 stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {stats.map(({ value, label, color }) => (
                    <div key={label} className="bg-white/5 rounded-2xl p-5 border border-white/8 hover:border-white/18 transition-colors group">
                      <div className={`text-3xl font-black ${color} mb-1 leading-none group-hover:scale-105 transition-transform inline-block`}>
                        {value}
                      </div>
                      <div className="text-[11px] text-white/45 font-medium mt-1">{label}</div>
                    </div>
                  ))}
                </div>

                {/* industries */}
                <div className="border-t border-white/8 pt-5 mb-5">
                  <div className="text-[10px] text-white/35 font-bold uppercase tracking-widest mb-3">Industri Dilayani</div>
                  <div className="flex flex-wrap gap-1.5">
                    {industries.map((ind) => (
                      <span key={ind} className="text-xs bg-white/7 border border-white/10 text-white/60 px-2.5 py-1 rounded-full hover:bg-white/12 transition-colors">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* certifications */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { Icon: Shield, label: 'ISO 9001' },
                    { Icon: TrendingUp, label: '100% Legal' },
                    { Icon: Zap, label: 'A+ Rating' },
                  ].map(({ Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 bg-white/4 rounded-xl p-3 border border-white/7">
                      <Icon size={15} className="text-red-400" />
                      <span className="text-[10px] text-white/45 font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* floating badge */}
              <motion.div
                className="absolute -bottom-5 -right-4 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl px-5 py-3 shadow-2xl shadow-red-900/50 border border-red-500/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-2xl font-black leading-none">98%</div>
                <div className="text-xs text-red-200 mt-0.5">Kepuasan Klien</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        animate={{ opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-[10px] text-white/25 uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  )
}
