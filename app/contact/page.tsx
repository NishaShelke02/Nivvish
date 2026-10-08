import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
export const metadata: Metadata = {
  title: "Contact | Nivvish Infotech",
  description:
    "Explore our expertise in Website Development, Mobile App Development, Custom Software, UI/UX Design, SEO and Digital Marketing services.",
  keywords:
    "IT Services, Website Development, Mobile Apps, Software Development, SEO",
};


export default function ServicesPage() {

  return (

    <main>

      


      {/* Our Expertise Component */}
      <Contact />


    </main>

  );
}