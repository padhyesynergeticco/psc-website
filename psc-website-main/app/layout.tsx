import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteMotion } from '@/components/site-motion'
import WhatsAppButton from "@/components/whatsapp-button";
import './globals.css'

export const metadata: Metadata = {
  title: 'Padhye Synergetic Company | Financial Guidance Made Clear',
  description: 'Thoughtful financial guidance designed around your goals, priorities, and future.',
  generator: 'Padhye Synergetic Company',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
         <WhatsAppButton />
        <SiteMotion />
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}

