// Edit your business details in one place. Empty values are hidden on the site.
export const site = {
  name: 'Padhye Synergetic Company',
  email: 'padhyesynergetic.co@gmail.com',
  phone: '+91 91727 50077',
  address: 'Baner, Pune, Maharashtra',
  // Payment details shown beside the QR code. Replace with your real UPI ID before going live.
  upiId: 'sample@upi',
  payee: 'Padhye Synergetic Company',
}

// Bhalucraft (clothing brand) - used by /offerings/bhalucraft.
export const bhalucraft = {
  instagram: 'https://www.instagram.com/thebhalucraft/',
  instagramHandle: '@thebhalucraft',
  // WhatsApp number that receives T-shirt orders (digits only, with country code).
  // Defaults to the company number; change it if Bhalucraft orders should go elsewhere.
  whatsapp: site.phone.replace(/\D/g, ''),
}
