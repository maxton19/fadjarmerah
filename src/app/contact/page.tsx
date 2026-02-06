import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import ContactForm from '@/components/shared/ContactForm'
import Map from '@/components/shared/Map'

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi PT. Fadjar Merah Indonesia untuk konsultasi dan informasi lebih lanjut tentang layanan kami.',
}

export default function ContactPage() {
  const phoneHref = 'tel:' + COMPANY_INFO.contact.phone
  const emailHref = 'mailto:' + COMPANY_INFO.contact.email

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Kami siap membantu Anda. Hubungi kami melalui formulir di bawah ini atau melalui kontak langsung yang tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-white to-blue-50/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h2>
                <p className="text-slate-600 mb-8">Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Alamat</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{COMPANY_INFO.address.full}</p>
                  </div>
                </div>

                <a href={phoneHref} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all">
                    <Phone className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Telepon</h3>
                    <p className="text-slate-600 text-sm group-hover:text-red-600 transition-colors">{COMPANY_INFO.contact.phone}</p>
                  </div>
                </a>

                <a href={emailHref} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-cyan-50 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all">
                    <Mail className="text-cyan-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600 text-sm group-hover:text-blue-600 transition-colors break-all">{COMPANY_INFO.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Jam Operasional</h3>
                    <p className="text-slate-600 text-sm">{COMPANY_INFO.businessHours.weekdays}</p>
                    <p className="text-slate-600 text-sm">{COMPANY_INFO.businessHours.saturday}</p>
                    <p className="text-slate-600 text-sm">{COMPANY_INFO.businessHours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-4">Ikuti Kami</h3>
                <div className="flex gap-3">
                  <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-50 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all group">
                    <span className="text-blue-600 group-hover:text-white transition-colors font-bold">f</span>
                  </a>
                  <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-50 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all group">
                    <span className="text-red-600 group-hover:text-white transition-colors text-xl">📷</span>
                  </a>
                  <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-50 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all group">
                    <span className="text-blue-700 group-hover:text-white transition-colors font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Lokasi <span className="text-red-600">Kantor</span> Kami
          </h2>
          <Map 
            address={COMPANY_INFO.address.full}
            height="450px"
          />
        </div>
      </section>
    </>
  )
}