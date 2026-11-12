import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { TestimonialMotion } from '@/components/testimonial-motion'
export const metadata: Metadata = { title: 'Testimonials | Padhye Synergetic Company' }
export default function TestimonialsPage() { return <><TestimonialMotion /><ContentPage eyebrow="CUSTOMER EXPERIENCE" title="Clarity feels different." intro="We believe trust is built through transparent communication, educational resources and a structured approach to financial goals." sections={[{ title: 'Our commitment to clear guidance', text: 'We explain relevant options, assumptions, costs and risks in language that helps you make your own informed decisions.' }, { title: 'Transparent communication', text: 'We aim to keep conversations practical, understandable and aligned with the information available at the time.' }, { title: 'Customer-focused support', text: 'Questions are welcome. We support follow-up and periodic review within the business service scope.' }]} testimonials={[{ quote: `खूप खूप धन्यवाद सर! 🙏

आज आपल्या प्रयत्नांना यश आले. सर, तुम्ही माझ्यासाठी खूप प्रयत्न केले आणि हा व्यवहार यशस्वीरीत्या पूर्ण करून दिलात, त्याबद्दल मी तुमचे मनापासून आभार मानतो.

तुम्ही सर्व गोष्टी व्यवस्थित सांभाळून, योग्य प्रकारे नियोजन करून आणि प्रत्येक अडचणीतून मार्ग काढत हा व्यवहार पूर्णत्वास नेलात. तुमच्या या सहकार्याबद्दल आणि माझ्यासाठी घेतलेल्या मेहनतीबद्दल मी तुमचा मनापासून आभारी आहे.

सर, तुमचे असेच सहकार्य आणि मार्गदर्शन मला भविष्यातही लाभत राहो, हीच अपेक्षा. आज तुम्ही माझ्यासाठी जे काही केले, त्याबद्दल शब्दांत आभार व्यक्त करणेही कठीण आहे.

पुन्हा एकदा तुमचे मनःपूर्वक धन्यवाद, सर! 🙏❤️`, name: 'Gaurav Pawar', role: 'Client, Pune, India', sample: false }, { quote: 'I have known Madhav for over a decade and have relied on his expertise for multiple home loan processes across different banks. His deep knowledge and clear guidance made the entire experience smooth and stress-free.', name: 'Siddharth Ghosh', role: 'Home loan client, Kharadi, Pune, India', sample: false }, { quote: 'Their prompt responses, deep expertise, and consistent commitment to delivering the best possible guidance truly set them apart. Their approach to wealth creation is built on trust, strong ethical values, and absolute transparency.', name: 'Dr. Binay Kumar', role: 'Client', sample: false }]} cta="Share your feedback" /></> }
