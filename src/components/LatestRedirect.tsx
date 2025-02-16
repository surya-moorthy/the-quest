"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface LatestRedirectProps {
  slug: string;
}

export default function LatestRedirect({ slug }: LatestRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/blog/${slug}`);
  }, [slug, router]);

  return null;
}
