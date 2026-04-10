import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { COMPANY_INFO, SEO_CONFIG } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/shared/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
  preload: false,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'optional',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fadjarmerah.co.id'),
  title: {
    default: SEO_CONFIG.title,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}