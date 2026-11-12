import { ServicePage, servicePages } from '@/components/service-page'
export const metadata = { title: 'Investment Solutions | Padhye Synergetic Company', description: servicePages.investments.intro }
export default function InvestmentsPage() { return <ServicePage service={servicePages.investments} /> }
