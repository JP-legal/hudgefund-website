// ─────────────────────────────────────────────
// Site-wide configuration — edit here to update
// all content across the website.
// ─────────────────────────────────────────────

export const siteConfig = {
  name: 'HudgeFund Capital',
  shortName: 'HudgeFund',
  tagline: 'We Back the Managers Building Tomorrow.',
  description:
    'HudgeFund Capital is a fund of funds investing in emerging venture managers who are reshaping how capital flows to the most important companies of the next decade.',
  email: 'hello@hudgefund.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  founded: '2019',
  location: 'New York, NY',
}

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

// ─────────────────────────────────────────────
// Core Strategy Pillars
// ─────────────────────────────────────────────

export const pillars = [
  {
    number: '01',
    title: 'Emerging Managers',
    description:
      'We seek first and second-time fund managers with differentiated access, proprietary networks, and the conviction to act contrarily when it counts most.',
  },
  {
    number: '02',
    title: 'U.S. Focus',
    description:
      'Our primary allocation targets U.S.-based funds with deep local presence, sector-specific expertise, and the ability to win competitive rounds.',
  },
  {
    number: '03',
    title: 'Solo GPs',
    description:
      'We have a strong thesis around solo general partners — high-conviction, low-overhead, and deeply aligned with their LPs and the founders they back.',
  },
  {
    number: '04',
    title: 'Thesis-Driven Technology',
    description:
      'We prioritize managers with a clear and repeatable investment framework focused on enterprise software, AI infrastructure, and deep technology platforms.',
  },
]

// ─────────────────────────────────────────────
// Managing Partner
// ─────────────────────────────────────────────

export const partner = {
  name: 'Alexandra Reid',
  title: 'Founder & Managing Partner',
  initials: 'AR',
  bio: `Alexandra Reid founded HudgeFund Capital after more than fifteen years at the intersection of institutional asset management and early-stage venture. She began her career at a multi-billion dollar endowment, where she led the alternative investments program and developed a deep appreciation for the structural advantages of emerging managers.

Prior to founding HudgeFund, Alexandra served as a principal at a venture fund-of-funds where she deployed over $300M across 40 underlying managers. She holds an MBA from Wharton and a BA in Economics from Princeton.`,
  linkedin: 'https://linkedin.com',
  credentials: [
    '15+ years in institutional investing',
    'Former Principal, Apex Fund of Funds',
    'MBA, The Wharton School',
    '40+ manager relationships',
  ],
}

// ─────────────────────────────────────────────
// Portfolio Funds
// ─────────────────────────────────────────────

export const portfolioFunds = [
  {
    name: 'Northgate Ventures',
    focus: 'Enterprise SaaS · Pre-Seed',
    description:
      'Backing infrastructure and workflow tools for the modern enterprise, with particular conviction around vertical software categories.',
    fund: 'Fund I',
    year: '2020',
  },
  {
    name: 'Sable Capital',
    focus: 'AI Infrastructure · Seed',
    description:
      'Focused on the foundational layers that make applied AI possible — compute orchestration, data pipelines, and developer tooling.',
    fund: 'Fund I & II',
    year: '2021',
  },
  {
    name: 'Ironwood Partners',
    focus: 'Climate Tech · Pre-Seed',
    description:
      'Investing in the technologies and business models enabling the global energy transition, from grid software to industrial decarbonization.',
    fund: 'Fund I',
    year: '2021',
  },
  {
    name: 'Meridian Micro',
    focus: 'Developer Tools · Seed',
    description:
      'Supporting the next generation of tools that help engineering teams ship faster, collaborate better, and build more reliable systems.',
    fund: 'Fund II',
    year: '2022',
  },
  {
    name: 'Atlas B2B Fund',
    focus: 'B2B SaaS · Seed',
    description:
      'A disciplined, thesis-driven fund focused on software for finance, legal, and operations teams at mid-market and enterprise companies.',
    fund: 'Fund I',
    year: '2022',
  },
  {
    name: 'Foundry Collective',
    focus: 'Deep Tech · Pre-Seed',
    description:
      'Partnering with scientists and engineers commercializing breakthroughs in materials science, robotics, and advanced manufacturing.',
    fund: 'Fund I',
    year: '2023',
  },
]

// ─────────────────────────────────────────────
// Press / Media
// ─────────────────────────────────────────────

export const pressItems = [
  {
    source: 'TechCrunch',
    headline: 'Why the Emerging Manager Renaissance Is Here to Stay',
    excerpt:
      'A new generation of fund-of-funds operators is betting that emerging venture managers — solo GPs and first-timers — will outperform their established peers.',
    date: 'March 2024',
    href: '#',
  },
  {
    source: 'The Information',
    headline: 'The LPs Quietly Backing Solo GPs at Scale',
    excerpt:
      'While institutional LPs have been slow to adapt, a handful of specialized allocators are building concentrated positions in solo GP vehicles with outsized early returns.',
    date: 'January 2024',
    href: '#',
  },
  {
    source: 'Forbes',
    headline: 'Fund of Funds for the Next Generation of Venture Capital',
    excerpt:
      'HudgeFund Capital represents a growing cohort of modern fund-of-funds managers who see structural alpha in backing underallocated emerging managers.',
    date: 'November 2023',
    href: '#',
  },
]

// ─────────────────────────────────────────────
// Advisory / Services
// ─────────────────────────────────────────────

export const advisoryServices = [
  {
    title: 'GP Advisory',
    description:
      'Strategic guidance for emerging managers on fund structure, LP strategy, portfolio construction, and positioning. We work alongside GPs from fund formation through closing.',
    details: ['Fund strategy & positioning', 'LP targeting & narrative development', 'Portfolio construction frameworks', 'Ongoing operational support'],
  },
  {
    title: 'LP Strategy',
    description:
      'We advise family offices, endowments, and foundations seeking exposure to emerging venture through a curated, actively managed fund-of-funds structure.',
    details: ['Access to emerging manager pipeline', 'Co-investment opportunities', 'Portfolio monitoring & reporting', 'Market intelligence & deal flow'],
  },
  {
    title: 'Fund Formation',
    description:
      'For first-time managers, we offer hands-on support navigating the legal, structural, and operational requirements of launching a new institutional fund.',
    details: ['Legal structure & documentation', 'Fund administrator selection', 'Compliance frameworks', 'First LP introductions'],
  },
]

// ─────────────────────────────────────────────
// Stats / Social Proof
// ─────────────────────────────────────────────

export const stats = [
  { value: '$240M+', label: 'Assets Under Management' },
  { value: '18', label: 'Portfolio Managers' },
  { value: '6', label: 'Vintage Years' },
  { value: '3.2×', label: 'Average TVPI (realized)' },
]

// ─────────────────────────────────────────────
// About page content
// ─────────────────────────────────────────────

export const aboutContent = {
  headline: 'Capital Built for a New Era of Venture.',
  lead: 'HudgeFund Capital was founded on the belief that the most consequential venture returns of the next decade will come not from legacy brand-name funds, but from a new class of disciplined, thesis-driven managers who are closer to the technology, the founders, and the industries they back.',
  body: [
    'Traditional fund-of-funds models were designed for an era of concentrated institutional capital. We operate differently — with a more selective portfolio, higher conviction per manager, and a genuine partnership orientation that goes beyond writing a check.',
    'We spend years building relationships before making commitments. Our due diligence is deep, our portfolio is intentional, and our value-add extends well past the capital we deploy.',
    'This is long-term work. We measure our success in decades, not quarters, and we build our manager relationships accordingly.',
  ],
  values: [
    {
      title: 'Conviction Over Diversification',
      description:
        'We maintain a concentrated, high-conviction portfolio. We believe in our managers deeply enough to commit meaningfully, not spread thin across dozens of relationships.',
    },
    {
      title: 'Partnership as a Practice',
      description:
        'We are active, available partners to every manager in our portfolio. We share networks, provide perspective, and serve as a resource — not just a name on a cap table.',
    },
    {
      title: 'Structural Edge Seeking',
      description:
        'We look for managers with genuine, durable advantages — whether from proprietary deal flow, domain expertise, or community access that established funds simply cannot replicate.',
    },
  ],
}
