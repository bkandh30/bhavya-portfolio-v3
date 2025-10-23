import { education } from "@/data/education";

export const EducationSection = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <h2
        className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
        style={{ color: "hsl(48 20% 20%)" }}
      >
        Education
      </h2>
      <div className="space-y-8">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="group relative p-6 rounded-lg transition-all duration-300 overflow-hidden"
            style={{ border: "1px solid rgba(201, 100, 66, 0.1)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ede9de";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(201, 100, 66, 0.1)";
              const title = e.currentTarget.querySelector("h3");
              if (title) (title as HTMLElement).style.color = "#c96442";
              const borderLine =
                e.currentTarget.querySelector(".border-accent");
              if (borderLine) (borderLine as HTMLElement).style.height = "80px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              const title = e.currentTarget.querySelector("h3");
              if (title) (title as HTMLElement).style.color = "#3d3929";
              const borderLine =
                e.currentTarget.querySelector(".border-accent");
              if (borderLine) (borderLine as HTMLElement).style.height = "0px";
            }}
          >
            {/* Left border accent */}
            <span
              className="border-accent absolute top-0 left-0 w-1 transition-all duration-300"
              style={{
                height: "0px",
                backgroundColor: "#c96442",
              }}
            />
            <div className="flex flex-col md:flex-row md:gap-8">
              {/* Date Column */}
              <div className="md:w-1/4 mb-2 md:mb-0">
                <span
                  style={{
                    fontSize: "12px",
                    color: "#83827d",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {edu.dateRange}
                </span>
              </div>

              {/* Content Column */}
              <div className="md:w-3/4">
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#3d3929",
                    marginBottom: "8px",
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#83827d",
                    marginBottom: "12px",
                  }}
                >
                  {edu.institution} · {edu.location}
                </p>

                {/* Coursework */}
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#3d3929",
                      marginBottom: "8px",
                    }}
                  >
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-full"
                        style={{
                          fontSize: "13px",
                          backgroundColor: "rgba(201, 100, 66, 0.1)",
                          color: "#c96442",
                          border: "1px solid rgba(201, 100, 66, 0.2)",
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
