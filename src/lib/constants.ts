// src/lib/constants.ts
export const COMPANY_INFO = {
  name: 'PT. Fadjar Merah Indonesia',
  tagline: 'Solusi Outsourcing Terpercaya untuk Bisnis Anda',
  description: 'PT. Fadjar Merah Indonesia adalah perusahaan outsourcing terkemuka di Indonesia yang menyediakan solusi tenaga kerja profesional untuk berbagai industri.',
  address: {
    street: 'Jl. Al-Hikmah RT-02 RW-008, No.B - 141',
    kelurahan: 'Kelurahan Rangkapan Jaya Baru',
    kecamatan: 'Kecamatan Pancoran Mas',
    city: 'Kota Depok',
    province: 'Provinsi Jawa Barat',
    postalCode: '16434',
    full: 'Jl. Al-Hikmah RT-02 RW-008, No.B - 141, Kelurahan Rangkapan Jaya Baru, Kecamatan Pancoran Mas, Kota Depok, Provinsi Jawa Barat, Kode Post 16434',
  },
  contact: {
    phone: '+62 21 1234 5678',
    whatsapp: '+62 812 3456 7890',
    email: 'info@fadjarmerah.co.id',
  },
  social: {
    facebook: 'https://facebook.com/fadjarmerahindonesia',
    instagram: 'https://instagram.com/fadjarmerahindonesia',
    linkedin: 'https://linkedin.com/company/fadjarmerahindonesia',
    twitter: 'https://twitter.com/fadjarmerah_id',
  },
  businessHours: {
    weekdays: 'Senin - Jumat: 08:00 - 17:00 WIB',
    saturday: 'Sabtu: 08:00 - 12:00 WIB',
    sunday: 'Minggu: Tutup',
  },
}

export const SERVICES = [
  {
    id: 'outsourcing',
    title: 'Outsourcing Karyawan',
    description: 'Solusi tenaga kerja profesional yang fleksibel dan efisien untuk kebutuhan operasional perusahaan Anda.',
    icon: 'users',
    features: [
      'Rekrutmen & Seleksi',
      'Administrasi Kepegawaian',
      'Payroll Management',
      'Manajemen Kinerja',
    ],
  },
  {
    id: 'recruitment',
    title: 'Recruitment Services',
    description: 'Layanan rekrutmen profesional untuk menemukan talenta terbaik sesuai kebutuhan bisnis Anda.',
    icon: 'search',
    features: [
      'Executive Search',
      'Mass Recruitment',
      'Background Check',
      'Assessment & Testing',
    ],
  },
  {
    id: 'training',
    title: 'Training & Development',
    description: 'Program pelatihan dan pengembangan SDM untuk meningkatkan kompetensi karyawan.',
    icon: 'book',
    features: [
      'Soft Skills Training',
      'Technical Training',
      'Leadership Development',
      'Customized Training',
    ],
  },
  {
    id: 'consulting',
    title: 'HR Consulting',
    description: 'Konsultasi manajemen SDM untuk optimalisasi strategi dan sistem kepegawaian perusahaan.',
    icon: 'briefcase',
    features: [
      'HR Strategy',
      'Organizational Design',
      'Compensation & Benefits',
      'Performance Management',
    ],
  },
]

export const STATS = [
  { value: '500+', label: 'Klien Puas' },
  { value: '5000+', label: 'Karyawan Tersalurkan' },
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '50+', label: 'Industri Dilayani' },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Profesional & Terpercaya',
    description: 'Tim berpengalaman dengan standar layanan tinggi',
    icon: 'shield',
  },
  {
    title: 'Proses Cepat & Efisien',
    description: 'Sistem terintegrasi untuk pelayanan optimal',
    icon: 'zap',
  },
  {
    title: 'Harga Kompetitif',
    description: 'Solusi cost-effective untuk bisnis Anda',
    icon: 'dollar-sign',
  },
  {
    title: 'Support 24/7',
    description: 'Dukungan pelanggan siap membantu kapan saja',
    icon: 'headphones',
  },
]

export const SEO_CONFIG = {
  title: 'PT. Fadjar Merah Indonesia - Solusi Outsourcing Terpercaya',
  description: 'PT. Fadjar Merah Indonesia menyediakan layanan outsourcing, rekrutmen, training, dan HR consulting profesional di Indonesia. Hubungi kami untuk solusi tenaga kerja terbaik.',
  keywords: [
    'outsourcing indonesia',
    'perusahaan outsourcing',
    'jasa outsourcing',
    'rekrutmen karyawan',
    'HR consulting',
    'training karyawan',
    'outsourcing depok',
    'manpower services',
    'recruitment services',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'PT. Fadjar Merah Indonesia',
  },
}