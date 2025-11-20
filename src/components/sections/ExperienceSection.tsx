import { experiences } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="section-heading">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="card-hover">
            {/* Left border accent */}
            <span className="border-accent" />

            <div className="flex flex-col md:flex-row md:gap-8">
              {/* Date Column */}
              <div className="md:w-1/4 mb-2 md:mb-0">
                <span className="date-range">{exp.dateRange}</span>
              </div>

              {/* Content Column */}
              <div className="md:w-3/4">
                <h3 className="card-title">
                  {exp.role} · {exp.company}
                </h3>
                <p className="card-description">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
