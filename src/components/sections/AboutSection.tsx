export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="section-heading">
        About
      </h2>
      <div className="space-y-4 p-6 rounded-lg bg-card-custom border border-[rgba(201,100,66,0.2)] min-h-[200px]">
        <p className="text-[#3d3929] text-base font-normal leading-[1.6]">
          I'm a software engineer with a focus on building reliable backend
          systems and developer tools that make complex infrastructure feel
          effortless. My work blends backend engineering, cloud systems, and
          AI-driven workflows — all aimed at improving developer experience and
          scalability.
        </p>

        <p className="text-[#3d3929] text-base font-normal leading-[1.6]">
          Recently, I graduated from Arizona State University with Master's in
          Computer Science, where I explore distributed systems, cloud
          computing, and data processing at scale. Outside of academics, I've
          worked at Ernst & Young and the Ira A. Fulton Schools of Engineering,
          where I built automation pipelines, data platforms, and APIs that
          powered large-scale evaluation systems and analytics workflows.
        </p>

        <p className="text-[#3d3929] text-base font-normal leading-[1.6]">
          Lately, I've been experimenting with Rust, Go, and TypeScript —
          pushing my craft toward building faster, more resilient systems.
        </p>
      </div>
    </section>
  );
};
