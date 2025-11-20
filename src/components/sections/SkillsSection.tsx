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

  const genericSkills = [
    "Agile",
    "Scrum",
    "Microservices",
    "Distributed Systems",
    "Scalability",
    "Fault Tolerance",
    "Observability",
    "Version Control",
  ];

  if (genericSkills.includes(skill)) {
    return null;
  }

  return slugMap[skill] || skill.toLowerCase().replace(/\./g, "dot");
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="section-heading">Skills</h2>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.category}>
            <h3 className="text-sm font-semibold text-primary-custom mb-4 uppercase tracking-wider opacity-80">
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const iconSlug = getIconSlug(skill);

                return (
                  <span key={skill} className="tech-badge-lg group">
                    {iconSlug && (
                      <img
                        src={`https://cdn.simpleicons.org/${iconSlug}`}
                        alt=""
                        className="w-3.5 h-3.5"
                        loading="lazy"
                        onError={(
                          e: React.SyntheticEvent<HTMLImageElement, Event>
                        ) => {
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
