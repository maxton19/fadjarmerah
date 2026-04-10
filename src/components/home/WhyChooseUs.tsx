'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Zap, DollarSign, Headphones, CheckCircle, ArrowRight } from 'lucide-react'
import { WHY_CHOOSE_US } from '@/lib/constants'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const iconMap = { shield: Shield, zap: Zap, 'dollar-sign': DollarSign, headphones: Headphones }

const colors = [
  { icon: 'bg-red-600',    border: 'hover:border-red-700/50',    glow: 'hover:shadow-red-900/20' },
  { icon: 'bg-blue-600',   border: 'hover:border-blue-700/50',   glow: 'hover:shadow-blue-900/20' },
  { icon: 'bg-emerald-600',border: 'hover:border-emerald-700/50',glow: 'hover:shadow-emerald-900/20' },
  { icon: 'bg-violet-600', border: 'hover:border-violet-700/50', glow: 'hover:shadow-violet-900/20' },
]

const checks = [
  { title: 'Tim Tersertifikasi Internasional', desc: 'Profesional dengan sertifikasi BNSP, HRCI, dan SHRM di bidang HR dan ketenagakerjaan.' },
  { title: 'Teknologi HR Terintegrasi',        desc: 'Platform digital modern untuk efisiensi, transparansi, dan pelaporan real-time.' },
  { title: 'Full Compliance & Legal',          desc: 'Kepatuhan penuh terhadap UU Cipta Kerja, BPJS, pajak, dan seluruh regulasi terkait.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
      <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-700/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <AnimateOnScroll direction="left">
            <div className="section-label text-red-400 mb-4">Keunggulan Kami</div>
            <h2 className="section-title text-white mb-5">
              Mengapa Memilih{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                PT. Fadjar Merah?
              </span>
            </h2>
            <p className="text-white/50 text-lg mb-9 leading-relaxed">
              Dengan pengalaman lebih dari 10 tahun, kami memahami kebutuhan unik setiap bisnis dan berkomitmen memberikan solusi terbaik.
            </p>

            <div className="space-y-4 mb-9">
              {checks.map((item, i) => (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 + 0.2, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 bg-white/5 border border-white/8 hover:border-red-500/30 hover:bg-white/8 rounded-xl transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-red-600/20 border border-red-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={17} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm">{item.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about"
              className="inline-flex items-center gap-2 font-semibold text-red-400 hover:text-red-300 hover:gap-3 transition-all group">
              Pelajari Lebih Lanjut
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateOnScroll>

          {/* RIGHT — 2×2 glass cards */}
          <div className="grid grid-cols-2 gap-4">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield
              const c = colors[index % colors.length]
              return (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.55 }}
                  viewport={{ once: true }}
                >
                  <div className={`group bg-white/5 border border-white/8 ${c.border} rounded-2xl p-6 hover:shadow-xl ${c.glow} hover:-translate-y-1 transition-all duration-300 h-full`}>
                    <div className={`w-12 h-12 ${c.icon} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="text-white" size={22} />
                    </div>
                    <h3 className="font-bold text-white mb-2 text-sm leading-snug">{item.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
