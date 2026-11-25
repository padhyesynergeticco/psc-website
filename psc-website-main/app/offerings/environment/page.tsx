import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { goshruti, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'GOSHRUTI | Padhye Synergetic Company',
  description: 'GOSHRUTI: Tradition. Nature. Timeless Living. Natural dhoop, soap and puja products from Padhye Synergetic Company. Launching soon.',
}

const range = ['Dhoop sticks', 'Dhoop cones', 'Gau soap', 'Havan samidha', 'Cow dung cakes', 'Diyas']
const promise = ['Made from cow dung and natural ingredients', 'Herbs and flowers for fragrance', 'Handmade in small batches', 'Paper-based packaging']
const whatsapp = `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Goshruti, please tell me when you launch.')}`

export default function GoshrutiPage() {
  // Once GOSHRUTI is live, this page sends visitors straight to the brand site.
  if (goshruti.url) redirect(goshruti.url)

  return <>
    <SiteNav />
    <main>
      <section className="env-soon">
        <div className="container">
          <div className="service-breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} /><span>Offerings</span><ChevronRight size={14} /><strong>GOSHRUTI</strong></div>
          <div className="env-soon-body">
            <div className="gs-hero">
              <img className="env-soon-logo gs-logo" src="/public/goshruti-logo.jpg" alt="GOSHRUTI emblem" width={168} height={168} />
              <div>
                <h1>GOSHRUTI</h1>
                <p className="env-soon-label">Tradition. Nature. Timeless Living.</p>
                <p className="gs-marathi">परंपरेचा वारसा, निसर्गाचा ठेवा</p>
                <p className="env-soon-text">Our nature-inspired brand, rooted in Indian tradition. The GOSHRUTI website is launching soon.</p>
                 <p className="env-soon-text">Various Meanings of the Word 'Go': In Sanskrit and Vedic literature, the word 'Go' does not merely mean a cow; it also signifies the Earth, speech (Saraswati), sunbeams, and the sensory organs (Jnanendriyas). Therefore, protecting the cow is synonymous with protecting the Earth and nature.
                                              In short, Shruti literature considers the cow to be the focal point of the environment, agriculture, health, and spirituality, granting her the highest status of a mother.
                                           'Gavo Vishwasya Matarah' (Atharvaveda / Rigveda): In the Vedas, the cow is referred to as the 'Mother of the entire universe.' Just as a mother selflessly nurtures her children, the cow nourishes all of humanity.</p>
                <p className="env-soon-text">'गो' शब्दाचे विविध अर्थ: संस्कृत आणि वैदिक साहित्यात 'गो' या शब्दाचा अर्थ केवळ गाय असा नसून पृथ्वी, वाणी (सरस्वती), सूर्यकिरण आणि ज्ञानेंद्रिये असाही होतो. गाईचे रक्षण करणे म्हणजेच पृथ्वी आणि निसर्गाचे रक्षण करणे होय.
                                             थोडक्यात, श्रुती साहित्यात गाईला पर्यावरण, कृषी, आरोग्य आणि अध्यात्म यांचा केंद्रबिंदू मानून तिला मातेचा सर्वोच्च दर्जा दिला आहे
                                             'गावो विश्वस्य मातरः' (अथर्ववेद / ऋग्वेद): वेदांमध्ये गाईला 'संपूर्ण विश्वाची माता' म्हटले आहे. ज्याप्रमाणे आई आपल्या मुलांचे निस्वार्थपणे संगोपन करते, त्याचप्रमाणे गाय संपूर्ण मानवजातीचे पोषण करते.</p>                
                <div className="env-soon-actions">
                  <a className="button" href={whatsapp} target="_blank" rel="noopener noreferrer">Get launch updates <ArrowRight size={17} /></a>
                  <Link className="button env-ghost" href="/contact">Contact us</Link>
                </div>
              </div>
            </div>

            <div className="gs-details">
              <div>
                <h2>Our range</h2>
                <ul>{range.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h2>Our promise</h2>
                <ul>{promise.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h2>First fragrances</h2>
                <ul><li>Jasmine (चमेली)</li><li>Rudraksha (रुद्राक्ष)</li></ul>
              </div>
            </div>

            <p className="gs-contact">
              A brand of {site.name}, {site.address}. Call or WhatsApp <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              {site.email && <> or write to <a href={`mailto:${site.email}`}>{site.email}</a></>}.
            </p>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
}
