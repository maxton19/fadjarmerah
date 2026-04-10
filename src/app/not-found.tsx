'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
            <Home size={20} />
            Kembali ke Beranda
          </Link>
          <button onClick={() => router.back()} className="bg-white text-slate-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  )
}