'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isHeroPage = pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || !isHeroPage || menuOpen
          ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="container-site flex items-center justify-between h-16 lg:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label={`${siteConfig.name} — return to homepage`}
        >
          <div className="w-7 h-7 bg-charcoal flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <span className="text-cream text-xs font-serif font-bold">H</span>
          </div>
          <span className={cn(
            'font-serif text-base font-semibold tracking-tight transition-colors duration-200',
            scrolled || !isHeroPage ? 'text-charcoal' : 'text-charcoal'
          )}>
            {siteConfig.shortName}
            <span className="text-charcoal-muted font-normal"> Capital</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'nav-link',
                pathname === link.href && 'text-charcoal font-semibold'
              )}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="btn-primary text-xs tracking-widest uppercase"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-charcoal"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <div className="w-5 flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={cn(
                'block h-px bg-current transition-all duration-200',
                menuOpen ? 'rotate-45 translate-y-2' : ''
              )}
            />
            <span
              className={cn(
                'block h-px bg-current transition-all duration-200',
                menuOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={cn(
                'block h-px bg-current transition-all duration-200',
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden border-t border-border bg-cream/98 backdrop-blur-sm overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-96' : 'max-h-0'
        )}
        aria-hidden={!menuOpen}
      >
        <div className="container-site py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-base font-medium text-charcoal-muted hover:text-charcoal transition-colors py-1',
                pathname === link.href && 'text-charcoal font-semibold'
              )}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-2 text-center text-xs tracking-widest uppercase"
            tabIndex={menuOpen ? 0 : -1}
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </header>
  )
}
