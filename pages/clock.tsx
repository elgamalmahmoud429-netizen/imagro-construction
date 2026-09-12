import { TimeZoneClock } from '@/components/TimeZoneClock'
import { SEO } from '@/components/SEO'

export default function ClockPage() {
  return (
    <>
      <SEO
        title="Global Time Clock | IMAGRO Construction"
        description="Real-time digital clock displaying current time across international time zones where IMAGRO Construction operates."
      />
      <TimeZoneClock />
    </>
  )
}
