import { ContactForm } from '@/components/ContactForm'
import { SEO } from '@/components/SEO'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact | IMAGRO Construction"
        description="Get in touch with IMAGRO Construction. Contact us for project inquiries and partnership opportunities."
      />
      <div className="pt-20">
        <ContactForm />
      </div>
    </>
  )
}
