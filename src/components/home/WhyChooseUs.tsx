'use client'

import { Shield, Zap, DollarSign, Headphones, CheckCircle } from 'lucide-react'
import { WHY_CHOOSE_US } from '@/lib/constants'

const iconMap = {
  shield: Shield,
  zap: Zap,
  'dollar-sign': DollarSign,
  headphones: Headphones,
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="section-title">
              Mengapa Memilih <span className="gradient-text">Kami?</span>
            </h2>
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Kami memahami bahwa setiap bisnis memiliki kebutuhan unik. Dengan pengalaman lebih dari 10 tahun, kami berkomitmen memberikan solusi terbaik untuk kesuksesan perusahaan Anda.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary-600" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Berpengalaman & Tersertifikasi</h4>
                  <p className="text-secondary-600 text-sm">Tim profesional dengan sertifikasi internasional dan pengalaman di berbagai industri.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary-600" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Teknologi Terintegrasi</h4>
                  <p className="text-secondary-600 text-sm">Sistem manajemen modern untuk efisiensi dan transparansi maksimal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-primary-600" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">Compliance & Legal</h4>
                  <p className="text-secondary-600 text-sm">Memastikan semua aspek legal dan kepatuhan terhadap regulasi ketenagakerjaan.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield
              
              return (
                <div key={index} className="card group hover:bg-primary-600 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-primary-100 group-hover:bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Icon className="text-primary-600 group-hover:text-primary-600" size={28} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 group-hover:text-primary-50 text-sm transition-colors">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}