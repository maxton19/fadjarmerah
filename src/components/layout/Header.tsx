'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const LOGO_URL = 'https://media.dunianobi.com/IMG_3192.JPG.jpeg'

const navLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Layanan', href: '/services' },
  { name: 'Karir', href: '/careers' },
  { name: 'Kontak', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl' : 'bg-gradient-to-r from-slate-50 via-blue-50 to-cyan-50'}`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110">
              <Image
                src={LOGO_URL}
                alt="PT. Fadjar Merah Indonesia Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight">
                <span className="bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">PT. Fadjar </span>
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Merah</span>
                <span className="bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent"> Indonesia</span>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-slate-700 hover:text-red-600 font-medium transition-all relative group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className="bg-gradient-to-r from-red-600 via-red-700 to-blue-700 hover:from-red-700 hover:via-red-800 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              Hubungi Kami
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-700 hover:text-red-600 transition-colors">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 animate-slide-down bg-white/95 backdrop-blur-sm rounded-b-xl shadow-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 hover:text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-red-50 transition-all">
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-gradient-to-r from-red-600 to-blue-600 text-white text-center font-semibold py-3 px-6 rounded-xl transition-all duration-300 mt-2 shadow-lg">
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
