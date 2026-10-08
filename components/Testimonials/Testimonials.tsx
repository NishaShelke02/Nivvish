"use client";

import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";

import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Santosh Jadhav",
    role: "Founder, BOE9 Export Import.",
    
    rating: 5,
    feedback:
      "Nivvish Infotech delivered a website that perfectly represents our brand. The team was professional, responsive, and understood our business needs from day one. Our online inquiries have grown significantly since launch.",
  },
  {
    id: 2,
    name: "Poonam Sharma",
    role: "Director, Sparsh Enterprises",
    
    rating: 5,
    feedback:
      "Working with Nivvish Infotech was a smooth experience from start to finish. They translated our vision into a fast, beautiful website and were always available whenever we needed changes or support.",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "CEO, Business Management Software Client",
    
    rating: 5,
    feedback:
      "The custom software solution they built has streamlined our entire operation. What impressed me most was how well they listened and adapted the system to fit our exact workflow instead of forcing a generic template.",
  },
  {
    id: 4,
    name: "Sneha Patil",
    role: "Marketing Head, E-Commerce Client",
    
    rating: 4,
    feedback:
      "Our e-commerce platform launched on time and performs beautifully. Page speed, checkout flow, and mobile responsiveness were all handled with real attention to detail. Highly recommended for serious projects.",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Operations Manager, Mobile App Client",
    
    rating: 5,
    feedback:
      "The mobile app they developed for us has real-time sync and works flawlessly across devices. The Nivvish team stayed involved even after launch, quickly resolving any issue we raised.",
  },
  {
    id: 6,
    name: "Neha Kulkarni",
    role: "Founder, venkatesh Client",
   
    rating: 5,
    feedback:
      "From planning to deployment, the process was transparent and well managed. They explained technical decisions in simple terms and delivered exactly what was promised, on schedule and within budget.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonialsSection">
      <div className="container">
        <div className="sectionHeader">
          <span>TESTIMONIALS</span>
          <h2>What Our Clients Say</h2>
          <p>
            We take pride in building lasting relationships with our clients
            through quality work, transparency, and dedicated support.
          </p>
        </div>

        <div className="testimonialsGrid">
          {testimonials.map((t) => (
            <div className="testimonialCard" key={t.id}>
              <FaQuoteRight className="quoteIcon" />

              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < t.rating ? "filled" : "empty"}
                  />
                ))}
              </div>

              <p className="feedback">{t.feedback}</p>

              <div className="clientInfo">
                
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}