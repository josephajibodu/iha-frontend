"use client";

import React, { useEffect, useState, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PillarCard {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  comingSoon?: boolean;
  detail?: ReactNode;
  meta?: { label: string; value: string }[];
  externalLink?: { label: string; href: string };
  // When set, the Read More CTA navigates to this URL instead of opening the
  // modal. Absolute URLs (http/https) open in a new tab.
  readMoreHref?: string;
}

const isExternal = (href: string) => /^https?:\/\//i.test(href);

interface PillarCardGridProps {
  title?: string;
  cards: PillarCard[];
  className?: string;
}

export default function PillarCardGrid({ title, cards, className }: PillarCardGridProps) {
  const [active, setActive] = useState<PillarCard | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className={cn("max-w-screen-xl mx-auto px-6 lg:px-0 py-16", className)}>
      {title && (
        <h2 className="text-3xl lg:text-5xl text-center text-primary font-bold mb-12">
          {title}
        </h2>
      )}

      <div
        className={cn(
          "grid gap-8",
          cards.length === 1
            ? "grid-cols-1 max-w-md mx-auto"
            : cards.length === 2
              ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {cards.map((card) => (
          <article
            key={card.id}
            className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md transition-all [transition-duration:250ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div className="relative w-full h-[240px] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              {card.comingSoon && (
                <span className="absolute top-3 right-3 bg-[#006666] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  Coming Soon
                </span>
              )}
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="text-[19px] font-bold text-primary leading-snug mb-3 transition-colors [transition-duration:250ms] group-hover:text-[#006666]">
                {card.title}
              </h3>
              <p
                className="text-[15px] text-gray-700 mb-6 flex-1"
                style={{
                  lineHeight: 1.6,
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {card.description}
              </p>

              {(() => {
                const ctaClass =
                  "mt-auto inline-flex items-center justify-center gap-2 self-start border border-[#006666] text-[#006666] bg-transparent px-5 py-2 rounded-md text-sm font-semibold transition-all [transition-duration:250ms] ease-out hover:bg-[#006666] hover:text-white disabled:cursor-not-allowed disabled:opacity-60";
                const arrow = (
                  <ArrowRight
                    size={16}
                    className="transition-transform [transition-duration:250ms] group-hover:translate-x-1"
                  />
                );

                if (card.comingSoon && !card.detail && !card.readMoreHref) {
                  return (
                    <button type="button" disabled className={ctaClass} aria-label={`${card.title} (Coming Soon)`}>
                      Coming Soon
                    </button>
                  );
                }

                if (card.readMoreHref) {
                  const external = isExternal(card.readMoreHref);
                  return (
                    <a
                      href={card.readMoreHref}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className={ctaClass}
                      aria-label={`Read more about ${card.title}`}
                    >
                      Read More
                      {arrow}
                    </a>
                  );
                }

                return (
                  <button
                    type="button"
                    onClick={() => setActive(card)}
                    className={ctaClass}
                    aria-label={`Read more about ${card.title}`}
                  >
                    Read More
                    {arrow}
                  </button>
                );
              })()}
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pillar-detail-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close detail view"
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-white/90 hover:bg-white border border-gray-200 flex items-center justify-center shadow"
            >
              <X size={18} />
            </button>
            <div className="relative w-full h-[300px] sm:h-[360px]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 768px, 100vw"
              />
            </div>
            <div className="p-6 sm:p-10">
              <h3 id="pillar-detail-title" className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                {active.title}
              </h3>
              {active.meta && active.meta.length > 0 && (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm">
                  {active.meta.map((m) => (
                    <div key={m.label}>
                      <dt className="font-semibold text-gray-600">{m.label}</dt>
                      <dd className="text-gray-800">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className="prose prose-sm sm:prose-base max-w-none text-gray-800 leading-relaxed">
                {active.detail ?? <p>{active.description}</p>}
              </div>
              {active.externalLink && (
                <a
                  href={active.externalLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-[#006666] font-semibold hover:underline"
                >
                  {active.externalLink.label}
                  <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
