import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/shared/SocialLinks";

interface SidebarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Sidebar = ({ activeSection, scrollToSection }: SidebarProps) => {
  const sections = ["about", "experience", "skills", "education", "projects"];

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
        <SocialLinks />
      </div>
    </aside>
  );
};
