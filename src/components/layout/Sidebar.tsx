import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { toast } from "sonner";

interface SidebarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Sidebar = ({ activeSection, scrollToSection }: SidebarProps) => {
  const sections = ["about", "experience", "skills", "education", "projects"];
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ): void => {
    e.preventDefault();
    const email = url.replace("mailto:", "");

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        toast.success("Email copied to clipboard!");

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error: unknown) => {
        console.error("Failed to copy email:", error);
        toast.error("Failed to copy email");
      });
  };

  return (
    <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[45%] lg:flex lg:items-center lg:justify-center lg:p-24">
      <div className="max-w-md w-full">
        <div className="relative h-28 w-28 mb-6 ring-1 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg rounded-full overflow-hidden">
          <picture>
            <source srcSet={personalInfo.avatar.webp} type="image/webp" />
            <img
              src={personalInfo.avatar.png}
              alt={personalInfo.avatar.alt}
              width={112}
              height={112}
              className="object-cover w-full h-full"
              loading="eager"
            />
          </picture>
        </div>

        <h1 className="text-5xl font-bold mb-2 text-[hsl(48_20%_20%)]">
          {personalInfo.name}
        </h1>

        <h2 className="text-xl font-semibold mb-4 text-[hsl(48_20%_20%)]">
          {personalInfo.title}
        </h2>

        <p className="mb-8 text-[hsl(48_3%_50%)]">{personalInfo.bio}</p>

        {/* Navigation */}
        <nav className="mb-12 hidden lg:block">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`group flex items-center text-xs uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm ${
                    activeSection === section ? "font-bold" : "font-medium"
                  }`}
                  style={{
                    color:
                      activeSection === section
                        ? "hsl(48 20% 20%)"
                        : "hsl(48 3% 50%)",
                  }}
                >
                  <span
                    className="inline-block h-px transition-all duration-300 mr-4"
                    style={{
                      width: activeSection === section ? "64px" : "32px",
                      backgroundColor:
                        activeSection === section
                          ? "hsl(48 20% 20%)"
                          : "hsl(48 3% 50%)",
                    }}
                  />
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-8">
          {personalInfo.social.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (link.platform === "email") {
                  handleCopyEmail(e, link.url);
                }
              }}
              className="text-[hsl(48_3%_50%)] transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded cursor-pointer"
              aria-label={link.label}
            >
              {link.icon === "github" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )}
              {link.icon === "linkedin" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              )}
              {link.icon === "mail" &&
                (isCopied ? (
                  <Check className="w-9 h-9" strokeWidth={1.5} />
                ) : (
                  <Mail className="w-9 h-9" strokeWidth={1.5} />
                ))}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
