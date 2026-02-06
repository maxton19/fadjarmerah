'use client'

import { STATS } from '@/lib/constants'

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dipercaya oleh <span className="text-blue-400">Ribuan Perusahaan</span>
          </h2>
          <p className="text-xl text-gray-300">
            Angka yang membuktikan dedikasi dan kualitas layanan kami
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-5xl md:text-6xl font-bold font-display mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-lg text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
            <div className="text-2xl font-bold mb-2">ISO 9001:2015</div>
            <div className="text-gray-300 text-sm">Sertifikasi Manajemen Mutu</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
            <div className="text-2xl font-bold mb-2">100% Legal</div>
            <div className="text-gray-300 text-sm">Terdaftar & Tersertifikasi</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
            <div className="text-2xl font-bold mb-2">A+ Rating</div>
            <div className="text-gray-300 text-sm">Kepuasan Pelanggan</div>
          </div>
        </div>
      </div>
    </section>
  )
}