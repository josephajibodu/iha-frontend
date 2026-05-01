import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About | InnovateHealth Africa",
  description:
    "Most failure in health systems comes from distance. At IHA, closing that distance is how we do everything — meet our team and explore our philosophy.",
};

export const viewport: Viewport = {
  themeColor: "#006666",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
