// Client photos and awards shown in the "CLIENT PHOTOS & AWARDS" section.
// Image files live in public/testimonials/gallery/. To add more, copy a line below.
// `focus` is the CSS object-position used when the photo is cropped to the tile
// (e.g. '50% 30%' keeps faces visible in tall photos).
export type GalleryPhoto = { src: string; caption: string; category: 'client' | 'award'; focus?: string }

export const galleryPhotos: GalleryPhoto[] = [
  { src: '/testimonials/gallery/client-1.jpg', caption: 'Happy Customer', category: 'client', focus: '50% 42%' },
  { src: '/testimonials/gallery/client-2.jpg', caption: 'Happy Customer', category: 'client', focus: '50% 40%' },
  { src: '/testimonials/gallery/client-3.jpg', caption: 'Happy Customer', category: 'client', focus: '50% 40%' },
  { src: '/testimonials/gallery/client-4.jpg', caption: 'Recognized by Bank of Baroda', category: 'award', focus: '50% 55%' },
  { src: '/testimonials/gallery/award-1.jpg', caption: 'Recognized by SBI', category: 'award', focus: '50% 40%' },
  { src: '/testimonials/gallery/award-2.jpg', caption: 'Recognized by Motilal Oswal', category: 'award', focus: '50% 62%' },
]
