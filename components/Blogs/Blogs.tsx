
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import blogsData from "./Blogsdata-temp";
import "./Blogs.css";

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(blogsData.map((blog) => blog.category))
    ),
  ];

  const filteredBlogs =
    activeCategory === "All"
      ? blogsData
      : blogsData.filter(
          (blog) => blog.category === activeCategory
        );

  return (
    <section className="blogs-page">

      {/* HERO */}
      <section className="blogs-hero">
        <div className="blogs-hero-container">

          <span className="blogs-label">
            Nivvish Infotech Blog
          </span>

          <h1>
            Insights, Ideas &{" "}
            <span>Technology</span>
          </h1>

          <p>
            Explore our latest insights on web development,
            mobile apps, AI, UI/UX, SEO, e-commerce, and
            custom software development.
          </p>

        </div>
      </section>

      {/* BLOGS */}
      <section className="blogs-section">
        <div className="blogs-container">

          {/* FILTER */}
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "blog-filter active"
                    : "blog-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="blogs-grid">

            {filteredBlogs.map((blog) => (
              <article
                className="blog-card"
                key={blog.id}
              >

                {/* IMAGE */}
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="blog-card-image"
                >
                  <span className="blog-category">
                    {blog.category}
                  </span>

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="
                      (max-width: 680px) 100vw,
                      (max-width: 1000px) 50vw,
                      33vw
                    "
                  />
                </Link>

                {/* CONTENT */}
                <div className="blog-card-content">

                  <div className="blog-meta">
                    <span>{blog.date}</span>

                    <span className="blog-meta-dot" />

                    <span>{blog.readTime}</span>
                  </div>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="blog-title-link"
                  >
                    <h2>{blog.title}</h2>
                  </Link>

                  <p className="blog-excerpt">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="blog-read-more"
                  >
                    Read Article
                    <span>→</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <h2>Have a Project in Mind?</h2>

        <p>
          Let&apos;s turn your idea into a modern digital
          solution. Talk to Nivvish Infotech about your
          website, mobile app, or custom software project.
        </p>

        <Link
          href="/contact"
          className="blog-cta-button"
        >
          Start Your Project →
        </Link>
      </section>

    </section>
  );
}
