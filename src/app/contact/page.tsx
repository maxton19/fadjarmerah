import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import ContactForm from '@/components/shared/ContactForm'
import Map from '@/components/shared/Map'

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi PT. Fadjar Merah Indonesia untuk konsultasi dan informasi lebih lanjut tentang layanan kami.',
}

const GOOGLE_MAPS_URL = 'https://google.com/maps?q=-6.406940937042236,106.78607940673828&z=17&hl=en'
const ADDRESS = 'Jl. Al-Hikmah RT-02 RW-008, No.B - 141, Kelurahan Rangkapan Jaya Baru, Kecamatan Pancoran Mas, Kota Depok, Provinsi Jawa Barat, Kode Post 16434'

export default function ContactPage() {
  const phoneHref = 'tel:' + COMPANY_INFO.contact.phone
  const emailHref = 'mailto:' + COMPANY_INFO.contact.email

  return (
    <>
      {/* Hero Section with Map */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Kami siap membantu Anda. Hubungi kami melalui formulir di bawah ini atau kunjungi kantor kami.
              </p>
              {/* Clickable Address */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all"
              >
                <MapPin className="text-red-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-medium mb-1 flex items-center gap-2">
                    Alamat Kantor
                    <ExternalLink size={16} className="text-red-400 group-hover:translate-x-1 transition-transform" />
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">{ADDRESS}</p>
                </div>
              </a>
            </div>
            {/* Mini Map Preview */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hover:border-red-400/50 transition-all"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1982.5!2d106.78607940673828!3d-6.406940937042236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi PT. Fadjar Merah Indonesia"
                  className="w-full h-full"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 z-10 cursor-pointer bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all bg-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-2">
                  <ExternalLink className="text-red-600" size={20} />
                  <span className="font-semibold text-slate-800">Buka di Google Maps</span>
                </div>
              </div>
            </a>
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
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-red-50 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all">
                    <MapPin className="text-red-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2">
                      Alamat
                      <ExternalLink size={14} className="text-red-600 opacity-0 group-hover:opacity-100 transition-all" />
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed group-hover:text-red-600 transition-colors">{ADDRESS}</p>
                  </div>
                </a>

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

      {/* Full Map Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Lokasi <span className="text-red-600">Kantor</span> Kami
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kunjungi kantor kami atau klik peta untuk membuka di Google Maps
            </p>
          </div>
          <Map
            address={ADDRESS}
            height="400px"
          />
        </div>
      </section>
    </>
  )
}