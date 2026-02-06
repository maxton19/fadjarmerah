'use client'

import { MapPin } from 'lucide-react'

interface MapProps {
  address?: string
  embedUrl?: string
  height?: string
}

export default function Map({ 
  address = 'Depok, Jawa Barat',
  embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31731.12345678901!2d106.8!3d-6.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb3f7c0c1234%3A0x5678901234567890!2sDepok%2C%20Kota%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid',
  height = '450px'
}: MapProps) {
  
  const googleMapsUrl = 'https://maps.google.com/?q=' + encodeURIComponent(address)

  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-red-200/50" style={{ height }}>
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="w-full h-full"
        />
      </div>
      <div className="mt-6 text-center">
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-600 hover:text-blue-600 font-semibold transition-colors">
          <MapPin size={20} />
          Buka di Google Maps
        </a>
      </div>
    </div>
  )
}