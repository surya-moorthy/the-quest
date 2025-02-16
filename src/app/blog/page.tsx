/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { blogs as allBlogs } from "#site/content";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  // Get only published blogs
  const publishedBlogs = allBlogs.filter((blog) => blog.published);

  // Sort blogs in ascending order to compute streaks (oldest to newest)
  const blogsAsc = [...publishedBlogs].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Compute streaks: if at least two tasks are valid then streak increases
  let prevStreak = 0;
  const blogsWithStreak = blogsAsc.map((blog) => {
    let validCount = 0;
    if (blog.achievements?.dsa && blog.achievements.dsa > 0) validCount++;
    if (blog.achievements?.money && blog.achievements.money > 0) validCount++;
    if (blog.achievements?.workout) validCount++;

    let streak = 0;
    if (validCount >= 2) {
      streak = prevStreak + 1;
    } else {
      streak = 0; // Break day: streak resets to 0.
    }
    prevStreak = streak;
    return { ...blog, streak };
  });

  // Compute the longest streak among all blog entries
  const longestStreak = blogsWithStreak.reduce(
    (max, blog) => Math.max(max, blog.streak),
    0
  );

  // Sort descending for display (most recent first)
  const blogsDesc = blogsWithStreak.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <PageHeader
        title="Blogs & Journey"
        description="New day new challenges and a new blog"
      />
      {/* Longest streak tag */}
      <div className="mb-4 mt-8 text-left">
        <span className="rounded bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
          Longest Streak: {longestStreak} days
        </span>
      </div>
      <hr className="my-6" />

      {blogsDesc.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {blogsDesc.map((blog) => (
            <article
              key={blog.slug}
              className="group relative flex flex-col space-y-2"
            >
              {blog.image && (
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    width={804}
                    height={452}
                    className="border bg-muted transition-colors"
                  />
                  {/* Show streak badge if day qualifies */}
                  {blog.streak > 0 && (
                    <div className="absolute right-2 top-2 rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-black">
                      🔥 {blog.streak}
                    </div>
                  )}
                </div>
              )}

              {/* Three tags between image and heading */}
              <div className="flex gap-2">
                <span className="rounded-md border px-2 py-1 text-xs">
                  🤔 : {blog.achievements?.dsa ?? 0}
                </span>
                <span className="rounded-md border px-2 py-1 text-xs">
                  💸: {blog.achievements?.money ?? 0}
                </span>
                <span className="rounded-md border px-2 py-1 text-xs">
                  💪🏻: {blog.achievements?.workout ? "🔥" : "😭"}
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-primary">
                {blog.title}
              </h2>
              {blog.description && (
                <p className="text-muted-foreground">{blog.description}</p>
              )}

              {blog.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(blog.date)}
                </p>
              )}

              <Link href={`/blog/${blog.slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No Blogs found</p>
      )}
    </div>
  );
}
