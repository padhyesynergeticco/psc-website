// Bhalucraft product list. Add, remove or reorder items here and the page updates.
// `price` is optional: leave it out and no price is shown (customers ask on WhatsApp).
// To add a hoodie, add an item with kind: 'Hoodie'.

export type Product = {
  id: string
  name: string
  kind: 'T-shirt' | 'Hoodie'
  color: 'White' | 'Black'
  image: string
  alt: string
  front?: string
  back: string
  fit?: string
  isNew?: boolean
  price?: string
}

export const products: Product[] = [
  { id: 'bear-black', name: 'Not Today, Maybe Tomorrow', kind: 'T-shirt', color: 'Black', image: '/bhalucraft/bear-black.jpg', alt: 'Black oversized T-shirt with a sleepy bear leaning on a tree stump and the line Not today, maybe tomorrow', front: 'Bearly functioning', back: 'A sleepy bear in a nightcap against a tree stump', fit: 'Oversized fit', isNew: true },
  { id: 'crocodile-black', name: 'Smile? That\u2019s My Face.', kind: 'T-shirt', color: 'Black', image: '/bhalucraft/crocodile-black.jpg', alt: 'Black oversized T-shirt with a crocodile resting on a sandbank and the line Smile? That\u2019s my face', front: 'Not everyone gets my smile', back: 'A crocodile resting at the water\u2019s edge', fit: 'Oversized fit', isNew: true },
  { id: 'hornbill-black', name: 'The Main Character', kind: 'T-shirt', color: 'Black', image: '/bhalucraft/hornbill-black.jpg', alt: 'Black oversized T-shirt with a hornbill wearing a crown that reads The Main Character', front: 'Catch flights, not feelings', back: 'A crowned hornbill with its wings spread', fit: 'Oversized fit', isNew: true },
  { id: 'hornbill-white', name: 'The Main Character', kind: 'T-shirt', color: 'White', image: '/bhalucraft/hornbill-white.jpg', alt: 'White oversized T-shirt with a hornbill wearing a crown that reads The Main Character', front: 'Catch flights, not feelings', back: 'A crowned hornbill with its wings spread', fit: 'Oversized fit' },
  { id: 'owl-white', name: 'Awake When the Forest Sleeps', kind: 'T-shirt', color: 'White', image: '/bhalucraft/owl-white.jpg', alt: 'White oversized T-shirt with an owl on a branch under a crescent moon and the line Awake when the forest sleeps', front: 'Night Watch Club', back: 'An owl on a branch under a crescent moon', fit: 'Oversized fit' },
  { id: 'monkey-white', name: 'Serious About Being Curious', kind: 'T-shirt', color: 'White', image: '/bhalucraft/monkey-white.jpg', alt: 'White oversized T-shirt with a monkey hanging from a branch and the line Serious about being curious', front: 'Wear curious, stay curious', back: 'A grinning monkey swinging from a branch', fit: 'Oversized fit' },
  { id: 'coastal-black', name: 'Lost Somewhere Coastal', kind: 'T-shirt', color: 'Black', image: '/bhalucraft/coastal-black.jpg', alt: 'Black T-shirt on a hanger with a coastal village scene, fishing boats and the words Lost somewhere coastal on the back', back: 'A coastal village with fishing boats on the shore' },
]
