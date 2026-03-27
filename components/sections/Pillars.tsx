import { pillars } from '@/data/content'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Pillars() {
  return (
    <section className="section-pad bg-cream" id="strategy" aria-labelledby="pillars-heading">
      <div className="container-site">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Investment Strategy"
            headline="Four Pillars. One Clear Conviction."
            subheadline="Our strategy is built around a focused thesis: the most compelling venture returns of this decade will come from a new class of emerging managers who are closer to the founders, the technologies, and the sectors they back."
            id="pillars-heading"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border" role="list">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.number} delay={index * 0.08}>
              <article
                className="bg-cream p-10 lg:p-12 group hover:bg-gold-subtle transition-colors duration-300"
                role="listitem"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-serif text-5xl font-medium text-border leading-none select-none" aria-hidden="true">
                    {pillar.number}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-charcoal transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-charcoal-light text-base leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
