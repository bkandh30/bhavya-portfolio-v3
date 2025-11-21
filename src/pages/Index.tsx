import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { MobileNav } from "@/components/layout/MobileNav";
import { BackToTop } from "@/components/layout/BackToTop";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useFadeInObserver } from "@/hooks/useFadeInObserver";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const SECTION_IDS = [
  "about",
  "experience",
  "skills",
  "education",
  "projects",
] as const;

const Index = () => {
  const activeSection = useActiveSection(SECTION_IDS);
  const mousePosition = useMousePosition(true);
  const scrollToSection = useScrollToSection();

  useSmoothScroll();
  useFadeInObserver();

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "hsl(48 38% 96%)" }}
    >
      {/* Cursor spotlight effect - disabled on mobile for performance */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 239, 204, 0.25), transparent 80%)`,
        }}
      />

      <MobileNav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <BackToTop />

      {/* Fixed Sidebar - Only on large screens */}
      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="lg:ml-[45%] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 space-y-10 sm:space-y-12">
          {/* Mobile Hero - Only visible on small screens */}
          <MobileHeader />

          {/* About Section */}
          <AboutSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Education Section */}
          <EducationSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
