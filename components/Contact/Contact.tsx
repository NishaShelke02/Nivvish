
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import "./Contact.css";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactCTA() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove messages when user starts editing again
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Something went wrong. Please try again."
        );
      }

      setSuccess(
        "Thank you! Your enquiry has been sent successfully. We will contact you shortly."
      );

      // Clear form after successful submission
      setForm(initialForm);
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your enquiry. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-cta">
      <div className="container">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="contact-left">

          <span className="section-badge">
            Get In Touch
          </span>

          <h2>
            Let's Start Something Great with{" "}
            <span>Nivvish Infotech</span>
          </h2>

          <p>
            Looking for a trusted{" "}
            <strong>
              Website Development, Mobile App Development, Custom Software
              Development, UI/UX Design, SEO,
            </strong>{" "}
            or <strong>Digital Marketing Company?</strong>
          </p>

          <p>
            <strong>Nivvish Infotech</strong> helps businesses transform ideas
            into powerful digital solutions. We build fast, secure, scalable,
            and SEO-friendly websites and applications that drive business
            growth and deliver exceptional user experiences.
          </p>

          <p>
            Whether you're a startup, small business, or enterprise, our team
            is ready to turn your vision into reality.
          </p>

          

          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <div className="contact-info">

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

                <p>
                  Nashik, Maharashtra, India
                </p>
              </div>
            </div>

          </div>

          {/* =========================
              SOCIAL MEDIA
          ========================== */}
          <div className="social-section">

            <h4>Follow Us</h4>

            <div className="social-links">

              <a
                href="https://wa.me/919699379795"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social linkedin"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        {/* =========================
            RIGHT - ENQUIRY FORM
        ========================== */}
        <div className="contact-right">

          <div className="enquiry-card">

            <div className="form-heading">

              <span>
                Start Your Project
              </span>

              <h3>
                Send Us an Enquiry
              </h3>

              <p>
                Tell us about your project and our team will get back to you
                shortly.
              </p>

            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="form-message success-message">
                <FaCheckCircle />

                <span>
                  {success}
                </span>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div className="form-message error-message">
                <FaExclamationCircle />

                <span>
                  {error}
                </span>
              </div>
            )}

            {/* =========================
                FORM
            ========================== */}
            <form
              className="enquiry-form"
              onSubmit={handleSubmit}
            >

              {/* NAME + EMAIL */}
              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="fullName">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    disabled={loading}
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="email">
                    Email *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    disabled={loading}
                  />

                </div>

              </div>

              {/* PHONE + COMPANY */}
              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    disabled={loading}
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    disabled={loading}
                  />

                </div>

              </div>

              {/* SERVICE */}
              <div className="form-group">

                <label htmlFor="service">
                  Service Required *
                </label>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  disabled={loading}
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>

                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>

                  <option value="SEO">
                    SEO
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option value="Website Maintenance & Support">
                    Website Maintenance & Support
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

              {/* MESSAGE */}
              <div className="form-group">

                <label htmlFor="message">
                  Project Details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  disabled={loading}
                />

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="submit-spinner"></span>
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <FaArrowRight />
                  </>
                )}

              </button>

            </form>

            {/* FEATURES */}
            <div className="contact-features">

              <div>
                ✓ Free Consultation
              </div>

              <div>
                ✓ 100% Custom Solutions
              </div>

              <div>
                ✓ SEO Optimized Websites
              </div>

              <div>
                ✓ Ongoing Technical Support
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
