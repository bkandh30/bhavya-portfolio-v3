import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const MobileNav = ({
  activeSection,
  scrollToSection,
}: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <>
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <Button
          size="icon"
          className="rounded-full h-13 w-13 border-2 border-white/20 shadow-2xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-7 w-7" strokeWidth={2.5} />
          ) : (
            <Menu className="h-7 w-7" strokeWidth={2.5} />
          )}
        </Button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden flex items-center justify-center transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8 p-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setIsOpen(false);
              }}
              className={cn(
                "text-3xl font-medium tracking-widest uppercase transition-all duration-200 hover:scale-110",
                activeSection === section.id
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
