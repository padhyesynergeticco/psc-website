import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { bhalucraft } from '@/lib/site'
import { products, type Product } from '@/lib/bhalucraft'

export const metadata: Metadata = {
  title: 'Bhalucraft | Padhye Synergetic Company',
  description: 'Bhalucraft oversized T-shirts: wildlife-inspired prints with a small line on the front and the full story on the back.',
}

function orderLink(p: Product) {
  const text = `Hi, I'd like to order the "${p.name}" ${p.kind.toLowerCase()} (${p.color}). Size: `
  return `https://wa.me/${bhalucraft.whatsapp}?text=${encodeURIComponent(text)}`
}

export default function BhalucraftPage() {
  const hero = [products.find(p => p.id === 'owl-white'), products.find(p => p.id === 'bear-black')].filter(Boolean) as Product[]
  return <>
    <SiteNav />
    <main>
      <section className="bc-hero">
        <div className="container bc-hero-grid">
          <div className="bc-hero-copy">
            <div className="service-breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} /><span>Offerings</span><ChevronRight size={14} /><strong>Bhalucraft</strong></div>
            <h1>Bhalucraft</h1>
            <p className="bc-tagline">Minimal design. Maximum impact.</p>
            <p className="bc-intro">Oversized tees with a wild streak. One quiet line on the front, a whole animal on the back.</p>
            <div className="bc-actions">
              <a className="button bc-button" href="#shop">Shop the Signature Series <ArrowRight size={17} /></a>
              <a className="button bc-button-ghost" href={bhalucraft.instagram} target="_blank" rel="noopener noreferrer">Follow {bhalucraft.instagramHandle}</a>
            </div>
          </div>
          <div className="bc-hero-art" aria-hidden="true">
            {hero.map((p, i) => <img key={p.id} className={i === 0 ? 'bc-hero-img bc-hero-img-a' : 'bc-hero-img bc-hero-img-b'} src={p.image} alt="" width={1024} height={1280} />)}
          </div>
        </div>
      </section>

      <section className="section bc-shop" id="shop">
        <div className="container">
          <div className="bc-shop-head">
            <h2>Signature Series</h2>
            <p>Tap Order on WhatsApp, tell us your size, and we will confirm price and delivery with you.</p>
          </div>
          <div className="bc-grid">
            {products.map(p => <article className="bc-card" key={p.id}>
              <div className="bc-card-media">
                <img src={p.image} alt={p.alt} width={1024} height={1280} loading="lazy" />
                {p.isNew && <span className="bc-badge">New release</span>}
              </div>
              <div className="bc-card-body">
                <div className="bc-card-title"><h3>{p.name}</h3><span className={p.color === 'Black' ? 'bc-chip bc-chip-black' : 'bc-chip'}>{p.color}</span></div>
                <dl className="bc-details">
                  {p.front && <div><dt>Front</dt><dd>{p.front}</dd></div>}
                  <div><dt>Back</dt><dd>{p.back}</dd></div>
                  {p.fit && <div><dt>Fit</dt><dd>{p.fit.replace(/ fit$/i, '')}</dd></div>}
                </dl>
                <div className="bc-card-foot">
                  {p.price && <strong className="bc-price">{p.price}</strong>}
                  <a className="button bc-order" href={orderLink(p)} target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
                </div>
              </div>
            </article>)}
          </div>
          <p className="bc-note">Questions about sizing or delivery? Message us on WhatsApp, or see the latest drops on Instagram at <a href={bhalucraft.instagram} target="_blank" rel="noopener noreferrer">{bhalucraft.instagramHandle}</a>.</p>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
}
