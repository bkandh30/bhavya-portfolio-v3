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

      <ul className="space-y-8" role="list">
        {experiences.map((exp) => (
          <li key={exp.id} role="listitem">
            <SectionCard>
              <SectionCardLayout dateRange={exp.dateRange}>
                <h3 className="card-title">
                  {exp.role} · {exp.company}
                </h3>
                <p className="card-description">{exp.description}</p>
              </SectionCardLayout>
            </SectionCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
