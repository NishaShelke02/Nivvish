"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

import projects from "./Portfoliodata";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolioSection">
      <div className="container">
        <div className="sectionHeader">
          <span>OUR PORTFOLIO</span>
          <h2>Projects We're Proud Of</h2>
          <p>
            A showcase of websites, software, and applications we've built
            for businesses across industries.
          </p>
        </div>

        <div className="portfolioGrid">
          {projects.map((project) => (
            <div className="portfolioCard" key={project.id}>
              <div className="cardImage">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={340}
                />
                <div className="cardOverlay">
                  <FaFolderOpen className="overlayIcon" />
                </div>
              </div>

              <div className="cardContent">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="techTags">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                {project.website && (
                  <Link
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visitBtn"
                  >
                    Visit Website
                    <FaExternalLinkAlt />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}