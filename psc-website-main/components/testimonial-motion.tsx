'use client'
import { useEffect } from 'react'

// Motion for the Testimonials page: hero text, cards and photos fade up as they scroll into view.
// Skipped for visitors who prefer reduced motion.
const REVEAL = ['.page-hero .container > *', '.content-grid > *', '.section-intro', '.testimonial-card', '.photo-group-title', '.photo-tile', '.testimonial-note']

export function TestimonialMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.1, rootMargin: '0px 0px 0px 0px' })
    REVEAL.forEach(sel => document.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
      el.classList.add('reveal')
      el.style.transitionDelay = `${(i % 3) * 110}ms`
      io.observe(el)
    }))
    return () => io.disconnect()
  }, [])
  return null
}
