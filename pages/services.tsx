import { Services } from '@/components/Services'
import { SEO } from '@/components/SEO'

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services | IMAGRO Construction"
        description="Explore our comprehensive construction, engineering, and infrastructure services across multiple sectors."
      />
      <div className="pt-20">
        <Services />
      </div>
    </>
  )
}
