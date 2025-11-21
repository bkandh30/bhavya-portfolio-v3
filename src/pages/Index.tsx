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
import { SkipToContent } from "@/components/error/SkipToContent";
import { SectionErrorBoundary } from "@/components/error/SectionErrorBoundary";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useFadeInObserver } from "@/hooks/useFadeInObserver";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

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
  useKeyboardNavigation(SECTION_IDS, activeSection, scrollToSection);

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: "hsl(48 38% 96%)" }}
    >
      {/* Skip to content link for keyboard users */}
      <SkipToContent />

      {/* Cursor spotlight effect - disabled on mobile for performance */}
      <div
        className="spotlight-effect pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 239, 204, 0.25), transparent 80%)`,
        }}
        aria-hidden="true"
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
      <main
        id="main-content"
        className="lg:ml-[45%] min-h-screen"
        tabIndex={-1}
        role="main"
        aria-label="Main content"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 space-y-10 sm:space-y-12">
          {/* Mobile Hero - Only visible on small screens */}
          <MobileHeader />

          {/* About Section */}
          <SectionErrorBoundary sectionName="About">
            <AboutSection />
          </SectionErrorBoundary>

          {/* Experience Section */}
          <SectionErrorBoundary sectionName="Experience">
            <ExperienceSection />
          </SectionErrorBoundary>

          {/* Skills Section */}
          <SectionErrorBoundary sectionName="Skills">
            <SkillsSection />
          </SectionErrorBoundary>

          {/* Education Section */}
          <SectionErrorBoundary sectionName="Education">
            <EducationSection />
          </SectionErrorBoundary>

          {/* Projects Section */}
          <SectionErrorBoundary sectionName="Projects">
            <ProjectsSection />
          </SectionErrorBoundary>

          {/* Footer */}
          <Footer />
        </div>
      </main>

      {/* Screen reader announcement for keyboard navigation */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Use Alt + Arrow keys to navigate between sections. Currently viewing:{" "}
        {activeSection}
      </div>
    </div>
  );
};

export default Index;
