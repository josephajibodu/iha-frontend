import React, { ReactNode } from 'react'
import ContactUsSection from '@/components/contact-us-section'
import { ProjectHeader } from '@/components/progams/projectHeader'
import NewsletterSubscriptionSection from '@/components/newsletter-subscription-section'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProjectHeader
        title="Implementation Research"
        description="We generate scientific evidence on how digital health is actually being experienced across African health systems. What is working, what is not, and what the data is telling us."
      />
      {children}
      <ContactUsSection />
      <NewsletterSubscriptionSection />
    </>
  )
}

export default Layout
