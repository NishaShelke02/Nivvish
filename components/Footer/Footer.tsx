"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-column company">
          <Link href="/" className="footer-logo">
            <Image
              src="/logo.png"
              alt="Nivvish Infotech"
              width={170}
              height={60}
            />
          </Link>

          <p className="footer-description">
            Transforming ideas into digital reality with innovative web,
            mobile, and software solutions. We build scalable, secure,
            and modern applications tailored to help businesses grow and
            succeed in the digital world.
          </p>

          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>UI / UX Design</li>
            <li>Digital Marketing</li>
            <li>SEO Optimization</li>
            <li>Custom Software Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Info</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Nashik, Maharashtra, India</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <a href="tel:+919699379795">+91 96993 79795</a>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:info@nivvishinfotech.com">
              info@nivvishinfotech.com
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} <strong>Nivvish Infotech</strong>. All Rights Reserved.
        </p>

        <div className="footer-policy">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}