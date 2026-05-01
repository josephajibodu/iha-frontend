"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "./blogCard";
import { FeaturedBlogCard } from "./featuredBlogPost";
import { SanityTypes } from "@/@types";
import { cn } from "@/lib/utils";

interface BlogGridProps {
  posts: SanityTypes.BlogPost[];
}

const CATEGORY_TABS = [
  "All",
  "Latest Announcements",
  "Programs and Fellowships",
  "Research and Innovation",
  "Partnerships and Events",
] as const;

type CategoryTab = (typeof CATEGORY_TABS)[number];

export function BlogArchiveGrid({ posts }: BlogGridProps) {
  const [activeTab, setActiveTab] = useState<CategoryTab>("All");

  const filtered = useMemo(() => {
    if (activeTab === "All") return posts;
    return posts.filter((p) =>
      p.categories?.some((c) => c?.title === activeTab),
    );
  }, [posts, activeTab]);

  const featuredPost = filtered[0];
  const regularPosts = filtered.slice(1);

  return (
    <div className="flex flex-col space-y-12 px-8 lg:px-0">
      <nav
        aria-label="Filter news by category"
        className="flex flex-wrap gap-2 justify-center"
      >
        {CATEGORY_TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={isActive}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                isActive
                  ? "bg-[#006666] text-white border-[#006666]"
                  : "bg-white text-primary border-gray-300 hover:border-[#006666] hover:text-[#006666]",
              )}
            >
              {tab}
            </button>
          );
        })}
      </nav>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-600 py-12">
          No posts in this category yet.
        </p>
      ) : (
        <>
          {featuredPost && <FeaturedBlogCard post={featuredPost} />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-20">
            {regularPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
