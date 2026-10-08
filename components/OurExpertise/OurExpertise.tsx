"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import "./OurExpertise.css";

const expertise = [
  {
    image: "/images/expertise/web.png",
    title: "Web Development",
    desc: "Responsive, SEO-friendly websites built with Next.js and React."
  },
  {
    image: "/images/expertise/mobile.png",
    title: "Mobile Apps",
    desc: "Android & iOS applications with outstanding performance."
  },
  {
    image: "/images/expertise/custom.png",
    title: "Custom Software",
    desc: "ERP, CRM and business automation software."
  },
  {
    image: "/images/expertise/e.png",
    title: "E-Commerce",
    desc: "Online stores with payment gateway & inventory management."
  },
  {
    image: "/images/expertise/cloud.png",
    title: "Cloud Solutions",
    desc: "Cloud deployment, hosting and scalable infrastructure."
  },
  {
    image: "/images/expertise/uiux.png",
    title: "UI / UX Design",
    desc: "Creative interfaces with exceptional user experience."
  },
  {
    image: "/images/expertise/seo.png",
    title: "SEO & Marketing",
    desc: "Increase traffic and generate more qualified leads."
  },
  {
    image: "/images/expertise/security.png",
    title: "Security & Support",
    desc: "Website maintenance, SSL and technical support."
  }
];

export default function OurExpertise() {
  return (
    <section className="expertise">
        <div className="shape shape1"></div>
<div className="shape shape2"></div>
<div className="shape shape3"></div>

      <div className="blur one"></div>
      <div className="blur two"></div>

      <div className="container">

        <motion.span
          className="expertise-tag"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          🚀 Our Expertise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
        >
          Delivering <span>Innovative IT Solutions</span>
        </motion.h2>

        <motion.p
          className="expertise-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          We transform ideas into scalable digital products through
          innovation, creativity and cutting-edge technology.
        </motion.p>

        <div className="expertise-grid">

          {expertise.map((item, index) => (

            <motion.div
              className="expertise-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1
              }}
            >

              <div className="icon-box">
  <Image
  src={item.image}
  alt={item.title}
  width={70}
  height={70}
  style={{ width: "100%", height: "auto" }}
  loading="lazy"
/>

</div>


              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <Link href="/services" className="learn-btn">
    Learn More
    <FaArrowRight />
</Link>

            </motion.div>

          ))}

        </div>
        <div className="expertise-stats">

    <div>
        <h2>50+</h2>
        <p>Projects Delivered</p>
    </div>

    <div>
        <h2>20+</h2>
        <p>Happy Clients</p>
    </div>

    <div>
        <h2>10+</h2>
        <p>Technologies</p>
    </div>

    <div>
        <h2>100%</h2>
        <p>Client Satisfaction</p>
    </div>

</div>
<div className="tech-stack">

<h3>Technologies We Work With</h3>

<div className="tech-list">

<span>React</span>
<span>Next.js</span>
<span>TypeScript</span>
<span>Node.js</span>
<span>Express</span>
<span>MongoDB</span>
<span>MySQL</span>
<span>Firebase</span>
<span>AWS</span>
<span>Docker</span>
<span>GitHub</span>
<span>Figma</span>

</div>

</div>
<div className="expertise-cta">

<h2>Ready to Build Your Next Digital Product?</h2>

<p>
Let's transform your ideas into innovative digital solutions.
</p>

<button>Get Started</button>

</div>

      </div>

    </section>
  );
}