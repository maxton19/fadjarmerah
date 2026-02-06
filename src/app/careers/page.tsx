import { Metadata } from 'next'
import { Briefcase, MapPin, Clock, DollarSign, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Karir',
  description: 'Bergabunglah dengan tim PT. Fadjar Merah Indonesia dan kembangkan karir Anda bersama kami.',
}

const jobOpenings = [
  {
    id: 1,
    title: 'HR Consultant',
    location: 'Depok, Jawa Barat',
    type: 'Full-time',
    salary: 'Kompetitif',
    description: 'Mencari HR Consultant berpengalaman untuk memberikan konsultasi kepada klien.',
  },
  {
    id: 2,
    title: 'Recruitment Specialist',
    location: 'Jakarta',
    type: 'Full-time',
    salary: '8-12 Juta',
    description: 'Bertanggung jawab untuk proses rekrutmen dari awal hingga akhir.',
  },
  {
    id: 3,
    title: 'Training Coordinator',
    location: 'Depok, Jawa Barat',
    type: 'Full-time',
    salary: '7-10 Juta',
    description: 'Mengkoordinasikan program pelatihan dan pengembangan karyawan.',
  },
  {
    id: 4,
    title: 'Account Manager',
    location: 'Jakarta / Depok',
    type: 'Full-time',
    salary: '10-15 Juta',
    description: 'Mengelola hubungan dengan klien dan memastikan kepuasan layanan.',
  },
]

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary-800 to-secondary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Karir Bersama Kami</h1>
            <p className="text-xl text-gray-300 leading-relaxed">Bergabunglah dengan tim profesional kami dan kembangkan karir Anda di industri HR dan outsourcing.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Mengapa Bergabung dengan Kami?</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">Kami menawarkan lingkungan kerja yang mendukung pengembangan karir dan kesejahteraan karyawan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-secondary-800" size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Tim Profesional</h3>
              <p className="text-secondary-600 text-sm">Bekerja dengan tim yang berpengalaman dan suportif</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-secondary-800" size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Gaji Kompetitif</h3>
              <p className="text-secondary-600 text-sm">Kompensasi yang sesuai dengan kinerja dan pengalaman</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-secondary-800" size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Work-Life Balance</h3>
              <p className="text-secondary-600 text-sm">Waktu kerja yang fleksibel dan cuti yang memadai</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-secondary-800" size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Pengembangan Karir</h3>
              <p className="text-secondary-600 text-sm">Program training dan kesempatan berkembang</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Posisi yang Tersedia</h2>
            <p className="text-lg text-secondary-600">Temukan posisi yang sesuai dengan keahlian dan minat Anda</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <div key={job.id} className="card hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">{job.title}</h3>
                    <p className="text-secondary-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-secondary-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex-shrink-0">
                    <a href="/contact" className="bg-secondary-800 hover:bg-secondary-900 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 inline-block text-center">
                      Lamar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tidak Menemukan Posisi yang Sesuai?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Kirimkan CV dan surat lamaran Anda ke email kami. Kami akan menghubungi Anda jika ada posisi yang sesuai.</p>
          <a href="mailto:career@fadjarmerah.co.id" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
            Kirim Lamaran
          </a>
        </div>
      </section>
    </>
  )
}