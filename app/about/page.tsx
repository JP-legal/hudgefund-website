import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { aboutContent, partner, stats, siteConfig } from '@/data/content'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about HudgeFund Capital — our investment philosophy, thesis, values, and the team behind our fund-of-funds strategy.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-24 bg-cream" aria-labelledby="about-hero-heading">
        <div className="container-site">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-accent-line" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">About Us</span>
            </div>
            <h1
              id="about-hero-heading"
              className="heading-display text-5xl lg:text-7xl max-w-4xl mb-8"
            >
              {aboutContent.headline}
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-2xl">
              {aboutContent.lead}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-charcoal" aria-label="Key statistics">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedSection key={stat.label}>
                <p className="font-serif text-3xl text-cream font-medium mb-1">{stat.value}</p>
                <p className="text-xs text-cream/40 tracking-wide uppercase font-medium">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="section-pad bg-cream" aria-labelledby="story-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <SectionHeader
                eyebrow="Our Story"
                headline="Built on a Different Conviction."
                id="story-heading"
              />
              <div className="flex flex-col gap-6">
                {aboutContent.body.map((para, i) => (
                  <p key={i} className="text-charcoal-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <SectionHeader eyebrow="Our Values" headline="How We Operate." />
              <div className="flex flex-col gap-8">
                {aboutContent.values.map((value) => (
                  <div key={value.title} className="border-l-2 border-gold pl-6">
                    <h3 className="font-serif text-xl text-charcoal mb-2">{value.title}</h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Managing Partner */}
      <section className="section-pad bg-cream-dark" aria-labelledby="about-partner-heading">
        <div className="container-site">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-accent-line" aria-hidden="true" />
                <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">Leadership</span>
              </div>
              <h2 id="about-partner-heading" className="font-serif text-4xl text-charcoal mb-6">
                {partner.name}
              </h2>
              <p className="text-gold text-sm font-medium tracking-wide uppercase mb-6">{partner.title}</p>
              <div className="flex flex-col gap-5">
                {partner.bio.split('\n\n').filter(Boolean).map((para, i) => (
                  <p key={i} className="text-charcoal-light leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream" aria-label="About page call to action">
        <div className="container-site text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-charcoal-light mb-8 max-w-md mx-auto">
              Whether as a manager, LP, or partner — we would love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">Get in Touch</Button>
              <Button href="/portfolio" variant="secondary">View Our Portfolio</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
