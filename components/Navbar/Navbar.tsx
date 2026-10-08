"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Nivvish Infotech"
            width={180}
            height={60}
            priority
            className="logo-img"
          />
        </Link>

        {/* Mobile Button */}
        <button
          className="mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>
              HOME
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={closeMenu}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="/services" onClick={closeMenu}>
              SERVICES
            </Link>
          </li>

          <li>
            <Link href="/portfolio" onClick={closeMenu}>
              PORTFOLIO
            </Link>
          </li>

          <li>
            <Link href="/blogs" onClick={closeMenu}>
              BLOGS
            </Link>
          </li>

          <li>
            <Link href="/contact" onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          {/* Theme Toggle */}
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* CTA */}
          <Link href="/contact" className="quote-btn">
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}