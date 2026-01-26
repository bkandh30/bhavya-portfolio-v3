import { education } from "@/data/education";
import {
  SectionCard,
  SectionCardLayout,
} from "@/components/shared/SectionCard";

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="scroll-mt-24"
      aria-labelledby="education-heading"
    >
      <h2 id="education-heading" className="section-heading">
        Education
      </h2>

      <p className="section-intro">
        Academic background and coursework that shaped my systems focus.
      </p>

      <ul className="space-y-8" role="list">
        {education.map((edu) => (
          <li key={edu.id} role="listitem">
            <SectionCard>
              <SectionCardLayout dateRange={edu.dateRange}>
                <h3 className="card-title">{edu.degree}</h3>
                <p className="card-description">
                  {edu.institution} · {edu.location}
                </p>
              </SectionCardLayout>
            </SectionCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
