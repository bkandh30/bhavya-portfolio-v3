import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const getIconSlug = (tech: string): string | null => {
  const slugMap: Record<string, string> = {
    "Next.js": "nextdotjs",
    TypeScript: "typescript",
    Turso: "turso",
    "Upstash Redis": "upstash",
    Drizzle: "drizzle",
    Vercel: "vercel",
    Rust: "rust",
    Docker: "docker",
    PostgreSQL: "postgresql",
    "Github Actions": "githubactions",
    Go: "go",
    JWT: "jsonwebtokens",
    Python: "python",
    FastAPI: "fastapi",
    Celery: "celery",
    AWS: "amazonwebservices",
    Lambda: "awslambda",
    DynamoDB: "amazondynamodb",
    S3: "amazons3",
    CloudFront: "amazoncloudfront",
    React: "react",
    "Tailwind CSS": "tailwindcss",
    "Node.js": "nodedotjs",
  };

  const generics = [
    "Warp",
    "SQLx",
    "Logging",
    "Metrics",
    "AsyncIO",
    "NLTK",
    "CI/CD",
  ];

  if (generics.includes(tech)) return null;

  return slugMap[tech] || tech.toLowerCase();
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2
        className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
        style={{ color: "hsl(48 20% 20%)" }}
      >
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
              if (borderLine) (borderLine as HTMLElement).style.height = "80px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              const title = e.currentTarget.querySelector("h3");
              if (title) (title as HTMLElement).style.color = "#3d3929";
              const borderLine =
                e.currentTarget.querySelector(".border-accent");
              if (borderLine) (borderLine as HTMLElement).style.height = "0px";
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

              {/* Tech Stack with Icons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => {
                  const iconSlug = getIconSlug(tech);

                  return (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
                      style={{
                        fontSize: "13px",
                        backgroundColor: "white",
                        color: "#3d3929",
                        border: "1px solid rgba(201, 100, 66, 0.15)",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                      }}
                    >
                      {iconSlug && (
                        <img
                          src={`https://cdn.simpleicons.org/${iconSlug}`}
                          alt=""
                          className="w-3.5 h-3.5 opacity-70"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      )}
                      {tech}
                    </span>
                  );
                })}
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
  );
};
