import React from "react";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quest | The Quest",
  description: "A journey on becoming greater version of myself than before.",
  openGraph: {
    title: "Quest | The Quest",
    description: "A journey on becoming greater version of myself than before.",
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
        description="A journey on becoming greater version of myself than before."
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
              <strong>AI/ML mastery:</strong> Have a strong grasp on building AI Agents, ship products that helps developer to their productivity.
            </li>
            <li>
              <strong>Career Growth:</strong> Have a strong knowledge on full stack , implement them on real world projects, whether in hackathons or 
              paid projects
            </li>
            <li>
              <strong>Get into GSOC:</strong>Our main goal this year is to get into GSOC, Which is my last and only that i believe 
            </li>
            <li>
              <strong>Web3 Exploration:</strong>Since my eagerness on Web3 and planned to explore it this year , so I am explore blockchain using Rust 
              and prepare myself on winning global hackathons , to push my princple thinking and problem solving skills.
            </li>
            <li>
              <strong>DSA Mastery:</strong>I may not fond to DSA , but it will make myself stronger over my figure.
            </li>
            <strong>Now comes the Real part</strong>
            <li>
              <strong>A Prepared Chariot:</strong>have a strong influence on making money with our existing knowledge , and make a impact on our life.
            </li>
            <li>
              <strong>final money we make:</strong>Make upto 10 lakhs in this plan 
            </li>
            <li>
              <strong>Get into better shape:</strong>Since health is the most priority , I must follow 
                      some diet and start workout with my body
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Why This Quest?</h2>
          <p>
           Growth takes place only when things get broken and shines with new one ,
           This year will be my successful early stage of my adulthood
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">The Goals</h2>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">DSA in JavaScript</h3>
              <p className="text-sm text-muted-foreground">
                Get into GSOC is the first priority
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Earn Money</h3>
              <p className="text-sm text-muted-foreground">
                Work on projects to earn ₹10,00,000 by the end of the
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
            <li>Number of projects I have built to embrace my knowledge</li>
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
