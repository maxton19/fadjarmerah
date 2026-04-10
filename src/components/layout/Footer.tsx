import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

const LOGO_URL = 'https://media.sawa.vision/IMG_3192.JPG.jpeg'

const quickLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Layanan', href: '/services' },
  { name: 'Karir', href: '/careers' },
  { name: 'Portal Berita', href: '/berita' },
  { name: 'Kontak', href: '/contact' },
]

const newsCategories = [
  { name: 'Outsourcing', href: '/berita?kategori=Outsourcing' },
  { name: 'Ketenagakerjaan', href: '/berita?kategori=Ketenagakerjaan' },
  { name: 'Rekrutmen', href: '/berita?kategori=Rekrutmen' },
  { name: 'HR Management', href: '/berita?kategori=HR+Management' },
  { name: 'Training & Development', href: '/berita?kategori=Training' },
]

const socials = [
  { Icon: Facebook, href: COMPANY_INFO.social.facebook, label: 'Facebook' },
  { Icon: Instagram, href: COMPANY_INFO.social.instagram, label: 'Instagram' },
  { Icon: Linkedin, href: COMPANY_INFO.social.linkedin, label: 'LinkedIn' },
  { Icon: Twitter, href: COMPANY_INFO.social.twitter, label: 'Twitter' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
      {/* subtle glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-custom pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                <Image src={LOGO_URL} alt="Logo" width={44} height={44} className="w-full h-full object-cover" />
              </div>
              <div className="font-bold text-lg leading-tight">
                PT. Fadjar <span className="text-red-500">Merah</span> Indonesia
              </div>
            </div>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">{COMPANY_INFO.tagline}</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-white/40 text-xs leading-relaxed">{COMPANY_INFO.address.full}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={'tel:' + COMPANY_INFO.contact.phone} className="text-white/40 hover:text-red-400 transition-colors text-sm">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href={'mailto:' + COMPANY_INFO.contact.email} className="text-white/40 hover:text-red-400 transition-colors text-sm">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-5">Tautan Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="text-white/40 hover:text-red-400 transition-colors text-sm">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal Berita */}
          <div>
            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-5">Portal Berita</h3>
            <ul className="space-y-3">
              {newsCategories.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="text-white/40 hover:text-red-400 transition-colors text-sm">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Social */}
          <div>
            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-5">Layanan</h3>
            <ul className="space-y-3 mb-8">
              {['Outsourcing Karyawan', 'Recruitment Services', 'Training & Development', 'HR Consulting'].map((s) => (
                <li key={s} className="text-white/35 text-sm">{s}</li>
              ))}
            </ul>

            <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Ikuti Kami</h3>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-red-600 border border-white/8 hover:border-red-600 rounded-lg flex items-center justify-center transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {currentYear} <span className="text-red-500 font-semibold">{COMPANY_INFO.name}</span>. All rights reserved.
          </p>
          <div className="flex gap-4 text-[11px] text-white/20">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
