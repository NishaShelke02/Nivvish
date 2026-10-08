import type { Metadata } from "next";
import Home from "@/components/Home/Home";
import OurExpertise from "@/components/OurExpertise/OurExpertise";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Development from "@/components/Development/Development"
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import GetTouch from "@/components/Get-touch/Get-touch";
export const metadata: Metadata = {
  title: "Nivvish Infotech | Website Development, Mobile Apps & Digital Solutions",
  description:
    "Nivvish Infotech offers Website Development, Mobile App Development, UI/UX Design, SEO, Digital Marketing, E-Commerce Solutions, and Custom Software Development for businesses worldwide.",

  keywords: [
    "Nivvish Infotech",
    "Website Development",
    "Web Development Company",
    "Mobile App Development",
    "React Development",
    "Next.js Development",
    "SEO Services",
    "Digital Marketing",
    "UI UX Design",
    "Software Development",
    "IT Company",
    "Nashik",
    "India",
  ],

  alternates: {
    canonical: "https://www.nivvishinfotech.com",
  },

  openGraph: {
    title: "Nivvish Infotech | Website Development & IT Solutions",
    description:
      "Transform your ideas into digital reality with cutting-edge web development, mobile applications, SEO, and digital marketing services.",
    url: "https://www.nivvishinfotech.com",
    siteName: "Nivvish Infotech",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nivvish Infotech",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nivvish Infotech",
    description:
      "Expert Website Development, Mobile Apps, SEO & Digital Marketing.",
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

      {/* Hero + Home Sections */}
      <Home />


      {/* Our Expertise Section */}
      <OurExpertise />
      <WhyChooseUs />
      <Development />
      <Portfolio />
      <Testimonials />
      <GetTouch />


    </main>
  );
}