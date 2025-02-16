import React from "react";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quest | The Quest",
  description: "A journey to become better before my 20th birthday.",
  openGraph: {
    title: "Quest | The Quest",
    description: "A journey to become better before my 20th birthday.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/quest.png`,
        width: 1200,
        height: 630,
        alt: "THE QUEST OG Image",
      },
    ],
  },
};

export default function QuestPage() {
  return (
    <div className="container relative max-w-3xl py-6 lg:py-10">
      <PageHeader
        title="The Quest"
        description="A journey to become better before my 20th birthday."
      />

      <div className="prose prose-gray dark:prose-invert mt-4">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">The Quest</h2>
          <p>
            The Quest is a{" "}
            <span className="text-primary">6-months journey</span> of coding,
            earning, and fitness. It&apos;s a personal challenge to become
            better before my 20th birthday.
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>
              <strong>DSA Mastery:</strong> Solving at least 2/3 DSA problems
              daily.
            </li>
            <li>
              <strong>Income Growth:</strong> Working on freelance projects to
              earn consistently by the end of the quest.
            </li>
            <li>
              <strong>Physical Health:</strong> Maintaining a regular workout
              routine and healthy eating habits.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Why This Quest?</h2>
          <p>
            I believe that the best way to grow is by challenging oneself. The
            Quest is a way to push my limits and become better in all aspects of
            life. I want to become a better version of myself before my 20th
            birthday. I want to be more disciplined, more focused, and more
            successful.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">The Goals</h2>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">DSA in JavaScript</h3>
              <p className="text-sm text-muted-foreground">
                Solve at least 500 DSA problems in JavaScript by the end of the
                quest.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Earn Money</h3>
              <p className="text-sm text-muted-foreground">
                Work on freelance projects to earn ₹300,000 by the end of the
                quest.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Health & Fitness</h3>
              <p className="text-sm text-muted-foreground">
                Do 5 days a week workout and learn calisthenics by the end of
                the quest.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Progress Tracking</h2>
          <p>
            I&apos;ll be documenting my daily progress through blog posts,
            including:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>Number of DSA problems solved</li>
            <li>Income generated from projects</li>
            <li>Workout completion status</li>
            <li>Key learnings and challenges</li>
          </ul>

          <div className="mt-4 space-x-4 text-center">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "border"
              )}
            >
              See the progress ➤
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
