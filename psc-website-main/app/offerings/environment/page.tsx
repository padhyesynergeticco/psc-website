import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Leaf } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Environment | Padhye Synergetic Company',
  description: 'Environment: coming soon.',
}

export default function EnvironmentPage() {
  return <>
    <SiteNav />
    <main>
      <section className="env-soon">
        <div className="container">
          <div className="service-breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} /><span>Offerings</span><ChevronRight size={14} /><strong>Environment</strong></div>
          <div className="env-soon-body">
            <Leaf className="env-soon-icon" aria-hidden="true" />
            <h1>Environment</h1>
            <p className="env-soon-label">Coming soon</p>
            <p className="env-soon-text">We are still building this part of the site. Please check back soon.</p>
            <div className="env-soon-actions">
              <Link className="button" href="/offerings/financial-services">Explore financial services <ArrowRight size={17} /></Link>
              <Link className="button env-ghost" href="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
}
