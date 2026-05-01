"use client";
import Link from "next/link";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

// LinkedIn URL — IHA to supply official company page; placeholder until then.
const LINKEDIN_URL = "https://www.linkedin.com/company/innovate-health-africa/";

const programmeLinks = [
  { label: "Training Programmes", href: "/training-programmes" },
  { label: "Research", href: "/research" },
  { label: "Innovations", href: "/innovations" },
];

const otherLinks = [
  { label: "News & Updates", href: "/news" },
  { label: "Partnerships", href: "/partnership" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    Icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/innovatehealthafrica",
    Icon: Facebook,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/innovatehealth",
    Icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/innovatehealthafrica",
    Icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-screen-xl px-8 mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl text-accent font-medium leading-normal">
            Core Programmes
          </h2>
          <ul className="space-y-3">
            {programmeLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-base font-light text-white hover:text-accent hover:underline transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl text-accent font-medium leading-normal">
            More
          </h2>
          <ul className="space-y-3">
            {otherLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-base font-light text-white hover:text-accent hover:underline transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl text-accent font-medium leading-normal">
            Follow Us
          </h2>
          <ul className="flex gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-10 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-accent/30 text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-accent flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-0 w-full max-w-screen-xl mx-auto px-8 pt-16">
        <span className="text-xs lg:text-sm font-light">
          © {new Date().getFullYear()} INNOVATEHEALTH AFRICA. ALL RIGHTS RESERVED.
        </span>

        <div className="flex text-white">
          <Link
            href="#"
            className="after:content-['|'] after:px-4 text-xs lg:text-sm hover:underline"
          >
            Terms of Use
          </Link>
          <Link href="#" className="text-xs lg:text-sm hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
