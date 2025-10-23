export const Footer = () => {
  return (
    <footer className="mt-24 pb-16">
      <div className="text-center space-y-4">
        <p
          style={{
            fontSize: "14px",
            color: "#83827d",
            lineHeight: "1.6",
          }}
        >
          Coded in <span style={{ color: "#c96442" }}>VS Code</span> by yours
          truly. Built with <span style={{ color: "#c96442" }}>React</span> &{" "}
          <span style={{ color: "#c96442" }}>TypeScript</span>, styled with{" "}
          <span style={{ color: "#c96442" }}>Tailwind CSS</span> and
          <span style={{ color: "#c96442" }}> Shadcn/UI</span>, and deployed on{" "}
          <span style={{ color: "#c96442" }}>Vercel</span>. Text is set in the{" "}
          <span style={{ color: "#c96442" }}>Inter</span> typeface.
        </p>
        <p style={{ fontSize: "12px", color: "#83827d", marginTop: "8px" }}>
          © {new Date().getFullYear()} Bhavya Kandhari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
