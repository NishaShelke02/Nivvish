
import type { Metadata } from "next";
import Blogs from "@/components/Blogs/Blogs";

export const metadata: Metadata = {
  title: "Blogs | Nivvish Infotech",
  description:
    "Explore the latest insights from Nivvish Infotech on web development, mobile apps, AI, UI/UX, SEO, e-commerce, and custom software development.",
  keywords:
    "Nivvish Infotech Blogs, Web Development, Mobile App Development, AI, UI UX, SEO, E-commerce, Custom Software",
};

export default function BlogsPage() {
  return (
    <main>
      <Blogs />
    </main>
  );
}
