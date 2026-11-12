import { ServicePage, servicePages } from '@/components/service-page'
export const metadata = { title: 'NRI Services | Padhye Synergetic Company', description: servicePages['nri-services'].intro }
export default function NriServicesPage() { return <ServicePage service={servicePages['nri-services']} /> }
