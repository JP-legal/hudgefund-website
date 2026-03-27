import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/content'

export default function ContactCTA() {
  return (
    <section
      className="section-pad bg-charcoal text-cream overflow-hidden relative"
      aria-label="Contact call to action"
    >
      {/* Background decorative element */}
      <div
        className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 50%, #B8962E 0%, transparent 60%)',
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-gold" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">
                Get In Touch
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-6xl text-cream leading-tight mb-6">
              Let&apos;s Build
              <br />
              <span className="text-cream/40">Something Together.</span>
            </h2>

            <p className="text-cream/60 text-lg leading-relaxed max-w-xl mb-10">
              Whether you are an emerging manager seeking an LP partner, a family office exploring emerging venture exposure, or a founder looking to connect — we would love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold border-none"
              >
                Start a Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-secondary border-cream/20 text-cream hover:bg-cream hover:text-charcoal"
              >
                {siteConfig.email}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
