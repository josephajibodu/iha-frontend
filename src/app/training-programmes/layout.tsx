import React, { ReactNode } from 'react'
import ContactUsSection from '@/components/contact-us-section'
import { ProjectHeader } from '@/components/progams/projectHeader'
import NewsletterSubscriptionSection from '@/components/newsletter-subscription-section'


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProjectHeader
        title="Training Programmes"
        description="Competency-based training in digital health that equips health workers from the frontline to leadership level with the competence, confidence, and capability to deliver better care."
      />
      {children}
      <ContactUsSection />
      <NewsletterSubscriptionSection />
    </>
  )
}

export default layout
