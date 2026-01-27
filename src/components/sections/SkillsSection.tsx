import { memo } from "react";
import { skillCategories } from "@/data/skills";
import { getIconSlug } from "@/utils/icon-mapping";

export const SkillsSection = memo(function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading" className="section-heading">
        Skills
      </h2>

      <p className="section-intro">
        The languages, frameworks, and platforms I use to deliver production
        systems.
      </p>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-sm font-semibold text-primary-custom mb-4 uppercase tracking-wider opacity-80">
              {category.category}
            </h3>

            <div
              className="flex flex-wrap gap-3"
              role="list"
              aria-label={`${category.category} skills`}
            >
              {category.skills.map((skill) => {
                const iconSlug = getIconSlug(skill);

                return (
                  <span
                    key={skill}
                    className="tech-badge-lg group"
                    role="listitem"
                  >
                    {iconSlug && (
                      <img
                        src={`https://cdn.simpleicons.org/${iconSlug}`}
                        alt=""
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5"
                        loading="lazy"
                        aria-hidden="true"
                        onError={(
                          e: React.SyntheticEvent<HTMLImageElement, Event>
                        ) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <span className="font-medium">{skill}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
