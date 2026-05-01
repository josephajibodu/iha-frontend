"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import africaCDCLogo from "@/assets/images/partners/africaCDC_Logo.png";
import ahaLogo from "@/assets/images/partners/aha-logo.svg";
import dhaLogo from "@/assets/images/partners/dha_logo.png";
import ethioHealthLogo from "@/assets/images/partners/Ethio-Health-Logo-.png";
import healthlyticLogo from "@/assets/images/partners/healthlytic.webp";
import pranaEventsLogo from "@/assets/images/partners/prana_events.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Partner {
  name: string;
  logo: string | { src: string; height: number; width: number };
}

// Existing partners + 7 new partners per spec E1.
// New partner logos are awaiting delivery from IHA — keys defined here so they
// can be wired up by replacing the `null` values below with imported assets.
const PARTNERS: Partner[] = [
  { name: "Africa CDC", logo: africaCDCLogo },
  { name: "AHA", logo: ahaLogo },
  { name: "Digital Health Africa", logo: dhaLogo },
  { name: "Ethio Health", logo: ethioHealthLogo },
  { name: "Healthlytic", logo: healthlyticLogo },
  { name: "Prana Events", logo: pranaEventsLogo },
  // TODO: add when IHA supplies SVG/PNG-transparent logos
  // { name: "Africa Nazarene University", logo: africaNazareneLogo },
  // { name: "Social Entrepreneurship and Innovation Hub", logo: seihLogo },
  // { name: "Futurize", logo: futurizeLogo },
  // { name: "MTN Innovation Lab", logo: mtnInnovationLabLogo },
  // { name: "ALX Kenya", logo: alxKenyaLogo },
  // { name: "TORG", logo: torgLogo },
  // { name: "GITEX Africa", logo: gitexAfricaLogo },
];

export default function PartnerSection() {
  const isSmallScreen = useMediaQuery("(max-width: 500px)");

  return (
    <section className="bg-accent-100">
      <div className="flex flex-col items-center py-24 sm:px-8 lg:px-24 max-w-screen-2xl mx-auto">
        <h4 className="font-[600] text-[1.5rem] leading-normal text-center lg:text-start">
          We don&apos;t work alone! 30+ trusted partners in 6+ countries
        </h4>

        <div className="w-full mt-12">
          <Marquee
            speed={50}
            gradient={true}
            gradientColor="hsl(var(--accent-100))"
            gradientWidth={isSmallScreen ? 50 : 100}
            pauseOnHover
          >
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="h-[60px] w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
