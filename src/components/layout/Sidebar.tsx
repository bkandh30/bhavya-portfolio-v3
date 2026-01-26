import { personalInfo } from "@/data/personal";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const Sidebar = ({ activeSection, scrollToSection }: SidebarProps) => {
  const sections = ["about", "experience", "skills", "education", "projects"];
  const emailLink = personalInfo.social.find(
    (link) => link.platform === "email"
  )?.url;

  return (
    <aside
      className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[45%] lg:flex lg:items-center lg:justify-center lg:p-24"
      aria-label="Profile and navigation"
    >
      <div className="max-w-md w-full">
        <div className="relative h-28 w-28 mb-6 ring-1 ring-primary/20 ring-offset-4 ring-offset-background shadow-lg rounded-full overflow-hidden">
          <OptimizedImage
            src={personalInfo.avatar.png}
            webpSrc={personalInfo.avatar.webp}
            alt={personalInfo.avatar.alt}
            width={112}
            height={112}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <h1 className="text-5xl font-extrabold mb-2 text-[hsl(48_20%_20%)]">
          {personalInfo.name}
        </h1>

        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary-custom">
          {personalInfo.title}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-secondary-custom">
          I build reliable backend systems and developer tools that scale
          products and teams.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="sm" className="rounded-full">
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full"
            onClick={() => scrollToSection("projects")}
          >
            Featured Work
          </Button>
          {emailLink && (
            <Button asChild size="sm" variant="outline" className="rounded-full">
              <a href={emailLink}>Contact</a>
            </Button>
          )}
        </div>

        <div className="mt-6 rounded-lg border border-[rgba(185,91,62,0.2)] bg-card-custom p-4">
          <p className="text-xs uppercase text-secondary-custom font-semibold">
            Now
          </p>
          <p className="mt-2 text-sm text-primary-custom">
            Open to backend + platform roles. Focused on distributed systems,
            infrastructure tooling, and developer experience.
          </p>
        </div>


        {/* Navigation */}
        <nav className="mb-12 mt-10 hidden lg:block" aria-label="Main navigation">
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
                  aria-current={activeSection === section ? "page" : undefined}
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
                    aria-hidden="true"
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
