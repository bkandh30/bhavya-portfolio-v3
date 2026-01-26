import { experiences } from "@/data/experience";
import {
  SectionCard,
  SectionCardLayout,
} from "@/components/shared/SectionCard";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="section-heading">
        Experience
      </h2>

      <p className="section-intro">
        Roles where I shipped backend infrastructure, automation, and developer
        tooling.
      </p>

      <ul className="space-y-8" role="list">
        {experiences.map((exp) => (
          <li key={exp.id} role="listitem">
              <SectionCard>
                <SectionCardLayout dateRange={exp.dateRange}>
                  <h3 className="card-title">
                    {exp.role} · {exp.company}
                  </h3>
                  <p className="card-description">{exp.description}</p>

                  {exp.scope && exp.scope.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.scope.map((item) => (
                        <span key={item} className="tech-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </SectionCardLayout>
              </SectionCard>
            </li>
        ))}
      </ul>
    </section>
  );
};
