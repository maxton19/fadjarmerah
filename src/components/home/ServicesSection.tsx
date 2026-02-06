'use client'

import Link from 'next/link'
import { Users, Search, BookOpen, Briefcase, ArrowRight, Check } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap = {
  users: Users,
  search: Search,
  book: BookOpen,
  briefcase: Briefcase,
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Layanan <span className="gradient-text">Unggulan</span> Kami
          </h2>
          <p className="section-subtitle">
            Solusi komprehensif untuk semua kebutuhan sumber daya manusia perusahaan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Users
            
            return (
              <div key={service.id} className="group card hover:-translate-y-2 cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-600 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-secondary-700">
                      <Check className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/services" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300">
                  Pelajari Lebih Lanjut
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            Lihat Semua Layanan
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}