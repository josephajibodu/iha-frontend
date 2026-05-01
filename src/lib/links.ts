export interface LinkItem {
  title: string;
  href?: string;
  description?: string;
  menu?: LinkItem[];
}

const LINKS = {
  Home: {
    title: "Home",
    href: "/",
  },
  About: {
    title: "About",
    href: "/about",
  },
  AHIF2026: {
    title: "AHIF 2026",
    href: "/ahif-2026",
  },
  News: {
    title: "News",
    href: "/news",
  },
  Portfolio: {
    title: "Portfolio",
    href: "/portfolio",
  },
  Careers: {
    title: "Work with us",
    href: "/careers",
  },
  TrainingProgrammes: {
    title: "Training Programmes",
    href: "/training-programmes",
    description:
      "Competency-based training equipping health workers from frontline to leadership.",
  },
  Research: {
    title: "Research",
    href: "/research",
    description:
      "Implementation research that turns insight into stronger programmes and policies.",
  },
  Innovations: {
    title: "Innovations",
    href: "/innovations",
    description:
      "Digital health solutions designed with the communities they serve.",
  },
  Partnership: {
    title: "Partnership",
    href: "/partnership",
    description:
      "We build strong partnerships with governments, non-profits, private sector.",
  },
};

export default LINKS;
