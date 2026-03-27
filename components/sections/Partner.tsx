import AnimatedSection from '@/components/ui/AnimatedSection'
import { partner } from '@/data/content'

export default function Partner() {
  return (
    <section
      className="section-pad bg-cream-dark"
      id="team"
      aria-labelledby="partner-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20 items-start">
          {/* Photo column */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative">
              {/* Placeholder portrait */}
              <div
                className="w-full aspect-[3/4] bg-gradient-to-br from-charcoal/10 to-charcoal/5 flex items-end justify-center overflow-hidden"
                role="img"
                aria-label={`Portrait of ${partner.name}`}
              >
                {/* Stylized initials as placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-8xl font-medium text-charcoal/10 select-none" aria-hidden="true">
                    {partner.initials}
                  </span>
                </div>
                <div className="relative z-10 w-full p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                  <p className="text-cream font-serif text-xl font-medium">{partner.name}</p>
                  <p className="text-cream/60 text-sm mt-0.5">{partner.title}</p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold" aria-hidden="true" />
            </div>

            {/* Credentials */}
            <ul className="mt-8 flex flex-col gap-3" aria-label="Credentials">
              {partner.credentials.map((cred) => (
                <li key={cred} className="flex items-center gap-3 text-sm text-charcoal-muted">
                  <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                  {cred}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Bio column */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-accent-line" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">
                Managing Partner
              </span>
            </div>

            <h2
              id="partner-heading"
              className="font-serif text-4xl lg:text-5xl text-charcoal leading-tight mb-8"
            >
              {partner.name}
            </h2>

            <div className="flex flex-col gap-6 mb-10">
              {partner.bio.split('\n\n').filter(Boolean).map((para, i) => (
                <p key={i} className="text-charcoal-light leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>

            <a
              href={partner.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
              aria-label={`${partner.name} on LinkedIn (opens in new tab)`}
            >
              <svg className="w-4 h-4 text-charcoal-light" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              View LinkedIn Profile
              <svg className="w-3.5 h-3.5 text-charcoal-light group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
