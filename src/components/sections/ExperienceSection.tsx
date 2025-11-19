import { experiences } from "@/data/experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2
        className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
        style={{ color: "hsl(48 20% 20%)" }}
      >
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
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
                  {exp.dateRange}
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
                  {exp.role} · {exp.company}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#83827d",
                    lineHeight: "1.7",
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
