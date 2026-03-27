'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const subjectOptions = [
  'LP / Investment Inquiry',
  'GP / Manager Introduction',
  'Advisory Services',
  'Press & Media',
  'General Inquiry',
]

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Your name is required.'
  }

  if (!data.email.trim()) {
    errors.email = 'Your email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!data.message.trim()) {
    errors.message = 'Please include a message.'
  } else if (data.message.trim().length < 20) {
    errors.message = 'Your message must be at least 20 characters.'
  }

  return errors
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: subjectOptions[0],
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    // Mock async submission — replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1400))

    // Simulate success (in production: call your API route or form service)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-5 py-10" role="alert" aria-live="polite">
        <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center">
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-charcoal mb-2">Message Received.</h3>
          <p className="text-charcoal-light leading-relaxed max-w-sm">
            Thank you for reaching out. We review all inquiries carefully and will be in touch within 2–3 business days.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus('idle')
            setFormData({ name: '', email: '', company: '', subject: subjectOptions[0], message: '' })
          }}
          className="text-sm text-charcoal-muted hover:text-charcoal underline underline-offset-4 transition-colors mt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-medium text-charcoal tracking-wide uppercase">
            Full Name <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Alexandra Reid"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 bg-cream border text-charcoal text-sm placeholder-charcoal-light/40 outline-none focus:border-charcoal transition-colors ${
              errors.name ? 'border-red-400' : 'border-border'
            }`}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-xs" role="alert">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-medium text-charcoal tracking-wide uppercase">
            Email Address <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-3 bg-cream border text-charcoal text-sm placeholder-charcoal-light/40 outline-none focus:border-charcoal transition-colors ${
              errors.email ? 'border-red-400' : 'border-border'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs" role="alert">{errors.email}</p>
          )}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-xs font-medium text-charcoal tracking-wide uppercase">
            Company / Fund
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Ventures"
            className="w-full px-4 py-3 bg-cream border border-border text-charcoal text-sm placeholder-charcoal-light/40 outline-none focus:border-charcoal transition-colors"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-xs font-medium text-charcoal tracking-wide uppercase">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-cream border border-border text-charcoal text-sm outline-none focus:border-charcoal transition-colors appearance-none cursor-pointer"
          >
            {subjectOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 mb-8">
        <label htmlFor="message" className="text-xs font-medium text-charcoal tracking-wide uppercase">
          Message <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your fund, your goals, or how you'd like to work together..."
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 bg-cream border text-charcoal text-sm placeholder-charcoal-light/40 outline-none focus:border-charcoal transition-colors resize-none ${
            errors.message ? 'border-red-400' : 'border-border'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs" role="alert">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="sm:min-w-48"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </Button>

        {status === 'error' && (
          <p className="text-red-500 text-sm" role="alert">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <p className="text-xs text-charcoal-light/50">
          We respect your privacy and will never share your information.
        </p>
      </div>
    </form>
  )
}
