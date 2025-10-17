import { useState, useEffect } from "react";
import { Mail, ArrowUpRight, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
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
          <Avatar className="h-28 w-28 mb-6 ring-2 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
              alt="Profile"
            />
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
              BK
            </AvatarFallback>
          </Avatar>
          <h1
            className="text-5xl font-bold mb-2"
            style={{ color: "hsl(48 20% 20%)" }}
          >
            Bhavya Kandhari
          </h1>
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "hsl(48 20% 20%)" }}
          >
            Software Engineer
          </h2>
          <p className="mb-8" style={{ color: "hsl(48 3% 50%)" }}>
            I build reliable, accessible, and scalable systems that power
            seamless digital experiences.
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
            <a
              href="https://github.com/bkandh30"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              style={{ color: "hsl(48 3% 50%)" }}
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kandharibhavya/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              style={{ color: "hsl(48 3% 50%)" }}
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:bhavya.kandhari.eng@gmail.com"
              className="transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              style={{ color: "hsl(48 3% 50%)" }}
              aria-label="Email"
            >
              <Mail className="w-9 h-9 strokeWidth={1.5}" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-[45%] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 space-y-12 sm:space-y-16">
          {/* Mobile Hero - Only visible on small screens */}
          <section className="lg:hidden">
            <Avatar className="h-24 w-24 mb-6 ring-2 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                alt="Profile"
              />
              <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
                BK
              </AvatarFallback>
            </Avatar>
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              Bhavya Kandhari
            </h1>
            <h2
              className="text-lg font-semibold mb-4"
              style={{ color: "hsl(48 20% 20%)" }}
            >
              Software Engineer
            </h2>
            <p className="mb-8" style={{ color: "hsl(48 3% 50%)" }}>
              I build reliable, accessible, and scalable systems that power
              seamless digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-8 mb-12">
              <a
                href="https://github.com/bkandh30"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110"
                style={{ color: "hsl(48 3% 50%)" }}
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kandharibhavya/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110"
                style={{ color: "hsl(48 3% 50%)" }}
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:bhavya.kandhari.eng@gmail.com"
                className="transition-all duration-300 hover:scale-110"
                style={{ color: "hsl(48 3% 50%)" }}
                aria-label="Email"
              >
                <Mail className="w-9 h-9 strokeWidth={1.5}" />
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="scroll-mt-24">
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
              <button
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded transition-all duration-300 group"
                style={{
                  backgroundColor: "transparent",
                  color: "#3d3929",
                  border: "1px solid rgba(201, 100, 66, 0.4)",
                }}
              >
                View Full Résumé
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: "#3d3929" }}
                />
              </button>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="scroll-mt-24">
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
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
                      2023 — 2025
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
                      Software Engineer · Ira A Fulton School of Engineering
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#83827d",
                        lineHeight: "1.7",
                        marginBottom: "16px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugiat alias quibusdam repellendus unde perferendis est
                      sed minus explicabo. Earum, maiores.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                        }}
                      >
                        Skill1
                      </span>
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                        }}
                      >
                        Skill2
                      </span>
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                        }}
                      >
                        Skill3
                      </span>
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                        }}
                      >
                        Skill4
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
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
                      2021 — 2023
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
                      Associate Software Engineer · Ernst & Young (EY)
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#83827d",
                        lineHeight: "1.7",
                        marginBottom: "16px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Id fugiat, quia vitae aliquam veniam repellat ipsum sunt
                      ex temporibus voluptates!
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                        }}
                      >
                        Skill1
                      </span>
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                        }}
                      >
                        Skill2
                      </span>
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                        }}
                      >
                        Skill3
                      </span>
                      <span
                        className="px-3 py-1 rounded-full"
                        style={{
                          fontSize: "12px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                        }}
                      >
                        Skill4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24">
            <div className="space-y-6">
              {/* Languages */}
              <div>
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
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Rust
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    JavaScript
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    TypeScript
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Golang
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Python
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    SQL
                  </span>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
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
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    HTML
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    CSS
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    React.js
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Next.js
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    TailwindCSS
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Node.js
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Express.js
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    FastAPI
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Warp
                  </span>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
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
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    AWS
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Docker
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Kubernetes
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Git/GitHub
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Linux
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    GitHub Actions
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Prometheus
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Grafana
                  </span>
                </div>
              </div>

              {/* Databases & Tools */}
              <div>
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
                  Databases & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    PostgreSQL
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    MySQL
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    BoltDB
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Redis
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Power BI
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Tableau
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    AWS QuickSight
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div>
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
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Agile
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Version Control
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Microservices
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Distributed Systems
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Scalability
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Fault Tolerance
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "rgba(201, 100, 66, 0.1)",
                      color: "#c96442",
                      border: "1px solid rgba(201, 100, 66, 0.2)",
                    }}
                  >
                    Observability
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-24">
            <div className="space-y-8">
              {/* Education Item 1 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
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
                      2023 — 2025
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
                      Masters of Computer Science
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#83827d",
                        marginBottom: "12px",
                      }}
                    >
                      Arizona State University · Tempe, Arizona
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
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Digital Video Processing
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Foundations of Algorithm
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Distributed Software Development
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Software Security
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Information Assurance and Security
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Cloud Computing
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Software Verification, Validation and Testing
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Data Mining
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Data Processing at Scale
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Applied Cryptography
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Item 2 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
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
                      2017 — 2021
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
                      Bachelor of Technology in Computer Science
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#83827d",
                        marginBottom: "12px",
                      }}
                    >
                      Amity University · Noida, India
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
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Data Structures and Algorithms
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Database Management Systems
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Object Oriented Programming
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Theory of Computation
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Operating System
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Computer Networks
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Distributed Systems
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Computer Architecture
                        </span>
                        <span
                          className="px-3 py-1.5 rounded-full"
                          style={{
                            fontSize: "13px",
                            backgroundColor: "rgba(201, 100, 66, 0.1)",
                            color: "#c96442",
                            border: "1px solid rgba(201, 100, 66, 0.2)",
                          }}
                        >
                          Compiler Construction
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <div className="space-y-8">
              {/* Project 1 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
                <div className="flex flex-col">
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#3d3929",
                      marginBottom: "8px",
                    }}
                  >
                    URL Shortener Webapp
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#83827d",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate ea impedit, quae quisquam, ipsa nostrum iure illo
                    possimus voluptate quasi blanditiis molestias. Maiores ex
                    commodi ducimus delectus adipisci asperiores suscipit.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill1
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill2
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill3
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill4
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill5
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill6
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href="#"
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
                    <a
                      href="#"
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
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
                <div className="flex flex-col">
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#3d3929",
                      marginBottom: "8px",
                    }}
                  >
                    Metered API Server
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#83827d",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    consequatur magnam quia soluta aperiam cum animi optio
                    distinctio a voluptate, sit voluptates totam sapiente
                    recusandae mollitia itaque voluptatibus excepturi aliquid?
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill1
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill2
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill3
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill4
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill5
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill6
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href="#"
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
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
                <div className="flex flex-col">
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#3d3929",
                      marginBottom: "8px",
                    }}
                  >
                    GoFlix - RESTful Movie Management API
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#83827d",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                    eum vel magni eaque non explicabo similique quis consequatur
                    neque qui, dicta facilis! Nesciunt repudiandae asperiores
                    dolores. In dicta distinctio repellendus.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill1
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill2
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill3
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill4
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill5
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href="#"
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
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
                <div className="flex flex-col">
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#3d3929",
                      marginBottom: "8px",
                    }}
                  >
                    Async Text Summarization Microservice
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#83827d",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                    eum vel magni eaque non explicabo similique quis consequatur
                    neque qui, dicta facilis! Nesciunt repudiandae asperiores
                    dolores. In dicta distinctio repellendus.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill1
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill2
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill3
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill4
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill5
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href="#"
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
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div
                className="group relative p-6 rounded-lg transition-all duration-300 hover:bg-[#ede9de]/50"
                style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
              >
                <div className="flex flex-col">
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#3d3929",
                      marginBottom: "8px",
                    }}
                  >
                    AWS Cloud Resume Challenge
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#83827d",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Debitis esse corporis cum totam sapiente iure consequatur,
                    accusamus dicta obcaecati nobis odio natus, magnam quaerat
                    consequuntur repellat beatae provident suscipit unde?
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill1
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill2
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill3
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill4
                    </span>
                    <span
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "rgba(201, 100, 66, 0.1)",
                        color: "#c96442",
                        border: "1px solid rgba(201, 100, 66, 0.2)",
                      }}
                    >
                      Skill5
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href="#"
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
                  </div>
                </div>
              </div>
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
