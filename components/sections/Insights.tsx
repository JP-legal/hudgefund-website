import { pressItems } from '@/data/content'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function Insights() {
  return (
    <section className="section-pad bg-cream-dark" id="insights" aria-labelledby="insights-heading">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Media & Insights"
              headline="In the Press."
              className="mb-0"
              id="insights-heading"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Button href="/insights" variant="secondary">
              All Coverage
            </Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" role="list">
          {pressItems.map((item, index) => (
            <AnimatedSection key={item.headline} delay={index * 0.1}>
              <article className="group" role="listitem">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full card-surface p-8 hover:border-charcoal/30 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                  aria-label={`Read: ${item.headline} — ${item.source}`}
                >
                  {/* Source + date */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold tracking-[0.12em] uppercase text-gold">
                      {item.source}
                    </span>
                    <span className="text-xs text-charcoal-light/50">
                      {item.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-serif text-xl text-charcoal leading-snug mb-4 group-hover:text-charcoal/70 transition-colors duration-200">
                    {item.headline}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                    {item.excerpt}
                  </p>

                  {/* Read more indicator */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-charcoal-muted group-hover:text-gold transition-colors duration-200">
                    Read Article
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
