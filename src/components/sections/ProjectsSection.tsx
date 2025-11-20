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
      <h2 className="section-heading">Projects</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="card-hover">
            {/* Left border accent */}
            <span className="border-accent" />

            <div className="flex flex-col">
              <h3 className="card-title">{project.title}</h3>

              <p className="text-sm text-secondary-custom leading-normal mb-4">
                {project.description}
              </p>

              {/* Tech Stack with Icons */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => {
                  const iconSlug = getIconSlug(tech);

                  return (
                    <span key={tech} className="tech-badge">
                      {iconSlug && (
                        <img
                          src={`https://cdn.simpleicons.org/${iconSlug}`}
                          alt=""
                          className="w-3.5 h-3.5 opacity-70"
                          loading="lazy"
                          onError={(
                            e: React.SyntheticEvent<HTMLImageElement, Event>
                          ) => {
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
                    className="inline-flex items-center gap-2 text-sm text-accent-custom font-medium transition-all duration-300 hover:translate-x-1"
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
                    className="inline-flex items-center gap-2 text-sm text-accent-custom font-medium transition-all duration-300 hover:translate-x-1"
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
