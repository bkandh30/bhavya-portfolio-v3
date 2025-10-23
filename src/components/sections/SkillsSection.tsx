import { skillCategories } from "@/data/skills";

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2
        className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
        style={{ color: "hsl(48 20% 20%)" }}
      >
        <span
          className="inline-block h-px mr-4"
          style={{
            width: "64px",
            backgroundColor: "hsl(48 20% 20%)",
          }}
        />
        Skills
      </h2>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#3d3929",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    fontSize: "13px",
                    backgroundColor: "rgba(201, 100, 66, 0.1)",
                    color: "#c96442",
                    border: "1px solid rgba(201, 100, 66, 0.2)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
