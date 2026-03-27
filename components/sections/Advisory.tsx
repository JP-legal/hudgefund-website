import { advisoryServices } from '@/data/content'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function Advisory() {
  return (
    <section className="section-pad bg-cream" id="advisory" aria-labelledby="advisory-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Header column */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <SectionHeader
              eyebrow="Advisory & Services"
              headline="How We Can Work Together."
              subheadline="Beyond capital, we offer hands-on strategic support to the managers and allocators in our network."
              id="advisory-heading"
            />
            <Button href="/contact">
              Start a Conversation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </AnimatedSection>

          {/* Services list */}
          <div className="lg:col-span-3 flex flex-col gap-8" role="list">
            {advisoryServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <article
                  className="border-t border-border pt-8 group"
                  role="listitem"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {service.title}
                    </h3>
                    <span
                      className="text-xs font-medium text-charcoal-light/40 mt-1.5 flex-shrink-0 ml-4"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-charcoal-light leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-2" aria-label={`${service.title} details`}>
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-sm text-charcoal-muted">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
