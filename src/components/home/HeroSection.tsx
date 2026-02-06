'use client'

import Link from 'next/link'
import { ArrowRight, Users, Briefcase, TrendingUp, Sparkles } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Gradient Orbs with Red */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>

      <div className="relative container-custom py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            {/* Badge with Red */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600/20 via-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-bounce-slow border border-red-400/30">
              <Sparkles size={16} className="text-red-400" />
              <span>Solusi Outsourcing #1 di Indonesia</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              <span className="block animate-slide-in-left">Solusi Tenaga Kerja</span>
              <span className="block bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-slide-in-left animation-delay-200 bg-[length:200%_auto] animate-gradient">
                Profesional & Terpercaya
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-slide-in-left animation-delay-400">
              {COMPANY_INFO.tagline}. Kami menyediakan layanan outsourcing, rekrutmen, dan HR consulting untuk berbagai industri di Indonesia.
            </p>
            
            {/* CTA Buttons with Red */}
            <div className="flex flex-wrap gap-4 mb-12 animate-slide-in-left animation-delay-600">
              <Link href="/contact" className="group bg-gradient-to-r from-red-600 via-red-700 to-blue-700 hover:from-red-700 hover:via-red-800 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                Konsultasi Gratis
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-xl">
                Lihat Layanan
              </Link>
            </div>

            {/* Quick Stats with Red */}
            <div className="grid grid-cols-3 gap-6 animate-slide-in-up animation-delay-800">
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="text-red-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div className="text-3xl font-bold font-display group-hover:text-red-400 transition-colors">500+</div>
                <div className="text-gray-400 text-sm">Klien Aktif</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Briefcase className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div className="text-3xl font-bold font-display group-hover:text-blue-400 transition-colors">5000+</div>
                <div className="text-gray-400 text-sm">Karyawan</div>
              </div>
              <div className="text-center lg:text-left group">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <TrendingUp className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <div className="text-3xl font-bold font-display group-hover:text-cyan-400 transition-colors">10+</div>
                <div className="text-gray-400 text-sm">Tahun</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Card with Red Accents */}
          <div className="relative animate-slide-in-right animation-delay-200">
            <div className="relative group">
              {/* Main Card */}
              <div className="aspect-square bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 transform group-hover:scale-105 transition-all duration-500 group-hover:rotate-1">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated Background with Red */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-blue-500/20 to-cyan-500/20 animate-pulse"></div>
                  
                  {/* Content */}
                  <div className="text-center relative z-10">
                    <Users size={120} className="mx-auto mb-4 text-red-400 animate-float" />
                    <p className="text-2xl font-semibold">Profesional</p>
                    <p className="text-gray-400">Outsourcing Solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Cards with Red */}
              <div className="absolute -top-6 -right-6 bg-white text-slate-900 px-6 py-4 rounded-xl shadow-2xl animate-bounce-slow border-2 border-red-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-slate-600">Kepuasan Klien</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 px-6 py-4 rounded-xl shadow-2xl animate-bounce-slow animation-delay-400 border-2 border-blue-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}