import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { NEWS_ARTICLES } from '@/lib/constants'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const categoryColors: Record<string, string> = {
  Outsourcing:     'bg-red-100 text-red-700',
  Ketenagakerjaan: 'bg-blue-100 text-blue-700',
  Rekrutmen:       'bg-violet-100 text-violet-700',
  'HR Management': 'bg-slate-100 text-slate-700',
  Training:        'bg-emerald-100 text-emerald-700',
}

const latest = NEWS_ARTICLES.slice(0, 3)

export default function NewsPreview() {
  return (
    <section className="section-padding bg-white relative">
      {/* top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      <div className="container-custom">
        <AnimateOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label mb-3">Portal Berita</div>
            <h2 className="section-title text-slate-900">
              Insight <span className="gradient-text">Terbaru</span>
            </h2>
          </div>
          <Link href="/berita"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:gap-3 transition-all whitespace-nowrap group">
            Lihat Semua Artikel
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((article, i) => (
            <AnimateOnScroll key={article.slug} delay={i * 0.1}>
              <Link href={`/berita/${article.slug}`} className="group block h-full">
                <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* thumbnail */}
                  <div className={`relative h-44 flex-shrink-0 ${article.image ? '' : `bg-gradient-to-br ${article.gradient}`} overflow-hidden`}>
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-10"
                          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-5xl font-black text-white/15 select-none">HR</span>
                        </div>
                      </>
                    )}
                    <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[article.category] ?? 'bg-slate-100 text-slate-600'}`}>
                        {article.category}
                      </span>
                      <span className="text-slate-300 text-xs">·</span>
                      <span className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Clock size={10} />{article.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 mb-2.5 group-hover:text-red-600 transition-colors leading-snug text-sm line-clamp-2 flex-1">
                      {article.title}
                    </h3>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-50 mt-auto">
                      <span className="text-slate-400 text-[11px]">{article.date}</span>
                      <span className="inline-flex items-center gap-1 text-red-600 text-xs font-semibold group-hover:gap-1.5 transition-all">
                        Baca <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
