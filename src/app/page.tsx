import HeroSection    from '@/components/home/HeroSection'
import MarqueeSection from '@/components/home/MarqueeSection'
import ServicesSection from '@/components/home/ServicesSection'
import WhyChooseUs    from '@/components/home/WhyChooseUs'
import StatsSection   from '@/components/home/StatsSection'
import NewsPreview    from '@/components/home/NewsPreview'
import CTASection     from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <NewsPreview />
      <CTASection />
    </>
  )
}
