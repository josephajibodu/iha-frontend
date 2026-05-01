import React, { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import teamData from "@/json/teamData.json";
import { cn } from "@/lib/utils";

const teamDataArray = teamData as MemberType[];

interface MemberType {
  name: string;
  title: string;
  image: string;
  linkedIn: string;
  tag: string;
}

const TAGS = [
  "Leadership",
  "Design & Innovation",
  "Partnership & Grants",
  "Research & Development",
  "Communications",
  "Consultations",
  "Programs",
];

export default function TeamMembers() {
  const [activeTag, setActiveTag] = useState("Leadership");

  const renderMember = (member: MemberType) => (
    <article
      key={member.name}
      className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
    >
      <div className="relative w-40 h-40 rounded-2xl overflow-hidden bg-gray-100">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="160px"
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-600 text-2xl font-bold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
      </div>

      <h3 className="font-bold text-primary text-lg sm:text-xl mt-5">
        {member.name}
      </h3>
      <p className="text-sm text-gray-700 mt-1 mb-4 min-h-[2.5em]">
        {member.title}
      </p>

      {member.linkedIn && (
        <a
          href={member.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="size-9 flex justify-center items-center rounded-full bg-[#0A66C2] hover:bg-[#004182] transition-colors"
        >
          <Linkedin color="white" size={18} />
        </a>
      )}
    </article>
  );

  const filtered = teamDataArray.filter((m) => m.tag === activeTag);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav
        aria-label="Filter team by department"
        className="px-4 max-w-screen-xl mx-auto flex justify-center mb-12"
      >
        <div className="flex gap-3 overflow-x-auto py-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className={cn(
                "border border-slate-300 px-4 py-2 text-sm md:text-base rounded-md whitespace-nowrap transition-colors",
                activeTag === tag
                  ? "bg-primary-bright-orange border-primary-bright-orange"
                  : "bg-white hover:border-[#006666]",
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </nav>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-600 py-12">
          Team members for this department coming soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((member) => renderMember(member))}
        </div>
      )}
    </div>
  );
}
