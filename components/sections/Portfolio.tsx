import { portfolioFunds } from '@/data/content'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function Portfolio() {
  return (
    <section className="section-pad bg-cream" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Backed Funds"
              headline="Our Portfolio."
              subheadline="A concentrated group of emerging managers we believe in deeply."
              className="mb-0"
              id="portfolio-heading"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Button href="/portfolio" variant="secondary">
              View All Funds
            </Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {portfolioFunds.map((fund, index) => (
            <AnimatedSection key={fund.name} delay={index * 0.07}>
              <article
                className="card-surface p-8 h-full flex flex-col group hover:border-gold/40 hover:shadow-sm transition-all duration-300"
                role="listitem"
              >
                {/* Fund header */}
                <div className="flex items-start justify-between mb-5">
                  {/* Fund logo placeholder */}
                  <div className="w-10 h-10 bg-charcoal/5 border border-border flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <span className="font-serif text-sm font-medium text-charcoal/40">
                      {fund.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs text-charcoal-light/60 font-medium">
                    {fund.year}
                  </span>
                </div>

                {/* Fund name and focus */}
                <h3 className="font-serif text-xl text-charcoal mb-1.5 group-hover:text-gold transition-colors duration-200">
                  {fund.name}
                </h3>
                <p className="text-xs font-medium text-gold tracking-wide uppercase mb-4">
                  {fund.focus}
                </p>

                {/* Description */}
                <p className="text-charcoal-light text-sm leading-relaxed flex-1">
                  {fund.description}
                </p>

                {/* Fund tag */}
                <div className="mt-6 pt-5 border-t border-border">
                  <span className="text-xs text-charcoal-light/50 font-medium">
                    {fund.fund}
                  </span>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
