import { Metadata } from "next";
import { blogs as allBlogs } from "#site/content";
import LatestRedirect from "@/components/LatestRedirect";

function getLatestBlog() {
  const publishedBlogs = allBlogs.filter((blog) => blog.published);
  publishedBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return publishedBlogs[0];
}

const latestBlog = getLatestBlog();

export async function generateMetadata(): Promise<Metadata> {
  if (!latestBlog) {
    return {
      title: "Latest Blog",
      description: "No blog posts found.",
    };
  }

  const ogImageUrl = latestBlog.image?.startsWith("https")
    ? latestBlog.image
    : `${process.env.NEXT_PUBLIC_APP_URL}${latestBlog.image}`;

  return {
    title: latestBlog.title,
    description: latestBlog.description,
    authors: {
      name: latestBlog.author,
    },
    openGraph: {
      title: latestBlog.title,
      description: latestBlog.description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${latestBlog.slug}`,
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: latestBlog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: latestBlog.title,
      description: latestBlog.description,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

export default function LatestPage() {
  if (!latestBlog) {
    return <p>No published blogs available.</p>;
  }

  return (
    <div className="flex size-full items-center justify-center">
      <LatestRedirect slug={latestBlog.slug} />
      <p>Redirecting to the latest blog...</p>
    </div>
  );
}
