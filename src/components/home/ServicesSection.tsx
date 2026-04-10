'use client'

import Link from 'next/link'
import { Users, Search, BookOpen, Briefcase, ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const iconMap = { users: Users, search: Search, book: BookOpen, briefcase: Briefcase }

const accents = [
  { num: 'bg-red-600',    icon: 'bg-red-600',    border: 'hover:border-red-800/60',    glow: 'hover:shadow-red-900/30' },
  { num: 'bg-blue-600',   icon: 'bg-blue-600',   border: 'hover:border-blue-800/60',   glow: 'hover:shadow-blue-900/30' },
  { num: 'bg-violet-600', icon: 'bg-violet-600', border: 'hover:border-violet-800/60', glow: 'hover:shadow-violet-900/30' },
  { num: 'bg-slate-600',  icon: 'bg-slate-500',  border: 'hover:border-slate-600/60',  glow: 'hover:shadow-slate-900/30' },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      <div className="relative container-custom">
        {/* heading */}
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-3 text-red-400">Layanan Kami</div>
          <h2 className="section-title text-white mb-4">
            Solusi SDM <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Komprehensif</span>
          </h2>
          <p className="text-white/50 text-lg">
            Layanan lengkap untuk kebutuhan sumber daya manusia perusahaan Anda
          </p>
        </AnimateOnScroll>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Users
            const ac = accents[index % accents.length]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className={`group h-full flex flex-col bg-white/5 border border-white/10 ${ac.border} rounded-2xl p-6 hover:shadow-2xl ${ac.glow} hover:-translate-y-1.5 transition-all duration-300 cursor-default`}>
                  {/* number + icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[11px] font-black ${ac.num} text-white px-2.5 py-1 rounded-lg`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className={`w-11 h-11 ${ac.icon} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="text-white" size={20} />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2.5 leading-snug">{service.title}</h3>
                  <p className="text-white/45 text-sm mb-5 leading-relaxed flex-1">{service.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/55">
                        <Check size={12} className="text-emerald-400 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link href="/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-red-300 hover:gap-2 transition-all mt-auto">
                    Selengkapnya <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <AnimateOnScroll className="text-center mt-12" delay={0.2}>
          <Link href="/services" className="btn-primary">
            Lihat Semua Layanan <ArrowRight size={17} />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
