"use client";

import Link from "next/link";
import {
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
  FaRobot,
  FaCloud,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import "./Services.css";

const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Website Development",
    subtitle: "Custom responsive websites built with modern technologies",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Cross-browser Compatible",
      "Content Management System",
      "Analytics Integration",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    process: [
      "Requirement Analysis",
      "Wireframing",
      "Design Mockups",
      "Development",
      "Testing",
      "Deployment",
    ],
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    subtitle: "Native and cross-platform mobile applications",
    features: [
      "iOS & Android",
      "Offline Support",
      "Push Notifications",
      "In-app Purchases",
      "Real-time Updates",
      "Cloud Integration",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "AWS", "Redux"],
    process: [
      "Concept Design",
      "Prototyping",
      "Development",
      "Beta Testing",
      "App Store Submission",
      "Maintenance",
    ],
  },
  {
    id: 3,
    icon: <FaShoppingCart />,
    title: "E-commerce Solutions",
    subtitle: "Complete online store setup with payment integration",
    features: [
      "Product Management",
      "Payment Gateway",
      "Order Tracking",
      "Inventory Management",
      "Customer Accounts",
      "Analytics Dashboard",
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "React"],
    process: [
      "Store Setup",
      "Product Catalog",
      "Payment Integration",
      "Shipping Setup",
      "Testing",
      "Launch",
    ],
  },
  {
    id: 4,
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    subtitle: "Beautiful and intuitive user interface designs",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    process: [
      "Research",
      "Ideation",
      "Wireframes",
      "High-fidelity Mockups",
      "Prototyping",
      "Handoff",
    ],
  },
  {
    id: 5,
    icon: <FaSearch />,
    title: "SEO Optimization",
    subtitle: "Improve your search engine rankings and visibility",
    features: [
      "Keyword Research",
      "On-page SEO",
      "Technical SEO",
      "Link Building",
      "Content Strategy",
      "Performance Tracking",
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Google Search Console",
      "Screaming Frog",
    ],
    process: [
      "SEO Audit",
      "Strategy Development",
      "Implementation",
      "Content Optimization",
      "Monitoring",
      "Reporting",
    ],
  },
  {
    id: 6,
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    subtitle: "Strategic campaigns to grow your online presence",
    features: [
      "Social Media Marketing",
      "Email Campaigns",
      "PPC Advertising",
      "Content Marketing",
      "Brand Strategy",
      "Analytics",
    ],
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "Mailchimp",
      "HubSpot",
      "Hootsuite",
    ],
    process: [
      "Market Research",
      "Campaign Planning",
      "Content Creation",
      "Execution",
      "Optimization",
      "Reporting",
    ],
  },
  {
    id: 7,
    icon: <FaRobot />,
    title: "AI Solutions",
    subtitle: "Intelligent automation and machine learning integration",
    features: [
      "Chatbots",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Process Automation",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python", "Scikit-learn"],
    process: [
      "Problem Definition",
      "Data Collection",
      "Model Training",
      "Integration",
      "Testing",
      "Deployment",
    ],
  },
  {
    id: 8,
    icon: <FaCloud />,
    title: "Cloud Services",
    subtitle: "Scalable cloud infrastructure and deployment",
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "Auto-scaling",
      "Load Balancing",
      "Backup Solutions",
      "Cost Optimization",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    process: [
      "Assessment",
      "Architecture Design",
      "Migration Planning",
      "Implementation",
      "Testing",
      "Optimization",
    ],
  },
  {
    id: 9,
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    subtitle: "Protect your digital assets with advanced security",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Firewall Setup",
      "Data Encryption",
      "Compliance",
    ],
    technologies: ["SSL/TLS", "OAuth", "JWT", "Cloudflare", "Security Tools"],
    process: [
      "Security Assessment",
      "Risk Analysis",
      "Implementation",
      "Monitoring",
      "Incident Response",
      "Updates",
    ],
  },
  {
    id: 10,
    icon: <FaTools />,
    title: "Maintenance & Support",
    subtitle: "Ongoing technical support and updates",
    features: [
      "Bug Fixes",
      "Performance Optimization",
      "Security Updates",
      "Feature Enhancements",
      "Backup Management",
      "Technical Support",
    ],
    technologies: [
      "Monitoring Tools",
      "Version Control",
      "CI/CD",
      "Issue Tracking",
      "Documentation",
    ],
    process: [
      "Monitoring",
      "Issue Detection",
      "Resolution",
      "Testing",
      "Deployment",
      "Reporting",
    ],
  },
];

export default function Services() {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <span className="hero-tag">🚀 Our Services</span>

          <h1>
            Innovative Digital Solutions
            <span> For Every Business</span>
          </h1>

          <p>
            Nivvish Infotech delivers modern web development, mobile
            applications, custom software, cloud solutions, UI/UX design,
            SEO and digital marketing to help businesses grow in the digital
            world.
          </p>

          <Link href="/contact" className="hero-btn">
            Get Free Consultation
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Services list */}
      <section className="services-list">
        <div className="container">
          {services.map((service) => (
            <div className="service-row" key={service.id}>
              {/* Left — details */}
              <div className="service-details">
                <div className="service-icon">{service.icon}</div>

                <h2>{service.title}</h2>
                <p className="service-subtitle">{service.subtitle}</p>

                <h3>Key Features</h3>
                <div className="features-grid">
                  {service.features.map((feature, i) => (
                    <div className="feature" key={i}>
                      <FaCheckCircle />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="get-started-btn">
                  Get Started
                  <FaArrowRight />
                </Link>
              </div>

              {/* Right — info card */}
              <div className="service-info-card">
                <h3>Technologies We Use</h3>
                <div className="tech-pills">
                  {service.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <h3>Our Process</h3>
                <div className="process-list">
                  {service.process.map((step, i) => (
                    <div className="process-step" key={i}>
                      <span className="step-number">{i + 1}</span>
                      <span className="step-label">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}