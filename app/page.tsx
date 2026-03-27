import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Pillars from '@/components/sections/Pillars'
import Thesis from '@/components/sections/Thesis'
import Partner from '@/components/sections/Partner'
import Portfolio from '@/components/sections/Portfolio'
import Insights from '@/components/sections/Insights'
import Advisory from '@/components/sections/Advisory'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'HudgeFund Capital — We Back the Managers Building Tomorrow',
  description:
    'HudgeFund Capital is a fund of funds investing in emerging venture managers reshaping how capital flows to the most important companies of the next decade.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Thesis />
      <Partner />
      <Portfolio />
      <Insights />
      <Advisory />
      <ContactCTA />
    </>
  )
}
