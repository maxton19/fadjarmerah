import { MetadataRoute } from 'next'
import { NEWS_ARTICLES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ptfadjarmerahindonesia.co.id'
  
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tentang-fadjar-merah-indonesia`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan-outsourcing-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontak-outsourcing-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/karir-outsourcing-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/berita-outsourcing`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
  ]

  // Primary Service Pages - Jakarta Keywords
  const servicePages = [
    {
      url: `${baseUrl}/outsourcing-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/perusahaan-outsourcing-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jasa-outsourcing-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/outsourcing-karyawan-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vendor-outsourcing-jakarta-terpercaya`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Satpam (Security) Service Pages
  const satpamPages = [
    {
      url: `${baseUrl}/jasa-satpam-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/outsourcing-satpam-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/perusahaan-security-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jasa-keamanan-gedung-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/satpam-profesional-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/security-guard-jakarta-perusahaan`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-security-terbaik-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Supir (Driver) Service Pages
  const supirPages = [
    {
      url: `${baseUrl}/jasa-supir-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/outsourcing-supir-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/driver-perusahaan-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jasa-driver-harian-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/supir-pribadi-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-driver-profesional`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // OB / Office Boy / Cleaning Service Pages
  const obPages = [
    {
      url: `${baseUrl}/jasa-ob-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/outsourcing-ob-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cleaning-service-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/office-boy-perusahaan-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jasa-kebersihan-kantor-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-cleaning-service`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jasa-ob-cleaning-service-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Bodyguard Service Pages
  const bodyguardPages = [
    {
      url: `${baseUrl}/jasa-bodyguard-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bodyguard-profesional-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pengawal-pribadi-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jasa-keamanan-vip-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-bodyguard-indonesia`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bodyguard-perusahaan-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Geo-Targeted Pages - Jakarta Areas
  const geoPages = [
    {
      url: `${baseUrl}/outsourcing-jakarta-selatan`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-jakarta-barat`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-jakarta-timur`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-jakarta-utara`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-jakarta-pusat`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jasa-satpam-jakarta-selatan`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/driver-jakarta-barat`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bodyguard-jakarta-pusat`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Brand Keywords Pages
  const brandPages = [
    {
      url: `${baseUrl}/fadjar-merah-indonesia-outsourcing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pt-fadjar-merah-indonesia`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jasa-satpam-fadjar-merah-indonesia`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-terpercaya-fadjar-merah-indonesia`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vendor-security-fadjar-merah-indonesia`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Long-tail High Conversion Pages
  const longTailPages = [
    {
      url: `${baseUrl}/perusahaan-outsourcing-satpam-terbaik-di-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jasa-supir-perusahaan-terpercaya-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outsourcing-ob-murah-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jasa-bodyguard-profesional-untuk-eksekutif-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vendor-outsourcing-lengkap-satpam-supir-ob-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/perusahaan-outsourcing-legal-dan-bersertifikat-jakarta`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // News articles
  const newsPages = NEWS_ARTICLES.map((article) => ({
    url: `${baseUrl}/berita/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...mainPages,
    ...servicePages,
    ...satpamPages,
    ...supirPages,
    ...obPages,
    ...bodyguardPages,
    ...geoPages,
    ...brandPages,
    ...longTailPages,
    ...newsPages,
  ]
}
