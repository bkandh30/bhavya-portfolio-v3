export const Footer = () => {
  return (
    <footer className="mt-24 pb-16">
      <div className="text-center space-y-4">
        <p className="text-sm text-secondary-custom leading-tight">
          Coded in <span className="text-accent-custom">VS Code</span> by yours
          truly. Built with <span className="text-accent-custom">React</span> &{" "}
          <span className="text-accent-custom">TypeScript</span>, styled with{" "}
          <span className="text-accent-custom">Tailwind CSS</span> and
          <span className="text-accent-custom"> Shadcn/UI</span>, and deployed
          on <span className="text-accent-custom">Vercel</span>. Text is set in
          the <span className="text-accent-custom">Inter</span> typeface.
        </p>
        <p className="text-xs text-secondary-custom mt-2">
          © {new Intl.DateTimeFormat("en", { year: "numeric" }).format(new Date())} Bhavya Kandhari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
