"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
  FaArrowRight,
  FaCogs,
} from "react-icons/fa";
import { SiSap } from "react-icons/si";
import "./Home.css";



export default function Home() {
  return (
    <main className="hero">

      {/* Background Blur */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>
      <div className="blur blur3"></div>

      <div className="container hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-left">

          <span className="hero-tag">
            🚀 Innovative IT Solutions
          </span>

          <h1>
            Transform Your
            <br />

            <span>Ideas Into</span>

            <br />

            Digital Reality
          </h1>

          <div className="hero-line"></div>

          <p>
            We empower businesses with innovative technology solutions.
            From modern websites and mobile applications to custom
            software, e-commerce platforms, UI/UX design, SEO and
            digital marketing, we build scalable digital experiences
            that accelerate growth and create lasting business value.
          </p>

          <div className="hero-buttons">

            <Link href="/contact" className="btn-primary">
              Get Started
              <FaArrowRight />
            </Link>

            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>

          </div>

          {/* Stats */}

          <div className="hero-stats">

            <div>
              <h2>50+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>20+</h2>
              <span>Happy Clients</span>
            </div>

            <div>
              <h2>100%</h2>
              <span>Support</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          {/* Floating Cards */}

          <div className="floating-card cloud">
            ☁ Cloud
          </div>

          <div className="floating-card code">
            {"</>"}
          </div>

          <div className="floating-card seo">
            SEO
          </div>

          <div className="floating-card uiux">
            UI/UX
          </div>

          <div className="floating-card analytics">
            📈
          </div>

          <Image
            src="/images/hero.png"
            alt="Nivvish Infotech"
            width={750}
            height={750}
            priority
            className="hero-image"
          />

        </div>

      </div>

      

      

    </main>
  );
}