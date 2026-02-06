import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

const LOGO_URL = 'https://media.dunianobi.com/IMG_3192.JPG.jpeg'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const phoneHref = 'tel:' + COMPANY_INFO.contact.phone
  const emailHref = 'mailto:' + COMPANY_INFO.contact.email

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
      {/* Red accent decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-blue-600"></div>
      
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={LOGO_URL}
                  alt="PT. Fadjar Merah Indonesia Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-xl">
                  <span className="text-white">PT. Fadjar </span>
                  <span className="text-red-400">Merah</span>
                  <span className="text-white"> Indonesia</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">{COMPANY_INFO.address.full}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a href={phoneHref} className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a href={emailHref} className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors text-sm">Beranda</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors text-sm">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-400 transition-colors text-sm">Layanan</Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-red-400 transition-colors text-sm">Karir</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors text-sm">Kontak</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Layanan Kami</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Outsourcing Karyawan</li>
              <li className="text-gray-300 text-sm">Recruitment Services</li>
              <li className="text-gray-300 text-sm">Training & Development</li>
              <li className="text-gray-300 text-sm">HR Consulting</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-red-400">Ikuti Kami</h3>
              <div className="flex gap-3">
                <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all">
                  <Facebook size={20} />
                </a>
                <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all">
                  <Instagram size={20} />
                </a>
                <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="text-red-400 font-semibold">{COMPANY_INFO.name}</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}