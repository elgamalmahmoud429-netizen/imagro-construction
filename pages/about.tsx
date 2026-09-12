import { About } from '@/components/About'
import { SEO } from '@/components/SEO'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About IMAGRO Construction | Engineering Excellence"
        description="Learn about IMAGRO Construction's mission, vision, and expertise in international infrastructure and construction projects."
      />
      <div className="pt-20">
        <About />
      </div>
    </>
  )
}
