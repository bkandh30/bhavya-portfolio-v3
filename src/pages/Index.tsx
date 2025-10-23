import { useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { AboutSection } from "@/components/sections/AboutSection";

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
      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="lg:ml-[45%] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 space-y-12 sm:space-y-16">
          {/* Mobile Hero - Only visible on small screens */}
          <MobileHeader />

          {/* About Section */}
          <AboutSection />

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
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
