// Module-level Map for O(1) slug lookups (hoisted to avoid recreation on each call)
const SLUG_MAP = new Map<string, string>([
  // Languages
  ["C++", "cplusplus"],
  ["C#", "csharp"],
  ["TypeScript", "typescript"],
  ["JavaScript", "javascript"],
  ["Python", "python"],
  ["Rust", "rust"],
  ["Golang", "go"],
  ["Go", "go"],

  // Frameworks & Libraries
  [".NET", "dotnet"],
  ["React.js", "react"],
  ["React", "react"],
  ["Next.js", "nextdotjs"],
  ["Node.js", "nodedotjs"],
  ["Express.js", "express"],
  ["Vue.js", "vuedotjs"],
  ["FastAPI", "fastapi"],
  ["Warp", "warp"],
  ["Drizzle", "drizzle"],
  ["Celery", "celery"],

  // Frontend
  ["HTML", "html5"],
  ["CSS", "css3"],
  ["TailwindCSS", "tailwindcss"],
  ["Tailwind CSS", "tailwindcss"],

  // Databases
  ["PostgreSQL", "postgresql"],
  ["MySQL", "mysql"],
  ["MongoDB", "mongodb"],
  ["Redis", "redis"],
  ["Turso", "turso"],
  ["Upstash Redis", "upstash"],
  ["DynamoDB", "amazondynamodb"],
  ["BoltDB", "boltdb"],

  // Cloud & Infrastructure
  ["AWS", "amazonwebservices"],
  ["Docker", "docker"],
  ["Kubernetes", "kubernetes"],
  ["Lambda", "awslambda"],
  ["S3", "amazons3"],
  ["CloudFront", "amazoncloudfront"],
  ["Vercel", "vercel"],

  // DevOps & Tools
  ["Git/GitHub", "github"],
  ["Github Actions", "githubactions"],
  ["GitHub Actions", "githubactions"],
  ["Linux", "linux"],
  ["Prometheus", "prometheus"],
  ["Grafana", "grafana"],

  // Auth
  ["JWT", "jsonwebtokens"],

  // Analytics
  ["Power BI", "powerbi"],
  ["Tableau", "tableau"],
  ["AWS QuickSight", "amazonquicksight"],
]);

// Module-level Set for O(1) generic term lookups
const GENERIC_TERMS = new Set<string>([
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
]);

export function getIconSlug(tech: string): string | null {
  // O(1) Set lookup instead of O(n) array includes
  if (GENERIC_TERMS.has(tech)) {
    return null;
  }

  // O(1) Map lookup instead of O(n) object property access
  const slug = SLUG_MAP.get(tech);
  if (slug) {
    return slug;
  }

  // Fallback: convert tech name to slug format
  return tech.toLowerCase().replace(/\./g, "dot");
}
