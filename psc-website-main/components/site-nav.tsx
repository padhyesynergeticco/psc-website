'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const before = [
  ['Home', '/'],
  ['About Us', '/about-us'],
  ['Calculators', '/calculators'],
] as const

const after = [
  ['Testimonials', '/testimonials'],
] as const

const offerings = [
  ['Financial Services', '/offerings/financial-services', 'Investments, insurance, loans and planning'],
  ['Bhalucraft', '/offerings/bhalucraft', 'Wildlife-inspired oversized T-shirts'],
  ['Environment', '/offerings/environment', 'Coming soon'],
] as const

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname() || '/'
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const offeringsActive = pathname.startsWith('/offerings')

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!sub) return
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setSub(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSub(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('touchstart', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('touchstart', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [sub])

  const closeAll = () => { setOpen(false); setSub(false) }

  return <header className="site-header"><div className="container nav-wrap">
    <Link className="logo" href="/" aria-label="Padhye Synergetic Company home"><img src="/padhye-synergetic-logo.png" alt="Padhye Synergetic Company" /><span className="logo-slogan">Smart. Simple. Trusted.</span></Link>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
      {before.map(([label, href]) => <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} onClick={closeAll}>{label}</Link>)}
      <div className={sub ? 'nav-dropdown open' : 'nav-dropdown'} ref={dropdownRef} onMouseEnter={() => setSub(true)} onMouseLeave={() => setSub(false)}>
        <button type="button" className="nav-dropdown-trigger" aria-haspopup="true" aria-expanded={sub} aria-controls="offerings-menu" aria-current={offeringsActive ? 'page' : undefined} onClick={() => setSub(!sub)}>Offerings <ChevronDown size={14} aria-hidden="true" /></button>
        <div className="nav-submenu" id="offerings-menu"><div className="nav-submenu-panel">
          {offerings.map(([label, href, note]) => <Link key={href} href={href} aria-current={pathname.startsWith(href) ? 'page' : undefined} onClick={closeAll}><strong>{label}</strong><small>{note}</small></Link>)}
        </div></div>
      </div>
      {after.map(([label, href]) => <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} onClick={closeAll}>{label}</Link>)}
      <Link className="button button-small" href="/contact" onClick={closeAll}>Book a Consultation <ArrowRight size={15} /></Link>
    </nav>
    <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>
}
