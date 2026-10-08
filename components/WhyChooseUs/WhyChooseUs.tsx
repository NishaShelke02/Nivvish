"use client";

import {
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaCode,
} from "react-icons/fa";

import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaUsers />,
    title: "Experienced Team",
    description:
      "Our skilled developers and designers create high-quality digital solutions tailored to your business goals.",
  },
  {
    icon: <FaRocket />,
    title: "Latest Technologies",
    description:
      "We build scalable applications using React, Next.js, Node.js, TypeScript, and modern cloud technologies.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    description:
      "We follow industry best practices to deliver secure, reliable, and high-performance applications.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "From project planning to post-launch maintenance, our team is always ready to help.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description:
      "We follow agile development processes to ensure every project is delivered on schedule.",
  },
  {
    icon: <FaCode />,
    title: "Custom Solutions",
    description:
      "Every business is unique, so we develop customized software that fits your specific requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="whyChooseSection">
      <div className="container">
        <div className="sectionHeader">
          <span>WHY CHOOSE US</span>
          <h2>Why Choose Nivvish Infotech?</h2>
          <p>
            We combine innovation, creativity, and technology to deliver
            solutions that help businesses grow and succeed in the digital
            world.
          </p>
        </div>

        <div className="whyGrid">
          {features.map((feature, index) => (
            <div className="whyCard" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}