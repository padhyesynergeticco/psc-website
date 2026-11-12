import { Award, Users } from 'lucide-react'
import { galleryPhotos } from '@/lib/gallery'

const groups = [
  { key: 'client' as const, title: 'Client photos', Icon: Users },
  { key: 'award' as const, title: 'Awards & recognition', Icon: Award },
]

export function PhotoGallery() {
  return <section className="section" id="photos"><div className="container">
    <div className="section-intro"><span className="eyebrow">CLIENT PHOTOS &amp; AWARDS</span><h2>Moments with the people we work with.</h2><p>Photos from client meetings, events and the recognition we are proud of, shared with consent.</p></div>
    {groups.map(({ key, title, Icon }) => {
      const items = galleryPhotos.filter(p => p.category === key)
      if (items.length === 0) return null
      return <div className="photo-group" key={key}>
        <h3 className="photo-group-title"><Icon size={18} />{title}</h3>
        <div className={items.length % 3 === 0 ? "photo-grid" : "photo-grid photo-grid-2"}>{items.map(p => <figure className="photo-tile" key={p.src}>
          <a href={p.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${p.caption}`}><img src={p.src} alt={p.caption} loading="lazy" style={{ objectPosition: p.focus || '50% 40%' }} /></a>
          <figcaption>{p.caption}</figcaption></figure>)}</div>
      </div>
    })}
  </div></section>
}
