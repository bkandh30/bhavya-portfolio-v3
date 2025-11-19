import { skillCategories } from "@/data/skills";

const getIconSlug = (skill: string): string | null => {
  const slugMap: Record<string, string> = {
    "C++": "cplusplus",
    "C#": "csharp",
    ".NET": "dotnet",
    "React.js": "react",
    "Next.js": "nextdotjs",
    "Node.js": "nodedotjs",
    "Express.js": "express",
    "Vue.js": "vuedotjs",
    AWS: "amazonwebservices",
    "Git/GitHub": "github",
    Golang: "go",
    PostgreSQL: "postgresql",
    MySQL: "mysql",
    MongoDB: "mongodb",
    Docker: "docker",
    Kubernetes: "kubernetes",
    TailwindCSS: "tailwindcss",
    TypeScript: "typescript",
    JavaScript: "javascript",
    Python: "python",
    Rust: "rust",
    HTML: "html5",
    CSS: "css3",
    FastAPI: "fastapi",
    Warp: "warp",
    Linux: "linux",
    "GitHub Actions": "githubactions",
    Prometheus: "prometheus",
    Grafana: "grafana",
    Redis: "redis",
    "Power BI": "powerbi",
    Tableau: "tableau",
    "AWS QuickSight": "amazonquicksight",
    BoltDB: "boltdb",
  };

  if (
    [
      "Agile",
      "Scrum",
      "Microservices",
      "Distributed Systems",
      "Scalability",
      "Fault Tolerance",
      "Observability",
      "Version Control",
    ].includes(skill)
  ) {
    return null;
  }

  return slugMap[skill] || skill.toLowerCase().replace(/\./g, "dot");
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2
        className="text-xs uppercase tracking-widest font-bold mb-6 flex items-center"
        style={{ color: "hsl(48 20% 20%)" }}
      >
        Skills
      </h2>
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#3d3929",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                opacity: 0.8,
              }}
            >
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const iconSlug = getIconSlug(skill);

                return (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-sm flex items-center gap-2.5 group cursor-default"
                    style={{
                      fontSize: "13px",
                      backgroundColor: "white",
                      color: "#3d3929",
                      border: "1px solid rgba(201, 100, 66, 0.15)",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                    }}
                  >
                    {iconSlug && (
                      <img
                        src={`https://cdn.simpleicons.org/${iconSlug}`}
                        alt=""
                        className="w-3.5 h-3.5 transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <span className="font-medium">{skill}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
