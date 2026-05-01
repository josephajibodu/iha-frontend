import React from 'react'
import type { Metadata } from 'next'
import PillarCardGrid, { PillarCard } from '@/components/pillar-card-grid'
import fellowshipImage from "@/assets/images/fellowship.png";
import workshopImage from "@/assets/images/workshop.png";
import pitchyardImage from "@/assets/images/pitchyard.webp";
import innovationLabsImage from "@/assets/images/innovation_lab.png";

export const metadata: Metadata = {
  title: "Training Programmes | InnovateHealth Africa",
  description:
    "Competency-based training in digital health that equips health workers from frontline to leadership level — AHIF, Workforce Readiness, Executive Programme, and PitchYard.",
};

const cards: PillarCard[] = [
  {
    id: 'ahif',
    title: 'Africa Healthcare Innovation Fellowship (AHIF)',
    description:
      'Addressing the challenges of healthcare in Africa requires more than technology; it requires leaders who understand systems, context, and people. The Africa Healthcare Innovation Fellowship (AHIF) was designed to produce such leaders.',
    image: fellowshipImage,
    externalLink: { label: 'Learn more about AHIF 2026', href: '/ahif-2026' },
  },
  {
    id: 'dhwri',
    title: 'Digital Health Workforce Readiness Initiative',
    description:
      "Africa's health system is changing faster than the workforce has been prepared for. This programme equips frontline health workers with the practical digital competency they need to navigate new tools, make better use of health data, and deliver care with greater confidence in an increasingly digital workplace.",
    image: workshopImage,
    comingSoon: true,
  },
  {
    id: 'dhlep',
    title: 'Digital Health Leadership Executive Programme',
    description:
      "This programme is designed for the professionals inside Africa's health institutions who carry formal responsibility for digital strategy, systems, and change and who need structured development, a rigorous curriculum, and a peer network equal to the demands of that responsibility.",
    image: innovationLabsImage,
    comingSoon: true,
  },
  {
    id: 'pitchyard',
    title: 'PitchYard (Healthtech Edition)',
    description:
      'Built on a strategic thesis to expand the pipeline of investable African ventures, PitchYard provides a high-velocity environment for idea-stage healthtech founders to validate critical problems, stress-test early solutions, and capture the proof of traction required to scale across the continent.',
    image: pitchyardImage,
  },
]

const Page = () => <PillarCardGrid title="Training Programmes" cards={cards} />

export default Page
