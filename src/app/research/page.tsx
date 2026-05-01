import React from 'react'
import type { Metadata } from 'next'
import PillarCardGrid, { PillarCard } from '@/components/pillar-card-grid'
import researchPlaceholder from "@/assets/images/innovation_lab.png";

export const metadata: Metadata = {
  title: "Implementation Research | InnovateHealth Africa",
  description:
    "Scientific evidence on how digital health is experienced across African health systems, turning insight into stronger programmes, policies, and investment.",
};

const cards: PillarCard[] = [
  {
    id: 'ai-diagnostic-review',
    title:
      'AI-Powered Diagnostic Tools for Infectious Diseases in Low-Resource Settings: A Comprehensive Review',
    description:
      'A comprehensive review of how AI-powered diagnostic tools are being designed, deployed, and evaluated for infectious diseases in low-resource healthcare settings across Africa.',
    image: researchPlaceholder,
  },
]

const Page = () => <PillarCardGrid title="Our Research" cards={cards} />

export default Page
