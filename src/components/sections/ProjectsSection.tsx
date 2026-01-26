import type React from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionCard } from "@/components/shared/SectionCard";
import { getIconSlug } from "@/utils/icon-mapping";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading" className="section-heading">
        Projects
      </h2>

      <p className="section-intro">
        Selected backend and platform work, from production services to
        experiments.
      </p>

      <ul className="space-y-8" role="list">
        {projects.map((project) => (
          <li key={project.id} role="listitem">
            <SectionCard>
              <div className="flex flex-col">
                <h3 className="card-title">{project.title}</h3>

                <p className="text-sm text-secondary-custom leading-normal mb-4">
                  {project.description}
                </p>

                {/* Tech Stack with Icons */}
                <div
                  className="flex flex-wrap gap-2 mb-6"
                  role="list"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.technologies.map((tech) => {
                    const iconSlug = getIconSlug(tech);

                    return (
                      <span key={tech} className="tech-badge" role="listitem">
                        {iconSlug && (
                          <img
                            src={`https://cdn.simpleicons.org/${iconSlug}`}
                            alt=""
                            className="w-3.5 h-3.5 opacity-70"
                            loading="lazy"
                            aria-hidden="true"
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
                      aria-label={`View ${project.title} demo (opens in new tab)`}
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent-custom font-medium transition-all duration-300 hover:translate-x-1"
                      aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </SectionCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
