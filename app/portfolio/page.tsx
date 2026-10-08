
import type { Metadata } from "next";
import Port from "@/components/Port/Port";

export const metadata: Metadata = {
  title: "Portfolio | Nivvish Infotech",
  description:
    "Explore Nivvish Infotech's portfolio of websites, mobile applications, custom software solutions, and digital projects built for businesses.",
  keywords:
    "Nivvish Infotech Portfolio, Web Development Projects, Mobile App Projects, Software Projects, IT Portfolio",
};

export default function PortfolioPage() {
  return (
    <main>
      {/* Our Portfolio Component */}
      <Port />
    </main>
  );
}
