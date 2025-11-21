import { skillCategories } from "@/data/skills";
import { getIconSlug } from "@/utils/icon-mapping";

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="section-heading">Skills</h2>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-sm font-semibold text-primary-custom mb-4 uppercase tracking-wider opacity-80">
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const iconSlug = getIconSlug(skill);

                return (
                  <span key={skill} className="tech-badge-lg group">
                    {iconSlug && (
                      <img
                        src={`https://cdn.simpleicons.org/${iconSlug}`}
                        alt=""
                        className="w-3.5 h-3.5"
                        loading="lazy"
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
};
