import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from '@/components/sections/ContactForm'
import { siteConfig, advisoryServices } from '@/data/content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with HudgeFund Capital — whether you are an emerging manager, LP, or potential partner, we would love to hear from you.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-40 pb-20 bg-charcoal text-cream" aria-labelledby="contact-hero-heading">
        <div className="container-site">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gold" aria-hidden="true" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">Get In Touch</span>
            </div>
            <h1
              id="contact-hero-heading"
              className="font-serif text-5xl lg:text-7xl text-cream max-w-3xl mb-8 leading-tight"
            >
              Let&apos;s Start a Conversation.
            </h1>
            <p className="text-xl text-cream/60 leading-relaxed max-w-2xl">
              Whether you are a first-time fund manager seeking an LP partner, a family office exploring emerging venture exposure, or a founder — we would love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-pad bg-cream" aria-labelledby="contact-form-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left: info */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <h2 id="contact-form-heading" className="font-serif text-3xl text-charcoal mb-8">
                How Can We Help?
              </h2>

              <div className="flex flex-col gap-8 mb-12">
                {advisoryServices.map((service) => (
                  <div key={service.title}>
                    <h3 className="font-medium text-sm text-charcoal mb-1.5 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct contact */}
              <div className="border-t border-border pt-8">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-charcoal-light mb-4">
                  Direct Contact
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-charcoal font-medium hover:text-gold transition-colors duration-200 block mb-2"
                >
                  {siteConfig.email}
                </a>
                <p className="text-sm text-charcoal-light">{siteConfig.location}</p>

                <div className="flex items-center gap-4 mt-5">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-charcoal-muted hover:text-charcoal transition-colors"
                    aria-label="LinkedIn (opens in new tab)"
                  >
                    LinkedIn
                  </a>
                  <span className="text-border" aria-hidden="true">·</span>
                  <a
                    href={siteConfig.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-charcoal-muted hover:text-charcoal transition-colors"
                    aria-label="X / Twitter (opens in new tab)"
                  >
                    X / Twitter
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-3">
              <div className="bg-cream-dark border border-border p-8 lg:p-10">
                <h2 className="font-serif text-2xl text-charcoal mb-2">
                  Send Us a Message
                </h2>
                <p className="text-charcoal-light text-sm mb-8">
                  We read every submission and respond to all serious inquiries within 2–3 business days.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Response time note */}
      <section className="py-14 bg-cream-dark border-t border-border" aria-label="Response commitment">
        <div className="container-site">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-16">
              <div>
                <p className="font-serif text-2xl text-charcoal mb-1">2–3 Business Days</p>
                <p className="text-xs text-charcoal-light tracking-wide uppercase font-medium">Our Response Time</p>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" aria-hidden="true" />
              <div>
                <p className="font-serif text-2xl text-charcoal mb-1">Every Inquiry</p>
                <p className="text-xs text-charcoal-light tracking-wide uppercase font-medium">Personally Reviewed</p>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" aria-hidden="true" />
              <div>
                <p className="font-serif text-2xl text-charcoal mb-1">No Cold Pitches</p>
                <p className="text-xs text-charcoal-light tracking-wide uppercase font-medium">Warm Introductions Preferred</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
