import React from 'react'
import type { Metadata } from 'next'
import PillarCardGrid, { PillarCard } from '@/components/pillar-card-grid'
import mpoxImage from "@/assets/images/innovation_lab.png";
import dhlsatImage from "@/assets/images/workshop.png";
import toolkitImage from "@/assets/images/fellowship.png";

export const metadata: Metadata = {
  title: "Innovations | InnovateHealth Africa",
  description:
    "Digital health solutions designed with the communities they serve — Mpox AI Diagnostic, DHLSAT, and the Healthcare Innovation Toolkit.",
};

const cards: PillarCard[] = [
  {
    id: 'mpox',
    title: 'AI-Powered Mpox Diagnostic Tool',
    description:
      'An award-winning digital solution leveraging artificial intelligence to provide rapid and accessible diagnostics for Mpox, recognised and awarded a grant for further development at the 2025 Forum Galien Africa for its potential to improve outbreak response.',
    image: mpoxImage,
    // TODO: confirm destination URL with IHA
    readMoreHref: '#',
  },
  {
    id: 'dhlsat',
    title: 'Digital Health Literacy Self-Assessment Tool (DHLSAT)',
    description:
      'A scientifically validated diagnostic framework developed to align with continental health workforce digital readiness efforts. The DHLSAT empowers frontline healthcare professionals across Africa to precisely map their digital competencies, identify critical literacy gaps, and access tailored recommendations to accelerate digital readiness at the frontline.',
    image: dhlsatImage,
    readMoreHref: 'https://dhl.innovatehealth.africa/',
  },
  {
    id: 'innovation-toolkit',
    title: 'Healthcare Innovation Toolkit',
    description:
      'A comprehensive resource hub for innovators to build user-driven healthcare products.',
    image: toolkitImage,
    // TODO: confirm destination URL with IHA
    readMoreHref: '#',
  },
]

const Page = () => <PillarCardGrid title="Our Innovations" cards={cards} />

export default Page
