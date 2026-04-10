import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Award, Users, Briefcase, TrendingUp, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Pelajari lebih lanjut tentang PT. Fadjar Merah Indonesia, visi, misi, dan nilai-nilai perusahaan kami.',
}

const galleryItems = [
  {
    src: 'https://media.sawa.vision/11Construction%20site%20security%20in%20action.png',
    alt: 'Kegiatan keamanan di lokasi konstruksi',
    caption: 'Pengamanan Lokasi Konstruksi',
    featured: true,
  },
  {
    src: 'https://media.sawa.vision/11Nighttime%20security%20briefing%20in%20the%20city.png',
    alt: 'Briefing keamanan malam hari di kota',
    caption: 'Briefing Keamanan Malam Hari',
    featured: false,
  },
  {
    src: 'https://media.sawa.vision/11Security%20briefing%20in%20various%20locations.png',
    alt: 'Briefing keamanan di berbagai lokasi',
    caption: 'Briefing Tim di Lapangan',
    featured: false,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-red-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="relative container-custom">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl text-white/65 leading-relaxed max-w-2xl">
            PT. Fadjar Merah Indonesia adalah perusahaan outsourcing terkemuka yang berkomitmen memberikan solusi tenaga kerja profesional untuk berbagai industri di Indonesia.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Profil Perusahaan</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Mitra SDM Terpercaya Anda</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Didirikan dengan visi untuk menjadi mitra terpercaya dalam penyediaan solusi SDM, PT. Fadjar Merah Indonesia telah melayani lebih dari 500 perusahaan di berbagai sektor industri.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Dengan pengalaman lebih dari 10 tahun, kami memahami dinamika kebutuhan tenaga kerja di Indonesia dan berkomitmen untuk memberikan layanan terbaik yang disesuaikan dengan kebutuhan setiap klien.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Tim profesional kami yang berpengalaman siap membantu perusahaan Anda dalam mengelola sumber daya manusia secara efektif dan efisien.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: Users, value: '500+', label: 'Klien Aktif' },
                { Icon: Briefcase, value: '5000+', label: 'Karyawan Tersalurkan' },
                { Icon: TrendingUp, value: '10+', label: 'Tahun Pengalaman' },
                { Icon: Award, value: '50+', label: 'Industri Dilayani' },
              ].map(({ Icon, value, label }) => (
                <div key={label} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-red-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Arah Perusahaan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Visi &amp; Misi Kami</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Visi Kami</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Menjadi perusahaan penyedia solusi outsourcing dan manajemen SDM terkemuka di Indonesia yang dipercaya oleh berbagai industri, dengan memberikan layanan berkualitas tinggi dan inovatif.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Misi Kami</h2>
              </div>
              <ul className="space-y-3">
                {[
                  'Menyediakan solusi SDM yang profesional dan berkualitas',
                  'Membangun kemitraan jangka panjang dengan klien',
                  'Mengembangkan kompetensi tenaga kerja secara berkelanjutan',
                  'Memberikan nilai tambah bagi seluruh stakeholder',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Kegiatan */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <span className="inline-flex items-center gap-1.5"><Camera size={13} /> Dokumentasi</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Galeri Kegiatan</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Rekam jejak tim kami di lapangan — berkomitmen penuh memberikan layanan terbaik di setiap lokasi klien.
            </p>
          </div>

          {/* 3-column equal portrait grid — matches the 2:3 native ratio of each image */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {galleryItems.map((item, idx) => {
              const badges = [
                { label: 'Kegiatan Lapangan', color: 'bg-red-600' },
                { label: 'Operasional Malam', color: 'bg-blue-700' },
                { label: 'Tim Profesional', color: 'bg-slate-700' },
              ]
              return (
                <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-900">
                  {/* aspect-[2/3] matches the 1024×1536 portrait ratio exactly */}
                  <div className="relative w-full aspect-[2/3]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className={`inline-block ${badges[idx].color} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                      {badges[idx].label}
                    </span>
                    <p className="text-white font-semibold text-sm leading-snug">{item.caption}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Caption bar */}
          <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              Tim lapangan PT. Fadjar Merah Indonesia siap beroperasi di seluruh wilayah Indonesia.
            </p>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all shadow-md"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Nilai Perusahaan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Nilai-Nilai Kami</h2>
            <p className="text-slate-500 text-lg">Prinsip yang memandu setiap langkah kami</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '🎯', title: 'Profesional', desc: 'Memberikan layanan dengan standar tertinggi dan keahlian profesional' },
              { emoji: '🤝', title: 'Integritas', desc: 'Menjunjung tinggi kejujuran dan transparansi dalam setiap tindakan' },
              { emoji: '💡', title: 'Inovasi', desc: 'Terus berinovasi untuk memberikan solusi terbaik dan terkini' },
              { emoji: '⭐', title: 'Keunggulan', desc: 'Berkomitmen untuk mencapai hasil terbaik dalam setiap proyek' },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-red-950 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Bekerja Sama?</h2>
          <p className="text-xl text-white/65 mb-8 max-w-2xl mx-auto">
            Mari diskusikan bagaimana kami dapat membantu perusahaan Anda mencapai tujuan bisnis melalui solusi SDM yang tepat.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-xl hover:shadow-red-600/30"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </>
  )
}
