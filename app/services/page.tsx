import type { Metadata } from "next";
import Services from "@/components/Services/Services";

export const metadata: Metadata = {
  title: "Services | Nivvish Infotech",
  description:
    "Explore our expertise in Website Development, Mobile App Development, Custom Software, UI/UX Design, SEO and Digital Marketing services.",
  keywords:
    "IT Services, Website Development, Mobile Apps, Software Development, SEO",
};


export default function ServicesPage() {

  return (

    <main>

      


      {/* Our Expertise Component */}
      <Services />


    </main>

  );
}