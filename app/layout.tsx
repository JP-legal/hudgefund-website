import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'HudgeFund Capital — We Back the Managers Building Tomorrow',
    template: '%s | HudgeFund Capital',
  },
  description:
    'HudgeFund Capital is a fund of funds investing in emerging venture managers who are reshaping how capital flows to the most important companies of the next decade.',
  keywords: [
    'fund of funds',
    'venture capital',
    'emerging managers',
    'solo GPs',
    'alternative investments',
    'LP',
    'institutional investing',
  ],
  authors: [{ name: 'HudgeFund Capital' }],
  creator: 'HudgeFund Capital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hudgefund.com',
    siteName: 'HudgeFund Capital',
    title: 'HudgeFund Capital — We Back the Managers Building Tomorrow',
    description:
      'A fund of funds investing in the next generation of venture managers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HudgeFund Capital',
    description: 'A fund of funds investing in the next generation of venture managers.',
    creator: '@hudgefund',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://api.app.vai.gt-ai.io/static/embed/v2.js"
          data-embed-id="I-YTQIjoSL414A"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
