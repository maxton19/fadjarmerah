'use client'

import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/constants'

function parse(str: string) {
  const m = str.match(/^(\d+)(.*)$/)
  return { to: parseInt(m?.[1] ?? '0'), suffix: m?.[2] ?? '' }
}

const badges = [
  { title: 'ISO 9001:2015', desc: 'Sertifikasi Manajemen Mutu' },
  { title: '100% Legal',    desc: 'Terdaftar & Berizin Resmi' },
  { title: 'A+ Rating',     desc: 'Kepuasan Pelanggan' },
]

export default function StatsSection() {
  return (
    <section className="section-padding relative overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1a0a2e 45%,#4c0519 100%)' }}>

      {/* pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      {/* glows */}
      <motion.div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-700/15 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute right-0 bottom-0 w-72 h-72 bg-violet-700/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />

      <div className="relative container-custom">
        <AnimateOnScroll className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">Dalam Angka</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Kepercayaan yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Terukur</span>
          </h2>
          <p className="text-white/45 text-lg">Lebih dari satu dekade melayani perusahaan Indonesia</p>
        </AnimateOnScroll>

        {/* counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
          {STATS.map((stat, i) => {
            const { to, suffix } = parse(stat.value)
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center bg-white/5 border border-white/8 rounded-2xl p-6 md:p-8 hover:bg-white/9 hover:border-red-500/25 transition-all duration-300 group">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-red-300 mb-2 leading-none group-hover:to-red-400 transition-colors">
                    <AnimatedCounter to={to} suffix={suffix} />
                  </div>
                  <div className="text-white/45 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* badges */}
        <div className="grid sm:grid-cols-3 gap-4">
          {badges.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 0.1}>
              <div className="bg-white/4 border border-white/8 rounded-xl p-5 text-center hover:border-red-500/30 hover:bg-white/7 transition-all">
                <div className="text-xl font-bold text-white mb-1">{b.title}</div>
                <div className="text-white/35 text-sm">{b.desc}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
