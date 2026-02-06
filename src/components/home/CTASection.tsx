'use client'

import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { generateWhatsAppLink } from '@/lib/utils'

export default function CTASection() {
  const whatsappMessage = 'Halo, saya tertarik dengan layanan PT. Fadjar Merah Indonesia. Mohon informasi lebih lanjut.'
  const whatsappLink = generateWhatsAppLink(COMPANY_INFO.contact.whatsapp, whatsappMessage)
  const phoneHref = 'tel:' + COMPANY_INFO.contact.phone
  const emailHref = 'mailto:' + COMPANY_INFO.contact.email

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-red-500/20">
          {/* Red accent line */}
          <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-blue-600"></div>
          
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap <span className="text-red-400">Berkembang</span> Bersama Kami?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Konsultasikan kebutuhan SDM perusahaan Anda dengan tim profesional kami. Dapatkan solusi terbaik yang disesuaikan dengan bisnis Anda.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Konsultasi gratis tanpa biaya</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Respons cepat dalam 24 jam</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Solusi disesuaikan kebutuhan</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                  <Phone size={20} />
                  WhatsApp Kami
                </a>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-all duration-300">
                  Form Kontak
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-slate-900">Atau Hubungi Kami </span>
                <span className="text-red-600">Langsung</span>
              </h3>

              <div className="space-y-4">
                <a href={phoneHref} className="card hover:border-2 hover:border-red-500 flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-red-50 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 rounded-xl flex items-center justify-center transition-all">
                    <Phone className="text-red-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Telepon</div>
                    <div className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">{COMPANY_INFO.contact.phone}</div>
                  </div>
                </a>

                <a href={emailHref} className="card hover:border-2 hover:border-blue-500 flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-blue-50 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all">
                    <Mail className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Email</div>
                    <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors break-all">{COMPANY_INFO.contact.email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border border-red-200/50">
                <p className="text-sm text-slate-700">
                  <strong className="text-red-600">Jam Operasional:</strong><br />
                  {COMPANY_INFO.businessHours.weekdays}<br />
                  {COMPANY_INFO.businessHours.saturday}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}