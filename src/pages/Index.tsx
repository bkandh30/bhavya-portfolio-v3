import { useState, useEffect } from "react";
import { Mail, ArrowUpRight, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = [
            "about",
            "experience",
            "skills",
            "education",
            "projects",
          ];
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
                setActiveSection(section);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking enabled only on desktop
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("fade-in-section");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "hsl(48 38% 96%)" }}
    >
      {/* Cursor spotlight effect - disabled on mobile for performance */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 239, 204, 0.25), transparent 80%)`,
        }}
      />

      {/* Fixed Sidebar - Only on large screens */}
      <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[45%] lg:flex lg:items-center lg:justify-center lg:p-24">
        <div className="max-w-md w-full">
          <div className="relative h-28 w-28 mb-6 ring-1 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg rounded-full overflow-hidden">
            <picture>
              <source srcSet="/headshot-small.webp" type="image/webp" />
              <img
                src={personalInfo.avatar.png}
                alt={personalInfo.avatar.alt}
                width={112}
                height={112}
                className="object-cover w-full h-full"
                loading="eager"
              />
            </picture>
          </div>
          <h1
            className="text-5xl font-bold mb-2"
            style={{ color: "hsl(48 20% 20%)" }}
          >
            {personalInfo.name}
          </h1>
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "hsl(48 20% 20%)" }}
          >
            {personalInfo.title}
          </h2>
          <p className="mb-8" style={{ color: "hsl(48 3% 50%)" }}>
            {personalInfo.bio}
          </p>

          {/* Navigation */}
          <nav className="mb-12 hidden lg:block">
            <ul className="space-y-4">
              {["about", "experience", "skills", "education", "projects"].map(
                (section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`group flex items-center text-xs uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
                        activeSection === section ? "font-bold" : "font-medium"
                      }`}
                      style={{
                        color:
                          activeSection === section
                            ? "hsl(48 20% 20%)"
                            : "hsl(48 3% 50%)",
                      }}
                    >
                      <span
                        className="inline-block h-px transition-all duration-300 mr-4"
                        style={{
                          width: activeSection === section ? "64px" : "32px",
                          backgroundColor:
                            activeSection === section
                              ? "hsl(48 20% 20%)"
                              : "hsl(48 3% 50%)",
                        }}
                      />
                      {section}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            {personalInfo.social.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                style={{ color: "hsl(48 3% 50%)" }}
                aria-label={link.label}
              >
                {link.icon === "github" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}

                {link.icon === "linkedin" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}

                {link.icon === "mail" && (
                  <Mail className="w-9 h-9" strokeWidth={1.5} />
                )}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-[45%] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 space-y-12 sm:space-y-16">
          {/* Mobile Hero - Only visible on small screens */}
          <section className="lg:hidden">
            <div className="relative h-24 w-24 mb-6 ring-2 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg rounded-full overflow-hidden">
              <picture>
                <source srcSet="/headshot-small.webp" type="image/webp" />
                <img
                  src={personalInfo.avatar.png}
                  alt={personalInfo.avatar.alt}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  loading="eager"
                />
              </picture>
            </div>
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              {personalInfo.name}
            </h1>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              {personalInfo.title}
            </h2>
            <p className="mb-8" style={{ color: "hsl(48 3% 50%)" }}>
              {personalInfo.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-8">
              {personalInfo.social.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  style={{ color: "hsl(48 3% 50%)" }}
                  aria-label={link.label}
                >
                  {link.icon === "github" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}

                  {link.icon === "linkedin" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}

                  {link.icon === "mail" && (
                    <Mail className="w-9 h-9" strokeWidth={1.5} />
                  )}
                </a>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-24">
            <h2
              className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              <span
                className="inline-block h-px mr-4"
                style={{
                  width: "64px",
                  backgroundColor: "hsl(48 20% 20%)",
                }}
              />
              About
            </h2>
            <div
              className="space-y-4 p-6 rounded-lg"
              style={{
                backgroundColor: "#ede9de",
                border: "1px solid rgba(201, 100, 66, 0.2)",
                minHeight: "200px",
              }}
            >
              <p
                style={{
                  color: "#3d3929",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                I’m a software engineer with a focus on building reliable
                backend systems and developer tools that make complex
                infrastructure feel effortless. My work blends backend
                engineering, cloud systems, and AI-driven workflows — all aimed
                at improving developer experience and scalability.
              </p>
              <p
                style={{
                  color: "#3d3929",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                Recently, I graduated from Arizona State University with
                Master’s in Computer Science, where I explore distributed
                systems, cloud computing, and data processing at scale. Outside
                of academics, I’ve worked at Ernst & Young and the Ira A. Fulton
                Schools of Engineering, where I built automation pipelines, data
                platforms, and APIs that powered large-scale evaluation systems
                and analytics workflows.
              </p>
              <p
                style={{
                  color: "#3d3929",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                Lately, I’ve been experimenting with Rust, Go, and TypeScript —
                pushing my craft toward building faster, more resilient systems.
              </p>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl transition-all duration-300 group backdrop-blur-sm cursor-pointer"
                style={{
                  background: "rgba(201, 100, 66, 0.1)",
                  border: "1px solid rgba(201, 100, 66, 0.3)",
                  color: "#c96442",
                  fontWeight: "600",
                  boxShadow: "0 4px 12px rgba(201, 100, 66, 0.08)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#c96442";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "#c96442";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(201, 100, 66, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(201, 100, 66, 0.1)";
                  e.currentTarget.style.color = "#c96442";
                  e.currentTarget.style.borderColor = "rgba(201, 100, 66, 0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(201, 100, 66, 0.08)";
                }}
              >
                View Full Résumé
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-24">
            <h2
              className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              <span
                className="inline-block h-px mr-4"
                style={{
                  width: "64px",
                  backgroundColor: "hsl(48 20% 20%)",
                }}
              />
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="group relative p-6 rounded-lg transition-all duration-300 overflow-hidden"
                  style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ede9de";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(201, 100, 66, 0.1)";
                    const title = e.currentTarget.querySelector("h3");
                    if (title) (title as HTMLElement).style.color = "#c96442";
                    const borderLine =
                      e.currentTarget.querySelector(".border-accent");
                    if (borderLine)
                      (borderLine as HTMLElement).style.height = "80px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    const title = e.currentTarget.querySelector("h3");
                    if (title) (title as HTMLElement).style.color = "#3d3929";
                    const borderLine =
                      e.currentTarget.querySelector(".border-accent");
                    if (borderLine)
                      (borderLine as HTMLElement).style.height = "0px";
                  }}
                >
                  {/* Left border accent */}
                  <span
                    className="border-accent absolute top-0 left-0 w-1 transition-all duration-300"
                    style={{
                      height: "0px",
                      backgroundColor: "#c96442",
                    }}
                  />
                  <div className="flex flex-col md:flex-row md:gap-8">
                    {/* Date Column */}
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#83827d",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {exp.dateRange}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div className="md:w-3/4">
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#3d3929",
                          marginBottom: "8px",
                        }}
                      >
                        {exp.role} · {exp.company}
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#83827d",
                          lineHeight: "1.7",
                          marginBottom: "16px",
                        }}
                      >
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "rgba(201, 100, 66, 0.1)",
                              color: "#c96442",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24">
            <h2
              className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              <span
                className="inline-block h-px mr-4"
                style={{
                  width: "64px",
                  backgroundColor: "hsl(48 20% 20%)",
                }}
              />
              Skills
            </h2>
            <div className="space-y-6">
              {skillCategories.map((category) => (
                <div key={category.category}>
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#3d3929",
                      marginBottom: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          fontSize: "13px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                          border: "1px solid rgba(201, 100, 66, 0.2)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-24">
            <h2
              className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              <span
                className="inline-block h-px mr-4"
                style={{
                  width: "64px",
                  backgroundColor: "hsl(48 20% 20%)",
                }}
              />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="group relative p-6 rounded-lg transition-all duration-300 overflow-hidden"
                  style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ede9de";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(201, 100, 66, 0.1)";
                    const title = e.currentTarget.querySelector("h3");
                    if (title) (title as HTMLElement).style.color = "#c96442";
                    const borderLine =
                      e.currentTarget.querySelector(".border-accent");
                    if (borderLine)
                      (borderLine as HTMLElement).style.height = "80px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    const title = e.currentTarget.querySelector("h3");
                    if (title) (title as HTMLElement).style.color = "#3d3929";
                    const borderLine =
                      e.currentTarget.querySelector(".border-accent");
                    if (borderLine)
                      (borderLine as HTMLElement).style.height = "0px";
                  }}
                >
                  {/* Left border accent */}
                  <span
                    className="border-accent absolute top-0 left-0 w-1 transition-all duration-300"
                    style={{
                      height: "0px",
                      backgroundColor: "#c96442",
                    }}
                  />
                  <div className="flex flex-col md:flex-row md:gap-8">
                    {/* Date Column */}
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#83827d",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {edu.dateRange}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div className="md:w-3/4">
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#3d3929",
                          marginBottom: "8px",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#83827d",
                          marginBottom: "12px",
                        }}
                      >
                        {edu.institution} · {edu.location}
                      </p>

                      {/* Coursework */}
                      <div>
                        <p
                          style={{
                            fontSize: "13px",
                            fontWeight: "600",
                            color: "#3d3929",
                            marginBottom: "8px",
                          }}
                        >
                          Relevant Coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1.5 rounded-full"
                              style={{
                                fontSize: "13px",
                                backgroundColor: "rgba(201, 100, 66, 0.1)",
                                color: "#c96442",
                                border: "1px solid rgba(201, 100, 66, 0.2)",
                              }}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <h2
              className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              <span
                className="inline-block h-px mr-4"
                style={{
                  width: "64px",
                  backgroundColor: "hsl(48 20% 20%)",
                }}
              />
              Projects
            </h2>

            <div className="space-y-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative p-6 rounded-lg transition-all duration-300 overflow-hidden"
                  style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ede9de";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(201, 100, 66, 0.1)";
                    const title = e.currentTarget.querySelector("h3");
                    if (title) (title as HTMLElement).style.color = "#c96442";
                    const borderLine =
                      e.currentTarget.querySelector(".border-accent");
                    if (borderLine)
                      (borderLine as HTMLElement).style.height = "80px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    const title = e.currentTarget.querySelector("h3");
                    if (title) (title as HTMLElement).style.color = "#3d3929";
                    const borderLine =
                      e.currentTarget.querySelector(".border-accent");
                    if (borderLine)
                      (borderLine as HTMLElement).style.height = "0px";
                  }}
                >
                  {/* Left border accent */}
                  <span
                    className="border-accent absolute top-0 left-0 w-1 transition-all duration-300"
                    style={{
                      height: "0px",
                      backgroundColor: "#c96442",
                    }}
                  />

                  <div className="flex flex-col">
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#3d3929",
                        marginBottom: "8px",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#83827d",
                        lineHeight: "1.7",
                        marginBottom: "16px",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
                          style={{
                            fontSize: "14px",
                            color: "#c96442",
                            fontWeight: "500",
                          }}
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1"
                          style={{
                            fontSize: "14px",
                            color: "#c96442",
                            fontWeight: "500",
                          }}
                        >
                          <span>GitHub</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-24 pb-16">
            <div className="text-center space-y-4">
              <p
                style={{
                  fontSize: "14px",
                  color: "#83827d",
                  lineHeight: "1.6",
                }}
              >
                Coded in <span style={{ color: "#c96442" }}>VS Code</span> by
                yours truly. Built with{" "}
                <span style={{ color: "#c96442" }}>React</span> &{" "}
                <span style={{ color: "#c96442" }}>TypeScript</span>, styled
                with <span style={{ color: "#c96442" }}>Tailwind CSS</span> and
                <span style={{ color: "#c96442" }}> Shadcn/UI</span>, and
                deployed on <span style={{ color: "#c96442" }}>Vercel</span>.
                Text is set in the{" "}
                <span style={{ color: "#c96442" }}>Inter</span> typeface.
              </p>
              <p
                style={{ fontSize: "12px", color: "#83827d", marginTop: "8px" }}
              >
                © {new Date().getFullYear()} Bhavya Kandhari. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
