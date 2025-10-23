import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24">
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
        About
      </h2>
      <div
        className="space-y-4 p-6 rounded-lg"
        style={{
          backgroundColor: "#ede9de",
          border: "1px solid rgba(201, 100, 66, 0.2)",
          minHeight: "200px",
        }}
      >
        <p
          style={{
            color: "#3d3929",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          I'm a software engineer with a focus on building reliable backend
          systems and developer tools that make complex infrastructure feel
          effortless. My work blends backend engineering, cloud systems, and
          AI-driven workflows — all aimed at improving developer experience and
          scalability.
        </p>
        <p
          style={{
            color: "#3d3929",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Recently, I graduated from Arizona State University with Master's in
          Computer Science, where I explore distributed systems, cloud
          computing, and data processing at scale. Outside of academics, I've
          worked at Ernst & Young and the Ira A. Fulton Schools of Engineering,
          where I built automation pipelines, data platforms, and APIs that
          powered large-scale evaluation systems and analytics workflows.
        </p>
        <p
          style={{
            color: "#3d3929",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Lately, I've been experimenting with Rust, Go, and TypeScript —
          pushing my craft toward building faster, more resilient systems.
        </p>
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl transition-all duration-300 group backdrop-blur-sm cursor-pointer"
          style={{
            background: "rgba(201, 100, 66, 0.1)",
            border: "1px solid rgba(201, 100, 66, 0.3)",
            color: "#c96442",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(201, 100, 66, 0.08)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#c96442";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.borderColor = "#c96442";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(201, 100, 66, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(201, 100, 66, 0.1)";
            e.currentTarget.style.color = "#c96442";
            e.currentTarget.style.borderColor = "rgba(201, 100, 66, 0.3)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(201, 100, 66, 0.08)";
          }}
        >
          View Full Résumé
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </section>
  );
};
