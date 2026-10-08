"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

import "./Development.css";

const process = [
  {
    number: "01",
    icon: <FaSearch />,
    title: "Discovery & Planning",
    description:
      "We understand your business goals, gather requirements, and create a strategic roadmap.",
  },
  {
    number: "02",
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    description:
      "Our designers craft intuitive and engaging interfaces that provide an excellent user experience.",
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "Development",
    description:
      "Using modern technologies, we build scalable, secure, and high-performance applications.",
  },
  {
    number: "04",
    icon: <FaBug />,
    title: "Testing & QA",
    description:
      "Every feature is thoroughly tested to ensure quality, security, and reliability.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Deployment",
    description:
      "We launch your project smoothly with optimized performance and proper configuration.",
  },
  {
    number: "06",
    icon: <FaHeadset />,
    title: "Maintenance & Support",
    description:
      "We provide continuous updates, monitoring, and technical support after launch.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="developmentProcess">
      <div className="container">
        <div className="sectionHeader">
          <span>OUR PROCESS</span>
          <h2>Our Development Process</h2>
          <p>
            We follow a streamlined development process to transform your ideas
            into reliable, scalable, and high-quality digital solutions.
          </p>
        </div>

        <div className="processGrid">
          {process.map((step) => (
            <div className="processCard" key={step.number}>
              <span className="stepNumber">{step.number}</span>

              <div className="icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}