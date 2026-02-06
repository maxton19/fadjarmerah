import { Metadata } from 'next'
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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-800 to-secondary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Kami</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Solusi komprehensif untuk semua kebutuhan sumber daya manusia perusahaan Anda, dari rekrutmen hingga pengembangan karyawan.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Users
              const isEven = index % 2 === 0
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center">
                        <Icon className="text-secondary-800" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold text-secondary-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-secondary-700 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-secondary-900 mb-4">Fitur Layanan:</h3>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="text-secondary-800 flex-shrink-0 mt-1" size={20} />
                          <span className="text-secondary-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="aspect-square bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center">
                      <Icon className="text-secondary-800" size={120} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Proses Kerja Kami</h2>
            <p className="text-lg text-secondary-600">Langkah-langkah sistematis untuk hasil optimal</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Konsultasi</h3>
              <p className="text-secondary-600">Memahami kebutuhan dan tantangan perusahaan Anda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Perencanaan</h3>
              <p className="text-secondary-600">Merancang solusi yang disesuaikan dengan kebutuhan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Implementasi</h3>
              <p className="text-secondary-600">Menjalankan solusi dengan tim profesional</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Evaluasi</h3>
              <p className="text-secondary-600">Monitoring dan perbaikan berkelanjutan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tertarik dengan Layanan Kami?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan SDM perusahaan Anda dengan tim ahli kami dan dapatkan solusi terbaik.
          </p>
          <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Hubungi Kami
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}