import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subheadline?: string
  align?: 'left' | 'center'
  className?: string
  id?: string
}

export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = 'left',
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-14',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          <div className="gold-accent-line" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-gold">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        id={id}
        className={cn(
          'heading-display text-4xl lg:text-5xl max-w-3xl',
          align === 'center' && 'mx-auto'
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            'mt-5 text-charcoal-light text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  )
}
