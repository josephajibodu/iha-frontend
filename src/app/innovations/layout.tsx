import React, { ReactNode } from 'react'
import ContactUsSection from '@/components/contact-us-section'
import { ProjectHeader } from '@/components/progams/projectHeader'
import NewsletterSubscriptionSection from '@/components/newsletter-subscription-section'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ProjectHeader
        title="Innovations"
        description="We work with public and private health institutions to design, develop, and implement digital health solutions that are shaped by the communities they serve."
      />
      {children}
      <ContactUsSection />
      <NewsletterSubscriptionSection />
    </>
  )
}

export default Layout
