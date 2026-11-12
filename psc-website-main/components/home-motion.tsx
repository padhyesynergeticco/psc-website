'use client'
import { useEffect } from 'react'

// Gentle motion for the home page: sections fade up as they scroll into view,
// and the "financial journey" card steps through Understand -> Plan -> Grow.
// Respects the visitor's "reduce motion" setting.
const REVEAL = [
  '.hero-copy > *', '.hero-panel', '.trust-grid > *', '.section-intro', '.product-row', '.nri-feature-grid > *',
  '.process-list > *', '.quote-grid > *', '.cta-section .container > *',
]

export function HomeMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups: Array<() => void> = []

    if (!reduce && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }), { threshold: 0.12, rootMargin: '0px 0px 0px 0px' })
      REVEAL.forEach(sel => document.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
        el.classList.add('reveal')
        el.style.transitionDelay = `${Math.min(i, 5) * 90}ms`
        io.observe(el)
      }))
      cleanups.push(() => io.disconnect())
    }

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.journey-node'))
    if (!reduce && nodes.length > 1) {
      let current = Math.max(0, nodes.findIndex(n => n.classList.contains('active')))
      const timer = window.setInterval(() => {
        nodes[current].classList.remove('active')
        current = (current + 1) % nodes.length
        nodes[current].classList.add('active')
      }, 2400)
      cleanups.push(() => window.clearInterval(timer))
    }
    return () => cleanups.forEach(fn => fn())
  }, [])
  return null
}
