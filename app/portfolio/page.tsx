import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { portfolioFunds, siteConfig } from '@/data/content'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Our portfolio of emerging venture managers — a concentrated group of high-conviction fund managers we have partnered with across enterprise software, AI infrastructure, climate tech, and deep technology.',
}

export default function PortfolioPage() {
  const focusAreas = Array.from(new Set(portfolioFunds.map((f) => f.focus.split(' · ')[1])))

  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-cream" aria-labelledby="portfolio-hero-heading">
        <div className="container-site">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-accent-line" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">Backed Funds</span>
            </div>
            <h1
              id="portfolio-hero-heading"
              className="heading-display text-5xl lg:text-7xl max-w-3xl mb-8"
            >
              Our Portfolio.
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-2xl mb-6">
              We maintain a concentrated, high-conviction portfolio of emerging venture managers. Each fund in our portfolio represents a meaningful relationship built on alignment, trust, and a shared view of where the best returns will come from.
            </p>
          </AnimatedSection>

          {/* Focus area tags */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mt-8" aria-label="Fund focus areas">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 bg-cream-dark border border-border text-xs font-medium text-charcoal-muted tracking-wide"
                >
                  {area}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 bg-cream" aria-labelledby="funds-heading">
        <div className="container-site">
          <div className="sr-only" id="funds-heading">Portfolio funds</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {portfolioFunds.map((fund, index) => (
              <AnimatedSection key={fund.name} delay={index * 0.07}>
                <article
                  className="card-surface p-8 h-full flex flex-col group hover:border-gold/40 hover:shadow-sm transition-all duration-300"
                  role="listitem"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 bg-charcoal/5 border border-border flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <span className="font-serif text-sm font-medium text-charcoal/40">
                        {fund.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-xs text-charcoal-light/60 font-medium">
                      {fund.year}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl text-charcoal mb-1.5 group-hover:text-gold transition-colors duration-200">
                    {fund.name}
                  </h2>
                  <p className="text-xs font-medium text-gold tracking-wide uppercase mb-4">
                    {fund.focus}
                  </p>
                  <p className="text-charcoal-light text-sm leading-relaxed flex-1">
                    {fund.description}
                  </p>
                  <div className="mt-6 pt-5 border-t border-border">
                    <span className="text-xs text-charcoal-light/50 font-medium">{fund.fund}</span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LP Inquiry CTA */}
      <section className="py-20 bg-charcoal" aria-label="Investor inquiry">
        <div className="container-site">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl lg:text-4xl text-cream mb-4">
                Interested in Co-Investment Opportunities?
              </h2>
              <p className="text-cream/60 mb-8 leading-relaxed">
                Qualified LPs and family offices can gain access to our portfolio through direct fund commitments or co-investment vehicles. We would be happy to walk you through our current fund and pipeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact"
                  className="bg-gold hover:bg-gold-dark text-charcoal font-semibold"
                >
                  Inquire as an LP
                </Button>
                <Button
                  href="/about"
                  variant="secondary"
                  className="border-cream/20 text-cream hover:bg-cream hover:text-charcoal"
                >
                  Our Strategy
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
