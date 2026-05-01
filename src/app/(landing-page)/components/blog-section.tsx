"use client";

import React from "react";
import { SanityTypes } from "@/@types";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/news/blogCard";
import { useRouter } from "next/navigation";

interface BlogGridProps {
  posts: SanityTypes.BlogPost[]
}

export default function BlogSection({ posts }: BlogGridProps) {
  const router = useRouter();

  const regularPosts = (posts ?? []).slice(0, 4);

  const handleViewMore = () => {
    router.push("/news")
  }

  return (
    <section className="bg-primary-green/5 py-20">
      <div className="px-8 lg:px-24 gap-x-12 max-w-screen-xl mx-auto">
        <div className="mb-10 flex flex-col lg:flex-row justify-between lg:items-end gap-y-4 lg:gap-y-0">
          <h2 className="text-xl sm:text-2xl">
            IHA news and <br />
            <span className="font-[600] text-3xl sm:text-5xl lg:leading-normal">
              highlights
            </span>
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {regularPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        <div className="flex justify-end">
          <Button className="mt-12 cursor-pointer" size="lg" onClick={handleViewMore}>
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}
