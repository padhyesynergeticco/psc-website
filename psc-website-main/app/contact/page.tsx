import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { site } from '@/lib/site'

export const metadata: Metadata = { title: 'Book a Consultation | Padhye Synergetic Company' }

const details = [site.email && `Email: ${site.email}`, site.phone && `Phone: ${site.phone}`, site.address && `Address: ${site.address}`].filter(Boolean).join('\n')

export default function ContactPage() {
  return <ContentPage
    eyebrow="CONTACT"
    title="Let's start with a conversation."
    intro="Share what you would like to understand or plan. We will use the conversation to learn about your goals and next steps."
    cta="Request a consultation"
    ctaHref="#enquiry"
    footerCta={false}
    contactForm
    sections={[
      { title: 'Book a consultation', text: 'A practical first conversation about your priorities, questions and financial goals.' },
      { title: 'What to bring', text: 'You can bring questions, broad goals and any context you are comfortable discussing. Please do not send sensitive financial information through an unsecured form.' },
      ...(details ? [{ title: 'Get in touch', text: details }] : []),
    ]}
    fees={[
      { service: 'Home loan (HL)', fee: '₹1,000 + 18% GST', note: 'Signup fee to start your consultation / service' },
      { service: 'Financial planning', fee: '₹2,500 + GST', note: 'Signup fee to start your consultation / service' },
      { service: 'NRI services', fee: '₹2,500 + GST', note: 'Signup fee to start your consultation / service' },
    ]}
    payment={{
      title: 'Pay your signup fee by QR code.',
      text: 'Scan the QR code with any UPI app to pay your signup fee and start your consultation / service.',
      steps: ['Open any UPI app and choose Scan QR.', 'Scan the code and check the amount and payee name.', 'Complete the payment and keep the confirmation.', 'Share the payment confirmation with us so we can begin.'],
      note: 'Sample QR code and UPI ID for layout only. Replace public/payment-qr-sample.svg (or .png) and the UPI ID in lib/site.ts with your real payment details before going live.',
    }}
  />
}
