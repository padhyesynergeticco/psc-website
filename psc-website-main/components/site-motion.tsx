'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Site-wide scroll animation: content fades up as it enters the viewport on every page.
// Pages with their own motion (home, testimonials) are left alone - anything already
// marked .reveal is skipped. Respects the visitor's "reduce motion" setting.
const LEAF = [
  '.service-hero-grid > *', '.content-grid > *', '.service-cards > *', '.service-highlights > *', '.stat-grid > *',
  '.related-grid > *', '.process-list > *', '.faq-list > *', '.fee-table', '.payment-card',
]
const CONTAINER = ['.service-hero .container > *', 'main section > .container > *', 'footer .container > *']

export function SiteMotion() {
  const pathname = usePathname()
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const timers: number[] = []
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      const el = e.target as HTMLElement
      if (!e.isIntersecting) return
      el.classList.add('in'); io.unobserve(el)
      // hand styling back to the element once it has settled so its own hover effects work
      timers.push(window.setTimeout(() => { el.classList.remove('reveal', 'in'); el.style.transitionDelay = '' }, 1300))
    }), { threshold: 0.08, rootMargin: '0px 0px 0px 0px' })
    const raf = requestAnimationFrame(() => {
      const seen = new Set<Element>()
      ;[...LEAF, ...CONTAINER].forEach(sel => {
        document.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
          if (seen.has(el) || el.classList.contains('reveal') || el.querySelector('.reveal') || el.parentElement?.closest('.reveal')) return
          seen.add(el)
          el.classList.add('reveal')
          el.style.transitionDelay = `${(i % 4) * 90}ms`
          io.observe(el)
        })
      })
    })
    return () => { cancelAnimationFrame(raf); io.disconnect(); timers.forEach(window.clearTimeout) }
  }, [pathname])
  return null
}
