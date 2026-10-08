import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nivvishinfotech.com"),

  title: {
    default: "Nivvish Infotech | Website Development, Mobile Apps & Digital Solutions",
    template: "%s | Nivvish Infotech",
  },

  description:
    "Nivvish Infotech provides Website Development, Mobile App Development, UI/UX Design, Digital Marketing, SEO, E-Commerce Solutions, and Custom Software Development for businesses worldwide.",

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
    "Ecommerce Website",
    "IT Company India",
    "Nashik IT Company",
  ],

  authors: [
    {
      name: "Nivvish Infotech",
    },
  ],

  creator: "Nivvish Infotech",

  publisher: "Nivvish Infotech",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Nivvish Infotech | Website Development & IT Solutions",

    description:
      "Professional Website Development, Mobile Apps, SEO, Digital Marketing, UI/UX Design and Custom Software Solutions.",

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
      "Website Development, Mobile Apps, SEO & Digital Marketing.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.nivvishinfotech.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}