import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { CalculatorSection } from '@/components/calculators'

export const metadata: Metadata = { title: 'Calculators | Padhye Synergetic Company' }

export default function CalculatorsPage() {
  return <><SiteNav /><main>
    <section className="page-hero"><div className="container"><span className="eyebrow">FINANCIAL TOOLS</span><h1>Plan your finances with interactive calculators.</h1><p>Estimate investment growth, understand loan repayments and explore financial goals using illustrative tools.</p></div></section>
    <CalculatorSection />
  </main><SiteFooter /></>
}
