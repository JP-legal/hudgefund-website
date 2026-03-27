import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { pressItems, siteConfig } from '@/data/content'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Media coverage, press mentions, and editorial insights from HudgeFund Capital on emerging venture managers, fund of funds investing, and the evolving venture landscape.',
}

// Placeholder additional articles for the full insights page
const additionalArticles = [
  {
    source: 'Pitchbook',
    headline: 'How Solo GPs Are Outperforming Multi-Partner Funds at Early Stage',
    excerpt:
      'New data from Pitchbook suggests that solo general partners consistently generate higher DPI in seed and pre-seed stages when compared with established multi-partner platforms.',
    date: 'September 2023',
    href: '#',
    type: 'Research',
  },
  {
    source: 'Axios',
    headline: 'The Structural Case for Backing Emerging Managers in 2024',
    excerpt:
      'As institutional capital continues to consolidate around the largest venture franchises, early data is showing that emerging managers are capturing a disproportionate share of top-decile returns.',
    date: 'August 2023',
    href: '#',
    type: 'Analysis',
  },
  {
    source: 'Bloomberg',
    headline: 'Venture Capital Returns Are Bifurcating — Here Is Why That Matters',
    excerpt:
      'A growing divergence between top-quartile emerging managers and large multi-stage funds is changing how sophisticated LPs think about portfolio construction.',
    date: 'July 2023',
    href: '#',
    type: 'Feature',
  },
]

export default function InsightsPage() {
  const allArticles = [
    ...pressItems.map((p) => ({ ...p, type: 'Press' })),
    ...additionalArticles,
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-cream" aria-labelledby="insights-hero-heading">
        <div className="container-site">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-accent-line" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">Media & Insights</span>
            </div>
            <h1
              id="insights-hero-heading"
              className="heading-display text-5xl lg:text-7xl max-w-3xl mb-8"
            >
              Press & Coverage.
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-2xl">
              Selected media coverage, research, and editorial perspectives on emerging venture and the evolving fund-of-funds landscape.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-24 bg-cream" aria-labelledby="articles-heading">
        <div className="container-site">
          <div className="sr-only" id="articles-heading">Articles and press coverage</div>

          {/* Featured article (first) */}
          <AnimatedSection className="mb-10">
            <a
              href={allArticles[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="block card-surface p-10 lg:p-14 group hover:border-charcoal/30 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              aria-label={`Featured: ${allArticles[0].headline}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-gold">
                  {allArticles[0].source}
                </span>
                <span className="text-charcoal-light/30" aria-hidden="true">·</span>
                <span className="text-xs text-charcoal-light/50">{allArticles[0].date}</span>
                <span className="ml-auto px-2.5 py-1 bg-gold/10 text-gold text-xs font-medium">
                  Featured
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4 leading-tight group-hover:text-charcoal/70 transition-colors">
                {allArticles[0].headline}
              </h2>
              <p className="text-charcoal-light leading-relaxed max-w-3xl mb-6">
                {allArticles[0].excerpt}
              </p>
              <span className="link-arrow">
                Read Full Article
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </AnimatedSection>

          {/* Remaining articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {allArticles.slice(1).map((article, index) => (
              <AnimatedSection key={article.headline} delay={index * 0.08}>
                <article role="listitem">
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full card-surface p-8 group hover:border-charcoal/30 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                    aria-label={`Read: ${article.headline}`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-semibold tracking-[0.12em] uppercase text-gold">
                        {article.source}
                      </span>
                      <span className="text-xs text-charcoal-light/50">{article.date}</span>
                    </div>
                    <h2 className="font-serif text-xl text-charcoal leading-snug mb-3 group-hover:text-charcoal/70 transition-colors">
                      {article.headline}
                    </h2>
                    <p className="text-charcoal-light text-sm leading-relaxed mb-5">
                      {article.excerpt}
                    </p>
                    <span className="link-arrow text-xs">
                      Read Article
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup placeholder */}
      <section className="py-20 bg-cream-dark border-t border-border" aria-label="Stay informed">
        <div className="container-site">
          <AnimatedSection>
            <div className="max-w-lg mx-auto text-center">
              <h2 className="font-serif text-3xl text-charcoal mb-3">Stay Informed.</h2>
              <p className="text-charcoal-light mb-8">
                Occasional perspectives on the emerging manager landscape, fund of funds strategy, and the venture ecosystem.
              </p>
              <Button href={`mailto:${siteConfig.email}?subject=Subscribe to HudgeFund Insights`}>
                Subscribe via Email
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
