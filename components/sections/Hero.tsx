'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig, stats } from '@/data/content'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-cream overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 39px, #111 39px, #111 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #111 39px, #111 40px)',
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="container-site relative z-10 pt-32 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="gold-accent-line" aria-hidden="true" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
              Fund of Funds · Emerging Managers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="heading-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 text-balance"
          >
            We Back the Managers
            <br />
            <em className="not-italic text-charcoal/50">Building Tomorrow.</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg lg:text-xl text-charcoal-light leading-relaxed max-w-2xl mb-12 text-balance"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio" className="btn-primary">
              Explore Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Work With Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 pt-10 border-t border-border grid grid-cols-2 lg:grid-cols-4 gap-8"
          aria-label="Key figures"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl lg:text-4xl text-charcoal font-medium mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-charcoal-light tracking-wide uppercase font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs tracking-[0.15em] uppercase text-charcoal-light/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-charcoal/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}
