import Link from 'next/link'
import { site } from '@/lib/site'

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div>
      <Link className="logo" href="/" aria-label="Padhye Synergetic Company home"><img src="/padhye-synergetic-logo.png" alt="Padhye Synergetic Company" /><span className="logo-slogan">Smart. Simple. Trusted.</span></Link>
      <p className="footer-copy">Thoughtful financial guidance for the decisions that shape your future.</p>
    </div>
    <div>
      <span className="footer-label">Services</span>
      <Link href="/services/mortgages-loans">Mortgage &amp; Loans</Link>
      <Link href="/services/insurance">Insurance Solutions</Link>
      <Link href="/services/financial-planning">Financial Planning</Link>
      <Link href="/services/investments">Investment Advisory</Link>
      <Link href="/services/nri-services">NRI Services</Link>
    </div>
    <div>
      <span className="footer-label">Explore</span>
      <Link href="/about-us">About Us</Link>
      <Link href="/calculators">Calculators</Link>
      <Link href="/testimonials">Testimonials</Link>
      <Link href="/offerings/financial-services">Financial Services</Link>
      <Link href="/offerings/bhalucraft">Bhalucraft</Link>
      <Link href="/offerings/environment">Environment</Link>
    </div>
    <div>
      <span className="footer-label">Contact</span>
      <Link href="/contact">Book a consultation</Link>
      {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
      {site.address && <span className="footer-address">{site.address}</span>}
      {site.phone && <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>}
    </div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Mutual fund investments are subject to market risks. Read all scheme related documents carefully.</span></div></footer>
}
