import React from "react";
import africaCdc from "@/assets/images/programs/africacdc.png";
import ethioHealth from "@/assets/images/programs/ehtiohealth.png";
import digitalHealth from "@/assets/images/programs/digitalhealthafrica.png";
import ReusableWorkSection, { WorkItem } from "@/components/reusable-work-section";

// Example of using the main reusable work section for programs
const programsWorkItems: WorkItem[] = [
  {
    title: "Ethio Health Exhibition & Congress",
    description:
      "Provided innovation consultancy to design the Digital Health Hackathon for the 9th EthioHealth Exhibition and Congress in Ethiopia.",
    image: ethioHealth,
    tags: [
      "Consultancy",
      "Health Hackathon",
      "Digital Health",
      "Hackathon",
      "Mentorship",
    ],
  },
  {
    title: "Digital Health Africa",
    description:
      "Collaborated with Digital Health Africa to upskill 2,000+ African professionals in digital health innovation. This partnership focuses on equipping participants with the knowledge and tools to drive technology-driven healthcare solutions, enhancing their capacity to address critical health challenges across the continent.",
    image: digitalHealth,
    tags: ["Skill Acquisition", "Digital Health", "Healthcare", "Technology", "Africa"],
    reverse: true,
  },
  {
    title: "Africa CDC",
    description:
      "Partnered with Africa CDC to provide field data supporting the development of an AI tool for mpox detection. This collaboration enhances early detection and response capabilities, leveraging real-world data to improve the accuracy and effectiveness of AI-driven health solutions across Africa.",
    image: africaCdc,
    tags: ["AI", "mbox", "Field data", "Health solution", "Africa"],
  },
];

export default function PartnerShipView() {
  return (
    <ReusableWorkSection
      title="Our Partners"
      workItems={programsWorkItems}
      showViewMoreButton={true}
      viewMoreButtonText="Partner With Us"
      viewMoreButtonLink="/training-programmes"
      className="py-20"
    />
  );
}

