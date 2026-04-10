import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight, Tag, TrendingUp } from 'lucide-react'
import { NEWS_ARTICLES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Portal Berita - HR, Outsourcing & Ketenagakerjaan Indonesia',
  description: 'Baca artikel terkini seputar outsourcing, ketenagakerjaan, rekrutmen, HR management, dan training dari PT. Fadjar Merah Indonesia.',
  keywords: ['berita HR', 'outsourcing indonesia', 'ketenagakerjaan', 'rekrutmen', 'HR management', 'training karyawan'],
}

const categories = ['Semua', 'Outsourcing', 'Ketenagakerjaan', 'Rekrutmen', 'HR Management', 'Training']

const categoryColors: Record<string, string> = {
  Outsourcing: 'bg-red-100 text-red-700',
  Ketenagakerjaan: 'bg-blue-100 text-blue-700',
  Rekrutmen: 'bg-purple-100 text-purple-700',
  'HR Management': 'bg-slate-100 text-slate-700',
  Training: 'bg-green-100 text-green-700',
}

export default function BeritaPage() {
  const featured = NEWS_ARTICLES.find((a) => a.featured)
  const others = NEWS_ARTICLES.filter((a) => !a.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-red-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="relative container-custom">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={18} className="text-red-400" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Portal Berita</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Insight HR & Outsourcing <span className="text-red-400">Indonesia</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            Artikel terkini seputar ketenagakerjaan, manajemen SDM, dan tren industri outsourcing untuk membantu bisnis Anda berkembang.
          </p>
        </div>
      </section>

      {/* Category tabs */}
      <div className="bg-white border-b border-slate-100 sticky top-[64px] md:top-[80px] z-30">
        <div className="container-custom">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === 'Semua' ? '/berita' : `/berita?kategori=${encodeURIComponent(cat)}`}
                className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-all whitespace-nowrap"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 min-h-screen">
        <div className="container-custom py-10 md:py-14">

          {/* Featured article */}
          {featured && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-5 bg-red-600 rounded-full" />
                <h2 className="text-lg font-bold text-slate-900">Artikel Utama</h2>
              </div>
              <Link href={`/berita/${featured.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 grid md:grid-cols-2">
                  {/* Visual */}
                  <div className={`relative h-56 md:h-auto min-h-[220px] ${featured.image ? '' : `bg-gradient-to-br ${featured.gradient}`} overflow-hidden flex items-center justify-center`}>
                    {featured.image ? (
                      <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                        <div className="relative text-center p-8">
                          <div className="text-6xl md:text-7xl font-black text-white/20 leading-none select-none">HR</div>
                          <div className="text-white/80 text-sm font-semibold mt-2 uppercase tracking-widest">{featured.category}</div>
                        </div>
                      </>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-7 md:p-9 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? 'bg-slate-100 text-slate-600'}`}>
                        {featured.category}
                      </span>
                      <span className="text-slate-400 text-xs">·</span>
                      <span className="text-slate-400 text-xs flex items-center gap-1"><Clock size={11} />{featured.readTime} baca</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                      {featured.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-xs">{featured.date} · {featured.author}</span>
                      <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold group-hover:gap-2 transition-all">
                        Baca <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article grid */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-red-600 rounded-full" />
            <h2 className="text-lg font-bold text-slate-900">Artikel Terbaru</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((article) => (
              <Link key={article.slug} href={`/berita/${article.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-red-100 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className={`relative h-36 ${article.image ? '' : `bg-gradient-to-br ${article.gradient}`} overflow-hidden flex items-center justify-center flex-shrink-0`}>
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                        <div className="relative text-center">
                          <div className="text-4xl font-black text-white/20 leading-none select-none">HR</div>
                        </div>
                      </>
                    )}
                    <span className="absolute top-3 left-3 text-[11px] font-bold text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag size={11} className="text-slate-400" />
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[article.category] ?? 'bg-slate-100 text-slate-600'}`}>
                        {article.category}
                      </span>
                      <span className="text-slate-300 text-xs">·</span>
                      <span className="text-slate-400 text-[11px] flex items-center gap-1"><Clock size={10} />{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 mb-2.5 group-hover:text-red-600 transition-colors leading-snug text-sm md:text-base line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
                      <span className="text-slate-400 text-[11px]">{article.date}</span>
                      <span className="inline-flex items-center gap-1 text-red-600 text-xs font-semibold group-hover:gap-1.5 transition-all">
                        Baca <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-white py-14 border-t border-slate-100">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Butuh Konsultasi <span className="text-red-600">SDM?</span>
          </h2>
          <p className="text-slate-500 mb-7 max-w-md mx-auto">
            Tim profesional kami siap membantu kebutuhan outsourcing dan HR perusahaan Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Konsultasi Gratis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
