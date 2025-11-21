export function getIconSlug(tech: string): string | null {
  const slugMap: Record<string, string> = {
    "C++": "cplusplus",
    "C#": "csharp",
    TypeScript: "typescript",
    JavaScript: "javascript",
    Python: "python",
    Rust: "rust",
    Golang: "go",
    Go: "go",
    
    ".NET": "dotnet",
    "React.js": "react",
    React: "react",
    "Next.js": "nextdotjs",
    "Node.js": "nodedotjs",
    "Express.js": "express",
    "Vue.js": "vuedotjs",
    FastAPI: "fastapi",
    Warp: "warp",
    Drizzle: "drizzle",
    Celery: "celery",
    
    HTML: "html5",
    CSS: "css3",
    TailwindCSS: "tailwindcss",
    "Tailwind CSS": "tailwindcss",
    
    PostgreSQL: "postgresql",
    MySQL: "mysql",
    MongoDB: "mongodb",
    Redis: "redis",
    Turso: "turso",
    "Upstash Redis": "upstash",
    DynamoDB: "amazondynamodb",
    BoltDB: "boltdb",
    
    AWS: "amazonwebservices",
    Docker: "docker",
    Kubernetes: "kubernetes",
    Lambda: "awslambda",
    S3: "amazons3",
    CloudFront: "amazoncloudfront",
    Vercel: "vercel",
    
    "Git/GitHub": "github",
    "Github Actions": "githubactions",
    "GitHub Actions": "githubactions",
    Linux: "linux",
    Prometheus: "prometheus",
    Grafana: "grafana",
    
    JWT: "jsonwebtokens",
    
    "Power BI": "powerbi",
    Tableau: "tableau",
    "AWS QuickSight": "amazonquicksight",
  };

  const genericTerms = [
    "Agile",
    "Scrum",
    "Microservices",
    "Distributed Systems",
    "Scalability",
    "Fault Tolerance",
    "Observability",
    "Version Control",
    "SQLx",
    "Logging",
    "Metrics",
    "AsyncIO",
    "NLTK",
    "CI/CD",
  ];

  if (genericTerms.includes(tech)) {
    return null;
  }

  return slugMap[tech] || tech.toLowerCase().replace(/\./g, "dot");
}