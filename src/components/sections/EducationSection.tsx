import { education } from "@/data/education";

export const EducationSection = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <h2 className="section-heading">Education</h2>

      <div className="space-y-8">
        {education.map((edu) => (
          <div key={edu.id} className="card-hover">
            {/* Left border accent */}
            <span className="border-accent" />

            <div className="flex flex-col md:flex-row md:gap-8">
              {/* Date Column */}
              <div className="md:w-1/4 mb-2 md:mb-0">
                <span className="date-range">{edu.dateRange}</span>
              </div>

              {/* Content Column */}
              <div className="md:w-3/4">
                <h3 className="card-title">{edu.degree}</h3>
                <p className="card-description">
                  {edu.institution} · {edu.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
