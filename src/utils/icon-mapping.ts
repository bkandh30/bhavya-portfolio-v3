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
  ["Drizzle", "drizzle"],

  // Frontend
  ["HTML", "html5"],
  ["CSS", "css"],
  ["TailwindCSS", "tailwindcss"],
  ["Tailwind CSS", "tailwindcss"],

  // Databases
  ["PostgreSQL", "postgresql"],
  ["MySQL", "mysql"],
  ["MongoDB", "mongodb"],
  ["Redis", "redis"],
  ["Turso", "turso"],
  ["Upstash Redis", "upstash"],

  // Cloud & Infrastructure
  ["Docker", "docker"],
  ["Kubernetes", "kubernetes"],
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
  "Warp",
  "Celery",
  "BoltBD",

  "AWS",
  "Lambda",
  "S3",
  "CloudFront",
  "DynamoDB",
  "AWS Quicksight",

  "Power BI",
  "Tableau",
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
