import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProgressCard from "@/components/progress-card";
import { blogs as allBlogs } from "#site/content";

export default function Home() {
  const blogs = allBlogs.filter((blog) => blog.published);

  // Calculate total DSA questions solved
  const dsaAchieved = blogs.reduce((total, blog) => {
    return total + (blog.achievements?.dsa || 0);
  }, 0);

  // Calculate total money earned
  const moneyAchieved = blogs.reduce((total, blog) => {
    return total + (blog.achievements?.money || 0);
  }, 0);

  // Calculate workout streak days
  // This counts consecutive days from latest to oldest where workout was true
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  let daysAchieved = 0;
  for (const blog of sortedBlogs) {
    if (blog.achievements?.workout) {
      daysAchieved++;
    } else {
      // Break the streak if we find a day without workout
      break;
    }
  }

  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mt-6 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
        <div className="flex items-center space-x-2">
          {SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={social.path}
              rel="noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80"
              )}
            >
              <social.icon className="size-6" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>
        <h1 className="text-3xl capitalize sm:text-5xl md:text-6xl lg:text-7xl">
          I&apos;m on a mission to complete 🔥
          <span className="font-code font-bold text-primary ">
            THE QUEST
          </span>{" "}
          within <span className="font-code text-yellow-300">6 Months</span>
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProgressCard
            title="DSA in JS"
            goal={500}
            achieved={dsaAchieved}
            unit=" Questions"
          />
          <ProgressCard
            title="Money"
            goal={300000}
            achieved={moneyAchieved}
            unit="₹"
          />
          <ProgressCard
            title="Physique"
            goal={180}
            achieved={daysAchieved}
            unit=" Days"
          />
        </div>
        <div className="space-x-4">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "border"
            )}
          >
            See the journey
          </Link>
        </div>
      </div>
    </section>
  );
}
