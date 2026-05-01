import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import workforceImage from "@/assets/images/fellowship.png";
import researchImage from "@/assets/images/workshop.png";
import innovationImage from "@/assets/images/innovation_lab.png";

interface PortfolioCard {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  image: StaticImageData;
}

const cards: PortfolioCard[] = [
  {
    title: "Workforce Capacity Development",
    description:
      "We design and deliver competency based training in digital health that equip health workers from the frontline to the leadership level with the competence, confidence and capability to deliver better care, make smarter decisions, and grow within a health system that is rapidly evolving.",
    buttonLabel: "Explore Our Training Programmes",
    href: "/training-programmes",
    image: workforceImage,
  },
  {
    title: "Implementation Research",
    description:
      "We generate scientific evidence on how digital health is actually being experienced across African health systems, what is working, what is not, and what the data is telling us. We turn implementation insight into knowledge that shapes better programmes, stronger policies, and smarter investment.",
    buttonLabel: "See Our Research Work",
    href: "/research",
    image: researchImage,
  },
  {
    title: "Innovation",
    description:
      "We work with public and private health institutions to design, develop, and implement digital health solutions that are shaped by the communities they serve.",
    buttonLabel: "Discover Our Innovations",
    href: "/innovations",
    image: innovationImage,
  },
];

export default function PortfolioOfChange() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:px-0 py-20 lg:py-28">
      <h2 className="text-3xl lg:text-5xl text-center text-primary font-bold mb-12">
        Our Portfolio of Change
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:[&>*:nth-child(3)]:col-span-2 md:[&>*:nth-child(3)]:max-w-md md:[&>*:nth-child(3)]:mx-auto lg:[&>*:nth-child(3)]:col-span-1 lg:[&>*:nth-child(3)]:max-w-none lg:[&>*:nth-child(3)]:mx-0">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md transition-all [transition-duration:250ms] ease-out hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div className="relative w-full h-[220px] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-xl font-bold text-primary leading-snug mb-3 transition-colors [transition-duration:250ms] group-hover:text-[#006666]">
                {card.title}
              </h3>
              <p
                className="text-[15px] text-gray-700 mb-6 flex-1"
                style={{ lineHeight: 1.6 }}
              >
                {card.description}
              </p>

              <span className="mt-auto inline-flex items-center justify-center gap-2 self-start border border-[#006666] text-[#006666] bg-transparent px-5 py-2 rounded-md text-sm font-semibold transition-all [transition-duration:250ms] ease-out group-hover:bg-[#006666] group-hover:text-white">
                {card.buttonLabel}
                <ArrowRight
                  size={16}
                  className="transition-transform [transition-duration:250ms] group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
