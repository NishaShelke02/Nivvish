import type { Metadata } from "next";
import About from "@/components/About/About";

export const metadata: Metadata = {
  title: "About Us | Nivvish Infotech - Web Development & IT Solutions Company",
  description:
    "Learn about Nivvish Infotech — a Nashik-based IT company delivering website development, mobile apps, custom software, UI/UX design, SEO, and digital marketing solutions to businesses worldwide.",

  keywords: [
    "About Nivvish Infotech",
    "Nivvish Infotech Company",
    "IT Company Nashik",
    "Web Development Company India",
    "Software Development Company",
    "About Us IT Company",
    "Nivvish Infotech Team",
    "Website Development Nashik",
    "Digital Solutions Company",
  ],

  alternates: {
    canonical: "https://www.nivvishinfotech.com/about",
  },

  openGraph: {
    title: "About Nivvish Infotech | Our Story, Mission & Values",
    description:
      "Discover who we are, what drives us, and how Nivvish Infotech helps businesses transform ideas into powerful digital solutions.",
    url: "https://www.nivvishinfotech.com/about",
    siteName: "Nivvish Infotech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Nivvish Infotech",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Nivvish Infotech",
    description:
      "A Nashik-based IT company delivering websites, apps, and digital solutions that help businesses grow.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main>
      <About />
    </main>
  );
}