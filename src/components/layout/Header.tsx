'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Newspaper, ChevronRight } from 'lucide-react'

const LOGO_URL = 'https://media.sawa.vision/IMG_3192.JPG.jpeg'

const navLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Layanan', href: '/services' },
  { name: 'Karir', href: '/careers' },
  { name: 'Portal Berita', href: '/berita', badge: 'Baru', Icon: Newspaper },
  { name: 'Kontak', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsMobileMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
            : 'bg-slate-950/90 backdrop-blur-md'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-red-500/50 transition-all duration-300 group-hover:scale-105 flex-shrink-0">
                <Image
                  src={LOGO_URL}
                  alt="PT. Fadjar Merah Indonesia"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                  loading="eager"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-sm md:text-base leading-tight text-white">
                  PT. Fadjar <span className="text-red-500">Merah</span> Indonesia
                </div>
                <div className="text-[11px] text-white/40 font-medium">Solusi Outsourcing Terpercaya</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(({ name, href, badge, Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className="relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-white/65 hover:text-white rounded-xl hover:bg-white/8 transition-all duration-200"
                >
                  {Icon && <Icon size={13} className="text-red-400" />}
                  {name}
                  {badge && (
                    <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full leading-none">
                      {badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Hubungi Kami
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/8 transition-all"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isMobileMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-[64px] md:top-[72px] left-0 right-0 z-40 bg-slate-950/98 backdrop-blur-xl border-b border-white/8 shadow-2xl lg:hidden"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map(({ name, href, badge, Icon }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/6 rounded-xl font-medium transition-all group"
                  >
                    {Icon && <Icon size={16} className="text-red-400 flex-shrink-0" />}
                    <span className="flex-1">{name}</span>
                    {badge && (
                      <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {badge}
                      </span>
                    )}
                    <ChevronRight size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-red-900/30"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
