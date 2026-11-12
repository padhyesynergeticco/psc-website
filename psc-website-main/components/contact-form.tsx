
'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { site } from '@/lib/site'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get('name') || ''),
       email: String(data.get('email') || ''),
       phone: String(data.get('phone') || ''),
       message: String(data.get('message') || ''),
    }

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error('Submission failed')
      }

      setSent(true)
      form.reset()
    } catch {
      setError(
        `We couldn't submit your enquiry. Please email us at ${site.email}.`
      )
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="contact-form form-sent" role="status">
        <Check size={30} />
        <h3>Thank you</h3>
        <p>Your enquiry has been submitted successfully. Our team will get in touch with you.</p>
        <button
          className="button button-light"
          type="button"
          onClick={() => setSent(false)}
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        Your name
        <input
          name="name"
          required
          maxLength={120}
          autoComplete="name"
          placeholder="Enter your name"
        />
      </label>

      <label>
        Email address
        <input
          name="email"
          required
          type="email"
          maxLength={254}
          autoComplete="email"
          placeholder="you@example.com"
        />
      </label>
      <label>
  Phone number
      <input
        name="phone"
        required
        type="tel"
        inputMode="tel"
        maxLength={20}
        autoComplete="tel"
        placeholder="+91 98765 43210"
      />
      </label>

      <label>
        How can we help?
        <textarea
          name="message"
          required
          maxLength={3000}
          rows={3}
          placeholder="Tell us what you would like to discuss"
        />
      </label>

      {error && <p role="alert">{error}</p>}

      <button
        className="button button-light"
        type="submit"
        disabled={sending}
      >
        {sending ? 'Submitting...' : 'Send enquiry'}
        {!sending && <ArrowRight size={16} />}
      </button>

      <small>
        By submitting this form, you agree to be contacted about your enquiry.
        Please do not include passwords, bank details, PAN, Aadhaar, or other
        sensitive financial information.
      </small>
    </form>
  )
}
