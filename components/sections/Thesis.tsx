import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { aboutContent } from '@/data/content'

export default function Thesis() {
  return (
    <section
      className="section-pad bg-charcoal text-cream"
      id="thesis"
      aria-labelledby="thesis-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: headline and pull quote */}
          <AnimatedSection direction="left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">
                Our Thesis
              </span>
            </div>

            <h2
              id="thesis-heading"
              className="font-serif text-4xl lg:text-5xl text-cream leading-tight mb-8"
            >
              {aboutContent.headline}
            </h2>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-6 mb-10">
              <p className="text-cream/70 text-lg leading-relaxed italic font-serif">
                &ldquo;The next decade&apos;s most consequential venture returns will not come from legacy brand-name funds — they will come from a new class of disciplined, thesis-driven managers who are closer to the technology.&rdquo;
              </p>
            </blockquote>

            <Button href="/about" variant="secondary" className="border-cream/30 text-cream hover:bg-cream hover:text-charcoal">
              Learn About Our Approach
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </AnimatedSection>

          {/* Right: body text */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="flex flex-col gap-8">
              <p className="text-cream/80 text-lg leading-relaxed">
                {aboutContent.lead}
              </p>

              {aboutContent.body.map((paragraph, i) => (
                <p key={i} className="text-cream/60 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-1 gap-6 pt-4 border-t border-cream/10">
                {aboutContent.values.map((value) => (
                  <div key={value.title}>
                    <h3 className="text-sm font-semibold text-cream mb-1.5 tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-cream/50 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
