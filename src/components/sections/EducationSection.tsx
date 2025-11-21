import { education } from "@/data/education";
import {
  SectionCard,
  SectionCardLayout,
} from "@/components/shared/SectionCard";

export const EducationSection = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <h2 className="section-heading">Education</h2>

      <div className="space-y-8">
        {education.map((edu) => (
          <SectionCard key={edu.id}>
            <SectionCardLayout dateRange={edu.dateRange}>
              <h3 className="card-title">{edu.degree}</h3>
              <p className="card-description">
                {edu.institution} · {edu.location}
              </p>
            </SectionCardLayout>
          </SectionCard>
        ))}
      </div>
    </section>
  );
};
