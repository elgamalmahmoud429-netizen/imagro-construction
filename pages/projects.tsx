import { Projects } from '@/components/Projects'
import { SEO } from '@/components/SEO'

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects | IMAGRO Construction"
        description="View our selected project portfolio showcasing infrastructure and construction expertise across multiple sectors."
      />
      <div className="pt-20">
        <Projects />
      </div>
    </>
  )
}
