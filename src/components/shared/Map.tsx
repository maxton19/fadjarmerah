'use client'

import { MapPin, ExternalLink } from 'lucide-react'

const GOOGLE_MAPS_URL = 'https://google.com/maps?q=-6.406940937042236,106.78607940673828&z=17&hl=en'

const EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1982.5!2d106.78607940673828!3d-6.406940937042236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1700000000000'

interface MapProps {
  address?: string
  height?: string
}

export default function Map({
  address = 'Jl. Al-Hikmah RT-02 RW-008, No.B - 141, Kelurahan Rangkapan Jaya Baru, Kecamatan Pancoran Mas, Kota Depok, Provinsi Jawa Barat, Kode Post 16434',
  height = '450px'
}: MapProps) {

  return (
    <div className="w-full">
      {/* Clickable Map Container */}
      <a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
      >
        <div
          className="rounded-2xl overflow-hidden shadow-2xl border-2 border-red-200/50 transition-all duration-300 group-hover:shadow-red-200/50 group-hover:border-red-300"
          style={{ height }}
        >
          <iframe
            src={EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: 'none' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi PT. Fadjar Merah Indonesia"
            className="w-full h-full"
          />
          {/* Overlay for click */}
          <div className="absolute inset-0 z-10 cursor-pointer bg-transparent group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl flex items-center gap-2">
              <ExternalLink className="text-red-600" size={20} />
              <span className="font-semibold text-slate-800">Buka di Google Maps</span>
            </div>
          </div>
        </div>
      </a>

      {/* Address and Button */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-slate-600">
          <MapPin className="text-red-600" size={20} />
          <span className="text-sm text-center">{address}</span>
        </div>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <MapPin size={18} />
          Lihat di Google Maps
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
