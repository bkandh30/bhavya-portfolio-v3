import { experiences } from "@/data/experience";
import {
  SectionCard,
  SectionCardLayout,
} from "@/components/shared/SectionCard";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="section-heading">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <SectionCard key={exp.id}>
            <SectionCardLayout dateRange={exp.dateRange}>
              <h3 className="card-title">
                {exp.role} · {exp.company}
              </h3>
              <p className="card-description">{exp.description}</p>
            </SectionCardLayout>
          </SectionCard>
        ))}
      </div>
    </section>
  );
};
