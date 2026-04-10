import { Metadata } from 'next'
import Image from 'next/image'
import { Users, Search, BookOpen, Briefcase, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Layanan Kami',
  description: 'Jelajahi berbagai layanan outsourcing, rekrutmen, training, dan HR consulting yang kami tawarkan.',
}

const iconMap = {
  users: Users,
  search: Search,
  book: BookOpen,
  briefcase: Briefcase,
}

const serviceVisuals = [
  {
    gradient: 'from-red-600 to-rose-800',
    icon: Users,
    label: 'Outsourcing',
  },
  {
    gradient: 'from-blue-600 to-indigo-800',
    icon: Search,
    label: 'Rekrutmen',
  },
  {
    gradient: 'from-green-600 to-emerald-800',
    icon: BookOpen,
    label: 'Training',
  },
  {
    gradient: 'from-slate-600 to-slate-800',
    icon: Briefcase,
    label: 'Consulting',
  },
]

const steps = [
  { num: '01', title: 'Konsultasi', desc: 'Memahami kebutuhan dan tantangan perusahaan Anda secara mendalam.' },
  { num: '02', title: 'Perencanaan', desc: 'Merancang solusi yang disesuaikan dengan kebutuhan dan anggaran.' },
  { num: '03', title: 'Implementasi', desc: 'Menjalankan solusi dengan tim profesional berpengalaman.' },
  { num: '04', title: 'Evaluasi', desc: 'Monitoring, pelaporan, dan perbaikan berkelanjutan.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-red-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="relative container-custom">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-xl text-white/65 leading-relaxed max-w-2xl">
            Solusi komprehensif untuk semua kebutuhan sumber daya manusia perusahaan Anda — dari rekrutmen hingga pengembangan karyawan.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Users
              const visual = serviceVisuals[index % serviceVisuals.length]
              const VisualIcon = visual.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Text */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                      Layanan {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 bg-gradient-to-br ${visual.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-slate-500 mb-7 leading-relaxed">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">Fitur Layanan</h3>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                            <Check className="text-green-600" size={11} />
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-7 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                      Konsultasi Sekarang <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className={`aspect-square rounded-3xl bg-gradient-to-br ${visual.gradient} relative overflow-hidden flex items-center justify-center shadow-2xl`}>
                      {service.image ? (
                        <>
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            style={{ objectPosition: service.imagePosition ?? 'center' }}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/10 to-slate-950/65" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
                          <div className="relative text-center">
                            <VisualIcon size={100} className="text-white/20 mx-auto mb-4" />
                            <div className="text-white/70 text-xl font-bold">{visual.label}</div>
                            <div className="text-white/40 text-sm mt-1">PT. Fadjar Merah Indonesia</div>
                          </div>
                        </>
                      )}
                      {/* Corner badge */}
                      <div className="absolute top-6 right-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                        <div className="text-white font-bold text-lg">10+</div>
                        <div className="text-white/60 text-xs">Tahun</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Proses Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Cara Kerja Kami</h2>
            <p className="text-lg text-slate-500">Langkah-langkah sistematis untuk menghadirkan hasil yang optimal</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] right-0 h-px bg-gradient-to-r from-red-200 to-transparent" />
                )}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl flex items-center justify-center text-lg font-black mb-5 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-red-950 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tertarik dengan Layanan Kami?</h2>
          <p className="text-xl text-white/65 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan SDM perusahaan Anda dengan tim ahli kami dan dapatkan solusi terbaik.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-xl hover:shadow-red-600/30"
          >
            Hubungi Kami <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
