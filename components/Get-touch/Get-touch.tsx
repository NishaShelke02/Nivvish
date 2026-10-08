"use client";

import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import "./Get-touch.css";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">

        <div className="contact-left">
          <span className="section-badge">Get In Touch</span>

          <h2>
            Let's Start Something Great with{" "}
            <span>Nivvish Infotech</span>
          </h2>

          <p>
            Looking for a trusted{" "}
            <strong>Website Development, Mobile App Development, Custom
            Software Development, UI/UX Design, SEO,</strong> or{" "}
            <strong>Digital Marketing Company?</strong>

            <br />
            <br />

            <strong>Nivvish Infotech</strong> helps businesses transform ideas
            into powerful digital solutions. We build fast, secure, scalable,
            and SEO-friendly websites and applications that drive business
            growth and deliver exceptional user experiences.

            <br />
            <br />

            Whether you're a startup, small business, or enterprise, our team
            is ready to turn your vision into reality.
          </p>

          <div className="cta-buttons">
            <Link href="/contact" className="primary-btn">
              Get Free Consultation
              <FaArrowRight />
            </Link>

            <Link href="/portfolio" className="secondary-btn">
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-card">

            <h3>Contact Information</h3>

            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <div>
                <span>Phone</span>
                <a href="tel:+919699379795">
                  +91 96993 79795
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div>
                <span>Email</span>
                <a href="mailto:nisha@nivvishinfotech.com">
                  nisha@nivvishinfotech.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <span>Location</span>
                <p>Nashik, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-feature">
              ✓ Free Consultation
            </div>

            <div className="contact-feature">
              ✓ 100% Custom Solutions
            </div>

            <div className="contact-feature">
              ✓ SEO Optimized Websites
            </div>

            <div className="contact-feature">
              ✓ Ongoing Technical Support
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}