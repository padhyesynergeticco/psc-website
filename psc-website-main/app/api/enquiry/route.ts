import { NextResponse } from 'next/server'
import { getClient } from '@/lib/mongodb'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const message = String(body.message || '').trim()

    if (
      !name ||
      name.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !/^\+?[0-9\s\-()]{7,20}$/.test(phone) ||
      !message ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { success: false, message: 'Please check your form details.' },
        { status: 400 }
      )
    }

    const client = await getClient()
    await client.db('psc').collection('enquiries').insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry error:', err)
    return NextResponse.json(
      { success: false, message: "We couldn't save your enquiry. Please try again." },
      { status: 500 }
    )
  }
}
