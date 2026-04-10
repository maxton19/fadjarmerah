import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from 'lucide-react'
import { NEWS_ARTICLES } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.category, 'outsourcing indonesia', 'HR management', 'ketenagakerjaan'],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

const categoryColors: Record<string, string> = {
  Outsourcing: 'bg-red-100 text-red-700',
  Ketenagakerjaan: 'bg-blue-100 text-blue-700',
  Rekrutmen: 'bg-purple-100 text-purple-700',
  'HR Management': 'bg-slate-100 text-slate-700',
  Training: 'bg-green-100 text-green-700',
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl md:text-2xl font-bold text-slate-900 mt-10 mb-4 leading-snug">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <h3 key={i} className="text-base md:text-lg font-bold text-slate-900 mt-6 mb-2">
          {line.replace(/\*\*/g, '')}
        </h3>
      )
    } else if (line.match(/^\d+\.\s\*\*/)) {
      elements.push(
        <p key={i} className="text-slate-700 leading-relaxed mb-3">
          <strong>{line.replace(/^\d+\.\s\*\*(.+?)\*\*/, '$1')}</strong>
          {line.replace(/^\d+\.\s\*\*.+?\*\*/, '')}
        </p>
      )
    } else if (line.startsWith('- ')) {
      const bullets: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        bullets.push(lines[i].replace('- ', ''))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 text-slate-700 mb-4 ml-2">
          {bullets.map((b, bi) => <li key={bi} className="leading-relaxed">{b}</li>)}
        </ul>
      )
      continue
    } else if (line.trim() !== '') {
      // Process inline bold (**text**)
      const parts = line.split(/(\*\*[^*]+\*\*)/)
      const rendered = parts.map((part, pi) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pi}>{part.slice(2, -2)}</strong>
        }
        return part
      })
      elements.push(
        <p key={i} className="text-slate-700 leading-relaxed mb-4">
          {rendered}
        </p>
      )
    }

    i++
  }

  return elements
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = NEWS_ARTICLES.filter(
    (a) => a.slug !== slug && (a.category === article.category || a.featured)
  ).slice(0, 3)

  return (
    <>
      {/* Article header */}
      <section className={`${article.image ? 'bg-slate-950' : `bg-gradient-to-br ${article.gradient}`} text-white py-14 md:py-20 relative overflow-hidden`}>
        {article.image && (
          <>
            <Image src={article.image} alt={article.title} fill className="object-cover opacity-25" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/82 via-slate-950/78 to-slate-950/96" />
          </>
        )}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
        />
        <div className="relative container-custom">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/berita" className="hover:text-white transition-colors">Portal Berita</Link>
            <span>/</span>
            <span className="text-white/80 truncate max-w-[200px]">{article.title}</span>
          </div>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${categoryColors[article.category] ?? 'bg-white/20 text-white'}`}>
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-sm">
              <Clock size={13} /> {article.readTime} baca
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-sm">
              <Calendar size={13} /> {article.date}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-5 [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-white/80 text-sm [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
            <User size={14} />
            <span>{article.author}</span>
          </div>
        </div>
      </section>

      {/* Content + sidebar */}
      <div className="bg-slate-50 min-h-screen">
        <div className="container-custom py-10 md:py-14">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Article body */}
            <article className="lg:col-span-2">
              {/* Back link */}
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-red-600 transition-colors mb-8"
              >
                <ArrowLeft size={15} /> Kembali ke Portal Berita
              </Link>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-7 md:p-10">
                {/* Excerpt */}
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-red-500 pl-5 mb-8 italic">
                  {article.excerpt}
                </p>

                {/* Content */}
                <div className="prose-content">
                  {renderContent(article.content)}
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  <Tag size={14} className="text-slate-400 mt-0.5" />
                  {[article.category, 'Outsourcing Indonesia', 'HR Management', 'PT. Fadjar Merah Indonesia'].map((tag, index) => (
                    <span key={`${tag}-${index}`} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mt-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Ditulis oleh</div>
                  <div className="font-bold text-slate-900">{article.author}</div>
                  <div className="text-sm text-slate-500 mt-1">
                    Tim profesional PT. Fadjar Merah Indonesia dengan keahlian di bidang HR, outsourcing, dan ketenagakerjaan Indonesia.
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA box */}
              <div className="bg-gradient-to-br from-slate-900 to-red-950 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3 leading-tight">Butuh Solusi SDM?</h3>
                <p className="text-white/65 text-sm mb-5 leading-relaxed">
                  Konsultasikan kebutuhan outsourcing dan HR perusahaan Anda dengan tim ahli kami.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-xl transition-all text-sm"
                >
                  Konsultasi Gratis
                </Link>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-red-600 rounded-full" />
                    Artikel Terkait
                  </h3>
                  <div className="space-y-4">
                    {related.map((rel) => (
                      <Link key={rel.slug} href={`/berita/${rel.slug}`} className="group block">
                        <div className="flex gap-3">
                          <div className={`relative w-14 h-14 rounded-xl ${rel.image ? 'bg-slate-100' : `bg-gradient-to-br ${rel.gradient}`} overflow-hidden flex-shrink-0 flex items-center justify-center`}>
                            {rel.image ? (
                              <Image
                                src={rel.image}
                                alt={rel.title}
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            ) : (
                              <span className="text-white/30 text-xs font-black">HR</span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] text-slate-400 mb-0.5">{rel.category}</div>
                            <h4 className="text-sm font-semibold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                              {rel.title}
                            </h4>
                            <div className="text-[11px] text-slate-400 mt-1">{rel.readTime} baca</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/berita"
                    className="mt-5 flex items-center justify-center gap-1.5 text-sm text-red-600 font-semibold hover:gap-2 transition-all border-t border-slate-50 pt-4"
                  >
                    Lihat Semua Artikel <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              {/* Categories */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-red-600 rounded-full" />
                  Kategori
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Outsourcing', 'Ketenagakerjaan', 'Rekrutmen', 'HR Management', 'Training'].map((cat) => (
                    <Link
                      key={cat}
                      href={`/berita?kategori=${encodeURIComponent(cat)}`}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${categoryColors[cat] ?? 'bg-slate-100 text-slate-600'} hover:opacity-80`}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  )
}
