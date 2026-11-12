import { ServicePage, servicePages } from '@/components/service-page'
export const metadata = { title: 'Financial Planning | Padhye Synergetic Company', description: servicePages['financial-planning'].intro }
export default function FinancialPlanningPage() { return <ServicePage service={servicePages['financial-planning']} /> }
