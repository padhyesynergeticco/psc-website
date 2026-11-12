import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, Check, FileText, Globe2, Landmark, TrendingDown, Wallet } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = { title: 'About Us | Padhye Synergetic Company' }

const stats = [
  ['2011', 'Serving clients since'],
  ['15+', 'Years of dedicated service'],
  ['3', 'Lender categories in our network'],
] as const

const network = [
  ['Nationalised Banks', 'Public Sector'],
  ['Private Sector Banks', ''],
  ['NBFCs', 'Non-Banking Financial Companies'],
] as const

const offerings = [
  { title: 'Home Loans', text: 'Customised housing finance solutions for purchasing, constructing, or renovating residential properties.', icon: Landmark },
  { title: 'Business Loans', text: 'Unsecured and collateral-backed credit lines to meet working capital needs and fuel enterprise expansion.', icon: Wallet },
  { title: 'Business Finance', text: 'Structured corporate finance, machinery loans, and strategic funding solutions tailored for MSMEs and large corporate entities.', icon: BarChart3 },
]

const specialised = [
  { title: 'Resale Property Funding', text: 'End-to-end assistance for legal verification, valuation, and smooth loan approvals for pre-owned/resale properties.', icon: FileText },
  { title: 'NRI Home Loans', text: 'Seamless, specialized home loan processing for Non-Resident Indians looking to invest or buy property back home in India.', icon: Globe2 },
  { title: 'Balance Transfer Facility', text: 'Expert debt optimization to switch high-interest existing loans to lower ROI structures, reducing monthly EMIs.', icon: TrendingDown },
]

const mission = [
  { title: 'Our mission', text: 'Our mission is to make financial information easier to understand and help people approach their decisions with clarity, confidence and purpose.' },
  { title: 'Our vision', text: 'We support a more financially informed community where people can make thoughtful decisions about their financial future.' },
]

const principles = [
  { title: 'Our values', text: 'We lead with transparency, education, responsible guidance, accountability and long-term thinking.', bullets: ['Clear explanations of benefits, costs and risks', 'Goal-oriented conversations', 'Support across different financial needs'] },
  { title: 'Our approach', text: 'We listen to your goals, understand your circumstances, explain relevant options and support periodic review within our service scope.' },
  { title: 'Who we serve', text: 'Our resources are designed for young professionals, families, entrepreneurs, investors, retirees and eligible NRIs with financial interests in India.' },
]

const founderFocus = ['Investments', 'Insurance planning', 'Structured products', 'Bonds', 'Long-term wealth strategies']
const founderPhoto = '/founder.jpg'

export default function AboutUsPage() {
  return <><SiteNav /><main>
    <section className="page-hero"><div className="container"><span className="eyebrow">ABOUT US</span><h1>Your trusted advisory partner since 2011.</h1><p>15+ years of dedicated service, providing expert financial guidance and seamless loan processing since 2011.</p></div></section>

    <section className="section about-stats"><div className="container"><div className="stat-grid">{stats.map(([value, label]) => <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>

    <section className="section soft" id="founder"><div className="container">
      <div className="section-intro"><span className="eyebrow">LEADERSHIP</span><h2>Meet our founder.</h2></div>
      <article className="founder-card">
        <div className="founder-profile">
          {founderPhoto ? <img className="founder-photo" src={founderPhoto} alt="Mr. Madhav Padhye" /> : <span className="founder-photo founder-initials" aria-hidden="true">MP</span>}
          <h3>Mr. Madhav Padhye</h3>
          <span className="founder-role">Founder</span>
          <small>Padhye Synergetic Company</small>
        </div>
        <div className="founder-body">
          <p>Mr. Madhav Padhye is the Founder of Padhye Synergetic Company. With decades of strong financial knowledge and practical market experience, he specialises in investments, insurance planning, structured products, bonds, and long-term wealth strategies.</p>
          <p>Madhav&apos;s leadership is rooted in honesty, transparency, and delivering well-researched, personalised financial solutions. He oversees the strategic direction of PSC, ensuring every service is delivered with expertise, discipline, and focus on long-term client value.</p>
          <div className="founder-focus"><span className="footer-label">Areas of expertise</span><ul>{founderFocus.map(f => <li key={f}><Check size={14} />{f}</li>)}</ul></div>
        </div>
      </article>
    </div></section>

    <section className="section soft"><div className="container about-split">
      <div className="section-intro"><span className="eyebrow">OUR BANKING NETWORK</span><h2>A wide network of financial institutions.</h2><p>We serve as a reliable, authorized service provider for a wide network of financial institutions.</p></div>
      <ul className="network-list">{network.map(([title, note]) => <li key={title}><span className="network-check"><Check size={16} /></span><span><strong>{title}</strong>{note && <small>{note}</small>}</span></li>)}</ul>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-intro"><span className="eyebrow">WHAT WE DO</span><h2>Financial solutions for homes, businesses and enterprises.</h2></div>
      <div className="content-grid">{offerings.map(({ title, text, icon: Icon }) => <article className="info-card" key={title}><Icon className="card-icon" /><h2>{title}</h2><p>{text}</p></article>)}</div>
    </div></section>

    <section className="section soft"><div className="container">
      <div className="section-intro"><span className="eyebrow">SPECIALIZED CREDIT SERVICES</span><h2>Support for the loans that need extra care.</h2></div>
      <div className="content-grid">{specialised.map(({ title, text, icon: Icon }) => <article className="info-card" key={title}><Icon className="card-icon" /><h2>{title}</h2><p>{text}</p></article>)}</div>
      <p className="loan-note">Loan approval, interest rates and terms are decided by the respective lender and depend on their eligibility criteria.</p>
    </div></section>

    <section className="section"><div className="container">
      <div className="section-intro"><span className="eyebrow">WHO WE ARE</span><h2>Helping you make more informed financial decisions.</h2><p>We make financial information easier to understand, so individuals and families can approach saving, investing, protection and long-term planning with greater clarity.</p></div>
      <div className="content-grid two">{mission.map(item => <article className="info-card" key={item.title}><h2>{item.title}</h2><p>{item.text}</p></article>)}</div>
      <div className="content-grid principles">{principles.map(item => <article className="info-card" key={item.title}><h2>{item.title}</h2><p>{item.text}</p>{item.bullets && <ul>{item.bullets.map(b => <li key={b}><Check size={15} />{b}</li>)}</ul>}</article>)}</div>
    </div></section>

    <section className="section soft"><div className="container"><div className="content-grid two journey-grid">
      <article className="info-card"><span className="eyebrow">OUR JOURNEY</span><h2>Reliable service, since 2011.</h2><p>Since 2011, our journey has been shaped by a commitment to reliable service, transparent communication, and long-term client relationships. We understand that every customer has different financial needs, whether it is securing a home loan, protecting a family, managing future expenses, or building wealth.</p></article>
      <article className="info-card"><span className="eyebrow">OUR COMMITMENT</span><h2>Financial services that fit you.</h2><p>We believe financial services should be accessible, understandable, and aligned with your individual needs. From your first financial decision to your long-term goals, we aim to provide dependable guidance, personalized assistance, and coordinated support.</p></article>
    </div></div></section>

    <section className="section cta-section"><div className="container cta-card"><span className="eyebrow">NEXT STEP</span><h2>Your Financial Goals. Our Commitment. Your Future, Better Planned.</h2><p>Tell us what you are working towards and we will help you understand the options and the next step.</p><Link className="button button-light" href="/contact">Book a Consultation <ArrowRight size={17} /></Link></div></section>
  </main><SiteFooter /></>
}
