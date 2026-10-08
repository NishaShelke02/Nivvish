
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaUsers,
  FaArrowRight,
  FaCode,
  FaRocket,
  FaHeart,
} from "react-icons/fa";

import "./About.css";

type Value = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Service = {
  href: string;
  title: string;
};

const values: Value[] = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We stay ahead of the curve, embracing new technologies and creative approaches to solve real business problems.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description:
      "Honest communication and transparent processes are at the core of every project we take on.",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    description:
      "We hold ourselves to high standards, delivering clean, scalable, and thoroughly tested work every time.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centric",
    description:
      "Your goals shape our roadmap. We listen first, then build solutions tailored to your exact needs.",
  },
  {
    icon: <FaRocket />,
    title: "Growth Mindset",
    description:
      "We treat every project as a partnership focused on long-term, measurable business growth.",
  },
  {
    icon: <FaHeart />,
    title: "Passion",
    description:
      "We genuinely care about the craft of building great software — it shows in the details.",
  },
];

const services: Service[] = [
  {
    href: "/services/web",
    title: "Website Development",
  },
  {
    href: "/services/mobile",
    title: "Mobile App Development",
  },
  {
    href: "/services/software",
    title: "Custom Software",
  },
  {
    href: "/services/uiux",
    title: "UI/UX Design",
  },
  {
    href: "/services/ecommerce",
    title: "E-Commerce Solutions",
  },
  {
    href: "/services/seo",
    title: "SEO Optimization",
  },
  {
    href: "/services/marketing",
    title: "Digital Marketing",
  },
  {
    href: "/services/cloud",
    title: "Cloud & Security",
  },
];

export default function About() {
  return (
    <main className="aboutPage">

      {/* ================= HERO ================= */}
      <section className="aboutHero">
        <div className="container">
          <span className="hero-tag">
            🚀 About Nivvish Infotech
          </span>

          <h1>
            Building Digital Products That{" "}
            <span>Drive Business Growth</span>
          </h1>

          <p>
            Nivvish Infotech is your trusted technology partner in Nashik,
            Maharashtra. We design and deliver scalable websites, mobile apps,
            and custom software solutions that empower businesses to
            innovate, streamline operations, and achieve measurable success.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="aboutStory">
        <div className="container storyGrid">

          <div className="storyImage">
            <Image
              src="/images/About1.png"
              alt="Nivvish Infotech Team"
              width={800}
              height={600}
              priority
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <div className="storyContent">
            <span className="section-badge">
              Our Story
            </span>

            <h2>
              Turning Ideas Into Digital Reality
            </h2>

            <p>
              Founded with a simple mission — to make enterprise-level
              technology accessible to businesses of all sizes — Nivvish
              Infotech began as a small team of passionate developers.
            </p>

            <p>
              Today, we are a full-service digital partner working with
              clients across India and beyond. From startups launching their
              first website to established companies modernizing their digital
              infrastructure, every project receives the same care,
              craftsmanship, and attention to detail.
            </p>

            <p>
              Our expertise spans web development, mobile applications,
              custom software, and marketing systems — all built to be fast,
              secure, and scalable, with ongoing support long after launch.
            </p>

            <Link
              href="/contact"
              className="storyBtn"
            >
              Work With Us
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="missionVision">
        <div className="container mvGrid">

          <div className="mvCard">
            <div className="mvIcon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To empower businesses with innovative, reliable, and scalable
              technology solutions that simplify operations, elevate user
              experiences, and accelerate growth — delivered with integrity
              and genuine care.
            </p>
          </div>

          <div className="mvCard">
            <div className="mvIcon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To be a trusted long-term technology partner worldwide,
              recognized for building thoughtful digital products and lasting
              client relationships.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="coreValues">
        <div className="container">

          <div className="sectionHeader">
            <span>WHAT DRIVES US</span>

            <h2>Our Core Values</h2>

            <p>
              These principles guide how we build software, communicate with
              clients, and grow as a team.
            </p>
          </div>

          <div className="valuesGrid">
            {values.map((value) => (
              <div
                className="valueCard"
                key={value.title}
              >
                <div className="valueIcon">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="aboutStats">
        <div className="container statsGrid">

          <div className="statCard">
            <h2>50+</h2>
            <span>
              Projects Delivered — across industries
            </span>
          </div>

          <div className="statCard">
            <h2>20+</h2>
            <span>
              Happy Clients — nationwide and global
            </span>
          </div>

          <div className="statCard">
            <h2>5★</h2>
            <span>
              Customer Rating — trusted by partners
            </span>
          </div>

          <div className="statCard">
            <h2>100%</h2>
            <span>
              Client Satisfaction — our top priority
            </span>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="aboutServices">
        <div className="container">

          <div className="sectionHeader">
            <span>WHAT WE DO</span>

            <h2>
              End-to-End Digital Services
            </h2>

            <p>
              From your first line of code to ongoing support, we cover the
              full lifecycle of your digital product.
            </p>
          </div>

          <div className="serviceChips">
            {services.map((service) => (
              <Link
                href={service.href}
                key={service.href}
              >
                <FaCode />
                {service.title}
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="aboutCta">
        <div className="container ctaBox">

          <h2>
            Ready to Build Something Great Together?
          </h2>

          <p>
            Let's talk about your project and how Nivvish Infotech can help
            bring it to life.
          </p>

          <Link
            href="/contact"
            className="ctaBtn"
          >
            Get Free Consultation
            <FaArrowRight />
          </Link>

        </div>
      </section>

    </main>
  );
}
