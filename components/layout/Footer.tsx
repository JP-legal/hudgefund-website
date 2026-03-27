import Link from 'next/link'
import { navLinks, siteConfig } from '@/data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream" role="contentinfo">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-7 h-7 bg-cream flex items-center justify-center flex-shrink-0">
                <span className="text-charcoal text-xs font-serif font-bold">H</span>
              </div>
              <span className="font-serif text-base font-semibold text-cream tracking-tight">
                {siteConfig.shortName}
                <span className="text-cream/60 font-normal"> Capital</span>
              </span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-cream transition-colors duration-200 text-sm"
                aria-label="HudgeFund Capital on LinkedIn"
              >
                LinkedIn
              </a>
              <span className="text-cream/20" aria-hidden="true">·</span>
              <a
                href={siteConfig.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-cream transition-colors duration-200 text-sm"
                aria-label="HudgeFund Capital on X / Twitter"
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-cream/40 mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.15em] uppercase text-cream/40 mb-5">
              Get in Touch
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-cream/60 hover:text-cream transition-colors duration-200 block mb-2"
            >
              {siteConfig.email}
            </a>
            <p className="text-sm text-cream/40">
              {siteConfig.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-cream/10">
          <p className="text-xs text-cream/30">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/20">
            Founded {siteConfig.founded} · {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
