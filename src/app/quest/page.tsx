import React from "react";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Quest",
  description: "A 100-day journey of coding, earning, and fitness"
};

export default function QuestPage() {
  return (
    <div className="container relative max-w-3xl py-6 lg:py-10">
      <PageHeader 
        title="The Quest" 
        description="My 100-day journey to become better" 
      />
      
      <div className="prose prose-gray dark:prose-invert">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
          <p>
            I&apos;ve embarked on a 100-day quest to transform myself through three core pillars:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li><strong>DSA Mastery:</strong> Solving at least 2 Data Structures & Algorithms problems daily</li>
            <li><strong>Income Growth:</strong> Working on freelance projects to earn consistently</li>
            <li><strong>Physical Health:</strong> Maintaining a regular workout routine</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Why This Quest?</h2>
          <p>
            In the fast-paced world of technology, continuous improvement is crucial. 
            This quest combines technical growth, financial independence, and physical 
            wellbeing - the three pillars I believe are essential for a successful 
            career in tech.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">The Goals</h2>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Technical Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Master DSA concepts, improve problem-solving skills, and prepare for 
                technical interviews.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Financial Growth</h3>
              <p className="text-sm text-muted-foreground">
                Build a sustainable income stream through freelancing and personal projects.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Health & Fitness</h3>
              <p className="text-sm text-muted-foreground">
                Maintain physical and mental wellbeing through regular exercise and healthy habits.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Progress Tracking</h2>
          <p>
            I&apos;ll be documenting my daily progress through blog posts, including:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>Number of DSA problems solved</li>
            <li>Income generated from projects</li>
            <li>Workout completion status</li>
            <li>Key learnings and challenges</li>
          </ul>
        </section>
      </div>
    </div>
  );
}