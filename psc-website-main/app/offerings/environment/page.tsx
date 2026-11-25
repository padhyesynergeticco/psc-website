import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { goshruti, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'GOSHRUTI | Padhye Synergetic Company',
  description: 'GOSHRUTI: Tradition. Nature. Timeless Living. Natural dhoop, soap and puja products from Padhye Synergetic Company. Launching soon.',
}

const range = ['Dhoop sticks', 'Dhoop cones', 'Gau soap', 'Havan samidha', 'Cow dung cakes', 'Diyas']
const promise = ['Made from cow dung and natural ingredients', 'Herbs and flowers for fragrance', 'Handmade in small batches', 'Paper-based packaging']
const whatsapp = `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Goshruti, please tell me when you launch.')}`

export default function GoshrutiPage() {
  // Once GOSHRUTI is live, this page sends visitors straight to the brand site.
  if (goshruti.url) redirect(goshruti.url)

  return <>
    <SiteNav />
    <main>
      <section className="env-soon">
        <div className="container">
          <div className="service-breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} /><span>Offerings</span><ChevronRight size={14} /><strong>GOSHRUTI</strong></div>
          <div className="env-soon-body">
            <div className="gs-hero">
              <img className="env-soon-logo gs-logo" src="/goshruti-logo.png" alt="GOSHRUTI emblem" width={168} height={168} />
              <div>
                <h1>GOSHRUTI</h1>
                <p className="env-soon-label">Tradition. Nature. Timeless Living.</p>
                <p className="gs-marathi">परंपरेचा वारसा, निसर्गाचा ठेवा</p>
                <p className="env-soon-text">Our nature-inspired brand, rooted in Indian tradition. The GOSHRUTI website is launching soon.</p>
                <div className="env-soon-actions">
                  <a className="button" href={whatsapp} target="_blank" rel="noopener noreferrer">Get launch updates <ArrowRight size={17} /></a>
                  <Link className="button env-ghost" href="/contact">Contact us</Link>
                </div>
              </div>
            </div>

            <div className="gs-details">
              <div>
                <h2>Our range</h2>
                <ul>{range.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h2>Our promise</h2>
                <ul>{promise.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h2>First fragrances</h2>
                <ul><li>Jasmine (चमेली)</li><li>Rudraksha (रुद्राक्ष)</li></ul>
              </div>
            </div>

            <p className="gs-contact">
              A brand of {site.name}, {site.address}. Call or WhatsApp <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              {site.email && <> or write to <a href={`mailto:${site.email}`}>{site.email}</a></>}.
            </p>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
}
