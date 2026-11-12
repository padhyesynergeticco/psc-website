import { ServicePage, servicePages } from '@/components/service-page'
export const metadata = { title: 'Insurance Solutions | Padhye Synergetic Company', description: servicePages.insurance.intro }
export default function InsurancePage() { return <ServicePage service={servicePages.insurance} /> }
