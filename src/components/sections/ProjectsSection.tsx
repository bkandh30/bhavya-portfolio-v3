import type React from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionCard } from "@/components/shared/SectionCard";
import { getIconSlug } from "@/utils/icon-mapping";

export const ProjectsSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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

      <div className="space-y-12">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-custom">
            Featured Work
          </h3>
          <ul className="mt-6 space-y-8" role="list">
            {featuredProjects.map((project) => (
              <li key={project.id} role="listitem">
                <SectionCard>
                  <div className="flex flex-col">
                    <h3 className="card-title">{project.title}</h3>

                    <p className="text-sm text-secondary-custom leading-normal mb-4">
                      {project.description}
                    </p>

                    {(project.role || project.focus) && (
                      <div className="mb-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-secondary-custom">
                        {project.role && <span>{project.role}</span>}
                        {project.focus && <span>{project.focus}</span>}
                      </div>
                    )}

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

                    <div className="flex gap-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-accent-custom font-medium transition-all duration-300 hover:translate-x-1 link-underline"
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
                          className="inline-flex items-center gap-2 text-sm text-accent-custom font-medium transition-all duration-300 hover:translate-x-1 link-underline"
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
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-custom">
            More Projects
          </h3>
          <ul className="mt-6 space-y-6" role="list">
            {otherProjects.map((project) => (
              <li key={project.id} role="listitem">
                <SectionCard>
                  <div className="flex flex-col">
                    <h3 className="card-title">{project.title}</h3>

                    <p className="text-sm text-secondary-custom leading-normal mb-4">
                      {project.description}
                    </p>

                    <div className="flex gap-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-accent-custom font-medium transition-all duration-300 hover:translate-x-1 link-underline"
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
                          className="inline-flex items-center gap-2 text-sm text-accent-custom font-medium transition-all duration-300 hover:translate-x-1 link-underline"
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
        </div>
      </div>
    </section>
  );
};
