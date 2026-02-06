import { Metadata } from 'next'
import { Target, Eye, Award, Users, Briefcase, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Pelajari lebih lanjut tentang PT. Fadjar Merah Indonesia, visi, misi, dan nilai-nilai perusahaan kami.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-800 to-secondary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              PT. Fadjar Merah Indonesia adalah perusahaan outsourcing terkemuka yang berkomitmen memberikan solusi tenaga kerja profesional untuk berbagai industri di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Profil Perusahaan</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Didirikan dengan visi untuk menjadi mitra terpercaya dalam penyediaan solusi SDM, PT. Fadjar Merah Indonesia telah melayani lebih dari 500 perusahaan di berbagai sektor industri.
              </p>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Dengan pengalaman lebih dari 10 tahun, kami memahami dinamika kebutuhan tenaga kerja di Indonesia dan berkomitmen untuk memberikan layanan terbaik yang disesuaikan dengan kebutuhan setiap klien.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Tim profesional kami yang berpengalaman siap membantu perusahaan Anda dalam mengelola sumber daya manusia secara efektif dan efisien.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center">
                <Users className="mx-auto mb-4 text-secondary-800" size={48} />
                <div className="text-3xl font-bold text-secondary-900 mb-2">500+</div>
                <div className="text-secondary-600">Klien Aktif</div>
              </div>
              <div className="card text-center">
                <Briefcase className="mx-auto mb-4 text-secondary-800" size={48} />
                <div className="text-3xl font-bold text-secondary-900 mb-2">5000+</div>
                <div className="text-secondary-600">Karyawan</div>
              </div>
              <div className="card text-center">
                <TrendingUp className="mx-auto mb-4 text-secondary-800" size={48} />
                <div className="text-3xl font-bold text-secondary-900 mb-2">10+</div>
                <div className="text-secondary-600">Tahun Pengalaman</div>
              </div>
              <div className="card text-center">
                <Award className="mx-auto mb-4 text-secondary-800" size={48} />
                <div className="text-3xl font-bold text-secondary-900 mb-2">50+</div>
                <div className="text-secondary-600">Industri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <Eye className="text-secondary-800" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">Visi Kami</h2>
              </div>
              <p className="text-secondary-700 leading-relaxed">
                Menjadi perusahaan penyedia solusi outsourcing dan manajemen SDM terkemuka di Indonesia yang dipercaya oleh berbagai industri, dengan memberikan layanan berkualitas tinggi dan inovatif.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <Target className="text-secondary-800" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">Misi Kami</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-secondary-700">
                  <span className="text-secondary-800 font-bold mt-1">•</span>
                  <span>Menyediakan solusi SDM yang profesional dan berkualitas</span>
                </li>
                <li className="flex items-start gap-2 text-secondary-700">
                  <span className="text-secondary-800 font-bold mt-1">•</span>
                  <span>Membangun kemitraan jangka panjang dengan klien</span>
                </li>
                <li className="flex items-start gap-2 text-secondary-700">
                  <span className="text-secondary-800 font-bold mt-1">•</span>
                  <span>Mengembangkan kompetensi tenaga kerja secara berkelanjutan</span>
                </li>
                <li className="flex items-start gap-2 text-secondary-700">
                  <span className="text-secondary-800 font-bold mt-1">•</span>
                  <span>Memberikan nilai tambah bagi seluruh stakeholder</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Nilai-Nilai Perusahaan</h2>
            <p className="text-lg text-secondary-600">Prinsip yang memandu setiap langkah kami</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Profesional</h3>
              <p className="text-secondary-600 text-sm">Memberikan layanan dengan standar tertinggi dan keahlian profesional</p>
            </div>
            <div className="card text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Integritas</h3>
              <p className="text-secondary-600 text-sm">Menjunjung tinggi kejujuran dan transparansi dalam setiap tindakan</p>
            </div>
            <div className="card text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Inovasi</h3>
              <p className="text-secondary-600 text-sm">Terus berinovasi untuk memberikan solusi terbaik dan terkini</p>
            </div>
            <div className="card text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Keunggulan</h3>
              <p className="text-secondary-600 text-sm">Berkomitmen untuk mencapai hasil terbaik dalam setiap proyek</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary-800 to-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Bekerja Sama?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Mari diskusikan bagaimana kami dapat membantu perusahaan Anda mencapai tujuan bisnis melalui solusi SDM yang tepat.
          </p>
          <a href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>
    </>
  )
}