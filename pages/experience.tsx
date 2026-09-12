import { Experience } from '@/components/Experience'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { SEO } from '@/components/SEO'

export default function ExperiencePage() {
  return (
    <>
      <SEO
        title="Experience | IMAGRO Construction"
        description="Discover our extensive experience in international infrastructure, power, transportation, and engineering projects."
      />
      <div className="pt-20">
        <Experience />
        <WhyChooseUs />
      </div>
    </>
  )
}
