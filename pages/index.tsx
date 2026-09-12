import { Hero } from '@/components/Hero'
import { HomeIntro } from '@/components/HomeIntro'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { GlobalPresence } from '@/components/GlobalPresence'
import { SEO } from '@/components/SEO'

export default function Home() {
  return (
    <>
      <SEO
        title="IMAGRO Construction | International Construction & Infrastructure"
        description="IMAGRO Construction delivers construction, engineering and infrastructure solutions across Egypt, the Middle East, Africa and Europe."
      />
      <Hero />
      <HomeIntro />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <GlobalPresence />
    </>
  )
}
