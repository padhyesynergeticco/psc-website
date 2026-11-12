import { ServicePage, servicePages } from '@/components/service-page'
export const metadata = { title: 'Mortgages & Loans | Padhye Synergetic Company', description: servicePages['mortgages-loans'].intro }
export default function MortgagesLoansPage() { return <ServicePage service={servicePages['mortgages-loans']} /> }
